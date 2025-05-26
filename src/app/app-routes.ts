import { Routes } from '@angular/router';
import { PostsService } from './posts/posts.service';

export const appRoutes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./posts/posts.routes').then((mod) => mod.routes),
        providers: [
            PostsService
        ],
    },
];
