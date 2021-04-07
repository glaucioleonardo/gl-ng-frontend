import { ElementRef, EventEmitter } from '@angular/core';
import { THorizontalAlignment } from '../../../title/label/simple/gl-shared-component-title-label-simple.interface';
export declare class GlSharedComponentInputTextAreaSimpleComponent {
    textArea: ElementRef<HTMLTextAreaElement>;
    disabled: boolean;
    id: string;
    labelAlignment: THorizontalAlignment;
    labelValue: string;
    placeholder: string;
    itemContentAlignment: THorizontalAlignment;
    class: string;
    value: string;
    maxLength: number;
    currentValue: EventEmitter<any>;
    constructor();
    onKeyUp(args: any): void;
}
