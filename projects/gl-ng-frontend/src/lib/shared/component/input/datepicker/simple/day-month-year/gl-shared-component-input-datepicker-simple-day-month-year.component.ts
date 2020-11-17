import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { DateGet } from "gl-w-frontend";
import { IDatePickerOutput } from './gl-shared-component-input-datepicker-simple-day-month-year.interface';
import { MatDatepickerInputEvent } from "@angular/material/datepicker";

@Component({
  selector: 'gl-shared-component-input-datepicker-simple-day-month-year',
  templateUrl: './gl-shared-component-input-datepicker-simple-day-month-year.component.html',
  styleUrls: ['./gl-shared-component-input-datepicker-simple-day-month-year.component.scss'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [ MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS ]
    },
    {
      provide: MAT_DATE_FORMATS,
      useValue: MAT_MOMENT_DATE_FORMATS
    },
  ],
})
export class GlSharedComponentInputDatepickerSimpleDayMonthYearComponent {
  @Input() disabled = false;
  @Input() id: string;
  @Input() placeholder: string;
  @Input() itemContentAlignment: 'left' | 'center' | 'right' = 'center';
  @Input() class: string;
  @Input() value: Date = null;
  @Input() maxLength = 255;

  @Output() currentValue: EventEmitter<IDatePickerOutput> = new EventEmitter();

  readonly dateFormat: 'DD/MM/YYYY' = 'DD/MM/YYYY';

  constructor() {}

  clear(input: HTMLInputElement) {
    this.currentValue.emit({
      date: null,
      dateString: null
    })

    input.value = null;
  }

  changed(event) {
    this.currentValue.emit({
      date: DateGet.customDateNoUTC(event.value, this.dateFormat),
      dateString: DateGet.customDateNoUTCString(event.value, this.dateFormat) as 'DD/MM/YYYY'
    });
  }
}
