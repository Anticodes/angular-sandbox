import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedTooltipComponent } from './animated-tooltip.component';

describe('AnimatedTooltipComponent', () => {
  let component: AnimatedTooltipComponent;
  let fixture: ComponentFixture<AnimatedTooltipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimatedTooltipComponent]
    });
    fixture = TestBed.createComponent(AnimatedTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
