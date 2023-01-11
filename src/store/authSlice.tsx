import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload;
    },
    setLogout: (state) => {
      state.user = null;
      localStorage.clear();
      sessionStorage.clear();
    },
  },
});

export const { setLogin, setLogout } = authSlice.actions;

export default authSlice.reducer;
