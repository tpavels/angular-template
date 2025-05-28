import { createActionGroup, props } from "@ngrx/store";
import { Post } from "src/app/posts/post.model";
import { Comment } from "src/app/comments/comment.model";

export const CommentsComponentActions = createActionGroup({
  source: 'Comments Component',
  events: {
    'Load Post Comments': props<{ post: Post }>(),
  },
});

export const CommentsAPIActions = createActionGroup({
  source: 'Comments API',
  events: {
    'Load Post Comments': props<{ post: Post }>(),
    'Post Comments Loaded Success': props<{ comments: Comment[] }>(),
    'Post Comments Loaded Fail': props<{ message: string }>(),
  },
});
