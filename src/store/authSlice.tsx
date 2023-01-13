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
    setNewUserPost: (state, action) => {
      state.user?.postsIds.push(action.payload);
    },
    likePost: (state, action) => {
      state.user?.likedPostIds.push(action.payload);
    },
    unlikePost: (state, action) => {
      state.user?.likedPostIds.filter((id) => id !== action.payload);
    },
    follow: (state, action) => {
      state.user?.followingIds.push(action.payload);
    },
    unfollow: (state, action) => {
      state.user?.followingIds.filter((id) => id !== action.payload);
    },
  },
});

export const {
  setLogin,
  setLogout,
  setNewUserPost,
  likePost,
  unlikePost,
  follow,
  unfollow,
} = authSlice.actions;

export default authSlice.reducer;
