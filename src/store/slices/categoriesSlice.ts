import { createSlice } from '@reduxjs/toolkit';

import type { Category } from '@/types';

import { categoriesAPI } from '@/api';

type playlistsSliceProps = {
  categories: Category[];
};

const initialState: playlistsSliceProps = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(categoriesAPI.endpoints.getCategories.matchFulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export default categoriesSlice.reducer;
