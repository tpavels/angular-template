import { Component, effect } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectPostsErrorMessage, selectPostsLoading, selectPostById } from '../state/posts.selectors';
import { PostsPageActions } from '../state/posts.actions';
import { AsyncPipe, NgIf } from '@angular/common';
import { PostsDetailComponent } from '../post-detail/post-detail.component';
import { selectComments, selectCommentsLoading } from 'src/app/comments/state/comments.selectors';
import { CommentsPageActions } from 'src/app/comments/state/comments.actions';

@Component({
  selector: 'app-post-page',
  imports: [NgIf, AsyncPipe, PostsDetailComponent],
  templateUrl: './post-page.component.html',
  styleUrl: './post-page.component.scss'
})
export class PostPageComponent {
  loading$ = this.store.select(selectPostsLoading);
  errorMessage$ = this.store.select(selectPostsErrorMessage);
  post = this.store.selectSignal(selectPostById);
  comments$ = this.store.select(selectComments);
  
  constructor(private store: Store) {
    effect(() => {
      const post = this.post();
      if (post) {
        this.store.dispatch(CommentsPageActions.loadComments({ post }));
      }
    });
  }
}
