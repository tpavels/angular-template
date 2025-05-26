import { Component, Input } from '@angular/core';
import { AsyncPipe, NgFor } from '@angular/common';
import { Post } from '../post.model';

@Component({
  selector: 'app-posts-list',
  imports: [NgFor],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.scss'
})
export class PostsListComponent {
  @Input() posts: Post[] | null = [];

}
