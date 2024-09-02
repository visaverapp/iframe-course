import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

export type ModalType =
  | null
  | 'registration'
  | 'login'
  | 'AddPlayList'
  | 'EditPlayList'
  | 'AddVideo'
  | 'AddPlayListVideo'
  | 'AddMobile'
  | 'RemoveUser'
  | 'RemovePlaylist'
  | 'RemoveVideo'
  | 'DropDownMenu'
  | 'emailverify'
  | 'resetpassword'
  | 'setnewpassword'
  | 'resendEmail'
  | 'SuggestVideo'
  | 'WatchSuggestVideo'
  | 'Video'
  | 'currentpassword'
  | 'verifyinfo';


export interface modalSliceState {
  active: ModalType;
  data?: {
    id?: string;
    email?: string;
    token?: string;
    uid?: string;
    type?: string;
    playlistId?: string;
    newPassword?: string;
    previouslySuggestedVideos?: string[];
  };
}

const initialState: modalSliceState = {
  active: null,
};

export const modalsSlice = createSlice({
  name: 'modalsSlice',
  initialState,
  reducers: {
    closeModal: () => initialState,
    openModal: (_, action: PayloadAction<modalSliceState>) => action.payload,
  },
});

export default modalsSlice.reducer;
