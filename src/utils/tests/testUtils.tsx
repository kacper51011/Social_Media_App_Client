import React, { PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import type { PreloadedState } from "@reduxjs/toolkit";
import { AppStore, RootState, setupStore } from "@store";
import { Provider } from "react-redux";

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {
      auth: {
        user: {
          id: "test",
          firstName: "test",
          lastName: "test",
          location: "test",
          job: "test",
          picturePath: "test",
          viewsProfile: 0,
          postsIds: [],
          likedPostsIDs: [],
          followedByIDs: [],
          following: [],
          followingIDs: [],
        },
      },
      posts: { posts: [] },
      theme: { theme: "light" },
      column: { column: "posts" },
    },
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children} </Provider>;
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
