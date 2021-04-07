import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlSharedComponentInputButtonSimpleComponent } from './gl-shared-component-input-button-simple.component';

describe('GlSharedComponentInputButtonSimpleComponent', () => {
  let component: GlSharedComponentInputButtonSimpleComponent;
  let fixture: ComponentFixture<GlSharedComponentInputButtonSimpleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GlSharedComponentInputButtonSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSharedComponentInputButtonSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
