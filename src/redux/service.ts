/*
 * Copyright (c) 2022. Phuong My Chi Entertainment Co.,Ltd
 */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const imageApi = createApi({
  reducerPath: "imgApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.pexels.com",
    headers: {
      Authorization: "563492ad6f917000010000013055054dae6a40da8456b7ccde8b934c",
    },
  }),
  endpoints: (builder) => ({
    getImageByName: builder.query<
      {
        photos: [];
      },
      {}
    >({
      query: (data: { name: string; page: number }) =>
        `v1/search?query=${data?.name}&page=${data?.page}`,
    }),
  }),
});

export const { useGetImageByNameQuery,useLazyGetImageByNameQuery } = imageApi;
