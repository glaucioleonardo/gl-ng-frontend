import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlSharedComponentInputDatepickerSimpleDayMonthYearComponent } from './gl-shared-component-input-datepicker-simple-day-month-year.component';

describe('GlSharedComponentInputAutocompleteSimpleComponent', () => {
  let component: GlSharedComponentInputDatepickerSimpleDayMonthYearComponent;
  let fixture: ComponentFixture<GlSharedComponentInputDatepickerSimpleDayMonthYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlSharedComponentInputDatepickerSimpleDayMonthYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSharedComponentInputDatepickerSimpleDayMonthYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
