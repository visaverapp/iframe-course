// import { baseQueryWithReauth } from './baseQueryWithReauth';

import { createApi } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'visaver',
  tagTypes: [
    'stat',
    'user',
    'userMe',
    'userById',
    'videos',
    'playlist',
    'playlist_relation',
    'playlists',
    'personal_playlist',
    'personal_playlists',
    'personal_playlist_relation',
    'searchAI',
    'searchInPlaylist',
    'categories',
    'quiz',
    'quizzes',
  ],
  // baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
  refetchOnReconnect: true,
  // refetchOnFocus: true,
});
