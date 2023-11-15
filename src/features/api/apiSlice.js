import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://newsapi.org/v2" }),
  endpoints: (builde) => ({
    getBlogs: builde.query({
      query: ({ Page, pageSize }) =>
        `/everything?q=apple&from=2023-11-12&to=2023-11-12&sortBy=popularity&apiKey=2513bd1ac63e4aea8363337835c1d4da&page=${Page}&pageSize=${pageSize} `,
      queryKey: (Page) => `news-${Page}`,
    }),
    getSingle : builde.query({
      query: ({pageSize = 10})=> 
       `/everything?q=apple&from=2023-11-12&to=2023-11-12&sortBy=popularity&apiKey=2513bd1ac63e4aea8363337835c1d4da&pageSize=${pageSize}`,
    })
  }),
});
export const { useGetBlogsQuery, useGetSingleQuery , useAddBlogsMutation } = apiSlice; 
 