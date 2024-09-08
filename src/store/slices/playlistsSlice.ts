import { createSlice } from '@reduxjs/toolkit';

import { playlistsAPI } from '@/api';
import {Playlist} from "@/types/playlistTypes";

interface playlistsSliceProps {
  playlists: Playlist[];
  playlist: Playlist | null;
  status: 'loading' | 'idle' | 'failed' | null;
}

const initialState: playlistsSliceProps = {
  playlists: [],
  playlist: null,
  status: null,
};

const playlistsSlice = createSlice({
  name: 'playlists',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(playlistsAPI.endpoints.getPlaylists.matchFulfilled, (state, action) => {
      state.status = 'idle';
      state.playlists = action.payload.results;
    });
  },
});

// export const playlists = (state: RootState) => state.playlists;
export default playlistsSlice.reducer;
