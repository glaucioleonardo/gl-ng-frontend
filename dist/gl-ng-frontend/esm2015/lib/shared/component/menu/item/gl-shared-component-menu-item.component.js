import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { style, state, animate, transition, trigger } from '@angular/animations';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/router';
import * as ɵngcc2 from '@angular/common';

function GlSharedComponentMenuItemComponent_li_0_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 4);
    ɵngcc0.ɵɵlistener("click", function GlSharedComponentMenuItemComponent_li_0_a_2_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); const ctx_r5 = ɵngcc0.ɵɵnextContext(2); return ctx_r5.openAbsoluteLink($event, ctx_r5.href, ctx_r5.target); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("href", "externalRedirect", ɵngcc0.ɵɵsanitizeUrl);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r3.content);
} }
function GlSharedComponentMenuItemComponent_li_0_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 5);
    ɵngcc0.ɵɵlistener("click", function GlSharedComponentMenuItemComponent_li_0_a_3_Template_a_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r8); const ctx_r7 = ɵngcc0.ɵɵnextContext(2); return ctx_r7.onClick.emit(null); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext(2);
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
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("menu-title ", ctx_r0.itemClass, "");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("src", ctx_r0.src, ɵngcc0.ɵɵsanitizeUrl)("alt", ctx_r0.alt);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.absolute);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.absolute);
} }
function GlSharedComponentMenuItemComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "li");
    ɵngcc0.ɵɵelement(1, "img", 1);
    ɵngcc0.ɵɵelementStart(2, "div", 6);
    ɵngcc0.ɵɵlistener("click", function GlSharedComponentMenuItemComponent_li_1_Template_div_click_2_listener() { ɵngcc0.ɵɵrestoreView(_r10); const ctx_r9 = ɵngcc0.ɵɵnextContext(); return ctx_r9.toggleActive(); });
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(4, "img", 7);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate2("menu-title ", ctx_r1.itemClass, " ", ctx_r1.active ? "active" : "", "");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("src", ctx_r1.src, ɵngcc0.ɵɵsanitizeUrl)("alt", ctx_r1.alt);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.content);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("alt", ctx_r1.alt);
} }
function GlSharedComponentMenuItemComponent_ol_2_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 4);
    ɵngcc0.ɵɵlistener("click", function GlSharedComponentMenuItemComponent_ol_2_li_1_a_2_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r16); const item_r12 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r15 = ɵngcc0.ɵɵnextContext(2); return ctx_r15.openAbsoluteLink($event, item_r12.href, item_r12.target); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r12 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵproperty("href", "externalRedirect", ɵngcc0.ɵɵsanitizeUrl);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(item_r12.content);
} }
function GlSharedComponentMenuItemComponent_ol_2_li_1_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r20 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 5);
    ɵngcc0.ɵɵlistener("click", function GlSharedComponentMenuItemComponent_ol_2_li_1_a_3_Template_a_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r20); const ctx_r19 = ɵngcc0.ɵɵnextContext(3); return ctx_r19.onClick.emit(null); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r12 = ɵngcc0.ɵɵnextContext().$implicit;
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
    const item_r12 = ctx.$implicit;
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
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("subitem-container ", ctx_r2.active ? "active" : "", "");
    ɵngcc0.ɵɵproperty("@fadeInOut", undefined);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r2.subItems);
} }
let GlSharedComponentMenuItemComponent = class GlSharedComponentMenuItemComponent {
    constructor(_router) {
        this._router = _router;
        this.itemClass = 'dark';
        this.menuLogo = '../assets/img/logo/glaucio-logo-colored.svg';
        this.src = this.menuLogo;
        this.target = '_self';
        this.onClick = new EventEmitter();
    }
    openAbsoluteLink(event, href, target = '_self') {
        this._router.navigate(['/externalRedirect', { externalUrl: href, target }], {
            skipLocationChange: true,
        }).then(() => {
            console.log(`Redirected to: ${href}`);
        });
        event.preventDefault();
    }
    toggleActive() {
        this.active = !this.active;
    }
};
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
GlSharedComponentMenuItemComponent.ctorParameters = () => [
    { type: Router }
];
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
export { GlSharedComponentMenuItemComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1tZW51LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJuZzovZ2wtbmctZnJvbnRlbmQvbGliL3NoYXJlZC9jb21wb25lbnQvbWVudS9pdGVtL2dsLXNoYXJlZC1jb21wb25lbnQtbWVudS1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUMsekNBQXpDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QyxPQUFPLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQyxNQUFNLHFCQUFxQixDQUFDLGpGQUEvRSxPQUFPLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBbUMvRSxJQUFhLGtDQUFrQztBQUEvQyxNQUFhLGtDQUFrQztJQWdCN0MsWUFBb0IsT0FBZSxZQUFmOztHQUFPLEdBQVAsT0FBTyxDQUFRLFNBZjFCLGNBQVMsR0FBK0IsTUFBTSxDQUFDLFNBRS9DLGFBQVEsR0FBVzs4QkFBNkMsQ0FBQyxTQUNqRTtLQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUlwQjtJQUFNLEdBQWUsT0FBTyxDQUFDLFNBTTVCLFlBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQyxLQUkxRCxDQUFDLEtBRUQsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxTQUFxQixPQUFPLFlBQ3hELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFB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Q0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDO2lCQUM1QixPQUFPLEVBQUUsQ0FBQyxWQUFWLE9BQU8sRUFBRSxDQUFDO1VBQ1YsTUFBTSxFQUFFLEdBQUcsMEJBQ1gsckNBREEsTUFBTSxFQUFFLEdBQUcsMEJBQ1g7Q0FBUyxFQUFFLFdBQVcsYkFBYixFQUFFLFdBQVc7SUFDdkIsQ0FBQyxDQUFDLGtCQUNKLENBQUMsa0JBQ0YsVUFBVSxDQUFDLGxEQUZSLENBQUMsQ0FBQyxrQkFDSixDQUFDLGtCQUNGLFVBQVUsQ0FBQztFQUFRLEVBQUUsc0JBQ25CLE9BQU8sQ0FBQyxHQUFHLEVBQUUsckNBREksRUFBRSxzQkFDbkIsT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUFLLENBQUMsMEJBQ2pCLE9BQU8sRUFBRSxDQUFDLHJDQURNLENBQUMsMEJBQ2pCLE9BQU8sRUFBRSxDQUFDO2tCQUNWLE1BQU0sRUFBRSxDQUFDLDBCQUNULG5DQURBLE1BQU0sRUFBRSxDQUFDLDBCQUNUO09BQVMsRUFBRSxXQUFXLGJBQWIsRUFBRSxXQUFXO1VBQ3ZCLENBQUMsQ0FBQyxGQUFGLENBQUMsQ0FBQztFQUNKLENBQUMsY0FDSCxDQUFDLFVBQ0gsMUJBRkksQ0FBQyxjQUNILENBQUMsVUFDSDs7Ozs7Ozs7OzRuRkFDRixDQUFDLElBQ1csa0NBQWtDLENBaUM5QyxXQWpDWSxrQ0FBa0MsckZBRDlDLENBQUMsSUFDVyxrQ0FBa0MsQ0FpQzlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFDRDs7QUF4RUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSU1lbnVJdGVtLCBUVXJsVGFyZ2V0IH0gZnJvbSAnLi9nbC1zaGFyZWQtY29tcG9uZW50LW1lbnUtaXRlbS5pbnRlcmZhY2UnO1xuaW1wb3J0IHtzdHlsZSwgc3RhdGUsIGFuaW1hdGUsIHRyYW5zaXRpb24sIHRyaWdnZXJ9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LW1lbnUtaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LW1lbnUtaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtbWVudS1pdGVtLmNvbXBvbmVudC5zY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdmYWRlSW5PdXQnLCBbXG4gICAgICBzdGF0ZSgnJywgc3R5bGUoe1xuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWSgwKSdcbiAgICAgIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJzplbnRlcicsIFsgICAvLyA6ZW50ZXIgaXMgYWxpYXMgdG8gJ3ZvaWQgPT4gKidcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWSgwKSdcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoXCIwLjNzIGVhc2UtaW5cIiwgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgaGVpZ2h0OiAnKicsXG4gICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGVZKDEpJ1xuICAgICAgICB9KSlcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignOmxlYXZlJywgWyAgIC8vIDpsZWF2ZSBpcyBhbGlhcyB0byAnKiA9PiB2b2lkJ1xuICAgICAgICBhbmltYXRlKDI1MCwgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWSgwKSdcbiAgICAgICAgfSkpXG4gICAgICBdKVxuICAgIF0pXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRNZW51SXRlbUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGl0ZW1DbGFzczogJ3RyYW5zbHVjaWQnIHwgJ2RhcmsnIHwgJycgPSAnZGFyayc7XG4gIEBJbnB1dCgpIGFic29sdXRlOiBib29sZWFuO1xuICBASW5wdXQoKSBtZW51TG9nbzogc3RyaW5nID0gJy4uL2Fzc2V0cy9pbWcvbG9nby9nbGF1Y2lvLWxvZ28tY29sb3JlZC5zdmcnO1xuICBASW5wdXQoKSBzcmMgPSB0aGlzLm1lbnVMb2dvO1xuICBASW5wdXQoKSBocmVmO1xuICBASW5wdXQoKSBhbHQ7XG4gIEBJbnB1dCgpIGNvbnRlbnQ7XG4gIEBJbnB1dCgpIHRhcmdldDogVFVybFRhcmdldCA9ICdfc2VsZic7XG5cbiAgQElucHV0KCkgaGFzU3ViaXRlbTogYm9vbGVhbjtcbiAgQElucHV0KCkgYWN0aXZlOiBib29sZWFuO1xuICBASW5wdXQoKSBzdWJJdGVtczogSU1lbnVJdGVtW107XG5cbiAgQE91dHB1dCgpIG9uQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7XG5cbiAgfVxuXG4gIG9wZW5BYnNvbHV0ZUxpbmsoZXZlbnQsIGhyZWYsIHRhcmdldDogVFVybFRhcmdldCA9ICdfc2VsZicpIHtcbiAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvZXh0ZXJuYWxSZWRpcmVjdCcsIHsgZXh0ZXJuYWxVcmw6IGhyZWYsIHRhcmdldH1dLCB7XG4gICAgICBza2lwTG9jYXRpb25DaGFuZ2U6IHRydWUsXG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgUmVkaXJlY3RlZCB0bzogJHtocmVmfWApO1xuICAgIH0pO1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIHRvZ2dsZUFjdGl2ZSgpIHtcbiAgICB0aGlzLmFjdGl2ZSA9ICF0aGlzLmFjdGl2ZTtcbiAgfVxufVxuIl19