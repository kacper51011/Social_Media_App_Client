import { createSlice } from "@reduxjs/toolkit";

type Props = {
  theme: "light" | "dark";
};

const initialState: Props = {
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
