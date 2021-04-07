import { EventEmitter } from '@angular/core';
import { THorizontalAlignment } from '../../../title/label/simple/gl-shared-component-title-label-simple.interface';
export declare class GlSharedComponentInputTextAreaLabelComponent {
    disabled: boolean;
    id: string;
    labelAlignment: THorizontalAlignment;
    labelValue: string;
    placeholder: string;
    itemContentAlignment: THorizontalAlignment;
    class: string;
    value: string;
    maxLength: number;
    required: boolean;
    requiredLabel: string;
    currentValue: EventEmitter<any>;
    constructor();
    onKeyUp(values: any): void;
}
