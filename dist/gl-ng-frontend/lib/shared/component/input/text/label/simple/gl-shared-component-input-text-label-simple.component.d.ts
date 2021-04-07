import { EventEmitter } from '@angular/core';
import { TCurrencySymbolTypes, TDecimalSeparators } from 'gl-w-frontend';
import { THorizontalAlignment } from '../../../../title/label/simple/gl-shared-component-title-label-simple.interface';
import { TInputTextMask } from '../../simple/gl-shared-component-input-text-simple.interface';
export declare class GlSharedComponentInputTextLabelSimpleComponent {
    disabled: boolean;
    autocomplete: boolean;
    id: string;
    labelAlignment: THorizontalAlignment;
    labelValue: string;
    placeholder: string;
    itemContentAlignment: THorizontalAlignment;
    class: string;
    value: string;
    allowMinus: boolean;
    rightAlign: boolean;
    step: number;
    mask: TInputTextMask;
    decimalSeparator: TDecimalSeparators;
    maskSymbol: TCurrencySymbolTypes;
    maxLength: number;
    required: boolean;
    requiredLabel: string;
    currentValue: EventEmitter<any>;
    constructor();
    onKeyUp(values: any): void;
}
