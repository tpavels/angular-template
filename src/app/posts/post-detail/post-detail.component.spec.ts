import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostsDetailComponent } from './post-detail.component';
import { provideMockStore } from '@ngrx/store/testing';
import { Router } from '@angular/router';

describe('PostsDetailComponent', () => {
  let component: PostsDetailComponent;
  let fixture: ComponentFixture<PostsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostsDetailComponent],
      providers: [
        provideMockStore(),
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PostsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
