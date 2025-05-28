import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostPageComponent } from './post-page.component';
import { provideMockStore } from '@ngrx/store/testing';
import { selectPostById, selectPostsErrorMessage, selectPostsLoading } from '../state/posts.selectors';
import { selectComments } from 'src/app/comments/state/comments.selectors';


describe('PostPageComponent', () => {
  let component: PostPageComponent;
  let fixture: ComponentFixture<PostPageComponent>;

  const initialState = {
    posts: {
      loading: false,
      errorMessage: '',
      entities: [],
      ids: []
    },
    comments: {
      comments: []
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostPageComponent],
      providers: [
        provideMockStore({ 
          initialState,
          selectors: [
            { selector: selectPostsLoading, value: false },
            { selector: selectPostsErrorMessage, value: '' },
            { selector: selectPostById, value: null },
            { selector: selectComments, value: [] }
          ]
        })
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PostPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
