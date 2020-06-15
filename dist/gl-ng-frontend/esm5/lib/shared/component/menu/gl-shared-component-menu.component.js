import { __decorate } from "tslib";
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GlSharedComponentMenuService } from './gl-shared-component-menu.service';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/router';
import * as ɵngcc2 from './background/gl-shared-component-menu-background.component';
import * as ɵngcc3 from '@angular/common';
import * as ɵngcc4 from './item/gl-shared-component-menu-item.component';

var _c0 = ["container"];
var _c1 = ["background"];
function GlSharedComponentMenuComponent_img_10_Template(rf, ctx) { if (rf & 1) {
    var _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "img", 17);
    ɵngcc0.ɵɵlistener("click", function GlSharedComponentMenuComponent_img_10_Template_img_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r5); var ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.service.goToSettings(ctx_r4.settingsUrl, ctx_r4.settingsTarget); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("src", ctx_r2.settingsButton, ɵngcc0.ɵɵsanitizeUrl);
} }
function GlSharedComponentMenuComponent_gl_shared_component_menu_item_16_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "gl-shared-component-menu-item", 18);
} if (rf & 2) {
    var menuItem_r6 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("absolute", menuItem_r6.absolute)("alt", menuItem_r6.alt)("src", menuItem_r6.src)("routerLink", menuItem_r6.href)("href", menuItem_r6.href)("content", menuItem_r6.content)("itemClass", menuItem_r6.class);
} }
var GlSharedComponentMenuComponent = /** @class */ (function () {
    function GlSharedComponentMenuComponent(service, router) {
        this.service = service;
        this.router = router;
        this.settingsTarget = '_blank';
        this.menuLogo = '../assets/img/logo/glaucio-logo-colored.svg';
        this.menuBottomVersion = '1.0.0';
        this.menuPosition = 'right';
        this.closeButton = '../assets/img/icon/side-menu/close.svg';
        this.settingsButton = '../assets/img/icon/side-menu/admin-settings.svg';
    }
    GlSharedComponentMenuComponent.prototype.ngOnInit = function () {
        this.service.initialize(this.container.nativeElement, this.background.nativeElement, this.router);
    };
    GlSharedComponentMenuComponent.ctorParameters = function () { return [
        { type: GlSharedComponentMenuService },
        { type: Router }
    ]; };
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
GlSharedComponentMenuComponent.ɵfac = function GlSharedComponentMenuComponent_Factory(t) { return new (t || GlSharedComponentMenuComponent)(ɵngcc0.ɵɵdirectiveInject(GlSharedComponentMenuService), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Router)); };
GlSharedComponentMenuComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentMenuComponent, selectors: [["gl-shared-component-menu"]], viewQuery: function GlSharedComponentMenuComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c0, true, ElementRef);
        ɵngcc0.ɵɵstaticViewQuery(_c1, true, ElementRef);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.container = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.background = _t.first);
    } }, inputs: { settingsTarget: "settingsTarget", menuLogo: "menuLogo", menuBottomVersion: "menuBottomVersion", menuPosition: "menuPosition", title: "title", subtitle: "subtitle", systemVersion: "systemVersion", menuItems: "menuItems", showSettings: "showSettings", className: "className", settingsUrl: "settingsUrl", menuBottomTitle: "menuBottomTitle" }, decls: 24, vars: 12, consts: [[3, "click"], ["background", ""], ["container", ""], [1, "menu-nav-container"], [1, "menu-content"], [1, "menu-header"], [1, "menu-top-icons-container"], ["id", "close-menu-button", "alt", "Close menu button", 1, "menu-icons", "close-menu", 3, "src", "click"], ["id", "settings-menu-button", "class", "menu-icons settings-menu", "alt", "Settings menu button", 3, "src", "click", 4, "ngIf"], [1, "menu-header-title"], [1, "title"], [1, "subtitle"], [3, "absolute", "alt", "src", "routerLink", "href", "content", "itemClass", 4, "ngFor", "ngForOf"], [1, "logo-main-container"], [1, "logo-container"], ["alt", "Menu Logo", 1, "main-logo", 3, "src"], [1, "main-logo-title"], ["id", "settings-menu-button", "alt", "Settings menu button", 1, "menu-icons", "settings-menu", 3, "src", "click"], [3, "absolute", "alt", "src", "routerLink", "href", "content", "itemClass"]], template: function GlSharedComponentMenuComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "gl-shared-component-menu-background", 0, 1);
        ɵngcc0.ɵɵlistener("click", function GlSharedComponentMenuComponent_Template_gl_shared_component_menu_background_click_0_listener($event) { return ctx.service.backgroundClick($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(2, "div", null, 2);
        ɵngcc0.ɵɵelementStart(4, "nav", 3);
        ɵngcc0.ɵɵelementStart(5, "ul", 4);
        ɵngcc0.ɵɵelementStart(6, "li");
        ɵngcc0.ɵɵelementStart(7, "div", 5);
        ɵngcc0.ɵɵelementStart(8, "div", 6);
        ɵngcc0.ɵɵelementStart(9, "img", 7);
        ɵngcc0.ɵɵlistener("click", function GlSharedComponentMenuComponent_Template_img_click_9_listener($event) { return ctx.service.close($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(10, GlSharedComponentMenuComponent_img_10_Template, 1, 1, "img", 8);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(11, "div", 9);
        ɵngcc0.ɵɵelementStart(12, "h1", 10);
        ɵngcc0.ɵɵtext(13);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(14, "h2", 11);
        ɵngcc0.ɵɵtext(15);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(16, GlSharedComponentMenuComponent_gl_shared_component_menu_item_16_Template, 1, 7, "gl-shared-component-menu-item", 12);
        ɵngcc0.ɵɵelementStart(17, "li", 13);
        ɵngcc0.ɵɵelementStart(18, "div", 14);
        ɵngcc0.ɵɵelement(19, "img", 15);
        ɵngcc0.ɵɵelementStart(20, "span", 16);
        ɵngcc0.ɵɵtext(21);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(22, "span", 16);
        ɵngcc0.ɵɵtext(23);
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
        ɵngcc0.ɵɵproperty("ngForOf", ctx.menuItems);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("src", ctx.menuLogo, ɵngcc0.ɵɵsanitizeUrl);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.menuBottomTitle);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.menuBottomVersion == null ? "Version: " + ctx.systemVersion : ctx.menuBottomVersion);
    } }, directives: [ɵngcc2.GlSharedComponentMenuBackgroundComponent, ɵngcc3.NgIf, ɵngcc3.NgForOf, ɵngcc4.GlSharedComponentMenuItemComponent, ɵngcc1.RouterLink], styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);[_nghost-%COMP%]  .menu-container{border-top:.3em solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5;border-bottom:0 solid transparent!important;background:0 0/cover #1a1b1d;position:fixed;top:0;bottom:0;overflow:hidden;width:85vw;max-width:17em;min-width:17em;z-index:10000;flex-grow:1;display:flex;height:100vh}[_nghost-%COMP%]  .menu-container::after{width:100%;height:.7em;left:0;bottom:.7em;margin-bottom:-.7em;content:\"\";position:absolute;background:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%)}[_nghost-%COMP%]  .menu-container.left{left:-110%;transition:left .5s ease-in-out}[_nghost-%COMP%]  .menu-container.right{right:-110%;transition:right .5s ease-in-out}[_nghost-%COMP%]  .menu-container .a{display:block;min-height:3em}[_nghost-%COMP%]  .menu-container .menu-nav-container{overflow:auto;scrollbar-width:none;max-height:100%;flex-grow:1;display:flex}[_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content{display:flex;flex-direction:column;flex-grow:1;position:relative}[_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-header{display:flex;flex-direction:column;margin:.5em 1em 1em .5em}[_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-header .menu-top-icons-container{display:flex;margin:0 0 1.5em}[_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-header .menu-top-icons-container .close-menu, [_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-header .menu-top-icons-container .settings-menu{cursor:pointer;height:1.5em;width:1.5em}[_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-header .menu-top-icons-container .close-menu:active, [_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-header .menu-top-icons-container .close-menu:hover, [_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-header .menu-top-icons-container .settings-menu:active, [_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-header .menu-top-icons-container .settings-menu:hover{opacity:1;-webkit-animation:.4s ease-in-out forwards increase-decrease;animation:.4s ease-in-out forwards increase-decrease}[_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-header .menu-top-icons-container .close-menu{margin:0 .2em 0 0}[_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-header .menu-header-title .subtitle, [_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-header .menu-header-title .title{text-transform:uppercase;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#fff;margin:0}[_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-header .menu-header-title .title{font-family:Montserrat,sans-serif;font-weight:700;font-size:.9em;display:none}[_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-header .menu-header-title .subtitle{font-family:Montserrat,sans-serif;font-weight:100;font-size:1.5em}[_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .admin-settings{visibility:collapse}[_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-item-container{display:flex;flex-direction:column;font-size:.8em;background-color:rgba(255,255,255,.3)}[_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-item-container .menu-item{min-height:3em;font-size:.8em;display:flex;align-items:center;padding:.2em;transition:.2s ease-in-out}[_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-item-container .menu-item:nth-child(n+2){border-top:1px solid;border-image-source:linear-gradient(90deg,transparent 15%,rgba(255,255,255,.1) 15.01%,rgba(255,255,255,.05) 98%,transparent 98%);border-image-slice:1}[_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-item-container .menu-item:hover{background-color:rgba(75,77,82,.3)}[_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-item-container .menu-icons{margin:0 0 0 .7em;height:1.8em;width:1.8em;opacity:.5}[_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-item-container a{color:rgba(255,255,255,.6);padding:.8em;flex-grow:1;text-decoration:none}[_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-social-network{display:flex;justify-content:center;margin:3em 0 0;flex-grow:1;height:100%;align-items:flex-end}[_nghost-%COMP%]  .menu-container .menu-nav-container .menu-content .menu-social-network .menu-icons{height:2em;width:2em;margin:.2em}[_nghost-%COMP%]  .menu-container .menu-nav-container .logo-container{display:flex;flex-direction:column;align-items:center;bottom:5vh;position:absolute;width:100%}[_nghost-%COMP%]  .menu-container .menu-nav-container .logo-container .main-logo{height:2em;width:2em}[_nghost-%COMP%]  .menu-container .menu-nav-container .logo-container .main-logo-title{color:#fff;font-size:.4em;margin:1em 0 0}[_nghost-%COMP%]  .show-admin-settings{visibility:visible!important}[_nghost-%COMP%]  .menu-container.menu-active.left{left:0}[_nghost-%COMP%]  .menu-container.menu-active.right{right:0}[_nghost-%COMP%]  .menu-background{opacity:0;z-index:-100}[_nghost-%COMP%]  .visible-background{width:100%;height:100%;background:rgba(0,0,0,.6);opacity:1;position:fixed;top:0;z-index:999;transition:opacity 1s ease-in-out}[_nghost-%COMP%]  .hide-subtitle{opacity:0;visibility:collapse;margin:0;padding:0;transition:.25s ease-in-out}[_nghost-%COMP%]  .show-subtitle{opacity:1;visibility:visible;transition:.25s ease-in-out .4s}[_nghost-%COMP%]  .hide-subtitle-container{-webkit-animation:.4s ease-in-out forwards hide-subtitle;animation:.4s ease-in-out forwards hide-subtitle}[_nghost-%COMP%]  .show-subtitle-container{-webkit-animation:.4s ease-in-out forwards show-subtitle;animation:.4s ease-in-out forwards show-subtitle}[_nghost-%COMP%]  .collapsed-menu .expand{transform:rotate(0);transition:.4s ease-in-out}[_nghost-%COMP%]  .collapsed-menu .menu-icons{-webkit-animation:.4s ease-in-out forwards decrease-increase;animation:.4s ease-in-out forwards decrease-increase}[_nghost-%COMP%]  .expanded-menu .expand{transform:rotate(-180deg);transition:.4s ease-in-out}[_nghost-%COMP%]  .expanded-menu .menu-icons{-webkit-animation:.4s ease-in-out forwards increase-decrease;animation:.4s ease-in-out forwards increase-decrease}[_nghost-%COMP%]  .menu-container.dark{border-left:1px solid #38393c;border-top:.3em solid rgba(210,64,119,.7);border-image-source:none}[_nghost-%COMP%]  .menu-container.translucid{background:rgba(255,255,255,.05);border-left:1px solid rgba(255,255,255,.05);border-top:.3em solid rgba(255,255,255,.1);border-image-source:none}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){[_nghost-%COMP%]  .menu-container{border-top:0 solid transparent!important;padding-top:.2em;max-height:unset}[_nghost-%COMP%]  .menu-container::before{width:100%;height:.2em;left:0;top:.2em;margin-top:-.2em;content:\"\";position:absolute;background:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%)}[_nghost-%COMP%]  .menu-container .menu-nav-container .logo-main-container{position:fixed;bottom:2vh;display:flex;flex-direction:column;align-items:center;width:13vw}[_nghost-%COMP%]  .menu-container .menu-nav-container .logo-main-container .logo-container{display:flex;flex-direction:column;align-items:center;bottom:2vh;position:absolute;width:100%}[_nghost-%COMP%]  .menu-container .menu-nav-container .logo-main-container .logo-container .main-logo{height:2em;width:2em}[_nghost-%COMP%]  .menu-container .menu-nav-container .logo-main-container .logo-container .main-logo-title{display:block;color:#fff;font-size:.4em;margin:1em 0 0}}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentMenuComponent, [{
        type: Component,
        args: [{
                selector: 'gl-shared-component-menu',
                template: "<gl-shared-component-menu-background\n  #background\n  (click)=\"service.backgroundClick($event)\"\n></gl-shared-component-menu-background>\n<div #container class=\"menu-container {{ className }} {{ menuPosition === 'left' ? 'left' : 'right' }}\">\n  <nav class=\"menu-nav-container\">\n    <ul class=\"menu-content\">\n      <li>\n        <div class=\"menu-header\">\n          <div class=\"menu-top-icons-container\">\n            <img id=\"close-menu-button\"\n               (click)=\"service.close($event)\"\n               [src]=\"closeButton\"\n               class=\"menu-icons close-menu\"\n               alt=\"Close menu button\">\n            <img\n              *ngIf=\"showSettings\"\n              id=\"settings-menu-button\"\n              (click)=\"service.goToSettings(settingsUrl, settingsTarget)\"\n              [src]=\"settingsButton\"\n              class=\"menu-icons settings-menu\"\n              alt=\"Settings menu button\">\n          </div>\n          <div class=\"menu-header-title\">\n            <h1 class=\"title\">{{ title }}</h1>\n            <h2 class=\"subtitle\">{{ subtitle }}</h2>\n          </div>\n        </div>\n      </li>\n      <gl-shared-component-menu-item\n        *ngFor=\"let menuItem of menuItems\"\n        [absolute]=\"menuItem.absolute\"\n        [alt]=\"menuItem.alt\"\n        [src]=\"menuItem.src\"\n        [routerLink]=\"menuItem.href\"\n        [href]=\"menuItem.href\"\n        [content]=\"menuItem.content\"\n        [itemClass]=\"menuItem.class\"\n      ></gl-shared-component-menu-item>\n      <li class=\"logo-main-container\">\n        <div class=\"logo-container\">\n          <img class=\"main-logo\" [src]=\"menuLogo\" alt=\"Menu Logo\"/>\n          <span class=\"main-logo-title\">{{ menuBottomTitle }}</span>\n          <span class=\"main-logo-title\">{{ menuBottomVersion == null ? 'Version: ' + systemVersion : menuBottomVersion }}</span>\n        </div>\n      </li>\n    </ul>\n  </nav>\n</div>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep .menu-container{border-top:.3em solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5;border-bottom:0 solid transparent!important;background:0 0/cover #1a1b1d;position:fixed;top:0;bottom:0;overflow:hidden;width:85vw;max-width:17em;min-width:17em;z-index:10000;flex-grow:1;display:flex;height:100vh}:host::ng-deep .menu-container::after{width:100%;height:.7em;left:0;bottom:.7em;margin-bottom:-.7em;content:\"\";position:absolute;background:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%)}:host::ng-deep .menu-container.left{left:-110%;transition:left .5s ease-in-out}:host::ng-deep .menu-container.right{right:-110%;transition:right .5s ease-in-out}:host::ng-deep .menu-container .a{display:block;min-height:3em}:host::ng-deep .menu-container .menu-nav-container{overflow:auto;scrollbar-width:none;max-height:100%;flex-grow:1;display:flex}:host::ng-deep .menu-container .menu-nav-container .menu-content{display:flex;flex-direction:column;flex-grow:1;position:relative}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header{display:flex;flex-direction:column;margin:.5em 1em 1em .5em}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header .menu-top-icons-container{display:flex;margin:0 0 1.5em}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header .menu-top-icons-container .close-menu,:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header .menu-top-icons-container .settings-menu{cursor:pointer;height:1.5em;width:1.5em}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header .menu-top-icons-container .close-menu:active,:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header .menu-top-icons-container .close-menu:hover,:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header .menu-top-icons-container .settings-menu:active,:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header .menu-top-icons-container .settings-menu:hover{opacity:1;-webkit-animation:.4s ease-in-out forwards increase-decrease;animation:.4s ease-in-out forwards increase-decrease}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header .menu-top-icons-container .close-menu{margin:0 .2em 0 0}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header .menu-header-title .subtitle,:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header .menu-header-title .title{text-transform:uppercase;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#fff;margin:0}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header .menu-header-title .title{font-family:Montserrat,sans-serif;font-weight:700;font-size:.9em;display:none}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header .menu-header-title .subtitle{font-family:Montserrat,sans-serif;font-weight:100;font-size:1.5em}:host::ng-deep .menu-container .menu-nav-container .menu-content .admin-settings{visibility:collapse}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-item-container{display:flex;flex-direction:column;font-size:.8em;background-color:rgba(255,255,255,.3)}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-item-container .menu-item{min-height:3em;font-size:.8em;display:flex;align-items:center;padding:.2em;transition:.2s ease-in-out}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-item-container .menu-item:nth-child(n+2){border-top:1px solid;border-image-source:linear-gradient(90deg,transparent 15%,rgba(255,255,255,.1) 15.01%,rgba(255,255,255,.05) 98%,transparent 98%);border-image-slice:1}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-item-container .menu-item:hover{background-color:rgba(75,77,82,.3)}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-item-container .menu-icons{margin:0 0 0 .7em;height:1.8em;width:1.8em;opacity:.5}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-item-container a{color:rgba(255,255,255,.6);padding:.8em;flex-grow:1;text-decoration:none}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-social-network{display:flex;justify-content:center;margin:3em 0 0;flex-grow:1;height:100%;align-items:flex-end}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-social-network .menu-icons{height:2em;width:2em;margin:.2em}:host::ng-deep .menu-container .menu-nav-container .logo-container{display:flex;flex-direction:column;align-items:center;bottom:5vh;position:absolute;width:100%}:host::ng-deep .menu-container .menu-nav-container .logo-container .main-logo{height:2em;width:2em}:host::ng-deep .menu-container .menu-nav-container .logo-container .main-logo-title{color:#fff;font-size:.4em;margin:1em 0 0}:host::ng-deep .show-admin-settings{visibility:visible!important}:host::ng-deep .menu-container.menu-active.left{left:0}:host::ng-deep .menu-container.menu-active.right{right:0}:host::ng-deep .menu-background{opacity:0;z-index:-100}:host::ng-deep .visible-background{width:100%;height:100%;background:rgba(0,0,0,.6);opacity:1;position:fixed;top:0;z-index:999;transition:opacity 1s ease-in-out}:host::ng-deep .hide-subtitle{opacity:0;visibility:collapse;margin:0;padding:0;transition:.25s ease-in-out}:host::ng-deep .show-subtitle{opacity:1;visibility:visible;transition:.25s ease-in-out .4s}:host::ng-deep .hide-subtitle-container{-webkit-animation:.4s ease-in-out forwards hide-subtitle;animation:.4s ease-in-out forwards hide-subtitle}:host::ng-deep .show-subtitle-container{-webkit-animation:.4s ease-in-out forwards show-subtitle;animation:.4s ease-in-out forwards show-subtitle}:host::ng-deep .collapsed-menu .expand{transform:rotate(0);transition:.4s ease-in-out}:host::ng-deep .collapsed-menu .menu-icons{-webkit-animation:.4s ease-in-out forwards decrease-increase;animation:.4s ease-in-out forwards decrease-increase}:host::ng-deep .expanded-menu .expand{transform:rotate(-180deg);transition:.4s ease-in-out}:host::ng-deep .expanded-menu .menu-icons{-webkit-animation:.4s ease-in-out forwards increase-decrease;animation:.4s ease-in-out forwards increase-decrease}:host::ng-deep .menu-container.dark{border-left:1px solid #38393c;border-top:.3em solid rgba(210,64,119,.7);border-image-source:none}:host::ng-deep .menu-container.translucid{background:rgba(255,255,255,.05);border-left:1px solid rgba(255,255,255,.05);border-top:.3em solid rgba(255,255,255,.1);border-image-source:none}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){:host::ng-deep .menu-container{border-top:0 solid transparent!important;padding-top:.2em;max-height:unset}:host::ng-deep .menu-container::before{width:100%;height:.2em;left:0;top:.2em;margin-top:-.2em;content:\"\";position:absolute;background:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%)}:host::ng-deep .menu-container .menu-nav-container .logo-main-container{position:fixed;bottom:2vh;display:flex;flex-direction:column;align-items:center;width:13vw}:host::ng-deep .menu-container .menu-nav-container .logo-main-container .logo-container{display:flex;flex-direction:column;align-items:center;bottom:2vh;position:absolute;width:100%}:host::ng-deep .menu-container .menu-nav-container .logo-main-container .logo-container .main-logo{height:2em;width:2em}:host::ng-deep .menu-container .menu-nav-container .logo-main-container .logo-container .main-logo-title{display:block;color:#fff;font-size:.4em;margin:1em 0 0}}"]
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
        }], showSettings: [{
            type: Input
        }], className: [{
            type: Input
        }], settingsUrl: [{
            type: Input
        }], menuBottomTitle: [{
            type: Input
        }] }); })();
    return GlSharedComponentMenuComponent;
}());
export { GlSharedComponentMenuComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsibmc6L2dsLW5nLWZyb250ZW5kL2xpYi9zaGFyZWQvY29tcG9uZW50L21lbnUvZ2wtc2hhcmVkLWNvbXBvbmVudC1tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUMsekNBQXpDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQyxsRkFBbEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFTbEY7NkJBb0JFOzBCQUNTLE9BQXFDLEVBQ3JDLE1BQWMsWUFEZCxZQUFPLEdBQVAsT0FBTyxDQUE4QixTQUNyQztVQUFNLEdBQU4sTUFBTSxDQUFRLFNBWGQ7S0FBYyxHQUFXLFFBQVEsQ0FBQyxTQUNsQyxhQUFRLEdBQVc7O1lBQTZDLENBQUMsU0FFakU7bUJBQWlCLEdBQVc7R0FBTyxDQUFDLFNBQ3BDLGlCQUFZLEdBQWtCLE9BQU8sQ0FBQyxTQUV0QyxnQkFBVyxHQUFHOzRCQUF3QyxDQUFDLFNBQ3ZEO2dCQUFjLEdBQUc7MkJBQWlELENBQUMsS0FLeEUsQ0FBQyxLQUVMLGlEQUFRLEdBQVIsc0JBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQ3BHLENBQUM7OztRQU5pQiw0QkFBNEI7ZUFDN0IsTUFBTSxpQkFyQnFDLHFCQUEzRCxTQUFTLENBQUM7O0NBQVcs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QTBCLGNBQ3BDLGhJQUdXLDhCQUE4Qix3QkFMMUMsU0FBUyxDQUFDLGNBQ1QsUUFBUSxFQUFFLDBCQUEwQixjQUNwQzs7Ozs7Ozs7MHlDQUF3RCxBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpMUpBRXpELENBQUMsUUFDVyw4QkFBOEIsQ0E0QjFDLE1BQUQscUNBQUMsR0FBQSxBQTVCRCxJQTRCQyxVQTVCWSw4QkFBOEIsbElBRDFDLENBQUMsUUFDVyw4QkFBOEIsQ0E0QjFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFDRDtBQUFDLElBREQscUNBQUM7QUFDQSxDQURBLEFBNUJELElBNEJDOztBQXZDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBHbFNoYXJlZENvbXBvbmVudE1lbnVTZXJ2aWNlIH0gZnJvbSAnLi9nbC1zaGFyZWQtY29tcG9uZW50LW1lbnUuc2VydmljZSc7XG5pbXBvcnQgeyBJTWVudUl0ZW0gfSBmcm9tICcuL2l0ZW0vZ2wtc2hhcmVkLWNvbXBvbmVudC1tZW51LWl0ZW0uaW50ZXJmYWNlJztcbmltcG9ydCB7IFRNZW51UG9zaXRpb24gfSBmcm9tICcuL2dsLXNoYXJlZC1jb21wb25lbnQtbWVudS5pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LW1lbnUnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1tZW51LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1tZW51LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyBzdGF0aWM6IHRydWUsIHJlYWQ6IEVsZW1lbnRSZWYgfSkgY29udGFpbmVyOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcbiAgQFZpZXdDaGlsZCgnYmFja2dyb3VuZCcsIHsgc3RhdGljOiB0cnVlLCByZWFkOiBFbGVtZW50UmVmIH0pIGJhY2tncm91bmQ6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHN1YnRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHN5c3RlbVZlcnNpb246IHN0cmluZztcbiAgQElucHV0KCkgbWVudUl0ZW1zOiBJTWVudUl0ZW1bXTtcbiAgQElucHV0KCkgc2hvd1NldHRpbmdzOiBib29sZWFuO1xuICBASW5wdXQoKSBjbGFzc05hbWU6IHN0cmluZztcbiAgQElucHV0KCkgc2V0dGluZ3NVcmw6IHN0cmluZztcbiAgQElucHV0KCkgc2V0dGluZ3NUYXJnZXQ6IHN0cmluZyA9ICdfYmxhbmsnO1xuICBASW5wdXQoKSBtZW51TG9nbzogc3RyaW5nID0gJy4uL2Fzc2V0cy9pbWcvbG9nby9nbGF1Y2lvLWxvZ28tY29sb3JlZC5zdmcnO1xuICBASW5wdXQoKSBtZW51Qm90dG9tVGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgbWVudUJvdHRvbVZlcnNpb246IHN0cmluZyA9ICcxLjAuMCc7XG4gIEBJbnB1dCgpIG1lbnVQb3NpdGlvbjogVE1lbnVQb3NpdGlvbiA9ICdyaWdodCc7XG5cbiAgcmVhZG9ubHkgY2xvc2VCdXR0b24gPSAnLi4vYXNzZXRzL2ltZy9pY29uL3NpZGUtbWVudS9jbG9zZS5zdmcnO1xuICByZWFkb25seSBzZXR0aW5nc0J1dHRvbiA9ICcuLi9hc3NldHMvaW1nL2ljb24vc2lkZS1tZW51L2FkbWluLXNldHRpbmdzLnN2Zyc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHNlcnZpY2U6IEdsU2hhcmVkQ29tcG9uZW50TWVudVNlcnZpY2UsXG4gICAgcHVibGljIHJvdXRlcjogUm91dGVyXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXJ2aWNlLmluaXRpYWxpemUodGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudCwgdGhpcy5iYWNrZ3JvdW5kLm5hdGl2ZUVsZW1lbnQsIHRoaXMucm91dGVyKTtcbiAgfVxufVxuIl19