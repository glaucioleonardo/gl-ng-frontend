import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlSharedComponentInputTextLabelComponent } from './gl-shared-component-input-text-label.component';

describe('GlSharedComponentInputTextLabelComponent', () => {
  let component: GlSharedComponentInputTextLabelComponent;
  let fixture: ComponentFixture<GlSharedComponentInputTextLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlSharedComponentInputTextLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSharedComponentInputTextLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
