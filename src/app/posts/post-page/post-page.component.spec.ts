import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { PostPageComponent } from './post-page.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';

describe('PostPageComponent', () => {
  let component: PostPageComponent;
  let fixture: ComponentFixture<PostPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostPageComponent],
      providers: [
        provideMockStore(),
        {
          provide: Store,
          useValue: {
            select: jasmine.createSpy('select'),
            selectSignal: jasmine.createSpy('selectSignal').and.returnValue(() => ({
              id: 1,
              userId: 1,
              title: 'Test',
              body: 'Test body'
            })),
            dispatch: jasmine.createSpy('dispatch')
          }
        }
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

