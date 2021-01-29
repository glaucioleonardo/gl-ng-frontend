import { EventEmitter, OnInit } from '@angular/core';
import { IDatePickerOutput } from '../simple/day-month-year/gl-shared-component-input-datepicker-simple-day-month-year.interface';
import { IDatePickerMonthYearOutput } from "../simple/month-year/gl-shared-component-input-datepicker-simple-month-year.interface";
import { THorizontalAlignment } from '../../../title/label/simple/gl-shared-component-title-label-simple.interface';
export declare class GlSharedComponentInputDatepickerLabelComponent implements OnInit {
    disabled: boolean;
    id: string;
    placeholder: string;
    itemContentAlignment: THorizontalAlignment;
    class: string;
    value: Date;
    dateFormat: 'MM/YYYY' | 'DD/MM/YYYY';
    maxLength: number;
    labelValue: string;
    labelAlignment: THorizontalAlignment;
    required: boolean;
    requiredField: string;
    currentValue: EventEmitter<IDatePickerOutput | IDatePickerMonthYearOutput>;
    constructor();
    ngOnInit(): void;
    onCurrentValue(event: IDatePickerOutput | IDatePickerMonthYearOutput): void;
}
