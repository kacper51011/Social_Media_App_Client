import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post, Comment } from "../components/columnPosts/PostItem";

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
    addPost: (state, action: PayloadAction<Post>) => {
      state.posts.unshift(action.payload);
    },
    addLikeForPost: (state, action) => {
      const likedPost = state.posts.find(
        (post) => post.id === action.payload.postId
      );

      likedPost && likedPost.likes.push(action.payload.id);
    },
    removeLikeFromPost: (state, action) => {
      const unlikedPost = state.posts.find(
        (post) => post.id === action.payload.postId
      );

      unlikedPost &&
        (unlikedPost.likes = unlikedPost.likes.filter(
          (id) => id !== action.payload.id
        ));
    },
    commentPost: (state, action: PayloadAction<Omit<Comment, "id">>) => {
      const commentedPost = state.posts.find(
        (post) => post.id === action.payload.postId
      );
      // random number created as a placeholder for normal id comming from backend after creating comment in database
      let randomNumber = Math.random() * 1000;

      commentedPost &&
        commentedPost.comments.push({
          id: randomNumber.toString(),
          userId: action.payload.userId,
          userFirstName: action.payload.userFirstName,
          userLastName: action.payload.userLastName,
          userPhotoPicturePath: action.payload.userPhotoPicturePath,
          postId: action.payload.postId,
          content: action.payload.content,
        });
    },
  },
});

export const {
  setNewPosts,
  deleteLoadedPosts,
  addPost,
  commentPost,
  removeLikeFromPost,
  addLikeForPost,
} = postsSlice.actions;

export default postsSlice.reducer;
