import { RootState } from '../store';

import { createSlice } from '@reduxjs/toolkit';
import { decodeToken, isExpired } from 'react-jwt';

import { usersAPI, authAPI } from '@/api';
import { ACCESS_TOKEN, REFRESH_TOKEN, ONBOARDING } from '@/constants';
import { DecodedToken, OnBoardingType, UserStateType } from '@/types';


const getInitialState = () => {

  const refresh = localStorage.getItem(REFRESH_TOKEN);

  const onBoarding = localStorage.getItem(ONBOARDING) as OnBoardingType;
  if (refresh && !isExpired(refresh)) {

    const user_id = (decodeToken(refresh) as DecodedToken).user_id.toString();

    return {
      isAuth: true,
      isCommercial: false,
      user_id,
      username: '',
      email: '',
      onBoarding,
    };
  } else {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    return {
      isAuth: false,
      isCommercial: false,
      user_id: '',
      username: '',
      email: '',
      onBoarding,
    };
  }
};

const initialState: UserStateType = getInitialState();

export const authUserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setFinishedOnboarding: (state) => {
      switch (state.onBoarding) {
        case 'passed':
          state.onBoarding = 'watch';
          localStorage.setItem(ONBOARDING, 'watch');
          break;
        case 'watch':
        default:
          state.onBoarding = 'passed';
          localStorage.setItem(ONBOARDING, 'passed');
      }
    },
    logout: () => {
      localStorage.removeItem(ACCESS_TOKEN);
      localStorage.removeItem(REFRESH_TOKEN);
      const onBoarding = localStorage.getItem(ONBOARDING) as OnBoardingType;


      return {
        isCommercial: false,
        isAuth: false,
        tokenA: null,
        tokenR: null,
        user_id: '',
        username: '',
        email: '',
        onBoarding,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      /** 
       * вход
      */
      .addMatcher(authAPI.endpoints.loginUser.matchFulfilled, (state, action) => {
        const decodedToken: DecodedToken = decodeToken(action.payload.access) as DecodedToken;
        // console.log(decodeToken(action.payload.access))
        state.isAuth = true;

        state.user_id = decodedToken.user_id.toString();
        localStorage.setItem(ACCESS_TOKEN, action.payload.access);
        localStorage.setItem(REFRESH_TOKEN, action.payload.refresh);
      })
      .addMatcher(authAPI.endpoints.refreshToken.matchFulfilled, (_, action) => {
        localStorage.setItem(ACCESS_TOKEN, action.payload.access);
      })
      //------------------------------------------------

      .addMatcher(usersAPI.endpoints.getUserMe.matchFulfilled, (state, action) => {
        state.avatar = action.payload.avatar;
        state.user_id = action.payload.publicId;
        state.username = action.payload.username;
        state.isCommercial = action.payload.isCommercial;
      })

      //выход
      .addMatcher(authAPI.endpoints.logOutUser.matchPending, (state) => {
        state.isAuth = false;

        state.username = '';
        state.user_id = '';
        localStorage.removeItem(REFRESH_TOKEN);
        localStorage.removeItem(ACCESS_TOKEN);
      })

      //обновление

      .addMatcher(usersAPI.endpoints.updateUser.matchFulfilled, (state, action) => {
        state.username = action.payload.username;
        state.email = action.payload.email;
      })
      .addMatcher(usersAPI.endpoints.updatePartialUserMe.matchFulfilled, (state, action) => {
        state.avatar = action.payload.avatar;
      })

      //удаление

      .addMatcher(usersAPI.endpoints.deleteUser.matchFulfilled, () => {
        localStorage.removeItem(ACCESS_TOKEN);
        localStorage.removeItem(ONBOARDING);

        return initialState;
      });
  },
});

export const authUser = (state: RootState) => state.user;

export const { logout } = authUserSlice.actions;

export default authUserSlice.reducer;
