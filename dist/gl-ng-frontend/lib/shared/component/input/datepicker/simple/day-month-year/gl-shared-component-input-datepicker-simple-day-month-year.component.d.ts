import { EventEmitter } from '@angular/core';
import { IDatePickerOutput } from './gl-shared-component-input-datepicker-simple-day-month-year.interface';
export declare class GlSharedComponentInputDatepickerSimpleDayMonthYearComponent {
    disabled: boolean;
    id: string;
    placeholder: string;
    itemContentAlignment: 'left' | 'center' | 'right';
    class: string;
    value: Date;
    maxLength: number;
    currentValue: EventEmitter<IDatePickerOutput>;
    readonly dateFormat: 'DD/MM/YYYY';
    constructor();
    clear(): void;
    changed(event: any): void;
}
