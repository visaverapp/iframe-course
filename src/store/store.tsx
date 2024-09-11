import playlists from './slices/playlistsSlice';
import quiz, {quizSlice} from './slices/quizSlice';
import search, {searchSlice} from './slices/searchSlice';

import {api} from '@/api/api';

import type {Action, ThunkAction} from '@reduxjs/toolkit';
import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,

    playlists,
    search,
    quiz,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(api.middleware),
  devTools: import.meta.env.MODE !== 'production',
});

setupListeners(store.dispatch);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export const rootActions = {
  ...searchSlice.actions,
  ...quizSlice.actions,
};
