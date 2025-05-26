import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostsPageComponent } from './posts-page.component';
import { Store } from '@ngrx/store';

describe('PostsPageComponent', () => {
  let component: PostsPageComponent;
  let fixture: ComponentFixture<PostsPageComponent>;
  let storeSpy: jasmine.SpyObj<Store<any>>;

  beforeEach(async () => {
    storeSpy = jasmine.createSpyObj('Store', ['select', 'dispatch', 'subscribe']);

    await TestBed.configureTestingModule({
      imports: [PostsPageComponent],
      providers: [{ provide: Store, useValue: storeSpy }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
