import {
  fetchBaseQuery,
  type FetchArgs,
} from '@reduxjs/toolkit/dist/query';
import {BaseQueryApi} from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { Mutex } from 'async-mutex';

const mutex = new Mutex();

export const baseQuery = fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_BASE_URL}/${import.meta.env.VITE_BASE_URL_VERSION}`,
  credentials: 'same-origin',

  prepareHeaders: (headers) => {
    // const token = localStorage.getItem(ACCESS_TOKEN);
    // if (token && !isExpired(token)) {
      headers.set('Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI4NTY4NzQwLCJpYXQiOjE3MjU5NzY3NDAsImp0aSI6ImYxOTMyYzcwZmM3ZDQ5NzZhYTViMmZkNDgyMjdiY2NkIiwidXNlcl9pZCI6IjQ3ZTUxYWI0LTk0NzAtNDkwYS04MGMxLTlhOWM3Yzk1OTBjZCJ9.3DlLIeADw8m71XRKnp6_GyvnPw-k4AVER_vhZXWVh8o`);
    // }

    return headers;
  },
});

export async function baseQueryWithReauth(args: string | FetchArgs, api: BaseQueryApi, extraOptions: object) {
  await mutex.waitForUnlock();

  let result = await baseQuery(args, api, extraOptions);

  // if (!mutex.isLocked()) {
  //   const release = await mutex.acquire();

    // try {
      // if (result.error && result.error.status === 401 && localStorage.getItem(REFRESH_TOKEN)) {
      //   result = await baseQuery(
      //       {
      //         url: 'auth/refresh/',
      //         method: 'POST',
      //         body: {
      //           refresh: localStorage.getItem(REFRESH_TOKEN),
      //         },
      //       },
      //       api,
      //       extraOptions,
      //   );
      //
      //   const refreshResponse = someHelperForTS<Access>(result);
      //
      //   if (refreshResponse.data) {
      //     localStorage.setItem(ACCESS_TOKEN, refreshResponse.data.access);
      //
      //     api.forced = true;
      //
      //     result = await baseQuery(args, api, extraOptions);
      //   } else if (refreshResponse.error.status === 401) {
      //     localStorage.removeItem(ACCESS_TOKEN);
      //     localStorage.removeItem(REFRESH_TOKEN);
      //     window.location.reload();
      //   }
      // }
    // } finally {
      // release must be called once the mutex should be released again.
      // release();
    // }
  // } else {
    // wait until the mutex is available without locking it
    // await mutex.waitForUnlock();
    // result = await baseQuery(args, api, extraOptions);
  // }

  return result;
}

// function someHelperForTS<T>(result: QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>) {
//   return result as QueryReturnValue<T, FetchBaseQueryError, FetchBaseQueryMeta>;
// }
