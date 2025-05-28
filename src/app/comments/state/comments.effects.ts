import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, concatMap, map, of } from "rxjs";
import { CommentService } from "../comment.service";
import { CommentsAPIActions, CommentsComponentActions } from "./comments.actions";

@Injectable()
export class CommentsEffects {

    constructor(
        private commentsService: CommentService,
        private actions$: Actions
    ) { }

    loadComments$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CommentsComponentActions.loadPostComments),
            concatMap(({ post }) =>
                this.commentsService.getByPost(post).pipe(
                    map((comments) => CommentsAPIActions.postCommentsLoadedSuccess({ comments })),
                    catchError((error) =>
                        of(CommentsAPIActions.postCommentsLoadedFail({ message: error }))
                    )
                )
            )
        )
    );
}