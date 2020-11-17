import { EventEmitter } from '@angular/core';
import { TCurrencySymbolTypes, TDecimalSeparators } from 'gl-w-frontend';
import { IInputTextStepButton, TStepType } from './gl-shared-component-input-text-simple-with-step.interface';
import { TInputTextMask } from '../gl-shared-component-input-text-simple.interface';
export declare class GlSharedComponentInputTextSimpleWithStepComponent {
    disabled: boolean;
    autocomplete: boolean;
    id: string;
    placeholder: string;
    itemContentAlignment: string;
    class: string;
    value: number;
    allowMinus: boolean;
    rightAlign: boolean;
    step: number;
    mask: TInputTextMask;
    decimalSeparator: TDecimalSeparators;
    maskSymbol: TCurrencySymbolTypes;
    maxLength: number;
    currentValue: EventEmitter<IInputTextStepButton>;
    callback: () => void;
    constructor();
    convertValue(value: number): string;
    processValue(type: TStepType, value: string): void;
}
