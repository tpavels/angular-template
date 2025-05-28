import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostsState } from "./posts.reducer";
import { getRouterSelectors } from "@ngrx/router-store";

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

export const { selectRouteParams } = getRouterSelectors();

export const selectPostById = createSelector(
    selectPosts,
    selectRouteParams,
    (posts, { id }) => posts.find(post => post.id === parseInt(id))
);
