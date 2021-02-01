import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { IMenuItem, TUrlTarget } from './gl-shared-component-menu-item.interface';
import { GlSharedComponentMenuService } from '../gl-shared-component-menu.service';
export declare class GlSharedComponentMenuItemComponent {
    private _router;
    private _menu;
    itemClass: 'translucid' | 'dark' | '';
    absolute: boolean;
    menuLogo: string;
    src: string;
    href: string;
    fragment: string;
    alt: any;
    content: any;
    target: TUrlTarget;
    hasSubitem: boolean;
    active: boolean;
    subItems: IMenuItem[];
    $click: EventEmitter<any>;
    constructor(_router: Router, _menu: GlSharedComponentMenuService);
    openAbsoluteLink(event: any, href: any, target?: TUrlTarget): void;
    toggleActive(): void;
    onClick(event: any): void;
}
