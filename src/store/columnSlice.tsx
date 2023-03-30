import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ColumnState = "posts" | "profile" | "follows";

const initialState = "posts" as ColumnState;

const columnSlice = createSlice({
  name: "columns",
  initialState,
  reducers: {
    setColumn: (state, action: PayloadAction<ColumnState>) => {
      state = action.payload;
    },
  },
});

export const { setColumn } = columnSlice.actions;

export default columnSlice.reducer;
