import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '../input/button/simple/gl-shared-component-input-button-simple.component';

function GlSharedComponentPagingComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 11);
    ɵngcc0.ɵɵlistener("click", function GlSharedComponentPagingComponent_a_2_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r7); const ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.onPageChange($event, "first"); });
    ɵngcc0.ɵɵelement(1, "img", 12);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("title", ctx_r0.firstPageTitle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("src", ctx_r0.firstIcon, ɵngcc0.ɵɵsanitizeUrl)("alt", ctx_r0.firstPageTitle);
} }
function GlSharedComponentPagingComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 13);
    ɵngcc0.ɵɵlistener("click", function GlSharedComponentPagingComponent_a_3_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r8 = ɵngcc0.ɵɵnextContext(); return ctx_r8.onPageChange($event, "previous"); });
    ɵngcc0.ɵɵelement(1, "img", 12);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("title", ctx_r1.previousPageTitle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("src", ctx_r1.previousIcon, ɵngcc0.ɵɵsanitizeUrl)("alt", ctx_r1.previousPageTitle);
} }
function GlSharedComponentPagingComponent_gl_shared_component_input_button_simple_7_Template(rf, ctx) { if (rf & 1) {
    const _r12 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "gl-shared-component-input-button-simple", 14);
    ɵngcc0.ɵɵlistener("click", function GlSharedComponentPagingComponent_gl_shared_component_input_button_simple_7_Template_gl_shared_component_input_button_simple_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r12); const button_r10 = ctx.$implicit; const ctx_r11 = ɵngcc0.ɵɵnextContext(); return ctx_r11.setPage(button_r10.page); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const button_r10 = ctx.$implicit;
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(button_r10.active ? "active" : "");
    ɵngcc0.ɵɵproperty("value", button_r10.page.toString())("innerValue", button_r10.page.toString())("title", ctx_r2.pageDescription + " " + button_r10.page.toString());
} }
function GlSharedComponentPagingComponent_a_8_Template(rf, ctx) { if (rf & 1) {
    const _r14 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 15);
    ɵngcc0.ɵɵlistener("click", function GlSharedComponentPagingComponent_a_8_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r14); const ctx_r13 = ɵngcc0.ɵɵnextContext(); return ctx_r13.onPageChange($event, "next"); });
    ɵngcc0.ɵɵelement(1, "img", 12);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("title", ctx_r3.nextPageTitle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("src", ctx_r3.nextIcon, ɵngcc0.ɵɵsanitizeUrl)("alt", ctx_r3.nextPageTitle);
} }
function GlSharedComponentPagingComponent_a_9_Template(rf, ctx) { if (rf & 1) {
    const _r16 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 16);
    ɵngcc0.ɵɵlistener("click", function GlSharedComponentPagingComponent_a_9_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r16); const ctx_r15 = ɵngcc0.ɵɵnextContext(); return ctx_r15.onPageChange($event, "last"); });
    ɵngcc0.ɵɵelement(1, "img", 12);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("title", ctx_r4.lastPageTitle);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("src", ctx_r4.lastIcon, ɵngcc0.ɵɵsanitizeUrl)("alt", ctx_r4.lastPageTitle);
} }
function GlSharedComponentPagingComponent_gl_shared_component_input_button_simple_13_Template(rf, ctx) { if (rf & 1) {
    const _r19 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "gl-shared-component-input-button-simple", 17);
    ɵngcc0.ɵɵlistener("click", function GlSharedComponentPagingComponent_gl_shared_component_input_button_simple_13_Template_gl_shared_component_input_button_simple_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r19); const item_r17 = ctx.$implicit; const ctx_r18 = ɵngcc0.ɵɵnextContext(); return ctx_r18.setNumberOfItems(item_r17.pageSize); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r17 = ctx.$implicit;
    ɵngcc0.ɵɵclassMap(item_r17.class);
    ɵngcc0.ɵɵproperty("title", item_r17.title)("innerValue", item_r17.innerValue)("value", item_r17.value);
} }
let GlSharedComponentPagingComponent = class GlSharedComponentPagingComponent {
    constructor() {
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
    ngAfterViewInit() {
        for (let i = 1; i <= 5; i++) {
            const pageSize = +this[`pageSizeValue${i}`];
            this.itemsPerPage.push({
                title: `${pageSize} ${this.itemsPerPageDescriptions.toLowerCase()}`,
                innerValue: pageSize === null || pageSize === void 0 ? void 0 : pageSize.toString(),
                value: pageSize === null || pageSize === void 0 ? void 0 : pageSize.toString(),
                class: this.pageSize == pageSize ? 'active' : '',
                pageSize
            });
        }
    }
    onPageChange(event, type) {
        this.onPageChange$.emit({ event, type });
    }
    setNumberOfItems(items) {
        this.itemsPerPage.map(x => x.class = x.pageSize == items ? 'active' : '');
        this.setNumberOfItems$.emit(items);
    }
    setPage(page) {
        this.setPage$.emit(page);
    }
};
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
export { GlSharedComponentPagingComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1wYWdpbmcuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJuZzovZ2wtbmctZnJvbnRlbmQvbGliL3NoYXJlZC9jb21wb25lbnQvcGFnaW5nL2dsLXNoYXJlZC1jb21wb25lbnQtcGFnaW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRdEYsSUFBYSxnQ0FBZ0MsR0FBN0M7SUFBYSxnQ0FBZ0M7QUE4QjNDLHdCQTFCUyxTQUFJLEdBQStCLE1BQU0sQ0FBQyxTQUMxQyxtQkFBYyxHQUFXLFlBQVksQ0FBQyxTQUN0Qzs7aUJBQWlCLEdBQVcsZUFBZSxDQUFDLFNBQzVDLGtCQUFhLEdBQVcsV0FBVyxDQUFDO09BQ3BDLGtCQUFhLEdBQVcsV0FBVyxDQUFDO01BQ3BDLG9CQUFlLEdBQVcsTUFBTSxDQUFDO01BRWpDLDZCQUF3QixHQUFXLGdCQUFnQixDQUFDLFNBQ3BELG1CQUFjLEdBQVcsQ0FBQyxDQUFDLFNBQzNCLG1CQUFjLEdBQVcsRUFBRSxDQUFDLFNBQzVCLG1CQUFjLEdBQVcsRUFBRSxDQUFDLFNBQzVCLG1CQUFjLEdBQVcsRUFBRSxDQUFDLFNBQzVCLG1CQUFjLEdBQVcsRUFBRSxDQUFDO0dBRTVCLGdCQUFXLEdBQW1CLEVBQUUsQ0FBQyxTQUVoQztnQkFBYSxHQUEwQixJQUFJO1FBQVksRUFBRSxDQUFDO0lBQzFELHNCQUFpQixHQUF5QixJQUFJO0VBQVksRUFBRSxDQUFDLFNBQzdELGFBQVEsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztHQUU5RCxpQkFBWSxHQUFvQjtBQUFFLENBQUMsU0FDMUIsY0FBUyxHQUFXLHFDQUFxQyxDQUFDLFNBQzFELGlCQUFZLEdBQVc7OzhCQUF3QyxDQUFDLFNBQ2hFLGFBQVEsR0FBVztZQUFvQyxDQUFDLFNBQ3hELGFBQVEsR0FB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QSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElJdGVtc1BlclBhZ2UsIElQYWdlQnV0dG9ucywgSVBhZ2luZywgVFBhZ2luZ1R5cGUgfSBmcm9tICcuL2dsLXNoYXJlZC1jb21wb25lbnQtcGFnaW5nLmludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtcGFnaW5nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dsLXNoYXJlZC1jb21wb25lbnQtcGFnaW5nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1wYWdpbmcuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudFBhZ2luZ0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBwYWdlSW5mbzogc3RyaW5nO1xuICBASW5wdXQoKSBoYXNOZXh0OiBib29sZWFuO1xuICBASW5wdXQoKSBoYXNQcmV2aW91czogYm9vbGVhbjtcbiAgQElucHV0KCkgdHlwZTogJ3RyYW5zbHVjaWQnIHwgJ2RhcmsnIHwgJycgPSAnZGFyayc7XG4gIEBJbnB1dCgpIGZpcnN0UGFnZVRpdGxlOiBzdHJpbmcgPSAnRmlyc3QgcGFnZSc7XG4gIEBJbnB1dCgpIHByZXZpb3VzUGFnZVRpdGxlOiBzdHJpbmcgPSAnUHJldmlvdXMgcGFnZSc7XG4gIEBJbnB1dCgpIG5leHRQYWdlVGl0bGU6IHN0cmluZyA9ICdOZXh0IHBhZ2UnO1xuICBASW5wdXQoKSBsYXN0UGFnZVRpdGxlOiBzdHJpbmcgPSAnTGFzdCBwYWdlJztcbiAgQElucHV0KCkgcGFnZURlc2NyaXB0aW9uOiBzdHJpbmcgPSAnUGFnZSc7XG4gIEBJbnB1dCgpIHBhZ2VTaXplOiBudW1iZXI7XG4gIEBJbnB1dCgpIGl0ZW1zUGVyUGFnZURlc2NyaXB0aW9uczogc3RyaW5nID0gJ0l0ZW1zIHBlciBwYWdlJztcbiAgQElucHV0KCkgcGFnZVNpemVWYWx1ZTE6IG51bWJlciA9IDU7XG4gIEBJbnB1dCgpIHBhZ2VTaXplVmFsdWUyOiBudW1iZXIgPSAxMDtcbiAgQElucHV0KCkgcGFnZVNpemVWYWx1ZTM6IG51bWJlciA9IDE1O1xuICBASW5wdXQoKSBwYWdlU2l6ZVZhbHVlNDogbnVtYmVyID0gMjA7XG4gIEBJbnB1dCgpIHBhZ2VTaXplVmFsdWU1OiBudW1iZXIgPSAyNTtcblxuICBASW5wdXQoKSBwYWdlQnV0dG9uczogSVBhZ2VCdXR0b25zW10gPSBbXTtcblxuICBAT3V0cHV0KCkgb25QYWdlQ2hhbmdlJDogRXZlbnRFbWl0dGVyPElQYWdpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgc2V0TnVtYmVyT2ZJdGVtcyQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgc2V0UGFnZSQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGl0ZW1zUGVyUGFnZTogSUl0ZW1zUGVyUGFnZVtdID0gW107XG4gIHJlYWRvbmx5IGZpcnN0SWNvbjogc3RyaW5nID0gJy4uL2Fzc2V0cy9pbWcvaWNvbi9wYWdpbmcvZmlyc3Quc3ZnJztcbiAgcmVhZG9ubHkgcHJldmlvdXNJY29uOiBzdHJpbmcgPSAnLi4vYXNzZXRzL2ltZy9pY29uL3BhZ2luZy9wcmV2aW91cy5zdmcnO1xuICByZWFkb25seSBuZXh0SWNvbjogc3RyaW5nID0gJy4uL2Fzc2V0cy9pbWcvaWNvbi9wYWdpbmcvbmV4dC5zdmcnO1xuICByZWFkb25seSBsYXN0SWNvbjogc3RyaW5nID0gJy4uL2Fzc2V0cy9pbWcvaWNvbi9wYWdpbmcvbGFzdC5zdmcnO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNTsgaSsrKSB7XG4gICAgICBjb25zdCBwYWdlU2l6ZSA9ICt0aGlzW2BwYWdlU2l6ZVZhbHVlJHtpfWBdO1xuXG4gICAgICB0aGlzLml0ZW1zUGVyUGFnZS5wdXNoKHtcbiAgICAgICAgdGl0bGU6IGAke3BhZ2VTaXplfSAke3RoaXMuaXRlbXNQZXJQYWdlRGVzY3JpcHRpb25zLnRvTG93ZXJDYXNlKCl9YCxcbiAgICAgICAgaW5uZXJWYWx1ZTogcGFnZVNpemU/LnRvU3RyaW5nKCksXG4gICAgICAgIHZhbHVlOiBwYWdlU2l6ZT8udG9TdHJpbmcoKSxcbiAgICAgICAgY2xhc3M6IHRoaXMucGFnZVNpemUgPT0gcGFnZVNpemUgPyAnYWN0aXZlJyA6ICcnLFxuICAgICAgICBwYWdlU2l6ZVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBvblBhZ2VDaGFuZ2UoZXZlbnQ6IE1vdXNlRXZlbnQsIHR5cGU6IFRQYWdpbmdUeXBlKSB7XG4gICAgdGhpcy5vblBhZ2VDaGFuZ2UkLmVtaXQoeyBldmVudCwgdHlwZSB9KTtcbiAgfVxuICBzZXROdW1iZXJPZkl0ZW1zKGl0ZW1zOiBudW1iZXIpIHtcbiAgICB0aGlzLml0ZW1zUGVyUGFnZS5tYXAoeCA9PiB4LmNsYXNzID0geC5wYWdlU2l6ZSA9PSBpdGVtcyA/ICdhY3RpdmUnIDogJycpXG4gICAgdGhpcy5zZXROdW1iZXJPZkl0ZW1zJC5lbWl0KGl0ZW1zKTtcbiAgfVxuICBzZXRQYWdlKHBhZ2U6IG51bWJlcikge1xuICAgIHRoaXMuc2V0UGFnZSQuZW1pdChwYWdlKTtcbiAgfVxufVxuIl19