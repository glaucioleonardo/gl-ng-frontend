import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlSharedComponentInputTextAreaLabelComponent } from './gl-shared-component-input-text-area-label.component';

describe('GlSharedComponentInputTextAreaLabelComponent', () => {
  let component: GlSharedComponentInputTextAreaLabelComponent;
  let fixture: ComponentFixture<GlSharedComponentInputTextAreaLabelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GlSharedComponentInputTextAreaLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSharedComponentInputTextAreaLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
