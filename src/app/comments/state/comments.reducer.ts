import { createFeature, createReducer, on } from "@ngrx/store";
import { CommentsAPIActions, CommentsPageActions } from "./comments.actions";
import { Comment } from "src/app/comments/comment.model";

export interface CommentsState {
    loading: boolean;
    errorMessage: string;
    comments: Comment[];
}
const initialState: CommentsState = {
    loading: false,
    errorMessage: '',
    comments: [],
};

export const commentsFeature = createFeature({
    name: 'comments',
    reducer: createReducer(
        initialState,
        on(CommentsPageActions.loadComments, (state) => ({
            ...state,
            loading: true,
            errorMessage: '',
            comments: [],
        })),
        on(CommentsAPIActions.commentsLoadedSuccess, (state, { comments }) => ({
            ...state,
            loading: false,
            comments: comments,
        })),
        on(CommentsAPIActions.commentsLoadedFail, (state, { message }) => ({
            ...state,
            errorMessage: message,
            loading: false,
        })),
    ),
});