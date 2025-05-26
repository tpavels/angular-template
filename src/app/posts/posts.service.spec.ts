import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PostsService } from './posts.service';
import { environment } from 'src/environments/environment';
import { Post } from './post.model';

describe('PostsService', () => {
  let service: PostsService;
  let httpMock: HttpTestingController;
  const apiUrl = environment.postsApiUrl + '/posts';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostsService]
    });
    service = TestBed.inject(PostsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all posts', () => {
    const dummyPosts: Post[] = [
      { id: 1, userId: 1, title: 'Test 1', body: 'Body 1' },
      { id: 2, userId: 1, title: 'Test 2', body: 'Body 2' }
    ];
    service.getAll().subscribe(posts => {
      expect(posts).toEqual(dummyPosts);
    });
    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(dummyPosts);
  });

  it('should fetch post by id', () => {
    const dummyPost: Post = { id: 1, userId: 1, title: 'Test', body: 'Body' };
    service.getById(1).subscribe(post => {
      expect(post).toEqual(dummyPost);
    });
    const req = httpMock.expectOne(`${apiUrl}/1`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyPost);
  });
});
