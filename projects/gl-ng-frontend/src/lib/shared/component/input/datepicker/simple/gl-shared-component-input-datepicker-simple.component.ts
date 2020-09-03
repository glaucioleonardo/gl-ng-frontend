import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { IDatePickerOutput } from './gl-shared-component-input-datepicker-simple.interface';
import { DateGet } from "gl-w-frontend";

@Component({
  selector: 'gl-shared-component-input-datepicker-simple',
  templateUrl: './gl-shared-component-input-datepicker-simple.component.html',
  styleUrls: ['./gl-shared-component-input-datepicker-simple.component.scss'],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})
export class GlSharedComponentInputDatepickerSimpleComponent {
  @Input() disabled = false;
  @Input() id: string;
  @Input() placeholder: string;
  @Input() itemContentAlignment: 'left' | 'center' | 'right' = 'center';
  @Input() class: string;
  @Input() value: Date = null;
  @Input() dateFormat = 'DD/MM/YYYY';

  @Input() maxLength = 255;

  @Output() currentValue: EventEmitter<IDatePickerOutput> = new EventEmitter();

  constructor() { }

  clear() {
    this.currentValue.emit({
      date: null,
      dateString: null
    })
  }
  changed(event) {
    const date = new Date(event.value);

    this.currentValue.emit({
      date,
      dateString: DateGet.customDate(date, this.dateFormat)
    });
  }
}
