import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlComponentLogoSquareComponent } from './gl-component-logo-square.component';

describe('GlComponentLogoSquareComponent', () => {
  let component: GlComponentLogoSquareComponent;
  let fixture: ComponentFixture<GlComponentLogoSquareComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GlComponentLogoSquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlComponentLogoSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
