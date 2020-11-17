import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlSharedComponentInputTextAreaSimpleComponent } from './gl-shared-component-input-text-area-simple.component';

describe('GlSharedComponentInputTextAreaSimpleComponent', () => {
  let component: GlSharedComponentInputTextAreaSimpleComponent;
  let fixture: ComponentFixture<GlSharedComponentInputTextAreaSimpleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GlSharedComponentInputTextAreaSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSharedComponentInputTextAreaSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
