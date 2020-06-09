import { OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GlSharedComponentMenuService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1tZW51LnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiZ2wtc2hhcmVkLWNvbXBvbmVudC1tZW51LnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBHbFNoYXJlZENvbXBvbmVudE1lbnVTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICAgIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiBIVE1MRGl2RWxlbWVudDtcclxuICAgIHJvdXRlcjogUm91dGVyO1xyXG4gICAgbWVudUhpZGRlbjogU3ViamVjdDxib29sZWFuPjtcclxuICAgIG9wZW5lZDogYm9vbGVhbjtcclxuICAgIGNvbnN0cnVjdG9yKCk7XHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xyXG4gICAgaW5pdGlhbGl6ZShjb250YWluZXI6IEhUTUxEaXZFbGVtZW50LCBiYWNrZ3JvdW5kOiBIVE1MRGl2RWxlbWVudCwgcm91dGVyOiBSb3V0ZXIpOiB2b2lkO1xyXG4gICAgY2xvc2UoZXZlbnQ6IEV2ZW50KTogYm9vbGVhbjtcclxuICAgIG9wZW4oZXZlbnQ6IEV2ZW50KTogYm9vbGVhbjtcclxuICAgIGdvVG9TZXR0aW5ncyh1cmw6IHN0cmluZywgdGFyZ2V0Pzogc3RyaW5nKTogdm9pZDtcclxuICAgIGJhY2tncm91bmRDbGljayhldmVudDogYW55KTogdm9pZDtcclxufVxyXG4iXX0=