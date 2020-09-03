import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { style, state, animate, transition, trigger } from '@angular/animations';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/router';
import * as ɵngcc2 from '@angular/common';

function GlSharedComponentMenuItemComponent_li_0_a_2_Template(rf, ctx) { if (rf & 1) {
    var _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 4);
    ɵngcc0.ɵɵlistener("click", function GlSharedComponentMenuItemComponent_li_0_a_2_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); var ctx_r5 = ɵngcc0.ɵɵnextContext(2); return ctx_r5.openAbsoluteLink($event, ctx_r5.href, ctx_r5.target); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("href", "externalRedirect", ɵngcc0.ɵɵsanitizeUrl);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r3.content);
} }
function GlSharedComponentMenuItemComponent_li_0_a_3_Template(rf, ctx) { if (rf & 1) {
    var _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 5);
    ɵngcc0.ɵɵlistener("click", function GlSharedComponentMenuItemComponent_li_0_a_3_Template_a_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r8); var ctx_r7 = ɵngcc0.ɵɵnextContext(2); return ctx_r7.onClick.emit(null); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("routerLink", ctx_r4.href);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r4.content);
} }
function GlSharedComponentMenuItemComponent_li_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li");
    ɵngcc0.ɵɵelement(1, "img", 1);
    ɵngcc0.ɵɵtemplate(2, GlSharedComponentMenuItemComponent_li_0_a_2_Template, 2, 2, "a", 2);
    ɵngcc0.ɵɵtemplate(3, GlSharedComponentMenuItemComponent_li_0_a_3_Template, 2, 2, "a", 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("menu-title ", ctx_r0.itemClass, "");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("src", ctx_r0.src, ɵngcc0.ɵɵsanitizeUrl)("alt", ctx_r0.alt);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.absolute);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.absolute);
} }
function GlSharedComponentMenuItemComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    var _r10 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li");
    ɵngcc0.ɵɵelement(1, "img", 1);
    ɵngcc0.ɵɵelementStart(2, "div", 6);
    ɵngcc0.ɵɵlistener("click", function GlSharedComponentMenuItemComponent_li_1_Template_div_click_2_listener() { ɵngcc0.ɵɵrestoreView(_r10); var ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.toggleActive(); });
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(4, "img", 7);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate2("menu-title ", ctx_r1.itemClass, " ", ctx_r1.active ? "active" : "", "");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("src", ctx_r1.src, ɵngcc0.ɵɵsanitizeUrl)("alt", ctx_r1.alt);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.content);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("alt", ctx_r1.alt);
} }
function GlSharedComponentMenuItemComponent_ol_2_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    var _r16 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 4);
    ɵngcc0.ɵɵlistener("click", function GlSharedComponentMenuItemComponent_ol_2_li_1_a_2_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r16); var item_r12 = ɵngcc0.ɵɵnextContext().$implicit; var ctx_r15 = ɵngcc0.ɵɵnextContext(2); return ctx_r15.openAbsoluteLink($event, item_r12.href, item_r12.target); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r12 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("href", "externalRedirect", ɵngcc0.ɵɵsanitizeUrl);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(item_r12.content);
} }
function GlSharedComponentMenuItemComponent_ol_2_li_1_a_3_Template(rf, ctx) { if (rf & 1) {
    var _r20 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 5);
    ɵngcc0.ɵɵlistener("click", function GlSharedComponentMenuItemComponent_ol_2_li_1_a_3_Template_a_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r20); var ctx_r19 = ɵngcc0.ɵɵnextContext(3); return ctx_r19.onClick.emit(null); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r12 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("routerLink", item_r12.href);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(item_r12.content);
} }
function GlSharedComponentMenuItemComponent_ol_2_li_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "li");
    ɵngcc0.ɵɵelement(1, "img", 1);
    ɵngcc0.ɵɵtemplate(2, GlSharedComponentMenuItemComponent_ol_2_li_1_a_2_Template, 2, 2, "a", 2);
    ɵngcc0.ɵɵtemplate(3, GlSharedComponentMenuItemComponent_ol_2_li_1_a_3_Template, 2, 2, "a", 3);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r12 = ctx.$implicit;
    ɵngcc0.ɵɵclassMapInterpolate1("menu-title adding-row-animated ", item_r12.class, "");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("src", item_r12.src, ɵngcc0.ɵɵsanitizeUrl)("alt", item_r12.alt);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r12.absolute);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !item_r12.absolute);
} }
function GlSharedComponentMenuItemComponent_ol_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "ol");
    ɵngcc0.ɵɵtemplate(1, GlSharedComponentMenuItemComponent_ol_2_li_1_Template, 4, 7, "li", 8);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("subitem-container ", ctx_r2.active ? "active" : "", "");
    ɵngcc0.ɵɵproperty("@fadeInOut", undefined);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r2.subItems);
} }
var GlSharedComponentMenuItemComponent = /** @class */ (function () {
    function GlSharedComponentMenuItemComponent(_router) {
        this._router = _router;
        this.itemClass = 'dark';
        this.menuLogo = '../assets/img/logo/glaucio-logo-colored.svg';
        this.src = this.menuLogo;
        this.target = '_self';
        this.onClick = new EventEmitter();
    }
    GlSharedComponentMenuItemComponent.prototype.openAbsoluteLink = function (event, href, target) {
        if (target === void 0) { target = '_self'; }
        this._router.navigate(['/externalRedirect', { externalUrl: href, target: target }], {
            skipLocationChange: true,
        }).then(function () {
            console.log("Redirected to: " + href);
        });
        event.preventDefault();
    };
    GlSharedComponentMenuItemComponent.prototype.toggleActive = function () {
        this.active = !this.active;
    };
    GlSharedComponentMenuItemComponent.ctorParameters = function () { return [
        { type: Router }
    ]; };
    __decorate([
        Input()
    ], GlSharedComponentMenuItemComponent.prototype, "itemClass", void 0);
    __decorate([
        Input()
    ], GlSharedComponentMenuItemComponent.prototype, "absolute", void 0);
    __decorate([
        Input()
    ], GlSharedComponentMenuItemComponent.prototype, "menuLogo", void 0);
    __decorate([
        Input()
    ], GlSharedComponentMenuItemComponent.prototype, "src", void 0);
    __decorate([
        Input()
    ], GlSharedComponentMenuItemComponent.prototype, "href", void 0);
    __decorate([
        Input()
    ], GlSharedComponentMenuItemComponent.prototype, "alt", void 0);
    __decorate([
        Input()
    ], GlSharedComponentMenuItemComponent.prototype, "content", void 0);
    __decorate([
        Input()
    ], GlSharedComponentMenuItemComponent.prototype, "target", void 0);
    __decorate([
        Input()
    ], GlSharedComponentMenuItemComponent.prototype, "hasSubitem", void 0);
    __decorate([
        Input()
    ], GlSharedComponentMenuItemComponent.prototype, "active", void 0);
    __decorate([
        Input()
    ], GlSharedComponentMenuItemComponent.prototype, "subItems", void 0);
    __decorate([
        Output()
    ], GlSharedComponentMenuItemComponent.prototype, "onClick", void 0);
GlSharedComponentMenuItemComponent.ɵfac = function GlSharedComponentMenuItemComponent_Factory(t) { return new (t || GlSharedComponentMenuItemComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Router)); };
GlSharedComponentMenuItemComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentMenuItemComponent, selectors: [["gl-shared-component-menu-item"]], inputs: { itemClass: "itemClass", menuLogo: "menuLogo", src: "src", target: "target", active: "active", absolute: "absolute", href: "href", alt: "alt", content: "content", hasSubitem: "hasSubitem", subItems: "subItems" }, outputs: { onClick: "onClick" }, decls: 3, vars: 3, consts: [[3, "class", 4, "ngIf"], [1, "menu-icons", 3, "src", "alt"], ["class", "menu-item", 3, "href", "click", 4, "ngIf"], ["class", "menu-item", 3, "routerLink", "click", 4, "ngIf"], [1, "menu-item", 3, "href", "click"], [1, "menu-item", 3, "routerLink", "click"], [1, "menu-item", 3, "click"], ["src", "../assets/img/icon/side-menu/arrow-down.svg", 1, "menu-arrow", 3, "alt"], [3, "class", 4, "ngFor", "ngForOf"]], template: function GlSharedComponentMenuItemComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, GlSharedComponentMenuItemComponent_li_0_Template, 4, 7, "li", 0);
        ɵngcc0.ɵɵtemplate(1, GlSharedComponentMenuItemComponent_li_1_Template, 5, 8, "li", 0);
        ɵngcc0.ɵɵtemplate(2, GlSharedComponentMenuItemComponent_ol_2_Template, 2, 5, "ol", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", !ctx.hasSubitem);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.hasSubitem);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.hasSubitem && ctx.active);
    } }, directives: [ɵngcc2.NgIf, ɵngcc1.RouterLinkWithHref, ɵngcc2.NgForOf], styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);.adding-row-animated[_ngcontent-%COMP%]{-webkit-animation:.5s ease-in-out forwards adding-row;animation:.5s ease-in-out forwards adding-row}@-webkit-keyframes adding-row{from{opacity:0}to{opacity:1}}@keyframes adding-row{from{opacity:0}to{opacity:1}}.delete-row-animated[_ngcontent-%COMP%]{opacity:0!important;max-height:0!important;transition:.2s ease-out}.delete-row-animated-frame[_ngcontent-%COMP%]{-webkit-animation-name:hide;animation-name:hide;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:forwards!important;animation-fill-mode:forwards!important;-webkit-animation-play-state:initial;animation-play-state:initial}@-webkit-keyframes hide{from{opacity:1}to{opacity:0}}@keyframes hide{from{opacity:1}to{opacity:0}}[_nghost-%COMP%] {outline:0!important}[_nghost-%COMP%]  .menu-title{background:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);margin:0 0 1px;position:relative;display:flex;align-items:center;border-left:.2em solid #d24077}[_nghost-%COMP%]  .menu-title .material-icons{color:rgba(255,255,255,.6);font-size:1.2em;padding:.3em;margin:0 .5em 0 .3em}[_nghost-%COMP%]  .menu-title .menu-icons{padding:.2em .5em;height:1.5em;width:1.5em}[_nghost-%COMP%]  .menu-title .menu-arrow{padding:.2em .5em;height:1em;width:1em;opacity:.5;transform:rotate(0);transition:.25s ease-in-out}[_nghost-%COMP%]  .menu-title .menu-item{text-decoration:none;font-size:.6em;font-family:Montserrat,sans-serif;font-weight:300;text-transform:uppercase;color:rgba(255,255,255,.4);padding:1.5em .7em;flex-grow:1;cursor:pointer;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;max-width:79%}[_nghost-%COMP%]  .menu-title.active .menu-arrow{transform:rotate(180deg);transition:.25s ease-in-out}[_nghost-%COMP%]  .menu-title:not(hover) .menu-icons{transform:scale(1);transition:.2s ease-in-out}[_nghost-%COMP%]  .menu-title:hover .menu-icons{transform:scale(1.2);transition:.2s ease-in-out}[_nghost-%COMP%]  .menu-title.dark{margin:0;border-bottom:1px solid #38393c;border-left:.2em solid transparent}[_nghost-%COMP%]  .menu-title.dark:not(hover){background:#2c2c2f;transition:.3s ease-in-out}[_nghost-%COMP%]  .menu-title.dark:hover{background:#4b4d52;transition:.3s ease-in-out}[_nghost-%COMP%]  .menu-title.translucid{margin:0;border-bottom:.5px solid rgba(255,255,255,.1);border-left:.2em solid transparent}[_nghost-%COMP%]  .menu-title.translucid:not(hover){background:rgba(255,255,255,.05);transition:.3s ease-in-out}[_nghost-%COMP%]  .menu-title.translucid:hover{background:rgba(255,255,255,.1);transition:.3s ease-in-out}[_nghost-%COMP%]  .menu-item, [_nghost-%COMP%]  .menu-title, [_nghost-%COMP%]  .subitem-container{outline:0!important;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[_nghost-%COMP%]  .subitem-container .menu-title{transform:scaleY(0);transition:.3s ease-in-out}[_nghost-%COMP%]  .subitem-container.active .menu-title{transform:scaleY(1);transition:.3s ease-in-out .1s}"], data: { animation: [
            trigger('fadeInOut', [
                state('', style({
                    opacity: 0,
                    height: 0,
                    transform: 'scaleY(0)'
                })),
                transition(':enter', [
                    style({
                        opacity: 0,
                        height: 0,
                        transform: 'scaleY(0)'
                    }),
                    animate("0.3s ease-in", style({
                        opacity: 1,
                        height: '*',
                        transform: 'scaleY(1)'
                    }))
                ]),
                transition(':leave', [
                    animate(250, style({
                        opacity: 0,
                        height: 0,
                        transform: 'scaleY(0)'
                    }))
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentMenuItemComponent, [{
        type: Component,
        args: [{
                selector: 'gl-shared-component-menu-item',
                template: "<li class=\"menu-title {{ itemClass }}\" *ngIf=\"!hasSubitem\">\n  <img [src]=\"src\" class=\"menu-icons\" [alt]=\"alt\"/>\n  <a\n    class=\"menu-item\"\n    *ngIf=\"absolute\"\n    [href]=\"'externalRedirect'\"\n    (click)=\"openAbsoluteLink($event, href, target)\"\n  >{{ content }}</a>\n  <a *ngIf=\"!absolute\"\n     class=\"menu-item\"\n     [routerLink]=\"href\"\n     (click)=\"onClick.emit(null)\"\n  >{{ content }}</a>\n</li>\n\n<li class=\"menu-title {{ itemClass }} {{ active ? 'active' : '' }}\" *ngIf=\"hasSubitem\">\n  <img [src]=\"src\" class=\"menu-icons\" [alt]=\"alt\"/>\n  <div\n    class=\"menu-item\"\n    (click)=\"toggleActive()\"\n  >{{ content }}</div>\n  <img src=\"../assets/img/icon/side-menu/arrow-down.svg\" class=\"menu-arrow\" [alt]=\"alt\"/>\n</li>\n<ol *ngIf=\"hasSubitem && active\" [@fadeInOut] class=\"subitem-container {{ active ? 'active' : '' }}\">\n  <li class=\"menu-title adding-row-animated {{ item.class }}\" *ngFor=\"let item of subItems\">\n    <img [src]=\"item.src\" class=\"menu-icons\" [alt]=\"item.alt\"/>\n    <a\n      class=\"menu-item\"\n      *ngIf=\"item.absolute\"\n      [href]=\"'externalRedirect'\"\n      (click)=\"openAbsoluteLink($event, item.href, item.target)\"\n    >{{ item.content }}</a>\n    <a *ngIf=\"!item.absolute\"\n       class=\"menu-item\"\n       [routerLink]=\"item.href\"\n       (click)=\"onClick.emit(null)\"\n    >{{ item.content }}</a>\n  </li>\n</ol>\n",
                animations: [
                    trigger('fadeInOut', [
                        state('', style({
                            opacity: 0,
                            height: 0,
                            transform: 'scaleY(0)'
                        })),
                        transition(':enter', [
                            style({
                                opacity: 0,
                                height: 0,
                                transform: 'scaleY(0)'
                            }),
                            animate("0.3s ease-in", style({
                                opacity: 1,
                                height: '*',
                                transform: 'scaleY(1)'
                            }))
                        ]),
                        transition(':leave', [
                            animate(250, style({
                                opacity: 0,
                                height: 0,
                                transform: 'scaleY(0)'
                            }))
                        ])
                    ])
                ],
                styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);.adding-row-animated{-webkit-animation:.5s ease-in-out forwards adding-row;animation:.5s ease-in-out forwards adding-row}@-webkit-keyframes adding-row{from{opacity:0}to{opacity:1}}@keyframes adding-row{from{opacity:0}to{opacity:1}}.delete-row-animated{opacity:0!important;max-height:0!important;transition:.2s ease-out}.delete-row-animated-frame{-webkit-animation-name:hide;animation-name:hide;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:forwards!important;animation-fill-mode:forwards!important;-webkit-animation-play-state:initial;animation-play-state:initial}@-webkit-keyframes hide{from{opacity:1}to{opacity:0}}@keyframes hide{from{opacity:1}to{opacity:0}}:host::ng-deep{outline:0!important}:host::ng-deep .menu-title{background:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);margin:0 0 1px;position:relative;display:flex;align-items:center;border-left:.2em solid #d24077}:host::ng-deep .menu-title .material-icons{color:rgba(255,255,255,.6);font-size:1.2em;padding:.3em;margin:0 .5em 0 .3em}:host::ng-deep .menu-title .menu-icons{padding:.2em .5em;height:1.5em;width:1.5em}:host::ng-deep .menu-title .menu-arrow{padding:.2em .5em;height:1em;width:1em;opacity:.5;transform:rotate(0);transition:.25s ease-in-out}:host::ng-deep .menu-title .menu-item{text-decoration:none;font-size:.6em;font-family:Montserrat,sans-serif;font-weight:300;text-transform:uppercase;color:rgba(255,255,255,.4);padding:1.5em .7em;flex-grow:1;cursor:pointer;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;max-width:79%}:host::ng-deep .menu-title.active .menu-arrow{transform:rotate(180deg);transition:.25s ease-in-out}:host::ng-deep .menu-title:not(hover) .menu-icons{transform:scale(1);transition:.2s ease-in-out}:host::ng-deep .menu-title:hover .menu-icons{transform:scale(1.2);transition:.2s ease-in-out}:host::ng-deep .menu-title.dark{margin:0;border-bottom:1px solid #38393c;border-left:.2em solid transparent}:host::ng-deep .menu-title.dark:not(hover){background:#2c2c2f;transition:.3s ease-in-out}:host::ng-deep .menu-title.dark:hover{background:#4b4d52;transition:.3s ease-in-out}:host::ng-deep .menu-title.translucid{margin:0;border-bottom:.5px solid rgba(255,255,255,.1);border-left:.2em solid transparent}:host::ng-deep .menu-title.translucid:not(hover){background:rgba(255,255,255,.05);transition:.3s ease-in-out}:host::ng-deep .menu-title.translucid:hover{background:rgba(255,255,255,.1);transition:.3s ease-in-out}:host::ng-deep .menu-item,:host::ng-deep .menu-title,:host::ng-deep .subitem-container{outline:0!important;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host::ng-deep .subitem-container .menu-title{transform:scaleY(0);transition:.3s ease-in-out}:host::ng-deep .subitem-container.active .menu-title{transform:scaleY(1);transition:.3s ease-in-out .1s}"]
            }]
    }], function () { return [{ type: ɵngcc1.Router }]; }, { itemClass: [{
            type: Input
        }], menuLogo: [{
            type: Input
        }], src: [{
            type: Input
        }], target: [{
            type: Input
        }], onClick: [{
            type: Output
        }], active: [{
            type: Input
        }], absolute: [{
            type: Input
        }], href: [{
            type: Input
        }], alt: [{
            type: Input
        }], content: [{
            type: Input
        }], hasSubitem: [{
            type: Input
        }], subItems: [{
            type: Input
        }] }); })();
    return GlSharedComponentMenuItemComponent;
}());
export { GlSharedComponentMenuItemComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1tZW51LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJuZzovZ2wtbmctZnJvbnRlbmQvbGliL3NoYXJlZC9jb21wb25lbnQvbWVudS9pdGVtL2dsLXNoYXJlZC1jb21wb25lbnQtbWVudS1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUMsekNBQXpDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QyxPQUFPLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQyxNQUFNLHFCQUFxQixDQUFDLGpGQUEvRSxPQUFPLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBbUMvRTtpQ0FnQkU7a0NBQW9CLE9BQWU7O1NBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUSxTQWYxQixjQUFTLEdBQStCLE1BQU0sQ0FBQyxTQUUvQztBQUFRLEdBQVc7T0FBNkMsQ0FBQyxTQUNqRSxRQUFHLEdBQUcsSUFBSSxDQUFDO0dBQVEsQ0FBQyxTQUlwQixXQUFNLEdBQWUsT0FBTyxDQUFDLFNBTTVCLFlBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQyxLQUkxRCxDQUFDLEtBRUQsNkRBQWdCLEdBQWhCLFVBQWlCLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBNEIsWUFBNUIsdUJBQUEsRUFBQSxnQkFBNEIsWUFDeEQsSUFBSSxDQUFDO0FBQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUFtQixFQUFFLEVBQUUsV0FBVyxFQUFFO0VBQUksRUFBRSxNQUFNO0VBQUEsRUFB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dEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBJTWVudUl0ZW0sIFRVcmxUYXJnZXQgfSBmcm9tICcuL2dsLXNoYXJlZC1jb21wb25lbnQtbWVudS1pdGVtLmludGVyZmFjZSc7XG5pbXBvcnQge3N0eWxlLCBzdGF0ZSwgYW5pbWF0ZSwgdHJhbnNpdGlvbiwgdHJpZ2dlcn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtbWVudS1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dsLXNoYXJlZC1jb21wb25lbnQtbWVudS1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1tZW51LWl0ZW0uY29tcG9uZW50LnNjc3MnXSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2ZhZGVJbk91dCcsIFtcbiAgICAgIHN0YXRlKCcnLCBzdHlsZSh7XG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGVZKDApJ1xuICAgICAgfSkpLFxuICAgICAgdHJhbnNpdGlvbignOmVudGVyJywgWyAgIC8vIDplbnRlciBpcyBhbGlhcyB0byAndm9pZCA9PiAqJ1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGVZKDApJ1xuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZShcIjAuM3MgZWFzZS1pblwiLCBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICBoZWlnaHQ6ICcqJyxcbiAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZVkoMSknXG4gICAgICAgIH0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCc6bGVhdmUnLCBbICAgLy8gOmxlYXZlIGlzIGFsaWFzIHRvICcqID0+IHZvaWQnXG4gICAgICAgIGFuaW1hdGUoMjUwLCBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGVZKDApJ1xuICAgICAgICB9KSlcbiAgICAgIF0pXG4gICAgXSlcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudE1lbnVJdGVtQ29tcG9uZW50IHtcbiAgQElucHV0KCkgaXRlbUNsYXNzOiAndHJhbnNsdWNpZCcgfCAnZGFyaycgfCAnJyA9ICdkYXJrJztcbiAgQElucHV0KCkgYWJzb2x1dGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG1lbnVMb2dvOiBzdHJpbmcgPSAnLi4vYXNzZXRzL2ltZy9sb2dvL2dsYXVjaW8tbG9nby1jb2xvcmVkLnN2Zyc7XG4gIEBJbnB1dCgpIHNyYyA9IHRoaXMubWVudUxvZ287XG4gIEBJbnB1dCgpIGhyZWY7XG4gIEBJbnB1dCgpIGFsdDtcbiAgQElucHV0KCkgY29udGVudDtcbiAgQElucHV0KCkgdGFyZ2V0OiBUVXJsVGFyZ2V0ID0gJ19zZWxmJztcblxuICBASW5wdXQoKSBoYXNTdWJpdGVtOiBib29sZWFuO1xuICBASW5wdXQoKSBhY3RpdmU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHN1Ykl0ZW1zOiBJTWVudUl0ZW1bXTtcblxuICBAT3V0cHV0KCkgb25DbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHtcblxuICB9XG5cbiAgb3BlbkFic29sdXRlTGluayhldmVudCwgaHJlZiwgdGFyZ2V0OiBUVXJsVGFyZ2V0ID0gJ19zZWxmJykge1xuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9leHRlcm5hbFJlZGlyZWN0JywgeyBleHRlcm5hbFVybDogaHJlZiwgdGFyZ2V0fV0sIHtcbiAgICAgIHNraXBMb2NhdGlvbkNoYW5nZTogdHJ1ZSxcbiAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGBSZWRpcmVjdGVkIHRvOiAke2hyZWZ9YCk7XG4gICAgfSk7XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgdG9nZ2xlQWN0aXZlKCkge1xuICAgIHRoaXMuYWN0aXZlID0gIXRoaXMuYWN0aXZlO1xuICB9XG59XG4iXX0=