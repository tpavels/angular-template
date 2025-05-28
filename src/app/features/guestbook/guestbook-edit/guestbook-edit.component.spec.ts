import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestbookEditComponent } from './guestbook-edit.component';

describe('GuestbookEditComponent', () => {
  let component: GuestbookEditComponent;
  let fixture: ComponentFixture<GuestbookEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuestbookEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestbookEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
