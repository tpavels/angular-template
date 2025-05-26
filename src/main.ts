import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app/app-routes';
import { AppComponent } from './app/app.component';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { postsFeature } from './app/posts/state/posts.reducer';
import { PostsEffects } from './app/posts/state/posts.effects';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(),
    provideStore({}),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: false
    }),
    provideState(postsFeature),
    provideEffects(PostsEffects),
  ]
})
  .catch(err => console.error(err));
