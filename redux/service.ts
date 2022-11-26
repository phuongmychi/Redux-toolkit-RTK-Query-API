/*
 * Copyright (c) 2022. Phuong My Chi Entertainment Co.,Ltd
 */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "httpClient";

export const imageApi = createApi({
  reducerPath: "imgApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getImageByName: builder.query<
      {
        photos: [];
      },
      any
    >({
      query: (data: { name: string; page: number }) =>
        `photos?query=${data?.name}&page=${data?.page}`,
    }),
  }),
});

export const { useGetImageByNameQuery, useLazyGetImageByNameQuery } = imageApi;
