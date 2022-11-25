/*
 * Copyright (c) 2022. Phuong My Chi Entertainment Co.,Ltd
 */

import {createApi, fetchBaseQuery,} from "@reduxjs/toolkit/query/react";

export const imageApi = createApi({
  reducerPath: "imgApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.phuongmychi.vn/v1",
  }) ,
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

export const { useGetImageByNameQuery,useLazyGetImageByNameQuery } = imageApi;
