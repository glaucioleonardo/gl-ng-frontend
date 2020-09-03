import { EventEmitter } from '@angular/core';
import { IDatePickerOutput } from './gl-shared-component-input-datepicker-simple.interface';
export declare class GlSharedComponentInputDatepickerSimpleComponent {
    disabled: boolean;
    id: string;
    placeholder: string;
    itemContentAlignment: 'left' | 'center' | 'right';
    class: string;
    value: Date;
    dateFormat: string;
    maxLength: number;
    currentValue: EventEmitter<IDatePickerOutput>;
    constructor();
    clear(): void;
    changed(event: any): void;
}
