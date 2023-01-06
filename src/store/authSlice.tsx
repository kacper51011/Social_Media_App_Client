import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  userFollows: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload;
      state.token = action.payload;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.clear();
      sessionStorage.clear();
    },
  },
});

export const { setLogin, setLogout } = authSlice.actions;

export default authSlice.reducer;
