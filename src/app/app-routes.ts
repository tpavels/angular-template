import { Routes } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { PostService } from './apis/post.service';
import { postsFeature } from './store/post/posts.reducer';
import { commentsFeature } from './store/comment/comments.reducer';
import { PostsEffects } from './store/post/posts.effects';
import { CommentsEffects } from './store/comment/comments.effects';
import { GuestbookPageComponent } from './features/guestbook/guestbook-page/guestbook-page.component';
import { GuestbookService } from './features/guestbook/guestbook.service';
import { guestbookFeature } from './store/guestbook/guestbook.reducer';
import { GuestbookEffects } from './store/guestbook/guestbook.effects';

export const routes: Routes = [
    {
        path: 'guestbook',
        component: GuestbookPageComponent,
        providers: [
            GuestbookService,
            provideState(guestbookFeature),
            provideEffects(GuestbookEffects),
        ],
    },
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
];
