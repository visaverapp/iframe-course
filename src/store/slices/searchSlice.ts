import { createSlice } from '@reduxjs/toolkit';
import {SearchAI} from "@/types/videosTypes";

type searchSliceProps = {
  statusSearch: boolean;
  search: string | null;
  searchAI: SearchAI | null;
};

const initialState: searchSliceProps = {
  statusSearch: false,
  search: null,
  searchAI: null,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchStatus: (state, { payload }: { payload: boolean }) => {
      state.statusSearch = payload;
    },
    setSearchValue: (state, { payload }: { payload: string | null }) => {
      state.search = payload;
    },
    resetSearch: (state) => {
      state.search = null;
      state.statusSearch = false;
    },
  },
});

export default searchSlice.reducer;
