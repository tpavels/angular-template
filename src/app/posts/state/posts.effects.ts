import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PostsService } from "../posts.service";
import { PostsAPIActions, PostsPageActions } from "./posts.actions";
import { catchError, concatMap, map, of } from "rxjs";

@Injectable()
export class PostsEffects {

    constructor(
        private postsServiss: PostsService,
        private actions$: Actions
    ) { }

    loadPosts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PostsPageActions.loadPosts),
            concatMap(() =>
                this.postsServiss.getAll().pipe(
                    map((posts) => PostsAPIActions.postsLoadedSuccess({ posts })),
                    catchError((error) =>
                        of(PostsAPIActions.postsLoadedFail({ message: error }))
                    )
                )
            )
        )
    );
}