import { NotificationType } from '../../types/contentTypes';
import { RootState } from '../store';

import { createSlice } from '@reduxjs/toolkit';

const initialState: NotificationType = {
  isShow: false,
  text: '',
  severity: undefined,
};

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    showNotification: (_, { payload }: { payload: Omit<NotificationType, 'isShow'> }) => {
      // console.log('show');
      return { ...payload, isShow: true };
    },
    closeNotification: (state) => {
      state.isShow = false;
      // state.text = '';
    },
  },
});

export const notification = (state: RootState) => state.notification;

export const { showNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
