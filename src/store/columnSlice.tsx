import { createSlice } from "@reduxjs/toolkit";

const initialState = "posts";

const columnSlice = createSlice({
  name: "columns",
  initialState,
  reducers: {
    setToProfileColumn: (state) => {
      return (state = "profile");
    },
    setToPostsColumn: (state) => {
      return (state = "posts");
    },
    setToFollowsColumn: (state) => {
      return (state = "follows");
    },
  },
});

export const { setToProfileColumn, setToPostsColumn, setToFollowsColumn } =
  columnSlice.actions;

export default columnSlice.reducer;
