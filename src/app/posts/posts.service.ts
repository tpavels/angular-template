import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { environment } from 'src/environments/environment';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private url = environment.postsApiUrl + '/posts';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http
      .get<Post[]>(this.url)
      .pipe(catchError(this.handleError));
  }

  getById(id: number) {
    return this.http
      .get<Post>(`${this.url}/${id}`)
      .pipe(catchError(this.handleError));
  }


  private handleError({ status }: HttpErrorResponse) {
    return throwError(
      () => `${status}: ERROR - Unable to fetch posts`
    );
  }
}
