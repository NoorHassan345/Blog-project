import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://newsapi.org/v2" }),
  endpoints: (builde) => ({
    getBlogs: builde.query({
      query: ({ Page, pageSize }) =>
        `/top-headlines?country=us&category=business&apiKey=2513bd1ac63e4aea8363337835c1d4da&page=${Page}&pageSize=${pageSize} `,
      queryKey: (Page) => `news-${Page}`,
    }),
  }),
});
export const { useGetBlogsQuery, useAddBlogsMutation } = apiSlice;
 