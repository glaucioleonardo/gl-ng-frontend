import { ElementRef, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlSharedComponentMenuService } from './gl-shared-component-menu.service';
import { IMenuItem, IMenuItemComplex } from './item/gl-shared-component-menu-item.interface';
import { TMenuPosition } from './gl-shared-component-menu.interface';
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
    $click: EventEmitter<any>;
    readonly closeButton = "../assets/img/icon/side-menu/close.svg";
    readonly settingsButton = "../assets/img/icon/side-menu/admin-settings.svg";
    constructor(service: GlSharedComponentMenuService, router: Router);
    ngOnInit(): void;
}
