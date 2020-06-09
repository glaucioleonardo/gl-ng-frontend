import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlSharedComponentTitleLabelSimpleComponent } from './gl-shared-component-title-label-simple.component';

describe('GlSharedComponentTitleLabelSimpleComponent', () => {
  let component: GlSharedComponentTitleLabelSimpleComponent;
  let fixture: ComponentFixture<GlSharedComponentTitleLabelSimpleComponent>;

  beforeEach(async(() => {
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
