import { EventEmitter } from '@angular/core';
import { TCurrencySymbolTypes, TDecimalSeparators } from 'gl-w-frontend';
import { THorizontalAlignment } from '../../../../../title/label/simple/gl-shared-component-title-label-simple.interface';
import { TInputTextMask } from '../../../simple/gl-shared-component-input-text-simple.interface';
export declare class GlSharedComponentInputTextLabelButtonContainerComponent {
    disabled: boolean;
    autocomplete: boolean;
    id: string;
    labelAlignment: THorizontalAlignment;
    labelValue: string;
    placeholder: string;
    itemContentAlignment: THorizontalAlignment;
    class: string;
    value: string;
    mask: TInputTextMask;
    decimalSeparator: TDecimalSeparators;
    maskSymbol: TCurrencySymbolTypes;
    allowMinus: boolean;
    rightAlign: boolean;
    step: number;
    maxLength: number;
    required: boolean;
    requiredLabel: string;
    currentValue: EventEmitter<any>;
    constructor();
    onKeyUp(values: any): void;
}
