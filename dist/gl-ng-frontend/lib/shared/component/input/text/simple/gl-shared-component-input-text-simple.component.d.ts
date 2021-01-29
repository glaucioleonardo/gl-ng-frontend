import { AfterViewInit, ElementRef, EventEmitter } from '@angular/core';
import { ISimpleTextResult, TInputTextMask } from './gl-shared-component-input-text-simple.interface';
import { TCurrencySymbolTypes, TDecimalSeparators } from 'gl-w-frontend';
export declare class GlSharedComponentInputTextSimpleComponent implements AfterViewInit {
    inputElement: ElementRef<HTMLInputElement>;
    disabled: boolean;
    autocomplete: boolean;
    id: string;
    placeholder: string;
    itemContentAlignment: string;
    class: string;
    value: string;
    mask: TInputTextMask;
    decimalSeparator: TDecimalSeparators;
    allowMinus: boolean;
    rightAlign: boolean;
    step: number;
    maskSymbol: TCurrencySymbolTypes;
    maxLength: number;
    currentValue: EventEmitter<ISimpleTextResult>;
    onKeyUp(args: any): void;
    constructor();
    ngAfterViewInit(): void;
}
//# sourceMappingURL=gl-shared-component-input-text-simple.component.d.ts.map