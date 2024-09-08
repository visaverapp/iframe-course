import { api } from './api';

import type {
  GetList,
  BaseParams,
  PlaylistParams,
  QuizApiResponse,
} from '@/types';
import {getSearchParamFromURL} from "@/utils/getSearchParamFromURL";
import {
  CreatePlaylistType,
  PartialUpdatePlaylist,
  Playlist, SummaryResponse,
  TimecodesRequest,
  VideoWithFragments
} from "@/types/playlistTypes";
import {SuggestVideoType} from "@/types/videosTypes";


const path = 'playlists';

export const playlistsAPI = api.injectEndpoints({
  endpoints: (build) => ({
    getPlaylists: build.query<GetList<Playlist>, { params?: PlaylistParams }>({
      query: ({ params }) => ({
        url: `${path}/`,
        method: 'GET',
        params,
      }),
      extraOptions: { maxRetries: 8 },
      // transformErrorResponse: (error: FetchBaseQueryError) => {
      //   console.log(error);
      //   return { status: error.status };
      // },
      providesTags: (result) =>
          result
              ? [
                ...result.results.map(({ publicId: id }) => ({ type: 'playlists' as const, id })),
                { type: 'playlists', id: 'LIST' },
              ]
              : [{ type: 'playlists', id: 'LIST' }],
    }),

    getPlaylistById: build.query<Playlist, { id: string } & { params?: PlaylistParams }>({
      query: ({ id, params }) => ({
        url: `${path}/${id}/`,
        method: 'GET',
        params,
      }),
      providesTags: (result, _, { id }) =>
          result
              ? [
                { type: 'playlist' as const, id },
                { type: 'playlist', id: 'one' },
              ]
              : [{ type: 'playlists', id: 'one' }],
    }),

    getPlaylistsByName: build.query<Playlist[], { name: string }>({
      query: ({ name }) => ({
        url: `${path}/`,
        params: { name },
        method: 'GET',
      }),
      providesTags: (result) =>
          result
              ? [
                ...result.map(({ publicId: id }) => ({ type: 'playlists' as const, id })),
                { type: 'playlists', id: 'LIST' },
              ]
              : [{ type: 'playlists', id: 'LIST' }],
    }),

    //-----------------------------------------------------------------------------------------------------------------------------------
    getMyPlaylists: build.query<GetList<Playlist>, { params?: BaseParams }>({
      query: ({ params }) => ({
        url: `${path}/my/`,
        method: 'GET',
        params,
      }),
      // transformResponse: (data: GetList<PersonalPlaylist>) => data.results,
      providesTags: ['personal_playlists'],
    }),

    addVideoToPlaylist: build.mutation<
        Playlist,
        { playlistId: string; videos: { videoPublicId: string; isAiSuggested: boolean }[] }
    >({
      query: ({ playlistId, videos }) => ({
        url: `${path}/${playlistId}/add-video/`,
        method: 'POST',
        body: { videos },
      }),
      invalidatesTags: (_, __, { playlistId }) => [
        'personal_playlists',
        { type: 'playlist', id: playlistId },
        { type: 'stat', id: 'LIST' },
      ],
    }),

    removeVideoFromPlaylist: build.mutation<Playlist, { playlistId: string; videoPublicId: string }>({
      query: ({ playlistId, videoPublicId }) => ({
        url: `${path}/${playlistId}/remove-video/`,
        method: 'POST',
        body: { videoPublicId },
      }),
      invalidatesTags: (_, __, { playlistId }) => [
        'personal_playlists',
        { type: 'playlist', id: playlistId },
        { type: 'stat', id: 'LIST' },
      ],
    }),

    createPlaylist: build.mutation<Playlist, CreatePlaylistType>({
      query: (body) => ({
        url: `${path}/`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['personal_playlists', { type: 'playlists', id: 'LIST' }, { type: 'stat', id: 'LIST' }],
    }),

    updatePartialPlaylistById: build.mutation<Playlist, { id: string; body: PartialUpdatePlaylist }>({
      query: ({ id, body }) => ({
        url: `${path}/${id}/`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: (_, __, { id }) => [
        'personal_playlists',
        'personal_playlist',
        { type: 'playlists', id },
        { type: 'playlist', id },
      ],
    }),

    updatePlaylistById: build.mutation<Playlist, { id: string; body: CreatePlaylistType }>({
      query: ({ id, body }) => ({
        url: `${path}/${id}/`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: (_, __, { id }) => [
        'personal_playlists',
        'personal_playlist',
        { type: 'playlists', id },
        { type: 'playlist', id },
      ],
    }),

    deletePlaylist: build.mutation<string, Pick<Playlist, 'publicId'>>({
      query: ({ publicId }) => ({
        url: `${path}/${publicId}/`,
        method: 'DELETE',
      }),
      invalidatesTags: (_, __, { publicId }) => [
        'personal_playlists',
        'personal_playlist',
        { type: 'playlists', id: publicId },
      ],
    }),

    getFullSearch: build.query<VideoWithFragments[], Pick<Playlist, 'publicId'> & { query: string }>({
      query: ({ publicId, query }) => ({
        url: `${path}/${publicId}/full_search/`,
        method: 'GET',
        params: { query },
      }),

      transformResponse: (data: VideoWithFragments[]) => {
        const dataWithCues = data.filter((video) => video.cues.length > 0);
        return dataWithCues.map((video) => ({
          ...video,
          cues: video.cues.map((cue) => ({ ...cue, timestampLink: getSearchParamFromURL(cue.timestampLink, 't') })),
        }));
      },
    }),
//таймкоды
//     getTimecodes: build.query<Timecode[], TimecodesRequest>({
//       query: ({ playlistId, videoPublicId }) => ({
//         url: `${path}/${playlistId}/videos/${videoPublicId}/timecodes/`,
//         method: 'GET',
//       }),
//       transformResponse: (response: TimecodesResponse) =>
//           response.results[0].data.timecodes
//               .filter((obj, index) => {
//                 return index === response.results[0].data.timecodes.findIndex((t) => t.start === obj.start || t.text === obj.text);
//               })
//               .map((timecode) => ({ ...timecode, startOffsetMs: Math.round(timecode.start) }))
//               .sort((a, b) => a.startOffsetMs - b.startOffsetMs),
//     }),
    getDocs: build.query<string, TimecodesRequest>({
      query: ({ playlistId, videoPublicId }) => ({
        url: `${path}/${playlistId}/videos/${videoPublicId}/summaries/`,
        method: 'GET',
      }),
      transformResponse: (response: SummaryResponse) => response.results[0].pdfFile,
    }),

    getSuggestionVideos: build.query<
        SuggestVideoType[],
        Pick<Playlist, 'publicId'> & { previouslySuggestedVideos: string[] }
    >({
      query: ({ publicId, previouslySuggestedVideos }) => ({
        url: `${path}/${publicId}/suggest-video/`,
        method: 'POST',
        body: { previouslySuggestedVideos },
      }),
      keepUnusedDataFor: 9999999999,
    }),

    getGenerate: build.mutation<VideoWithFragments[], void>({
      query: () => ({
        url: `${path}/generate/`,
        method: 'POST',
      }),
    }),

    createPrivateLink: build.mutation<{ linkHash: string }, { publicId: string; lifetime: string }>({
      query: ({ publicId, lifetime }) => ({
        url: `${path}/${publicId}/create/private-link/`,
        method: 'POST',
        body: { lifetime },
      }),
    }),

    readPrivateLink: build.query<Playlist, { linkHash: string }>({
      query: ({ linkHash }) => ({
        url: `${path}/read/private-link/`,
        method: 'GET',
        params: { linkHash },
      }),
    }),
    //квизы
    getAllQuizzes: build.query<GetList<QuizApiResponse>, { playlistId: string; params?: BaseParams }>({
      query: ({ playlistId, params }) => ({
        url: `${path}/${playlistId}/quizes/`,
        method: 'GET',
        params,
      }),
      providesTags: (result, _, { playlistId }) =>
          result
              ? [
                { type: 'quizzes', id: playlistId },
              ]
              : [{ type: 'quizzes', id: 'LIST' }],
    }),

    getVideoQuiz: build.query<QuizApiResponse, TimecodesRequest>({
      query: ({ playlistId, videoPublicId = '' }) => ({
        url: `${path}/${playlistId}/quizes/${videoPublicId}/`,
        method: 'GET',
      }),
      providesTags: (_, __, { videoPublicId }) =>
          [{ type: 'quiz', id: videoPublicId }],
    }),

  }),
});

// export const { useGetTimecodesQuery, useLazyGetTimecodesQuery, useGetDocsQuery, useLazyGetDocsQuery, useGetVideoQuizQuery, useGetAllQuizzesQuery } = playlistsAPI;
