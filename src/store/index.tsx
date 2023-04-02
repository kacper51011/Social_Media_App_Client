import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import postsReducer from "./postsSlice";
import themeReducer from "./themeSlice";
import columnReducer from "./columnSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
    theme: themeReducer,
    column: columnReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export * from "./authSlice";
export * from "./postsSlice";
export * from "./columnSlice";
export * from "./themeSlice";
