import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlSharedComponentTitleLabelSimpleComponent } from './gl-shared-component-title-label-simple.component';

describe('GlSharedComponentTitleLabelSimpleComponent', () => {
  let component: GlSharedComponentTitleLabelSimpleComponent;
  let fixture: ComponentFixture<GlSharedComponentTitleLabelSimpleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GlSharedComponentTitleLabelSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSharedComponentTitleLabelSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
