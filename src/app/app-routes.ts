import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { PostService } from './apis/post.service';
import { postsFeature } from './store/post/posts.reducer';
import { commentsFeature } from './store/comment/comments.reducer';
import { PostsEffects } from './store/post/posts.effects';
import { CommentsEffects } from './store/comment/comments.effects';
import { GuestbookPageComponent } from './features/guestbook/guestbook-page/guestbook-page.component';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./features/posts/posts.routes').then((mod) => mod.routes),
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
