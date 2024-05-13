import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { DateGet } from 'gl-w-date-frontend';
import { THorizontalAlignment, TTheme } from '../../../../core/interfaces/alignments.interface';
import { IDatePickerOutput } from './gl-component-input-datepicker-simple-day-month-year.interface';
import { NgOptimizedImage } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
    selector: 'gl-component-input-datepicker-simple-day-month-year',
    templateUrl: './gl-component-input-datepicker-simple-day-month-year.component.html',
    styleUrls: ['./gl-component-input-datepicker-simple-day-month-year.component.scss'],
    providers: [
        { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
        {
            provide: DateAdapter,
            useClass: MomentDateAdapter,
            deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
        },
        {
            provide: MAT_DATE_FORMATS,
            useValue: MAT_MOMENT_DATE_FORMATS
        },
    ],
    standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, NgOptimizedImage]
})
export class GlComponentInputDatepickerSimpleDayMonthYearComponent {
  @Input() disabled = false;
  @Input() id: string;
  @Input() placeholder: string;
  @Input() itemContentAlignment: THorizontalAlignment = 'center';
  @Input() theme: TTheme = '';
  @Input() value: Date = null;
  @Input() maxLength = 255;

  @Output() currentValue: EventEmitter<IDatePickerOutput> = new EventEmitter();

  readonly dateFormat: 'DD/MM/YYYY' = 'DD/MM/YYYY';

  constructor() {}

  clear(input: HTMLInputElement): void {
    this.currentValue.emit({
      date: null,
      dateString: null
    });

    input.value = null;
  }

  changed(event): void {
    this.currentValue.emit({
      date: DateGet.customDateNoUTC(event.value, this.dateFormat),
      dateString: DateGet.customDateNoUTCString(event.value, this.dateFormat) as 'DD/MM/YYYY'
    });
  }
}
