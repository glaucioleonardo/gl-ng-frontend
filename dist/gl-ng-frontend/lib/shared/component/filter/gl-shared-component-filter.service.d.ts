import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GlSharedComponentFilterService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1maWx0ZXIuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJnbC1zaGFyZWQtY29tcG9uZW50LWZpbHRlci5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBHbFNoYXJlZENvbXBvbmVudEZpbHRlclNlcnZpY2Uge1xyXG4gICAgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcclxuICAgIGJhY2tncm91bmQ6IEhUTUxEaXZFbGVtZW50O1xyXG4gICAgbWVudU5hdkNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBvcGVuZWQ6IGJvb2xlYW47XHJcbiAgICBtZW51SGlkZGVuJDogU3ViamVjdDxib29sZWFuPjtcclxuICAgIHJvdXRlcjogUm91dGVyO1xyXG4gICAgaXNJRTogYm9vbGVhbjtcclxuICAgIGFwcGx5UGFydGlhbFJlc3VsdDogKCkgPT4gUHJvbWlzZTx2b2lkPjtcclxuICAgIGNvbnN0cnVjdG9yKCk7XHJcbiAgICBpbml0aWFsaXplKGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQsIGJhY2tncm91bmQ6IEhUTUxEaXZFbGVtZW50LCBtZW51TmF2Q29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCwgcm91dGVyOiBSb3V0ZXIpOiB2b2lkO1xyXG4gICAgYmFja2dyb3VuZENsaWNrKGV2ZW50OiBhbnkpOiB2b2lkO1xyXG4gICAgb3BlbihldmVudDogRXZlbnQpOiBib29sZWFuO1xyXG4gICAgY2xvc2UoZXZlbnQ6IEV2ZW50KTogYm9vbGVhbjtcclxufVxyXG4iXX0=