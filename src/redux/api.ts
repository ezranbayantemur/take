import {Platform} from 'react-native';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {DiscoverCategory, Product} from '@types';
import type {
  AuthRequestType,
  ProductRequestType,
  ProductDetailRequestType,
  AuthResponseType,
  DiscoverResponseType,
  ProductResponseType,
  ProductDetailResponseType,
} from './types';

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
    getDiscoverFeed: builder.query<DiscoverCategory[], void>({
      query: () => '/discover',
      transformResponse: (response: DiscoverResponseType) => {
        return response.data;
      },
    }),
    postLogin: builder.mutation<AuthResponseType, AuthRequestType>({
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
        url: '/register',
        method: 'POST',
        body: {
          email,
          password,
        },
      }),
    }),
    postProductsForCategory: builder.mutation<Product[], ProductRequestType>({
      query: ({category_name}) => ({
        url: '/category',
        method: 'POST',
        body: {
          category_name,
        },
      }),
      transformResponse: (response: ProductResponseType) => {
        return response.data;
      },
    }),
    postProductDetail: builder.mutation<Product, ProductDetailRequestType>({
      query: ({product_id}) => ({
        url: '/product',
        method: 'POST',
        body: {
          product_id,
        },
      }),
      transformResponse: (response: ProductDetailResponseType) => {
        return response.data;
      },
    }),
  }),
});

export const {
  useGetDiscoverFeedQuery,
  usePostLoginMutation,
  usePostRegisterMutation,
  usePostProductsForCategoryMutation,
  usePostProductDetailMutation,
} = api;
