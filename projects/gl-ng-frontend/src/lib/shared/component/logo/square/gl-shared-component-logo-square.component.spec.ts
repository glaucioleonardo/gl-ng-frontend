import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlSharedComponentLogoSquareComponent } from './gl-shared-component-logo-square.component';

describe('GlSharedComponentLogoSquareComponent', () => {
  let component: GlSharedComponentLogoSquareComponent;
  let fixture: ComponentFixture<GlSharedComponentLogoSquareComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GlSharedComponentLogoSquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSharedComponentLogoSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
