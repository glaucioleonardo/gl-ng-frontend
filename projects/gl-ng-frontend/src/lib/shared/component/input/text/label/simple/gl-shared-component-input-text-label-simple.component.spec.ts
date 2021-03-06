import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlSharedComponentInputTextLabelSimpleComponent } from './gl-shared-component-input-text-label-simple.component';

describe('GlSharedComponentInputTextLabelSimpleComponent', () => {
  let component: GlSharedComponentInputTextLabelSimpleComponent;
  let fixture: ComponentFixture<GlSharedComponentInputTextLabelSimpleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GlSharedComponentInputTextLabelSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSharedComponentInputTextLabelSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
