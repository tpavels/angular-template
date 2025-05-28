import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routes';
import { AppComponent } from './app/app.component';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { postsFeature } from './app/posts/state/posts.reducer';
import { commentsFeature } from './app/comments/state/comments.reducer';
import { PostsEffects } from './app/posts/state/posts.effects';
import { CommentsEffects } from './app/comments/state/comments.effects';
import { provideHttpClient } from '@angular/common/http';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { environment } from './environments/environment';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideStore({
      router: routerReducer,
    }),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: environment.production
    }),
    provideRouterStore(),
    provideRouter(routes),
    provideState(postsFeature),
    provideState(commentsFeature),
    provideEffects(PostsEffects, CommentsEffects),
  ]
})
  .catch(err => console.error(err));
