import { EventEmitter, OnInit } from '@angular/core';
import { IDatePickerOutput } from '../simple/gl-shared-component-input-datepicker-simple.interface';
export declare class GlSharedComponentInputDatepickerLabelComponent implements OnInit {
    disabled: boolean;
    id: string;
    placeholder: string;
    itemContentAlignment: 'left' | 'center' | 'right';
    class: string;
    value: Date;
    dateFormat: string;
    maxLength: number;
    labelValue: string;
    labelAlignment: 'left' | 'center' | 'right';
    required: boolean;
    requiredField: string;
    currentValue: EventEmitter<IDatePickerOutput>;
    constructor();
    ngOnInit(): void;
    onCurrentValue(event: IDatePickerOutput): void;
}
