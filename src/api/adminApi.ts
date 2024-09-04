import { api } from './api';

import { TimecodesResponse, TransformedTimecodesResponse, BaseAdminRequest, BaseTimecodesRequest, SummariesRequest } from '@/types';


const path = 'control-panels';

export const adminAPI = api.injectEndpoints({
  endpoints: (build) => ({
    // таймкоды
    getTimecodesAdmin: build.query<TransformedTimecodesResponse, BaseAdminRequest>({
      query: ({ videoPk }) => ({
        url: `${path}/video/${videoPk}/timecodes`,
        method: 'GET',
      }),
      transformResponse: (response: TimecodesResponse) => {
        const timecodes = response.results[0].data.timecodes
          .filter((obj, index) => {
            return (
              index ===
              response.results[0].data.timecodes.findIndex((t) => t.start === obj.start || t.text === obj.text)
            );
          })
          .map((timecode) => ({ ...timecode, startOffsetMs: Math.round(timecode.start) }))
          .sort((a, b) => a.startOffsetMs - b.startOffsetMs);

        const publicId = response.results[0].publicId; // Извлекаем publicId из результата

        return { timecodes, publicId }; // Возвращаем как объект с обновленной структурой
      },
    }),
    putTimecodesAdmin: build.mutation<void, BaseTimecodesRequest>({
      query: ({ videoPk, publicId, body }) => ({
        url: `${path}/video/${videoPk}/timecodes/${publicId}`,
        method: 'PUT',
        body,
      }),
    }),
    patchTimecodesAdmin: build.mutation<void, BaseTimecodesRequest>({
      query: ({ videoPk, publicId, body }) => ({
        url: `${path}/video/${videoPk}/timecodes/${publicId}`,
        method: 'PATCH',
        body,
      }),
    }),
    deleteTimecodesAdmin: build.mutation<void, Omit<BaseTimecodesRequest, 'body'>>({
      query: ({ videoPk, publicId }) => ({
        url: `${path}/video/${videoPk}/timecodes/${publicId}`,
        method: 'DELETE',
      }),
    }),

    // квизы
    getQuizzesAdmin: build.query<any, { playlistPk: string }>({
      query: ({ playlistPk }) => ({
        url: `${path}/playlist/${playlistPk}/quizzes`,
        method: 'GET',
      }),
    }),

    // саммари
    getSummaryAdmin: build.query<any, SummariesRequest>({
      query: ({ playlistPk, videoPk }) => ({
        url: `${path}/playlist/${playlistPk}/video/${videoPk}/summaries`,
        method: 'GET',
      }),
    }),
    deleteSummaryAdmin: build.mutation<void, SummariesRequest>({
      query: ({ playlistPk, videoPk }) => ({
        url: `${path}/playlist/${playlistPk}/video/${videoPk}/summaries`,
        method: 'DELETE',
      }),
    }),

    // транскрипты
    getTransciptsAdmin: build.query<any, BaseAdminRequest>({
      query: ({ videoPk }) => ({
        url: `${path}/video/${videoPk}/transcripts/}`,
        method: 'GET',
      }),
    }),
    getOneTranscriptAdmin: build.query<any, Omit<BaseTimecodesRequest, 'body'>>({
      query: ({ publicId, videoPk }) => ({
        url: `${path}/video/${videoPk}/transcripts/${publicId}`,
        method: 'GET',
      }),
    }),
    putTranscriptsAdmin: build.mutation<void, BaseTimecodesRequest>({
      query: ({ videoPk, publicId, body }) => ({
        url: `${path}/video/${videoPk}/transcripts/${publicId}`,
        method: 'PUT',
        body,
      }),
    }),
    patchTranscriptsAdmin: build.mutation<void, BaseTimecodesRequest>({
      query: ({ videoPk, publicId, body }) => ({
        url: `${path}/video/${videoPk}/transcripts/${publicId}`,
        method: 'PATCH',
        body,
      }),
    }),
    deleteTranscriptsAdmin: build.mutation<void, Omit<BaseTimecodesRequest, 'body'>>({
      query: ({ videoPk, publicId }) => ({
        url: `${path}/video/${videoPk}/transcripts/${publicId}`,
        method: 'DELETE',
      }),
    }),
  }),
});

// export const {
//   useGetTimecodesAdminQuery,
//   useLazyGetTimecodesAdminQuery,
//   usePutTimecodesAdminMutation,
//   usePatchTimecodesAdminMutation,
//   useDeleteTimecodesAdminMutation,
//   useGetSummaryAdminQuery,
//   useDeleteSummaryAdminMutation,
//   useGetQuizzesAdminQuery,
//   useGetTransciptsAdminQuery,
//   useGetOneTranscriptAdminQuery,
//   usePutTranscriptsAdminMutation,
//   usePatchTranscriptsAdminMutation,
//   useDeleteTranscriptsAdminMutation,
// } = adminAPI;
