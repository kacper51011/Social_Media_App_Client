import { unstable_useId } from "@mui/material";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post, Comment } from "../components/column posts/PostItem";

// Slice created mostly to display changed data on live, not after another load from backend

const initialState: { posts: Post[] } = {
  posts: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setNewPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = state.posts
        ? [...state.posts, ...action.payload]
        : action.payload;
    },
    deleteLoadedPosts: (state) => {
      state.posts = [];
    },
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    likePost: (state, action) => {
      const likedPost = state.posts.find(
        (post) => post.id === action.payload.postId
      );
      likedPost ? likedPost.likes.push(action.payload.id) : null;
    },
    unlikePost: (state, action) => {
      const unlikedPost = state.posts.find(
        (post) => post.id === action.payload.postId
      );
      unlikedPost
        ? (unlikedPost.likes = unlikedPost.likes.filter(
            (id) => id !== action.payload.id
          ))
        : null;
    },
    commentPost: (state, action) => {
      const commentedPost = state.posts.find(
        (post) => post.id === action.payload.id
      );
      // random number created as a placeholder for normal id comming from backend after creating comment in database
      let randomNumber = Math.random() * 1000;
      commentedPost
        ? commentedPost.comments.push({
            id: randomNumber.toString(),
            userId: action.payload.userId,
            userFirstName: action.payload.userFirstName,
            userLastName: action.payload.userLastName,
            userPhotoPicturePath: action.payload.picturePath,
            postId: action.payload.postId,
            content: action.payload.content,
          })
        : null;
    },
  },
});

export const { setNewPosts, deleteLoadedPosts } = postsSlice.actions;

export default postsSlice.reducer;
