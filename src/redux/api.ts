import {Platform} from 'react-native';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {DiscoverResponseType} from '@types';

interface AuthRequestType {
  email: string;
  password: string;
}

const URL = Platform.select({
  ios: 'http://localhost:3000',
  android: 'http://10.0.2.2:3000',
});

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
  }),
  endpoints: builder => ({
    postLogin: builder.mutation<boolean, AuthRequestType>({
      query: ({email, password}) => ({
        url: '/login',
        method: 'POST',
        body: {
          email,
          password,
        },
      }),
    }),
    postRegister: builder.mutation<boolean, AuthRequestType>({
      query: ({email, password}) => ({
        url: '/login',
        method: 'POST',
        body: {
          email,
          password,
        },
      }),
    }),
    getDiscoverFeed: builder.query<DiscoverResponseType[], void>({
      query: () => '/discover',
    }),
  }),
});

export const {
  useGetDiscoverFeedQuery,
  usePostLoginMutation,
  usePostRegisterMutation,
} = api;
