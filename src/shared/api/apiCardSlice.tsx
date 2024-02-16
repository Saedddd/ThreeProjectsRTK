import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { ICardSlice } from "./types";

export const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<ICardSlice["products"], undefined | void>({
      query: () => "products",
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;
