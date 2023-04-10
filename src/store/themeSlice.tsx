import { createSlice } from "@reduxjs/toolkit";

type Theme = {
  theme: "light" | "dark";
};

const initialState: Theme = {
  theme: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setMode: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { setMode } = themeSlice.actions;
export default themeSlice.reducer;
