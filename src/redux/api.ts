import {Platform} from 'react-native';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {DiscoverResponseType, Product} from '@types';
import type {AuthRequestType, ProductRequestType} from './types';

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
    postProductsForCategory: builder.mutation<Product[], ProductRequestType>({
      query: ({category_name}) => ({
        url: '/products',
        method: 'POST',
        body: {
          category_name,
        },
      }),
    }),
  }),
});

export const {
  useGetDiscoverFeedQuery,
  usePostLoginMutation,
  usePostRegisterMutation,
  usePostProductsForCategoryMutation,
} = api;
