import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { IMenuItem, TUrlTarget } from './gl-shared-component-menu-item.interface';
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
    target: TUrlTarget;
    hasSubitem: boolean;
    active: boolean;
    subItems: IMenuItem[];
    onClick: EventEmitter<any>;
    constructor(_router: Router);
    openAbsoluteLink(event: any, href: any, target?: TUrlTarget): void;
    toggleActive(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GlSharedComponentMenuItemComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<GlSharedComponentMenuItemComponent, "gl-shared-component-menu-item", never, { "itemClass": "itemClass"; "menuLogo": "menuLogo"; "src": "src"; "target": "target"; "active": "active"; "absolute": "absolute"; "href": "href"; "alt": "alt"; "content": "content"; "hasSubitem": "hasSubitem"; "subItems": "subItems"; }, { "onClick": "onClick"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1tZW51LWl0ZW0uY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImdsLXNoYXJlZC1jb21wb25lbnQtbWVudS1pdGVtLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBJTWVudUl0ZW0sIFRVcmxUYXJnZXQgfSBmcm9tICcuL2dsLXNoYXJlZC1jb21wb25lbnQtbWVudS1pdGVtLmludGVyZmFjZSc7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50TWVudUl0ZW1Db21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBfcm91dGVyO1xyXG4gICAgaXRlbUNsYXNzOiAndHJhbnNsdWNpZCcgfCAnZGFyaycgfCAnJztcclxuICAgIGFic29sdXRlOiBib29sZWFuO1xyXG4gICAgbWVudUxvZ286IHN0cmluZztcclxuICAgIHNyYzogc3RyaW5nO1xyXG4gICAgaHJlZjogYW55O1xyXG4gICAgYWx0OiBhbnk7XHJcbiAgICBjb250ZW50OiBhbnk7XHJcbiAgICB0YXJnZXQ6IFRVcmxUYXJnZXQ7XHJcbiAgICBoYXNTdWJpdGVtOiBib29sZWFuO1xyXG4gICAgYWN0aXZlOiBib29sZWFuO1xyXG4gICAgc3ViSXRlbXM6IElNZW51SXRlbVtdO1xyXG4gICAgb25DbGljazogRXZlbnRFbWl0dGVyPGFueT47XHJcbiAgICBjb25zdHJ1Y3Rvcihfcm91dGVyOiBSb3V0ZXIpO1xyXG4gICAgb3BlbkFic29sdXRlTGluayhldmVudDogYW55LCBocmVmOiBhbnksIHRhcmdldD86IFRVcmxUYXJnZXQpOiB2b2lkO1xyXG4gICAgdG9nZ2xlQWN0aXZlKCk6IHZvaWQ7XHJcbn1cclxuIl19