import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlSharedComponentTitleLabelButtonSimpleComponent } from './gl-shared-component-title-label-button-simple.component';

describe('GlSharedComponentTitleLabelButtonSimpleComponent', () => {
  let component: GlSharedComponentTitleLabelButtonSimpleComponent;
  let fixture: ComponentFixture<GlSharedComponentTitleLabelButtonSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlSharedComponentTitleLabelButtonSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSharedComponentTitleLabelButtonSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
