import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlSharedComponentInputCheckBoxLabelComponent } from './gl-shared-component-input-check-box-label.component';

describe('GlSharedComponentInputCheckBoxLabelComponent', () => {
  let component: GlSharedComponentInputCheckBoxLabelComponent;
  let fixture: ComponentFixture<GlSharedComponentInputCheckBoxLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlSharedComponentInputCheckBoxLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSharedComponentInputCheckBoxLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
