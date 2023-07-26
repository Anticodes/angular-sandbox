import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdometerInputComponent } from './odometer-input.component';

describe('OdometerInputComponent', () => {
  let component: OdometerInputComponent;
  let fixture: ComponentFixture<OdometerInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OdometerInputComponent]
    });
    fixture = TestBed.createComponent(OdometerInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
