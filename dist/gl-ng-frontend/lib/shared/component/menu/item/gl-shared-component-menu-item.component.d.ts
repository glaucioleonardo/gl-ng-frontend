import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { IMenuItem, TUrlTarget } from './gl-shared-component-menu-item.interface';
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
}
