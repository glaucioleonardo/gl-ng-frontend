import { EventEmitter } from '@angular/core';
import { IDatePickerMonthYearOutput } from "./gl-shared-component-input-datepicker-simple-month-year.interface";
import { MatDatepicker } from "@angular/material/datepicker";
import { Moment } from 'moment';
export declare class GlSharedComponentInputDatepickerSimpleMonthYearComponent {
    disabled: boolean;
    id: string;
    placeholder: string;
    itemContentAlignment: 'left' | 'center' | 'right';
    class: string;
    value: Date;
    maxLength: number;
    currentValue: EventEmitter<IDatePickerMonthYearOutput>;
    readonly dateFormatString: 'MM/YYYY';
    readonly dateFormat = "DD/MM/YYYY";
    startDate: Date;
    date: Date;
    chosenYearHandler(normalizedYear: Moment): void;
    chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<any>): void;
    constructor();
    clear(): void;
    changed(event: any): void;
}
//# sourceMappingURL=gl-shared-component-input-datepicker-simple-month-year.component.d.ts.map