import { EventEmitter } from '@angular/core';
export declare class GlSharedComponentInputCheckBoxSimpleComponent {
    checked: boolean;
    showBackground: boolean;
    checked$: EventEmitter<boolean>;
    constructor();
    onChecked(checked: boolean): void;
}
