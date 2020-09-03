import { __awaiter, __decorate, __generator } from "tslib";
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

var _c0 = ["input"];
function GlSharedComponentInputAutocompleteSimpleComponent_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-option", 8);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var option_r4 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("value", option_r4.text);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", option_r4.text, " ");
} }
var _c1 = ["*"];
var GlSharedComponentInputAutocompleteSimpleComponent = /** @class */ (function () {
    function GlSharedComponentInputAutocompleteSimpleComponent(_service, overlay) {
        var _this = this;
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
        _service.autocompleteList$.subscribe(function (update) {
            if (_this.listName === update.listName) {
                _this.listItems = update.options;
                _this.setup();
            }
        });
        _service.autocompleteReset$.subscribe(function (update) {
            if (_this.id === update.comboboxId) {
                _this.input.nativeElement.value = '';
                _this.validate();
            }
        });
        _service.autocompleteLoaded$.subscribe(function (loaded) {
            _this._loaded = loaded;
            _service.autocompleteLoaded$.observers.map(function (x) { return x.complete(); });
        });
        _service.autocompleteUpdateValue$.subscribe(function (update) {
            if (_this.id === update.comboboxId) {
                _this.listItems = update.options;
                var value = update.options.filter(function (x) { return x.value === update.value; });
                var input = _this.input.nativeElement;
                if (value != null && value.length > 0) {
                    input.value = value[0].text;
                    _this.autocompleteInput.setValue(value[0].text);
                    _this.value = value[0].value;
                    _this.setup();
                }
                else {
                    input.value = '';
                    _this.autocompleteInput.setValue('');
                    _this.value = '';
                    _this.setup();
                }
            }
        });
    }
    GlSharedComponentInputAutocompleteSimpleComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.setup();
                return [2 /*return*/];
            });
        });
    };
    GlSharedComponentInputAutocompleteSimpleComponent.prototype.setup = function () {
        var _this = this;
        this.filteredOptions = this.autocompleteInput.valueChanges.pipe(startWith(''), 
        // startWith(this.value),
        map(function (value) { return _this.filter(value); }));
        // if (!this._loaded) { this.autocompleteInput.setValue(this.value); }
        // this.autocompleteInput.setValue(this.value);
        setTimeout(function () { _this.validate(); });
    };
    GlSharedComponentInputAutocompleteSimpleComponent.prototype.filter = function (value) {
        if (value == null) {
            value = '';
        }
        var filterValue = value.toLowerCase();
        return this.listItems.filter(function (option) { var _a; return (_a = option.text) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(filterValue); });
    };
    GlSharedComponentInputAutocompleteSimpleComponent.prototype.validate = function () {
        var input = this.input.nativeElement;
        var value = input.value;
        var filteredData = this.filter(value);
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
    };
    GlSharedComponentInputAutocompleteSimpleComponent.prototype.reset = function (auto, event) {
        if (auto.options != null) {
            auto.options.map(function (option) { return option.deselect(); });
        }
        event.currentTarget.select();
    };
    GlSharedComponentInputAutocompleteSimpleComponent.prototype.clearItems = function (input) {
        input.value = null;
        this.autocompleteInput.setValue(null);
        this.currentValue.emit({ text: null, value: null });
        setTimeout(function () {
            input.click();
        }, 100);
    };
    GlSharedComponentInputAutocompleteSimpleComponent.prototype.arrowClick = function () {
        this.autocompleteInput.reset();
        this.autocompleteInput.setValue('');
    };
    GlSharedComponentInputAutocompleteSimpleComponent.prototype.ngOnDestroy = function () {
        this._service.autocompleteList$.observers.map(function (x) { return x.complete(); });
        this._service.autocompleteReset$.observers.map(function (x) { return x.complete(); });
        this._service.autocompleteLoaded$.observers.map(function (x) { return x.complete(); });
    };
    GlSharedComponentInputAutocompleteSimpleComponent.prototype.ngOnChanges = function (changes) {
        var _a, _b, _c, _d;
        var prevList = (_a = changes.listItems) === null || _a === void 0 ? void 0 : _a.previousValue;
        var currList = (_b = changes.listItems) === null || _b === void 0 ? void 0 : _b.currentValue;
        var prevValue = (_c = changes.value) === null || _c === void 0 ? void 0 : _c.previousValue;
        var currValue = (_d = changes.value) === null || _d === void 0 ? void 0 : _d.currentValue;
        if (prevList != currList) {
            this.setup();
        }
        if (prevValue != currValue) {
            this.setup();
        }
        this.overlay.position().global().dispose();
        // if (prevList != currList || prevValue != currValue) { this.setup(); }
    };
    GlSharedComponentInputAutocompleteSimpleComponent.ctorParameters = function () { return [
        { type: GlSharedComponentInputAutocompleteSimpleService },
        { type: Overlay }
    ]; };
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
GlSharedComponentInputAutocompleteSimpleComponent.ɵfac = function GlSharedComponentInputAutocompleteSimpleComponent_Factory(t) { return new (t || GlSharedComponentInputAutocompleteSimpleComponent)(ɵngcc0.ɵɵdirectiveInject(GlSharedComponentInputAutocompleteSimpleService), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Overlay)); };
GlSharedComponentInputAutocompleteSimpleComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentInputAutocompleteSimpleComponent, selectors: [["gl-shared-component-input-autocomplete-simple"]], viewQuery: function GlSharedComponentInputAutocompleteSimpleComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.input = _t.first);
    } }, inputs: { listItems: "listItems", class: "class", maxLength: "maxLength", disabled: "disabled", listName: "listName", id: "id", placeholder: "placeholder", itemContentAlignment: "itemContentAlignment", value: "value", custom: "custom", baseUrl: "baseUrl", valueField: "valueField", textField: "textField", labelValue: "labelValue", labelAlignment: "labelAlignment", required: "required", requiredField: "requiredField" }, outputs: { currentValue: "currentValue" }, features: [ɵngcc0.ɵɵNgOnChangesFeature], ngContentSelectors: _c1, decls: 12, vars: 30, consts: [["floatLabel", "never", "appearance", "none", 3, "focusout"], ["type", "text", "aria-label", "Number", "matInput", "", 3, "readonly", "id", "placeholder", "formControl", "maxLength", "matAutocomplete", "focusin", "focusout"], ["input", ""], ["autoActiveFirstOption", "true", 3, "mat-dialog-close", "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["alt", "Show items", 3, "src", "click"], ["arrowDown", ""], [3, "value"]], template: function GlSharedComponentInputAutocompleteSimpleComponent_Template(rf, ctx) { if (rf & 1) {
        var _r5 = ɵngcc0.ɵɵgetCurrentView();
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
        ɵngcc0.ɵɵelementStart(1, "div");
        ɵngcc0.ɵɵelementStart(2, "mat-form-field", 0);
        ɵngcc0.ɵɵlistener("focusout", function GlSharedComponentInputAutocompleteSimpleComponent_Template_mat_form_field_focusout_2_listener() { return ctx.overlay.position().global().dispose(); });
        ɵngcc0.ɵɵelementStart(3, "div");
        ɵngcc0.ɵɵelementStart(4, "input", 1, 2);
        ɵngcc0.ɵɵlistener("focusin", function GlSharedComponentInputAutocompleteSimpleComponent_Template_input_focusin_4_listener($event) { ɵngcc0.ɵɵrestoreView(_r5); var _r1 = ɵngcc0.ɵɵreference(7); return ctx.reset(_r1, $event); })("focusout", function GlSharedComponentInputAutocompleteSimpleComponent_Template_input_focusout_4_listener() { return ctx.validate(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(6, "mat-autocomplete", 3, 4);
        ɵngcc0.ɵɵlistener("optionSelected", function GlSharedComponentInputAutocompleteSimpleComponent_Template_mat_autocomplete_optionSelected_6_listener() { ɵngcc0.ɵɵrestoreView(_r5); var _r0 = ɵngcc0.ɵɵreference(5); return _r0.blur(); });
        ɵngcc0.ɵɵtemplate(8, GlSharedComponentInputAutocompleteSimpleComponent_mat_option_8_Template, 2, 2, "mat-option", 5);
        ɵngcc0.ɵɵpipe(9, "async");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(10, "img", 6, 7);
        ɵngcc0.ɵɵlistener("click", function GlSharedComponentInputAutocompleteSimpleComponent_Template_img_click_10_listener() { ɵngcc0.ɵɵrestoreView(_r5); var _r0 = ɵngcc0.ɵɵreference(5); return ctx.clearItems(_r0); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        var _r1 = ɵngcc0.ɵɵreference(7);
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
        }], value: [{
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
    return GlSharedComponentInputAutocompleteSimpleComponent;
}());
export { GlSharedComponentInputAutocompleteSimpleComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1hdXRvY29tcGxldGUtc2ltcGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsibmc6L2dsLW5nLWZyb250ZW5kL2xpYi9zaGFyZWQvY29tcG9uZW50L2lucHV0L2F1dG9jb21wbGV0ZS9zaW1wbGUvZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1hdXRvY29tcGxldGUtc2ltcGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBZ0MsTUFBTSxFQUFpQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUMsbEZBQTNJLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBZ0MsTUFBTSxFQUFpQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0ksT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDLDdDQUE3QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQyxoREFBaEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVoRCxPQUFPLEVBQUUsK0NBQStDLEVBQUUsTUFBTSx5REFBeUQsQ0FBQywxSEFBMUgsT0FBTyxFQUFFLCtDQUErQyxFQUFFLE1BQU0seURBQXlELENBQUM7QUFRMUg7O0FBZ0NFO0dBQW9CLFFBQXlELEVBQVMsT0FBZ0IsWUFBdEcsaUJBb0NDO09BcENtQixhQUFRLEdBQVIsUUFBUSxDQUFpRCxTQUFTO1dBQU8sR0FBUCxPQUFPLENBQVMsU0E3QjVGLGlCQUFZLEdBQUcsSUFBSTtTQUFZLEVBQWlCLENBQUMsU0FDbEQsY0FBUyxHQUFvQixFQUFF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LENBbUo3RCxNQUFELHdEQUFDLEdBQUEsQUFuSkQsSUFtSkMsVUFuSlksaURBQWlELDNMQUQ3RCxDQUFDLFFBQ1csaURBQWlELENBbUo3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQ0Q7QUFBQyxJQURELHdEQUFDO0FBQ0EsQ0FEQSxBQW5KRCxJQW1KQzs7QUFqS0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE92ZXJsYXkgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcywgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc3RhcnRXaXRoIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTWF0QXV0b2NvbXBsZXRlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlJztcbmltcG9ydCB7IEdsU2hhcmVkQ29tcG9uZW50SW5wdXRBdXRvY29tcGxldGVTaW1wbGVTZXJ2aWNlIH0gZnJvbSAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LWF1dG9jb21wbGV0ZS1zaW1wbGUuc2VydmljZSc7XG5pbXBvcnQgeyBJQ29tYm9Cb3hEYXRhIH0gZnJvbSBcImdsLXctZnJvbnRlbmRcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1hdXRvY29tcGxldGUtc2ltcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtYXV0b2NvbXBsZXRlLXNpbXBsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtYXV0b2NvbXBsZXRlLXNpbXBsZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50SW5wdXRBdXRvY29tcGxldGVTaW1wbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgQFZpZXdDaGlsZCgnaW5wdXQnKSBpbnB1dDogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PjtcblxuICBAT3V0cHV0KCkgY3VycmVudFZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcjxJQ29tYm9Cb3hEYXRhPigpO1xuICBASW5wdXQoKSBsaXN0SXRlbXM6IElDb21ib0JveERhdGFbXSA9IFtdO1xuXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBsaXN0TmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBpZDogc3RyaW5nO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBpdGVtQ29udGVudEFsaWdubWVudDogJ2xlZnQnIHwgJ2NlbnRlcicgfCAncmlnaHQnIHwgJyc7XG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgdmFsdWU6IHN0cmluZztcbiAgQElucHV0KCkgbWF4TGVuZ3RoOiBzdHJpbmcgPSAnMjU1JztcblxuICBASW5wdXQoKSBjdXN0b206IGJvb2xlYW47XG4gIEBJbnB1dCgpIGJhc2VVcmw6IHN0cmluZztcblxuICBASW5wdXQoKSB2YWx1ZUZpZWxkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRleHRGaWVsZDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIGxhYmVsVmFsdWU6IHN0cmluZztcbiAgQElucHV0KCkgbGFiZWxBbGlnbm1lbnQ6ICdsZWZ0JyB8ICdjZW50ZXInIHwgJ3JpZ2h0JztcbiAgQElucHV0KCkgcmVxdWlyZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHJlcXVpcmVkRmllbGQ6IHN0cmluZztcblxuICBwcml2YXRlIF9sb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcmVhZG9ubHkgaW1hZ2VTb3VyY2UgPSAnLi4vYXNzZXRzL2ltZy9pY29uL2Ryb3AtZG93bi9hcnJvdy1kb3duLnN2ZydcbiAgcmVhZG9ubHkgY2xlYXJTb3VyY2UgPSAnLi4vYXNzZXRzL2ltZy9pY29uL2Ryb3AtZG93bi9jbGVhci5zdmcnXG4gIGF1dG9jb21wbGV0ZUlucHV0ID0gbmV3IEZvcm1Db250cm9sKCk7XG4gIGZpbHRlcmVkT3B0aW9uczogT2JzZXJ2YWJsZTxJQ29tYm9Cb3hEYXRhW10+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NlcnZpY2U6IEdsU2hhcmVkQ29tcG9uZW50SW5wdXRBdXRvY29tcGxldGVTaW1wbGVTZXJ2aWNlLCBwdWJsaWMgb3ZlcmxheTogT3ZlcmxheSkge1xuICAgIF9zZXJ2aWNlLmF1dG9jb21wbGV0ZUxpc3QkLnN1YnNjcmliZSh1cGRhdGUgPT4ge1xuICAgICAgaWYgKHRoaXMubGlzdE5hbWUgPT09IHVwZGF0ZS5saXN0TmFtZSkge1xuICAgICAgICB0aGlzLmxpc3RJdGVtcyA9IHVwZGF0ZS5vcHRpb25zO1xuICAgICAgICB0aGlzLnNldHVwKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgX3NlcnZpY2UuYXV0b2NvbXBsZXRlUmVzZXQkLnN1YnNjcmliZSh1cGRhdGUgPT4ge1xuICAgICAgaWYgKHRoaXMuaWQgPT09IHVwZGF0ZS5jb21ib2JveElkKSB7XG4gICAgICAgIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuICAgICAgICB0aGlzLnZhbGlkYXRlKCk7XG4gICAgICB9XG4gICAgfSlcbiAgICBfc2VydmljZS5hdXRvY29tcGxldGVMb2FkZWQkLnN1YnNjcmliZShsb2FkZWQgPT4ge1xuICAgICAgdGhpcy5fbG9hZGVkID0gbG9hZGVkO1xuICAgICAgX3NlcnZpY2UuYXV0b2NvbXBsZXRlTG9hZGVkJC5vYnNlcnZlcnMubWFwKHggPT4geC5jb21wbGV0ZSgpKTtcbiAgICB9KTtcbiAgICBfc2VydmljZS5hdXRvY29tcGxldGVVcGRhdGVWYWx1ZSQuc3Vic2NyaWJlKHVwZGF0ZSA9PiB7XG4gICAgICBpZiAodGhpcy5pZCA9PT0gdXBkYXRlLmNvbWJvYm94SWQpIHtcbiAgICAgICAgdGhpcy5saXN0SXRlbXMgPSB1cGRhdGUub3B0aW9ucztcbiAgICAgICAgY29uc3QgdmFsdWUgPSB1cGRhdGUub3B0aW9ucy5maWx0ZXIoeCA9PiB4LnZhbHVlID09PSB1cGRhdGUudmFsdWUpO1xuICAgICAgICBjb25zdCBpbnB1dCA9IHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudDtcblxuICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiB2YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaW5wdXQudmFsdWUgPSB2YWx1ZVswXS50ZXh0O1xuICAgICAgICAgIHRoaXMuYXV0b2NvbXBsZXRlSW5wdXQuc2V0VmFsdWUodmFsdWVbMF0udGV4dCk7XG4gICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlWzBdLnZhbHVlO1xuICAgICAgICAgIHRoaXMuc2V0dXAoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgIHRoaXMuYXV0b2NvbXBsZXRlSW5wdXQuc2V0VmFsdWUoJycpO1xuICAgICAgICAgIHRoaXMudmFsdWUgPSAnJztcbiAgICAgICAgICB0aGlzLnNldHVwKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2V0dXAoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0dXAoKSB7XG4gICAgdGhpcy5maWx0ZXJlZE9wdGlvbnMgPSB0aGlzLmF1dG9jb21wbGV0ZUlucHV0LnZhbHVlQ2hhbmdlcy5waXBlKFxuICAgICAgc3RhcnRXaXRoKCcnKSxcbiAgICAgIC8vIHN0YXJ0V2l0aCh0aGlzLnZhbHVlKSxcbiAgICAgIG1hcCh2YWx1ZSA9PiB0aGlzLmZpbHRlcih2YWx1ZSkpXG4gICAgKTtcblxuICAgIC8vIGlmICghdGhpcy5fbG9hZGVkKSB7IHRoaXMuYXV0b2NvbXBsZXRlSW5wdXQuc2V0VmFsdWUodGhpcy52YWx1ZSk7IH1cbiAgICAvLyB0aGlzLmF1dG9jb21wbGV0ZUlucHV0LnNldFZhbHVlKHRoaXMudmFsdWUpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLnZhbGlkYXRlKCk7IH0pO1xuICB9XG4gIHByaXZhdGUgZmlsdGVyKHZhbHVlOiBzdHJpbmcpOiBJQ29tYm9Cb3hEYXRhW10ge1xuICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7IHZhbHVlID0gJyc7IH1cblxuICAgIGNvbnN0IGZpbHRlclZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gdGhpcy5saXN0SXRlbXMuZmlsdGVyKG9wdGlvbiA9PiBvcHRpb24udGV4dD8udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhmaWx0ZXJWYWx1ZSkpO1xuICB9XG5cbiAgdmFsaWRhdGUoKSB7XG4gICAgY29uc3QgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgdmFsdWU6IHN0cmluZyA9IGlucHV0LnZhbHVlXG4gICAgY29uc3QgZmlsdGVyZWREYXRhID0gdGhpcy5maWx0ZXIodmFsdWUpO1xuXG4gICAgaWYgKHZhbHVlICE9IG51bGwgJiYgdmFsdWUudHJpbSgpLmxlbmd0aCA+IDAgJiYgZmlsdGVyZWREYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgIGlucHV0LnZhbHVlID0gZmlsdGVyZWREYXRhWzBdLnRleHQ7XG4gICAgICB0aGlzLmF1dG9jb21wbGV0ZUlucHV0LnNldFZhbHVlKGZpbHRlcmVkRGF0YVswXS50ZXh0KTtcbiAgICAgIHRoaXMuY3VycmVudFZhbHVlLmVtaXQoeyB0ZXh0OiBmaWx0ZXJlZERhdGFbMF0udGV4dCwgdmFsdWU6IGZpbHRlcmVkRGF0YVswXS52YWx1ZSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgIHRoaXMuYXV0b2NvbXBsZXRlSW5wdXQuc2V0VmFsdWUoJycpO1xuICAgICAgdGhpcy5jdXJyZW50VmFsdWUuZW1pdCh7IHRleHQ6IG51bGwsIHZhbHVlOiBudWxsIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0KGF1dG86IE1hdEF1dG9jb21wbGV0ZSwgZXZlbnQ6IEV2ZW50KSB7XG4gICAgaWYgKGF1dG8ub3B0aW9ucyAhPSBudWxsKSB7IGF1dG8ub3B0aW9ucy5tYXAob3B0aW9uID0+IG9wdGlvbi5kZXNlbGVjdCgpKTsgfVxuICAgICg8SFRNTElucHV0RWxlbWVudD5ldmVudC5jdXJyZW50VGFyZ2V0KS5zZWxlY3QoKTtcbiAgfVxuXG4gIGNsZWFySXRlbXMoaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQpIHtcbiAgICBpbnB1dC52YWx1ZSA9IG51bGw7XG4gICAgdGhpcy5hdXRvY29tcGxldGVJbnB1dC5zZXRWYWx1ZShudWxsKTtcbiAgICB0aGlzLmN1cnJlbnRWYWx1ZS5lbWl0KHsgdGV4dDogbnVsbCwgdmFsdWU6IG51bGwgfSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpbnB1dC5jbGljaygpO1xuICAgIH0sIDEwMCk7XG4gIH1cblxuICBhcnJvd0NsaWNrKCkge1xuICAgIHRoaXMuYXV0b2NvbXBsZXRlSW5wdXQucmVzZXQoKTtcbiAgICB0aGlzLmF1dG9jb21wbGV0ZUlucHV0LnNldFZhbHVlKCcnKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3NlcnZpY2UuYXV0b2NvbXBsZXRlTGlzdCQub2JzZXJ2ZXJzLm1hcCh4ID0+IHguY29tcGxldGUoKSk7XG4gICAgdGhpcy5fc2VydmljZS5hdXRvY29tcGxldGVSZXNldCQub2JzZXJ2ZXJzLm1hcCh4ID0+IHguY29tcGxldGUoKSk7XG4gICAgdGhpcy5fc2VydmljZS5hdXRvY29tcGxldGVMb2FkZWQkLm9ic2VydmVycy5tYXAoeCA9PiB4LmNvbXBsZXRlKCkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHByZXZMaXN0ID0gY2hhbmdlcy5saXN0SXRlbXM/LnByZXZpb3VzVmFsdWU7XG4gICAgY29uc3QgY3Vyckxpc3QgPSBjaGFuZ2VzLmxpc3RJdGVtcz8uY3VycmVudFZhbHVlO1xuXG4gICAgY29uc3QgcHJldlZhbHVlID0gY2hhbmdlcy52YWx1ZT8ucHJldmlvdXNWYWx1ZTtcbiAgICBjb25zdCBjdXJyVmFsdWUgPSBjaGFuZ2VzLnZhbHVlPy5jdXJyZW50VmFsdWU7XG5cbiAgICBpZiAocHJldkxpc3QgIT0gY3Vyckxpc3QpIHsgdGhpcy5zZXR1cCgpOyB9XG4gICAgaWYgKHByZXZWYWx1ZSAhPSBjdXJyVmFsdWUpIHsgdGhpcy5zZXR1cCgpOyB9XG5cbiAgICB0aGlzLm92ZXJsYXkucG9zaXRpb24oKS5nbG9iYWwoKS5kaXNwb3NlKClcblxuICAgIC8vIGlmIChwcmV2TGlzdCAhPSBjdXJyTGlzdCB8fCBwcmV2VmFsdWUgIT0gY3VyclZhbHVlKSB7IHRoaXMuc2V0dXAoKTsgfVxuICB9XG59XG4iXX0=