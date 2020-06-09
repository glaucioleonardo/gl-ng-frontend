import { ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlSharedComponentMenuService } from './gl-shared-component-menu.service';
import { IMenuItem } from './item/gl-shared-component-menu-item.interface';
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
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<GlSharedComponentMenuComponent, "gl-shared-component-menu", never, { "settingsTarget": "settingsTarget"; "menuLogo": "menuLogo"; "menuBottomVersion": "menuBottomVersion"; "menuPosition": "menuPosition"; "title": "title"; "subtitle": "subtitle"; "systemVersion": "systemVersion"; "menuItems": "menuItems"; "showSettings": "showSettings"; "className": "className"; "settingsUrl": "settingsUrl"; "menuBottomTitle": "menuBottomTitle"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1tZW51LmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJnbC1zaGFyZWQtY29tcG9uZW50LW1lbnUuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEdsU2hhcmVkQ29tcG9uZW50TWVudVNlcnZpY2UgfSBmcm9tICcuL2dsLXNoYXJlZC1jb21wb25lbnQtbWVudS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSU1lbnVJdGVtIH0gZnJvbSAnLi9pdGVtL2dsLXNoYXJlZC1jb21wb25lbnQtbWVudS1pdGVtLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFRNZW51UG9zaXRpb24gfSBmcm9tICcuL2dsLXNoYXJlZC1jb21wb25lbnQtbWVudS5pbnRlcmZhY2UnO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBHbFNoYXJlZENvbXBvbmVudE1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgc2VydmljZTogR2xTaGFyZWRDb21wb25lbnRNZW51U2VydmljZTtcclxuICAgIHJvdXRlcjogUm91dGVyO1xyXG4gICAgY29udGFpbmVyOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcclxuICAgIGJhY2tncm91bmQ6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIHN1YnRpdGxlOiBzdHJpbmc7XHJcbiAgICBzeXN0ZW1WZXJzaW9uOiBzdHJpbmc7XHJcbiAgICBtZW51SXRlbXM6IElNZW51SXRlbVtdO1xyXG4gICAgc2hvd1NldHRpbmdzOiBib29sZWFuO1xyXG4gICAgY2xhc3NOYW1lOiBzdHJpbmc7XHJcbiAgICBzZXR0aW5nc1VybDogc3RyaW5nO1xyXG4gICAgc2V0dGluZ3NUYXJnZXQ6IHN0cmluZztcclxuICAgIG1lbnVMb2dvOiBzdHJpbmc7XHJcbiAgICBtZW51Qm90dG9tVGl0bGU6IHN0cmluZztcclxuICAgIG1lbnVCb3R0b21WZXJzaW9uOiBzdHJpbmc7XHJcbiAgICBtZW51UG9zaXRpb246IFRNZW51UG9zaXRpb247XHJcbiAgICByZWFkb25seSBjbG9zZUJ1dHRvbiA9IFwiLi4vYXNzZXRzL2ltZy9pY29uL3NpZGUtbWVudS9jbG9zZS5zdmdcIjtcclxuICAgIHJlYWRvbmx5IHNldHRpbmdzQnV0dG9uID0gXCIuLi9hc3NldHMvaW1nL2ljb24vc2lkZS1tZW51L2FkbWluLXNldHRpbmdzLnN2Z1wiO1xyXG4gICAgY29uc3RydWN0b3Ioc2VydmljZTogR2xTaGFyZWRDb21wb25lbnRNZW51U2VydmljZSwgcm91dGVyOiBSb3V0ZXIpO1xyXG4gICAgbmdPbkluaXQoKTogdm9pZDtcclxufVxyXG4iXX0=