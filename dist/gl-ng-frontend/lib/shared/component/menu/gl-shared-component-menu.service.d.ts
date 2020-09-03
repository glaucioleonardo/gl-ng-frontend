import { OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
export declare class GlSharedComponentMenuService implements OnDestroy {
    container: HTMLDivElement;
    background: HTMLDivElement;
    router: Router;
    menuHidden: Subject<boolean>;
    opened: boolean;
    constructor();
    ngOnDestroy(): void;
    initialize(container: HTMLDivElement, background: HTMLDivElement, router: Router): void;
    close(event: Event): boolean;
    open(event: Event): boolean;
    goToSettings(url: string, target?: string): void;
    backgroundClick(event: any): void;
}
