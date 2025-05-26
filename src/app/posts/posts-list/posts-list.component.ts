import { Component, Input } from '@angular/core';
import { Post } from '../post.model';
import { NgFor } from '@angular/common';
import { MatCard, MatCardActions, MatCardContent, MatCardTitle } from '@angular/material/card';

@Component({
  selector: 'app-posts-list',
  imports: [NgFor, MatCard, MatCardTitle, MatCardActions, MatCardContent],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.scss'
})
export class PostsListComponent {
  @Input() posts: Post[] | null = [];

  showComments(post: Post) {
    //todo
  }
}
