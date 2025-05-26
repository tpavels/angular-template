import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GbookPageComponent } from './gbook-page.component';

describe('GbookPageComponent', () => {
  let component: GbookPageComponent;
  let fixture: ComponentFixture<GbookPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GbookPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GbookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
