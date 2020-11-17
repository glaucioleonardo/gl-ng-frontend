import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlSharedComponentTitlePageComponent } from './gl-shared-component-title-page.component';

describe('GlSharedComponentTitlePageComponent', () => {
  let component: GlSharedComponentTitlePageComponent;
  let fixture: ComponentFixture<GlSharedComponentTitlePageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GlSharedComponentTitlePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSharedComponentTitlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
