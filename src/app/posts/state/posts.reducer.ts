import { createFeature, createReducer, on } from "@ngrx/store";
import { PostsAPIActions, PostsPageActions } from "./posts.actions";
import { Post } from "../post.model";

export interface PostsState {
    loading: boolean;
    errorMessage: string;
    posts: Post[];
}
const initialState: PostsState = {
    loading: false,
    errorMessage: '',
    posts: [],
};

export const postsFeature = createFeature({
    name: 'posts',
    reducer: createReducer(
        initialState,
        on(PostsPageActions.loadPosts, (state) => ({
            ...state,
            loading: true,
            errorMessage: '',
            posts: [],
        })),
        on(PostsAPIActions.postsLoadedSuccess, (state, { posts }) => ({
            ...state,
            loading: false,
            posts: posts,
        })),
        on(PostsAPIActions.postsLoadedFail, (state, { message }) => ({
            ...state,
            errorMessage: message,
            loading: false,
        })),
    ),
});