import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageShareComponent } from './image-share.component';

describe('ImageShareComponent', () => {
  let component: ImageShareComponent;
  let fixture: ComponentFixture<ImageShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageShareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
