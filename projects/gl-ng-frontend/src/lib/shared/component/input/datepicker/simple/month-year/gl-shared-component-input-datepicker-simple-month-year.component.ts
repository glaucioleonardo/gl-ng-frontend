import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from "@angular/material/core";
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from "@angular/material-moment-adapter";
import { DateGet } from "gl-w-frontend";
import { IDatePickerMonthYearOutput } from "./gl-shared-component-input-datepicker-simple-month-year.interface";
import { MatDatepicker } from "@angular/material/datepicker";

import { Moment } from 'moment';
const MONTH_YEAR_FORMAT = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'gl-shared-component-input-datepicker-simple-month-year',
  templateUrl: './gl-shared-component-input-datepicker-simple-month-year.component.html',
  styleUrls: ['./gl-shared-component-input-datepicker-simple-month-year.component.scss'],
  providers: [
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'pt-BR'
    },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {
      provide: MAT_DATE_FORMATS,
      useValue: MONTH_YEAR_FORMAT
    }
  ]
})
export class GlSharedComponentInputDatepickerSimpleMonthYearComponent {
  @Input() disabled = false;
  @Input() id: string;
  @Input() placeholder: string;
  @Input() itemContentAlignment: 'left' | 'center' | 'right' = 'center';
  @Input() class: string;
  @Input() value: Date = DateGet.currentDate('DD/MM/YYYY');
  @Input() maxLength = 255;

  @Output() currentValue: EventEmitter<IDatePickerMonthYearOutput> = new EventEmitter();

  readonly dateFormatString: 'MM/YYYY' = 'MM/YYYY';
  readonly dateFormat = 'DD/MM/YYYY';
  startDate = this.value;
  date: Date = DateGet.customDateNoUTC('DD/MM/YYYY');

  chosenYearHandler(normalizedYear: Moment) {
    const ctrlValue = this.date;
    ctrlValue.setFullYear(normalizedYear.year());
    this.date = ctrlValue;

    const date = DateGet.customDateNoUTC(ctrlValue, this.dateFormat);

    const dateString = DateGet.customDateNoUTCString(normalizedYear, this.dateFormatString, this.dateFormatString) as 'MM/YYYY';

    this.currentValue.emit({ date, dateString });
  }

  chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<any>) {
    const ctrlValue = this.date;
    ctrlValue.setMonth(normalizedMonth.month());
    this.date = ctrlValue;

    datepicker.close();

    const date = DateGet.customDateNoUTC(ctrlValue, this.dateFormat);
    const dateString = DateGet.customDateString(normalizedMonth, this.dateFormatString, this.dateFormatString) as 'MM/YYYY';

    this.currentValue.emit({ date, dateString });
  }

  constructor() {}

  clear() {
    this.currentValue.emit({
      date: null,
      dateString: null
    })
  }
  changed(event) {
    this.currentValue.emit({
      date: DateGet.customDateNoUTC(event.value, this.dateFormat),
      dateString: DateGet.customDateString(event.value, this.dateFormatString, this.dateFormatString) as 'MM/YYYY'
    });
  }
}
