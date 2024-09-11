import { api } from './api';

import type {
  GetList,
  BaseParams,
  PlaylistParams,
  QuizApiResponse,
} from '@/types';
import {getSearchParamFromURL} from "@/utils/getSearchParamFromURL";
import {
  Playlist, SummaryResponse, Timecode,
  TimecodesRequest, TimecodesResponse,
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
    getTimecodes: build.query<Timecode[], TimecodesRequest>({
      query: ({ playlistId, videoPublicId }) => ({
        url: `${path}/${playlistId}/videos/${videoPublicId}/timecodes/`,
        method: 'GET',
      }),
      transformResponse: (response: TimecodesResponse) =>
          response.results[0].data.timecodes
              .filter((obj, index) => {
                return index === response.results[0].data.timecodes.findIndex((t) => t.start === obj.start || t.text === obj.text);
              })
              .map((timecode) => ({ ...timecode, startOffsetMs: Math.round(timecode.start) }))
              .sort((a, b) => a.startOffsetMs - b.startOffsetMs),
    }),
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

export const { useGetTimecodesQuery, useLazyGetTimecodesQuery, useGetDocsQuery, useLazyGetDocsQuery, useGetVideoQuizQuery, useGetAllQuizzesQuery } = playlistsAPI;
