import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { THorizontalAlignment, TTheme } from '../../../core/interfaces/alignments.interface';
import { IDatePickerOutput } from '../simple/day-month-year/gl-component-input-datepicker-simple-day-month-year.interface';
import { IDatePickerMonthYearOutput } from '../simple/month-year/gl-component-input-datepicker-simple-month-year.interface';

@Component({
  selector: 'gl-component-input-datepicker-label',
  templateUrl: './gl-component-input-datepicker-label.component.html',
  styleUrls: ['./gl-component-input-datepicker-label.component.scss']
})
export class GlComponentInputDatepickerLabelComponent implements OnInit {
  @Input() disabled = false;
  @Input() id: string;
  @Input() placeholder: string;
  @Input() itemContentAlignment: THorizontalAlignment = 'center';
  @Input() theme: TTheme = '';
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

  onCurrentValue(event: IDatePickerOutput | IDatePickerMonthYearOutput): void {
    this.currentValue.emit(event);
  }
}
