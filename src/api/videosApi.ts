import {api} from "./api";
import {BaseParams, GetList, SearchAIMovie, Video, VideoParams} from "@/types";
import {getSearchParamFromURL} from "@/utils/getSearchParamFromURL";

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

    // //summary
    // getSummary: build.query<any, SummariesRequest>({
    //   query: ({ playlistPk, videoPk }) => ({
    //     url: `${path}/playlist/${playlistPk}/video/${videoPk}/summaries`,
    //     method: 'GET',
    //   }),
    // }),

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

export const {
  useGetVideosQuery,
  // useGetSummaryQuery,
  useGetMyVideosQuery,
  useGetSearchVideosQuery,
  useLazyGetSearchVideosQuery,
  useGetMovieByIdQuery,
} = videosAPI;
