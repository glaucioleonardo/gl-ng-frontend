import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlSharedComponentInputDatepickerLabelComponent } from './gl-shared-component-input-datepicker-label.component';

describe('GlSharedComponentInputDatepickerLabelComponent', () => {
  let component: GlSharedComponentInputDatepickerLabelComponent;
  let fixture: ComponentFixture<GlSharedComponentInputDatepickerLabelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GlSharedComponentInputDatepickerLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSharedComponentInputDatepickerLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
