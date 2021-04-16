
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GlComponentInputDatepickerSimpleDayMonthYearComponent } from './gl-component-input-datepicker-simple-day-month-year.component';

describe('GlComponentInputDatepickerSimpleDayMonthYearComponent', () => {
  let component: GlComponentInputDatepickerSimpleDayMonthYearComponent;
  let fixture: ComponentFixture<GlComponentInputDatepickerSimpleDayMonthYearComponent>;

  let datePicker: HTMLInputElement;
  let datePickerContainer: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlComponentInputDatepickerSimpleDayMonthYearComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlComponentInputDatepickerSimpleDayMonthYearComponent);
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

  it('should change the value', () => {
    datePicker = document.querySelector('#datepicker') as HTMLInputElement;
    datePicker.value = new Date().toString();
  });
});
