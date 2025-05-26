import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostsState } from "./posts.reducer";

export const selectPostsState = createFeatureSelector<PostsState>('posts');

export const selectPostsLoading = createSelector(
    selectPostsState,
    ({ loading }) => loading
);

export const selectPostsErrorMessage = createSelector(
    selectPostsState,
    ({ errorMessage }) => errorMessage
);

export const selectPosts = createSelector(
  selectPostsState,
  ({ posts }) => posts
);

export const selectPostById = (id: number) => createSelector(
    selectPosts,
    (posts) => posts.find(post => post.id === id)
);
