import { Component, effect } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectPostsErrorMessage, selectPostsLoading, selectPostById } from '../state/posts.selectors';
import { NgIf } from '@angular/common';
import { PostsDetailComponent } from '../post-detail/post-detail.component';
import { selectComments } from 'src/app/comments/state/comments.selectors';
import { CommentsPageActions } from 'src/app/comments/state/comments.actions';

@Component({
  selector: 'app-post-page',
  imports: [NgIf, PostsDetailComponent],
  templateUrl: './post-page.component.html',
  styleUrl: './post-page.component.scss'
})
export class PostPageComponent {
  loading = this.store.selectSignal(selectPostsLoading);
  errorMessage = this.store.selectSignal(selectPostsErrorMessage);
  post = this.store.selectSignal(selectPostById);
  comments = this.store.selectSignal(selectComments);


  constructor(private store: Store) {
    effect(() => {
      const currentPost = this.post();
      if (currentPost) {
        this.store.dispatch(CommentsPageActions.loadPostComments({ post: currentPost }));
      }
    });
  }
}
