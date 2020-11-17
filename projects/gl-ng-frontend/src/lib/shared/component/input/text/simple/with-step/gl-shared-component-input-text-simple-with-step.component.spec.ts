import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlSharedComponentInputTextSimpleWithStepComponent } from './gl-shared-component-input-text-simple-with-step.component';

describe('GlSharedComponentInputTextSimpleContainerComponent', () => {
  let component: GlSharedComponentInputTextSimpleWithStepComponent;
  let fixture: ComponentFixture<GlSharedComponentInputTextSimpleWithStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlSharedComponentInputTextSimpleWithStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSharedComponentInputTextSimpleWithStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
