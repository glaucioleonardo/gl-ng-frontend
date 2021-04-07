import { EventEmitter } from '@angular/core';
import { THorizontalAlignment } from '../../../../title/label/simple/gl-shared-component-title-label-simple.interface';
import { IDatePickerOutput } from './gl-shared-component-input-datepicker-simple-day-month-year.interface';
export declare class GlSharedComponentInputDatepickerSimpleDayMonthYearComponent {
    disabled: boolean;
    id: string;
    placeholder: string;
    itemContentAlignment: THorizontalAlignment;
    class: string;
    value: Date;
    maxLength: number;
    currentValue: EventEmitter<IDatePickerOutput>;
    readonly dateFormat: 'DD/MM/YYYY';
    constructor();
    clear(input: HTMLInputElement): void;
    changed(event: any): void;
}
