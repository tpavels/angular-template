import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, concatMap, map, of } from "rxjs";
import { CommentService } from "../comment.service";
import { CommentsAPIActions, CommentsPageActions } from "./comments.actions";

@Injectable()
export class CommentsEffects {

    constructor(
        private commentsService: CommentService,
        private actions$: Actions
    ) { }

    loadComments$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CommentsPageActions.loadComments),
            concatMap(({ post }) =>
                this.commentsService.getByPost(post).pipe(
                    map((comments) => CommentsAPIActions.commentsLoadedSuccess({ comments })),
                    catchError((error) =>
                        of(CommentsAPIActions.commentsLoadedFail({ message: error }))
                    )
                )
            )
        )
    );
}