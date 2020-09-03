import { __decorate } from "tslib";
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GlSharedComponentFilterService } from './gl-shared-component-filter.service';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/router';
import * as ɵngcc2 from '../menu/background/gl-shared-component-menu-background.component';
import * as ɵngcc3 from '@angular/common';
import * as ɵngcc4 from '../input/button/simple/gl-shared-component-input-button-simple.component';

const _c0 = ["container"];
const _c1 = ["background"];
const _c2 = ["menuNavContainer"];
function GlSharedComponentFilterComponent_span_19_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 19);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate3("", ctx_r3.partialResultDescription, " ", ctx_r3.partialResult, " ", ctx_r3.partialResult > 1 ? ctx_r3.itemPluralDescription : ctx_r3.itemSingularDescription, " ");
} }
const _c3 = ["*"];
let GlSharedComponentFilterComponent = class GlSharedComponentFilterComponent {
    constructor(router, service) {
        this.router = router;
        this.service = service;
        this.subtitle = 'Filter';
        this.type = '';
        this.closeButton = '../assets/img/icon/menu/close.svg';
        this.partialResultDescription = 'Partial results with these filters:';
        this.itemSingularDescription = 'item';
        this.itemPluralDescription = 'items';
        this.applyButtonDescription = 'Apply filter';
        this.clearButtonDescription = 'Clear filter';
        this.buttonClass = 'light-translucid';
        this.isIE = false;
        this.applyFilter$ = new EventEmitter();
        this.clearFilter$ = new EventEmitter();
        service.applyPartialResult = this.applyPartialResult;
    }
    ngAfterViewInit() {
        this.service.initialize(this.container.nativeElement, this.background.nativeElement, this.menuNavContainer.nativeElement, this.router);
    }
    onApply() {
        this.applyFilter$.emit();
    }
    onClear() {
        this.clearFilter$.emit();
    }
};
GlSharedComponentFilterComponent.ɵfac = function GlSharedComponentFilterComponent_Factory(t) { return new (t || GlSharedComponentFilterComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Router), ɵngcc0.ɵɵdirectiveInject(GlSharedComponentFilterService)); };
GlSharedComponentFilterComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentFilterComponent, selectors: [["gl-shared-component-filter"]], viewQuery: function GlSharedComponentFilterComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c0, true, ElementRef);
        ɵngcc0.ɵɵstaticViewQuery(_c1, true, ElementRef);
        ɵngcc0.ɵɵviewQuery(_c2, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.container = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.background = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.menuNavContainer = _t.first);
    } }, inputs: { subtitle: "subtitle", type: "type", closeButton: "closeButton", partialResultDescription: "partialResultDescription", itemSingularDescription: "itemSingularDescription", itemPluralDescription: "itemPluralDescription", applyButtonDescription: "applyButtonDescription", clearButtonDescription: "clearButtonDescription", buttonClass: "buttonClass", isIE: "isIE", title: "title", partialResult: "partialResult", applyPartialResult: "applyPartialResult" }, outputs: { applyFilter$: "applyFilter$", clearFilter$: "clearFilter$" }, ngContentSelectors: _c3, decls: 23, vars: 13, consts: [[3, "click"], ["background", ""], ["container", ""], [1, "header-filter-container"], [1, "menu-header"], [1, "menu-top-icons-container"], ["id", "close-menu-button", "alt", "Close menu button", 1, "menu-icons", "close-menu", 3, "src", "click"], [1, "menu-header-title"], [1, "title"], [1, "subtitle"], [1, "menu-nav-container"], ["menuNavContainer", ""], [1, "menu-content"], [1, "input-container"], [1, "bottom-container"], ["class", "partial-result-description", 4, "ngIf"], [1, "buttons-container"], ["value", "apply", 3, "innerValue", "click"], ["value", "clear", 3, "innerValue", "click"], [1, "partial-result-description"]], template: function GlSharedComponentFilterComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "gl-shared-component-menu-background", 0, 1);
        ɵngcc0.ɵɵlistener("click", function GlSharedComponentFilterComponent_Template_gl_shared_component_menu_background_click_0_listener($event) { return ctx.service.backgroundClick($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(2, "div", null, 2);
        ɵngcc0.ɵɵelementStart(4, "div", 3);
        ɵngcc0.ɵɵelementStart(5, "div", 4);
        ɵngcc0.ɵɵelementStart(6, "div", 5);
        ɵngcc0.ɵɵelementStart(7, "img", 6);
        ɵngcc0.ɵɵlistener("click", function GlSharedComponentFilterComponent_Template_img_click_7_listener($event) { return ctx.service.close($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(8, "div", 7);
        ɵngcc0.ɵɵelementStart(9, "h1", 8);
        ɵngcc0.ɵɵtext(10);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(11, "h2", 9);
        ɵngcc0.ɵɵtext(12);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(13, "nav", 10, 11);
        ɵngcc0.ɵɵelementStart(15, "div", 12);
        ɵngcc0.ɵɵelementStart(16, "div", 13);
        ɵngcc0.ɵɵprojection(17);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(18, "div", 14);
        ɵngcc0.ɵɵtemplate(19, GlSharedComponentFilterComponent_span_19_Template, 2, 3, "span", 15);
        ɵngcc0.ɵɵelementStart(20, "div", 16);
        ɵngcc0.ɵɵelementStart(21, "gl-shared-component-input-button-simple", 17);
        ɵngcc0.ɵɵlistener("click", function GlSharedComponentFilterComponent_Template_gl_shared_component_input_button_simple_click_21_listener() { return ctx.onApply(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(22, "gl-shared-component-input-button-simple", 18);
        ɵngcc0.ɵɵlistener("click", function GlSharedComponentFilterComponent_Template_gl_shared_component_input_button_simple_click_22_listener() { return ctx.onClear(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassMapInterpolate1("filter-container ", ctx.type, "");
        ɵngcc0.ɵɵadvance(5);
        ɵngcc0.ɵɵproperty("src", ctx.closeButton, ɵngcc0.ɵɵsanitizeUrl);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate(ctx.title);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.subtitle);
        ɵngcc0.ɵɵadvance(7);
        ɵngcc0.ɵɵproperty("ngIf", ctx.partialResult != null);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassMap(ctx.buttonClass);
        ɵngcc0.ɵɵproperty("innerValue", ctx.applyButtonDescription);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMap(ctx.buttonClass);
        ɵngcc0.ɵɵproperty("innerValue", ctx.clearButtonDescription);
    } }, directives: [ɵngcc2.GlSharedComponentMenuBackgroundComponent, ɵngcc3.NgIf, ɵngcc4.GlSharedComponentInputButtonSimpleComponent], styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);[_nghost-%COMP%]  .filter-container .menu-nav-container::-webkit-scrollbar:horizontal{height:.5em}[_nghost-%COMP%]  .filter-container .menu-nav-container::-webkit-scrollbar{width:.5em}[_nghost-%COMP%]  .filter-container .menu-nav-container::-webkit-scrollbar-button{background-color:#333437;display:none!important}[_nghost-%COMP%]  .filter-container .menu-nav-container::-webkit-scrollbar-track-piece{background-color:#2c2c2f}[_nghost-%COMP%]  .filter-container .menu-nav-container::-webkit-scrollbar-thumb{background-color:#64666c;border:1px solid #38393c}[_nghost-%COMP%]  .filter-container{border-top:.3em solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5;border-bottom:2em solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5;display:flex;flex-direction:column;background:0 0/cover #1a1b1d;position:fixed;top:0;bottom:0;overflow:hidden;width:85vw;right:-110%;max-width:17em;min-width:17em;z-index:10000;transition:right .5s ease-in-out;flex-grow:1;height:100vh}[_nghost-%COMP%]  .filter-container.translucid{background:rgba(255,255,255,.05);border-left:1px solid rgba(255,255,255,.05);border-top:.3em solid rgba(255,255,255,.1);border-image-source:none}[_nghost-%COMP%]  .filter-container .a{display:block;min-height:3em}[_nghost-%COMP%]  .filter-container .header-filter-container .menu-header{display:flex;flex-direction:column;margin:.5em 1em 1em .5em}[_nghost-%COMP%]  .filter-container .header-filter-container .menu-header .menu-top-icons-container{display:flex;margin:0 0 1.5em}[_nghost-%COMP%]  .filter-container .header-filter-container .menu-header .menu-top-icons-container .close-menu, [_nghost-%COMP%]  .filter-container .header-filter-container .menu-header .menu-top-icons-container .settings-menu{cursor:pointer;height:1.5em;width:1.5em}[_nghost-%COMP%]  .filter-container .header-filter-container .menu-header .menu-top-icons-container .close-menu:active, [_nghost-%COMP%]  .filter-container .header-filter-container .menu-header .menu-top-icons-container .close-menu:hover, [_nghost-%COMP%]  .filter-container .header-filter-container .menu-header .menu-top-icons-container .settings-menu:active, [_nghost-%COMP%]  .filter-container .header-filter-container .menu-header .menu-top-icons-container .settings-menu:hover{opacity:1;-webkit-animation:.4s ease-in-out forwards increase-decrease;animation:.4s ease-in-out forwards increase-decrease}[_nghost-%COMP%]  .filter-container .header-filter-container .menu-header .menu-top-icons-container .close-menu{margin:0 .2em 0 0}[_nghost-%COMP%]  .filter-container .header-filter-container .menu-header .menu-header-title .subtitle, [_nghost-%COMP%]  .filter-container .header-filter-container .menu-header .menu-header-title .title{text-transform:uppercase;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#fff;margin:0}[_nghost-%COMP%]  .filter-container .header-filter-container .menu-header .menu-header-title .title{font-family:Montserrat,sans-serif;font-weight:700;font-size:.9em;display:none}[_nghost-%COMP%]  .filter-container .header-filter-container .menu-header .menu-header-title .subtitle{font-family:Montserrat,sans-serif;font-weight:100;font-size:1.5em}[_nghost-%COMP%]  .filter-container .bottom-container{display:flex;flex-direction:column;margin:1em 0 .4em}[_nghost-%COMP%]  .filter-container .bottom-container .partial-result-description{font-family:Montserrat,sans-serif;font-weight:700;color:#d24077;font-size:.5em;padding:0 0 0 .5em;text-align:center}[_nghost-%COMP%]  .filter-container .bottom-container .buttons-container{display:flex;padding:.6em 0 .3em .3em;font-size:.8em}[_nghost-%COMP%]  .filter-container .bottom-container .buttons-container .default-button:nth-child(1){margin:0 .5em 0 0}[_nghost-%COMP%]  .filter-container .bottom-container .buttons-container .default-button:nth-child(2){margin:0 0 0 .5em}[_nghost-%COMP%]  .filter-container .menu-nav-container{scrollbar-face-color:#333437!important;scrollbar-shadow-color:#38393c!important;scrollbar-track-color:#2c2c2f!important;scrollbar-arrow-color:#64666c!important;overflow:auto;max-height:100%;flex-grow:1;display:flex;overflow-x:hidden;border-top:0 solid transparent!important;position:relative;border-bottom:0 solid transparent!important}[_nghost-%COMP%]  .filter-container .menu-nav-container::before{width:100%;height:1px;left:0;top:1px;margin-top:-1px;content:\"\";position:absolute;background:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%)}[_nghost-%COMP%]  .filter-container .menu-nav-container::after{width:100%;height:1px;left:0;margin-bottom:-1px;content:\"\";position:absolute;background:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);bottom:-10.5%}[_nghost-%COMP%]  .filter-container .menu-nav-container .menu-content{display:flex;flex-direction:column;flex-grow:1;position:relative}[_nghost-%COMP%]  .filter-container .menu-nav-container .menu-content .menu-title{background:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);margin:0 0 .14em;position:relative;display:flex;align-items:center;border-left:.2em solid #fff}[_nghost-%COMP%]  .filter-container .menu-nav-container .menu-content .menu-title .material-icons{color:rgba(255,255,255,.6);font-size:1.2em;padding:.3em;margin:0 .5em 0 .3em}[_nghost-%COMP%]  .filter-container .menu-nav-container .menu-content .menu-title .material-icons.expand{position:absolute;color:#fff;top:.5em;right:.3em}[_nghost-%COMP%]  .filter-container .menu-nav-container .menu-content .menu-title .menu-icons{padding:.2em .5em;height:1.5em;width:1.5em}[_nghost-%COMP%]  .filter-container .menu-nav-container .menu-content .menu-title a{text-decoration:none;font-size:.6em;font-family:Montserrat,sans-serif;font-weight:300;text-transform:uppercase;color:#fff;padding:1.5em .7em;flex-grow:1}[_nghost-%COMP%]  .filter-container .menu-nav-container .menu-content .input-container gl-shared-component-filter-container .type-container{background-color:rgba(255,255,255,.03);border-bottom:1px solid rgba(255,255,255,.03)}[_nghost-%COMP%]  .filter-container .menu-nav-container .menu-content .input-container .options-container{display:flex}[_nghost-%COMP%]  .filter-container .menu-nav-container .menu-content .input-container gl-shared-component-input-autocomplete-simple .input-container{margin:.2em 0 0;height:1.5em}[_nghost-%COMP%]  .show-admin-settings{visibility:visible!important}[_nghost-%COMP%]  .filter-container .menu-active{right:0}[_nghost-%COMP%]  .menu-active{right:0}[_nghost-%COMP%]  .menu-background{opacity:0;visibility:collapse;z-index:-1000;left:1000px}[_nghost-%COMP%]  .visible-background{width:100%;height:100%;background:rgba(0,0,0,.6);opacity:1;visibility:visible;position:fixed;top:0;left:0;z-index:999;transition:1s ease-in-out}[_nghost-%COMP%]  .hide-subtitle{opacity:0;visibility:collapse;margin:0;padding:0;transition:.25s ease-in-out}[_nghost-%COMP%]  .show-subtitle{opacity:1;visibility:visible;transition:.25s ease-in-out .4s}[_nghost-%COMP%]  .hide-subtitle-container{-webkit-animation:.4s ease-in-out forwards hide-subtitle;animation:.4s ease-in-out forwards hide-subtitle}[_nghost-%COMP%]  .show-subtitle-container{-webkit-animation:.4s ease-in-out forwards show-subtitle;animation:.4s ease-in-out forwards show-subtitle}[_nghost-%COMP%]  .collapsed-menu .expand{transform:rotate(0);transition:.4s ease-in-out}[_nghost-%COMP%]  .collapsed-menu .menu-icons{-webkit-animation:.4s ease-in-out forwards decrease-increase;animation:.4s ease-in-out forwards decrease-increase}[_nghost-%COMP%]  .expanded-menu .expand{transform:rotate(-180deg);transition:.4s ease-in-out}[_nghost-%COMP%]  .expanded-menu .menu-icons{-webkit-animation:.4s ease-in-out forwards increase-decrease;animation:.4s ease-in-out forwards increase-decrease}"] });
GlSharedComponentFilterComponent.ctorParameters = () => [
    { type: Router },
    { type: GlSharedComponentFilterService }
];
__decorate([
    ViewChild('container', { static: true, read: ElementRef })
], GlSharedComponentFilterComponent.prototype, "container", void 0);
__decorate([
    ViewChild('background', { static: true, read: ElementRef })
], GlSharedComponentFilterComponent.prototype, "background", void 0);
__decorate([
    ViewChild('menuNavContainer')
], GlSharedComponentFilterComponent.prototype, "menuNavContainer", void 0);
__decorate([
    Input()
], GlSharedComponentFilterComponent.prototype, "title", void 0);
__decorate([
    Input()
], GlSharedComponentFilterComponent.prototype, "subtitle", void 0);
__decorate([
    Input()
], GlSharedComponentFilterComponent.prototype, "type", void 0);
__decorate([
    Input()
], GlSharedComponentFilterComponent.prototype, "closeButton", void 0);
__decorate([
    Input()
], GlSharedComponentFilterComponent.prototype, "partialResult", void 0);
__decorate([
    Input()
], GlSharedComponentFilterComponent.prototype, "partialResultDescription", void 0);
__decorate([
    Input()
], GlSharedComponentFilterComponent.prototype, "itemSingularDescription", void 0);
__decorate([
    Input()
], GlSharedComponentFilterComponent.prototype, "itemPluralDescription", void 0);
__decorate([
    Input()
], GlSharedComponentFilterComponent.prototype, "applyButtonDescription", void 0);
__decorate([
    Input()
], GlSharedComponentFilterComponent.prototype, "clearButtonDescription", void 0);
__decorate([
    Input()
], GlSharedComponentFilterComponent.prototype, "buttonClass", void 0);
__decorate([
    Input()
], GlSharedComponentFilterComponent.prototype, "isIE", void 0);
__decorate([
    Input()
], GlSharedComponentFilterComponent.prototype, "applyPartialResult", void 0);
__decorate([
    Output()
], GlSharedComponentFilterComponent.prototype, "applyFilter$", void 0);
__decorate([
    Output()
], GlSharedComponentFilterComponent.prototype, "clearFilter$", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentFilterComponent, [{
        type: Component,
        args: [{
                selector: 'gl-shared-component-filter',
                template: "<gl-shared-component-menu-background\n  #background\n  (click)=\"service.backgroundClick($event)\"\n></gl-shared-component-menu-background>\n<div #container class=\"filter-container {{ type }}\">\n  <div class=\"header-filter-container\">\n    <div class=\"menu-header\">\n      <div class=\"menu-top-icons-container\">\n        <img id=\"close-menu-button\" (click)=\"service.close($event)\" [src]=\"closeButton\" class=\"menu-icons close-menu\" alt=\"Close menu button\">\n      </div>\n      <div class=\"menu-header-title\">\n        <h1 class=\"title\">{{ title }}</h1>\n        <h2 class=\"subtitle\">{{ subtitle }}</h2>\n      </div>\n    </div>\n  </div>\n  <nav class=\"menu-nav-container\" #menuNavContainer>\n    <div class=\"menu-content\">\n      <div class=\"input-container\" >\n        <ng-content></ng-content>\n      </div>\n    </div>\n  </nav>\n  <div class=\"bottom-container\">\n    <span\n      *ngIf=\"partialResult != null\"\n      class=\"partial-result-description\">{{ partialResultDescription }} {{ partialResult }} {{ partialResult > 1 ? itemPluralDescription : itemSingularDescription }}\n    </span>\n    <div class=\"buttons-container\">\n      <gl-shared-component-input-button-simple\n        value=\"apply\"\n        [class]=\"buttonClass\"\n        [innerValue]=\"applyButtonDescription\"\n        (click)=\"onApply()\"\n      ></gl-shared-component-input-button-simple>\n      <gl-shared-component-input-button-simple\n        value=\"clear\"\n        [class]=\"buttonClass\"\n        [innerValue]=\"clearButtonDescription\"\n        (click)=\"onClear()\"\n      ></gl-shared-component-input-button-simple>\n    </div>\n  </div>\n</div>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep .filter-container .menu-nav-container::-webkit-scrollbar:horizontal{height:.5em}:host::ng-deep .filter-container .menu-nav-container::-webkit-scrollbar{width:.5em}:host::ng-deep .filter-container .menu-nav-container::-webkit-scrollbar-button{background-color:#333437;display:none!important}:host::ng-deep .filter-container .menu-nav-container::-webkit-scrollbar-track-piece{background-color:#2c2c2f}:host::ng-deep .filter-container .menu-nav-container::-webkit-scrollbar-thumb{background-color:#64666c;border:1px solid #38393c}:host::ng-deep .filter-container{border-top:.3em solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5;border-bottom:2em solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5;display:flex;flex-direction:column;background:0 0/cover #1a1b1d;position:fixed;top:0;bottom:0;overflow:hidden;width:85vw;right:-110%;max-width:17em;min-width:17em;z-index:10000;transition:right .5s ease-in-out;flex-grow:1;height:100vh}:host::ng-deep .filter-container.translucid{background:rgba(255,255,255,.05);border-left:1px solid rgba(255,255,255,.05);border-top:.3em solid rgba(255,255,255,.1);border-image-source:none}:host::ng-deep .filter-container .a{display:block;min-height:3em}:host::ng-deep .filter-container .header-filter-container .menu-header{display:flex;flex-direction:column;margin:.5em 1em 1em .5em}:host::ng-deep .filter-container .header-filter-container .menu-header .menu-top-icons-container{display:flex;margin:0 0 1.5em}:host::ng-deep .filter-container .header-filter-container .menu-header .menu-top-icons-container .close-menu,:host::ng-deep .filter-container .header-filter-container .menu-header .menu-top-icons-container .settings-menu{cursor:pointer;height:1.5em;width:1.5em}:host::ng-deep .filter-container .header-filter-container .menu-header .menu-top-icons-container .close-menu:active,:host::ng-deep .filter-container .header-filter-container .menu-header .menu-top-icons-container .close-menu:hover,:host::ng-deep .filter-container .header-filter-container .menu-header .menu-top-icons-container .settings-menu:active,:host::ng-deep .filter-container .header-filter-container .menu-header .menu-top-icons-container .settings-menu:hover{opacity:1;-webkit-animation:.4s ease-in-out forwards increase-decrease;animation:.4s ease-in-out forwards increase-decrease}:host::ng-deep .filter-container .header-filter-container .menu-header .menu-top-icons-container .close-menu{margin:0 .2em 0 0}:host::ng-deep .filter-container .header-filter-container .menu-header .menu-header-title .subtitle,:host::ng-deep .filter-container .header-filter-container .menu-header .menu-header-title .title{text-transform:uppercase;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#fff;margin:0}:host::ng-deep .filter-container .header-filter-container .menu-header .menu-header-title .title{font-family:Montserrat,sans-serif;font-weight:700;font-size:.9em;display:none}:host::ng-deep .filter-container .header-filter-container .menu-header .menu-header-title .subtitle{font-family:Montserrat,sans-serif;font-weight:100;font-size:1.5em}:host::ng-deep .filter-container .bottom-container{display:flex;flex-direction:column;margin:1em 0 .4em}:host::ng-deep .filter-container .bottom-container .partial-result-description{font-family:Montserrat,sans-serif;font-weight:700;color:#d24077;font-size:.5em;padding:0 0 0 .5em;text-align:center}:host::ng-deep .filter-container .bottom-container .buttons-container{display:flex;padding:.6em 0 .3em .3em;font-size:.8em}:host::ng-deep .filter-container .bottom-container .buttons-container .default-button:nth-child(1){margin:0 .5em 0 0}:host::ng-deep .filter-container .bottom-container .buttons-container .default-button:nth-child(2){margin:0 0 0 .5em}:host::ng-deep .filter-container .menu-nav-container{scrollbar-face-color:#333437!important;scrollbar-shadow-color:#38393c!important;scrollbar-track-color:#2c2c2f!important;scrollbar-arrow-color:#64666c!important;overflow:auto;max-height:100%;flex-grow:1;display:flex;overflow-x:hidden;border-top:0 solid transparent!important;position:relative;border-bottom:0 solid transparent!important}:host::ng-deep .filter-container .menu-nav-container::before{width:100%;height:1px;left:0;top:1px;margin-top:-1px;content:\"\";position:absolute;background:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%)}:host::ng-deep .filter-container .menu-nav-container::after{width:100%;height:1px;left:0;margin-bottom:-1px;content:\"\";position:absolute;background:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);bottom:-10.5%}:host::ng-deep .filter-container .menu-nav-container .menu-content{display:flex;flex-direction:column;flex-grow:1;position:relative}:host::ng-deep .filter-container .menu-nav-container .menu-content .menu-title{background:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);margin:0 0 .14em;position:relative;display:flex;align-items:center;border-left:.2em solid #fff}:host::ng-deep .filter-container .menu-nav-container .menu-content .menu-title .material-icons{color:rgba(255,255,255,.6);font-size:1.2em;padding:.3em;margin:0 .5em 0 .3em}:host::ng-deep .filter-container .menu-nav-container .menu-content .menu-title .material-icons.expand{position:absolute;color:#fff;top:.5em;right:.3em}:host::ng-deep .filter-container .menu-nav-container .menu-content .menu-title .menu-icons{padding:.2em .5em;height:1.5em;width:1.5em}:host::ng-deep .filter-container .menu-nav-container .menu-content .menu-title a{text-decoration:none;font-size:.6em;font-family:Montserrat,sans-serif;font-weight:300;text-transform:uppercase;color:#fff;padding:1.5em .7em;flex-grow:1}:host::ng-deep .filter-container .menu-nav-container .menu-content .input-container gl-shared-component-filter-container .type-container{background-color:rgba(255,255,255,.03);border-bottom:1px solid rgba(255,255,255,.03)}:host::ng-deep .filter-container .menu-nav-container .menu-content .input-container .options-container{display:flex}:host::ng-deep .filter-container .menu-nav-container .menu-content .input-container gl-shared-component-input-autocomplete-simple .input-container{margin:.2em 0 0;height:1.5em}:host::ng-deep .show-admin-settings{visibility:visible!important}:host::ng-deep .filter-container .menu-active{right:0}:host::ng-deep .menu-active{right:0}:host::ng-deep .menu-background{opacity:0;visibility:collapse;z-index:-1000;left:1000px}:host::ng-deep .visible-background{width:100%;height:100%;background:rgba(0,0,0,.6);opacity:1;visibility:visible;position:fixed;top:0;left:0;z-index:999;transition:1s ease-in-out}:host::ng-deep .hide-subtitle{opacity:0;visibility:collapse;margin:0;padding:0;transition:.25s ease-in-out}:host::ng-deep .show-subtitle{opacity:1;visibility:visible;transition:.25s ease-in-out .4s}:host::ng-deep .hide-subtitle-container{-webkit-animation:.4s ease-in-out forwards hide-subtitle;animation:.4s ease-in-out forwards hide-subtitle}:host::ng-deep .show-subtitle-container{-webkit-animation:.4s ease-in-out forwards show-subtitle;animation:.4s ease-in-out forwards show-subtitle}:host::ng-deep .collapsed-menu .expand{transform:rotate(0);transition:.4s ease-in-out}:host::ng-deep .collapsed-menu .menu-icons{-webkit-animation:.4s ease-in-out forwards decrease-increase;animation:.4s ease-in-out forwards decrease-increase}:host::ng-deep .expanded-menu .expand{transform:rotate(-180deg);transition:.4s ease-in-out}:host::ng-deep .expanded-menu .menu-icons{-webkit-animation:.4s ease-in-out forwards increase-decrease;animation:.4s ease-in-out forwards increase-decrease}"]
            }]
    }], function () { return [{ type: ɵngcc1.Router }, { type: GlSharedComponentFilterService }]; }, { subtitle: [{
            type: Input
        }], type: [{
            type: Input
        }], closeButton: [{
            type: Input
        }], partialResultDescription: [{
            type: Input
        }], itemSingularDescription: [{
            type: Input
        }], itemPluralDescription: [{
            type: Input
        }], applyButtonDescription: [{
            type: Input
        }], clearButtonDescription: [{
            type: Input
        }], buttonClass: [{
            type: Input
        }], isIE: [{
            type: Input
        }], applyFilter$: [{
            type: Output
        }], clearFilter$: [{
            type: Output
        }], container: [{
            type: ViewChild,
            args: ['container', { static: true, read: ElementRef }]
        }], background: [{
            type: ViewChild,
            args: ['background', { static: true, read: ElementRef }]
        }], menuNavContainer: [{
            type: ViewChild,
            args: ['menuNavContainer']
        }], title: [{
            type: Input
        }], partialResult: [{
            type: Input
        }], applyPartialResult: [{
            type: Input
        }] }); })();
export { GlSharedComponentFilterComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1maWx0ZXIuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJuZzovZ2wtbmctZnJvbnRlbmQvbGliL3NoYXJlZC9jb21wb25lbnQvZmlsdGVyL2dsLXNoYXJlZC1jb21wb25lbnQtZmlsdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUMsekNBQXpDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQyx0RkFBdEYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFPdEYsSUFBYSxnQ0FBZ0MsR0FBN0M7SUFBYSxnQ0FBZ0M7QUF1QjNDLFlBQ1MsTUFBYyxFQUNkLE9BQXVDLFlBRHZDLFdBQU0sR0FBTixNQUFNLENBQVEsU0FDZCxZQUFPLEdBQVAsT0FBTztBQUFnQyxTQW5CdkMsYUFBUSxHQUFXLFFBQVEsQ0FBQztBQUM1QixTQUFJLEdBQXNCLEVBQUUsQ0FBQyxTQUM3QixnQkFBVyxHQUFXLG1DQUFtQyxDQUFDLFNBRTFEOztnQkFBd0IsR0FBVzs7Q0FBcUMsQ0FBQyxTQUN6RTtLQUF1QixHQUFXLE1BQU0sQ0FBQyxTQUN6QywwQkFBcUIsR0FBVyxPQUFPLENBQUMsU0FDeEM7YUFBc0IsR0FBVyxjQUFjLENBQUMsU0FDaEQ7O0dBQXNCLEdBQVcsY0FBYyxDQUFDO0dBQ2hEO0dBQVcsR0FBNEIsa0JBQWtCLENBQUMsU0FFMUQ7QUFBSSxHQUFZLEtBQUssQ0FBQyxTQUdyQjtVQUFZLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUMsU0FDdEQsaUJBQVks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QVIsS0FBSyxFQUFFLFhBQWMsSUFBckIsS0FBSyxFQUFFO3FFQUEyRCxyRUFBMUQscUVBQTBEO0FBRTFELEFBQUE7SUFBUixLQUFLLEVBQUUsWEFBYyxJQUFyQixLQUFLLEVBQUU7OERBQXVCLDlEQUF0Qiw4REFBc0I7QUFDdEIsQUFBQTtJQUFSLEtBQUssRUFBRSxYQUFjLElBQXJCLEtBQUssRUFBRTs0RUFBeUMsNUVBQXhDLDRFQUF3QztBQUV2QyxBQUFBO0lBQVQsTUFBTSxFQUFFLFpBQWMsSUFBdEIsTUFBTSxFQUFFO3NFQUF1RCx0RUFBdEQsc0VBQXNEO0FBQ3RELEFBQUE7SUFBVCxNQUFNLEVBQUUsWkFBYyxJQUF0QixNQUFNLEVBQUU7c0VBQXVELHRFQUF0RCxzRUFBc0Q7QUFyQnJELGdDQUFnQyxvQkFMNUMsU0FBUyxDQUFDLFVBQ1QsUUFBUSxFQUFFLGxGQUlDLGdDQUFnQyxvQkFMNUMsU0FBUyxDQUFDLFVBQ1QsUUFBUSxFQUFFO21CQUE0QixBQUFBO0lBQ3RDLEFBQUE7O21sREFBMEQsQUFBQTsrbFBBRTNELENBQUMsSUFDVyxnQ0FBZ0MsQ0E4QzVDLFdBOUNZLGdDQUFnQyxqRkFENUMsQ0FBQyxJQUNXLGdDQUFnQyxDQThDNUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUNEOztBQXhEQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgR2xTaGFyZWRDb21wb25lbnRGaWx0ZXJTZXJ2aWNlIH0gZnJvbSAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWZpbHRlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2wtc2hhcmVkLWNvbXBvbmVudC1maWx0ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1maWx0ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nbC1zaGFyZWQtY29tcG9uZW50LWZpbHRlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50RmlsdGVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHsgc3RhdGljOiB0cnVlLCByZWFkOiBFbGVtZW50UmVmIH0pIGNvbnRhaW5lcjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ2JhY2tncm91bmQnLCB7IHN0YXRpYzogdHJ1ZSwgcmVhZDogRWxlbWVudFJlZiB9KSBiYWNrZ3JvdW5kOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcbiAgQFZpZXdDaGlsZCgnbWVudU5hdkNvbnRhaW5lcicpIG1lbnVOYXZDb250YWluZXI6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHN1YnRpdGxlOiBzdHJpbmcgPSAnRmlsdGVyJztcbiAgQElucHV0KCkgdHlwZTogJ3RyYW5zbHVjaWQnIHwgJycgPSAnJztcbiAgQElucHV0KCkgY2xvc2VCdXR0b246IHN0cmluZyA9ICcuLi9hc3NldHMvaW1nL2ljb24vbWVudS9jbG9zZS5zdmcnO1xuICBASW5wdXQoKSBwYXJ0aWFsUmVzdWx0OiBudW1iZXI7XG4gIEBJbnB1dCgpIHBhcnRpYWxSZXN1bHREZXNjcmlwdGlvbjogc3RyaW5nID0gJ1BhcnRpYWwgcmVzdWx0cyB3aXRoIHRoZXNlIGZpbHRlcnM6JztcbiAgQElucHV0KCkgaXRlbVNpbmd1bGFyRGVzY3JpcHRpb246IHN0cmluZyA9ICdpdGVtJztcbiAgQElucHV0KCkgaXRlbVBsdXJhbERlc2NyaXB0aW9uOiBzdHJpbmcgPSAnaXRlbXMnO1xuICBASW5wdXQoKSBhcHBseUJ1dHRvbkRlc2NyaXB0aW9uOiBzdHJpbmcgPSAnQXBwbHkgZmlsdGVyJztcbiAgQElucHV0KCkgY2xlYXJCdXR0b25EZXNjcmlwdGlvbjogc3RyaW5nID0gJ0NsZWFyIGZpbHRlcic7XG4gIEBJbnB1dCgpIGJ1dHRvbkNsYXNzOiAnbGlnaHQtdHJhbnNsdWNpZCcgfCAnJyA9ICdsaWdodC10cmFuc2x1Y2lkJztcblxuICBASW5wdXQoKSBpc0lFOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGFwcGx5UGFydGlhbFJlc3VsdDogKCkgPT4gUHJvbWlzZTx2b2lkPjtcblxuICBAT3V0cHV0KCkgYXBwbHlGaWx0ZXIkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBjbGVhckZpbHRlciQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHVibGljIHNlcnZpY2U6IEdsU2hhcmVkQ29tcG9uZW50RmlsdGVyU2VydmljZVxuICApIHtcbiAgICBzZXJ2aWNlLmFwcGx5UGFydGlhbFJlc3VsdCA9IHRoaXMuYXBwbHlQYXJ0aWFsUmVzdWx0O1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2VydmljZS5pbml0aWFsaXplKFxuICAgICAgdGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudCxcbiAgICAgIHRoaXMuYmFja2dyb3VuZC5uYXRpdmVFbGVtZW50LFxuICAgICAgdGhpcy5tZW51TmF2Q29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLnJvdXRlclxuICAgICk7XG4gIH1cblxuICBvbkFwcGx5KCkge1xuICAgIHRoaXMuYXBwbHlGaWx0ZXIkLmVtaXQoKTtcbiAgfVxuXG4gIG9uQ2xlYXIoKSB7XG4gICAgdGhpcy5jbGVhckZpbHRlciQuZW1pdCgpO1xuICB9XG59XG4iXX0=