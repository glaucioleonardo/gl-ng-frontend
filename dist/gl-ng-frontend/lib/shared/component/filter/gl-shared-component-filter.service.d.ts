import { Router } from '@angular/router';
import { Subject } from 'rxjs';
export declare class GlSharedComponentFilterService {
    container: HTMLDivElement;
    background: HTMLDivElement;
    menuNavContainer: HTMLDivElement;
    opened: boolean;
    menuHidden$: Subject<boolean>;
    router: Router;
    isIE: boolean;
    applyPartialResult: () => Promise<void>;
    constructor();
    initialize(container: HTMLDivElement, background: HTMLDivElement, menuNavContainer: HTMLDivElement, router: Router): void;
    backgroundClick(event: any): void;
    open(event: Event): boolean;
    close(event: Event): boolean;
}
