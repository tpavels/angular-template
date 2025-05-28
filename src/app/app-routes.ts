import { Routes } from '@angular/router';
import { PostService } from './posts/post.service';
import { GuestbookPageComponent } from './guestbook/guestbook-page/guestbook-page.component';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./posts/posts.routes').then((mod) => mod.routes),
        providers: [
            PostService
        ],
    },
    {
        path: 'guestbook',
        component: GuestbookPageComponent
        ,
    },
];
