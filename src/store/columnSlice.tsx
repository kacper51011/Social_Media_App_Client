import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ColumnState = {
  column: "posts" | "profile" | "follows";
};

const initialState = { column: "posts" } as ColumnState;

const columnSlice = createSlice({
  name: "columns",
  initialState,
  reducers: {
    setColumn: (state, action: PayloadAction<ColumnState["column"]>) => {
      state.column = action.payload;
    },
  },
});

export const { setColumn } = columnSlice.actions;

export default columnSlice.reducer;
