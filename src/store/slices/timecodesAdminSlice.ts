import { createSlice } from '@reduxjs/toolkit';

import { adminAPI } from '@/api';
import { Timecode } from '@/types';

type playlistsSliceProps = {
  timecodesAdmin: Timecode[];
};

const initialState: playlistsSliceProps = {
  timecodesAdmin: [],
};

export const timecodesAdminSlice = createSlice({
  name: 'timecodesAdmin',
  initialState,
  reducers: {
    updateTimecode: (
      state,
      { payload: { index, updatedData } }: { payload: { index: number; updatedData: Timecode } },
    ) => {
      state.timecodesAdmin[index] = updatedData;
    },
    addTimecode: (state) => {
      state.timecodesAdmin.push({ text: '', title: '', start: 0 });
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(adminAPI.endpoints.getTimecodesAdmin.matchFulfilled, (state, action) => {
      state.timecodesAdmin = action.payload.timecodes;
    });
  },
});

export default timecodesAdminSlice.reducer;