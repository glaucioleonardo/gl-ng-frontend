import { EventEmitter } from '@angular/core';
export declare class GlSharedComponentInputOptionSimpleComponent {
    value: string;
    id: string;
    label: string;
    name: string;
    checked: boolean;
    itemSelected: EventEmitter<string>;
    constructor();
    onCheck(value: string, input: HTMLInputElement): void;
}
