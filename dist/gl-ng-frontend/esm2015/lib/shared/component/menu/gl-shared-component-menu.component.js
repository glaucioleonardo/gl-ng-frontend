import { __decorate } from "tslib";
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GlSharedComponentMenuService } from './gl-shared-component-menu.service';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/router';
import * as ɵngcc2 from './background/gl-shared-component-menu-background.component';
import * as ɵngcc3 from '@angular/common';
import * as ɵngcc4 from './item/gl-shared-component-menu-item.component';

const _c0 = ["container"];
const _c1 = ["background"];
function GlSharedComponentMenuComponent_img_10_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "img", 19);
    ɵngcc0.ɵɵlistener("click", function GlSharedComponentMenuComponent_img_10_Template_img_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.service.goToSettings(ctx_r5.settingsUrl, ctx_r5.settingsTarget); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("src", ctx_r2.settingsButton, ɵngcc0.ɵɵsanitizeUrl);
} }
function GlSharedComponentMenuComponent_gl_shared_component_menu_item_17_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "gl-shared-component-menu-item", 20);
} if (rf & 2) {
    const menuItem_r7 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("absolute", menuItem_r7.absolute)("alt", menuItem_r7.alt)("src", menuItem_r7.src)("routerLink", menuItem_r7.href)("href", menuItem_r7.href)("content", menuItem_r7.content)("itemClass", menuItem_r7.class)("target", menuItem_r7.target);
} }
function GlSharedComponentMenuComponent_gl_shared_component_menu_item_18_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "gl-shared-component-menu-item", 21);
} if (rf & 2) {
    const menuItem_r8 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("absolute", menuItem_r8.absolute)("alt", menuItem_r8.alt)("src", menuItem_r8.src)("routerLink", menuItem_r8.href)("href", menuItem_r8.href)("content", menuItem_r8.content)("itemClass", menuItem_r8.class)("hasSubitem", menuItem_r8.hasSubitem)("active", menuItem_r8.active)("target", menuItem_r8.target)("subItems", menuItem_r8.subItems);
} }
let GlSharedComponentMenuComponent = class GlSharedComponentMenuComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.settingsTarget = '_blank';
        this.menuLogo = '../assets/img/logo/glaucio-logo-colored.svg';
        this.menuBottomVersion = '1.0.0';
        this.menuPosition = 'right';
        this.closeButton = '../assets/img/icon/side-menu/close.svg';
        this.settingsButton = '../assets/img/icon/side-menu/admin-settings.svg';
    }
    ngOnInit() {
        this.service.initialize(this.container.nativeElement, this.background.nativeElement, this.router);
    }
};
GlSharedComponentMenuComponent.ɵfac = function GlSharedComponentMenuComponent_Factory(t) { return new (t || GlSharedComponentMenuComponent)(ɵngcc0.ɵɵdirectiveInject(GlSharedComponentMenuService), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Router)); };
GlSharedComponentMenuComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentMenuComponent, selectors: [["gl-shared-component-menu"]], viewQuery: function GlSharedComponentMenuComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c0, true, ElementRef);
        ɵngcc0.ɵɵstaticViewQuery(_c1, true, ElementRef);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.container = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.background = _t.first);
    } }, inputs: { settingsTarget: "settingsTarget", menuLogo: "menuLogo", menuBottomVersion: "menuBottomVersion", menuPosition: "menuPosition", title: "title", subtitle: "subtitle", systemVersion: "systemVersion", menuItems: "menuItems", menuItemsComplex: "menuItemsComplex", showSettings: "showSettings", className: "className", settingsUrl: "settingsUrl", menuBottomTitle: "menuBottomTitle" }, decls: 26, vars: 16, consts: [[3, "click"], ["background", ""], ["container", ""], [1, "menu-nav-container"], [1, "menu-content"], [1, "menu-header-container"], [1, "menu-header"], [1, "menu-top-icons-container"], ["id", "close-menu-button", "alt", "Close menu button", 1, "menu-icons", "close-menu", 3, "src", "click"], ["id", "settings-menu-button", "class", "menu-icons settings-menu", "alt", "Settings menu button", 3, "src", "click", 4, "ngIf"], [1, "menu-header-title"], [1, "title"], [1, "subtitle"], [3, "absolute", "alt", "src", "routerLink", "href", "content", "itemClass", "target", 4, "ngFor", "ngForOf"], [3, "absolute", "alt", "src", "routerLink", "href", "content", "itemClass", "hasSubitem", "active", "target", "subItems", 4, "ngFor", "ngForOf"], [1, "logo-main-container"], [1, "logo-container"], ["alt", "Menu Logo", 1, "main-logo", 3, "src"], [1, "main-logo-title"], ["id", "settings-menu-button", "alt", "Settings menu button", 1, "menu-icons", "settings-menu", 3, "src", "click"], [3, "absolute", "alt", "src", "routerLink", "href", "content", "itemClass", "target"], [3, "absolute", "alt", "src", "routerLink", "href", "content", "itemClass", "hasSubitem", "active", "target", "subItems"]], template: function GlSharedComponentMenuComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "gl-shared-component-menu-background", 0, 1);
        ɵngcc0.ɵɵlistener("click", function GlSharedComponentMenuComponent_Template_gl_shared_component_menu_background_click_0_listener($event) { return ctx.service.backgroundClick($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(2, "div", null, 2);
        ɵngcc0.ɵɵelementStart(4, "nav", 3);
        ɵngcc0.ɵɵelementStart(5, "ul", 4);
        ɵngcc0.ɵɵelementStart(6, "li", 5);
        ɵngcc0.ɵɵelementStart(7, "div", 6);
        ɵngcc0.ɵɵelementStart(8, "div", 7);
        ɵngcc0.ɵɵelementStart(9, "img", 8);
        ɵngcc0.ɵɵlistener("click", function GlSharedComponentMenuComponent_Template_img_click_9_listener($event) { return ctx.service.close($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(10, GlSharedComponentMenuComponent_img_10_Template, 1, 1, "img", 9);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(11, "div", 10);
        ɵngcc0.ɵɵelementStart(12, "h1", 11);
        ɵngcc0.ɵɵtext(13);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(14, "h2", 12);
        ɵngcc0.ɵɵtext(15);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(16, "li");
        ɵngcc0.ɵɵtemplate(17, GlSharedComponentMenuComponent_gl_shared_component_menu_item_17_Template, 1, 8, "gl-shared-component-menu-item", 13);
        ɵngcc0.ɵɵtemplate(18, GlSharedComponentMenuComponent_gl_shared_component_menu_item_18_Template, 1, 11, "gl-shared-component-menu-item", 14);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(19, "li", 15);
        ɵngcc0.ɵɵelementStart(20, "div", 16);
        ɵngcc0.ɵɵelement(21, "img", 17);
        ɵngcc0.ɵɵelementStart(22, "span", 18);
        ɵngcc0.ɵɵtext(23);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(24, "span", 18);
        ɵngcc0.ɵɵtext(25);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassMapInterpolate2("menu-container ", ctx.className, " ", ctx.menuPosition === "left" ? "left" : "right", "");
        ɵngcc0.ɵɵadvance(7);
        ɵngcc0.ɵɵproperty("src", ctx.closeButton, ɵngcc0.ɵɵsanitizeUrl);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showSettings);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate(ctx.title);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.subtitle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("menu-content-container ", (ctx.title == null ? null : ctx.title.length) > 0 ? "has-title" : "", "");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.menuItems);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.menuItemsComplex);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("src", ctx.menuLogo, ɵngcc0.ɵɵsanitizeUrl);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.menuBottomTitle);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.menuBottomVersion == null ? "Version: " + ctx.systemVersion : ctx.menuBottomVersion);
    } }, directives: [ɵngcc2.GlSharedComponentMenuBackgroundComponent, ɵngcc3.NgIf, ɵngcc3.NgForOf, ɵngcc4.GlSharedComponentMenuItemComponent, ɵngcc1.RouterLink], styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);[_nghost-%COMP%]  .menu-container{border-top:.3em solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5;border-bottom:0 solid transparent!important;background:0 0/cover #1a1b1d;position:fixed;top:0;bottom:0;overflow:hidden;width:85vw;max-width:17em;min-width:17em;z-index:10000;flex-grow:1;display:flex;height:100vh}[_nghost-%COMP%]  .menu-container::after{width:100%;height:.7em;left:0;bottom:.7em;margin-bottom:-.7em;content:\"\";position:absolute;background:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%)}[_nghost-%COMP%]  .menu-container.left{left:-110%;transition:left .5s ease-in-out}[_nghost-%COMP%]  .menu-container.right{right:-110%;transition:right .5s ease-in-out}[_nghost-%COMP%]  .menu-container .a{display:block;min-height:3em}[_nghost-%COMP%]  .menu-container .menu-nav-container{overflow:hidden;scrollbar-width:none;max-height:100%;flex-grow:1;display:flex}[_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content{display:flex;flex-direction:column;flex-grow:1;position:relative}[_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-header-container{max-width:17em}[_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header{display:flex;flex-direction:column;margin:.5em 1em 1em .5em}[_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-top-icons-container{display:flex;margin:0 0 1.5em}[_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-top-icons-container .close-menu, [_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-top-icons-container .settings-menu{cursor:pointer;height:1.5em;width:1.5em}[_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-top-icons-container .close-menu:active, [_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-top-icons-container .close-menu:hover, [_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-top-icons-container .settings-menu:active, [_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-top-icons-container .settings-menu:hover{opacity:1;-webkit-animation:.4s ease-in-out forwards increase-decrease;animation:.4s ease-in-out forwards increase-decrease}[_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-top-icons-container .close-menu{margin:0 .2em 0 0}[_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-header-title .subtitle, [_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-header-title .title{text-transform:uppercase;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#fff;margin:0;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}[_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-header-title .title{font-family:Montserrat,sans-serif;font-weight:700;font-size:.9em}[_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-header-title .subtitle{font-family:Montserrat,sans-serif;font-weight:100;font-size:1.5em}[_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-header-container .admin-settings{visibility:collapse}[_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-header-container .menu-item-container{display:flex;flex-direction:column;font-size:.8em;background-color:rgba(255,255,255,.3)}[_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-header-container .menu-item-container .menu-item{min-height:3em;font-size:.8em;display:flex;align-items:center;padding:.2em;transition:.2s ease-in-out}[_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-header-container .menu-item-container .menu-item:nth-child(n+2){border-top:1px solid;border-image-source:linear-gradient(90deg,transparent 15%,rgba(255,255,255,.1) 15.01%,rgba(255,255,255,.05) 98%,transparent 98%);border-image-slice:1}[_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-header-container .menu-item-container .menu-item:hover{background-color:rgba(75,77,82,.3)}[_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-header-container .menu-item-container .menu-icons{margin:0 0 0 .7em;height:1.8em;width:1.8em;opacity:.5}[_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-header-container .menu-item-container a{color:rgba(255,255,255,.6);padding:.8em;flex-grow:1;text-decoration:none}[_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-content-container{max-height:calc(100vh - (12.15em));max-width:17em;overflow-y:auto;overflow-x:hidden!important}[_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-content-container.has-title{max-height:calc(100vh - (13em))}[_nghost-%COMP%]  .menu-container .menu-nav-container .logo-container{display:flex;flex-direction:column;align-items:center;bottom:5vh;position:absolute;width:100%}[_nghost-%COMP%]  .menu-container .menu-nav-container .logo-container .main-logo{height:2em;width:2em}[_nghost-%COMP%]  .menu-container .menu-nav-container .logo-container .main-logo-title{color:#fff;font-size:.4em;margin:1em 0 0}[_nghost-%COMP%]  .show-admin-settings{visibility:visible!important}[_nghost-%COMP%]  .menu-container.menu-active.left{left:0}[_nghost-%COMP%]  .menu-container.menu-active.right{right:0}[_nghost-%COMP%]  .menu-background{opacity:0;z-index:-100}[_nghost-%COMP%]  .visible-background{width:100%;height:100%;background:rgba(0,0,0,.6);opacity:1;position:fixed;top:0;z-index:999;transition:opacity 1s ease-in-out}[_nghost-%COMP%]  .hide-subtitle{opacity:0;visibility:collapse;margin:0;padding:0;transition:.25s ease-in-out}[_nghost-%COMP%]  .show-subtitle{opacity:1;visibility:visible;transition:.25s ease-in-out .4s}[_nghost-%COMP%]  .hide-subtitle-container{-webkit-animation:.4s ease-in-out forwards hide-subtitle;animation:.4s ease-in-out forwards hide-subtitle}[_nghost-%COMP%]  .show-subtitle-container{-webkit-animation:.4s ease-in-out forwards show-subtitle;animation:.4s ease-in-out forwards show-subtitle}[_nghost-%COMP%]  .collapsed-menu .expand{transform:rotate(0);transition:.4s ease-in-out}[_nghost-%COMP%]  .collapsed-menu .menu-icons{-webkit-animation:.4s ease-in-out forwards decrease-increase;animation:.4s ease-in-out forwards decrease-increase}[_nghost-%COMP%]  .expanded-menu .expand{transform:rotate(-180deg);transition:.4s ease-in-out}[_nghost-%COMP%]  .expanded-menu .menu-icons{-webkit-animation:.4s ease-in-out forwards increase-decrease;animation:.4s ease-in-out forwards increase-decrease}[_nghost-%COMP%]  .menu-container.dark{border-left:1px solid #38393c;border-top:.3em solid rgba(210,64,119,.7);border-image-source:none}[_nghost-%COMP%]  .menu-container.translucid{background:rgba(255,255,255,.05);border-left:1px solid rgba(255,255,255,.05);border-top:.3em solid rgba(255,255,255,.1);border-image-source:none}"] });
GlSharedComponentMenuComponent.ctorParameters = () => [
    { type: GlSharedComponentMenuService },
    { type: Router }
];
__decorate([
    ViewChild('container', { static: true, read: ElementRef })
], GlSharedComponentMenuComponent.prototype, "container", void 0);
__decorate([
    ViewChild('background', { static: true, read: ElementRef })
], GlSharedComponentMenuComponent.prototype, "background", void 0);
__decorate([
    Input()
], GlSharedComponentMenuComponent.prototype, "title", void 0);
__decorate([
    Input()
], GlSharedComponentMenuComponent.prototype, "subtitle", void 0);
__decorate([
    Input()
], GlSharedComponentMenuComponent.prototype, "systemVersion", void 0);
__decorate([
    Input()
], GlSharedComponentMenuComponent.prototype, "menuItems", void 0);
__decorate([
    Input()
], GlSharedComponentMenuComponent.prototype, "menuItemsComplex", void 0);
__decorate([
    Input()
], GlSharedComponentMenuComponent.prototype, "showSettings", void 0);
__decorate([
    Input()
], GlSharedComponentMenuComponent.prototype, "className", void 0);
__decorate([
    Input()
], GlSharedComponentMenuComponent.prototype, "settingsUrl", void 0);
__decorate([
    Input()
], GlSharedComponentMenuComponent.prototype, "settingsTarget", void 0);
__decorate([
    Input()
], GlSharedComponentMenuComponent.prototype, "menuLogo", void 0);
__decorate([
    Input()
], GlSharedComponentMenuComponent.prototype, "menuBottomTitle", void 0);
__decorate([
    Input()
], GlSharedComponentMenuComponent.prototype, "menuBottomVersion", void 0);
__decorate([
    Input()
], GlSharedComponentMenuComponent.prototype, "menuPosition", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentMenuComponent, [{
        type: Component,
        args: [{
                selector: 'gl-shared-component-menu',
                template: "<gl-shared-component-menu-background\n  #background\n  (click)=\"service.backgroundClick($event)\"\n></gl-shared-component-menu-background>\n<div #container class=\"menu-container {{ className }} {{ menuPosition === 'left' ? 'left' : 'right' }}\">\n  <nav class=\"menu-nav-container\">\n    <ul class=\"menu-content\">\n      <li class=\"menu-header-container\">\n        <div class=\"menu-header\">\n          <div class=\"menu-top-icons-container\">\n            <img id=\"close-menu-button\"\n               (click)=\"service.close($event)\"\n               [src]=\"closeButton\"\n               class=\"menu-icons close-menu\"\n               alt=\"Close menu button\">\n            <img\n              *ngIf=\"showSettings\"\n              id=\"settings-menu-button\"\n              (click)=\"service.goToSettings(settingsUrl, settingsTarget)\"\n              [src]=\"settingsButton\"\n              class=\"menu-icons settings-menu\"\n              alt=\"Settings menu button\">\n          </div>\n          <div class=\"menu-header-title\">\n            <h1 class=\"title\">{{ title }}</h1>\n            <h2 class=\"subtitle\">{{ subtitle }}</h2>\n          </div>\n        </div>\n      </li>\n      <li class=\"menu-content-container {{ title?.length > 0 ? 'has-title' : '' }}\">\n        <gl-shared-component-menu-item\n          *ngFor=\"let menuItem of menuItems\"\n          [absolute]=\"menuItem.absolute\"\n          [alt]=\"menuItem.alt\"\n          [src]=\"menuItem.src\"\n          [routerLink]=\"menuItem.href\"\n          [href]=\"menuItem.href\"\n          [content]=\"menuItem.content\"\n          [itemClass]=\"menuItem.class\"\n          [target]=\"menuItem.target\"\n        ></gl-shared-component-menu-item>\n        <gl-shared-component-menu-item\n          *ngFor=\"let menuItem of menuItemsComplex\"\n          [absolute]=\"menuItem.absolute\"\n          [alt]=\"menuItem.alt\"\n          [src]=\"menuItem.src\"\n          [routerLink]=\"menuItem.href\"\n          [href]=\"menuItem.href\"\n          [content]=\"menuItem.content\"\n          [itemClass]=\"menuItem.class\"\n          [hasSubitem]=\"menuItem.hasSubitem\"\n          [active]=\"menuItem.active\"\n          [target]=\"menuItem.target\"\n          [subItems]=\"menuItem.subItems\"\n        ></gl-shared-component-menu-item>\n      </li>\n      <li class=\"logo-main-container\">\n        <div class=\"logo-container\">\n          <img class=\"main-logo\" [src]=\"menuLogo\" alt=\"Menu Logo\"/>\n          <span class=\"main-logo-title\">{{ menuBottomTitle }}</span>\n          <span class=\"main-logo-title\">{{ menuBottomVersion == null ? 'Version: ' + systemVersion : menuBottomVersion }}</span>\n        </div>\n      </li>\n    </ul>\n  </nav>\n</div>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep .menu-container{border-top:.3em solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5;border-bottom:0 solid transparent!important;background:0 0/cover #1a1b1d;position:fixed;top:0;bottom:0;overflow:hidden;width:85vw;max-width:17em;min-width:17em;z-index:10000;flex-grow:1;display:flex;height:100vh}:host::ng-deep .menu-container::after{width:100%;height:.7em;left:0;bottom:.7em;margin-bottom:-.7em;content:\"\";position:absolute;background:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%)}:host::ng-deep .menu-container.left{left:-110%;transition:left .5s ease-in-out}:host::ng-deep .menu-container.right{right:-110%;transition:right .5s ease-in-out}:host::ng-deep .menu-container .a{display:block;min-height:3em}:host::ng-deep .menu-container .menu-nav-container{overflow:hidden;scrollbar-width:none;max-height:100%;flex-grow:1;display:flex}:host::ng-deep .menu-container .menu-nav-container .menu-content{display:flex;flex-direction:column;flex-grow:1;position:relative}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container{max-width:17em}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header{display:flex;flex-direction:column;margin:.5em 1em 1em .5em}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-top-icons-container{display:flex;margin:0 0 1.5em}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-top-icons-container .close-menu,:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-top-icons-container .settings-menu{cursor:pointer;height:1.5em;width:1.5em}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-top-icons-container .close-menu:active,:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-top-icons-container .close-menu:hover,:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-top-icons-container .settings-menu:active,:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-top-icons-container .settings-menu:hover{opacity:1;-webkit-animation:.4s ease-in-out forwards increase-decrease;animation:.4s ease-in-out forwards increase-decrease}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-top-icons-container .close-menu{margin:0 .2em 0 0}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-header-title .subtitle,:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-header-title .title{text-transform:uppercase;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#fff;margin:0;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-header-title .title{font-family:Montserrat,sans-serif;font-weight:700;font-size:.9em}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-header-title .subtitle{font-family:Montserrat,sans-serif;font-weight:100;font-size:1.5em}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .admin-settings{visibility:collapse}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-item-container{display:flex;flex-direction:column;font-size:.8em;background-color:rgba(255,255,255,.3)}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-item-container .menu-item{min-height:3em;font-size:.8em;display:flex;align-items:center;padding:.2em;transition:.2s ease-in-out}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-item-container .menu-item:nth-child(n+2){border-top:1px solid;border-image-source:linear-gradient(90deg,transparent 15%,rgba(255,255,255,.1) 15.01%,rgba(255,255,255,.05) 98%,transparent 98%);border-image-slice:1}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-item-container .menu-item:hover{background-color:rgba(75,77,82,.3)}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-item-container .menu-icons{margin:0 0 0 .7em;height:1.8em;width:1.8em;opacity:.5}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-item-container a{color:rgba(255,255,255,.6);padding:.8em;flex-grow:1;text-decoration:none}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-content-container{max-height:calc(100vh - (12.15em));max-width:17em;overflow-y:auto;overflow-x:hidden!important}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-content-container.has-title{max-height:calc(100vh - (13em))}:host::ng-deep .menu-container .menu-nav-container .logo-container{display:flex;flex-direction:column;align-items:center;bottom:5vh;position:absolute;width:100%}:host::ng-deep .menu-container .menu-nav-container .logo-container .main-logo{height:2em;width:2em}:host::ng-deep .menu-container .menu-nav-container .logo-container .main-logo-title{color:#fff;font-size:.4em;margin:1em 0 0}:host::ng-deep .show-admin-settings{visibility:visible!important}:host::ng-deep .menu-container.menu-active.left{left:0}:host::ng-deep .menu-container.menu-active.right{right:0}:host::ng-deep .menu-background{opacity:0;z-index:-100}:host::ng-deep .visible-background{width:100%;height:100%;background:rgba(0,0,0,.6);opacity:1;position:fixed;top:0;z-index:999;transition:opacity 1s ease-in-out}:host::ng-deep .hide-subtitle{opacity:0;visibility:collapse;margin:0;padding:0;transition:.25s ease-in-out}:host::ng-deep .show-subtitle{opacity:1;visibility:visible;transition:.25s ease-in-out .4s}:host::ng-deep .hide-subtitle-container{-webkit-animation:.4s ease-in-out forwards hide-subtitle;animation:.4s ease-in-out forwards hide-subtitle}:host::ng-deep .show-subtitle-container{-webkit-animation:.4s ease-in-out forwards show-subtitle;animation:.4s ease-in-out forwards show-subtitle}:host::ng-deep .collapsed-menu .expand{transform:rotate(0);transition:.4s ease-in-out}:host::ng-deep .collapsed-menu .menu-icons{-webkit-animation:.4s ease-in-out forwards decrease-increase;animation:.4s ease-in-out forwards decrease-increase}:host::ng-deep .expanded-menu .expand{transform:rotate(-180deg);transition:.4s ease-in-out}:host::ng-deep .expanded-menu .menu-icons{-webkit-animation:.4s ease-in-out forwards increase-decrease;animation:.4s ease-in-out forwards increase-decrease}:host::ng-deep .menu-container.dark{border-left:1px solid #38393c;border-top:.3em solid rgba(210,64,119,.7);border-image-source:none}:host::ng-deep .menu-container.translucid{background:rgba(255,255,255,.05);border-left:1px solid rgba(255,255,255,.05);border-top:.3em solid rgba(255,255,255,.1);border-image-source:none}"]
            }]
    }], function () { return [{ type: GlSharedComponentMenuService }, { type: ɵngcc1.Router }]; }, { settingsTarget: [{
            type: Input
        }], menuLogo: [{
            type: Input
        }], menuBottomVersion: [{
            type: Input
        }], menuPosition: [{
            type: Input
        }], container: [{
            type: ViewChild,
            args: ['container', { static: true, read: ElementRef }]
        }], background: [{
            type: ViewChild,
            args: ['background', { static: true, read: ElementRef }]
        }], title: [{
            type: Input
        }], subtitle: [{
            type: Input
        }], systemVersion: [{
            type: Input
        }], menuItems: [{
            type: Input
        }], menuItemsComplex: [{
            type: Input
        }], showSettings: [{
            type: Input
        }], className: [{
            type: Input
        }], settingsUrl: [{
            type: Input
        }], menuBottomTitle: [{
            type: Input
        }] }); })();
export { GlSharedComponentMenuComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsibmc6L2dsLW5nLWZyb250ZW5kL2xpYi9zaGFyZWQvY29tcG9uZW50L21lbnUvZ2wtc2hhcmVkLWNvbXBvbmVudC1tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUMsekNBQXpDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQyxsRkFBbEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFTbEYsSUFBYSw4QkFBOEIsR0FBM0M7RUFBYSw4QkFBOEIsT0FxQnpDO1FBQ1MsT0FBcUMsRUFDckMsTUFBYyxZQURkLFlBQU8sR0FBUCxPQUFPLENBQThCLFNBQ3JDLFdBQU0sR0FBTjtDQUFNLENBQVEsU0FYZCxtQkFBYyxHQUFXLFFBQVEsQ0FBQztRQUNsQyxhQUFRLEdBQVcsNkNBQTZDLENBQUM7O0lBRWpFLHNCQUFpQjtFQUFXLE9BQU8sQ0FBQyxTQUNwQztRQUFZLEdBQWtCLE9BQU8sQ0FBQyxTQUV0QyxnQkFBVyxHQUFHO01BQXdDLENBQUMsU0FDdkQsbUJBQWMsR0FBRzs7R0FBaUQsQ0FBQyxLQUt4RSxDQUFDLEtBRUwsUUFBUSxhQUNOLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUNwRyxDQUFDLEVBQ0YsQ0FBQSxxRUFQbUIsNEJBQTRCLGdCQUM3QjtDQUFN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QUFLLEVBQUU7eUVBQXFDLHpFQUFwQyx5RUFBb0M7QUFDcEMsQUFBQTtJQUFSLEtBQUssRUFBRSxYQUFjLElBQXJCLEtBQUssRUFBRTtvRUFBdUMscEVBQXRDLG9FQUFzQztBQWhCcEMsOEJBQThCLG9CQUwxQyxTQUFTLENBQUMsVUFDVCxRQUFRLEVBQUUsaEZBSUMsOEJBQThCLG9CQUwxQyxTQUFTLENBQUMsVUFDVCxRQUFRLEVBQUU7aUJBQTBCLEFBQUE7RUFDcEMsQUFBQTs7c29GQUF3RCxBQUFBO29wT0FFekQsQ0FBQyxJQUNXLDhCQUE4QixDQTZCMUMsV0E3QlksOEJBQThCLDdFQUQxQyxDQUFDLElBQ1csOEJBQThCLENBNkIxQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFDRDs7QUF6Q0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgR2xTaGFyZWRDb21wb25lbnRNZW51U2VydmljZSB9IGZyb20gJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1tZW51LnNlcnZpY2UnO1xuaW1wb3J0IHsgSU1lbnVJdGVtLCBJTWVudUl0ZW1Db21wbGV4IH0gZnJvbSAnLi9pdGVtL2dsLXNoYXJlZC1jb21wb25lbnQtbWVudS1pdGVtLmludGVyZmFjZSc7XG5pbXBvcnQgeyBUTWVudVBvc2l0aW9uIH0gZnJvbSAnLi9nbC1zaGFyZWQtY29tcG9uZW50LW1lbnUuaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2wtc2hhcmVkLWNvbXBvbmVudC1tZW51JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dsLXNoYXJlZC1jb21wb25lbnQtbWVudS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtbWVudS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50TWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHsgc3RhdGljOiB0cnVlLCByZWFkOiBFbGVtZW50UmVmIH0pIGNvbnRhaW5lcjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ2JhY2tncm91bmQnLCB7IHN0YXRpYzogdHJ1ZSwgcmVhZDogRWxlbWVudFJlZiB9KSBiYWNrZ3JvdW5kOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcblxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBzdWJ0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBzeXN0ZW1WZXJzaW9uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1lbnVJdGVtczogSU1lbnVJdGVtW107XG4gIEBJbnB1dCgpIG1lbnVJdGVtc0NvbXBsZXg6IElNZW51SXRlbUNvbXBsZXhbXTtcbiAgQElucHV0KCkgc2hvd1NldHRpbmdzOiBib29sZWFuO1xuICBASW5wdXQoKSBjbGFzc05hbWU6IHN0cmluZztcbiAgQElucHV0KCkgc2V0dGluZ3NVcmw6IHN0cmluZztcbiAgQElucHV0KCkgc2V0dGluZ3NUYXJnZXQ6IHN0cmluZyA9ICdfYmxhbmsnO1xuICBASW5wdXQoKSBtZW51TG9nbzogc3RyaW5nID0gJy4uL2Fzc2V0cy9pbWcvbG9nby9nbGF1Y2lvLWxvZ28tY29sb3JlZC5zdmcnO1xuICBASW5wdXQoKSBtZW51Qm90dG9tVGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgbWVudUJvdHRvbVZlcnNpb246IHN0cmluZyA9ICcxLjAuMCc7XG4gIEBJbnB1dCgpIG1lbnVQb3NpdGlvbjogVE1lbnVQb3NpdGlvbiA9ICdyaWdodCc7XG5cbiAgcmVhZG9ubHkgY2xvc2VCdXR0b24gPSAnLi4vYXNzZXRzL2ltZy9pY29uL3NpZGUtbWVudS9jbG9zZS5zdmcnO1xuICByZWFkb25seSBzZXR0aW5nc0J1dHRvbiA9ICcuLi9hc3NldHMvaW1nL2ljb24vc2lkZS1tZW51L2FkbWluLXNldHRpbmdzLnN2Zyc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHNlcnZpY2U6IEdsU2hhcmVkQ29tcG9uZW50TWVudVNlcnZpY2UsXG4gICAgcHVibGljIHJvdXRlcjogUm91dGVyXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXJ2aWNlLmluaXRpYWxpemUodGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudCwgdGhpcy5iYWNrZ3JvdW5kLm5hdGl2ZUVsZW1lbnQsIHRoaXMucm91dGVyKTtcbiAgfVxufVxuIl19