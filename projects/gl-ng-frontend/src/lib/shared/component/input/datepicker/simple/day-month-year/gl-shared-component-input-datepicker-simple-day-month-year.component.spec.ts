import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlSharedComponentInputDatepickerSimpleDayMonthYearComponent } from './gl-shared-component-input-datepicker-simple-day-month-year.component';
import { MatFormField } from "@angular/material/form-field";

describe('GlSharedComponentInputDatepickerSimpleDayMonthYearComponent', () => {
  let component: GlSharedComponentInputDatepickerSimpleDayMonthYearComponent;
  let fixture: ComponentFixture<GlSharedComponentInputDatepickerSimpleDayMonthYearComponent>;

  let datePicker: HTMLInputElement;
  let datePickerContainer: MatFormField;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlSharedComponentInputDatepickerSimpleDayMonthYearComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSharedComponentInputDatepickerSimpleDayMonthYearComponent);
    component = fixture.componentInstance;

    component.id = 'datepicker';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should referente datePickerContainer', () => {
    datePickerContainer = document.querySelector('#datepicker-with-step') as HTMLElement;
    console.log(datePickerContainer);
    expect(datePickerContainer).not.toBeNull();
  });

  it('should reference the datepicker',  () => {
    datePicker = document.querySelector('#datepicker') as HTMLInputElement;
    console.log(datePicker);
    expect(datePicker).not.toBeNull();
  });

  it('should change the value', function () {
    datePicker = document.querySelector('#datepicker') as HTMLInputElement;
    datePicker.value = new Date();


  });
});
