import { api } from './api';

import type { GetList, BaseParams } from '@/types';
import {Category} from "@/types/playlistTypes";

const PATH = 'categories';

export const categoriesAPI = api.injectEndpoints({
  endpoints: (build) => ({
    //! убрать условие по умолчанию после исправления ответа беком
    getCategories: build.query<Category[], { params?: BaseParams }>({
      query: ({ params }) => ({
        url: `${PATH}/`,
        params: params ? { ...params, pageSize: 14 } : undefined,
        method: 'GET',
      }),
      // transformErrorResponse: (error) => {
      //   console.log(error);
      //   return { status: error.status };
      // },

      transformResponse: (data: GetList<Category>) => data.results,

      keepUnusedDataFor: 9999999999,

      providesTags: (result) =>
        result
          ? [
            ...result.map(({ publicId: id }) => ({ type: 'categories' as const, id })),
            { type: 'categories', id: 'LIST' },
          ]
          : [{ type: 'categories', id: 'LIST' }],
    }),

    getCategoriesById: build.query<Category, { public_id: string }>({
      query: ({ public_id }) => ({
        url: `${PATH}/${public_id}/`,
        method: 'GET',
      }),
      providesTags: (result, _, { public_id }) =>
        result
          ? [
            { type: 'categories' as const, public_id },
            { type: 'categories', id: 'one' },
          ]
          : [{ type: 'categories', id: 'one' }],
    }),
  }),
});
