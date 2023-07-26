import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrbitingTextComponent } from './orbiting-text.component';

describe('OrbitingTextComponent', () => {
  let component: OrbitingTextComponent;
  let fixture: ComponentFixture<OrbitingTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrbitingTextComponent]
    });
    fixture = TestBed.createComponent(OrbitingTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
