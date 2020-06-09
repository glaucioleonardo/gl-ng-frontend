import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlSharedComponentInputTextAreaLabelComponent } from './gl-shared-component-input-text-area-label.component';

describe('GlSharedComponentInputTextAreaLabelComponent', () => {
  let component: GlSharedComponentInputTextAreaLabelComponent;
  let fixture: ComponentFixture<GlSharedComponentInputTextAreaLabelComponent>;

  beforeEach(async(() => {
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
