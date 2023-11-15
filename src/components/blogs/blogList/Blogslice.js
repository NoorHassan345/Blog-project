import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blog",
  initialState: { selectedBlog: null },
  reducers: {
    blogClick: (state, action) => {
      state.selectedBlog = action.payload;
    },
  }, 
}); 
export const { blogClick } = blogSlice.actions;
export const selectedBlogDetails = state => state.blog.selectedBlog
export default blogSlice.reducer;
