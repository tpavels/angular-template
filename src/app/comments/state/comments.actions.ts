import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Post } from "src/app/posts/post.model";
import { Comment } from "src/app/comments/comment.model";

export const CommentsPageActions = createActionGroup({
  source: 'Comments Page',
  events: {
    'Load Comments': props<{post: Post}>(),
  },
});

export const CommentsAPIActions = createActionGroup({
  source: 'Comments API',
  events: {
    'Load Comments': props<{post: Post}>(),
    'Comments Loaded Success': props<{ comments: Comment[] }>(),
    'Comments Loaded Fail': props<{ message: string }>(),
  },
});
