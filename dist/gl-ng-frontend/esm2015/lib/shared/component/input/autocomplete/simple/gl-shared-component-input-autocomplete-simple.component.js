import { __awaiter, __decorate } from "tslib";
import { Overlay } from '@angular/cdk/overlay';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { GlSharedComponentInputAutocompleteSimpleService } from './gl-shared-component-input-autocomplete-simple.service';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/cdk/overlay';
import * as ɵngcc2 from '@angular/material/form-field';
import * as ɵngcc3 from '@angular/material/input';
import * as ɵngcc4 from '@angular/forms';
import * as ɵngcc5 from '@angular/material/autocomplete';
import * as ɵngcc6 from '@angular/material/dialog';
import * as ɵngcc7 from '@angular/common';
import * as ɵngcc8 from '@angular/material/core';

const _c0 = ["input"];
function GlSharedComponentInputAutocompleteSimpleComponent_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-option", 8);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r4 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("value", option_r4.text);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", option_r4.text, " ");
} }
const _c1 = ["*"];
let GlSharedComponentInputAutocompleteSimpleComponent = class GlSharedComponentInputAutocompleteSimpleComponent {
    constructor(_service, overlay) {
        this._service = _service;
        this.overlay = overlay;
        this.currentValue = new EventEmitter();
        this.listItems = [];
        this.class = '';
        this.maxLength = '255';
        this._loaded = false;
        this.imageSource = '../assets/img/icon/drop-down/arrow-down.svg';
        this.clearSource = '../assets/img/icon/drop-down/clear.svg';
        this.autocompleteInput = new FormControl();
        _service.autocompleteList$.subscribe(update => {
            if (this.listName === update.listName) {
                this.listItems = update.options;
                this.setup();
            }
        });
        _service.autocompleteReset$.subscribe(update => {
            if (this.id === update.comboboxId) {
                this.input.nativeElement.value = '';
                this.validate();
            }
        });
        _service.autocompleteLoaded$.subscribe(loaded => {
            this._loaded = loaded;
            _service.autocompleteLoaded$.observers.map(x => x.complete());
        });
        _service.autocompleteUpdateValue$.subscribe(update => {
            if (this.id === update.comboboxId) {
                this.listItems = update.options;
                const value = update.options.filter(x => x.value === update.value);
                const input = this.input.nativeElement;
                if (value != null && value.length > 0) {
                    input.value = value[0].text;
                    this.autocompleteInput.setValue(value[0].text);
                    this.value = value[0].value;
                    this.setup();
                }
                else {
                    input.value = '';
                    this.autocompleteInput.setValue('');
                    this.value = '';
                    this.setup();
                }
            }
        });
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.setup();
        });
    }
    setup() {
        this.filteredOptions = this.autocompleteInput.valueChanges.pipe(startWith(''), 
        // startWith(this.value),
        map(value => this.filter(value)));
        // if (!this._loaded) { this.autocompleteInput.setValue(this.value); }
        // this.autocompleteInput.setValue(this.value);
        setTimeout(() => { this.validate(); });
    }
    filter(value) {
        if (value == null) {
            value = '';
        }
        const filterValue = value.toLowerCase();
        return this.listItems.filter(option => { var _a; return (_a = option.text) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(filterValue); });
    }
    validate() {
        const input = this.input.nativeElement;
        const value = input.value;
        const filteredData = this.filter(value);
        if (value != null && value.trim().length > 0 && filteredData.length > 0) {
            input.value = filteredData[0].text;
            this.autocompleteInput.setValue(filteredData[0].text);
            this.currentValue.emit({ text: filteredData[0].text, value: filteredData[0].value });
        }
        else {
            input.value = '';
            this.autocompleteInput.setValue('');
            this.currentValue.emit({ text: null, value: null });
        }
    }
    reset(auto, event) {
        if (auto.options != null) {
            auto.options.map(option => option.deselect());
        }
        event.currentTarget.select();
    }
    clearItems(input) {
        input.value = null;
        this.autocompleteInput.setValue(null);
        this.currentValue.emit({ text: null, value: null });
        setTimeout(() => {
            input.click();
        }, 100);
    }
    arrowClick() {
        this.autocompleteInput.reset();
        this.autocompleteInput.setValue('');
    }
    ngOnDestroy() {
        this._service.autocompleteList$.observers.map(x => x.complete());
        this._service.autocompleteReset$.observers.map(x => x.complete());
        this._service.autocompleteLoaded$.observers.map(x => x.complete());
    }
    ngOnChanges(changes) {
        var _a, _b, _c, _d;
        const prevList = (_a = changes.listItems) === null || _a === void 0 ? void 0 : _a.previousValue;
        const currList = (_b = changes.listItems) === null || _b === void 0 ? void 0 : _b.currentValue;
        const prevValue = (_c = changes.value) === null || _c === void 0 ? void 0 : _c.previousValue;
        const currValue = (_d = changes.value) === null || _d === void 0 ? void 0 : _d.currentValue;
        if (prevList != currList) {
            this.setup();
        }
        if (prevValue != currValue) {
            this.setup();
        }
        this.overlay.position().global().dispose();
        // if (prevList != currList || prevValue != currValue) { this.setup(); }
    }
};
GlSharedComponentInputAutocompleteSimpleComponent.ɵfac = function GlSharedComponentInputAutocompleteSimpleComponent_Factory(t) { return new (t || GlSharedComponentInputAutocompleteSimpleComponent)(ɵngcc0.ɵɵdirectiveInject(GlSharedComponentInputAutocompleteSimpleService), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Overlay)); };
GlSharedComponentInputAutocompleteSimpleComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentInputAutocompleteSimpleComponent, selectors: [["gl-shared-component-input-autocomplete-simple"]], viewQuery: function GlSharedComponentInputAutocompleteSimpleComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.input = _t.first);
    } }, inputs: { listItems: "listItems", class: "class", maxLength: "maxLength", value: "value", disabled: "disabled", listName: "listName", id: "id", placeholder: "placeholder", itemContentAlignment: "itemContentAlignment", custom: "custom", baseUrl: "baseUrl", valueField: "valueField", textField: "textField", labelValue: "labelValue", labelAlignment: "labelAlignment", required: "required", requiredField: "requiredField" }, outputs: { currentValue: "currentValue" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c1, decls: 12, vars: 30, consts: [["floatLabel", "never", "appearance", "none", 3, "focusout"], ["type", "text", "aria-label", "Number", "matInput", "", 3, "readonly", "id", "placeholder", "formControl", "maxLength", "matAutocomplete", "focusin", "focusout"], ["input", ""], ["autoActiveFirstOption", "true", 3, "mat-dialog-close", "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["alt", "Show items", 3, "src", "click"], ["arrowDown", ""], [3, "value"]], template: function GlSharedComponentInputAutocompleteSimpleComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = ɵngcc0.ɵɵgetCurrentView();
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
        ɵngcc0.ɵɵelementStart(1, "div");
        ɵngcc0.ɵɵelementStart(2, "mat-form-field", 0);
        ɵngcc0.ɵɵlistener("focusout", function GlSharedComponentInputAutocompleteSimpleComponent_Template_mat_form_field_focusout_2_listener() { return ctx.overlay.position().global().dispose(); });
        ɵngcc0.ɵɵelementStart(3, "div");
        ɵngcc0.ɵɵelementStart(4, "input", 1, 2);
        ɵngcc0.ɵɵlistener("focusin", function GlSharedComponentInputAutocompleteSimpleComponent_Template_input_focusin_4_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); const _r1 = ɵngcc0.ɵɵreference(7); return ctx.reset(_r1, $event); })("focusout", function GlSharedComponentInputAutocompleteSimpleComponent_Template_input_focusout_4_listener() { return ctx.validate(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(6, "mat-autocomplete", 3, 4);
        ɵngcc0.ɵɵlistener("optionSelected", function GlSharedComponentInputAutocompleteSimpleComponent_Template_mat_autocomplete_optionSelected_6_listener() { ɵngcc0.ɵɵrestoreView(_r5); const _r0 = ɵngcc0.ɵɵreference(5); return _r0.blur(); });
        ɵngcc0.ɵɵtemplate(8, GlSharedComponentInputAutocompleteSimpleComponent_mat_option_8_Template, 2, 2, "mat-option", 5);
        ɵngcc0.ɵɵpipe(9, "async");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(10, "img", 6, 7);
        ɵngcc0.ɵɵlistener("click", function GlSharedComponentInputAutocompleteSimpleComponent_Template_img_click_10_listener() { ɵngcc0.ɵɵrestoreView(_r5); const _r0 = ɵngcc0.ɵɵreference(5); return ctx.clearItems(_r0); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r1 = ɵngcc0.ɵɵreference(7);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate3("input-container custom-combobox ", ctx.class, " ", ctx.disabled ? "read-only" : "", " ", ctx.listItems.length > 0 ? "" : "no-data", "");
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassMapInterpolate2("combobox-container ", ctx.listItems.length > 0 ? "" : "no-data", " ", ctx.disabled ? "read-only" : "", "");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate4("item-content ", ctx.itemContentAlignment, " ", ctx.class, " ", ctx.listItems.length > 0 ? "" : "no-data", " ", ctx.disabled ? "read-only" : "", "");
        ɵngcc0.ɵɵproperty("readonly", ctx.disabled)("id", ctx.id)("placeholder", ctx.placeholder)("formControl", ctx.autocompleteInput)("maxLength", ctx.maxLength)("matAutocomplete", _r1);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("mat-dialog-close", ctx.overlay.position().global().dispose());
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngForOf", ɵngcc0.ɵɵpipeBind1(9, 28, ctx.filteredOptions));
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassMapInterpolate2("arrow-down ", ctx.class, " ", ctx.disabled ? "read-only" : "", "");
        ɵngcc0.ɵɵproperty("src", ctx.imageSource, ɵngcc0.ɵɵsanitizeUrl);
    } }, directives: [ɵngcc2.MatFormField, ɵngcc3.MatInput, ɵngcc4.DefaultValueAccessor, ɵngcc5.MatAutocompleteTrigger, ɵngcc4.NgControlStatus, ɵngcc4.FormControlDirective, ɵngcc5.MatAutocomplete, ɵngcc6.MatDialogClose, ɵngcc7.NgForOf, ɵngcc8.MatOption], pipes: [ɵngcc7.AsyncPipe], styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);  .dark .mat-autocomplete-panel,   .light .mat-autocomplete-panel,   .mat-autocomplete-panel{scrollbar-face-color:#333437!important;scrollbar-shadow-color:#38393c!important;scrollbar-track-color:#2c2c2f!important;scrollbar-arrow-color:#64666c!important}  .mat-autocomplete-panel::-webkit-scrollbar:horizontal{height:.5em}  .dark .mat-autocomplete-panel::-webkit-scrollbar,   .light .mat-autocomplete-panel::-webkit-scrollbar,   .mat-autocomplete-panel::-webkit-scrollbar{width:.5em}  .dark .mat-autocomplete-panel::-webkit-scrollbar-button,   .light .mat-autocomplete-panel::-webkit-scrollbar-button,   .mat-autocomplete-panel::-webkit-scrollbar-button{background-color:#333437;display:none!important}  .dark .mat-autocomplete-panel::-webkit-scrollbar-track-piece,   .light .mat-autocomplete-panel::-webkit-scrollbar-track-piece,   .mat-autocomplete-panel::-webkit-scrollbar-track-piece{background-color:#2c2c2f}  .dark .mat-autocomplete-panel::-webkit-scrollbar-thumb,   .light .mat-autocomplete-panel::-webkit-scrollbar-thumb,   .mat-autocomplete-panel::-webkit-scrollbar-thumb{background-color:#64666c;border:1px solid #38393c}[_nghost-%COMP%] {display:flex;flex-direction:column;flex:1 0 auto;position:relative}[_nghost-%COMP%]  .input-container{display:flex;flex-grow:1;align-items:center;background-color:#333437}[_nghost-%COMP%]  .input-container mat-form-field{display:flex;flex-grow:1;margin:0}[_nghost-%COMP%]  .input-container mat-form-field .mat-form-field-wrapper{display:flex;flex-grow:1;flex-direction:column;padding:0}[_nghost-%COMP%]  .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex{display:flex;flex-grow:1;align-items:inherit}[_nghost-%COMP%]  .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix{padding:0;flex:1 1 0px;border:none;width:100%;display:flex}[_nghost-%COMP%]  .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container{display:flex;flex-grow:1;flex-direction:row;pointer-events:none}[_nghost-%COMP%]  .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element{font-family:Montserrat,sans-serif;font-weight:400;position:relative;padding:.8em;border:none;background-color:#333437;color:#fff;font-size:.45em;flex-grow:1;margin:0}[_nghost-%COMP%]  .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element::-moz-placeholder{color:#64666c!important}[_nghost-%COMP%]  .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element:-ms-input-placeholder{color:#64666c!important}[_nghost-%COMP%]  .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element::-ms-input-placeholder{color:#64666c!important}[_nghost-%COMP%]  .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element::placeholder{color:#64666c!important}[_nghost-%COMP%]  .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.left{text-align:left}[_nghost-%COMP%]  .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.center{text-align:center}[_nghost-%COMP%]  .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.right{text-align:right}[_nghost-%COMP%]  .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.light{background-color:rgba(0,0,0,.1)}[_nghost-%COMP%]  .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.light::-moz-placeholder{color:rgba(255,255,255,.2)!important}[_nghost-%COMP%]  .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.light:-ms-input-placeholder{color:rgba(255,255,255,.2)!important}[_nghost-%COMP%]  .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.light::-ms-input-placeholder{color:rgba(255,255,255,.2)!important}[_nghost-%COMP%]  .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.light::placeholder{color:rgba(255,255,255,.2)!important}[_nghost-%COMP%]  .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.dark{background-color:#161617}[_nghost-%COMP%]  .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element .item-content:-ms-input-placeholder{color:#64666c!important}[_nghost-%COMP%]  .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element .item-content.light:-ms-input-placeholder{color:gray!important}[_nghost-%COMP%]  .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .clear-items{width:.5em;height:.5em;position:absolute;right:1.5em;top:.4em}[_nghost-%COMP%]  .input-container .arrow-down{background-color:#333437;width:.8em;height:.8em;padding:0 .3em;transition:.2s ease-in-out}[_nghost-%COMP%]  .input-container .arrow-down:hover{background-color:#2c2c2f;transition:.2s ease-in-out}[_nghost-%COMP%]  .input-container .arrow-down.light{background-color:rgba(0,0,0,.1);transition:.2s ease-in-out}[_nghost-%COMP%]  .input-container .arrow-down.light::-moz-placeholder{color:rgba(255,255,255,.2)!important}[_nghost-%COMP%]  .input-container .arrow-down.light:-ms-input-placeholder{color:rgba(255,255,255,.2)!important}[_nghost-%COMP%]  .input-container .arrow-down.light::-ms-input-placeholder{color:rgba(255,255,255,.2)!important}[_nghost-%COMP%]  .input-container .arrow-down.light::placeholder{color:rgba(255,255,255,.2)!important}[_nghost-%COMP%]  .input-container .arrow-down.light:hover{background-color:rgba(0,0,0,.2);transition:.2s ease-in-out}[_nghost-%COMP%]  .input-container .arrow-down.dark{background-color:#161617;transition:.2s ease-in-out}[_nghost-%COMP%]  .input-container .arrow-down.dark:hover{background-color:#1a1b1d;transition:.2s ease-in-out}[_nghost-%COMP%]  .input-container .arrow-down.read-only{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}[_nghost-%COMP%]  .input-container.no-data .arrow-down, [_nghost-%COMP%]  .input-container.read-only .arrow-down{display:none}  .mat-autocomplete-panel{background-color:#38393c;border-radius:0;box-shadow:none!important;transition:.2s ease-in-out}  .mat-autocomplete-panel mat-option{font-size:1em;border-radius:0;transition:.2s ease-in-out;line-height:4em;height:4em;padding:0 1.5em}  .mat-autocomplete-panel mat-option:nth-child(2n+1){background-color:#333437;transition:.2s ease-in-out}  .mat-autocomplete-panel mat-option.mat-active,   .mat-autocomplete-panel mat-option.mat-selected{background-color:#d24077;transition:.2s ease-in-out}  .mat-autocomplete-panel mat-option:hover{background-color:#b01e45!important;transition:.2s ease-in-out}  .light .mat-autocomplete-panel{background-color:transparent;transition:.2s ease-in-out}  .light .mat-autocomplete-panel mat-option:nth-child(2n+1){background-color:rgba(0,0,0,.6);transition:.2s ease-in-out}  .light .mat-autocomplete-panel mat-option:nth-child(2n+2){background-color:rgba(0,0,0,.7);transition:.2s ease-in-out}  .light .mat-autocomplete-panel mat-option.mat-active{background-color:#d24077;transition:.2s ease-in-out}  .light .mat-autocomplete-panel mat-option:hover{background-color:#b01e45!important;transition:.2s ease-in-out}  .dark .mat-autocomplete-panel{background-color:transparent;transition:.2s ease-in-out}  .dark .mat-autocomplete-panel mat-option:nth-child(2n+1){background-color:#2c2c2f;transition:.2s ease-in-out}  .dark .mat-autocomplete-panel mat-option:nth-child(2n+2){background-color:#333437;transition:.2s ease-in-out}  .dark .mat-autocomplete-panel mat-option.mat-active{background-color:#d24077;transition:.2s ease-in-out}  .dark .mat-autocomplete-panel mat-option:hover{background-color:#b01e45!important;transition:.2s ease-in-out}@media screen and (min-device-width:320px) and (max-device-width:1024px){  .mat-autocomplete-panel{font-size:2.8vw!important}}@media screen and (min-device-width:1024px){  .mat-autocomplete-panel{font-size:.6vw!important}}"] });
GlSharedComponentInputAutocompleteSimpleComponent.ctorParameters = () => [
    { type: GlSharedComponentInputAutocompleteSimpleService },
    { type: Overlay }
];
__decorate([
    ViewChild('input')
], GlSharedComponentInputAutocompleteSimpleComponent.prototype, "input", void 0);
__decorate([
    Output()
], GlSharedComponentInputAutocompleteSimpleComponent.prototype, "currentValue", void 0);
__decorate([
    Input()
], GlSharedComponentInputAutocompleteSimpleComponent.prototype, "listItems", void 0);
__decorate([
    Input()
], GlSharedComponentInputAutocompleteSimpleComponent.prototype, "disabled", void 0);
__decorate([
    Input()
], GlSharedComponentInputAutocompleteSimpleComponent.prototype, "listName", void 0);
__decorate([
    Input()
], GlSharedComponentInputAutocompleteSimpleComponent.prototype, "id", void 0);
__decorate([
    Input()
], GlSharedComponentInputAutocompleteSimpleComponent.prototype, "placeholder", void 0);
__decorate([
    Input()
], GlSharedComponentInputAutocompleteSimpleComponent.prototype, "itemContentAlignment", void 0);
__decorate([
    Input()
], GlSharedComponentInputAutocompleteSimpleComponent.prototype, "class", void 0);
__decorate([
    Input()
], GlSharedComponentInputAutocompleteSimpleComponent.prototype, "value", void 0);
__decorate([
    Input()
], GlSharedComponentInputAutocompleteSimpleComponent.prototype, "maxLength", void 0);
__decorate([
    Input()
], GlSharedComponentInputAutocompleteSimpleComponent.prototype, "custom", void 0);
__decorate([
    Input()
], GlSharedComponentInputAutocompleteSimpleComponent.prototype, "baseUrl", void 0);
__decorate([
    Input()
], GlSharedComponentInputAutocompleteSimpleComponent.prototype, "valueField", void 0);
__decorate([
    Input()
], GlSharedComponentInputAutocompleteSimpleComponent.prototype, "textField", void 0);
__decorate([
    Input()
], GlSharedComponentInputAutocompleteSimpleComponent.prototype, "labelValue", void 0);
__decorate([
    Input()
], GlSharedComponentInputAutocompleteSimpleComponent.prototype, "labelAlignment", void 0);
__decorate([
    Input()
], GlSharedComponentInputAutocompleteSimpleComponent.prototype, "required", void 0);
__decorate([
    Input()
], GlSharedComponentInputAutocompleteSimpleComponent.prototype, "requiredField", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentInputAutocompleteSimpleComponent, [{
        type: Component,
        args: [{
                selector: 'gl-shared-component-input-autocomplete-simple',
                template: "<ng-content></ng-content>\n<div class=\"input-container custom-combobox {{ class }} {{ disabled ? 'read-only' : '' }} {{ listItems.length > 0 ? '' : 'no-data' }}\">\n  <mat-form-field\n    (focusout)=\"overlay.position().global().dispose()\"\n    floatLabel=\"never\"\n    appearance=\"none\">\n    <div class=\"combobox-container {{ listItems.length > 0 ? '' : 'no-data' }} {{ disabled ? 'read-only' : '' }}\">\n      <input\n        #input\n        type=\"text\"\n        aria-label=\"Number\"\n        class=\"item-content {{ itemContentAlignment }} {{ class }} {{ listItems.length > 0 ? '' : 'no-data' }} {{ disabled ? 'read-only' : '' }}\"\n        matInput\n        [readonly]=\"disabled\"\n        [id]=\"id\"\n        [placeholder]=\"placeholder\"\n        [formControl]=\"autocompleteInput\"\n        [maxLength]=\"maxLength\"\n        [matAutocomplete]=\"auto\"\n        (focusin)=\"reset(auto, $event)\"\n        (focusout)=\"validate()\">\n      <!--    <img-->\n      <!--      *ngIf=\"!disabled\"-->\n      <!--      (click)=\"clearItems(input)\"-->\n      <!--      alt=\"Clear items\"-->\n      <!--      class=\"clear-items\"-->\n      <!--      [src]=\"clearSource\">-->\n\n      <!--    <img-->\n      <!--      #arrowDown-->\n      <!--      (click)=\"clearItems(input)\"-->\n      <!--      alt=\"Show items\"-->\n      <!--      class=\"arrow-down {{ class }} {{ disabled ? 'read-only' : '' }}\"-->\n      <!--      [src]=\"imageSource\">-->\n    </div>\n    <mat-autocomplete autoActiveFirstOption=\"true\" #auto=\"matAutocomplete\" (optionSelected)=\"input.blur()\" [mat-dialog-close]=\"overlay.position().global().dispose()\">\n      <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option.text\">\n        {{option.text}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n  <img\n    #arrowDown\n    (click)=\"clearItems(input)\"\n    alt=\"Show items\"\n    class=\"arrow-down {{ class }} {{ disabled ? 'read-only' : '' }}\"\n    [src]=\"imageSource\">\n</div>\n\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);::ng-deep .dark .mat-autocomplete-panel,::ng-deep .light .mat-autocomplete-panel,::ng-deep .mat-autocomplete-panel{scrollbar-face-color:#333437!important;scrollbar-shadow-color:#38393c!important;scrollbar-track-color:#2c2c2f!important;scrollbar-arrow-color:#64666c!important}::ng-deep .mat-autocomplete-panel::-webkit-scrollbar:horizontal{height:.5em}::ng-deep .dark .mat-autocomplete-panel::-webkit-scrollbar,::ng-deep .light .mat-autocomplete-panel::-webkit-scrollbar,::ng-deep .mat-autocomplete-panel::-webkit-scrollbar{width:.5em}::ng-deep .dark .mat-autocomplete-panel::-webkit-scrollbar-button,::ng-deep .light .mat-autocomplete-panel::-webkit-scrollbar-button,::ng-deep .mat-autocomplete-panel::-webkit-scrollbar-button{background-color:#333437;display:none!important}::ng-deep .dark .mat-autocomplete-panel::-webkit-scrollbar-track-piece,::ng-deep .light .mat-autocomplete-panel::-webkit-scrollbar-track-piece,::ng-deep .mat-autocomplete-panel::-webkit-scrollbar-track-piece{background-color:#2c2c2f}::ng-deep .dark .mat-autocomplete-panel::-webkit-scrollbar-thumb,::ng-deep .light .mat-autocomplete-panel::-webkit-scrollbar-thumb,::ng-deep .mat-autocomplete-panel::-webkit-scrollbar-thumb{background-color:#64666c;border:1px solid #38393c}:host::ng-deep{display:flex;flex-direction:column;flex:1 0 auto;position:relative}:host::ng-deep .input-container{display:flex;flex-grow:1;align-items:center;background-color:#333437}:host::ng-deep .input-container mat-form-field{display:flex;flex-grow:1;margin:0}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper{display:flex;flex-grow:1;flex-direction:column;padding:0}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex{display:flex;flex-grow:1;align-items:inherit}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix{padding:0;flex:1 1 0px;border:none;width:100%;display:flex}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container{display:flex;flex-grow:1;flex-direction:row;pointer-events:none}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element{font-family:Montserrat,sans-serif;font-weight:400;position:relative;padding:.8em;border:none;background-color:#333437;color:#fff;font-size:.45em;flex-grow:1;margin:0}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element::-moz-placeholder{color:#64666c!important}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element:-ms-input-placeholder{color:#64666c!important}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element::-ms-input-placeholder{color:#64666c!important}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element::placeholder{color:#64666c!important}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.left{text-align:left}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.center{text-align:center}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.right{text-align:right}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.light{background-color:rgba(0,0,0,.1)}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.light::-moz-placeholder{color:rgba(255,255,255,.2)!important}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.light:-ms-input-placeholder{color:rgba(255,255,255,.2)!important}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.light::-ms-input-placeholder{color:rgba(255,255,255,.2)!important}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.light::placeholder{color:rgba(255,255,255,.2)!important}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.dark{background-color:#161617}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element .item-content:-ms-input-placeholder{color:#64666c!important}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element .item-content.light:-ms-input-placeholder{color:gray!important}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .clear-items{width:.5em;height:.5em;position:absolute;right:1.5em;top:.4em}:host::ng-deep .input-container .arrow-down{background-color:#333437;width:.8em;height:.8em;padding:0 .3em;transition:.2s ease-in-out}:host::ng-deep .input-container .arrow-down:hover{background-color:#2c2c2f;transition:.2s ease-in-out}:host::ng-deep .input-container .arrow-down.light{background-color:rgba(0,0,0,.1);transition:.2s ease-in-out}:host::ng-deep .input-container .arrow-down.light::-moz-placeholder{color:rgba(255,255,255,.2)!important}:host::ng-deep .input-container .arrow-down.light:-ms-input-placeholder{color:rgba(255,255,255,.2)!important}:host::ng-deep .input-container .arrow-down.light::-ms-input-placeholder{color:rgba(255,255,255,.2)!important}:host::ng-deep .input-container .arrow-down.light::placeholder{color:rgba(255,255,255,.2)!important}:host::ng-deep .input-container .arrow-down.light:hover{background-color:rgba(0,0,0,.2);transition:.2s ease-in-out}:host::ng-deep .input-container .arrow-down.dark{background-color:#161617;transition:.2s ease-in-out}:host::ng-deep .input-container .arrow-down.dark:hover{background-color:#1a1b1d;transition:.2s ease-in-out}:host::ng-deep .input-container .arrow-down.read-only{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}:host::ng-deep .input-container.no-data .arrow-down,:host::ng-deep .input-container.read-only .arrow-down{display:none}::ng-deep .mat-autocomplete-panel{background-color:#38393c;border-radius:0;box-shadow:none!important;transition:.2s ease-in-out}::ng-deep .mat-autocomplete-panel mat-option{font-size:1em;border-radius:0;transition:.2s ease-in-out;line-height:4em;height:4em;padding:0 1.5em}::ng-deep .mat-autocomplete-panel mat-option:nth-child(2n+1){background-color:#333437;transition:.2s ease-in-out}::ng-deep .mat-autocomplete-panel mat-option.mat-active,::ng-deep .mat-autocomplete-panel mat-option.mat-selected{background-color:#d24077;transition:.2s ease-in-out}::ng-deep .mat-autocomplete-panel mat-option:hover{background-color:#b01e45!important;transition:.2s ease-in-out}::ng-deep .light .mat-autocomplete-panel{background-color:transparent;transition:.2s ease-in-out}::ng-deep .light .mat-autocomplete-panel mat-option:nth-child(2n+1){background-color:rgba(0,0,0,.6);transition:.2s ease-in-out}::ng-deep .light .mat-autocomplete-panel mat-option:nth-child(2n+2){background-color:rgba(0,0,0,.7);transition:.2s ease-in-out}::ng-deep .light .mat-autocomplete-panel mat-option.mat-active{background-color:#d24077;transition:.2s ease-in-out}::ng-deep .light .mat-autocomplete-panel mat-option:hover{background-color:#b01e45!important;transition:.2s ease-in-out}::ng-deep .dark .mat-autocomplete-panel{background-color:transparent;transition:.2s ease-in-out}::ng-deep .dark .mat-autocomplete-panel mat-option:nth-child(2n+1){background-color:#2c2c2f;transition:.2s ease-in-out}::ng-deep .dark .mat-autocomplete-panel mat-option:nth-child(2n+2){background-color:#333437;transition:.2s ease-in-out}::ng-deep .dark .mat-autocomplete-panel mat-option.mat-active{background-color:#d24077;transition:.2s ease-in-out}::ng-deep .dark .mat-autocomplete-panel mat-option:hover{background-color:#b01e45!important;transition:.2s ease-in-out}@media screen and (min-device-width:320px) and (max-device-width:1024px){::ng-deep .mat-autocomplete-panel{font-size:2.8vw!important}}@media screen and (min-device-width:1024px){::ng-deep .mat-autocomplete-panel{font-size:.6vw!important}}"]
            }]
    }], function () { return [{ type: GlSharedComponentInputAutocompleteSimpleService }, { type: ɵngcc1.Overlay }]; }, { currentValue: [{
            type: Output
        }], listItems: [{
            type: Input
        }], class: [{
            type: Input
        }], maxLength: [{
            type: Input
        }], value: [{
            type: Input
        }], input: [{
            type: ViewChild,
            args: ['input']
        }], disabled: [{
            type: Input
        }], listName: [{
            type: Input
        }], id: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], itemContentAlignment: [{
            type: Input
        }], custom: [{
            type: Input
        }], baseUrl: [{
            type: Input
        }], valueField: [{
            type: Input
        }], textField: [{
            type: Input
        }], labelValue: [{
            type: Input
        }], labelAlignment: [{
            type: Input
        }], required: [{
            type: Input
        }], requiredField: [{
            type: Input
        }] }); })();
export { GlSharedComponentInputAutocompleteSimpleComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1hdXRvY29tcGxldGUtc2ltcGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsibmc6L2dsLW5nLWZyb250ZW5kL2xpYi9zaGFyZWQvY29tcG9uZW50L2lucHV0L2F1dG9jb21wbGV0ZS9zaW1wbGUvZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1hdXRvY29tcGxldGUtc2ltcGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBZ0MsTUFBTSxFQUFpQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUMsbEZBQTNJLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBZ0MsTUFBTSxFQUFpQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0ksT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDLDdDQUE3QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQyxoREFBaEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVoRCxPQUFPLEVBQUUsK0NBQStDLEVBQUUsTUFBTSx5REFBeUQsQ0FBQywxSEFBMUgsT0FBTyxFQUFFLCtDQUErQyxFQUFFLE1BQU0seURBQXlELENBQUM7QUFRMUgsSUFBYTtZQUFpRCxHQUE5RCxNQUFhO3NCQUFpRCxPQWdDNUQsWUFBb0IsUUFBeUQsRUFBUztFQUFnQixZQUFsRixhQUFRLEdBQVIsUUFBUSxDQUFpRCxTQUFTO1NBQU8sR0FBUCxPQUFPLENBQVMsU0E3QjVGO0lBQVksR0FBRyxJQUFJLFlBQVksRUFBaUIsQ0FBQyxTQUNsRCxj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LElBQXJCLEtBQUssRUFBRTtBQUFDLG1GQUFrQjtBQUNsQjtBQUFhLElBQXJCLEtBQUssRUFBRTtBQUFDLG1GQUFpQjtBQUNqQjtBQUNWLElBREUsS0FBSyxFQUFFO0FBQUMsNkVBQVc7QUFDWDtBQUFhLElBQXJCLEtBQUssRUFBRTtBQUFDLHNGQUFvQjtBQUNwQjtBQUFhLElBQXJCLEtBQUssRUFBRTtBQUFDLCtGQUF1RDtBQUN2RDtBQUFhLElBQXJCLEtBQUssRUFBRTtBQUFDLGdGQUFtQjtBQUNuQjtBQUFhLElBQXJCLEtBQUssRUFBRTtBQUFDLGdGQUFjO0FBQ2Q7QUFBYSxJQUFyQixLQUFLLEVBQUU7QUFBQyxvRkFBMEI7QUFFMUI7QUFBYSxJQUFyQixLQUFLLEVBQUU7QUFBQyxpRkFBZ0I7QUFDaEI7QUFBYSxJQUFyQixLQUFLLEVBQUU7QUFBQyxrRkFBZ0I7QUFFaEI7QUFBYSxJQUFyQixLQUFLLEVBQUU7QUFBQyxxRkFBbUI7QUFDbkI7QUFBYSxJQUFyQixLQUFLLEVBQUU7QUFBQyxvRkFBa0I7QUFFbEI7QUFBYSxJQUFyQixLQUFLLEVBQUU7QUFBQyxxRkFBbUI7QUFDbkI7QUFBYSxJQUFyQixLQUFLLEVBQUU7QUFBQyx5RkFBNEM7QUFDNUM7QUFBYSxJQUFyQixLQUFLLEVBQUU7QUFBQyxtRkFBa0I7QUFDbEI7QUFBYSxJQUFyQixLQUFLLEVBQUU7QUFBQyx3RkFBc0I7QUF4QnBCLGlEQUFpRCxvQkFMN0QsU0FBUyxDQUFDLFVBQ1QsUUFBUSxFQUFFOzthQUErQztNQUN6RDtzN0RBQTZFOzg1UkFFOUUsQ0FBQyxJQUNXLGlEQUFpRCxDQW1KN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUNEOztBQWxLQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3ZlcmxheSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzdGFydFdpdGggfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBNYXRBdXRvY29tcGxldGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9hdXRvY29tcGxldGUnO1xuaW1wb3J0IHsgR2xTaGFyZWRDb21wb25lbnRJbnB1dEF1dG9jb21wbGV0ZVNpbXBsZVNlcnZpY2UgfSBmcm9tICcuL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtYXV0b2NvbXBsZXRlLXNpbXBsZS5zZXJ2aWNlJztcbmltcG9ydCB7IElDb21ib0JveERhdGEgfSBmcm9tIFwiZ2wtdy1mcm9udGVuZFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LWF1dG9jb21wbGV0ZS1zaW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1hdXRvY29tcGxldGUtc2ltcGxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1hdXRvY29tcGxldGUtc2ltcGxlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRJbnB1dEF1dG9jb21wbGV0ZVNpbXBsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICBAVmlld0NoaWxkKCdpbnB1dCcpIGlucHV0OiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xuXG4gIEBPdXRwdXQoKSBjdXJyZW50VmFsdWUgPSBuZXcgRXZlbnRFbWl0dGVyPElDb21ib0JveERhdGE+KCk7XG4gIEBJbnB1dCgpIGxpc3RJdGVtczogSUNvbWJvQm94RGF0YVtdID0gW107XG5cbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGxpc3ROYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGl0ZW1Db250ZW50QWxpZ25tZW50OiAnbGVmdCcgfCAnY2VudGVyJyB8ICdyaWdodCcgfCAnJztcbiAgQElucHV0KCkgY2xhc3M6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nO1xuICBASW5wdXQoKSBtYXhMZW5ndGg6IHN0cmluZyA9ICcyNTUnO1xuXG4gIEBJbnB1dCgpIGN1c3RvbTogYm9vbGVhbjtcbiAgQElucHV0KCkgYmFzZVVybDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIHZhbHVlRmllbGQ6IHN0cmluZztcbiAgQElucHV0KCkgdGV4dEZpZWxkOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgbGFiZWxWYWx1ZTogc3RyaW5nO1xuICBASW5wdXQoKSBsYWJlbEFsaWdubWVudDogJ2xlZnQnIHwgJ2NlbnRlcicgfCAncmlnaHQnO1xuICBASW5wdXQoKSByZXF1aXJlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgcmVxdWlyZWRGaWVsZDogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2xvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICByZWFkb25seSBpbWFnZVNvdXJjZSA9ICcuLi9hc3NldHMvaW1nL2ljb24vZHJvcC1kb3duL2Fycm93LWRvd24uc3ZnJ1xuICByZWFkb25seSBjbGVhclNvdXJjZSA9ICcuLi9hc3NldHMvaW1nL2ljb24vZHJvcC1kb3duL2NsZWFyLnN2ZydcbiAgYXV0b2NvbXBsZXRlSW5wdXQgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgZmlsdGVyZWRPcHRpb25zOiBPYnNlcnZhYmxlPElDb21ib0JveERhdGFbXT47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2VydmljZTogR2xTaGFyZWRDb21wb25lbnRJbnB1dEF1dG9jb21wbGV0ZVNpbXBsZVNlcnZpY2UsIHB1YmxpYyBvdmVybGF5OiBPdmVybGF5KSB7XG4gICAgX3NlcnZpY2UuYXV0b2NvbXBsZXRlTGlzdCQuc3Vic2NyaWJlKHVwZGF0ZSA9PiB7XG4gICAgICBpZiAodGhpcy5saXN0TmFtZSA9PT0gdXBkYXRlLmxpc3ROYW1lKSB7XG4gICAgICAgIHRoaXMubGlzdEl0ZW1zID0gdXBkYXRlLm9wdGlvbnM7XG4gICAgICAgIHRoaXMuc2V0dXAoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBfc2VydmljZS5hdXRvY29tcGxldGVSZXNldCQuc3Vic2NyaWJlKHVwZGF0ZSA9PiB7XG4gICAgICBpZiAodGhpcy5pZCA9PT0gdXBkYXRlLmNvbWJvYm94SWQpIHtcbiAgICAgICAgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XG4gICAgICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIF9zZXJ2aWNlLmF1dG9jb21wbGV0ZUxvYWRlZCQuc3Vic2NyaWJlKGxvYWRlZCA9PiB7XG4gICAgICB0aGlzLl9sb2FkZWQgPSBsb2FkZWQ7XG4gICAgICBfc2VydmljZS5hdXRvY29tcGxldGVMb2FkZWQkLm9ic2VydmVycy5tYXAoeCA9PiB4LmNvbXBsZXRlKCkpO1xuICAgIH0pO1xuICAgIF9zZXJ2aWNlLmF1dG9jb21wbGV0ZVVwZGF0ZVZhbHVlJC5zdWJzY3JpYmUodXBkYXRlID0+IHtcbiAgICAgIGlmICh0aGlzLmlkID09PSB1cGRhdGUuY29tYm9ib3hJZCkge1xuICAgICAgICB0aGlzLmxpc3RJdGVtcyA9IHVwZGF0ZS5vcHRpb25zO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHVwZGF0ZS5vcHRpb25zLmZpbHRlcih4ID0+IHgudmFsdWUgPT09IHVwZGF0ZS52YWx1ZSk7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50O1xuXG4gICAgICAgIGlmICh2YWx1ZSAhPSBudWxsICYmIHZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpbnB1dC52YWx1ZSA9IHZhbHVlWzBdLnRleHQ7XG4gICAgICAgICAgdGhpcy5hdXRvY29tcGxldGVJbnB1dC5zZXRWYWx1ZSh2YWx1ZVswXS50ZXh0KTtcbiAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWVbMF0udmFsdWU7XG4gICAgICAgICAgdGhpcy5zZXR1cCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgdGhpcy5hdXRvY29tcGxldGVJbnB1dC5zZXRWYWx1ZSgnJyk7XG4gICAgICAgICAgdGhpcy52YWx1ZSA9ICcnO1xuICAgICAgICAgIHRoaXMuc2V0dXAoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZXR1cCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXR1cCgpIHtcbiAgICB0aGlzLmZpbHRlcmVkT3B0aW9ucyA9IHRoaXMuYXV0b2NvbXBsZXRlSW5wdXQudmFsdWVDaGFuZ2VzLnBpcGUoXG4gICAgICBzdGFydFdpdGgoJycpLFxuICAgICAgLy8gc3RhcnRXaXRoKHRoaXMudmFsdWUpLFxuICAgICAgbWFwKHZhbHVlID0+IHRoaXMuZmlsdGVyKHZhbHVlKSlcbiAgICApO1xuXG4gICAgLy8gaWYgKCF0aGlzLl9sb2FkZWQpIHsgdGhpcy5hdXRvY29tcGxldGVJbnB1dC5zZXRWYWx1ZSh0aGlzLnZhbHVlKTsgfVxuICAgIC8vIHRoaXMuYXV0b2NvbXBsZXRlSW5wdXQuc2V0VmFsdWUodGhpcy52YWx1ZSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMudmFsaWRhdGUoKTsgfSk7XG4gIH1cbiAgcHJpdmF0ZSBmaWx0ZXIodmFsdWU6IHN0cmluZyk6IElDb21ib0JveERhdGFbXSB7XG4gICAgaWYgKHZhbHVlID09IG51bGwpIHsgdmFsdWUgPSAnJzsgfVxuXG4gICAgY29uc3QgZmlsdGVyVmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgIHJldHVybiB0aGlzLmxpc3RJdGVtcy5maWx0ZXIob3B0aW9uID0+IG9wdGlvbi50ZXh0Py50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGZpbHRlclZhbHVlKSk7XG4gIH1cblxuICB2YWxpZGF0ZSgpIHtcbiAgICBjb25zdCBpbnB1dDogSFRNTElucHV0RWxlbWVudCA9IHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCB2YWx1ZTogc3RyaW5nID0gaW5wdXQudmFsdWVcbiAgICBjb25zdCBmaWx0ZXJlZERhdGEgPSB0aGlzLmZpbHRlcih2YWx1ZSk7XG5cbiAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiB2YWx1ZS50cmltKCkubGVuZ3RoID4gMCAmJiBmaWx0ZXJlZERhdGEubGVuZ3RoID4gMCkge1xuICAgICAgaW5wdXQudmFsdWUgPSBmaWx0ZXJlZERhdGFbMF0udGV4dDtcbiAgICAgIHRoaXMuYXV0b2NvbXBsZXRlSW5wdXQuc2V0VmFsdWUoZmlsdGVyZWREYXRhWzBdLnRleHQpO1xuICAgICAgdGhpcy5jdXJyZW50VmFsdWUuZW1pdCh7IHRleHQ6IGZpbHRlcmVkRGF0YVswXS50ZXh0LCB2YWx1ZTogZmlsdGVyZWREYXRhWzBdLnZhbHVlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgdGhpcy5hdXRvY29tcGxldGVJbnB1dC5zZXRWYWx1ZSgnJyk7XG4gICAgICB0aGlzLmN1cnJlbnRWYWx1ZS5lbWl0KHsgdGV4dDogbnVsbCwgdmFsdWU6IG51bGwgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVzZXQoYXV0bzogTWF0QXV0b2NvbXBsZXRlLCBldmVudDogRXZlbnQpIHtcbiAgICBpZiAoYXV0by5vcHRpb25zICE9IG51bGwpIHsgYXV0by5vcHRpb25zLm1hcChvcHRpb24gPT4gb3B0aW9uLmRlc2VsZWN0KCkpOyB9XG4gICAgKDxIVE1MSW5wdXRFbGVtZW50PmV2ZW50LmN1cnJlbnRUYXJnZXQpLnNlbGVjdCgpO1xuICB9XG5cbiAgY2xlYXJJdGVtcyhpbnB1dDogSFRNTElucHV0RWxlbWVudCkge1xuICAgIGlucHV0LnZhbHVlID0gbnVsbDtcbiAgICB0aGlzLmF1dG9jb21wbGV0ZUlucHV0LnNldFZhbHVlKG51bGwpO1xuICAgIHRoaXMuY3VycmVudFZhbHVlLmVtaXQoeyB0ZXh0OiBudWxsLCB2YWx1ZTogbnVsbCB9KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlucHV0LmNsaWNrKCk7XG4gICAgfSwgMTAwKTtcbiAgfVxuXG4gIGFycm93Q2xpY2soKSB7XG4gICAgdGhpcy5hdXRvY29tcGxldGVJbnB1dC5yZXNldCgpO1xuICAgIHRoaXMuYXV0b2NvbXBsZXRlSW5wdXQuc2V0VmFsdWUoJycpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fc2VydmljZS5hdXRvY29tcGxldGVMaXN0JC5vYnNlcnZlcnMubWFwKHggPT4geC5jb21wbGV0ZSgpKTtcbiAgICB0aGlzLl9zZXJ2aWNlLmF1dG9jb21wbGV0ZVJlc2V0JC5vYnNlcnZlcnMubWFwKHggPT4geC5jb21wbGV0ZSgpKTtcbiAgICB0aGlzLl9zZXJ2aWNlLmF1dG9jb21wbGV0ZUxvYWRlZCQub2JzZXJ2ZXJzLm1hcCh4ID0+IHguY29tcGxldGUoKSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgcHJldkxpc3QgPSBjaGFuZ2VzLmxpc3RJdGVtcz8ucHJldmlvdXNWYWx1ZTtcbiAgICBjb25zdCBjdXJyTGlzdCA9IGNoYW5nZXMubGlzdEl0ZW1zPy5jdXJyZW50VmFsdWU7XG5cbiAgICBjb25zdCBwcmV2VmFsdWUgPSBjaGFuZ2VzLnZhbHVlPy5wcmV2aW91c1ZhbHVlO1xuICAgIGNvbnN0IGN1cnJWYWx1ZSA9IGNoYW5nZXMudmFsdWU/LmN1cnJlbnRWYWx1ZTtcblxuICAgIGlmIChwcmV2TGlzdCAhPSBjdXJyTGlzdCkgeyB0aGlzLnNldHVwKCk7IH1cbiAgICBpZiAocHJldlZhbHVlICE9IGN1cnJWYWx1ZSkgeyB0aGlzLnNldHVwKCk7IH1cblxuICAgIHRoaXMub3ZlcmxheS5wb3NpdGlvbigpLmdsb2JhbCgpLmRpc3Bvc2UoKVxuXG4gICAgLy8gaWYgKHByZXZMaXN0ICE9IGN1cnJMaXN0IHx8IHByZXZWYWx1ZSAhPSBjdXJyVmFsdWUpIHsgdGhpcy5zZXR1cCgpOyB9XG4gIH1cbn1cbiJdfQ==