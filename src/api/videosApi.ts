import { api } from './api';

import { getSearchParamFromURL } from '@/utils/getSearchParamFromURL';

import type { SearchAIMovie, GetList, BaseParams, Video, CreateVideoType, VideoParams } from '@/types';

const PATH = 'videos';

const searchPATH = 'videos/search/';

export const videosAPI = api.injectEndpoints({
  endpoints: (build) => ({
    getVideos: build.query<Video[], { params?: VideoParams }>({
      query: ({ params }) => ({
        url: `${PATH}/`,
        method: 'GET',
        params,
      }),
      transformResponse: (data: GetList<Video>) => data.results,

      providesTags: (result) =>
        result
          ? [...result.map(({ publicId: id }) => ({ type: 'videos' as const, id })), { type: 'videos', id: 'LIST' }]
          : [{ type: 'videos', id: 'LIST' }],
    }),

    getMyVideos: build.query<Video[], { params?: BaseParams }>({
      query: ({ params }) => ({
        url: `${PATH}/my/`,
        method: 'GET',
        params,
      }),
      transformResponse: (data: GetList<Video>) => data.results,

      providesTags: (result) =>
        result
          ? [...result.map(({ publicId: id }) => ({ type: 'videos' as const, id })), { type: 'videos', id: 'LIST' }]
          : [{ type: 'videos', id: 'LIST' }],
    }),

    getMovieById: build.query<Video, { id: string }>({
      query: ({ id }) => ({
        url: `${PATH}/${id}/`,
        method: 'GET',
      }),
      providesTags: [{ type: 'videos', id: 'ONE' }],
    }),

    createVideo: build.mutation<Video, CreateVideoType>({
      query: (body) => ({
        url: `${PATH}/`,
        method: 'POST',
        body,
      }),
      invalidatesTags: (result) =>
        result
          ? [
            { type: 'videos', id: result.publicId },
            { type: 'videos', id: 'LIST' },
          ]
          : [{ type: 'videos', id: 'LIST' }],
    }),

    deleteVideo: build.mutation<string, { id: string }>({
      query: ({ id }) => ({
        url: `${PATH}/${id}/`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, _, { id }) =>
        result
          ? [{ type: 'personal_playlist' }, { type: 'videos', id }]
          : [
            { type: 'personal_playlist', id: 'one' },
            { type: 'videos', id: 'LIST' },
          ],
    }),

    getSearchVideos: build.query<SearchAIMovie[], { search_str?: string | null; playlist_id?: string }>({
      query: ({ search_str = '', playlist_id }) => ({
        url: searchPATH,
        method: 'GET',
        params: {
          search_str,
          playlist_id,
        },
      }),
      providesTags: (result) =>
        result ? result.map(({ publicId: id }) => ({ type: 'searchInPlaylist' as const, id })) : ['searchInPlaylist'],
      transformResponse: (data: SearchAIMovie[]) => {
        return data.map((video) => ({
          ...video,
          timestamp_link: getSearchParamFromURL(video.timestamp_link, 't'),
        }));
      },
    }),
  }),
});

// export const {
//   useGetVideosQuery,
//   useGetMyVideosQuery,
//   useGetSearchVideosQuery,
//   useDeleteVideoMutation,
//   useLazyGetSearchVideosQuery,
//   useGetMovieByIdQuery,
// } = videosAPI;
