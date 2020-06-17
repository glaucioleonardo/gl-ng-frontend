import { AfterViewInit, ElementRef, EventEmitter } from '@angular/core';
import { ICurrencyTypes } from 'gl-w-frontend/lib/es5/scripts/core/services/input/core-services-input.interface';
import { ISimpleTextResult } from './gl-shared-component-input-text-simple.interface';
export declare class GlSharedComponentInputTextSimpleComponent implements AfterViewInit {
    inputElement: ElementRef<HTMLInputElement>;
    disabled: boolean;
    autocomplete: boolean;
    id: string;
    placeholder: string;
    itemContentAlignment: string;
    class: string;
    value: string;
    mask: string | ICurrencyTypes;
    maskSymbol: string;
    maxLength: number;
    currentValue: EventEmitter<ISimpleTextResult>;
    onKeyUp(args: any): void;
    constructor();
    ngAfterViewInit(): void;
}
