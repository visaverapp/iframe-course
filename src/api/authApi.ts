import { api } from './api';

import { Access, LoginUserResponse, Refresh, RegisterUser } from '../types/authTypes';

export const authAPI = api.injectEndpoints({
  endpoints: (build) => ({
    loginUser: build.mutation<LoginUserResponse, RegisterUser>({
      query: (body) => ({
        url: 'auth/login/',
        method: 'POST',
        body,
      }),
      invalidatesTags: [
        { type: 'user', id: 'user' },
        { type: 'personal_playlists', id: 'LIST' },
      ],
    }),

    logOutUser: build.mutation<void, Refresh>({
      query: (body) => ({
        url: 'auth/logout/',
        method: 'POST',
        body,
      }),
      invalidatesTags: [
        { type: 'user', id: 'user' },
        { type: 'personal_playlists', id: 'LIST' },
      ],
    }),

    refreshToken: build.mutation<Access, Refresh>({
      query: (body) => ({
        url: 'auth/refresh/',
        method: 'POST',
        body,
      }),
    }),
  }),
});
