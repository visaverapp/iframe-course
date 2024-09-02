import { categories } from './slices';
import modal, { modalsSlice } from './slices/modalsSlice';
import notification, { notificationSlice } from './slices/notificationSlice';
import playlists from './slices/playlistsSlice';
import quizAdmin, { quizAdminSlice } from './slices/quizAdminSlice';
import quiz, { quizSlice } from './slices/quizSlice';
import search, { searchSlice } from './slices/searchSlice';
import timecodesAdmin, { timecodesAdminSlice } from './slices/timecodesAdminSlice';
import user, { authUserSlice } from './slices/userSlice';

import { api } from '@/api/api';

import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import type { Action, ThunkAction } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,

    playlists,
    search,
    user,
    modal,
    notification,
    categories,
    quiz,
    quizAdmin,
    timecodesAdmin,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(api.middleware),
  // devTools: import.meta.env.MODE !== 'production',
});

setupListeners(store.dispatch);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export const rootActions = {
  ...authUserSlice.actions,
  ...modalsSlice.actions,
  ...notificationSlice.actions,
  ...searchSlice.actions,
  ...quizSlice.actions,
  ...timecodesAdminSlice.actions,
  ...quizAdminSlice.actions,
};
