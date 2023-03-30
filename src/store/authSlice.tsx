import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Following = {
  id: string;
  firstName: string;
  lastName: string;
  picturePath: string;
  job: string;
};

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  picturePath: string;
  location: string;
  job: string;
  viewsProfile: number;
  postsIds: string[];
  likedPostsIDs: string[];
  followedByIDs: string[];
  followingIDs: string[];
  following: Following[];
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
      state.user!.postsIds.push(action.payload);
    },
    likePost: (state, action) => {
      state.user!.likedPostsIDs.push(action.payload);
    },
    unlikePost: (state, action) => {
      state.user!.likedPostsIDs = state.user!.likedPostsIDs.filter(
        (id) => id !== action.payload
      );
    },
    follow: (state, action: PayloadAction<Following>) => {
      state.user!.followingIDs.push(action.payload.id);
      state.user!.following.push({
        ...action.payload,
      });
    },
    unfollow: (state, action) => {
      state.user!.followingIDs = state.user!.followingIDs.filter(
        (followedUserID) => followedUserID !== action.payload
      );
      state.user!.following = state.user!.following.filter(
        (followedUser) => followedUser.id !== action.payload
      );
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
