import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlSharedComponentInputAutocompleteLabelComponent } from './gl-shared-component-input-autocomplete-label.component';

describe('GlSharedComponentInputAutocompleteLabelSharepointComponent', () => {
  let component: GlSharedComponentInputAutocompleteLabelComponent;
  let fixture: ComponentFixture<GlSharedComponentInputAutocompleteLabelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GlSharedComponentInputAutocompleteLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSharedComponentInputAutocompleteLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
