import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CommentsState } from "./comments.reducer";


export const selectCommentsState = createFeatureSelector<CommentsState>('comments');

export const selectCommentsLoading = createSelector(
    selectCommentsState,
    ({ loading }) => loading
);

export const selectCommentsErrorMessage = createSelector(
    selectCommentsState,
    ({ errorMessage }) => errorMessage
);

export const selectComments = createSelector(
    selectCommentsState,
    ({ comments }) => comments
);
