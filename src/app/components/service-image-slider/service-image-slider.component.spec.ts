import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceImageSliderComponent } from './service-image-slider.component';

describe('ServiceImageSliderComponent', () => {
  let component: ServiceImageSliderComponent;
  let fixture: ComponentFixture<ServiceImageSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceImageSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceImageSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
