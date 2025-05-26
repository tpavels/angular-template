import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GbookEditComponent } from './gbook-edit.component';

describe('GbookEditComponent', () => {
  let component: GbookEditComponent;
  let fixture: ComponentFixture<GbookEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GbookEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GbookEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
