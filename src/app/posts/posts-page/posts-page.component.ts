import { Component } from '@angular/core';
import { selectPosts, selectPostsErrorMessage, selectPostsLoading } from '../state/posts.selectors';
import { Store } from '@ngrx/store';
import { PostsPageActions } from '../state/posts.actions';
import { AsyncPipe, NgIf } from '@angular/common';
import { PostsListComponent } from '../posts-list/posts-list.component';

@Component({
  selector: 'app-posts-page',
  imports: [NgIf, AsyncPipe, PostsListComponent],
  templateUrl: './posts-page.component.html',
  styleUrl: './posts-page.component.scss'
})
export class PostsPageComponent {
  posts$ = this.store.select(selectPosts);
  loading$ = this.store.select(selectPostsLoading);
  errorMessage$ = this.store.select(selectPostsErrorMessage);

  constructor(private store: Store) { }

}
