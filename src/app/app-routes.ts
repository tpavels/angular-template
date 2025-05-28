import { Routes } from '@angular/router';
import { PostService } from './posts/post.service';
import { GuestbookPageComponent } from './guestbook/guestbook-page/guestbook-page.component';
import { provideState } from '@ngrx/store';
import { postsFeature } from './posts/state/posts.reducer';
import { provideEffects } from '@ngrx/effects';
import { PostsEffects } from './posts/state/posts.effects';
import { CommentsEffects } from './comments/state/comments.effects';
import { commentsFeature } from './comments/state/comments.reducer';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./posts/posts.routes').then((mod) => mod.routes),
        providers: [
            PostService,
            provideState(postsFeature),
            provideState(commentsFeature),
            provideEffects(PostsEffects, CommentsEffects),
        ],
    },
    {
        path: 'guestbook',
        component: GuestbookPageComponent
        ,
    },
];
