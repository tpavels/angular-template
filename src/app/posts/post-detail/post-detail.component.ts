import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Post } from '../post.model';
import { Store } from '@ngrx/store';
import { Comment } from 'src/app/comments/comment.model';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { selectCommentsLoading } from 'src/app/comments/state/comments.selectors';

@Component({
  selector: 'app-posts-detail',
  standalone: true,
  imports: [
    MatCardModule,
    NgIf,
    NgFor,
    MatIconModule,
    AsyncPipe
  ],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss'
})
export class PostsDetailComponent {
  @Input() post: Post | undefined;
  @Input() comments: Comment[] | null = [] ;
  loadingComments$ = this.store.select(selectCommentsLoading);


  constructor(private store: Store, private router: Router) { }

  goBack() {
    this.router.navigate(['/']);
  }
}
