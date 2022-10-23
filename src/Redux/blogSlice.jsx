import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import blogApi from "../common/api/blogApi";
export const fetchAsyncBlogs = createAsyncThunk("fetchAsyncBlogs", async () => {
  const response = await blogApi.get();
  return response.data;
});
export const fetchAsyncBlogDetail = createAsyncThunk(
  "fetchAsyncDetail",
  async (id) => {
    const response = await blogApi.get(`${id}`);
    return response.data;
  }
);
const initialState = {
  blogs: {},
  selectedBlog: {},
  selectedBlog: {},
  isLoading: false,
};

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    removeSelectedBlog: (state) => {
      state.selectedBlog = {};
    },
  },
  extraReducers: {
    [fetchAsyncBlogs.pending]: (state) => {
      console.log("pending state");
      return { isLoading: false };
    },
    [fetchAsyncBlogs.fulfilled]: (state, { payload }) => {
      console.log("fecthed successsfully");
      return { ...state, blogs: payload, isLoading: true };
    },
    [fetchAsyncBlogDetail.fulfilled]: (state, { payload }) => {
      console.log("fetchAsyncBlogDetail fecthed successsfully");
      return { ...state, selectedBlog: payload, isLoading: true };
    },
    [fetchAsyncBlogs.rejected]: () => {
      console.log("rejected");
    },
  },
});

export const { removeSelectedBlog } = blogsSlice.actions;
export const isLoading = (state) => state.blogSlice.isLoading;

export default blogsSlice.reducer;
