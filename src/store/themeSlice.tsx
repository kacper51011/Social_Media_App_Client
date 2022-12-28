import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
};

const postsSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setMode: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});
