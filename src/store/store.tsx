import {Action, configureStore, ThunkAction} from "@reduxjs/toolkit";
import {api} from "@/api/api";
import {setupListeners} from "@reduxjs/toolkit/query";
import search, {searchSlice} from "@/store/slices/searchSlice";
import quiz, {quizSlice} from "@/store/slices/quizSlice";
import playlists from './slices/playlistsSlice';

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
