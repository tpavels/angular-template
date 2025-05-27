import { Routes } from '@angular/router';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { PostsDetailComponent } from './post-detail/post-detail.component';
import { PostPageComponent } from './post-page/post-page.component';

export const routes: Routes = [
    {
        path: 'post/:id',
        component: PostPageComponent,
    },
    {
        path: '',
        component: PostsPageComponent,
    }
];
