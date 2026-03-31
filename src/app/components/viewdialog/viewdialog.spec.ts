import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewdialog } from './viewdialog';

describe('Viewdialog', () => {
  let component: Viewdialog;
  let fixture: ComponentFixture<Viewdialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Viewdialog],
    }).compileComponents();

    fixture = TestBed.createComponent(Viewdialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
