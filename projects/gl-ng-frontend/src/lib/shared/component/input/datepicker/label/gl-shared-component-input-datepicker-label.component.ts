import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IDatePickerOutput } from '../simple/gl-shared-component-input-datepicker-simple.interface';

@Component({
  selector: 'gl-shared-component-input-datepicker-label',
  templateUrl: './gl-shared-component-input-datepicker-label.component.html',
  styleUrls: ['./gl-shared-component-input-datepicker-label.component.scss']
})
export class GlSharedComponentInputDatepickerLabelComponent implements OnInit {
  @Input() disabled = false;
  @Input() id: string;
  @Input() placeholder: string;
  @Input() itemContentAlignment: 'left' | 'center' | 'right' = 'center';
  @Input() class: string;
  @Input() value: Date = null;
  @Input() dateFormat = 'DD/MM/YYYY';

  @Input() maxLength = 255;
  @Input() labelValue: string;
  @Input() labelAlignment: 'left' | 'center' | 'right' = 'center';
  @Input() required: boolean;
  @Input() requiredField: string = 'Required field';

  @Output() currentValue: EventEmitter<IDatePickerOutput> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  onCurrentValue(event: IDatePickerOutput) {
    this.currentValue.emit(event);
  }

}
