import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlSharedComponentInputDatepickerSimpleMonthYearComponent } from './gl-shared-component-input-datepicker-simple-month-year.component';

describe('GlSharedComponentInputDatepickerSimpleMonthYearComponent', () => {
  let component: GlSharedComponentInputDatepickerSimpleMonthYearComponent;
  let fixture: ComponentFixture<GlSharedComponentInputDatepickerSimpleMonthYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlSharedComponentInputDatepickerSimpleMonthYearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSharedComponentInputDatepickerSimpleMonthYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
