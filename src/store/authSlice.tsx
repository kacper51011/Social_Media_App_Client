import { createSlice } from "@reduxjs/toolkit";

type User = {
  id: string;
  firstName: string;
  lastName: string;
  picturePath: string;
  location: string;
  job: string;
  viewsProfile: number;
  postsIds: string[];
  likedPostIds: string[];
  followedByIds: string[];
  followingIds: string[];
};

let userAuthCheck: User | null = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo") || "")
  : null;

const initialState = {
  user: userAuthCheck,
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
    },
  },
});

export const { setLogin, setLogout } = authSlice.actions;

export default authSlice.reducer;
