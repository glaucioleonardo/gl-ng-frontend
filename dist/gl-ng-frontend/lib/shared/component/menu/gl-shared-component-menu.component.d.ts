import { ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlSharedComponentMenuService } from './gl-shared-component-menu.service';
import { IMenuItem, IMenuItemComplex } from './item/gl-shared-component-menu-item.interface';
import { TMenuPosition } from './gl-shared-component-menu.interface';
import * as ɵngcc0 from '@angular/core';
export declare class GlSharedComponentMenuComponent implements OnInit {
    service: GlSharedComponentMenuService;
    router: Router;
    container: ElementRef<HTMLDivElement>;
    background: ElementRef<HTMLDivElement>;
    title: string;
    subtitle: string;
    systemVersion: string;
    menuItems: IMenuItem[];
    menuItemsComplex: IMenuItemComplex[];
    showSettings: boolean;
    className: string;
    settingsUrl: string;
    settingsTarget: string;
    menuLogo: string;
    menuBottomTitle: string;
    menuBottomVersion: string;
    menuPosition: TMenuPosition;
    readonly closeButton = "../assets/img/icon/side-menu/close.svg";
    readonly settingsButton = "../assets/img/icon/side-menu/admin-settings.svg";
    constructor(service: GlSharedComponentMenuService, router: Router);
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GlSharedComponentMenuComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<GlSharedComponentMenuComponent, "gl-shared-component-menu", never, { "settingsTarget": "settingsTarget"; "menuLogo": "menuLogo"; "menuBottomVersion": "menuBottomVersion"; "menuPosition": "menuPosition"; "title": "title"; "subtitle": "subtitle"; "systemVersion": "systemVersion"; "menuItems": "menuItems"; "menuItemsComplex": "menuItemsComplex"; "showSettings": "showSettings"; "className": "className"; "settingsUrl": "settingsUrl"; "menuBottomTitle": "menuBottomTitle"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1tZW51LmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJnbC1zaGFyZWQtY29tcG9uZW50LW1lbnUuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgR2xTaGFyZWRDb21wb25lbnRNZW51U2VydmljZSB9IGZyb20gJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1tZW51LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBJTWVudUl0ZW0sIElNZW51SXRlbUNvbXBsZXggfSBmcm9tICcuL2l0ZW0vZ2wtc2hhcmVkLWNvbXBvbmVudC1tZW51LWl0ZW0uaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgVE1lbnVQb3NpdGlvbiB9IGZyb20gJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1tZW51LmludGVyZmFjZSc7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50TWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBzZXJ2aWNlOiBHbFNoYXJlZENvbXBvbmVudE1lbnVTZXJ2aWNlO1xyXG4gICAgcm91dGVyOiBSb3V0ZXI7XHJcbiAgICBjb250YWluZXI6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xyXG4gICAgYmFja2dyb3VuZDogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgc3VidGl0bGU6IHN0cmluZztcclxuICAgIHN5c3RlbVZlcnNpb246IHN0cmluZztcclxuICAgIG1lbnVJdGVtczogSU1lbnVJdGVtW107XHJcbiAgICBtZW51SXRlbXNDb21wbGV4OiBJTWVudUl0ZW1Db21wbGV4W107XHJcbiAgICBzaG93U2V0dGluZ3M6IGJvb2xlYW47XHJcbiAgICBjbGFzc05hbWU6IHN0cmluZztcclxuICAgIHNldHRpbmdzVXJsOiBzdHJpbmc7XHJcbiAgICBzZXR0aW5nc1RhcmdldDogc3RyaW5nO1xyXG4gICAgbWVudUxvZ286IHN0cmluZztcclxuICAgIG1lbnVCb3R0b21UaXRsZTogc3RyaW5nO1xyXG4gICAgbWVudUJvdHRvbVZlcnNpb246IHN0cmluZztcclxuICAgIG1lbnVQb3NpdGlvbjogVE1lbnVQb3NpdGlvbjtcclxuICAgIHJlYWRvbmx5IGNsb3NlQnV0dG9uID0gXCIuLi9hc3NldHMvaW1nL2ljb24vc2lkZS1tZW51L2Nsb3NlLnN2Z1wiO1xyXG4gICAgcmVhZG9ubHkgc2V0dGluZ3NCdXR0b24gPSBcIi4uL2Fzc2V0cy9pbWcvaWNvbi9zaWRlLW1lbnUvYWRtaW4tc2V0dGluZ3Muc3ZnXCI7XHJcbiAgICBjb25zdHJ1Y3RvcihzZXJ2aWNlOiBHbFNoYXJlZENvbXBvbmVudE1lbnVTZXJ2aWNlLCByb3V0ZXI6IFJvdXRlcik7XHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xyXG59XHJcbiJdfQ==