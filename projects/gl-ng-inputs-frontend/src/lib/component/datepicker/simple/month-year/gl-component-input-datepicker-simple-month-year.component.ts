import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { DateGet } from 'gl-w-frontend';
import { THorizontalAlignment, TTheme } from '../../../../core/interfaces/alignments.interface';
import { IDatePickerMonthYearOutput } from './gl-component-input-datepicker-simple-month-year.interface';

// import { Moment } from 'moment/min/locales.min';
import 'moment/min/locales.min';
declare const Moment: any;
// const Moment = require('moment/min/locales.min');
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
  selector: 'gl-component-input-datepicker-simple-month-year',
  templateUrl: './gl-component-input-datepicker-simple-month-year.component.html',
  styleUrls: ['./gl-component-input-datepicker-simple-month-year.component.scss'],
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
export class GlComponentInputDatepickerSimpleMonthYearComponent {
  @Input() disabled = false;
  @Input() id: string;
  @Input() placeholder: string;
  @Input() itemContentAlignment: THorizontalAlignment = 'center';
  @Input() theme: TTheme = '';
  @Input() value: Date = DateGet.currentDate('DD/MM/YYYY');
  @Input() maxLength = 255;

  @Output() currentValue: EventEmitter<IDatePickerMonthYearOutput> = new EventEmitter();

  readonly dateFormatString: 'MM/YYYY' = 'MM/YYYY';
  readonly dateFormat = 'DD/MM/YYYY';
  startDate = this.value;
  date: Date = DateGet.customDateNoUTC('DD/MM/YYYY');

  constructor() {}

  chosenYearHandler(normalizedYear: any): void {
    const ctrlValue = this.date;
    ctrlValue.setFullYear(normalizedYear.year());
    this.date = ctrlValue;

    const date = DateGet.customDateNoUTC(ctrlValue, this.dateFormat);

    const dateString = DateGet.customDateNoUTCString(normalizedYear, this.dateFormatString, this.dateFormatString) as 'MM/YYYY';

    this.currentValue.emit({ date, dateString });
  }
  chosenMonthHandler(normalizedMonth: any, datepicker: MatDatepicker<any>): void {
    const ctrlValue = this.date;
    ctrlValue.setMonth(normalizedMonth.month());
    this.date = ctrlValue;

    datepicker.close();

    const date = DateGet.customDateNoUTC(ctrlValue, this.dateFormat);
    const dateString = DateGet.customDateString(normalizedMonth, this.dateFormatString, this.dateFormatString) as 'MM/YYYY';

    this.currentValue.emit({ date, dateString });
  }

  clear(): void {
    this.currentValue.emit({
      date: null,
      dateString: null
    });
  }
  changed(event): void {
    this.currentValue.emit({
      date: DateGet.customDateNoUTC(event.value, this.dateFormat),
      dateString: DateGet.customDateString(event.value, this.dateFormatString, this.dateFormatString) as 'MM/YYYY'
    });
  }
}
