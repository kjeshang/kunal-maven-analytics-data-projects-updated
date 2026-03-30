import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Customcard } from './customcard';

describe('Customcard', () => {
  let component: Customcard;
  let fixture: ComponentFixture<Customcard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Customcard],
    }).compileComponents();

    fixture = TestBed.createComponent(Customcard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
