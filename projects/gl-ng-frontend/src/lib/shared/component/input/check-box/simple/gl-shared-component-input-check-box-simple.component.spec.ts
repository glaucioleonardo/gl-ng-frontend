import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlSharedComponentInputCheckBoxSimpleComponent } from './gl-shared-component-input-check-box-simple.component';

describe('GlSharedComponentInputCheckBoxSimpleComponent', () => {
  let component: GlSharedComponentInputCheckBoxSimpleComponent;
  let fixture: ComponentFixture<GlSharedComponentInputCheckBoxSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlSharedComponentInputCheckBoxSimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSharedComponentInputCheckBoxSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
