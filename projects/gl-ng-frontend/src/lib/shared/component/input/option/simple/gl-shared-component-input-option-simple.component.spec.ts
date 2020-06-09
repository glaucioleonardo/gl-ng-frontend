import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlSharedComponentInputOptionSimpleComponent } from './gl-shared-component-input-option-simple.component';

describe('GlSharedComponentInputOptionSimpleComponent', () => {
  let component: GlSharedComponentInputOptionSimpleComponent;
  let fixture: ComponentFixture<GlSharedComponentInputOptionSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlSharedComponentInputOptionSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSharedComponentInputOptionSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
