import { EventEmitter } from '@angular/core';
export declare class GlSharedComponentInputSwitchComponent {
    enabled: boolean;
    active: boolean;
    label: string;
    labelColor: 'white' | 'black';
    showLabel: boolean;
    active$: EventEmitter<boolean>;
    constructor();
    activate(): void;
}
