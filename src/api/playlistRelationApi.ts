import { api } from './api';

// const path = 'playlists/relation';

export const playlistRelationAPI = api.injectEndpoints({
  endpoints: () => ({
    // getRelationById: build.query<UserPlaylistRelationResponse, { id: string | number }>({
    //   query: ({ id }) => ({
    //     url: `${path}/${id}/`,
    //     method: 'GET',
    //   }),
    //   providesTags: (result, _, { id }) =>
    //     result ? [{ type: 'personal_playlist_relation', id }] : [{ type: 'personal_playlist_relation', id: 'ID' }],
    // }),
    // updateRelation: build.mutation<UserPlaylistRelationResponse, { id: string; body: UserPlaylistRelation }>({
    //   query: ({ id, body }) => ({
    //     url: `${path}/${id}/`,
    //     method: 'PATCH',
    //     body,
    //   }),
    //   invalidatesTags: (_, __, { id }) => [
    //     { type: 'playlist', id },
    //     { type: 'playlist', id: 'one' },
    //     { type: 'playlists', id },
    //     { type: 'playlists', id: 'LIST' },
    //     { type: 'personal_playlist', id },
    //     { type: 'personal_playlist', id: 'LIST' },
    //     { type: 'personal_playlists', id: 'LIST' },
    //     { type: 'personal_playlist_relation', id },
    //     { type: 'personal_playlist_relation', id: 'ID' },
    //   ],
    // }),
  }),
});
