import { EventEmitter } from '@angular/core';
export declare class GlSharedComponentInputSwitchComponent {
    enabled: boolean;
    active: boolean;
    label: string;
    labelColor: 'white' | 'black';
    showLabel: boolean;
    showAsInputButton: boolean;
    buttonIconSrc: string;
    active$: EventEmitter<boolean>;
    constructor();
    activate(): void;
    onContainerClick(): void;
}
