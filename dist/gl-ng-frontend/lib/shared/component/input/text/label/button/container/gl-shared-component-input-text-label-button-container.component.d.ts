import { EventEmitter } from '@angular/core';
import { ICurrencyTypes } from "gl-w-frontend";
export declare class GlSharedComponentInputTextLabelButtonContainerComponent {
    disabled: boolean;
    autocomplete: boolean;
    id: string;
    labelAlignment: string;
    labelValue: string;
    placeholder: string;
    itemContentAlignment: string;
    class: string;
    value: string;
    mask: string | ICurrencyTypes;
    maskSymbol: string;
    maxLength: number;
    required: boolean;
    requiredLabel: string;
    currentValue: EventEmitter<any>;
    constructor();
    onKeyUp(values: any): void;
}
