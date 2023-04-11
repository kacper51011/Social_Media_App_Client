import { configureStore, PreloadedState } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import postsReducer from "./postsSlice";
import themeReducer from "./themeSlice";
import columnReducer from "./columnSlice";

const reducer = {
  auth: authReducer,
  posts: postsReducer,
  theme: themeReducer,
  column: columnReducer,
};

export const store = configureStore({
  reducer,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: reducer,
    preloadedState,
  });
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof setupStore>;

export * from "./columnSlice";
export * from "./authSlice";
export * from "./postsSlice";
export * from "./themeSlice";
