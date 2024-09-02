import { api } from './api';

import {
  AccountStat,
  ChangePassword,
  Confirm,
  GetAccountUser,
  GetList,
  PasswordConfirm,
  RegisterUser,
  RegisterUserResponse,
  UpdateAccountUser,
} from '@/types';

const USER = 'users';
const STAT = 'account/stat/';

export const usersAPI = api.injectEndpoints({
  endpoints: (build) => ({
    registerUser: build.mutation<RegisterUserResponse, RegisterUser>({
      query: (body) => ({
        url: `${USER}/`,
        method: 'POST',
        body,
      }),
    }),

    getUserMe: build.query<GetAccountUser, void>({
      query: () => ({
        url: `${USER}/me/`,
      }),
      providesTags: ['userMe'],
      extraOptions: { refetchOnFocus: false },
    }),

    updatePartialUserMe: build.mutation<GetAccountUser, Partial<UpdateAccountUser>>({
      query: (body) => ({
        url: `${USER}/me/`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['userMe'],
      extraOptions: { refetchOnFocus: false },
    }),

    // getUsers: build.query<GetUserType[], string>({
    //   query: () => ({
    //     url: `/users`,
    //     method: 'GET',
    //   }),
    //   providesTags: (result) =>
    //     result
    //       ? [
    //           ...result.map(({ _id }) => ({ type: 'users' as const, _id })),
    //           { type: 'users', id: 'LIST' },
    //         ]
    //       : [{ type: 'users', id: 'LIST' }],
    // }),
    activation: build.mutation<GetAccountUser, Confirm>({
      query: (body) => ({
        url: `${USER}/activation/`,
        method: 'POST',
        body,
      }),
    }),

    resendActivation: build.mutation<GetAccountUser, { email: string }>({
      query: (body) => ({
        url: `${USER}/resend_activation/`,
        method: 'POST',
        body,
      }),
    }),

    // getEmailVerify: build.query<GetAccountUser, { token: string }>({
    //   query: ({ token }) => ({
    //     url: `${AUTH}/email-verify/`,
    //     method: 'GET',
    //     params: {
    //       token,
    //     },
    //   }),
    // }),

    // getCheckPassword: build.query<GetAccountUser, { id: string; token: string }>({
    //   query: ({ id, token }) => ({
    //     url: `${AUTH}/check-password/${id}/${token}/`,
    //     method: 'GET',
    //   }),
    // }),
    resetPassword: build.mutation<GetAccountUser, { email: string }>({
      query: (body) => ({
        url: `${USER}/reset_password/`,
        method: 'POST',
        body,
      }),
    }),

    resetPasswordConfirm: build.mutation<GetAccountUser, PasswordConfirm>({
      query: (body) => ({
        url: `${USER}/reset_password_confirm/`,
        method: 'POST',
        body,
      }),
    }),
    // changePassword: build.mutation<GetAccountUser, { old: string; new: string; refresh: string }>({
    //   query: (body) => ({
    //     url: `${AUTH}/change-password/`,
    //     method: 'PATCH',
    //     body,
    //   }),
    // }),

    getUserById: build.query<GetAccountUser, { id: string }>({
      query: ({ id }) => ({
        url: `${USER}/${id}/`,
        method: 'GET',
      }),
      providesTags: (res, _, { id }) => (res ? [{ type: 'user' as const, id }] : [{ type: 'user', id: 'ALL' }]),
    }),

    updateUser: build.mutation<GetAccountUser, { id: string; body: UpdateAccountUser | FormData }>({
      query: ({ id, body }) => ({
        url: `${USER}/${id}/`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: (_, __, { id }) => [
        { type: 'user', id },
        { type: 'playlists', id: 'LIST' },
        { type: 'user', id: 'ALL' },
      ],
    }),

    deleteUser: build.mutation<void, Pick<ChangePassword, 'currentPassword'>>({
      query: (body) => ({
        url: `${USER}/me/`,
        method: 'DELETE',
        body
      }),
      invalidatesTags: [
        { type: 'user', id: 'user' },
        { type: 'userMe', id: 'user' },
        { type: 'personal_playlists', id: 'LIST' },
      ],
    }),

    getUserStat: build.query<GetList<AccountStat>, { page: number; limit: number }>({
      query: ({ page, limit }) => ({
        url: STAT,
        params: {
          limit,
          offset: String(page - 1) + '0',
        },
        method: 'GET',
      }),
      providesTags: [{ type: 'stat', id: 'LIST' }],
    }),


    setPassword: build.mutation<ChangePassword, ChangePassword>({
      query: (body) => ({
        url: `${USER}/set_password/`,
        method: 'POST',
        body
      }),
    }),
  }),
});
