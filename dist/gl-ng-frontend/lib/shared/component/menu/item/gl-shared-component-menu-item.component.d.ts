import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import * as ɵngcc0 from '@angular/core';
export declare class GlSharedComponentMenuItemComponent {
    private _router;
    itemClass: 'translucid' | 'dark' | '';
    absolute: boolean;
    menuLogo: string;
    src: string;
    href: any;
    alt: any;
    content: any;
    onClick: EventEmitter<any>;
    constructor(_router: Router);
    openAbsoluteLink(event: any, href: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GlSharedComponentMenuItemComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<GlSharedComponentMenuItemComponent, "gl-shared-component-menu-item", never, { "itemClass": "itemClass"; "menuLogo": "menuLogo"; "src": "src"; "absolute": "absolute"; "href": "href"; "alt": "alt"; "content": "content"; }, { "onClick": "onClick"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1tZW51LWl0ZW0uY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImdsLXNoYXJlZC1jb21wb25lbnQtbWVudS1pdGVtLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBHbFNoYXJlZENvbXBvbmVudE1lbnVJdGVtQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgX3JvdXRlcjtcclxuICAgIGl0ZW1DbGFzczogJ3RyYW5zbHVjaWQnIHwgJ2RhcmsnIHwgJyc7XHJcbiAgICBhYnNvbHV0ZTogYm9vbGVhbjtcclxuICAgIG1lbnVMb2dvOiBzdHJpbmc7XHJcbiAgICBzcmM6IHN0cmluZztcclxuICAgIGhyZWY6IGFueTtcclxuICAgIGFsdDogYW55O1xyXG4gICAgY29udGVudDogYW55O1xyXG4gICAgb25DbGljazogRXZlbnRFbWl0dGVyPGFueT47XHJcbiAgICBjb25zdHJ1Y3Rvcihfcm91dGVyOiBSb3V0ZXIpO1xyXG4gICAgb3BlbkFic29sdXRlTGluayhldmVudDogYW55LCBocmVmOiBhbnkpOiB2b2lkO1xyXG59XHJcbiJdfQ==