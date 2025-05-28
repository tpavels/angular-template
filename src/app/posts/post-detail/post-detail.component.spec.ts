import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostsDetailComponent } from './post-detail.component';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

describe('PostsDetailComponent', () => {
  let component: PostsDetailComponent;
  let fixture: ComponentFixture<PostsDetailComponent>;
  let store: MockStore;
  let router: jasmine.SpyObj<Router>;

  const initialState = {
    comments: {
      loading: false
    }
  };

  beforeEach(async () => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [PostsDetailComponent],
      providers: [
        provideMockStore({ initialState }),
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();

    store = TestBed.inject(Store) as MockStore;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    fixture = TestBed.createComponent(PostsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate back when goBack is called', () => {
    component.goBack();
    expect(router.navigate).toHaveBeenCalledWith(['/']);
  });

});
