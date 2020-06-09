import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlSharedComponentInputTextSimpleComponent } from './gl-shared-component-input-text-simple.component';

describe('GlSharedComponentInputTextSimpleComponent', () => {
  let component: GlSharedComponentInputTextSimpleComponent;
  let fixture: ComponentFixture<GlSharedComponentInputTextSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlSharedComponentInputTextSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSharedComponentInputTextSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
