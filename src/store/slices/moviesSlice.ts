import { videosAPI } from '../../api/videosApi';
import { Video } from '../../types';

import { createSlice } from '@reduxjs/toolkit';

type InitialStateType = {
  status: 'idle' | 'loading' | 'failed';
  movies: Video[] | null;
  movie: Video | null;
};

const initialState: InitialStateType = {
  status: 'idle',
  movies: null,
  movie: null,
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(videosAPI.endpoints.getVideos.matchPending, (state) => {
        state.status = 'loading';
      })
      .addMatcher(videosAPI.endpoints.getVideos.matchFulfilled, (state, action) => {
        state.status = 'idle';
        state.movies = action.payload;
      })
      .addMatcher(videosAPI.endpoints.getVideos.matchRejected, (state) => {
        state.status = 'failed';
      })
      .addMatcher(videosAPI.endpoints.getMovieById.matchPending, (state) => {
        state.status = 'loading';
      })
      .addMatcher(videosAPI.endpoints.getMovieById.matchFulfilled, (state, action) => {
        state.status = 'idle';
        state.movie = action.payload;
      })
      .addMatcher(videosAPI.endpoints.getMovieById.matchRejected, (state) => {
        state.status = 'failed';
      });
  },
});

// export const selectMovies = (state: RootState) => state.movies;

export default moviesSlice.reducer;
