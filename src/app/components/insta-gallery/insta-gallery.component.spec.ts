import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstaGalleryComponent } from './insta-gallery.component';

describe('InstaGalleryComponent', () => {
  let component: InstaGalleryComponent;
  let fixture: ComponentFixture<InstaGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstaGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstaGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
