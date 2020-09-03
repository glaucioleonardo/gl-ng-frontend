import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '../input/button/simple/gl-shared-component-input-button-simple.component';

function GlSharedComponentPagingComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    var _r7 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 11);
    ɵngcc0.ɵɵlistener("click", function GlSharedComponentPagingComponent_a_2_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r7); var ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.onPageChange($event, "first"); });
    ɵngcc0.ɵɵelement(1, "img", 12);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("title", ctx_r0.firstPageTitle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("src", ctx_r0.firstIcon, ɵngcc0.ɵɵsanitizeUrl)("alt", ctx_r0.firstPageTitle);
} }
function GlSharedComponentPagingComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    var _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 13);
    ɵngcc0.ɵɵlistener("click", function GlSharedComponentPagingComponent_a_3_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); var ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.onPageChange($event, "previous"); });
    ɵngcc0.ɵɵelement(1, "img", 12);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("title", ctx_r1.previousPageTitle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("src", ctx_r1.previousIcon, ɵngcc0.ɵɵsanitizeUrl)("alt", ctx_r1.previousPageTitle);
} }
function GlSharedComponentPagingComponent_gl_shared_component_input_button_simple_7_Template(rf, ctx) { if (rf & 1) {
    var _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "gl-shared-component-input-button-simple", 14);
    ɵngcc0.ɵɵlistener("click", function GlSharedComponentPagingComponent_gl_shared_component_input_button_simple_7_Template_gl_shared_component_input_button_simple_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r12); var button_r10 = ctx.$implicit; var ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.setPage(button_r10.page); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var button_r10 = ctx.$implicit;
    var ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(button_r10.active ? "active" : "");
    ɵngcc0.ɵɵproperty("value", button_r10.page.toString())("innerValue", button_r10.page.toString())("title", ctx_r2.pageDescription + " " + button_r10.page.toString());
} }
function GlSharedComponentPagingComponent_a_8_Template(rf, ctx) { if (rf & 1) {
    var _r14 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 15);
    ɵngcc0.ɵɵlistener("click", function GlSharedComponentPagingComponent_a_8_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r14); var ctx_r13 = ɵngcc0.ɵɵnextContext(); return ctx_r13.onPageChange($event, "next"); });
    ɵngcc0.ɵɵelement(1, "img", 12);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("title", ctx_r3.nextPageTitle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("src", ctx_r3.nextIcon, ɵngcc0.ɵɵsanitizeUrl)("alt", ctx_r3.nextPageTitle);
} }
function GlSharedComponentPagingComponent_a_9_Template(rf, ctx) { if (rf & 1) {
    var _r16 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 16);
    ɵngcc0.ɵɵlistener("click", function GlSharedComponentPagingComponent_a_9_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r16); var ctx_r15 = ɵngcc0.ɵɵnextContext(); return ctx_r15.onPageChange($event, "last"); });
    ɵngcc0.ɵɵelement(1, "img", 12);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("title", ctx_r4.lastPageTitle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("src", ctx_r4.lastIcon, ɵngcc0.ɵɵsanitizeUrl)("alt", ctx_r4.lastPageTitle);
} }
function GlSharedComponentPagingComponent_gl_shared_component_input_button_simple_13_Template(rf, ctx) { if (rf & 1) {
    var _r19 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "gl-shared-component-input-button-simple", 17);
    ɵngcc0.ɵɵlistener("click", function GlSharedComponentPagingComponent_gl_shared_component_input_button_simple_13_Template_gl_shared_component_input_button_simple_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r19); var item_r17 = ctx.$implicit; var ctx_r18 = ɵngcc0.ɵɵnextContext(); return ctx_r18.setNumberOfItems(item_r17.pageSize); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r17 = ctx.$implicit;
    ɵngcc0.ɵɵclassMap(item_r17.class);
    ɵngcc0.ɵɵproperty("title", item_r17.title)("innerValue", item_r17.innerValue)("value", item_r17.value);
} }
var GlSharedComponentPagingComponent = /** @class */ (function () {
    function GlSharedComponentPagingComponent() {
        this.type = 'dark';
        this.firstPageTitle = 'First page';
        this.previousPageTitle = 'Previous page';
        this.nextPageTitle = 'Next page';
        this.lastPageTitle = 'Last page';
        this.pageDescription = 'Page';
        this.itemsPerPageDescriptions = 'Items per page';
        this.pageSizeValue1 = 5;
        this.pageSizeValue2 = 10;
        this.pageSizeValue3 = 15;
        this.pageSizeValue4 = 20;
        this.pageSizeValue5 = 25;
        this.pageButtons = [];
        this.onPageChange$ = new EventEmitter();
        this.setNumberOfItems$ = new EventEmitter();
        this.setPage$ = new EventEmitter();
        this.itemsPerPage = [];
        this.firstIcon = '../assets/img/icon/paging/first.svg';
        this.previousIcon = '../assets/img/icon/paging/previous.svg';
        this.nextIcon = '../assets/img/icon/paging/next.svg';
        this.lastIcon = '../assets/img/icon/paging/last.svg';
    }
    GlSharedComponentPagingComponent.prototype.ngAfterViewInit = function () {
        for (var i = 1; i <= 5; i++) {
            var pageSize = +this["pageSizeValue" + i];
            this.itemsPerPage.push({
                title: pageSize + " " + this.itemsPerPageDescriptions.toLowerCase(),
                innerValue: pageSize === null || pageSize === void 0 ? void 0 : pageSize.toString(),
                value: pageSize === null || pageSize === void 0 ? void 0 : pageSize.toString(),
                class: this.pageSize == pageSize ? 'active' : '',
                pageSize: pageSize
            });
        }
    };
    GlSharedComponentPagingComponent.prototype.onPageChange = function (event, type) {
        this.onPageChange$.emit({ event: event, type: type });
    };
    GlSharedComponentPagingComponent.prototype.setNumberOfItems = function (items) {
        this.itemsPerPage.map(function (x) { return x.class = x.pageSize == items ? 'active' : ''; });
        this.setNumberOfItems$.emit(items);
    };
    GlSharedComponentPagingComponent.prototype.setPage = function (page) {
        this.setPage$.emit(page);
    };
    __decorate([
        Input()
    ], GlSharedComponentPagingComponent.prototype, "pageInfo", void 0);
    __decorate([
        Input()
    ], GlSharedComponentPagingComponent.prototype, "hasNext", void 0);
    __decorate([
        Input()
    ], GlSharedComponentPagingComponent.prototype, "hasPrevious", void 0);
    __decorate([
        Input()
    ], GlSharedComponentPagingComponent.prototype, "type", void 0);
    __decorate([
        Input()
    ], GlSharedComponentPagingComponent.prototype, "firstPageTitle", void 0);
    __decorate([
        Input()
    ], GlSharedComponentPagingComponent.prototype, "previousPageTitle", void 0);
    __decorate([
        Input()
    ], GlSharedComponentPagingComponent.prototype, "nextPageTitle", void 0);
    __decorate([
        Input()
    ], GlSharedComponentPagingComponent.prototype, "lastPageTitle", void 0);
    __decorate([
        Input()
    ], GlSharedComponentPagingComponent.prototype, "pageDescription", void 0);
    __decorate([
        Input()
    ], GlSharedComponentPagingComponent.prototype, "pageSize", void 0);
    __decorate([
        Input()
    ], GlSharedComponentPagingComponent.prototype, "itemsPerPageDescriptions", void 0);
    __decorate([
        Input()
    ], GlSharedComponentPagingComponent.prototype, "pageSizeValue1", void 0);
    __decorate([
        Input()
    ], GlSharedComponentPagingComponent.prototype, "pageSizeValue2", void 0);
    __decorate([
        Input()
    ], GlSharedComponentPagingComponent.prototype, "pageSizeValue3", void 0);
    __decorate([
        Input()
    ], GlSharedComponentPagingComponent.prototype, "pageSizeValue4", void 0);
    __decorate([
        Input()
    ], GlSharedComponentPagingComponent.prototype, "pageSizeValue5", void 0);
    __decorate([
        Input()
    ], GlSharedComponentPagingComponent.prototype, "pageButtons", void 0);
    __decorate([
        Output()
    ], GlSharedComponentPagingComponent.prototype, "onPageChange$", void 0);
    __decorate([
        Output()
    ], GlSharedComponentPagingComponent.prototype, "setNumberOfItems$", void 0);
    __decorate([
        Output()
    ], GlSharedComponentPagingComponent.prototype, "setPage$", void 0);
GlSharedComponentPagingComponent.ɵfac = function GlSharedComponentPagingComponent_Factory(t) { return new (t || GlSharedComponentPagingComponent)(); };
GlSharedComponentPagingComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentPagingComponent, selectors: [["gl-shared-component-paging"]], inputs: { type: "type", firstPageTitle: "firstPageTitle", previousPageTitle: "previousPageTitle", nextPageTitle: "nextPageTitle", lastPageTitle: "lastPageTitle", pageDescription: "pageDescription", itemsPerPageDescriptions: "itemsPerPageDescriptions", pageSizeValue1: "pageSizeValue1", pageSizeValue2: "pageSizeValue2", pageSizeValue3: "pageSizeValue3", pageSizeValue4: "pageSizeValue4", pageSizeValue5: "pageSizeValue5", pageButtons: "pageButtons", pageInfo: "pageInfo", hasNext: "hasNext", hasPrevious: "hasPrevious", pageSize: "pageSize" }, outputs: { onPageChange$: "onPageChange$", setNumberOfItems$: "setNumberOfItems$", setPage$: "setPage$" }, decls: 14, vars: 11, consts: [[1, "pagination-buttons-container"], ["id", "first-page", "class", "anchor-button", 3, "title", "click", 4, "ngIf"], ["id", "prev-page", "class", "anchor-button", 3, "title", "click", 4, "ngIf"], ["id", "page-info"], [1, "page-buttons-container"], [3, "value", "innerValue", "class", "title", "click", 4, "ngFor", "ngForOf"], ["href", "#", "id", "next-page", "class", "anchor-button", 3, "title", "click", 4, "ngIf"], ["href", "#", "id", "last-page", "class", "anchor-button", 3, "title", "click", 4, "ngIf"], [1, "number-items-page"], [1, "label-page-items"], [3, "title", "innerValue", "value", "class", "click", 4, "ngFor", "ngForOf"], ["id", "first-page", 1, "anchor-button", 3, "title", "click"], [3, "src", "alt"], ["id", "prev-page", 1, "anchor-button", 3, "title", "click"], [3, "value", "innerValue", "title", "click"], ["href", "#", "id", "next-page", 1, "anchor-button", 3, "title", "click"], ["href", "#", "id", "last-page", 1, "anchor-button", 3, "title", "click"], [3, "title", "innerValue", "value", "click"]], template: function GlSharedComponentPagingComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵelementStart(1, "div", 0);
        ɵngcc0.ɵɵtemplate(2, GlSharedComponentPagingComponent_a_2_Template, 2, 3, "a", 1);
        ɵngcc0.ɵɵtemplate(3, GlSharedComponentPagingComponent_a_3_Template, 2, 3, "a", 2);
        ɵngcc0.ɵɵelementStart(4, "span", 3);
        ɵngcc0.ɵɵtext(5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(6, "div", 4);
        ɵngcc0.ɵɵtemplate(7, GlSharedComponentPagingComponent_gl_shared_component_input_button_simple_7_Template, 1, 5, "gl-shared-component-input-button-simple", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(8, GlSharedComponentPagingComponent_a_8_Template, 2, 3, "a", 6);
        ɵngcc0.ɵɵtemplate(9, GlSharedComponentPagingComponent_a_9_Template, 2, 3, "a", 7);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(10, "div", 8);
        ɵngcc0.ɵɵelementStart(11, "span", 9);
        ɵngcc0.ɵɵtext(12);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(13, GlSharedComponentPagingComponent_gl_shared_component_input_button_simple_13_Template, 1, 5, "gl-shared-component-input-button-simple", 10);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate1("pagination-container ", ctx.type, "");
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.hasPrevious);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.hasPrevious);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.pageInfo);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.pageButtons);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.hasNext);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.hasNext);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate(ctx.itemsPerPageDescriptions);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.itemsPerPage);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgForOf, ɵngcc2.GlSharedComponentInputButtonSimpleComponent], styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);[_nghost-%COMP%] {max-width:100vw}[_nghost-%COMP%]  .pagination-container{max-width:100vw;position:relative;background-color:#1a1b1d;font-size:.5em;display:flex;align-items:center;justify-content:center;height:2.5em}[_nghost-%COMP%]  .pagination-container .pagination-buttons-container{flex-grow:1;justify-content:center;display:flex;align-items:center}[_nghost-%COMP%]  .pagination-container .pagination-buttons-container #page-info{color:#fff;margin:auto 1.2em;font-size:.8em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:none}[_nghost-%COMP%]  .pagination-container .pagination-buttons-container .page-buttons-container{display:flex;padding:0 1em;width:30%}[_nghost-%COMP%]  .pagination-container .pagination-buttons-container .page-buttons-container gl-shared-component-input-button-simple{height:1.5em;width:1.5em;margin:0 .2em;display:flex}[_nghost-%COMP%]  .pagination-container .pagination-buttons-container .page-buttons-container gl-shared-component-input-button-simple .default-button{font-family:Montserrat,sans-serif;font-weight:300;border-radius:.2em;font-size:.8em}[_nghost-%COMP%]  .pagination-container .pagination-buttons-container .page-buttons-container gl-shared-component-input-button-simple .default-button:not(hover){background-color:rgba(255,255,255,.1);transition:.5s ease-in-out}[_nghost-%COMP%]  .pagination-container .pagination-buttons-container .page-buttons-container gl-shared-component-input-button-simple .default-button:hover{background-color:rgba(255,255,255,.3);transition:.2s ease-in-out}[_nghost-%COMP%]  .pagination-container .pagination-buttons-container .page-buttons-container gl-shared-component-input-button-simple .default-button.active{font-family:Montserrat,sans-serif;font-weight:700;background-color:#fff;color:#64666c;transition:.5s ease-in-out}[_nghost-%COMP%]  .pagination-container .pagination-buttons-container .anchor-button{width:1.5em;height:1.5em;padding:.5em 0}[_nghost-%COMP%]  .pagination-container .pagination-buttons-container .anchor-button#first-page{margin:0 .5em 0 0}[_nghost-%COMP%]  .pagination-container .pagination-buttons-container .anchor-button#last-page{margin:0 0 0 .5em}[_nghost-%COMP%]  .pagination-container .pagination-buttons-container .anchor-button img{height:1.5em;width:1.5em}[_nghost-%COMP%]  .pagination-container .pagination-buttons-container .anchor-button:not(hover){opacity:.2;transition:.2s ease-in-out}[_nghost-%COMP%]  .pagination-container .pagination-buttons-container .anchor-button:hover{opacity:1;transition:.2s ease-in-out}[_nghost-%COMP%]  .pagination-container .number-items-page{position:absolute;right:.4em;top:.5em;display:flex;align-items:center;height:1.5em;width:20em}[_nghost-%COMP%]  .pagination-container .number-items-page .label-page-items{font-family:Montserrat,sans-serif;font-weight:300;padding:.8em 1em .3em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:.8em;color:#fff;opacity:1;text-transform:uppercase;margin:0 .5em 0 0}[_nghost-%COMP%]  .pagination-container .number-items-page gl-shared-component-input-button-simple{height:1.5em;width:1.5em;margin:0 .2em;flex:1 1 .2em;display:flex;justify-content:center}[_nghost-%COMP%]  .pagination-container .number-items-page gl-shared-component-input-button-simple .default-button{font-family:Montserrat,sans-serif;font-weight:300;min-height:1.5em;min-width:1.5em;flex:1 1 .2em;border-radius:.2em;font-size:.6em}[_nghost-%COMP%]  .pagination-container .number-items-page gl-shared-component-input-button-simple .default-button:not(hover){background-color:rgba(255,255,255,.1);transition:.5s ease-in-out}[_nghost-%COMP%]  .pagination-container .number-items-page gl-shared-component-input-button-simple .default-button:hover{background-color:rgba(255,255,255,.3);transition:.2s ease-in-out}[_nghost-%COMP%]  .pagination-container .number-items-page gl-shared-component-input-button-simple .default-button.active{font-family:Montserrat,sans-serif;font-weight:900;font-size:.7em;background-color:#fff;color:#4b4d52;transition:.5s ease-in-out}[_nghost-%COMP%]  .pagination-container.translucid{background-color:rgba(0,0,0,.2)}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentPagingComponent, [{
        type: Component,
        args: [{
                selector: 'gl-shared-component-paging',
                template: "<div class=\"pagination-container {{ type }}\">\n  <div class=\"pagination-buttons-container\">\n    <a id=\"first-page\" class=\"anchor-button\"\n       *ngIf=\"hasPrevious\" (click)=\"onPageChange($event, 'first')\"\n       [title]=\"firstPageTitle\">\n      <img [src]=\"firstIcon\" [alt]=\"firstPageTitle\">\n    </a>\n    <a id=\"prev-page\" class=\"anchor-button\"\n       *ngIf=\"hasPrevious\" (click)=\"onPageChange($event, 'previous')\"\n       [title]=\"previousPageTitle\">\n      <img [src]=\"previousIcon\" [alt]=\"previousPageTitle\">\n    </a>\n    <span id=\"page-info\">{{ pageInfo }}</span>\n    <div class=\"page-buttons-container\">\n      <gl-shared-component-input-button-simple\n        *ngFor=\"let button of pageButtons\"\n        [value]=\"button.page.toString()\"\n        [innerValue]=\"button.page.toString()\"\n        (click)=\"setPage(button.page)\"\n        [class]=\"button.active ? 'active' : ''\"\n        [title]=\"pageDescription + ' ' + button.page.toString()\"\n      ></gl-shared-component-input-button-simple>\n    </div>\n    <a href=\"#\" id=\"next-page\" class=\"anchor-button\"\n       *ngIf=\"hasNext\" (click)=\"onPageChange($event, 'next')\"\n       [title]=\"nextPageTitle\">\n      <img [src]=\"nextIcon\" [alt]=\"nextPageTitle\">\n    </a>\n    <a href=\"#\" id=\"last-page\" class=\"anchor-button\"\n       *ngIf=\"hasNext\" (click)=\"onPageChange($event, 'last')\"\n       [title]=\"lastPageTitle\">\n      <img [src]=\"lastIcon\" [alt]=\"lastPageTitle\">\n    </a>\n  </div>\n\n  <div class=\"number-items-page\" >\n    <span class=\"label-page-items\">{{ itemsPerPageDescriptions }}</span>\n    <gl-shared-component-input-button-simple\n      *ngFor=\"let item of itemsPerPage\"\n        [title]=\"item.title\"\n        [innerValue]=\"item.innerValue\"\n        [value]=\"item.value\"\n        [class]=\"item.class\"\n        (click)=\"setNumberOfItems(item.pageSize)\"\n    ></gl-shared-component-input-button-simple>\n  </div>\n</div>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep{max-width:100vw}:host::ng-deep .pagination-container{max-width:100vw;position:relative;background-color:#1a1b1d;font-size:.5em;display:flex;align-items:center;justify-content:center;height:2.5em}:host::ng-deep .pagination-container .pagination-buttons-container{flex-grow:1;justify-content:center;display:flex;align-items:center}:host::ng-deep .pagination-container .pagination-buttons-container #page-info{color:#fff;margin:auto 1.2em;font-size:.8em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:none}:host::ng-deep .pagination-container .pagination-buttons-container .page-buttons-container{display:flex;padding:0 1em;width:30%}:host::ng-deep .pagination-container .pagination-buttons-container .page-buttons-container gl-shared-component-input-button-simple{height:1.5em;width:1.5em;margin:0 .2em;display:flex}:host::ng-deep .pagination-container .pagination-buttons-container .page-buttons-container gl-shared-component-input-button-simple .default-button{font-family:Montserrat,sans-serif;font-weight:300;border-radius:.2em;font-size:.8em}:host::ng-deep .pagination-container .pagination-buttons-container .page-buttons-container gl-shared-component-input-button-simple .default-button:not(hover){background-color:rgba(255,255,255,.1);transition:.5s ease-in-out}:host::ng-deep .pagination-container .pagination-buttons-container .page-buttons-container gl-shared-component-input-button-simple .default-button:hover{background-color:rgba(255,255,255,.3);transition:.2s ease-in-out}:host::ng-deep .pagination-container .pagination-buttons-container .page-buttons-container gl-shared-component-input-button-simple .default-button.active{font-family:Montserrat,sans-serif;font-weight:700;background-color:#fff;color:#64666c;transition:.5s ease-in-out}:host::ng-deep .pagination-container .pagination-buttons-container .anchor-button{width:1.5em;height:1.5em;padding:.5em 0}:host::ng-deep .pagination-container .pagination-buttons-container .anchor-button#first-page{margin:0 .5em 0 0}:host::ng-deep .pagination-container .pagination-buttons-container .anchor-button#last-page{margin:0 0 0 .5em}:host::ng-deep .pagination-container .pagination-buttons-container .anchor-button img{height:1.5em;width:1.5em}:host::ng-deep .pagination-container .pagination-buttons-container .anchor-button:not(hover){opacity:.2;transition:.2s ease-in-out}:host::ng-deep .pagination-container .pagination-buttons-container .anchor-button:hover{opacity:1;transition:.2s ease-in-out}:host::ng-deep .pagination-container .number-items-page{position:absolute;right:.4em;top:.5em;display:flex;align-items:center;height:1.5em;width:20em}:host::ng-deep .pagination-container .number-items-page .label-page-items{font-family:Montserrat,sans-serif;font-weight:300;padding:.8em 1em .3em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:.8em;color:#fff;opacity:1;text-transform:uppercase;margin:0 .5em 0 0}:host::ng-deep .pagination-container .number-items-page gl-shared-component-input-button-simple{height:1.5em;width:1.5em;margin:0 .2em;flex:1 1 .2em;display:flex;justify-content:center}:host::ng-deep .pagination-container .number-items-page gl-shared-component-input-button-simple .default-button{font-family:Montserrat,sans-serif;font-weight:300;min-height:1.5em;min-width:1.5em;flex:1 1 .2em;border-radius:.2em;font-size:.6em}:host::ng-deep .pagination-container .number-items-page gl-shared-component-input-button-simple .default-button:not(hover){background-color:rgba(255,255,255,.1);transition:.5s ease-in-out}:host::ng-deep .pagination-container .number-items-page gl-shared-component-input-button-simple .default-button:hover{background-color:rgba(255,255,255,.3);transition:.2s ease-in-out}:host::ng-deep .pagination-container .number-items-page gl-shared-component-input-button-simple .default-button.active{font-family:Montserrat,sans-serif;font-weight:900;font-size:.7em;background-color:#fff;color:#4b4d52;transition:.5s ease-in-out}:host::ng-deep .pagination-container.translucid{background-color:rgba(0,0,0,.2)}"]
            }]
    }], function () { return []; }, { type: [{
            type: Input
        }], firstPageTitle: [{
            type: Input
        }], previousPageTitle: [{
            type: Input
        }], nextPageTitle: [{
            type: Input
        }], lastPageTitle: [{
            type: Input
        }], pageDescription: [{
            type: Input
        }], itemsPerPageDescriptions: [{
            type: Input
        }], pageSizeValue1: [{
            type: Input
        }], pageSizeValue2: [{
            type: Input
        }], pageSizeValue3: [{
            type: Input
        }], pageSizeValue4: [{
            type: Input
        }], pageSizeValue5: [{
            type: Input
        }], pageButtons: [{
            type: Input
        }], onPageChange$: [{
            type: Output
        }], setNumberOfItems$: [{
            type: Output
        }], setPage$: [{
            type: Output
        }], pageInfo: [{
            type: Input
        }], hasNext: [{
            type: Input
        }], hasPrevious: [{
            type: Input
        }], pageSize: [{
            type: Input
        }] }); })();
    return GlSharedComponentPagingComponent;
}());
export { GlSharedComponentPagingComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1wYWdpbmcuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJuZzovZ2wtbmctZnJvbnRlbmQvbGliL3NoYXJlZC9jb21wb25lbnQvcGFnaW5nL2dsLXNoYXJlZC1jb21wb25lbnQtcGFnaW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRdEY7K0JBOEJFOzBDQTFCUyxTQUFJLEdBQStCLE1BQU0sQ0FBQyxTQUMxQyxtQkFBYyxHQUFXOztHQUFZLENBQUMsU0FDdEMsc0JBQWlCLEdBQVcsZUFBZSxDQUFDLFNBQzVDO0NBQWEsR0FBVyxXQUFXLENBQUMsU0FDcEM7RUFBYSxHQUFXLFdBQVcsQ0FBQyxTQUNwQztPQUFlLEdBQVcsTUFBTSxDQUFDLFNBRWpDLDZCQUF3QixHQUFXLGdCQUFnQixDQUFDLFNBQ3BELG1CQUFjLEdBQVcsQ0FBQyxDQUFDLFNBQzNCLG1CQUFjLEdBQVcsRUFBRSxDQUFDLFNBQzVCLG1CQUFjLEdBQVcsRUFBRSxDQUFDLFNBQzVCLG1CQUFjLEdBQVcsRUFBRSxDQUFDLFNBQzVCO1VBQWMsR0FBVyxFQUFFLENBQUMsU0FFNUI7S0FBVyxHQUFtQixFQUFFLENBQUMsU0FFaEM7V0FBYSxHQUEwQjtFQUFJLFlBQVksRUFBRSxDQUFDLFNBQzFEO09BQWlCLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUMsU0FDN0QsYUFBUSxHQUF5QjtHQUFJLFlBQVksRUFBRSxDQUFDO0VBRTlELGlCQUFZLEdBQW9CLEVBQUUsQ0FBQyxTQUMxQixjQUFTLEdBQVcscUNBQXFDLENBQUMsU0FDMUQ7O1dBQVksR0FBVyx3Q0FBd0MsQ0FBQyxTQUNoRSxhQUFRO0FBQVcsb0NBQW9DLENBQUM7S0FDeEQsYUFBUSxHQUFXO2tCQUFvQyxDQUFDLEtBRWxELENBQUMsS0FFaEIsMERBQWUs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Q0FBZ0MsQ0F3RDVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQ0Q7QUFBQyxJQURELHVDQUFDO0FBQ0EsQ0FEQSxBQXhERCxJQXdEQzs7QUFoRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJSXRlbXNQZXJQYWdlLCBJUGFnZUJ1dHRvbnMsIElQYWdpbmcsIFRQYWdpbmdUeXBlIH0gZnJvbSAnLi9nbC1zaGFyZWQtY29tcG9uZW50LXBhZ2luZy5pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LXBhZ2luZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LXBhZ2luZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtcGFnaW5nLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRQYWdpbmdDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgcGFnZUluZm86IHN0cmluZztcbiAgQElucHV0KCkgaGFzTmV4dDogYm9vbGVhbjtcbiAgQElucHV0KCkgaGFzUHJldmlvdXM6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHR5cGU6ICd0cmFuc2x1Y2lkJyB8ICdkYXJrJyB8ICcnID0gJ2RhcmsnO1xuICBASW5wdXQoKSBmaXJzdFBhZ2VUaXRsZTogc3RyaW5nID0gJ0ZpcnN0IHBhZ2UnO1xuICBASW5wdXQoKSBwcmV2aW91c1BhZ2VUaXRsZTogc3RyaW5nID0gJ1ByZXZpb3VzIHBhZ2UnO1xuICBASW5wdXQoKSBuZXh0UGFnZVRpdGxlOiBzdHJpbmcgPSAnTmV4dCBwYWdlJztcbiAgQElucHV0KCkgbGFzdFBhZ2VUaXRsZTogc3RyaW5nID0gJ0xhc3QgcGFnZSc7XG4gIEBJbnB1dCgpIHBhZ2VEZXNjcmlwdGlvbjogc3RyaW5nID0gJ1BhZ2UnO1xuICBASW5wdXQoKSBwYWdlU2l6ZTogbnVtYmVyO1xuICBASW5wdXQoKSBpdGVtc1BlclBhZ2VEZXNjcmlwdGlvbnM6IHN0cmluZyA9ICdJdGVtcyBwZXIgcGFnZSc7XG4gIEBJbnB1dCgpIHBhZ2VTaXplVmFsdWUxOiBudW1iZXIgPSA1O1xuICBASW5wdXQoKSBwYWdlU2l6ZVZhbHVlMjogbnVtYmVyID0gMTA7XG4gIEBJbnB1dCgpIHBhZ2VTaXplVmFsdWUzOiBudW1iZXIgPSAxNTtcbiAgQElucHV0KCkgcGFnZVNpemVWYWx1ZTQ6IG51bWJlciA9IDIwO1xuICBASW5wdXQoKSBwYWdlU2l6ZVZhbHVlNTogbnVtYmVyID0gMjU7XG5cbiAgQElucHV0KCkgcGFnZUJ1dHRvbnM6IElQYWdlQnV0dG9uc1tdID0gW107XG5cbiAgQE91dHB1dCgpIG9uUGFnZUNoYW5nZSQ6IEV2ZW50RW1pdHRlcjxJUGFnaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHNldE51bWJlck9mSXRlbXMkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHNldFBhZ2UkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBpdGVtc1BlclBhZ2U6IElJdGVtc1BlclBhZ2VbXSA9IFtdO1xuICByZWFkb25seSBmaXJzdEljb246IHN0cmluZyA9ICcuLi9hc3NldHMvaW1nL2ljb24vcGFnaW5nL2ZpcnN0LnN2Zyc7XG4gIHJlYWRvbmx5IHByZXZpb3VzSWNvbjogc3RyaW5nID0gJy4uL2Fzc2V0cy9pbWcvaWNvbi9wYWdpbmcvcHJldmlvdXMuc3ZnJztcbiAgcmVhZG9ubHkgbmV4dEljb246IHN0cmluZyA9ICcuLi9hc3NldHMvaW1nL2ljb24vcGFnaW5nL25leHQuc3ZnJztcbiAgcmVhZG9ubHkgbGFzdEljb246IHN0cmluZyA9ICcuLi9hc3NldHMvaW1nL2ljb24vcGFnaW5nL2xhc3Quc3ZnJztcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDU7IGkrKykge1xuICAgICAgY29uc3QgcGFnZVNpemUgPSArdGhpc1tgcGFnZVNpemVWYWx1ZSR7aX1gXTtcblxuICAgICAgdGhpcy5pdGVtc1BlclBhZ2UucHVzaCh7XG4gICAgICAgIHRpdGxlOiBgJHtwYWdlU2l6ZX0gJHt0aGlzLml0ZW1zUGVyUGFnZURlc2NyaXB0aW9ucy50b0xvd2VyQ2FzZSgpfWAsXG4gICAgICAgIGlubmVyVmFsdWU6IHBhZ2VTaXplPy50b1N0cmluZygpLFxuICAgICAgICB2YWx1ZTogcGFnZVNpemU/LnRvU3RyaW5nKCksXG4gICAgICAgIGNsYXNzOiB0aGlzLnBhZ2VTaXplID09IHBhZ2VTaXplID8gJ2FjdGl2ZScgOiAnJyxcbiAgICAgICAgcGFnZVNpemVcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgb25QYWdlQ2hhbmdlKGV2ZW50OiBNb3VzZUV2ZW50LCB0eXBlOiBUUGFnaW5nVHlwZSkge1xuICAgIHRoaXMub25QYWdlQ2hhbmdlJC5lbWl0KHsgZXZlbnQsIHR5cGUgfSk7XG4gIH1cbiAgc2V0TnVtYmVyT2ZJdGVtcyhpdGVtczogbnVtYmVyKSB7XG4gICAgdGhpcy5pdGVtc1BlclBhZ2UubWFwKHggPT4geC5jbGFzcyA9IHgucGFnZVNpemUgPT0gaXRlbXMgPyAnYWN0aXZlJyA6ICcnKVxuICAgIHRoaXMuc2V0TnVtYmVyT2ZJdGVtcyQuZW1pdChpdGVtcyk7XG4gIH1cbiAgc2V0UGFnZShwYWdlOiBudW1iZXIpIHtcbiAgICB0aGlzLnNldFBhZ2UkLmVtaXQocGFnZSk7XG4gIH1cbn1cbiJdfQ==