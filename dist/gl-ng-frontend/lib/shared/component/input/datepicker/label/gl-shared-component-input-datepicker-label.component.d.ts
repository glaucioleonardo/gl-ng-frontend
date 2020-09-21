import { EventEmitter, OnInit } from '@angular/core';
import { IDatePickerOutput } from '../simple/day-month-year/gl-shared-component-input-datepicker-simple-day-month-year.interface';
import { IDatePickerMonthYearOutput } from "../simple/month-year/gl-shared-component-input-datepicker-simple-month-year.interface";
export declare class GlSharedComponentInputDatepickerLabelComponent implements OnInit {
    disabled: boolean;
    id: string;
    placeholder: string;
    itemContentAlignment: 'left' | 'center' | 'right';
    class: string;
    value: Date;
    dateFormat: 'MM/YYYY' | 'DD/MM/YYYY';
    maxLength: number;
    labelValue: string;
    labelAlignment: 'left' | 'center' | 'right';
    required: boolean;
    requiredField: string;
    currentValue: EventEmitter<IDatePickerOutput | IDatePickerMonthYearOutput>;
    constructor();
    ngOnInit(): void;
    onCurrentValue(event: IDatePickerOutput | IDatePickerMonthYearOutput): void;
}
