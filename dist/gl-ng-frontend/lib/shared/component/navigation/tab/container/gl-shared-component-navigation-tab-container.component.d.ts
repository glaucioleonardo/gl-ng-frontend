import { EventEmitter } from '@angular/core';
import { INavigationTab } from '../simple/gl-shared-component-navigation-tab-simple.interface';
export declare class GlSharedComponentNavigationTabContainerComponent {
    navigationTabs: INavigationTab[];
    activatedTab$: EventEmitter<number>;
    constructor();
    activate(sequence: number): void;
    reset(): void;
    tabHovering(hovering: boolean, sequence: number, active: boolean): void;
}
