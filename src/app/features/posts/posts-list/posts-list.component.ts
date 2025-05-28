import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { Router } from '@angular/router';
import { Post } from 'src/app/types/post.model';

@Component({
  selector: 'app-posts-list',
  imports: [
    NgFor,
    MatCardModule,
    MatButton,
  ],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.scss'
})
export class PostsListComponent {
  @Input() posts: Post[] | null = [];

  constructor(private router: Router) { }

  showPost(post: Post) {
    this.router.navigate(['./post', post.id]);
  }
}
