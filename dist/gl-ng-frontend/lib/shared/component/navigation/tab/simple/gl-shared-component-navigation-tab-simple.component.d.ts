import { EventEmitter } from '@angular/core';
export declare class GlSharedComponentNavigationTabSimpleComponent {
    tabActive: boolean;
    showSeparator: boolean;
    tabSequence: number;
    tabDescription: string;
    tabIsTheFirst: boolean;
    tabIsTheLast: boolean;
    tabEnabled: boolean;
    activate$: EventEmitter<number>;
    constructor();
    activate(sequence: number): void;
}
