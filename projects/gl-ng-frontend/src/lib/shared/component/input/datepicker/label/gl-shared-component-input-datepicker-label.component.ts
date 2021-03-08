import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IDatePickerOutput } from '../simple/day-month-year/gl-shared-component-input-datepicker-simple-day-month-year.interface';
import { IDatePickerMonthYearOutput } from '../simple/month-year/gl-shared-component-input-datepicker-simple-month-year.interface';
import { THorizontalAlignment } from '../../../title/label/simple/gl-shared-component-title-label-simple.interface';

@Component({
  selector: 'gl-shared-component-input-datepicker-label',
  templateUrl: './gl-shared-component-input-datepicker-label.component.html',
  styleUrls: ['./gl-shared-component-input-datepicker-label.component.scss']
})
export class GlSharedComponentInputDatepickerLabelComponent implements OnInit {
  @Input() disabled = false;
  @Input() id: string;
  @Input() placeholder: string;
  @Input() itemContentAlignment: THorizontalAlignment = 'center';
  @Input() class: string;
  @Input() value: Date = null;
  @Input() dateFormat: 'MM/YYYY' | 'DD/MM/YYYY' = 'DD/MM/YYYY';

  @Input() maxLength = 255;
  @Input() labelValue: string;
  @Input() labelAlignment: THorizontalAlignment = 'center';
  @Input() required: boolean;
  @Input() requiredField = 'Required field';

  @Output() currentValue: EventEmitter<IDatePickerOutput | IDatePickerMonthYearOutput> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onCurrentValue(event: IDatePickerOutput | IDatePickerMonthYearOutput) {
    this.currentValue.emit(event);
  }

}
