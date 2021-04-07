import { EventEmitter } from '@angular/core';
import { THorizontalAlignment } from '../../../../title/label/simple/gl-shared-component-title-label-simple.interface';
import { IDatePickerMonthYearOutput } from './gl-shared-component-input-datepicker-simple-month-year.interface';
import { MatDatepicker } from '@angular/material/datepicker';
import { Moment } from 'moment';
export declare class GlSharedComponentInputDatepickerSimpleMonthYearComponent {
    disabled: boolean;
    id: string;
    placeholder: string;
    itemContentAlignment: THorizontalAlignment;
    class: string;
    value: Date;
    maxLength: number;
    currentValue: EventEmitter<IDatePickerMonthYearOutput>;
    readonly dateFormatString: 'MM/YYYY';
    readonly dateFormat = "DD/MM/YYYY";
    startDate: Date;
    date: Date;
    constructor();
    chosenYearHandler(normalizedYear: Moment): void;
    chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<any>): void;
    clear(): void;
    changed(event: any): void;
}
