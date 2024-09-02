// import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants';
// import { Access } from '../types';
//
// import {
//   fetchBaseQuery,
//   type BaseQueryApi,
//   type FetchArgs,
//   FetchBaseQueryError,
//   FetchBaseQueryMeta,
// } from '@reduxjs/toolkit/dist/query';
// import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
// import { Mutex } from 'async-mutex';
// import { isExpired } from 'react-jwt';
//
// const mutex = new Mutex();
//
// export const baseQuery = fetchBaseQuery({
//   baseUrl: `${import.meta.env.VITE_BASE_URL}/${import.meta.env.VITE_BASE_URL_VERSION}`,
//   credentials: 'same-origin',
//
//   prepareHeaders: (headers) => {
//     const token = localStorage.getItem(ACCESS_TOKEN);
//     if (token && !isExpired(token)) {
//       headers.set('Authorization', `Bearer ${token}`);
//     }
//
//     return headers;
//   },
// });
//
// export async function baseQueryWithReauth(args: string | FetchArgs, api: BaseQueryApi, extraOptions: object) {
//   await mutex.waitForUnlock();
//
//   let result = await baseQuery(args, api, extraOptions);
//
//   if (!mutex.isLocked()) {
//     const release = await mutex.acquire();
//
//     try {
//       if (result.error && result.error.status === 401 && localStorage.getItem(REFRESH_TOKEN)) {
//         result = await baseQuery(
//           {
//             url: 'auth/refresh/',
//             method: 'POST',
//             body: {
//               refresh: localStorage.getItem(REFRESH_TOKEN),
//             },
//           },
//           api,
//           extraOptions,
//         );
//
//         const refreshResponse = someHelperForTS<Access>(result);
//
//         if (refreshResponse.data) {
//           localStorage.setItem(ACCESS_TOKEN, refreshResponse.data.access);
//
//           api.forced = true;
//
//           result = await baseQuery(args, api, extraOptions);
//         } else if (refreshResponse.error.status === 401) {
//           localStorage.removeItem(ACCESS_TOKEN);
//           localStorage.removeItem(REFRESH_TOKEN);
//           window.location.reload();
//         }
//       }
//     } finally {
//       // release must be called once the mutex should be released again.
//       release();
//     }
//   } else {
//     // wait until the mutex is available without locking it
//     await mutex.waitForUnlock();
//     result = await baseQuery(args, api, extraOptions);
//   }
//
//   return result;
// }
//
// function someHelperForTS<T>(result: QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>) {
//   return result as QueryReturnValue<T, FetchBaseQueryError, FetchBaseQueryMeta>;
// }
