import { __decorate, __awaiter, __generator } from 'tslib';
import { ElementRef, Directive, NgModule, Input, Component, EventEmitter, Output, ViewChild, ɵɵdefineInjectable, Injectable, ɵɵinject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Router, RouterModule } from '@angular/router';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Overlay, OverlayModule } from '@angular/cdk/overlay';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { DateGet, InputMask, AttachmentParser, AttachmentValidate, StringConverter, AttachmentIcon, AttachmentConvert } from 'gl-w-frontend';
import { Subject } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { startWith, map } from 'rxjs/operators';

var CoreDirectivesAutofocusDirective = /** @class */ (function () {
    function CoreDirectivesAutofocusDirective(elementRef) {
        this.elementRef = elementRef;
    }
    CoreDirectivesAutofocusDirective.prototype.ngOnInit = function () {
        this.elementRef.nativeElement.focus();
    };
    CoreDirectivesAutofocusDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    CoreDirectivesAutofocusDirective = __decorate([
        Directive({
            selector: '[glAutoFocus]'
        })
    ], CoreDirectivesAutofocusDirective);
    return CoreDirectivesAutofocusDirective;
}());

var GlCoreModule = /** @class */ (function () {
    function GlCoreModule() {
    }
    GlCoreModule = __decorate([
        NgModule({
            declarations: [
                CoreDirectivesAutofocusDirective
            ],
            exports: [
                CoreDirectivesAutofocusDirective
            ],
            imports: [
                CommonModule
            ]
        })
    ], GlCoreModule);
    return GlCoreModule;
}());

var GlSharedComponentInputButtonSimpleComponent = /** @class */ (function () {
    function GlSharedComponentInputButtonSimpleComponent() {
    }
    __decorate([
        Input()
    ], GlSharedComponentInputButtonSimpleComponent.prototype, "value", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputButtonSimpleComponent.prototype, "class", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputButtonSimpleComponent.prototype, "innerValue", void 0);
    GlSharedComponentInputButtonSimpleComponent = __decorate([
        Component({
            selector: 'gl-shared-component-input-button-simple',
            template: "<button\n  type=\"button\"\n  class=\"default-button {{ class }}\"\n  [value]=\"value\"\n>{{ innerValue }}</button>\n",
            styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep{display:flex;flex:1 1 0px;height:2em}:host::ng-deep .default-button{font-family:Montserrat,sans-serif;font-weight:700;border:none;font-size:.5em;text-transform:uppercase;flex:1 1 0px;background-color:#d24077;color:#fff}:host::ng-deep .default-button.light-translucid{font-family:Montserrat,sans-serif;font-weight:300;background-color:rgba(255,255,255,.1)}:host::ng-deep .default-button:focus,:host::ng-deep .default-button:hover{opacity:1;transition:.3s ease-in-out}:host::ng-deep .light-translucid.default-button:focus,:host::ng-deep .light-translucid.default-button:hover{font-family:Montserrat,sans-serif;font-weight:300;background-color:rgba(255,255,255,.9);color:#4b4d52}:host::ng-deep .default-button:not(hover){opacity:.7;transition:.3s ease-in-out}"]
        })
    ], GlSharedComponentInputButtonSimpleComponent);
    return GlSharedComponentInputButtonSimpleComponent;
}());

var ɵ0 = MAT_MOMENT_DATE_FORMATS;
var GlSharedComponentInputDatepickerSimpleComponent = /** @class */ (function () {
    function GlSharedComponentInputDatepickerSimpleComponent() {
        this.disabled = false;
        this.itemContentAlignment = 'center';
        this.value = null;
        this.dateFormat = 'DD/MM/YYYY';
        this.maxLength = 255;
        this.currentValue = new EventEmitter();
    }
    GlSharedComponentInputDatepickerSimpleComponent.prototype.clear = function () {
        this.currentValue.emit({
            date: null,
            dateString: null
        });
    };
    GlSharedComponentInputDatepickerSimpleComponent.prototype.changed = function (event) {
        var date = new Date(event.value);
        this.currentValue.emit({
            date: date,
            dateString: DateGet.customDate(date, this.dateFormat)
        });
    };
    __decorate([
        Input()
    ], GlSharedComponentInputDatepickerSimpleComponent.prototype, "disabled", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputDatepickerSimpleComponent.prototype, "id", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputDatepickerSimpleComponent.prototype, "placeholder", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputDatepickerSimpleComponent.prototype, "itemContentAlignment", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputDatepickerSimpleComponent.prototype, "class", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputDatepickerSimpleComponent.prototype, "value", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputDatepickerSimpleComponent.prototype, "dateFormat", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputDatepickerSimpleComponent.prototype, "maxLength", void 0);
    __decorate([
        Output()
    ], GlSharedComponentInputDatepickerSimpleComponent.prototype, "currentValue", void 0);
    GlSharedComponentInputDatepickerSimpleComponent = __decorate([
        Component({
            selector: 'gl-shared-component-input-datepicker-simple',
            template: "<ng-content></ng-content>\n<mat-form-field appearance=\"none\" floatLabel=\"never\">\n<!--  <mat-label>Input disabled</mat-label>-->\n  <input\n    class=\"item-content {{ itemContentAlignment }} {{ class }}\"\n    [id]=\"id\"\n    [placeholder]=\"placeholder\"\n    [value]=\"value\"\n    [matDatepicker]=\"dp3\"\n    [attr.maxlength]=\"maxLength\"\n    (dateChange)=\"changed($event)\"\n    matInput\n    disabled>\n  <mat-datepicker-toggle *ngIf=\"!disabled\" matSuffix (click)=\"clear()\">\n    <img\n      matDatepickerToggleIcon\n      class=\"datepicker-button\"\n      alt=\"Date picker icon\"\n      src=\"assets/img/icon/datepicker/clear.svg\">\n  </mat-datepicker-toggle>\n  <mat-datepicker-toggle *ngIf=\"!disabled\" matSuffix [for]=\"dp3\">\n    <img\n      matDatepickerToggleIcon\n      class=\"datepicker-button\"\n      alt=\"Date picker icon\"\n      src=\"assets/img/icon/datepicker/date.svg\">\n  </mat-datepicker-toggle>\n  <mat-datepicker #dp3 disabled=\"false\"></mat-datepicker>\n</mat-form-field>\n",
            providers: [
                { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
                {
                    provide: DateAdapter,
                    useClass: MomentDateAdapter,
                    deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                },
                { provide: MAT_DATE_FORMATS, useValue: ɵ0 },
            ],
            styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep{background-color:#333437;display:flex;flex-direction:column;flex-grow:1;position:relative}:host::ng-deep mat-form-field{display:flex;flex-grow:1;line-height:1}:host::ng-deep mat-form-field .mat-form-field-wrapper{display:flex;flex-grow:1;padding:0}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex{height:1.275em;padding:.2em .3em .2em .45em;border-radius:0;align-items:center}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix{border:none;width:auto;padding:0;display:flex}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-suffix{flex-direction:row;display:flex}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-suffix .mat-datepicker-toggle{margin:0 0 0 .1em}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-suffix .mat-datepicker-toggle .mat-focus-indicator{width:.8em;height:.8em}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-suffix .mat-datepicker-toggle .mat-focus-indicator .mat-button-wrapper{width:.8em;height:.8em;display:flex;align-items:center}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-suffix .mat-datepicker-toggle .mat-focus-indicator .mat-button-wrapper .datepicker-button,:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-suffix .mat-datepicker-toggle .mat-focus-indicator .mat-button-wrapper svg{width:.8em;height:.8em}:host::ng-deep mat-form-field .item-content{font-family:Montserrat,sans-serif;font-weight:400;border:none;color:#fff;font-size:.45em;flex-grow:1}:host::ng-deep mat-form-field .item-content:focus{outline:0!important}:host::ng-deep mat-form-field .item-content::-moz-placeholder{color:#64666c!important}:host::ng-deep mat-form-field .item-content::-ms-input-placeholder{color:#64666c!important}:host::ng-deep mat-form-field .item-content::placeholder{color:#64666c!important}:host::ng-deep mat-form-field .item-content.left{text-align:left}:host::ng-deep mat-form-field .item-content.center{text-align:center}:host::ng-deep mat-form-field .item-content.right{text-align:right}:host::ng-deep mat-form-field .item-content.light{background-color:rgba(0,0,0,.1)}:host::ng-deep mat-form-field .item-content.light::-moz-placeholder{color:rgba(255,255,255,.2)!important}:host::ng-deep mat-form-field .item-content.light::-ms-input-placeholder{color:rgba(255,255,255,.2)!important}:host::ng-deep mat-form-field .item-content.light::placeholder{color:rgba(255,255,255,.2)!important}:host::ng-deep mat-form-field .item-content.dark{background-color:#161617}:host::ng-deep mat-form-field .item-content:-ms-input-placeholder{color:#64666c!important}:host::ng-deep mat-form-field .item-content.light:-ms-input-placeholder{color:gray!important}"]
        })
    ], GlSharedComponentInputDatepickerSimpleComponent);
    return GlSharedComponentInputDatepickerSimpleComponent;
}());

var GlSharedComponentInputOptionSimpleComponent = /** @class */ (function () {
    function GlSharedComponentInputOptionSimpleComponent() {
        this.itemSelected = new EventEmitter();
    }
    GlSharedComponentInputOptionSimpleComponent.prototype.onCheck = function () {
        var input = document.querySelector("#" + this.id);
        input.checked = true;
        this.itemSelected.emit(input.value);
    };
    __decorate([
        ViewChild('input')
    ], GlSharedComponentInputOptionSimpleComponent.prototype, "input", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputOptionSimpleComponent.prototype, "value", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputOptionSimpleComponent.prototype, "id", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputOptionSimpleComponent.prototype, "label", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputOptionSimpleComponent.prototype, "name", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputOptionSimpleComponent.prototype, "checked", void 0);
    __decorate([
        Output()
    ], GlSharedComponentInputOptionSimpleComponent.prototype, "itemSelected", void 0);
    GlSharedComponentInputOptionSimpleComponent = __decorate([
        Component({
            selector: 'gl-shared-component-input-option-simple',
            template: "<div class=\"input-container\">\n  <!--suppress HtmlFormInputWithoutLabel -->\n  <input\n    #input\n    [checked]=\"checked\"\n    class=\"input-radio\"\n    type=\"radio\"\n    [value]=\"value\"\n    [id]=\"id\"\n    [name]=\"name\"\n    (click)=\"onCheck()\"\n  >\n  <span (click)=\"onCheck()\" class=\"check-mark\"></span>\n  <label class=\"label\" [for]=\"id\">{{ label }}</label>\n</div>\n",
            styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep{display:block;flex-grow:1}:host::ng-deep .input-container{position:relative;padding:.2em .2em 0;display:flex;flex-grow:1;align-items:center}:host::ng-deep .input-container:not(hover) .check-mark{background-color:#1a1b1d;transition:.3s ease-in-out}:host::ng-deep .input-container:hover .check-mark{background-color:#333437;transition:.3s ease-in-out}:host::ng-deep .input-container .input-radio{position:absolute;opacity:0;cursor:pointer;height:2.2em;width:2.2em;left:.75em;top:.9em}:host::ng-deep .input-container .input-radio:checked~.check-mark{background-color:#1a1b1d}:host::ng-deep .input-container .input-radio:checked~.check-mark:after{visibility:visible;opacity:1;top:.25em;left:.24em;width:.5em;height:.5em;border-radius:50%;background-color:#d24077;transition:opacity .5s ease-in-out,background-color .5s ease-in-out}:host::ng-deep .input-container .check-mark{position:relative;cursor:pointer;top:0;left:0;height:1em;width:1em;background-color:#d24077;border-radius:50%;margin:0 .2em 0 0}:host::ng-deep .input-container .check-mark:after{content:\"\";-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;position:absolute;opacity:0;visibility:collapse;transition:opacity .5s ease-in-out,background-color .5s ease-in-out}:host::ng-deep .input-container .check-mark:after:hover{transform:scale(1.1);transition:.2s ease-in-out}:host::ng-deep .input-container .label{font-family:Montserrat,sans-serif;font-weight:400;color:#64666c;font-size:.6em}"]
        })
    ], GlSharedComponentInputOptionSimpleComponent);
    return GlSharedComponentInputOptionSimpleComponent;
}());

var GlSharedComponentInputTextSimpleComponent = /** @class */ (function () {
    function GlSharedComponentInputTextSimpleComponent() {
        this.disabled = false;
        this.autocomplete = false;
        this.value = null;
        this.maxLength = 255;
        this.currentValue = new EventEmitter();
    }
    GlSharedComponentInputTextSimpleComponent.prototype.onKeyUp = function (args) {
        if (args.target.value.trim().length > 0) {
            args.target.classList.remove('required-fill');
        }
        this.currentValue.emit({ value: args.target.value });
    };
    GlSharedComponentInputTextSimpleComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.mask != null && _this.mask.includes('currency')) {
                _this.inputElement.nativeElement.placeholder = InputMask.currency(_this.inputElement.nativeElement, _this.mask, _this.maskSymbol);
            }
        }, 0);
    };
    __decorate([
        ViewChild('inputElement', { read: ElementRef, static: true })
    ], GlSharedComponentInputTextSimpleComponent.prototype, "inputElement", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextSimpleComponent.prototype, "disabled", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextSimpleComponent.prototype, "autocomplete", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextSimpleComponent.prototype, "id", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextSimpleComponent.prototype, "placeholder", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextSimpleComponent.prototype, "itemContentAlignment", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextSimpleComponent.prototype, "class", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextSimpleComponent.prototype, "value", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextSimpleComponent.prototype, "mask", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextSimpleComponent.prototype, "maskSymbol", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextSimpleComponent.prototype, "maxLength", void 0);
    __decorate([
        Output()
    ], GlSharedComponentInputTextSimpleComponent.prototype, "currentValue", void 0);
    __decorate([
        Output()
    ], GlSharedComponentInputTextSimpleComponent.prototype, "onKeyUp", null);
    GlSharedComponentInputTextSimpleComponent = __decorate([
        Component({
            selector: 'gl-shared-component-input-text-simple',
            template: "<!--suppress HtmlFormInputWithoutLabel -->\n<input\n  #inputElement\n  class=\"item-content {{ itemContentAlignment }} {{ class }}\"\n  type=\"text\"\n  [id]=\"id\"\n  [value]=\"value\"\n  [autocomplete]=\"'off'\"\n  required\n  [placeholder]=\"placeholder\"\n  (keyup)=\"onKeyUp($event)\"\n  [disabled]=\"disabled\"\n  [maxLength]=\"maxLength\">\n",
            styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);.required-fill{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:.2s ease-in-out}.required-fill::-moz-placeholder{color:rgba(255,255,255,.3)!important}.required-fill:-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.required-fill::-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.required-fill::placeholder{color:rgba(255,255,255,.3)!important}.error-highlight{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:.2s ease-in-out}.error-highlight::-moz-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight:-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight::-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight::placeholder{color:rgba(255,255,255,.3)!important}:host::ng-deep{display:flex;flex:1 0 auto;position:relative;flex-direction:column;align-items:stretch}:host::ng-deep .item-content{font-family:Montserrat,sans-serif;font-weight:400;padding:.8em;border:none;background-color:#333437;color:#fff;font-size:.45em;flex-grow:1}:host::ng-deep .item-content:focus{outline:0!important}:host::ng-deep .item-content::-moz-placeholder{color:#64666c!important}:host::ng-deep .item-content::-ms-input-placeholder{color:#64666c!important}:host::ng-deep .item-content::placeholder{color:#64666c!important}:host::ng-deep .item-content.left{text-align:left}:host::ng-deep .item-content.center{text-align:center}:host::ng-deep .item-content.right{text-align:right}:host::ng-deep .item-content.light{background-color:rgba(0,0,0,.1)}:host::ng-deep .item-content.light::-moz-placeholder{color:rgba(255,255,255,.2)!important}:host::ng-deep .item-content.light::-ms-input-placeholder{color:rgba(255,255,255,.2)!important}:host::ng-deep .item-content.light::placeholder{color:rgba(255,255,255,.2)!important}:host::ng-deep .item-content.dark{background-color:#161617}:host::ng-deep .item-content:-ms-input-placeholder{color:#64666c!important}:host::ng-deep .item-content.light:-ms-input-placeholder{color:gray!important}"]
        })
    ], GlSharedComponentInputTextSimpleComponent);
    return GlSharedComponentInputTextSimpleComponent;
}());

var GlSharedComponentTitleLabelSimpleComponent = /** @class */ (function () {
    function GlSharedComponentTitleLabelSimpleComponent() {
        this.class = '';
        this.required = false;
        this.requiredLabel = 'Required field';
    }
    __decorate([
        Input()
    ], GlSharedComponentTitleLabelSimpleComponent.prototype, "labelValue", void 0);
    __decorate([
        Input()
    ], GlSharedComponentTitleLabelSimpleComponent.prototype, "id", void 0);
    __decorate([
        Input()
    ], GlSharedComponentTitleLabelSimpleComponent.prototype, "labelAlignment", void 0);
    __decorate([
        Input()
    ], GlSharedComponentTitleLabelSimpleComponent.prototype, "class", void 0);
    __decorate([
        Input()
    ], GlSharedComponentTitleLabelSimpleComponent.prototype, "required", void 0);
    __decorate([
        Input()
    ], GlSharedComponentTitleLabelSimpleComponent.prototype, "requiredLabel", void 0);
    GlSharedComponentTitleLabelSimpleComponent = __decorate([
        Component({
            selector: 'gl-shared-component-title-label-simple',
            template: "<label\n  class=\"header-data {{ labelAlignment }} {{ class }}\"\n  [attr.for]=\"id\">{{ labelValue }}\n</label>\n<img\n  *ngIf=\"required\"\n  src=\"../assets/img/icon/label/dot.svg\"\n  class=\"required-fill-dot {{ class }}\"\n  [title]=\"requiredLabel\"\n  alt=\"Required fill icon\">\n",
            styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep{display:flex;flex-grow:1}:host::ng-deep .header-data{position:relative;flex-grow:1;font-family:Montserrat,sans-serif;font-weight:400;background-color:#2c2c2f;color:#fff;font-size:.45em;padding:1em;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host::ng-deep .header-data.light{background-color:rgba(0,0,0,.3)}:host::ng-deep .header-data.dark{background-color:#111112}:host::ng-deep .header-data.left{text-align:left}:host::ng-deep .header-data.center{text-align:center}:host::ng-deep .header-data.right{text-align:right}:host::ng-deep .header-data.report{background-color:rgba(210,64,119,.8);font-size:.7em;padding:.5em}:host::ng-deep .required-fill-dot{position:absolute;top:.5em;right:.2em;width:.3em;height:.3em}"]
        })
    ], GlSharedComponentTitleLabelSimpleComponent);
    return GlSharedComponentTitleLabelSimpleComponent;
}());

var GlSharedComponentInputTextLabelComponent = /** @class */ (function () {
    function GlSharedComponentInputTextLabelComponent() {
        this.disabled = false;
        this.autocomplete = false;
        this.value = null;
        this.maxLength = 255;
        this.requiredLabel = 'Required field';
        this.currentValue = new EventEmitter();
    }
    GlSharedComponentInputTextLabelComponent.prototype.onKeyUp = function (values) { this.currentValue.emit(values); };
    __decorate([
        Input()
    ], GlSharedComponentInputTextLabelComponent.prototype, "disabled", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextLabelComponent.prototype, "autocomplete", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextLabelComponent.prototype, "id", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextLabelComponent.prototype, "labelAlignment", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextLabelComponent.prototype, "labelValue", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextLabelComponent.prototype, "placeholder", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextLabelComponent.prototype, "itemContentAlignment", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextLabelComponent.prototype, "class", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextLabelComponent.prototype, "value", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextLabelComponent.prototype, "mask", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextLabelComponent.prototype, "maskSymbol", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextLabelComponent.prototype, "maxLength", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextLabelComponent.prototype, "required", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextLabelComponent.prototype, "requiredLabel", void 0);
    __decorate([
        Output()
    ], GlSharedComponentInputTextLabelComponent.prototype, "currentValue", void 0);
    GlSharedComponentInputTextLabelComponent = __decorate([
        Component({
            selector: 'gl-shared-component-input-text-label',
            template: "<div class=\"item-container\">\n  <gl-shared-component-title-label-simple\n    [id]=\"id\"\n    [labelValue]=\"labelValue\"\n    [labelAlignment]=\"labelAlignment\"\n    [required]=\"required\"\n    [class]=\"class\"\n    [requiredLabel]=\"requiredLabel\"\n  ></gl-shared-component-title-label-simple>\n  <gl-shared-component-input-text-simple\n    [class]=\"class\"\n    [value]=\"value\"\n    [id]=\"id\"\n    [itemContentAlignment]=\"itemContentAlignment\"\n    [placeholder]=\"placeholder\"\n    (currentValue)=\"onKeyUp($event)\"\n    [disabled]=\"disabled\"\n    [autocomplete]=\"autocomplete\"\n\n    [mask]=\"mask\"\n    [maskSymbol]=\"maskSymbol\"\n    [maxLength]=\"maxLength\"\n  ></gl-shared-component-input-text-simple>\n</div>\n",
            styles: [":host::ng-deep{display:flex;flex:1 0 auto}:host::ng-deep .item-container{position:relative;display:flex;flex-direction:column;align-items:stretch;flex:1 0 auto}:host::ng-deep .item-container ::ng-deep gl-shared-component-input-text-simple{margin:0}"]
        })
    ], GlSharedComponentInputTextLabelComponent);
    return GlSharedComponentInputTextLabelComponent;
}());

var GlSharedComponentInputTextAreaSimpleComponent = /** @class */ (function () {
    function GlSharedComponentInputTextAreaSimpleComponent() {
        this.disabled = false;
        this.value = '';
        this.currentValue = new EventEmitter();
    }
    GlSharedComponentInputTextAreaSimpleComponent.prototype.onKeyUp = function (args) {
        var value = args.target.value;
        if (value.trim().length > 0) {
            this.textArea.nativeElement.classList.remove('required-fill');
        }
        this.currentValue.emit({ value: value });
    };
    __decorate([
        ViewChild('textArea', { read: ElementRef, static: true })
    ], GlSharedComponentInputTextAreaSimpleComponent.prototype, "textArea", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextAreaSimpleComponent.prototype, "disabled", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextAreaSimpleComponent.prototype, "id", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextAreaSimpleComponent.prototype, "labelAlignment", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextAreaSimpleComponent.prototype, "labelValue", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextAreaSimpleComponent.prototype, "placeholder", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextAreaSimpleComponent.prototype, "itemContentAlignment", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextAreaSimpleComponent.prototype, "class", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextAreaSimpleComponent.prototype, "value", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextAreaSimpleComponent.prototype, "maxLength", void 0);
    __decorate([
        Output()
    ], GlSharedComponentInputTextAreaSimpleComponent.prototype, "currentValue", void 0);
    GlSharedComponentInputTextAreaSimpleComponent = __decorate([
        Component({
            selector: 'gl-shared-component-input-text-area-simple',
            template: "<div class=\"item-container\">\n  <ng-content></ng-content>\n  <!--suppress HtmlFormInputWithoutLabel -->\n  <textarea\n    #textArea\n    class=\"item-content {{ itemContentAlignment }} {{ class }}\"\n    [id]=\"id\"\n    [placeholder]=\"placeholder\"\n    (keyup)=\"onKeyUp($event)\"\n    [value]=\"value\"\n    [disabled]=\"disabled\"\n    [maxLength]=\"maxLength\"\n  ></textarea>\n</div>\n",
            styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep .item-container .item-content::-webkit-scrollbar:horizontal{height:.5em}:host::ng-deep .item-container .item-content::-webkit-scrollbar{width:.5em}:host::ng-deep .item-container .item-content::-webkit-scrollbar-button{background-color:#333437;display:none!important}:host::ng-deep .item-container .item-content::-webkit-scrollbar-track-piece{background-color:#2c2c2f}:host::ng-deep .item-container .item-content::-webkit-scrollbar-thumb{background-color:#64666c;border:1px solid #38393c}.required-fill{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:.2s ease-in-out}.required-fill::-moz-placeholder{color:rgba(255,255,255,.3)!important}.required-fill:-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.required-fill::-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.required-fill::placeholder{color:rgba(255,255,255,.3)!important}.error-highlight{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:.2s ease-in-out}.error-highlight::-moz-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight:-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight::-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight::placeholder{color:rgba(255,255,255,.3)!important}:host::ng-deep{display:flex;flex:1 0 auto}:host::ng-deep .item-container{position:relative;display:flex;flex-direction:column;align-items:stretch;flex:1 0 auto}:host::ng-deep .item-container gl-shared-component-title-label-simple{flex-grow:0}:host::ng-deep .item-container .item-content{scrollbar-face-color:#333437!important;scrollbar-shadow-color:#38393c!important;scrollbar-track-color:#2c2c2f!important;scrollbar-arrow-color:#64666c!important;font-family:Montserrat,sans-serif;font-weight:300;resize:none;padding:.8em;font-size:.45em;text-align:left;flex-grow:1;overflow-x:hidden;overflow-y:auto;background-color:#333437;border:none;color:#fff}:host::ng-deep .item-container .item-content:focus{outline:0!important}:host::ng-deep .item-container .item-content::-moz-placeholder{color:#64666c}:host::ng-deep .item-container .item-content::-ms-input-placeholder{color:#64666c}:host::ng-deep .item-container .item-content::placeholder{color:#64666c}:host::ng-deep .item-container .item-content.light{background-color:rgba(0,0,0,.1)}:host::ng-deep .item-container .item-content.dark{background-color:#161617}:host::ng-deep .item-container .item-content:-ms-input-placeholder{color:#64666c!important}:host::ng-deep .item-container .item-content.light:-ms-input-placeholder{color:rgba(255,255,255,.2)!important}"]
        })
    ], GlSharedComponentInputTextAreaSimpleComponent);
    return GlSharedComponentInputTextAreaSimpleComponent;
}());

var GlSharedComponentInputTextAreaLabelComponent = /** @class */ (function () {
    function GlSharedComponentInputTextAreaLabelComponent() {
        this.disabled = false;
        this.value = '';
        this.requiredLabel = 'Required label';
        this.currentValue = new EventEmitter();
    }
    GlSharedComponentInputTextAreaLabelComponent.prototype.onKeyUp = function (values) {
        this.currentValue.emit(values);
    };
    __decorate([
        Input()
    ], GlSharedComponentInputTextAreaLabelComponent.prototype, "disabled", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextAreaLabelComponent.prototype, "id", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextAreaLabelComponent.prototype, "labelAlignment", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextAreaLabelComponent.prototype, "labelValue", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextAreaLabelComponent.prototype, "placeholder", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextAreaLabelComponent.prototype, "itemContentAlignment", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextAreaLabelComponent.prototype, "class", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextAreaLabelComponent.prototype, "value", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextAreaLabelComponent.prototype, "maxLength", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextAreaLabelComponent.prototype, "required", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextAreaLabelComponent.prototype, "requiredLabel", void 0);
    __decorate([
        Output()
    ], GlSharedComponentInputTextAreaLabelComponent.prototype, "currentValue", void 0);
    GlSharedComponentInputTextAreaLabelComponent = __decorate([
        Component({
            selector: 'gl-shared-component-input-text-area-label',
            template: "<gl-shared-component-input-text-area-simple\n  [class]=\"class\"\n  [id]=\"id\"\n  [placeholder]=\"placeholder\"\n  [itemContentAlignment]=\"itemContentAlignment\"\n  (currentValue)=\"onKeyUp($event)\"\n  [value]=\"value\"\n  [disabled]=\"disabled\"\n  [maxLength]=\"maxLength\">\n  <gl-shared-component-title-label-simple\n    [class]=\"class\"\n    [labelAlignment]=\"labelAlignment\"\n    [id]=\"id\"\n    [labelValue]=\"labelValue\"\n    [required]=\"required\"\n    [requiredLabel]=\"requiredLabel\"\n  ></gl-shared-component-title-label-simple>\n</gl-shared-component-input-text-area-simple>\n",
            styles: [":host::ng-deep{display:flex;flex-grow:1}"]
        })
    ], GlSharedComponentInputTextAreaLabelComponent);
    return GlSharedComponentInputTextAreaLabelComponent;
}());

var GlSharedComponentModalAlertService = /** @class */ (function () {
    function GlSharedComponentModalAlertService() {
        this.isOK = true;
        this.currentValue = new Subject();
    }
    GlSharedComponentModalAlertService.prototype.show = function (message) {
        return this.modal(true, true, message);
    };
    GlSharedComponentModalAlertService.prototype.showYesNo = function (message) {
        return this.modal(true, false, message);
    };
    GlSharedComponentModalAlertService.prototype.hide = function () {
        this.modal(false, this.isOK, this.message);
    };
    GlSharedComponentModalAlertService.prototype.onNo = function () {
        this.currentValue.next(false);
        this.resolvePromise(false);
        this.hide();
    };
    GlSharedComponentModalAlertService.prototype.onYes = function () {
        this.currentValue.next(true);
        this.resolvePromise(true);
        this.hide();
    };
    GlSharedComponentModalAlertService.prototype.onOk = function () {
        this.currentValue.next(true);
        this.resolvePromise(true);
        this.hide();
    };
    GlSharedComponentModalAlertService.prototype.modal = function (show, isOK, message) {
        var _this = this;
        if (isOK === void 0) { isOK = true; }
        if (message === void 0) { message = ''; }
        return new Promise(function (resolve) {
            _this.resolvePromise = resolve;
            _this.isOK = isOK;
            _this.message = message;
            if (show) {
                _this.modalClass = 'hide-modal';
                _this.showModal = show;
                _this.modalClass = 'show-modal';
            }
            else {
                _this.modalClass = 'hide-modal';
                setTimeout(function () {
                    _this.showModal = false;
                    _this.message = '';
                }, 300);
            }
        });
    };
    GlSharedComponentModalAlertService.prototype.onModalKeyUp = function (e) {
        if (e.key === 'Enter') {
            if (this.isOK) {
                this.onOk();
            }
            else {
                this.onYes();
            }
        }
        else if (e.key === 'Escape') {
            if (this.isOK) {
                this.onOk();
            }
            else {
                this.onNo();
            }
        }
    };
    GlSharedComponentModalAlertService.ɵprov = ɵɵdefineInjectable({ factory: function GlSharedComponentModalAlertService_Factory() { return new GlSharedComponentModalAlertService(); }, token: GlSharedComponentModalAlertService, providedIn: "root" });
    GlSharedComponentModalAlertService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], GlSharedComponentModalAlertService);
    return GlSharedComponentModalAlertService;
}());

var GlSharedComponentModalAlertComponent = /** @class */ (function () {
    function GlSharedComponentModalAlertComponent(service) {
        this.service = service;
        this.innerValueNo = 'No';
        this.innerValueYes = 'Yes';
        this.innerValueOK = 'OK';
        this.noValue = 'no';
        this.yesValue = 'yes';
        this.okValue = 'ok';
    }
    GlSharedComponentModalAlertComponent.ctorParameters = function () { return [
        { type: GlSharedComponentModalAlertService }
    ]; };
    __decorate([
        Input()
    ], GlSharedComponentModalAlertComponent.prototype, "title", void 0);
    __decorate([
        Input()
    ], GlSharedComponentModalAlertComponent.prototype, "subtitle", void 0);
    __decorate([
        Input()
    ], GlSharedComponentModalAlertComponent.prototype, "modalLogo", void 0);
    __decorate([
        Input()
    ], GlSharedComponentModalAlertComponent.prototype, "innerValueNo", void 0);
    __decorate([
        Input()
    ], GlSharedComponentModalAlertComponent.prototype, "innerValueYes", void 0);
    __decorate([
        Input()
    ], GlSharedComponentModalAlertComponent.prototype, "innerValueOK", void 0);
    __decorate([
        Input()
    ], GlSharedComponentModalAlertComponent.prototype, "noValue", void 0);
    __decorate([
        Input()
    ], GlSharedComponentModalAlertComponent.prototype, "yesValue", void 0);
    __decorate([
        Input()
    ], GlSharedComponentModalAlertComponent.prototype, "okValue", void 0);
    GlSharedComponentModalAlertComponent = __decorate([
        Component({
            selector: 'gl-shared-component-modal-alert',
            template: "<div\n  *ngIf=\"service.showModal\"\n  glAutoFocus\n  (keydown)=\"service.onModalKeyUp($event)\"\n  id=\"modal\"\n  class=\"modal-container {{ service.modalClass }}\"\n  tabindex=\"-1\">\n  <div class=\"modal-main-content\">\n    <gl-shared-component-modal-header\n      [title]=\"title\"\n      [subtitle]=\"subtitle\"\n      [modalLogo]=\"modalLogo\"\n    ></gl-shared-component-modal-header>\n    <div class=\"modal-message-container\">\n      <span class=\"modal-message\">{{ service.message }}</span>\n    </div>\n    <div class=\"button-container\">\n      <gl-shared-component-input-button-simple\n        *ngIf=\"!service.isOK\"\n        class=\"no\"\n        (click)=\"service.onNo()\"\n        [innerValue]=\"innerValueNo\"\n        [value]=\"noValue\"\n      ></gl-shared-component-input-button-simple>\n      <gl-shared-component-input-button-simple\n        *ngIf=\"!service.isOK\"\n        class=\"yes\"\n        (click)=\"service.onYes()\"\n        [innerValue]=\"innerValueYes\"\n        [value]=\"yesValue\"\n      ></gl-shared-component-input-button-simple>\n      <gl-shared-component-input-button-simple\n        *ngIf=\"service.isOK\"\n        class=\"ok\"\n        (click)=\"service.onOk()\"\n        [innerValue]=\"innerValueOK\"\n        [value]=\"okValue\"\n      ></gl-shared-component-input-button-simple>\n    </div>\n    <div class=\"modal-footer\"></div>\n  </div>\n</div>\n",
            styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep .modal-container{position:fixed;min-width:100vw;min-height:100vh;z-index:100000;top:0;left:0;display:flex;justify-items:center;align-items:center;height:0;-webkit-animation:.5s ease-in-out forwards show-modal;animation:.5s ease-in-out forwards show-modal;background:rgba(0,0,0,.8)}@-webkit-keyframes show-modal{from{opacity:0}to{opacity:1}}@keyframes show-modal{from{opacity:0}to{opacity:1}}:host::ng-deep .modal-container>.modal-main-content{opacity:1!important;transition:.5s ease-in-out .5s}:host::ng-deep .modal-container .modal-main-content{opacity:0;background:rgba(2,2,2,.5);margin:0 auto;word-wrap:break-word;display:flex;flex-direction:column;justify-content:stretch;width:90vw;max-width:36em;min-height:10em;height:1em;align-items:stretch}:host::ng-deep .modal-container .modal-main-content .modal-message-container{display:flex;align-items:center;justify-content:center;flex-grow:1;height:-webkit-max-content;height:-moz-max-content;height:max-content;margin:1em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host::ng-deep .modal-container .modal-main-content .modal-message-container .modal-message{font-family:Montserrat,sans-serif;font-weight:700;text-transform:unset;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;text-align:center;width:100%;font-size:.6em;color:#fff;white-space:pre-wrap}:host::ng-deep .modal-container .modal-main-content .button-container{display:flex;justify-content:center;align-items:stretch;height:2em}:host::ng-deep .modal-container .modal-main-content .button-container gl-shared-component-input-button-simple{margin:0 .2em;max-width:calc(100% / 3)}:host::ng-deep .modal-container .modal-main-content .modal-footer{height:.5em;background-color:#0e0e0f;border-top:1px solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5;margin:.2em 0 0;width:100%}:host::ng-deep .hide-modal{-webkit-animation:.3s ease-in-out forwards hide-modal;animation:.3s ease-in-out forwards hide-modal}@-webkit-keyframes hide-modal{from{opacity:1}to{opacity:0}}@keyframes hide-modal{from{opacity:1}to{opacity:0}}@media screen and (min-device-width:1024px) and (orientation:landscape){:host::ng-deep .modal-container .modal-main-content{width:30vw}:host::ng-deep .modal-container .modal-main-content gl-shared-component-input-button-simple{margin:0 .2em;max-width:calc(30vw / 3)}}"]
        })
    ], GlSharedComponentModalAlertComponent);
    return GlSharedComponentModalAlertComponent;
}());

var GlSharedComponentModalHeaderComponent = /** @class */ (function () {
    function GlSharedComponentModalHeaderComponent() {
    }
    __decorate([
        Input()
    ], GlSharedComponentModalHeaderComponent.prototype, "title", void 0);
    __decorate([
        Input()
    ], GlSharedComponentModalHeaderComponent.prototype, "subtitle", void 0);
    __decorate([
        Input()
    ], GlSharedComponentModalHeaderComponent.prototype, "modalLogo", void 0);
    GlSharedComponentModalHeaderComponent = __decorate([
        Component({
            selector: 'gl-shared-component-modal-header',
            template: "<div class=\"modal-title-container\">\n  <div class=\"modal-title-text-container\">\n    <h2 class=\"modal-title\">{{ title }}</h2>\n    <h2 class=\"modal-title\">{{ subtitle }}</h2>\n  </div>\n  <img class=\"modal-logo\" [src]=\"modalLogo\" alt=\"Header Logo\">\n</div>\n",
            styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep .modal-title-container{background-color:#1a1b1d;border-bottom:1px solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5;display:flex;justify-content:flex-start;align-items:center;padding:.5em 0;text-align:left;width:100%;font-size:.65em}:host::ng-deep .modal-title-container .modal-logo{margin:0 .5em;height:1.5em;width:1.5em}:host::ng-deep .modal-title-container .modal-title-text-container{display:flex;align-items:center;margin:0 1em;flex-grow:1}:host::ng-deep .modal-title-container .modal-title-text-container .modal-title{font-family:Montserrat,sans-serif;font-weight:400;color:#64666c;text-transform:uppercase;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host::ng-deep .modal-title-container .modal-title-text-container .modal-title:nth-child(1){margin:0 .3em 0 0}"]
        })
    ], GlSharedComponentModalHeaderComponent);
    return GlSharedComponentModalHeaderComponent;
}());

var GlSharedComponentModalLoadingService = /** @class */ (function () {
    function GlSharedComponentModalLoadingService() {
        this._defaultMessage = 'Loading... please wait...';
        this.defaultMessage = 'Loading... please wait...';
        this._loadingStatus = this.defaultMessage;
        this._showLoading = true;
    }
    GlSharedComponentModalLoadingService.prototype.checkElement = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (_this._mainLoading == null) {
                var loadingInterval_1 = setInterval(function () {
                    _this._mainLoading = document.querySelector('.main-loading');
                    if (_this._mainLoading != null) {
                        clearInterval(loadingInterval_1);
                        resolve();
                    }
                }, 1);
            }
            else {
                resolve();
            }
        });
    };
    GlSharedComponentModalLoadingService.prototype.setup = function (mainLoading) {
        this._mainLoading = mainLoading;
    };
    GlSharedComponentModalLoadingService.prototype.hide = function () {
        var _this = this;
        this.checkElement().then(function () {
            _this._mainLoading.classList.add('hide-loading');
            setTimeout(function () {
                _this._showLoading = false;
                _this.status(null);
            }, 1100);
        });
    };
    GlSharedComponentModalLoadingService.prototype.show = function (status) {
        var _this = this;
        this.checkElement().then(function () {
            if (status != null) {
                _this.status(status);
            }
            else {
                _this.status(null);
            }
            _this._mainLoading.classList.remove('hide-loading');
            _this._showLoading = true;
        });
    };
    GlSharedComponentModalLoadingService.prototype.status = function (message) {
        var _this = this;
        this.checkElement().then(function () {
            setTimeout(function () {
                if (message == null || message.trim().length === 0) {
                    if (_this.defaultMessage != null && _this.defaultMessage.length === 0) {
                        _this.defaultMessage = _this._defaultMessage;
                    }
                    _this._loadingStatus = _this.defaultMessage;
                }
                else {
                    _this._loadingStatus = message;
                }
            }, 10);
        });
    };
    GlSharedComponentModalLoadingService.ɵprov = ɵɵdefineInjectable({ factory: function GlSharedComponentModalLoadingService_Factory() { return new GlSharedComponentModalLoadingService(); }, token: GlSharedComponentModalLoadingService, providedIn: "root" });
    GlSharedComponentModalLoadingService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], GlSharedComponentModalLoadingService);
    return GlSharedComponentModalLoadingService;
}());

var GlSharedComponentModalLoadingComponent = /** @class */ (function () {
    function GlSharedComponentModalLoadingComponent(service) {
        this.service = service;
        this.loaded = false;
        service.defaultMessage = this.defaultMessage;
    }
    GlSharedComponentModalLoadingComponent.prototype.ngAfterViewChecked = function () {
        var container = document.querySelector('.main-loading');
        if (container != null && !this.loaded) {
            this.service.setup(container);
            this.loaded = true;
        }
    };
    GlSharedComponentModalLoadingComponent.ctorParameters = function () { return [
        { type: GlSharedComponentModalLoadingService }
    ]; };
    __decorate([
        ViewChild('mainLoading', { read: ElementRef, static: true })
    ], GlSharedComponentModalLoadingComponent.prototype, "mainLoading", void 0);
    __decorate([
        Input()
    ], GlSharedComponentModalLoadingComponent.prototype, "defaultMessage", void 0);
    GlSharedComponentModalLoadingComponent = __decorate([
        Component({
            selector: 'gl-shared-component-modal-loading',
            template: "<div #mainLoading class=\"main-loading\" *ngIf=\"service._showLoading\">\n  <div class=\"loading-container\">\n    <div class=\"lds-facebook\"><div></div><div></div><div></div></div>\n  </div>\n  <div class=\"status-container\">\n    <div class=\"user-content\">\n      <ng-content></ng-content>\n    </div>\n    <h2 class=\"subtitle loading-status\">{{ service._loadingStatus }}</h2>\n  </div>\n</div>\n",
            styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep .main-loading{position:fixed;width:100vw;height:100vh;z-index:999999999;top:0;left:0;background:rgba(0,0,0,.85);display:flex;justify-content:center;flex-direction:column}:host::ng-deep .main-loading .status-container{display:flex;flex-direction:column;text-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:.5}:host::ng-deep .main-loading .status-container .user-content{flex-grow:1}:host::ng-deep .main-loading .status-container .loading-status{font-family:Montserrat,sans-serif;font-weight:300;color:#fff;font-size:.5em;width:100%;margin:1em 0 0;background:unset;white-space:pre-line}.loading-container{display:flex;justify-content:center;align-items:center}.hide-loading{opacity:0;visibility:collapse;transition:1s ease-in-out,visibility 1s ease-in-out}.lds-facebook{display:inline-block;position:relative;width:64px;height:64px}.lds-facebook div{display:inline-block;position:absolute;left:6px;width:13px;background:#fff;-webkit-animation:1.2s cubic-bezier(0,.5,.5,1) infinite lds-facebook;animation:1.2s cubic-bezier(0,.5,.5,1) infinite lds-facebook}.lds-facebook div:nth-child(1){left:6px;-webkit-animation-delay:-.24s;animation-delay:-.24s}.lds-facebook div:nth-child(2){left:26px;-webkit-animation-delay:-.12s;animation-delay:-.12s}.lds-facebook div:nth-child(3){left:45px;-webkit-animation-delay:0s;animation-delay:0s}@-webkit-keyframes lds-facebook{0%{top:6px;height:51px}100%,50%{top:19px;height:26px}}@keyframes lds-facebook{0%{top:6px;height:51px}100%,50%{top:19px;height:26px}}"]
        })
    ], GlSharedComponentModalLoadingComponent);
    return GlSharedComponentModalLoadingComponent;
}());

var GlSharedComponentTitlePageComponent = /** @class */ (function () {
    function GlSharedComponentTitlePageComponent() {
    }
    __decorate([
        Input()
    ], GlSharedComponentTitlePageComponent.prototype, "title", void 0);
    __decorate([
        Input()
    ], GlSharedComponentTitlePageComponent.prototype, "subtitle", void 0);
    GlSharedComponentTitlePageComponent = __decorate([
        Component({
            selector: 'gl-shared-component-title-page',
            template: "<div class=\"page-title\">\n  <div class=\"title-container\">\n    <h1 class=\"title\">{{ title }}</h1>\n    <h2 class=\"subtitle\">{{ subtitle }}</h2>\n  </div>\n</div>\n",
            styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);.page-title{margin:0 .5em;flex-grow:1;align-self:flex-start}.page-title .title-container{display:flex}.page-title .title-container .title{font-family:Montserrat,sans-serif;font-weight:700}.page-title .title-container .subtitle,.page-title .title-container .title{text-transform:uppercase;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#fff;font-size:1.5em}.page-title .title-container .subtitle{font-family:Montserrat,sans-serif;font-weight:100;margin:0 0 0 .3em}"]
        })
    ], GlSharedComponentTitlePageComponent);
    return GlSharedComponentTitlePageComponent;
}());

var GlSharedComponentTitleLabelButtonSimpleComponent = /** @class */ (function () {
    function GlSharedComponentTitleLabelButtonSimpleComponent() {
        this.required = false;
        this.requiredFieldDescription = 'Required field';
    }
    __decorate([
        Input()
    ], GlSharedComponentTitleLabelButtonSimpleComponent.prototype, "id", void 0);
    __decorate([
        Input()
    ], GlSharedComponentTitleLabelButtonSimpleComponent.prototype, "alt", void 0);
    __decorate([
        Input()
    ], GlSharedComponentTitleLabelButtonSimpleComponent.prototype, "src", void 0);
    __decorate([
        Input()
    ], GlSharedComponentTitleLabelButtonSimpleComponent.prototype, "required", void 0);
    __decorate([
        Input()
    ], GlSharedComponentTitleLabelButtonSimpleComponent.prototype, "class", void 0);
    __decorate([
        Input()
    ], GlSharedComponentTitleLabelButtonSimpleComponent.prototype, "requiredFieldDescription", void 0);
    GlSharedComponentTitleLabelButtonSimpleComponent = __decorate([
        Component({
            selector: 'gl-shared-component-title-label-button-simple',
            template: "<div class=\"label-button-container {{ class }}\">\n  <div\n    [attr.alt]=\"alt\"\n    class=\"tooltip top\">\n    <img\n      class=\"label-button\"\n      [id]=\"id\"\n      [src]=\"src\"\n      [alt]=\"alt\">\n  </div>\n  <img\n    *ngIf=\"required\"\n    src=\"../assets/img/icon/label/dot.svg\"\n    class=\"required-fill-dot\"\n    [title]=\"requiredFieldDescription\"\n    alt=\"Required fill icon\">\n</div>\n",
            styles: [".required-fill{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:.2s ease-in-out}.required-fill::-moz-placeholder{color:rgba(255,255,255,.3)!important}.required-fill:-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.required-fill::-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.required-fill::placeholder{color:rgba(255,255,255,.3)!important}.error-highlight{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:.2s ease-in-out}.error-highlight::-moz-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight:-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight::-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight::placeholder{color:rgba(255,255,255,.3)!important}.label-button-container{display:flex;position:absolute;top:.19em;right:.2em}.label-button-container .label-button{cursor:pointer;height:1em;width:1em;margin:0 .1em}.label-button-container .label-button:hover{transform:scale(1.1);opacity:1;transition:.2s ease-in-out}.label-button-container .label-button:not(hover){transform:scale(1);opacity:.5;transition:.2s ease-in-out}"]
        })
    ], GlSharedComponentTitleLabelButtonSimpleComponent);
    return GlSharedComponentTitleLabelButtonSimpleComponent;
}());

var GlSharedComponentTitleLabelButtonContainerComponent = /** @class */ (function () {
    function GlSharedComponentTitleLabelButtonContainerComponent() {
        this.required = false;
        this.requiredFieldDescription = 'Required field';
    }
    __decorate([
        Input()
    ], GlSharedComponentTitleLabelButtonContainerComponent.prototype, "labelValue", void 0);
    __decorate([
        Input()
    ], GlSharedComponentTitleLabelButtonContainerComponent.prototype, "id", void 0);
    __decorate([
        Input()
    ], GlSharedComponentTitleLabelButtonContainerComponent.prototype, "labelAlignment", void 0);
    __decorate([
        Input()
    ], GlSharedComponentTitleLabelButtonContainerComponent.prototype, "required", void 0);
    __decorate([
        Input()
    ], GlSharedComponentTitleLabelButtonContainerComponent.prototype, "class", void 0);
    __decorate([
        Input()
    ], GlSharedComponentTitleLabelButtonContainerComponent.prototype, "requiredFieldDescription", void 0);
    GlSharedComponentTitleLabelButtonContainerComponent = __decorate([
        Component({
            selector: 'gl-shared-component-title-label-button-container',
            template: "<div class=\"label-with-button-container {{ class }}\">\n  <gl-shared-component-title-label-simple\n    [labelValue]=\"labelValue\"\n    [id]=\"id\"\n    [labelAlignment]=\"labelAlignment\"\n    [required]=\"required\"\n    [class]=\"class\"\n    [requiredLabel]=\"requiredFieldDescription\"\n  ></gl-shared-component-title-label-simple>\n  <div class=\"label-button-container\">\n    <ng-content></ng-content>\n  </div>\n</div>\n",
            styles: [":host::ng-deep{display:flex;flex-grow:1}:host::ng-deep .label-with-button-container{display:flex;flex-grow:1;background-color:#2c2c2f}:host::ng-deep .label-with-button-container .label-button-container{display:flex;flex-grow:0;margin:0 .2em 0 0}:host::ng-deep .label-with-button-container .label-button-container .button{margin:0 0 0 .2em}:host::ng-deep .label-with-button-container.light{background-color:rgba(0,0,0,.3)}:host::ng-deep .label-with-button-container.dark{background-color:#111112}"]
        })
    ], GlSharedComponentTitleLabelButtonContainerComponent);
    return GlSharedComponentTitleLabelButtonContainerComponent;
}());

var GlSharedComponentMenuBackgroundComponent = /** @class */ (function () {
    function GlSharedComponentMenuBackgroundComponent() {
    }
    GlSharedComponentMenuBackgroundComponent = __decorate([
        Component({
            selector: 'gl-shared-component-menu-background',
            template: "<div class=\"menu-background\"></div>\n",
            styles: [":host::ng-deep .menu-background{background-color:rgba(0,0,0,.3);position:fixed;width:100vw;height:100vh}"]
        })
    ], GlSharedComponentMenuBackgroundComponent);
    return GlSharedComponentMenuBackgroundComponent;
}());

var GlSharedComponentMenuService = /** @class */ (function () {
    function GlSharedComponentMenuService() {
        this.menuHidden = new Subject();
        this.opened = false;
    }
    GlSharedComponentMenuService.prototype.ngOnDestroy = function () {
        this.menuHidden.observers.map(function (x) { return x.complete(); });
    };
    GlSharedComponentMenuService.prototype.initialize = function (container, background, router) {
        this.container = container;
        this.background = background;
        this.router = router;
        this.menuHidden.next(true);
    };
    GlSharedComponentMenuService.prototype.close = function (event) {
        event.preventDefault();
        this.container.classList.remove('menu-active');
        this.background.classList.remove('visible-background');
        this.menuHidden.next(true);
        this.opened = false;
        return false;
    };
    GlSharedComponentMenuService.prototype.open = function (event) {
        event.preventDefault();
        this.container.classList.add('menu-active');
        this.background.classList.add('visible-background');
        this.menuHidden.next(false);
        this.opened = true;
        return true;
    };
    GlSharedComponentMenuService.prototype.goToSettings = function (url, target) {
        if (target === void 0) { target = '_blank'; }
        window.open(url, target);
    };
    GlSharedComponentMenuService.prototype.backgroundClick = function (event) {
        if (this.opened) {
            this.close(event);
        }
    };
    GlSharedComponentMenuService.ɵprov = ɵɵdefineInjectable({ factory: function GlSharedComponentMenuService_Factory() { return new GlSharedComponentMenuService(); }, token: GlSharedComponentMenuService, providedIn: "root" });
    GlSharedComponentMenuService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], GlSharedComponentMenuService);
    return GlSharedComponentMenuService;
}());

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
    GlSharedComponentMenuComponent = __decorate([
        Component({
            selector: 'gl-shared-component-menu',
            template: "<gl-shared-component-menu-background\n  #background\n  (click)=\"service.backgroundClick($event)\"\n></gl-shared-component-menu-background>\n<div #container class=\"menu-container {{ className }} {{ menuPosition === 'left' ? 'left' : 'right' }}\">\n  <nav class=\"menu-nav-container\">\n    <ul class=\"menu-content\">\n      <li class=\"menu-header-container\">\n        <div class=\"menu-header\">\n          <div class=\"menu-top-icons-container\">\n            <img id=\"close-menu-button\"\n               (click)=\"service.close($event)\"\n               [src]=\"closeButton\"\n               class=\"menu-icons close-menu\"\n               alt=\"Close menu button\">\n            <img\n              *ngIf=\"showSettings\"\n              id=\"settings-menu-button\"\n              (click)=\"service.goToSettings(settingsUrl, settingsTarget)\"\n              [src]=\"settingsButton\"\n              class=\"menu-icons settings-menu\"\n              alt=\"Settings menu button\">\n          </div>\n          <div class=\"menu-header-title\">\n            <h1 class=\"title\">{{ title }}</h1>\n            <h2 class=\"subtitle\">{{ subtitle }}</h2>\n          </div>\n        </div>\n      </li>\n      <li class=\"menu-content-container {{ title?.length > 0 ? 'has-title' : '' }}\">\n        <gl-shared-component-menu-item\n          *ngFor=\"let menuItem of menuItems\"\n          [absolute]=\"menuItem.absolute\"\n          [alt]=\"menuItem.alt\"\n          [src]=\"menuItem.src\"\n          [routerLink]=\"menuItem.href\"\n          [href]=\"menuItem.href\"\n          [content]=\"menuItem.content\"\n          [itemClass]=\"menuItem.class\"\n          [target]=\"menuItem.target\"\n        ></gl-shared-component-menu-item>\n        <gl-shared-component-menu-item\n          *ngFor=\"let menuItem of menuItemsComplex\"\n          [absolute]=\"menuItem.absolute\"\n          [alt]=\"menuItem.alt\"\n          [src]=\"menuItem.src\"\n          [routerLink]=\"menuItem.href\"\n          [href]=\"menuItem.href\"\n          [content]=\"menuItem.content\"\n          [itemClass]=\"menuItem.class\"\n          [hasSubitem]=\"menuItem.hasSubitem\"\n          [active]=\"menuItem.active\"\n          [target]=\"menuItem.target\"\n          [subItems]=\"menuItem.subItems\"\n        ></gl-shared-component-menu-item>\n      </li>\n      <li class=\"logo-main-container\">\n        <div class=\"logo-container\">\n          <img class=\"main-logo\" [src]=\"menuLogo\" alt=\"Menu Logo\"/>\n          <span class=\"main-logo-title\">{{ menuBottomTitle }}</span>\n          <span class=\"main-logo-title\">{{ menuBottomVersion == null ? 'Version: ' + systemVersion : menuBottomVersion }}</span>\n        </div>\n      </li>\n    </ul>\n  </nav>\n</div>\n",
            styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep .menu-container{border-top:.3em solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5;border-bottom:0 solid transparent!important;background:0 0/cover #1a1b1d;position:fixed;top:0;bottom:0;overflow:hidden;width:85vw;max-width:17em;min-width:17em;z-index:10000;flex-grow:1;display:flex;height:100vh}:host::ng-deep .menu-container::after{width:100%;height:.7em;left:0;bottom:.7em;margin-bottom:-.7em;content:\"\";position:absolute;background:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%)}:host::ng-deep .menu-container.left{left:-110%;transition:left .5s ease-in-out}:host::ng-deep .menu-container.right{right:-110%;transition:right .5s ease-in-out}:host::ng-deep .menu-container .a{display:block;min-height:3em}:host::ng-deep .menu-container .menu-nav-container{overflow:hidden;scrollbar-width:none;max-height:100%;flex-grow:1;display:flex}:host::ng-deep .menu-container .menu-nav-container .menu-content{display:flex;flex-direction:column;flex-grow:1;position:relative}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container{max-width:17em}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header{display:flex;flex-direction:column;margin:.5em 1em 1em .5em}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-top-icons-container{display:flex;margin:0 0 1.5em}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-top-icons-container .close-menu,:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-top-icons-container .settings-menu{cursor:pointer;height:1.5em;width:1.5em}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-top-icons-container .close-menu:active,:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-top-icons-container .close-menu:hover,:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-top-icons-container .settings-menu:active,:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-top-icons-container .settings-menu:hover{opacity:1;-webkit-animation:.4s ease-in-out forwards increase-decrease;animation:.4s ease-in-out forwards increase-decrease}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-top-icons-container .close-menu{margin:0 .2em 0 0}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-header-title .subtitle,:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-header-title .title{text-transform:uppercase;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#fff;margin:0;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-header-title .title{font-family:Montserrat,sans-serif;font-weight:700;font-size:.9em}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-header-title .subtitle{font-family:Montserrat,sans-serif;font-weight:100;font-size:1.5em}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .admin-settings{visibility:collapse}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-item-container{display:flex;flex-direction:column;font-size:.8em;background-color:rgba(255,255,255,.3)}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-item-container .menu-item{min-height:3em;font-size:.8em;display:flex;align-items:center;padding:.2em;transition:.2s ease-in-out}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-item-container .menu-item:nth-child(n+2){border-top:1px solid;border-image-source:linear-gradient(90deg,transparent 15%,rgba(255,255,255,.1) 15.01%,rgba(255,255,255,.05) 98%,transparent 98%);border-image-slice:1}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-item-container .menu-item:hover{background-color:rgba(75,77,82,.3)}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-item-container .menu-icons{margin:0 0 0 .7em;height:1.8em;width:1.8em;opacity:.5}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-item-container a{color:rgba(255,255,255,.6);padding:.8em;flex-grow:1;text-decoration:none}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-content-container{max-height:calc(100vh - (12.15em));max-width:17em;overflow-y:auto;overflow-x:hidden!important}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-content-container.has-title{max-height:calc(100vh - (13em))}:host::ng-deep .menu-container .menu-nav-container .logo-container{display:flex;flex-direction:column;align-items:center;bottom:5vh;position:absolute;width:100%}:host::ng-deep .menu-container .menu-nav-container .logo-container .main-logo{height:2em;width:2em}:host::ng-deep .menu-container .menu-nav-container .logo-container .main-logo-title{color:#fff;font-size:.4em;margin:1em 0 0}:host::ng-deep .show-admin-settings{visibility:visible!important}:host::ng-deep .menu-container.menu-active.left{left:0}:host::ng-deep .menu-container.menu-active.right{right:0}:host::ng-deep .menu-background{opacity:0;z-index:-100}:host::ng-deep .visible-background{width:100%;height:100%;background:rgba(0,0,0,.6);opacity:1;position:fixed;top:0;z-index:999;transition:opacity 1s ease-in-out}:host::ng-deep .hide-subtitle{opacity:0;visibility:collapse;margin:0;padding:0;transition:.25s ease-in-out}:host::ng-deep .show-subtitle{opacity:1;visibility:visible;transition:.25s ease-in-out .4s}:host::ng-deep .hide-subtitle-container{-webkit-animation:.4s ease-in-out forwards hide-subtitle;animation:.4s ease-in-out forwards hide-subtitle}:host::ng-deep .show-subtitle-container{-webkit-animation:.4s ease-in-out forwards show-subtitle;animation:.4s ease-in-out forwards show-subtitle}:host::ng-deep .collapsed-menu .expand{transform:rotate(0);transition:.4s ease-in-out}:host::ng-deep .collapsed-menu .menu-icons{-webkit-animation:.4s ease-in-out forwards decrease-increase;animation:.4s ease-in-out forwards decrease-increase}:host::ng-deep .expanded-menu .expand{transform:rotate(-180deg);transition:.4s ease-in-out}:host::ng-deep .expanded-menu .menu-icons{-webkit-animation:.4s ease-in-out forwards increase-decrease;animation:.4s ease-in-out forwards increase-decrease}:host::ng-deep .menu-container.dark{border-left:1px solid #38393c;border-top:.3em solid rgba(210,64,119,.7);border-image-source:none}:host::ng-deep .menu-container.translucid{background:rgba(255,255,255,.05);border-left:1px solid rgba(255,255,255,.05);border-top:.3em solid rgba(255,255,255,.1);border-image-source:none}"]
        })
    ], GlSharedComponentMenuComponent);
    return GlSharedComponentMenuComponent;
}());

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
    GlSharedComponentMenuItemComponent = __decorate([
        Component({
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
        })
    ], GlSharedComponentMenuItemComponent);
    return GlSharedComponentMenuItemComponent;
}());

var GlSharedComponentFooterSimpleComponent = /** @class */ (function () {
    function GlSharedComponentFooterSimpleComponent() {
        this.imageDescription = 'Image logo';
    }
    __decorate([
        Input()
    ], GlSharedComponentFooterSimpleComponent.prototype, "description", void 0);
    __decorate([
        Input()
    ], GlSharedComponentFooterSimpleComponent.prototype, "imageLogo", void 0);
    __decorate([
        Input()
    ], GlSharedComponentFooterSimpleComponent.prototype, "imageDescription", void 0);
    GlSharedComponentFooterSimpleComponent = __decorate([
        Component({
            selector: 'gl-shared-component-footer-simple',
            template: "<section class=\"footer-container\">\n  <span class=\"description\">{{ description }}</span>\n  <img\n    *ngIf=\"imageLogo != null\"\n    class=\"image-logo\"\n    [alt]=\"imageDescription\"\n    [src]=\"imageLogo\">\n</section>\n",
            styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep{z-index:100;max-width:100vw;min-width:100vw;position:fixed;bottom:0;flex-grow:1}:host::ng-deep .footer-container{position:relative;display:flex;justify-content:center;background-color:#1a1b1d;border-top:.1em solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5;height:1.3em;z-index:99}:host::ng-deep .footer-container .description{font-family:Montserrat,sans-serif;font-weight:300;text-transform:uppercase;padding:1em;color:#fff;font-size:.5em;letter-spacing:.14em}:host::ng-deep .footer-container .image-logo{height:1em;margin:0 0 0 .3em}"]
        })
    ], GlSharedComponentFooterSimpleComponent);
    return GlSharedComponentFooterSimpleComponent;
}());

var GlSharedComponentInputButtonHyperlinkComponent = /** @class */ (function () {
    function GlSharedComponentInputButtonHyperlinkComponent() {
    }
    __decorate([
        Input()
    ], GlSharedComponentInputButtonHyperlinkComponent.prototype, "imageSrc", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputButtonHyperlinkComponent.prototype, "imageDescription", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputButtonHyperlinkComponent.prototype, "description", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputButtonHyperlinkComponent.prototype, "link", void 0);
    GlSharedComponentInputButtonHyperlinkComponent = __decorate([
        Component({
            selector: 'gl-shared-component-input-button-hyperlink',
            template: "<div class=\"hyperlink-container\">\n  <img\n    class=\"logo\"\n    [src]=\"imageSrc\"\n    [alt]=\"imageDescription\">\n  <a\n    class=\"message\"\n    [href]=\"link\"\n    target=\"_blank\">{{ description }}</a>\n</div>\n",
            styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep .hyperlink-container{display:flex;flex-direction:row;align-items:center;position:absolute;right:.3em;bottom:.3em}:host::ng-deep .hyperlink-container .logo{width:.7em;height:.7em;margin:0 .2em 0 0}:host::ng-deep .hyperlink-container .message{margin:0 0 0 .2em;font-family:Montserrat,sans-serif;font-weight:400;font-size:.5em;color:#ff9800}"]
        })
    ], GlSharedComponentInputButtonHyperlinkComponent);
    return GlSharedComponentInputButtonHyperlinkComponent;
}());

var GlSharedComponentFooterContainerComponent = /** @class */ (function () {
    function GlSharedComponentFooterContainerComponent() {
        this.imageDescription = 'Image logo';
    }
    __decorate([
        Input()
    ], GlSharedComponentFooterContainerComponent.prototype, "description", void 0);
    __decorate([
        Input()
    ], GlSharedComponentFooterContainerComponent.prototype, "imageLogo", void 0);
    __decorate([
        Input()
    ], GlSharedComponentFooterContainerComponent.prototype, "imageDescription", void 0);
    GlSharedComponentFooterContainerComponent = __decorate([
        Component({
            selector: 'gl-shared-component-footer-container',
            template: "<section class=\"footer-container\">\n  <span class=\"description\">{{ description }}</span>\n  <img\n    *ngIf=\"imageLogo != null\"\n    class=\"image-logo\"\n    [alt]=\"imageDescription\"\n    [src]=\"imageLogo\">\n  <div class=\"user-container\">\n    <ng-content></ng-content>\n  </div>\n</section>\n",
            styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep{z-index:100;max-width:100vw;min-width:100vw;position:fixed;bottom:0;flex-grow:1}:host::ng-deep .footer-container{position:relative;display:flex;justify-content:center;background-color:#1a1b1d;border-top:.1em solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5;height:1.3em;z-index:99}:host::ng-deep .footer-container .description{font-family:Montserrat,sans-serif;font-weight:300;text-transform:uppercase;padding:1em;color:#fff;font-size:.5em;letter-spacing:.14em}:host::ng-deep .footer-container .image-logo{height:1em;margin:0 0 0 .3em}:host::ng-deep .footer-container .user-container{align-self:flex-end;margin:0 .3em 0 0}:host::ng-deep .footer-container .user-container .user-container{display:flex;align-items:center;justify-content:center}"]
        })
    ], GlSharedComponentFooterContainerComponent);
    return GlSharedComponentFooterContainerComponent;
}());

var GlSharedComponentErrorMessageComponent = /** @class */ (function () {
    function GlSharedComponentErrorMessageComponent() {
        this.position = 'left';
        this.buttonAction$ = new EventEmitter();
    }
    GlSharedComponentErrorMessageComponent.prototype.buttonAction = function () {
        this.buttonAction$.emit();
    };
    __decorate([
        Input()
    ], GlSharedComponentErrorMessageComponent.prototype, "position", void 0);
    __decorate([
        Input()
    ], GlSharedComponentErrorMessageComponent.prototype, "errorCode", void 0);
    __decorate([
        Input()
    ], GlSharedComponentErrorMessageComponent.prototype, "errorMessage", void 0);
    __decorate([
        Input()
    ], GlSharedComponentErrorMessageComponent.prototype, "buttonLabel", void 0);
    __decorate([
        Output()
    ], GlSharedComponentErrorMessageComponent.prototype, "buttonAction$", void 0);
    GlSharedComponentErrorMessageComponent = __decorate([
        Component({
            selector: 'gl-shared-component-error-message',
            template: "<div class=\"content-container {{ position === 'right' ? 'right' : 'left' }}\">\n  <h1 class=\"main-title\">{{ errorCode }}</h1>\n  <h2 class=\"message\">{{ errorMessage }}</h2>\n  <gl-shared-component-input-button-simple\n    class=\"home-button\"\n    [innerValue]=\"buttonLabel\"\n    (click)=\"buttonAction()\"\n  ></gl-shared-component-input-button-simple>\n</div>\n",
            styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep{display:flex;flex-grow:1}:host::ng-deep .content-container{display:flex;flex-direction:column;position:absolute;top:25%;justify-content:center;align-content:center;text-align:center;align-items:center}:host::ng-deep .content-container.right{right:10vw}:host::ng-deep .content-container.left{left:10vw}:host::ng-deep .content-container .main-title{font-family:Montserrat,sans-serif;font-weight:800;color:rgba(255,255,255,.3);font-size:11em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host::ng-deep .content-container .message{font-family:Montserrat,sans-serif;font-weight:100;color:rgba(255,255,255,.3);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:1.5em}:host::ng-deep .content-container gl-shared-component-input-button-simple{display:block;align-items:center;flex-direction:column;margin:3em 0}:host::ng-deep .content-container gl-shared-component-input-button-simple .default-button{border-radius:10em;display:block;padding:1.5em 4em;background-color:rgba(0,0,0,.4);font-family:Montserrat,sans-serif;font-weight:300}"]
        })
    ], GlSharedComponentErrorMessageComponent);
    return GlSharedComponentErrorMessageComponent;
}());

var GlSharedComponentLogoSquareComponent = /** @class */ (function () {
    function GlSharedComponentLogoSquareComponent() {
        this.horizontalPosition = 'left';
        this.verticalPosition = 'top';
    }
    __decorate([
        Input()
    ], GlSharedComponentLogoSquareComponent.prototype, "imageScr", void 0);
    __decorate([
        Input()
    ], GlSharedComponentLogoSquareComponent.prototype, "imageAlt", void 0);
    __decorate([
        Input()
    ], GlSharedComponentLogoSquareComponent.prototype, "horizontalPosition", void 0);
    __decorate([
        Input()
    ], GlSharedComponentLogoSquareComponent.prototype, "verticalPosition", void 0);
    GlSharedComponentLogoSquareComponent = __decorate([
        Component({
            selector: 'gl-shared-component-logo-square',
            template: "<img\n  class=\"logo {{ horizontalPosition == 'right' ? 'right' : 'left' }} {{ verticalPosition == 'bottom' ? 'bottom' : 'top' }}\"\n  [src]=\"imageScr\"\n  [alt]=\"imageAlt\">\n",
            styles: [":host::ng-deep .logo{width:3em;height:3em;position:absolute;opacity:.1}:host::ng-deep .logo.top{top:1em}:host::ng-deep .logo.right{right:1em}:host::ng-deep .logo.bottom{bottom:1em}:host::ng-deep .logo.left{left:1em}"]
        })
    ], GlSharedComponentLogoSquareComponent);
    return GlSharedComponentLogoSquareComponent;
}());

var GlSharedComponentButtonImageSimpleComponent = /** @class */ (function () {
    function GlSharedComponentButtonImageSimpleComponent() {
    }
    __decorate([
        Input()
    ], GlSharedComponentButtonImageSimpleComponent.prototype, "id", void 0);
    __decorate([
        Input()
    ], GlSharedComponentButtonImageSimpleComponent.prototype, "alt", void 0);
    __decorate([
        Input()
    ], GlSharedComponentButtonImageSimpleComponent.prototype, "src", void 0);
    __decorate([
        Input()
    ], GlSharedComponentButtonImageSimpleComponent.prototype, "callback", void 0);
    GlSharedComponentButtonImageSimpleComponent = __decorate([
        Component({
            selector: 'gl-shared-component-button-image-simple',
            template: "<img\n  class=\"button\"\n  [id]=\"id\"\n  [src]=\"src\"\n  [alt]=\"alt\"\n  (click)=\"callback($event)\">\n",
            styles: [":host::ng-deep{display:flex;align-items:center}:host::ng-deep .button{width:1em;height:1em}:host::ng-deep .button:not(hover){opacity:.5;transform:scale(1);transition:.2s ease-in-out}:host::ng-deep .button:hover{opacity:1;transform:scale(1.1);transition:.2s ease-in-out}"]
        })
    ], GlSharedComponentButtonImageSimpleComponent);
    return GlSharedComponentButtonImageSimpleComponent;
}());

var GlSharedComponentButtonImageTooltipComponent = /** @class */ (function () {
    function GlSharedComponentButtonImageTooltipComponent() {
        this.show = true;
    }
    __decorate([
        Input()
    ], GlSharedComponentButtonImageTooltipComponent.prototype, "id", void 0);
    __decorate([
        Input()
    ], GlSharedComponentButtonImageTooltipComponent.prototype, "alt", void 0);
    __decorate([
        Input()
    ], GlSharedComponentButtonImageTooltipComponent.prototype, "src", void 0);
    __decorate([
        Input()
    ], GlSharedComponentButtonImageTooltipComponent.prototype, "show", void 0);
    __decorate([
        Input()
    ], GlSharedComponentButtonImageTooltipComponent.prototype, "callback", void 0);
    GlSharedComponentButtonImageTooltipComponent = __decorate([
        Component({
            selector: 'gl-shared-component-button-image-tooltip',
            template: "<div\n  *ngIf=\"show\"\n  [class.hidden]=\"!show\"\n  [id]=\"id\"\n  [attr.tooltip]=\"alt\"\n  class=\"tooltip top\">\n  <gl-shared-component-button-image-simple\n    [src]=\"src\"\n    [alt]=\"alt\"\n    [id]=\"id\"\n    [callback]=\"callback\"\n  ></gl-shared-component-button-image-simple>\n</div>\n",
            styles: [".tooltip-menu{z-index:100;position:relative;display:flex}.tooltip-menu::before{content:\"\";position:absolute;left:80%;transform:translateX(-137%) translateY(100%) rotate(180deg);border-width:.2em .2em 0;border-style:solid;border-color:#fff transparent transparent;z-index:100}.tooltip-menu::after{content:attr(tooltip);position:absolute;left:80%;transform:translateX(-57%) translateY(124%);background:#fff;text-align:left;color:#64666c;font-weight:600;padding:.5em 1em;width:-webkit-max-content;width:-moz-max-content;width:max-content;max-width:50em;border:none;pointer-events:none;white-space:nowrap;line-height:1.5em;font-size:.4em}.tooltip-menu:not(hover)::before{opacity:0;bottom:-.3em;transition:.1s ease-in-out}.tooltip-menu:not(hover)::after{opacity:0;bottom:0;transition:.1s ease-in-out}.tooltip-menu:hover::after,.tooltip-menu:hover::before{opacity:1;bottom:-.11em;transition:.1s ease-in-out}.tooltip.top{z-index:1000;position:relative}.tooltip.top::before{content:\"\";position:absolute;left:82%;border-width:.2em .2em 0;border-style:solid;border-color:#fff transparent transparent;z-index:100;transform:translateX(-200%) translateY(90%)}.tooltip.top::after{content:attr(tooltip);position:absolute;background:#fff;text-align:center;color:#64666c;font-weight:300;padding:.5em 1em;width:-webkit-max-content;width:-moz-max-content;width:max-content;max-width:50em;border:none;pointer-events:none;white-space:nowrap;line-height:1.5em;font-size:.4em;height:1.5em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;left:0}.tooltip.top:hover::before,.tooltip.top:not(hover)::before{top:-.5em;left:93%}.tooltip.top:hover::after,.tooltip.top:not(hover)::after{left:0;top:-3.1em}.tooltip.top:not(hover)::after,.tooltip.top:not(hover)::before{opacity:0;transition:.1s ease-in-out}.tooltip.top:hover::after,.tooltip.top:hover::before{opacity:1;transition:.1s ease-in-out}.tooltip.top.status-table{z-index:1000;position:relative}.tooltip.top.status-table::before{content:\"\";position:absolute;left:82%;border-width:.6em .6em 0;border-style:solid;border-color:#fff transparent transparent;z-index:100;transform:translateX(-237%) translateY(-15%)}.tooltip.top.status-table::after{content:attr(tooltip);position:absolute;background:#fff;text-align:center;color:#64666c;font-weight:300;padding:.5em 1em;width:-webkit-max-content;width:-moz-max-content;width:max-content;max-width:50em;border:none;pointer-events:none;white-space:nowrap;line-height:1.5em;height:1.5em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;left:0;font-size:.9em}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.tooltip-menu{margin:0 0 0 .3em;width:1.5em}.tooltip-menu::before{transform:translateX(-150%) translateY(100%) rotate(180deg)}.tooltip-menu::after{font-size:11.5px;transform:translateX(-55%) translateY(124%)}.tooltip.top.status-table::after{left:.9em;font-size:2em}}.tooltip.top.status-table:not(hover)::after,.tooltip.top.status-table:not(hover)::before{opacity:0;transition:.1s ease-in-out}.tooltip.top.status-table:hover::after,.tooltip.top.status-table:hover::before{opacity:1;transition:.1s ease-in-out}.tooltip.bottom{z-index:1000;position:relative}.tooltip.bottom::before{content:\"\";position:absolute;border-width:.2em .2em 0;border-style:solid;border-color:#fff transparent transparent;z-index:100;left:107%;transform:translateX(-137%) translateY(100%) rotate(180deg)}.tooltip.bottom::after{content:attr(tooltip);position:absolute;background:#fff;text-align:center;color:#64666c;font-weight:300;padding:.5em 1em;width:-webkit-max-content;width:-moz-max-content;width:max-content;max-width:50em;border:none;pointer-events:none;white-space:nowrap;line-height:1.5em;font-size:.4em;height:1.5em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.tooltip.bottom:hover::before,.tooltip.bottom:not(hover)::before{bottom:.1em}.tooltip.bottom:hover::after,.tooltip.bottom:not(hover)::after{left:0;bottom:-2.7em}.tooltip.bottom:not(hover)::after,.tooltip.bottom:not(hover)::before{opacity:0;transition:.1s ease-in-out}.tooltip.bottom:hover::after,.tooltip.bottom:hover::before{opacity:1;transition:.1s ease-in-out}.tooltip.bottom-right{z-index:1000;position:relative}.tooltip.bottom-right::before{content:\"\";position:absolute;left:82%;border-width:.2em .2em 0;border-style:solid;border-color:#fff transparent transparent;z-index:100;transform:translateX(-137%) translateY(100%) rotate(180deg)}.tooltip.bottom-right::after{content:attr(tooltip);position:absolute;background:#fff;text-align:center;color:#64666c;font-weight:300;padding:.5em 1em;width:-webkit-max-content;width:-moz-max-content;width:max-content;max-width:50em;border:none;pointer-events:none;white-space:nowrap;line-height:1.5em;font-size:.4em;height:1.5em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.tooltip.bottom-right:hover::before,.tooltip.bottom-right:not(hover)::before{left:94%}.tooltip.bottom-right:hover::after,.tooltip.bottom-right:not(hover)::after{left:-200%;bottom:-2.7em}.tooltip.bottom-right:not(hover)::after,.tooltip.bottom-right:not(hover)::before{opacity:0;transition:.1s ease-in-out}.tooltip.bottom-right:hover::after,.tooltip.bottom-right:hover::before{opacity:1;transition:.1s ease-in-out}.tooltip.bottom-gantt{z-index:1000;position:relative}.tooltip.bottom-gantt::before{content:\"\";position:absolute;left:82%;border-width:.2em .2em 0;border-style:solid;border-color:#fff transparent transparent;z-index:100;transform:translateX(-137%) translateY(100%) rotate(180deg)}.tooltip.bottom-gantt::after{content:attr(tooltip);position:absolute;background:#fff;text-align:center;color:#64666c;font-weight:300;padding:.5em 1em;width:-webkit-max-content;width:-moz-max-content;width:max-content;max-width:50em;border:none;pointer-events:none;white-space:nowrap;line-height:1.5em;font-size:.4em;height:1.5em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.tooltip.bottom-gantt::after{font-size:11.5px}}.tooltip.bottom-gantt:hover::before,.tooltip.bottom-gantt:not(hover)::before{left:83%;bottom:-.1em}.tooltip.bottom-gantt:hover::after,.tooltip.bottom-gantt:not(hover)::after{left:0;bottom:-3.1em}.tooltip.bottom-gantt:not(hover)::after,.tooltip.bottom-gantt:not(hover)::before{opacity:0;transition:.1s ease-in-out}.tooltip.bottom-gantt:hover::after,.tooltip.bottom-gantt:hover::before{opacity:1;transition:.1s ease-in-out}.tooltip.bottom-menu{z-index:1000;position:relative}.tooltip.bottom-menu::before{content:\"\";position:absolute;left:82%;border-width:.2em .2em 0;border-style:solid;border-color:#fff transparent transparent;z-index:100;transform:translateX(-137%) translateY(100%) rotate(180deg)}.tooltip.bottom-menu::after{content:attr(tooltip);position:absolute;background:#fff;text-align:center;color:#64666c;font-weight:300;padding:.5em 1em;width:-webkit-max-content;width:-moz-max-content;width:max-content;max-width:50em;border:none;pointer-events:none;white-space:nowrap;line-height:1.5em;font-size:.4em;height:1.5em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.tooltip.bottom-menu:hover::before,.tooltip.bottom-menu:not(hover)::before{left:74%;bottom:-.1em}.tooltip.bottom-menu:hover::after,.tooltip.bottom-menu:not(hover)::after{left:-64%;bottom:-3.1em}.tooltip.bottom-menu:not(hover)::after,.tooltip.bottom-menu:not(hover)::before{opacity:0;transition:.1s ease-in-out}.tooltip.bottom-menu:hover::after,.tooltip.bottom-menu:hover::before{opacity:1;transition:.1s ease-in-out}:host::ng-deep{display:flex;align-items:center;justify-content:center;margin:0}:host::ng-deep .tooltip{display:flex;align-items:center}:host::ng-deep .tooltip::after{transform:translateX(-20%)}:host::ng-deep .tooltip::before{left:108%!important}"]
        })
    ], GlSharedComponentButtonImageTooltipComponent);
    return GlSharedComponentButtonImageTooltipComponent;
}());

var GlSharedComponentButtonMenuSimpleComponent = /** @class */ (function () {
    function GlSharedComponentButtonMenuSimpleComponent() {
        this.disabled = false;
    }
    __decorate([
        Input()
    ], GlSharedComponentButtonMenuSimpleComponent.prototype, "disabled", void 0);
    __decorate([
        Input()
    ], GlSharedComponentButtonMenuSimpleComponent.prototype, "src", void 0);
    __decorate([
        Input()
    ], GlSharedComponentButtonMenuSimpleComponent.prototype, "id", void 0);
    __decorate([
        Input()
    ], GlSharedComponentButtonMenuSimpleComponent.prototype, "alt", void 0);
    __decorate([
        Input()
    ], GlSharedComponentButtonMenuSimpleComponent.prototype, "callback", void 0);
    GlSharedComponentButtonMenuSimpleComponent = __decorate([
        Component({
            selector: 'gl-shared-component-button-menu-simple',
            template: "<img\n  [id]=\"id\"\n  class=\"menu-buttons\"\n  [src]=\"src\"\n  [alt]=\"alt\"\n  (click)=\"callback\">\n",
            styles: [":host{height:1.45em}:host .menu-buttons{height:1.5em;width:1.5em;margin:0 0 0 .1em;cursor:pointer}:host .menu-buttons:hover{transform:scale(1.01);opacity:1;transition:.1s ease-in-out}:host .menu-buttons:not(hover){transform:scale(1);opacity:.9;transition:.2s ease-in-out}"]
        })
    ], GlSharedComponentButtonMenuSimpleComponent);
    return GlSharedComponentButtonMenuSimpleComponent;
}());

var GlSharedComponentButtonMenuTooltipComponent = /** @class */ (function () {
    function GlSharedComponentButtonMenuTooltipComponent() {
        this.disabled = false;
    }
    __decorate([
        Input()
    ], GlSharedComponentButtonMenuTooltipComponent.prototype, "disabled", void 0);
    __decorate([
        Input()
    ], GlSharedComponentButtonMenuTooltipComponent.prototype, "tooltip", void 0);
    __decorate([
        Input()
    ], GlSharedComponentButtonMenuTooltipComponent.prototype, "src", void 0);
    __decorate([
        Input()
    ], GlSharedComponentButtonMenuTooltipComponent.prototype, "id", void 0);
    __decorate([
        Input()
    ], GlSharedComponentButtonMenuTooltipComponent.prototype, "alt", void 0);
    __decorate([
        Input()
    ], GlSharedComponentButtonMenuTooltipComponent.prototype, "callback", void 0);
    GlSharedComponentButtonMenuTooltipComponent = __decorate([
        Component({
            selector: 'gl-shared-component-button-menu-tooltip',
            template: "<div [attr.alt]=\"alt\" class=\"tooltip-menu\" *ngIf=\"!disabled\">\n  <gl-shared-component-button-menu-simple\n    [src]=\"src\"\n    [id]=\"id\"\n    [alt]=\"alt\"\n    (click)=\"callback($event)\"\n  ></gl-shared-component-button-menu-simple>\n</div>\n",
            styles: [".tooltip-menu{z-index:100;position:relative;display:flex}.tooltip-menu::before{content:\"\";position:absolute;left:80%;transform:translateX(-137%) translateY(100%) rotate(180deg);border-width:.2em .2em 0;border-style:solid;border-color:#fff transparent transparent;z-index:100}.tooltip-menu::after{content:attr(alt);position:absolute;left:50%;transform:translateX(-85%) translateY(124%);background:#fff;text-align:left;color:#64666c;font-weight:600;padding:.5em 1em;width:-webkit-max-content;width:-moz-max-content;width:max-content;max-width:50em;border:none;pointer-events:none;white-space:nowrap;line-height:1.5em;font-size:.4em}.tooltip-menu:not(hover)::before{opacity:0;bottom:-.3em;transition:.1s ease-in-out}.tooltip-menu:not(hover)::after{opacity:0;bottom:0;transition:.1s ease-in-out}.tooltip-menu:hover::after,.tooltip-menu:hover::before{opacity:1;bottom:-.11em;transition:.1s ease-in-out}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){:host::ng-deep{display:block}}"]
        })
    ], GlSharedComponentButtonMenuTooltipComponent);
    return GlSharedComponentButtonMenuTooltipComponent;
}());

var GlSharedComponentInputAutocompleteSimpleService = /** @class */ (function () {
    function GlSharedComponentInputAutocompleteSimpleService() {
        this.autocompleteList$ = new Subject();
        this.autocompleteReset$ = new Subject();
        this.autocompleteLoaded$ = new Subject();
        this.autocompleteUpdateValue$ = new Subject();
    }
    GlSharedComponentInputAutocompleteSimpleService.prototype.ngOnDestroy = function () {
        this.autocompleteList$.observers.map(function (x) { return x.complete(); });
        this.autocompleteLoaded$.observers.map(function (x) { return x.complete(); });
        this.autocompleteReset$.observers.map(function (x) { return x.complete(); });
        this.autocompleteUpdateValue$.observers.map(function (x) { return x.complete(); });
    };
    GlSharedComponentInputAutocompleteSimpleService.ɵprov = ɵɵdefineInjectable({ factory: function GlSharedComponentInputAutocompleteSimpleService_Factory() { return new GlSharedComponentInputAutocompleteSimpleService(); }, token: GlSharedComponentInputAutocompleteSimpleService, providedIn: "root" });
    GlSharedComponentInputAutocompleteSimpleService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], GlSharedComponentInputAutocompleteSimpleService);
    return GlSharedComponentInputAutocompleteSimpleService;
}());

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
    GlSharedComponentInputAutocompleteSimpleComponent = __decorate([
        Component({
            selector: 'gl-shared-component-input-autocomplete-simple',
            template: "<ng-content></ng-content>\n<div class=\"input-container custom-combobox {{ class }} {{ disabled ? 'read-only' : '' }} {{ listItems.length > 0 ? '' : 'no-data' }}\">\n  <mat-form-field\n    (focusout)=\"overlay.position().global().dispose()\"\n    floatLabel=\"never\"\n    appearance=\"none\">\n    <div class=\"combobox-container {{ listItems.length > 0 ? '' : 'no-data' }} {{ disabled ? 'read-only' : '' }}\">\n      <input\n        #input\n        type=\"text\"\n        aria-label=\"Number\"\n        class=\"item-content {{ itemContentAlignment }} {{ class }} {{ listItems.length > 0 ? '' : 'no-data' }} {{ disabled ? 'read-only' : '' }}\"\n        matInput\n        [readonly]=\"disabled\"\n        [id]=\"id\"\n        [placeholder]=\"placeholder\"\n        [formControl]=\"autocompleteInput\"\n        [maxLength]=\"maxLength\"\n        [matAutocomplete]=\"auto\"\n        (focusin)=\"reset(auto, $event)\"\n        (focusout)=\"validate()\">\n      <!--    <img-->\n      <!--      *ngIf=\"!disabled\"-->\n      <!--      (click)=\"clearItems(input)\"-->\n      <!--      alt=\"Clear items\"-->\n      <!--      class=\"clear-items\"-->\n      <!--      [src]=\"clearSource\">-->\n\n      <!--    <img-->\n      <!--      #arrowDown-->\n      <!--      (click)=\"clearItems(input)\"-->\n      <!--      alt=\"Show items\"-->\n      <!--      class=\"arrow-down {{ class }} {{ disabled ? 'read-only' : '' }}\"-->\n      <!--      [src]=\"imageSource\">-->\n    </div>\n    <mat-autocomplete autoActiveFirstOption=\"true\" #auto=\"matAutocomplete\" (optionSelected)=\"input.blur()\" [mat-dialog-close]=\"overlay.position().global().dispose()\">\n      <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option.text\">\n        {{option.text}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n  <img\n    #arrowDown\n    (click)=\"clearItems(input)\"\n    alt=\"Show items\"\n    class=\"arrow-down {{ class }} {{ disabled ? 'read-only' : '' }}\"\n    [src]=\"imageSource\">\n</div>\n\n",
            styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);::ng-deep .dark .mat-autocomplete-panel,::ng-deep .light .mat-autocomplete-panel,::ng-deep .mat-autocomplete-panel{scrollbar-face-color:#333437!important;scrollbar-shadow-color:#38393c!important;scrollbar-track-color:#2c2c2f!important;scrollbar-arrow-color:#64666c!important}::ng-deep .mat-autocomplete-panel::-webkit-scrollbar:horizontal{height:.5em}::ng-deep .dark .mat-autocomplete-panel::-webkit-scrollbar,::ng-deep .light .mat-autocomplete-panel::-webkit-scrollbar,::ng-deep .mat-autocomplete-panel::-webkit-scrollbar{width:.5em}::ng-deep .dark .mat-autocomplete-panel::-webkit-scrollbar-button,::ng-deep .light .mat-autocomplete-panel::-webkit-scrollbar-button,::ng-deep .mat-autocomplete-panel::-webkit-scrollbar-button{background-color:#333437;display:none!important}::ng-deep .dark .mat-autocomplete-panel::-webkit-scrollbar-track-piece,::ng-deep .light .mat-autocomplete-panel::-webkit-scrollbar-track-piece,::ng-deep .mat-autocomplete-panel::-webkit-scrollbar-track-piece{background-color:#2c2c2f}::ng-deep .dark .mat-autocomplete-panel::-webkit-scrollbar-thumb,::ng-deep .light .mat-autocomplete-panel::-webkit-scrollbar-thumb,::ng-deep .mat-autocomplete-panel::-webkit-scrollbar-thumb{background-color:#64666c;border:1px solid #38393c}:host::ng-deep{display:flex;flex-direction:column;flex:1 0 auto;position:relative}:host::ng-deep .input-container{display:flex;flex-grow:1;align-items:center;background-color:#333437}:host::ng-deep .input-container mat-form-field{display:flex;flex-grow:1;margin:0}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper{display:flex;flex-grow:1;flex-direction:column;padding:0}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex{display:flex;flex-grow:1;align-items:inherit}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix{padding:0;flex:1 1 0px;border:none;width:100%;display:flex}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container{display:flex;flex-grow:1;flex-direction:row;pointer-events:none}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element{font-family:Montserrat,sans-serif;font-weight:400;position:relative;padding:.8em;border:none;background-color:#333437;color:#fff;font-size:.45em;flex-grow:1;margin:0}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element::-moz-placeholder{color:#64666c!important}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element:-ms-input-placeholder{color:#64666c!important}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element::-ms-input-placeholder{color:#64666c!important}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element::placeholder{color:#64666c!important}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.left{text-align:left}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.center{text-align:center}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.right{text-align:right}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.light{background-color:rgba(0,0,0,.1)}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.light::-moz-placeholder{color:rgba(255,255,255,.2)!important}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.light:-ms-input-placeholder{color:rgba(255,255,255,.2)!important}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.light::-ms-input-placeholder{color:rgba(255,255,255,.2)!important}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.light::placeholder{color:rgba(255,255,255,.2)!important}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.dark{background-color:#161617}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element .item-content:-ms-input-placeholder{color:#64666c!important}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element .item-content.light:-ms-input-placeholder{color:gray!important}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .clear-items{width:.5em;height:.5em;position:absolute;right:1.5em;top:.4em}:host::ng-deep .input-container .arrow-down{background-color:#333437;width:.8em;height:.8em;padding:0 .3em;transition:.2s ease-in-out}:host::ng-deep .input-container .arrow-down:hover{background-color:#2c2c2f;transition:.2s ease-in-out}:host::ng-deep .input-container .arrow-down.light{background-color:rgba(0,0,0,.1);transition:.2s ease-in-out}:host::ng-deep .input-container .arrow-down.light::-moz-placeholder{color:rgba(255,255,255,.2)!important}:host::ng-deep .input-container .arrow-down.light:-ms-input-placeholder{color:rgba(255,255,255,.2)!important}:host::ng-deep .input-container .arrow-down.light::-ms-input-placeholder{color:rgba(255,255,255,.2)!important}:host::ng-deep .input-container .arrow-down.light::placeholder{color:rgba(255,255,255,.2)!important}:host::ng-deep .input-container .arrow-down.light:hover{background-color:rgba(0,0,0,.2);transition:.2s ease-in-out}:host::ng-deep .input-container .arrow-down.dark{background-color:#161617;transition:.2s ease-in-out}:host::ng-deep .input-container .arrow-down.dark:hover{background-color:#1a1b1d;transition:.2s ease-in-out}:host::ng-deep .input-container .arrow-down.read-only{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}:host::ng-deep .input-container.no-data .arrow-down,:host::ng-deep .input-container.read-only .arrow-down{display:none}::ng-deep .mat-autocomplete-panel{background-color:#38393c;border-radius:0;box-shadow:none!important;transition:.2s ease-in-out}::ng-deep .mat-autocomplete-panel mat-option{font-size:1em;border-radius:0;transition:.2s ease-in-out;line-height:4em;height:4em;padding:0 1.5em}::ng-deep .mat-autocomplete-panel mat-option:nth-child(2n+1){background-color:#333437;transition:.2s ease-in-out}::ng-deep .mat-autocomplete-panel mat-option.mat-active,::ng-deep .mat-autocomplete-panel mat-option.mat-selected{background-color:#d24077;transition:.2s ease-in-out}::ng-deep .mat-autocomplete-panel mat-option:hover{background-color:#b01e45!important;transition:.2s ease-in-out}::ng-deep .light .mat-autocomplete-panel{background-color:transparent;transition:.2s ease-in-out}::ng-deep .light .mat-autocomplete-panel mat-option:nth-child(2n+1){background-color:rgba(0,0,0,.6);transition:.2s ease-in-out}::ng-deep .light .mat-autocomplete-panel mat-option:nth-child(2n+2){background-color:rgba(0,0,0,.7);transition:.2s ease-in-out}::ng-deep .light .mat-autocomplete-panel mat-option.mat-active{background-color:#d24077;transition:.2s ease-in-out}::ng-deep .light .mat-autocomplete-panel mat-option:hover{background-color:#b01e45!important;transition:.2s ease-in-out}::ng-deep .dark .mat-autocomplete-panel{background-color:transparent;transition:.2s ease-in-out}::ng-deep .dark .mat-autocomplete-panel mat-option:nth-child(2n+1){background-color:#2c2c2f;transition:.2s ease-in-out}::ng-deep .dark .mat-autocomplete-panel mat-option:nth-child(2n+2){background-color:#333437;transition:.2s ease-in-out}::ng-deep .dark .mat-autocomplete-panel mat-option.mat-active{background-color:#d24077;transition:.2s ease-in-out}::ng-deep .dark .mat-autocomplete-panel mat-option:hover{background-color:#b01e45!important;transition:.2s ease-in-out}@media screen and (min-device-width:320px) and (max-device-width:1024px){::ng-deep .mat-autocomplete-panel{font-size:2.8vw!important}}@media screen and (min-device-width:1024px){::ng-deep .mat-autocomplete-panel{font-size:.6vw!important}}"]
        })
    ], GlSharedComponentInputAutocompleteSimpleComponent);
    return GlSharedComponentInputAutocompleteSimpleComponent;
}());

var GlSharedComponentInputAutocompleteLabelComponent = /** @class */ (function () {
    function GlSharedComponentInputAutocompleteLabelComponent() {
        this.currentValue = new EventEmitter();
        this.listItems = [];
        this.disabled = false;
        this.requiredField = 'Required field';
    }
    GlSharedComponentInputAutocompleteLabelComponent.prototype.onCurrentValue = function (value) { this.currentValue.emit(value); };
    __decorate([
        Output()
    ], GlSharedComponentInputAutocompleteLabelComponent.prototype, "currentValue", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputAutocompleteLabelComponent.prototype, "listItems", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputAutocompleteLabelComponent.prototype, "disabled", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputAutocompleteLabelComponent.prototype, "listName", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputAutocompleteLabelComponent.prototype, "id", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputAutocompleteLabelComponent.prototype, "labelValue", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputAutocompleteLabelComponent.prototype, "labelAlignment", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputAutocompleteLabelComponent.prototype, "placeholder", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputAutocompleteLabelComponent.prototype, "itemContentAlignment", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputAutocompleteLabelComponent.prototype, "class", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputAutocompleteLabelComponent.prototype, "value", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputAutocompleteLabelComponent.prototype, "required", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputAutocompleteLabelComponent.prototype, "custom", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputAutocompleteLabelComponent.prototype, "baseUrl", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputAutocompleteLabelComponent.prototype, "valueField", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputAutocompleteLabelComponent.prototype, "textField", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputAutocompleteLabelComponent.prototype, "requiredField", void 0);
    GlSharedComponentInputAutocompleteLabelComponent = __decorate([
        Component({
            selector: 'gl-shared-component-input-autocomplete-label',
            template: "<gl-shared-component-input-autocomplete-simple\n  [class]=\"class\"\n  [value]=\"value\"\n  [listName]=\"listName\"\n  (currentValue)=\"onCurrentValue($event)\"\n  [id]=\"id\"\n  [itemContentAlignment]=\"itemContentAlignment\"\n  [placeholder]=\"placeholder\"\n  [listItems]=\"listItems\"\n  [disabled]=\"disabled\"\n\n  [custom]=\"custom\"\n  [baseUrl]=\"baseUrl\"\n  [valueField]=\"valueField\"\n  [textField]=\"textField\"\n  ><gl-shared-component-title-label-simple\n    [id]=\"id\"\n    [labelAlignment]=\"labelAlignment\"\n    [labelValue]=\"labelValue\"\n    [required]=\"required\"\n    [class]=\"class\"\n    [requiredLabel]=\"requiredField\"\n  ></gl-shared-component-title-label-simple>\n</gl-shared-component-input-autocomplete-simple>\n",
            styles: [":host::ng-deep{display:flex}:host::ng-deep gl-shared-component-title-label-simple{flex-grow:0}"]
        })
    ], GlSharedComponentInputAutocompleteLabelComponent);
    return GlSharedComponentInputAutocompleteLabelComponent;
}());

var GlSharedComponentFilterService = /** @class */ (function () {
    function GlSharedComponentFilterService() {
        this.opened = false;
        this.menuHidden$ = new Subject();
    }
    GlSharedComponentFilterService.prototype.initialize = function (container, background, menuNavContainer, router) {
        this.container = container;
        this.background = background;
        this.menuNavContainer = menuNavContainer;
        this.router = router;
        this.menuHidden$.next(true);
    };
    GlSharedComponentFilterService.prototype.backgroundClick = function (event) {
        if (this.opened) {
            this.close(event);
        }
    };
    GlSharedComponentFilterService.prototype.open = function (event) {
        var _this = this;
        event.preventDefault();
        this.applyPartialResult;
        this.container.classList.add('menu-active');
        this.background.classList.add('visible-background');
        setTimeout(function () {
            if (_this.isIE) {
                _this.menuNavContainer.scrollTop = 0;
            }
            else {
                _this.menuNavContainer.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }, 100);
        this.menuHidden$.next(false);
        this.opened = true;
        return true;
    };
    GlSharedComponentFilterService.prototype.close = function (event) {
        event.preventDefault();
        this.container.classList.remove('menu-active');
        this.background.classList.remove('visible-background');
        this.menuHidden$.next(true);
        this.opened = false;
        return false;
    };
    GlSharedComponentFilterService.ɵprov = ɵɵdefineInjectable({ factory: function GlSharedComponentFilterService_Factory() { return new GlSharedComponentFilterService(); }, token: GlSharedComponentFilterService, providedIn: "root" });
    GlSharedComponentFilterService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], GlSharedComponentFilterService);
    return GlSharedComponentFilterService;
}());

var GlSharedComponentFilterComponent = /** @class */ (function () {
    function GlSharedComponentFilterComponent(router, service) {
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
    GlSharedComponentFilterComponent.prototype.ngAfterViewInit = function () {
        this.service.initialize(this.container.nativeElement, this.background.nativeElement, this.menuNavContainer.nativeElement, this.router);
    };
    GlSharedComponentFilterComponent.prototype.onApply = function () {
        this.applyFilter$.emit();
    };
    GlSharedComponentFilterComponent.prototype.onClear = function () {
        this.clearFilter$.emit();
    };
    GlSharedComponentFilterComponent.ctorParameters = function () { return [
        { type: Router },
        { type: GlSharedComponentFilterService }
    ]; };
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
    GlSharedComponentFilterComponent = __decorate([
        Component({
            selector: 'gl-shared-component-filter',
            template: "<gl-shared-component-menu-background\n  #background\n  (click)=\"service.backgroundClick($event)\"\n></gl-shared-component-menu-background>\n<div #container class=\"filter-container {{ type }}\">\n  <div class=\"header-filter-container\">\n    <div class=\"menu-header\">\n      <div class=\"menu-top-icons-container\">\n        <img id=\"close-menu-button\" (click)=\"service.close($event)\" [src]=\"closeButton\" class=\"menu-icons close-menu\" alt=\"Close menu button\">\n      </div>\n      <div class=\"menu-header-title\">\n        <h1 class=\"title\">{{ title }}</h1>\n        <h2 class=\"subtitle\">{{ subtitle }}</h2>\n      </div>\n    </div>\n  </div>\n  <nav class=\"menu-nav-container\" #menuNavContainer>\n    <div class=\"menu-content\">\n      <div class=\"input-container\" >\n        <ng-content></ng-content>\n      </div>\n    </div>\n  </nav>\n  <div class=\"bottom-container\">\n    <span\n      *ngIf=\"partialResult != null\"\n      class=\"partial-result-description\">{{ partialResultDescription }} {{ partialResult }} {{ partialResult > 1 ? itemPluralDescription : itemSingularDescription }}\n    </span>\n    <div class=\"buttons-container\">\n      <gl-shared-component-input-button-simple\n        value=\"apply\"\n        [class]=\"buttonClass\"\n        [innerValue]=\"applyButtonDescription\"\n        (click)=\"onApply()\"\n      ></gl-shared-component-input-button-simple>\n      <gl-shared-component-input-button-simple\n        value=\"clear\"\n        [class]=\"buttonClass\"\n        [innerValue]=\"clearButtonDescription\"\n        (click)=\"onClear()\"\n      ></gl-shared-component-input-button-simple>\n    </div>\n  </div>\n</div>\n",
            styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep .filter-container .menu-nav-container::-webkit-scrollbar:horizontal{height:.5em}:host::ng-deep .filter-container .menu-nav-container::-webkit-scrollbar{width:.5em}:host::ng-deep .filter-container .menu-nav-container::-webkit-scrollbar-button{background-color:#333437;display:none!important}:host::ng-deep .filter-container .menu-nav-container::-webkit-scrollbar-track-piece{background-color:#2c2c2f}:host::ng-deep .filter-container .menu-nav-container::-webkit-scrollbar-thumb{background-color:#64666c;border:1px solid #38393c}:host::ng-deep .filter-container{border-top:.3em solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5;border-bottom:2em solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5;display:flex;flex-direction:column;background:0 0/cover #1a1b1d;position:fixed;top:0;bottom:0;overflow:hidden;width:85vw;right:-110%;max-width:17em;min-width:17em;z-index:10000;transition:right .5s ease-in-out;flex-grow:1;height:100vh}:host::ng-deep .filter-container.translucid{background:rgba(255,255,255,.05);border-left:1px solid rgba(255,255,255,.05);border-top:.3em solid rgba(255,255,255,.1);border-image-source:none}:host::ng-deep .filter-container .a{display:block;min-height:3em}:host::ng-deep .filter-container .header-filter-container .menu-header{display:flex;flex-direction:column;margin:.5em 1em 1em .5em}:host::ng-deep .filter-container .header-filter-container .menu-header .menu-top-icons-container{display:flex;margin:0 0 1.5em}:host::ng-deep .filter-container .header-filter-container .menu-header .menu-top-icons-container .close-menu,:host::ng-deep .filter-container .header-filter-container .menu-header .menu-top-icons-container .settings-menu{cursor:pointer;height:1.5em;width:1.5em}:host::ng-deep .filter-container .header-filter-container .menu-header .menu-top-icons-container .close-menu:active,:host::ng-deep .filter-container .header-filter-container .menu-header .menu-top-icons-container .close-menu:hover,:host::ng-deep .filter-container .header-filter-container .menu-header .menu-top-icons-container .settings-menu:active,:host::ng-deep .filter-container .header-filter-container .menu-header .menu-top-icons-container .settings-menu:hover{opacity:1;-webkit-animation:.4s ease-in-out forwards increase-decrease;animation:.4s ease-in-out forwards increase-decrease}:host::ng-deep .filter-container .header-filter-container .menu-header .menu-top-icons-container .close-menu{margin:0 .2em 0 0}:host::ng-deep .filter-container .header-filter-container .menu-header .menu-header-title .subtitle,:host::ng-deep .filter-container .header-filter-container .menu-header .menu-header-title .title{text-transform:uppercase;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#fff;margin:0}:host::ng-deep .filter-container .header-filter-container .menu-header .menu-header-title .title{font-family:Montserrat,sans-serif;font-weight:700;font-size:.9em;display:none}:host::ng-deep .filter-container .header-filter-container .menu-header .menu-header-title .subtitle{font-family:Montserrat,sans-serif;font-weight:100;font-size:1.5em}:host::ng-deep .filter-container .bottom-container{display:flex;flex-direction:column;margin:1em 0 .4em}:host::ng-deep .filter-container .bottom-container .partial-result-description{font-family:Montserrat,sans-serif;font-weight:700;color:#d24077;font-size:.5em;padding:0 0 0 .5em;text-align:center}:host::ng-deep .filter-container .bottom-container .buttons-container{display:flex;padding:.6em 0 .3em .3em;font-size:.8em}:host::ng-deep .filter-container .bottom-container .buttons-container .default-button:nth-child(1){margin:0 .5em 0 0}:host::ng-deep .filter-container .bottom-container .buttons-container .default-button:nth-child(2){margin:0 0 0 .5em}:host::ng-deep .filter-container .menu-nav-container{scrollbar-face-color:#333437!important;scrollbar-shadow-color:#38393c!important;scrollbar-track-color:#2c2c2f!important;scrollbar-arrow-color:#64666c!important;overflow:auto;max-height:100%;flex-grow:1;display:flex;overflow-x:hidden;border-top:0 solid transparent!important;position:relative;border-bottom:0 solid transparent!important}:host::ng-deep .filter-container .menu-nav-container::before{width:100%;height:1px;left:0;top:1px;margin-top:-1px;content:\"\";position:absolute;background:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%)}:host::ng-deep .filter-container .menu-nav-container::after{width:100%;height:1px;left:0;margin-bottom:-1px;content:\"\";position:absolute;background:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);bottom:-10.5%}:host::ng-deep .filter-container .menu-nav-container .menu-content{display:flex;flex-direction:column;flex-grow:1;position:relative}:host::ng-deep .filter-container .menu-nav-container .menu-content .menu-title{background:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);margin:0 0 .14em;position:relative;display:flex;align-items:center;border-left:.2em solid #fff}:host::ng-deep .filter-container .menu-nav-container .menu-content .menu-title .material-icons{color:rgba(255,255,255,.6);font-size:1.2em;padding:.3em;margin:0 .5em 0 .3em}:host::ng-deep .filter-container .menu-nav-container .menu-content .menu-title .material-icons.expand{position:absolute;color:#fff;top:.5em;right:.3em}:host::ng-deep .filter-container .menu-nav-container .menu-content .menu-title .menu-icons{padding:.2em .5em;height:1.5em;width:1.5em}:host::ng-deep .filter-container .menu-nav-container .menu-content .menu-title a{text-decoration:none;font-size:.6em;font-family:Montserrat,sans-serif;font-weight:300;text-transform:uppercase;color:#fff;padding:1.5em .7em;flex-grow:1}:host::ng-deep .filter-container .menu-nav-container .menu-content .input-container gl-shared-component-filter-container .type-container{background-color:rgba(255,255,255,.03);border-bottom:1px solid rgba(255,255,255,.03)}:host::ng-deep .filter-container .menu-nav-container .menu-content .input-container .options-container{display:flex}:host::ng-deep .filter-container .menu-nav-container .menu-content .input-container gl-shared-component-input-autocomplete-simple .input-container{margin:.2em 0 0;height:1.5em}:host::ng-deep .show-admin-settings{visibility:visible!important}:host::ng-deep .filter-container .menu-active{right:0}:host::ng-deep .menu-active{right:0}:host::ng-deep .menu-background{opacity:0;visibility:collapse;z-index:-1000;left:1000px}:host::ng-deep .visible-background{width:100%;height:100%;background:rgba(0,0,0,.6);opacity:1;visibility:visible;position:fixed;top:0;left:0;z-index:999;transition:1s ease-in-out}:host::ng-deep .hide-subtitle{opacity:0;visibility:collapse;margin:0;padding:0;transition:.25s ease-in-out}:host::ng-deep .show-subtitle{opacity:1;visibility:visible;transition:.25s ease-in-out .4s}:host::ng-deep .hide-subtitle-container{-webkit-animation:.4s ease-in-out forwards hide-subtitle;animation:.4s ease-in-out forwards hide-subtitle}:host::ng-deep .show-subtitle-container{-webkit-animation:.4s ease-in-out forwards show-subtitle;animation:.4s ease-in-out forwards show-subtitle}:host::ng-deep .collapsed-menu .expand{transform:rotate(0);transition:.4s ease-in-out}:host::ng-deep .collapsed-menu .menu-icons{-webkit-animation:.4s ease-in-out forwards decrease-increase;animation:.4s ease-in-out forwards decrease-increase}:host::ng-deep .expanded-menu .expand{transform:rotate(-180deg);transition:.4s ease-in-out}:host::ng-deep .expanded-menu .menu-icons{-webkit-animation:.4s ease-in-out forwards increase-decrease;animation:.4s ease-in-out forwards increase-decrease}"]
        })
    ], GlSharedComponentFilterComponent);
    return GlSharedComponentFilterComponent;
}());

var GlSharedComponentFilterContainerComponent = /** @class */ (function () {
    function GlSharedComponentFilterContainerComponent() {
    }
    __decorate([
        Input()
    ], GlSharedComponentFilterContainerComponent.prototype, "label", void 0);
    GlSharedComponentFilterContainerComponent = __decorate([
        Component({
            selector: 'gl-shared-component-filter-container',
            template: "<div class=\"type-container\">\n  <label class=\"title\">{{ label }}</label>\n  <ng-content></ng-content>\n</div>\n",
            styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep .type-container{display:flex;flex-direction:column;background-color:#2c2c2f;padding:.7em .7em .2em;border-bottom:1px solid #38393c}:host::ng-deep .type-container .title{font-family:Montserrat,sans-serif;font-weight:400;color:#d24077;text-transform:uppercase;font-size:.4em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}"]
        })
    ], GlSharedComponentFilterContainerComponent);
    return GlSharedComponentFilterContainerComponent;
}());

var GlSharedComponentButtonAttachmentFileService = /** @class */ (function () {
    function GlSharedComponentButtonAttachmentFileService(_alert) {
        this._alert = _alert;
    }
    GlSharedComponentButtonAttachmentFileService.prototype.initialize = function (input, currentValue, attachments, duplicatedDescription, invalidSizeDescription, invalidFormatDescription, attachmentIconSrc) {
        var _this = this;
        this._input = input;
        this._currentValue = currentValue;
        this._attachments = attachments;
        // Todo Block specif files
        var accept = input.attributes.accept.value;
        this._accepts = accept == null || accept == 'undefined' || accept === '' ? ['*'] : AttachmentParser.parseAcceptFiles(input.attributes.accept.value);
        this._input.oninput = function () { _this.onChange(duplicatedDescription, invalidSizeDescription, invalidFormatDescription, attachmentIconSrc); };
    };
    GlSharedComponentButtonAttachmentFileService.prototype.addAttachment = function () {
        this._input.click();
    };
    GlSharedComponentButtonAttachmentFileService.prototype.onChange = function (duplicatedDescription, invalidSizeDescription, invalidFormatDescription, attachmentIconSrc) {
        var isValid = AttachmentValidate.file(this._input, this._accepts);
        var sizeValid = AttachmentValidate.fileSize(this._input);
        var duplicated = AttachmentValidate.duplicated(this._input.files[0].name, this._attachments);
        if (duplicated) {
            this.clearInput();
            this._alert.show(duplicatedDescription).then(function () { });
            return;
        }
        else if (!sizeValid) {
            var maxSize = AttachmentValidate.maxSize(this._input);
            var maxSizeStr = StringConverter.formatNumber(maxSize);
            this.clearInput();
            this._alert.show(invalidSizeDescription + ": " + maxSizeStr + "KB").then(function () { });
            return;
        }
        else if (!isValid) {
            this.clearInput();
            this._alert.show(invalidFormatDescription).then(function () { });
        }
        else {
            var file = {
                name: this._input.files[0].name,
                file: this._input.files[0],
                icon: AttachmentIcon.get(this._input.files[0].name, attachmentIconSrc),
                new: true,
                url: '',
                remove: false,
                id: this._attachments.length
            };
            this.clearInput();
            this._currentValue.emit(file);
        }
    };
    GlSharedComponentButtonAttachmentFileService.prototype.clearInput = function () {
        this._input.value = null;
    };
    GlSharedComponentButtonAttachmentFileService.ctorParameters = function () { return [
        { type: GlSharedComponentModalAlertService }
    ]; };
    GlSharedComponentButtonAttachmentFileService.ɵprov = ɵɵdefineInjectable({ factory: function GlSharedComponentButtonAttachmentFileService_Factory() { return new GlSharedComponentButtonAttachmentFileService(ɵɵinject(GlSharedComponentModalAlertService)); }, token: GlSharedComponentButtonAttachmentFileService, providedIn: "root" });
    GlSharedComponentButtonAttachmentFileService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], GlSharedComponentButtonAttachmentFileService);
    return GlSharedComponentButtonAttachmentFileService;
}());

var GlSharedComponentButtonAttachmentFileComponent = /** @class */ (function () {
    function GlSharedComponentButtonAttachmentFileComponent(service) {
        this.service = service;
        /**
         * @param maxFileSize Size in KB.
         * @param attachmentIconSrc (Optional) In case the source is not informed, the default path will be the one in gl-w-frontend package.
         */
        this.maxFileSize = '46080';
        this.title = 'Click to add an attachment';
        this.icon = '../assets/img/icon/attachment/attachment.svg';
        this.description = 'Add attachment';
        this.attachments = [];
        this.duplicatedDescription = 'File duplicated. Please, add another file!';
        this.invalidSizeDescription = 'Invalid file size. The max allowed size is';
        this.invalidFormatDescription = 'Invalid file format!';
        this.currentValue$ = new EventEmitter();
    }
    GlSharedComponentButtonAttachmentFileComponent.prototype.ngAfterViewInit = function () {
        this.service.initialize(this.fileInput.nativeElement, this.currentValue$, this.attachments, this.duplicatedDescription, this.invalidSizeDescription, this.invalidFormatDescription, this.attachmentIconSrc);
    };
    GlSharedComponentButtonAttachmentFileComponent.ctorParameters = function () { return [
        { type: GlSharedComponentButtonAttachmentFileService }
    ]; };
    __decorate([
        ViewChild('fileInput', { read: ElementRef, static: true })
    ], GlSharedComponentButtonAttachmentFileComponent.prototype, "fileInput", void 0);
    __decorate([
        Input()
    ], GlSharedComponentButtonAttachmentFileComponent.prototype, "maxFileSize", void 0);
    __decorate([
        Input()
    ], GlSharedComponentButtonAttachmentFileComponent.prototype, "accept", void 0);
    __decorate([
        Input()
    ], GlSharedComponentButtonAttachmentFileComponent.prototype, "title", void 0);
    __decorate([
        Input()
    ], GlSharedComponentButtonAttachmentFileComponent.prototype, "icon", void 0);
    __decorate([
        Input()
    ], GlSharedComponentButtonAttachmentFileComponent.prototype, "attachmentIconSrc", void 0);
    __decorate([
        Input()
    ], GlSharedComponentButtonAttachmentFileComponent.prototype, "description", void 0);
    __decorate([
        Input()
    ], GlSharedComponentButtonAttachmentFileComponent.prototype, "attachments", void 0);
    __decorate([
        Input()
    ], GlSharedComponentButtonAttachmentFileComponent.prototype, "duplicatedDescription", void 0);
    __decorate([
        Input()
    ], GlSharedComponentButtonAttachmentFileComponent.prototype, "invalidSizeDescription", void 0);
    __decorate([
        Input()
    ], GlSharedComponentButtonAttachmentFileComponent.prototype, "invalidFormatDescription", void 0);
    __decorate([
        Output()
    ], GlSharedComponentButtonAttachmentFileComponent.prototype, "currentValue$", void 0);
    GlSharedComponentButtonAttachmentFileComponent = __decorate([
        Component({
            selector: 'gl-shared-component-button-attachment-file',
            template: "<div class=\"attachment-container\" (click)=\"service.addAttachment()\">\n  <input\n    #fileInput\n    id=\"file-input\"\n    name=\"file-input\"\n    type=\"file\"\n    class=\"file-input\"\n    [accept]=\"accept\"\n    [title]=\"title\"\n    [attr.data-maxsize]=\"maxFileSize\"/>\n  <img class=\"attachment-icon\" [src]=\"icon\" alt=\"Attachment Icon\">\n  <span class=\"attachment-file-button\">{{ description }}</span>\n</div>\n",
            styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep .attachment-container{position:relative;display:flex;padding:.4em .3em;border-radius:.5em;align-items:center;margin:.2em 0;cursor:pointer}:host::ng-deep .attachment-container:not(hover){background:rgba(63,64,68,.6);transition:.2s ease-in-out}:host::ng-deep .attachment-container:hover{background:rgba(63,64,68,.9);transition:.2s ease-in-out}:host::ng-deep .attachment-container .file-input{font-size:1em;display:none}:host::ng-deep .attachment-container .attachment-icon{padding:0;height:2em;width:2em;margin:.5em .8em .5em .2em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host::ng-deep .attachment-container .file{font-size:.8em;color:#1e1e1e;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;width:75%;padding:1em 0}:host::ng-deep .attachment-container .attachment-file-button{color:#fff;font-family:Montserrat,sans-serif;font-weight:400;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}"]
        })
    ], GlSharedComponentButtonAttachmentFileComponent);
    return GlSharedComponentButtonAttachmentFileComponent;
}());

var GlSharedComponentModalAttachmentLinkService = /** @class */ (function () {
    function GlSharedComponentModalAttachmentLinkService(_alert) {
        this._alert = _alert;
        this.linkIcon = '../assets/img/icon/attachment/link.svg';
        this.showModal = false;
        this.currentValue = new Subject();
    }
    GlSharedComponentModalAttachmentLinkService.prototype.setup = function (name, url) {
        this.name = name;
        this.url = url;
    };
    GlSharedComponentModalAttachmentLinkService.prototype.onCancel = function () {
        this.modal(false);
    };
    GlSharedComponentModalAttachmentLinkService.prototype.onConfirm = function () {
        return __awaiter(this, void 0, void 0, function () {
            var values;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.validData()];
                    case 1:
                        if (_a.sent()) {
                            values = {
                                name: this._name,
                                url: this._url,
                                icon: this.linkIcon,
                                editing: this.editing,
                                editId: this.editId
                            };
                            this.currentValue.next(values);
                            this.modal(false);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    GlSharedComponentModalAttachmentLinkService.prototype.onName = function (e) {
        this._name = e.currentTarget.value;
    };
    GlSharedComponentModalAttachmentLinkService.prototype.onUrl = function (e) {
        this._url = e.currentTarget.value;
    };
    GlSharedComponentModalAttachmentLinkService.prototype.validData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var urlRegex, tempUrl, validUrl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
                        tempUrl = this._url != null && !this._url.includes('http://') && !this._url.includes('https://') ? "http://" + this._url : this._url;
                        validUrl = new RegExp(urlRegex).test(this._url);
                        if (!(this._name == null || this._name.trim().length === 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._alert.show('Por favor, informe o nome do arquivo!')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, false];
                    case 2:
                        if (!(this._url == null || this._url.trim().length === 0)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this._alert.show('Por favor, informe o url do arquivo!')];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, false];
                    case 4:
                        if (!!validUrl) return [3 /*break*/, 6];
                        return [4 /*yield*/, this._alert.show('Por favor, informe um url válido!')];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        this._url = tempUrl;
                        return [2 /*return*/, true];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    GlSharedComponentModalAttachmentLinkService.prototype.modal = function (show) {
        var _this = this;
        this.editing = false;
        this.editId = null;
        if (show) {
            this.modalClass = 'hide-modal';
            this.showModal = true;
            this.modalClass = 'show-modal';
        }
        else {
            this.modalClass = 'hide-modal';
            setTimeout(function () {
                _this.showModal = false;
            }, 300);
        }
    };
    GlSharedComponentModalAttachmentLinkService.prototype.edit = function (name, url, editId) {
        var _this = this;
        this.modal(true);
        this.editing = true;
        this.editId = editId;
        setTimeout(function () {
            _this.name = document.querySelector('#attachment-link-name');
            _this.url = document.querySelector('#attachment-link-value');
            _this._name = name;
            _this.name.value = name;
            _this._url = url;
            _this.url.value = url;
        }, 100);
    };
    GlSharedComponentModalAttachmentLinkService.prototype.onModalKeyUp = function (e) {
        if (e.key === 'Enter') {
            return this.onConfirm();
        }
        else if (e.key === 'Escape') {
            this.onCancel();
        }
    };
    GlSharedComponentModalAttachmentLinkService.ctorParameters = function () { return [
        { type: GlSharedComponentModalAlertService }
    ]; };
    GlSharedComponentModalAttachmentLinkService.ɵprov = ɵɵdefineInjectable({ factory: function GlSharedComponentModalAttachmentLinkService_Factory() { return new GlSharedComponentModalAttachmentLinkService(ɵɵinject(GlSharedComponentModalAlertService)); }, token: GlSharedComponentModalAttachmentLinkService, providedIn: "root" });
    GlSharedComponentModalAttachmentLinkService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], GlSharedComponentModalAttachmentLinkService);
    return GlSharedComponentModalAttachmentLinkService;
}());

var GlSharedComponentButtonAttachmentLinkComponent = /** @class */ (function () {
    function GlSharedComponentButtonAttachmentLinkComponent(service) {
        this.service = service;
    }
    GlSharedComponentButtonAttachmentLinkComponent.ctorParameters = function () { return [
        { type: GlSharedComponentModalAttachmentLinkService }
    ]; };
    GlSharedComponentButtonAttachmentLinkComponent = __decorate([
        Component({
            selector: 'gl-shared-component-button-attachment-link',
            template: "<div\n  class=\"attachment-container dark link-container\"\n  (click)=\"service.modal(true)\">\n  <img\n    class=\"attachment-icon\"\n    src=\"../assets/img/icon/menu/attachment/link-white.svg\"\n    alt=\"Attachment Icon\">\n  <span\n    id=\"add-attachment-link\"\n    class=\"attachment-file-button\">Adicionar link</span>\n</div>\n",
            styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep .attachment-container{position:relative;display:flex;padding:.4em .3em;border-radius:.5em;align-items:center;margin:.2em 0;cursor:pointer}:host::ng-deep .attachment-container:not(hover){background:rgba(63,64,68,.6);transition:.2s ease-in-out}:host::ng-deep .attachment-container:hover{background:rgba(63,64,68,.9);transition:.2s ease-in-out}:host::ng-deep .attachment-container .attachment-icon{padding:0;height:2em;width:2em;margin:.8em .8em .8em .2em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host::ng-deep .attachment-container .attachment-file-button{color:#fff;font-family:Montserrat,sans-serif;font-weight:400;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}"]
        })
    ], GlSharedComponentButtonAttachmentLinkComponent);
    return GlSharedComponentButtonAttachmentLinkComponent;
}());

var GlSharedComponentModalAttachmentLinkComponent = /** @class */ (function () {
    function GlSharedComponentModalAttachmentLinkComponent(service) {
        this.service = service;
        this.subtitle = ': link';
        this.fileNameLabel = 'File name';
        this.fileNamePlaceholder = 'Type the file name';
        this.linkPlaceholder = 'Type the file link';
        this.cancelInnerValue = 'Cancel';
    }
    GlSharedComponentModalAttachmentLinkComponent.ctorParameters = function () { return [
        { type: GlSharedComponentModalAttachmentLinkService }
    ]; };
    __decorate([
        Input()
    ], GlSharedComponentModalAttachmentLinkComponent.prototype, "title", void 0);
    __decorate([
        Input()
    ], GlSharedComponentModalAttachmentLinkComponent.prototype, "subtitle", void 0);
    __decorate([
        Input()
    ], GlSharedComponentModalAttachmentLinkComponent.prototype, "modalLogo", void 0);
    __decorate([
        Input()
    ], GlSharedComponentModalAttachmentLinkComponent.prototype, "fileNameLabel", void 0);
    __decorate([
        Input()
    ], GlSharedComponentModalAttachmentLinkComponent.prototype, "fileNamePlaceholder", void 0);
    __decorate([
        Input()
    ], GlSharedComponentModalAttachmentLinkComponent.prototype, "linkPlaceholder", void 0);
    __decorate([
        Input()
    ], GlSharedComponentModalAttachmentLinkComponent.prototype, "cancelInnerValue", void 0);
    GlSharedComponentModalAttachmentLinkComponent = __decorate([
        Component({
            selector: 'gl-shared-component-modal-attachment-link',
            template: "<div\n  *ngIf=\"service.showModal\"\n  (keyup)=\"service.onModalKeyUp($event)\"\n  id=\"modal-attachment-link\"\n  class=\"modal-link-container {{ service.modalClass }}\">\n  <div class=\"modal-main-content\">\n    <gl-shared-component-modal-header\n      [title]=\"title\"\n      [subtitle]=\"subtitle\"\n      [modalLogo]=\"modalLogo\"\n    ></gl-shared-component-modal-header>\n    <div class=\"modal-input-container\">\n      <div class=\"name-container\">\n        <label for=\"attachment-link-name\">{{ fileNameLabel }}</label>\n        <input\n          (keyup)=\"service.onName($event)\"\n          id=\"attachment-link-name\"\n          type=\"text\"\n          [placeholder]=\"fileNamePlaceholder\">\n      </div>\n      <div class=\"value-container\">\n        <label for=\"attachment-link-value\">Link</label>\n        <input\n          (keyup)=\"service.onUrl($event)\"\n          id=\"attachment-link-value\"\n          type=\"text\"\n          [placeholder]=\"linkPlaceholder\">\n      </div>\n    </div>\n    <div class=\"button-container\">\n      <gl-shared-component-input-button-simple\n        (click)=\"service.onCancel()\"\n        class=\"cancel\"\n        [innerValue]=\"cancelInnerValue\"\n        value=\"cancel\"\n      ></gl-shared-component-input-button-simple>\n      <gl-shared-component-input-button-simple\n        (click)=\"service.onConfirm()\"\n        class=\"ok\"\n        innerValue=\"OK\"\n        value=\"ok\"\n      ></gl-shared-component-input-button-simple>\n    </div>\n    <div class=\"modal-footer\"></div>\n  </div>\n</div>\n",
            styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep .modal-link-container{position:fixed;min-width:100vw;min-height:100vh;z-index:99999;top:0;left:0;display:flex;justify-items:center;align-items:center;height:0;-webkit-animation:.5s ease-in-out forwards show-modal;animation:.5s ease-in-out forwards show-modal;background:rgba(0,0,0,.8)}@-webkit-keyframes show-modal{from{opacity:0}to{opacity:1}}:host::ng-deep .modal-link-container>.modal-main-content{opacity:1!important;transition:.5s ease-in-out .5s}:host::ng-deep .modal-link-container .modal-main-content{opacity:0;background:#020202;margin:0 auto;word-wrap:break-word;display:flex;flex-direction:column;justify-content:stretch;width:30vw;max-width:36em;min-height:10em;height:1em;align-items:stretch}:host::ng-deep .modal-link-container .modal-main-content .modal-input-container{display:flex;flex-direction:column;align-items:stretch;justify-content:center;flex-grow:1;padding:.5em}:host::ng-deep .modal-link-container .modal-main-content .modal-input-container .name-container,:host::ng-deep .modal-link-container .modal-main-content .modal-input-container .value-container{position:relative;display:flex;align-content:center;justify-content:center;align-items:stretch}:host::ng-deep .modal-link-container .modal-main-content .modal-input-container .name-container label,:host::ng-deep .modal-link-container .modal-main-content .modal-input-container .value-container label{font-family:Montserrat,sans-serif;font-weight:400;color:gray;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:.5em;text-transform:none;position:absolute;left:.8em;font-size:.4em}:host::ng-deep .modal-link-container .modal-main-content .modal-input-container .name-container input,:host::ng-deep .modal-link-container .modal-main-content .modal-input-container .value-container input{font-family:Montserrat,sans-serif;font-weight:700;color:#fff;background-color:transparent;border:none;flex-grow:1;margin:0;font-size:.5em;text-align:left;padding:1em;height:2.2em;border-bottom:1px solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5}:host::ng-deep .modal-link-container .modal-main-content .modal-input-container .name-container{margin-bottom:.1em}:host::ng-deep .modal-link-container .modal-main-content .button-container{display:flex;justify-content:center;align-items:stretch}:host::ng-deep .modal-link-container .modal-main-content .button-container gl-shared-component-input-button-simple{margin:0 .1em;max-width:calc(100% / 3)}:host::ng-deep .modal-link-container .modal-main-content .modal-footer{height:.5em;background-color:#0e0e0f;border-top:1px solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5;margin:.2em 0 0;width:100%}:host::ng-deep .hide-modal{-webkit-animation:.3s ease-in-out forwards hide-modal;animation:.3s ease-in-out forwards hide-modal}@-webkit-keyframes hide-modal{from{opacity:1}to{opacity:0}}@keyframes hide-modal{from{opacity:1}to{opacity:0}}:host::ng-deep .show-modal{-webkit-animation:.3s ease-in-out forwards show-modal;animation:.3s ease-in-out forwards show-modal}@keyframes show-modal{from{opacity:0}to{opacity:1}}"]
        })
    ], GlSharedComponentModalAttachmentLinkComponent);
    return GlSharedComponentModalAttachmentLinkComponent;
}());

var GlSharedComponentAttachmentItemComponent = /** @class */ (function () {
    function GlSharedComponentAttachmentItemComponent() {
        this.disabled = false;
        this.onItemClick = new EventEmitter();
        this.removeCurrentItem = new EventEmitter();
        this.editCurrentItem = new EventEmitter();
    }
    GlSharedComponentAttachmentItemComponent.prototype.removeItem = function (id) { this.removeCurrentItem.emit({ id: id }); };
    GlSharedComponentAttachmentItemComponent.prototype.editItem = function (id) { this.editCurrentItem.emit({ id: id }); };
    GlSharedComponentAttachmentItemComponent.prototype.onButtonClick = function (e) {
        e.preventDefault();
        this.onItemClick.emit();
    };
    __decorate([
        Input()
    ], GlSharedComponentAttachmentItemComponent.prototype, "disabled", void 0);
    __decorate([
        Input()
    ], GlSharedComponentAttachmentItemComponent.prototype, "attachmentUrl", void 0);
    __decorate([
        Input()
    ], GlSharedComponentAttachmentItemComponent.prototype, "fileName", void 0);
    __decorate([
        Input()
    ], GlSharedComponentAttachmentItemComponent.prototype, "fileIcon", void 0);
    __decorate([
        Input()
    ], GlSharedComponentAttachmentItemComponent.prototype, "id", void 0);
    __decorate([
        Input()
    ], GlSharedComponentAttachmentItemComponent.prototype, "type", void 0);
    __decorate([
        Input()
    ], GlSharedComponentAttachmentItemComponent.prototype, "addingSmooth", void 0);
    __decorate([
        Output('onClick')
    ], GlSharedComponentAttachmentItemComponent.prototype, "onItemClick", void 0);
    __decorate([
        Output()
    ], GlSharedComponentAttachmentItemComponent.prototype, "removeCurrentItem", void 0);
    __decorate([
        Output()
    ], GlSharedComponentAttachmentItemComponent.prototype, "editCurrentItem", void 0);
    GlSharedComponentAttachmentItemComponent = __decorate([
        Component({
            selector: 'gl-shared-component-attachment-item',
            template: "<div class=\"attachment-container {{ addingSmooth ? 'adding-row-animated' : '' }}\">\n  <img\n    class=\"attachment-icon\"\n    [src]=\"fileIcon\"\n    alt=\"\u00CDcone anexo\">\n  <a\n    (click)=\"onButtonClick($event)\"\n    [id]=\"id\"\n    [href]=\"attachmentUrl\"\n    class=\"file\"\n  >{{ fileName }}</a>\n  <img\n    *ngIf=\"!disabled && type === 'link'\"\n    (click)=\"editItem(id)\"\n    class=\"edit-item\"\n    src=\"../assets/img/icon/menu/attachment/edit.svg\"\n    alt=\"Editar anexo\"/>\n  <img\n    *ngIf=\"!disabled\"\n    (click)=\"removeItem(id)\"\n    class=\"remove-item\"\n    src=\"../assets/img/icon/menu/attachment/delete.svg\"\n    alt=\"Apagar anexo\"/>\n</div>\n",
            styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep .attachment-container{display:flex;padding:.4em .3em;border-radius:.5em;align-items:center;margin:.2em 0;cursor:pointer}:host::ng-deep .attachment-container:not(hover){background-color:rgba(255,255,255,.3);transition:.2s ease-in-out}:host::ng-deep .attachment-container:not(hover) .file{color:#333437}:host::ng-deep .attachment-container:hover{background:#fff;transition:.2s ease-in-out}:host::ng-deep .attachment-container:hover .file{color:#333437}:host::ng-deep .attachment-container .attachment-icon{padding:0;height:2.15em;width:2.15em;margin:0 .6em 0 .1em}:host::ng-deep .attachment-container .edit-item,:host::ng-deep .attachment-container .remove-item{padding:0;height:2.15em;width:2.15em;margin:0 0 0 .1em}:host::ng-deep .attachment-container .edit-item:not(hover),:host::ng-deep .attachment-container .remove-item:not(hover){opacity:.5;transition:.2s ease-in-out}:host::ng-deep .attachment-container .edit-item:hover,:host::ng-deep .attachment-container .remove-item:hover{opacity:1;transition:.2s ease-in-out}:host::ng-deep .attachment-container .edit-item{margin:0 .2em 0 0}:host::ng-deep .attachment-container .file{font-family:Montserrat,sans-serif;font-weight:400;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;width:80%;padding:1em 0}"]
        })
    ], GlSharedComponentAttachmentItemComponent);
    return GlSharedComponentAttachmentItemComponent;
}());

var GlSharedComponentAttachmentImagePreviewService = /** @class */ (function () {
    function GlSharedComponentAttachmentImagePreviewService(_alert) {
        var _this = this;
        this._alert = _alert;
        this.image = '../assets/img/icon/image/image-template.svg';
        this.retrieveUpdate = new Subject();
        this.labelIcons = '../assets/img/icon/label/';
        this.buttons = [
            {
                src: this.labelIcons + "image.svg",
                id: 'add-image-from-label',
                alt: 'Add image',
                show: true, callback: function () {
                    _this.addImage();
                }
            },
            {
                src: this.labelIcons + "remove-image.svg",
                id: 'clear-image-from-label',
                alt: 'Remove image',
                show: false,
                callback: function () {
                    _this.removeImage();
                }
            },
        ];
        this.retrieveUpdate.subscribe(function (value) {
            if (value != null && value.trim().length > 0) {
                _this.setImage(value);
                _this.updateButtons(true);
            }
            else {
                _this.setImage('');
                _this.updateButtons(false);
            }
        });
    }
    GlSharedComponentAttachmentImagePreviewService.prototype.initialize = function (input, userImage, currentValue, invalidSizeDescription, invalidFormatDescription, addImageButtonDescription, removeImageButtonDescription) {
        var _this = this;
        this._input = input;
        this._accepts = AttachmentParser.parseAcceptFiles(input.attributes.accept.value);
        this._userImage = userImage;
        this._currentValue = currentValue;
        setTimeout(function () {
            _this.buttons[0].alt = addImageButtonDescription;
            _this.buttons[1].alt = removeImageButtonDescription;
        }, 100);
        this._input.oninput = function () { _this.onChange(invalidSizeDescription, invalidFormatDescription); };
        this.removeImage(true);
    };
    GlSharedComponentAttachmentImagePreviewService.prototype.onChange = function (invalidSizeDescription, invalidFormatDescription) {
        var _this = this;
        var isValid = AttachmentValidate.file(this._input, this._accepts);
        var sizeValid = AttachmentValidate.fileSize(this._input);
        if (!sizeValid) {
            var maxSize = AttachmentValidate.maxSize(this._input);
            var maxSizeStr = StringConverter.formatNumber(maxSize);
            this._alert.show(invalidSizeDescription + " " + maxSizeStr + "KB").then(function () { });
            return;
        }
        if (isValid) {
            AttachmentConvert.textFileToUrlImage(this._input.files[0]).then(function (image) {
                _this.setImage(image);
                _this._currentValue.emit({ value: image });
                _this.updateButtons(true);
                _this.clearInput();
            });
        }
        else {
            this.clearInput();
            this._alert.show(invalidFormatDescription).then(function () { });
        }
    };
    GlSharedComponentAttachmentImagePreviewService.prototype.clearInput = function () {
        this._input.value = null;
    };
    GlSharedComponentAttachmentImagePreviewService.prototype.updateButtons = function (hasValue) {
        this.buttons[0].show = !hasValue;
        this.buttons[1].show = hasValue;
    };
    GlSharedComponentAttachmentImagePreviewService.prototype.setImage = function (image) {
        this._userImage.style.backgroundImage = "url(\"" + image + "\")";
        this._userImage.classList.remove('required-fill');
    };
    GlSharedComponentAttachmentImagePreviewService.prototype.addImage = function () {
        this._input.click();
    };
    GlSharedComponentAttachmentImagePreviewService.prototype.removeImage = function (init) {
        this.clearInput();
        this.setImage(this.image);
        if (!init) {
            this._currentValue.emit({ value: null });
            this.updateButtons(false);
        }
    };
    GlSharedComponentAttachmentImagePreviewService.ctorParameters = function () { return [
        { type: GlSharedComponentModalAlertService }
    ]; };
    GlSharedComponentAttachmentImagePreviewService.ɵprov = ɵɵdefineInjectable({ factory: function GlSharedComponentAttachmentImagePreviewService_Factory() { return new GlSharedComponentAttachmentImagePreviewService(ɵɵinject(GlSharedComponentModalAlertService)); }, token: GlSharedComponentAttachmentImagePreviewService, providedIn: "root" });
    GlSharedComponentAttachmentImagePreviewService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], GlSharedComponentAttachmentImagePreviewService);
    return GlSharedComponentAttachmentImagePreviewService;
}());

var GlSharedComponentAttachmentImagePreviewComponent = /** @class */ (function () {
    function GlSharedComponentAttachmentImagePreviewComponent(service) {
        this.service = service;
        this.disabled = false;
        this.required = false;
        this.type = '';
        this.showLabel = true;
        this.requiredFieldDescription = 'Required field';
        this.addImageDescription = 'Click to add an image';
        this.maxImageSize = '10240';
        this.invalidSizeDescription = 'Invalid file size. The max allowed size is';
        this.invalidFormatDescription = 'Invalid file format!';
        this.addImageButtonDescription = 'Add image';
        this.removeImageButtonDescription = 'Remove image';
        this.currentValue$ = new EventEmitter();
    }
    GlSharedComponentAttachmentImagePreviewComponent.prototype.ngAfterViewInit = function () {
        this.service.initialize(this.fileInputImage.nativeElement, this.userImage.nativeElement, this.currentValue$, this.invalidSizeDescription, this.invalidFormatDescription, this.addImageButtonDescription, this.removeImageButtonDescription);
        this.updateImage();
    };
    GlSharedComponentAttachmentImagePreviewComponent.prototype.updateImage = function () {
        if (this.currentImage != null && this.currentImage.length > 0) {
            this.service.setImage(this.currentImage);
        }
    };
    GlSharedComponentAttachmentImagePreviewComponent.ctorParameters = function () { return [
        { type: GlSharedComponentAttachmentImagePreviewService }
    ]; };
    __decorate([
        ViewChild('fileInputImage', { read: ElementRef, static: true })
    ], GlSharedComponentAttachmentImagePreviewComponent.prototype, "fileInputImage", void 0);
    __decorate([
        ViewChild('userImage', { read: ElementRef, static: true })
    ], GlSharedComponentAttachmentImagePreviewComponent.prototype, "userImage", void 0);
    __decorate([
        Input()
    ], GlSharedComponentAttachmentImagePreviewComponent.prototype, "disabled", void 0);
    __decorate([
        Input()
    ], GlSharedComponentAttachmentImagePreviewComponent.prototype, "currentImage", void 0);
    __decorate([
        Input()
    ], GlSharedComponentAttachmentImagePreviewComponent.prototype, "required", void 0);
    __decorate([
        Input()
    ], GlSharedComponentAttachmentImagePreviewComponent.prototype, "type", void 0);
    __decorate([
        Input()
    ], GlSharedComponentAttachmentImagePreviewComponent.prototype, "showLabel", void 0);
    __decorate([
        Input()
    ], GlSharedComponentAttachmentImagePreviewComponent.prototype, "requiredFieldDescription", void 0);
    __decorate([
        Input()
    ], GlSharedComponentAttachmentImagePreviewComponent.prototype, "addImageDescription", void 0);
    __decorate([
        Input()
    ], GlSharedComponentAttachmentImagePreviewComponent.prototype, "maxImageSize", void 0);
    __decorate([
        Input()
    ], GlSharedComponentAttachmentImagePreviewComponent.prototype, "invalidSizeDescription", void 0);
    __decorate([
        Input()
    ], GlSharedComponentAttachmentImagePreviewComponent.prototype, "invalidFormatDescription", void 0);
    __decorate([
        Input()
    ], GlSharedComponentAttachmentImagePreviewComponent.prototype, "addImageButtonDescription", void 0);
    __decorate([
        Input()
    ], GlSharedComponentAttachmentImagePreviewComponent.prototype, "removeImageButtonDescription", void 0);
    __decorate([
        Output()
    ], GlSharedComponentAttachmentImagePreviewComponent.prototype, "currentValue$", void 0);
    GlSharedComponentAttachmentImagePreviewComponent = __decorate([
        Component({
            selector: 'gl-shared-component-attachment-image-preview',
            template: "<div class=\"item-container {{ type }}\">\n  <gl-shared-component-title-label-button-container\n    *ngIf=\"showLabel\"\n    labelValue=\"Image\"\n    labelAlignment=\"left\"\n    [class]=\"type\"\n    [requiredFieldDescription]=\"requiredFieldDescription\"\n    [required]=\"required\">\n    <ng-content select=\"top\"></ng-content>\n    <gl-shared-component-button-image-tooltip\n      *ngFor=\"let b of service.buttons\"\n      [src]=\"b.src\"\n      [alt]=\"b.alt\"\n      [id]=\"b.id\"\n      [show]=\"b.show && !disabled || b.id === 'expand-container-2'\"\n      [callback]=\"b.callback\"\n    ></gl-shared-component-button-image-tooltip>\n    <ng-content select=\"bottom\"></ng-content>\n  </gl-shared-component-title-label-button-container>\n\n  <div class=\"attachment-container-content\">\n    <input\n      #fileInputImage\n      id=\"file-input-image\"\n      name=\"file-input-image\"\n      type=\"file\"\n      class=\"input-image\"\n      accept=\"image/tif, image/tiff, image/x-png, image/jpeg, image/jpg, image/bmp, image/gif, image/svg+xml\"\n      maxlength=\"1\"\n      [attr.data-maxsize]=\"maxImageSize\"\n      [title]=\"addImageDescription\"\n    />\n  </div>\n  <div class=\"image-container\">\n    <div #userImage id=\"image\"></div>\n  </div>\n</div>\n",
            styles: [":host::ng-deep{display:flex;flex-grow:1}:host::ng-deep .item-container{background-color:#333437;display:flex;flex-grow:1;flex-direction:column}:host::ng-deep .item-container gl-shared-component-title-label-button-container{flex-grow:0;position:relative}:host::ng-deep .item-container gl-shared-component-title-label-button-container .required-fill-dot{right:1.5em}:host::ng-deep .item-container.light{background-color:transparent;border-right:.5px solid rgba(255,255,255,.1)}:host::ng-deep .item-container.dark{background-color:#161617}:host::ng-deep .item-container.dark label{background-color:#111112}:host::ng-deep .item-container .attachment-container-content .input-image{display:none}:host::ng-deep .item-container .image-container{flex-grow:1;display:flex;justify-content:center;align-content:center}:host::ng-deep .item-container .image-container #image{content:\"\";background-size:auto 100%;background-repeat:no-repeat;min-width:100%;min-height:30vh;border:0;background-position-x:center;background-position-y:center;flex-grow:1}"]
        })
    ], GlSharedComponentAttachmentImagePreviewComponent);
    return GlSharedComponentAttachmentImagePreviewComponent;
}());

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
    GlSharedComponentPagingComponent = __decorate([
        Component({
            selector: 'gl-shared-component-paging',
            template: "<div class=\"pagination-container {{ type }}\">\n  <div class=\"pagination-buttons-container\">\n    <a id=\"first-page\" class=\"anchor-button\"\n       *ngIf=\"hasPrevious\" (click)=\"onPageChange($event, 'first')\"\n       [title]=\"firstPageTitle\">\n      <img [src]=\"firstIcon\" [alt]=\"firstPageTitle\">\n    </a>\n    <a id=\"prev-page\" class=\"anchor-button\"\n       *ngIf=\"hasPrevious\" (click)=\"onPageChange($event, 'previous')\"\n       [title]=\"previousPageTitle\">\n      <img [src]=\"previousIcon\" [alt]=\"previousPageTitle\">\n    </a>\n    <span id=\"page-info\">{{ pageInfo }}</span>\n    <div class=\"page-buttons-container\">\n      <gl-shared-component-input-button-simple\n        *ngFor=\"let button of pageButtons\"\n        [value]=\"button.page.toString()\"\n        [innerValue]=\"button.page.toString()\"\n        (click)=\"setPage(button.page)\"\n        [class]=\"button.active ? 'active' : ''\"\n        [title]=\"pageDescription + ' ' + button.page.toString()\"\n      ></gl-shared-component-input-button-simple>\n    </div>\n    <a href=\"#\" id=\"next-page\" class=\"anchor-button\"\n       *ngIf=\"hasNext\" (click)=\"onPageChange($event, 'next')\"\n       [title]=\"nextPageTitle\">\n      <img [src]=\"nextIcon\" [alt]=\"nextPageTitle\">\n    </a>\n    <a href=\"#\" id=\"last-page\" class=\"anchor-button\"\n       *ngIf=\"hasNext\" (click)=\"onPageChange($event, 'last')\"\n       [title]=\"lastPageTitle\">\n      <img [src]=\"lastIcon\" [alt]=\"lastPageTitle\">\n    </a>\n  </div>\n\n  <div class=\"number-items-page\" >\n    <span class=\"label-page-items\">{{ itemsPerPageDescriptions }}</span>\n    <gl-shared-component-input-button-simple\n      *ngFor=\"let item of itemsPerPage\"\n        [title]=\"item.title\"\n        [innerValue]=\"item.innerValue\"\n        [value]=\"item.value\"\n        [class]=\"item.class\"\n        (click)=\"setNumberOfItems(item.pageSize)\"\n    ></gl-shared-component-input-button-simple>\n  </div>\n</div>\n",
            styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep{max-width:100vw}:host::ng-deep .pagination-container{max-width:100vw;position:relative;background-color:#1a1b1d;font-size:.5em;display:flex;align-items:center;justify-content:center;height:2.5em}:host::ng-deep .pagination-container .pagination-buttons-container{flex-grow:1;justify-content:center;display:flex;align-items:center}:host::ng-deep .pagination-container .pagination-buttons-container #page-info{color:#fff;margin:auto 1.2em;font-size:.8em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:none}:host::ng-deep .pagination-container .pagination-buttons-container .page-buttons-container{display:flex;padding:0 1em;width:30%}:host::ng-deep .pagination-container .pagination-buttons-container .page-buttons-container gl-shared-component-input-button-simple{height:1.5em;width:1.5em;margin:0 .2em;display:flex}:host::ng-deep .pagination-container .pagination-buttons-container .page-buttons-container gl-shared-component-input-button-simple .default-button{font-family:Montserrat,sans-serif;font-weight:300;border-radius:.2em;font-size:.8em}:host::ng-deep .pagination-container .pagination-buttons-container .page-buttons-container gl-shared-component-input-button-simple .default-button:not(hover){background-color:rgba(255,255,255,.1);transition:.5s ease-in-out}:host::ng-deep .pagination-container .pagination-buttons-container .page-buttons-container gl-shared-component-input-button-simple .default-button:hover{background-color:rgba(255,255,255,.3);transition:.2s ease-in-out}:host::ng-deep .pagination-container .pagination-buttons-container .page-buttons-container gl-shared-component-input-button-simple .default-button.active{font-family:Montserrat,sans-serif;font-weight:700;background-color:#fff;color:#64666c;transition:.5s ease-in-out}:host::ng-deep .pagination-container .pagination-buttons-container .anchor-button{width:1.5em;height:1.5em;padding:.5em 0}:host::ng-deep .pagination-container .pagination-buttons-container .anchor-button#first-page{margin:0 .5em 0 0}:host::ng-deep .pagination-container .pagination-buttons-container .anchor-button#last-page{margin:0 0 0 .5em}:host::ng-deep .pagination-container .pagination-buttons-container .anchor-button img{height:1.5em;width:1.5em}:host::ng-deep .pagination-container .pagination-buttons-container .anchor-button:not(hover){opacity:.2;transition:.2s ease-in-out}:host::ng-deep .pagination-container .pagination-buttons-container .anchor-button:hover{opacity:1;transition:.2s ease-in-out}:host::ng-deep .pagination-container .number-items-page{position:absolute;right:.4em;top:.5em;display:flex;align-items:center;height:1.5em;width:20em}:host::ng-deep .pagination-container .number-items-page .label-page-items{font-family:Montserrat,sans-serif;font-weight:300;padding:.8em 1em .3em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:.8em;color:#fff;opacity:1;text-transform:uppercase;margin:0 .5em 0 0}:host::ng-deep .pagination-container .number-items-page gl-shared-component-input-button-simple{height:1.5em;width:1.5em;margin:0 .2em;flex:1 1 .2em;display:flex;justify-content:center}:host::ng-deep .pagination-container .number-items-page gl-shared-component-input-button-simple .default-button{font-family:Montserrat,sans-serif;font-weight:300;min-height:1.5em;min-width:1.5em;flex:1 1 .2em;border-radius:.2em;font-size:.6em}:host::ng-deep .pagination-container .number-items-page gl-shared-component-input-button-simple .default-button:not(hover){background-color:rgba(255,255,255,.1);transition:.5s ease-in-out}:host::ng-deep .pagination-container .number-items-page gl-shared-component-input-button-simple .default-button:hover{background-color:rgba(255,255,255,.3);transition:.2s ease-in-out}:host::ng-deep .pagination-container .number-items-page gl-shared-component-input-button-simple .default-button.active{font-family:Montserrat,sans-serif;font-weight:900;font-size:.7em;background-color:#fff;color:#4b4d52;transition:.5s ease-in-out}:host::ng-deep .pagination-container.translucid{background-color:rgba(0,0,0,.2)}"]
        })
    ], GlSharedComponentPagingComponent);
    return GlSharedComponentPagingComponent;
}());

var GlSharedComponentHeaderDefaultComponent = /** @class */ (function () {
    function GlSharedComponentHeaderDefaultComponent() {
        this.systemLogo = false;
        this.keyDown = new EventEmitter();
    }
    GlSharedComponentHeaderDefaultComponent.prototype.onKeyDown = function (event) {
        this.keyDown.emit(event);
    };
    __decorate([
        Input()
    ], GlSharedComponentHeaderDefaultComponent.prototype, "systemLogo", void 0);
    __decorate([
        Input()
    ], GlSharedComponentHeaderDefaultComponent.prototype, "labelModel", void 0);
    __decorate([
        Input()
    ], GlSharedComponentHeaderDefaultComponent.prototype, "labelId", void 0);
    __decorate([
        Input()
    ], GlSharedComponentHeaderDefaultComponent.prototype, "labelArea", void 0);
    __decorate([
        Input()
    ], GlSharedComponentHeaderDefaultComponent.prototype, "type", void 0);
    __decorate([
        Input()
    ], GlSharedComponentHeaderDefaultComponent.prototype, "title", void 0);
    __decorate([
        Input()
    ], GlSharedComponentHeaderDefaultComponent.prototype, "subtitle", void 0);
    __decorate([
        Input()
    ], GlSharedComponentHeaderDefaultComponent.prototype, "menuButtons", void 0);
    __decorate([
        Output()
    ], GlSharedComponentHeaderDefaultComponent.prototype, "keyDown", void 0);
    __decorate([
        Input()
    ], GlSharedComponentHeaderDefaultComponent.prototype, "readonly", void 0);
    GlSharedComponentHeaderDefaultComponent = __decorate([
        Component({
            selector: 'gl-shared-component-header-default',
            template: "<section class=\"header-container {{ type }}\" [attr.type]=\"type\" (window:keydown)=\"onKeyDown($event)\">\n  <div class=\"header-content {{ type }}\" >\n    <div class=\"default-logo\" *ngIf=\"type != 'only-buttons'\">\n      <ng-content select=\"[slot=default-logo]\"></ng-content>\n    </div>\n    <gl-shared-component-title-page\n      *ngIf=\"type != 'only-buttons' && !systemLogo\"\n      [title]=\"title\"\n      [subtitle]=\"subtitle\"\n    ></gl-shared-component-title-page>\n    <ng-content class=\"system-logo\" select=\"[slot=system-logo]\"></ng-content>\n\n    <div class=\"menu-bar\">\n      <div class=\"menu-buttons-container\">\n        <ng-content></ng-content>\n        <gl-shared-component-button-menu-tooltip\n          *ngFor=\"let menuButton of menuButtons;\"\n          [disabled]=\"(readonly && !menuButton.canReadonly) || (!readonly && menuButton.canReadonly && menuButton.readonly)\"\n          [tooltip]=\"menuButton.alt\"\n          [src]=\"menuButton.src\"\n          [id]=\"menuButton.id\"\n          [alt]=\"menuButton.alt\"\n          [callback]=\"menuButton.callback\">\n        </gl-shared-component-button-menu-tooltip>\n      </div>\n    </div>\n  </div>\n</section>\n",
            styles: [":host::ng-deep{max-width:100vw}:host::ng-deep .header-container{max-width:100vw;position:relative;background-color:#1a1b1d}:host::ng-deep .header-container.inverted,:host::ng-deep .header-container.light{background:linear-gradient(90deg,rgba(0,0,0,.2) 0,rgba(0,0,0,.3) 100%)}:host::ng-deep .header-container .header-content{display:flex;align-items:center}:host::ng-deep .header-container .header-content.dark,:host::ng-deep .header-container .header-content.light{border-top:.2em solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5}:host::ng-deep .header-container .header-content.inverted{border-bottom:.5px solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5}:host::ng-deep .header-container .header-content .default-logo{margin:0 .5em 0 0}:host::ng-deep .header-container .header-content .menu-bar{height:2.3em;display:flex;align-items:center;flex-grow:1;justify-content:flex-end}:host::ng-deep .header-container .header-content .menu-bar .menu-buttons-container{display:flex;align-items:center;margin:0 .5em}:host::ng-deep .header-container.only-buttons{background-color:transparent}"]
        })
    ], GlSharedComponentHeaderDefaultComponent);
    return GlSharedComponentHeaderDefaultComponent;
}());

var GlSharedComponentInputDatepickerLabelComponent = /** @class */ (function () {
    function GlSharedComponentInputDatepickerLabelComponent() {
        this.disabled = false;
        this.itemContentAlignment = 'center';
        this.value = null;
        this.dateFormat = 'DD/MM/YYYY';
        this.maxLength = 255;
        this.labelAlignment = 'center';
        this.requiredField = 'Required field';
        this.currentValue = new EventEmitter();
    }
    GlSharedComponentInputDatepickerLabelComponent.prototype.ngOnInit = function () { };
    GlSharedComponentInputDatepickerLabelComponent.prototype.onCurrentValue = function (event) {
        this.currentValue.emit(event);
    };
    __decorate([
        Input()
    ], GlSharedComponentInputDatepickerLabelComponent.prototype, "disabled", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputDatepickerLabelComponent.prototype, "id", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputDatepickerLabelComponent.prototype, "placeholder", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputDatepickerLabelComponent.prototype, "itemContentAlignment", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputDatepickerLabelComponent.prototype, "class", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputDatepickerLabelComponent.prototype, "value", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputDatepickerLabelComponent.prototype, "dateFormat", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputDatepickerLabelComponent.prototype, "maxLength", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputDatepickerLabelComponent.prototype, "labelValue", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputDatepickerLabelComponent.prototype, "labelAlignment", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputDatepickerLabelComponent.prototype, "required", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputDatepickerLabelComponent.prototype, "requiredField", void 0);
    __decorate([
        Output()
    ], GlSharedComponentInputDatepickerLabelComponent.prototype, "currentValue", void 0);
    GlSharedComponentInputDatepickerLabelComponent = __decorate([
        Component({
            selector: 'gl-shared-component-input-datepicker-label',
            template: "<gl-shared-component-input-datepicker-simple\n  [class]=\"class\"\n  [value]=\"value\"\n  (currentValue)=\"onCurrentValue($event)\"\n  [id]=\"id\"\n  [itemContentAlignment]=\"itemContentAlignment\"\n  [placeholder]=\"placeholder\"\n  [disabled]=\"disabled\"\n  [dateFormat]=\"dateFormat\"\n  [maxLength]=\"maxLength\"\n><gl-shared-component-title-label-simple\n    [id]=\"id\"\n    [labelAlignment]=\"labelAlignment\"\n    [labelValue]=\"labelValue\"\n    [required]=\"required\"\n    [class]=\"class\"\n    [requiredLabel]=\"requiredField\"\n  ></gl-shared-component-title-label-simple>\n</gl-shared-component-input-datepicker-simple>\n",
            styles: [":host::ng-deep{display:flex}:host::ng-deep gl-shared-component-title-label-simple{flex-grow:0}"]
        })
    ], GlSharedComponentInputDatepickerLabelComponent);
    return GlSharedComponentInputDatepickerLabelComponent;
}());

var GlComponentModule = /** @class */ (function () {
    function GlComponentModule() {
    }
    GlComponentModule = __decorate([
        NgModule({
            declarations: [
                GlSharedComponentAttachmentItemComponent,
                GlSharedComponentAttachmentImagePreviewComponent,
                GlSharedComponentButtonAttachmentFileComponent,
                GlSharedComponentButtonAttachmentLinkComponent,
                GlSharedComponentButtonImageSimpleComponent,
                GlSharedComponentButtonImageTooltipComponent,
                GlSharedComponentButtonMenuSimpleComponent,
                GlSharedComponentButtonMenuTooltipComponent,
                GlSharedComponentErrorMessageComponent,
                GlSharedComponentFilterComponent,
                GlSharedComponentFilterContainerComponent,
                GlSharedComponentFooterContainerComponent,
                GlSharedComponentFooterSimpleComponent,
                GlSharedComponentHeaderDefaultComponent,
                GlSharedComponentInputAutocompleteLabelComponent,
                GlSharedComponentInputAutocompleteSimpleComponent,
                GlSharedComponentInputButtonSimpleComponent,
                GlSharedComponentInputButtonHyperlinkComponent,
                GlSharedComponentInputOptionSimpleComponent,
                GlSharedComponentInputTextSimpleComponent,
                GlSharedComponentInputTextLabelComponent,
                GlSharedComponentInputTextAreaSimpleComponent,
                GlSharedComponentInputTextAreaLabelComponent,
                GlSharedComponentLogoSquareComponent,
                GlSharedComponentModalAlertComponent,
                GlSharedComponentModalAttachmentLinkComponent,
                GlSharedComponentModalHeaderComponent,
                GlSharedComponentModalLoadingComponent,
                GlSharedComponentMenuBackgroundComponent,
                GlSharedComponentMenuComponent,
                GlSharedComponentMenuItemComponent,
                GlSharedComponentPagingComponent,
                GlSharedComponentTitleLabelSimpleComponent,
                GlSharedComponentTitleLabelButtonSimpleComponent,
                GlSharedComponentTitleLabelButtonContainerComponent,
                GlSharedComponentTitlePageComponent,
                GlSharedComponentInputDatepickerSimpleComponent,
                GlSharedComponentInputDatepickerLabelComponent,
                GlSharedComponentInputDatepickerLabelComponent
            ],
            imports: [
                CommonModule,
                GlCoreModule,
                RouterModule,
                MatFormFieldModule,
                MatInputModule,
                MatAutocompleteModule,
                MatDialogModule,
                BrowserAnimationsModule,
                FormsModule,
                ReactiveFormsModule,
                OverlayModule,
                MatDatepickerModule
            ],
            exports: [
                GlSharedComponentAttachmentItemComponent,
                GlSharedComponentAttachmentImagePreviewComponent,
                GlSharedComponentButtonImageSimpleComponent,
                GlSharedComponentButtonAttachmentLinkComponent,
                GlSharedComponentButtonImageTooltipComponent,
                GlSharedComponentButtonMenuSimpleComponent,
                GlSharedComponentButtonMenuTooltipComponent,
                GlSharedComponentErrorMessageComponent,
                GlSharedComponentFilterComponent,
                GlSharedComponentFilterContainerComponent,
                GlSharedComponentFooterContainerComponent,
                GlSharedComponentFooterSimpleComponent,
                GlSharedComponentHeaderDefaultComponent,
                GlSharedComponentInputAutocompleteLabelComponent,
                GlSharedComponentInputAutocompleteSimpleComponent,
                GlSharedComponentInputButtonSimpleComponent,
                GlSharedComponentInputButtonHyperlinkComponent,
                GlSharedComponentInputOptionSimpleComponent,
                GlSharedComponentInputTextAreaSimpleComponent,
                GlSharedComponentInputTextAreaLabelComponent,
                GlSharedComponentInputTextLabelComponent,
                GlSharedComponentInputTextSimpleComponent,
                GlSharedComponentLogoSquareComponent,
                GlSharedComponentMenuBackgroundComponent,
                GlSharedComponentMenuComponent,
                GlSharedComponentMenuItemComponent,
                GlSharedComponentModalAlertComponent,
                GlSharedComponentModalAttachmentLinkComponent,
                GlSharedComponentModalHeaderComponent,
                GlSharedComponentModalLoadingComponent,
                GlSharedComponentPagingComponent,
                GlSharedComponentTitlePageComponent,
                GlSharedComponentTitleLabelButtonSimpleComponent,
                GlSharedComponentTitleLabelButtonContainerComponent,
                GlSharedComponentTitleLabelSimpleComponent,
                GlSharedComponentButtonAttachmentFileComponent,
                GlSharedComponentInputDatepickerSimpleComponent,
                GlSharedComponentInputDatepickerLabelComponent
            ]
        })
    ], GlComponentModule);
    return GlComponentModule;
}());

var GlSharedModule = /** @class */ (function () {
    function GlSharedModule() {
    }
    GlSharedModule = __decorate([
        NgModule({
            declarations: [],
            imports: [
                CommonModule,
                GlComponentModule
            ]
        })
    ], GlSharedModule);
    return GlSharedModule;
}());

var GlNgFrontendModule = /** @class */ (function () {
    function GlNgFrontendModule() {
    }
    GlNgFrontendModule = __decorate([
        NgModule({
            declarations: [],
            imports: [
                BrowserModule,
                HttpClientModule,
                ReactiveFormsModule,
                GlSharedModule,
                GlCoreModule,
            ],
            exports: [],
            providers: []
        })
    ], GlNgFrontendModule);
    return GlNgFrontendModule;
}());

var GlSharedComponentInputDatepickerSimpleService = /** @class */ (function () {
    function GlSharedComponentInputDatepickerSimpleService() {
    }
    GlSharedComponentInputDatepickerSimpleService.ɵprov = ɵɵdefineInjectable({ factory: function GlSharedComponentInputDatepickerSimpleService_Factory() { return new GlSharedComponentInputDatepickerSimpleService(); }, token: GlSharedComponentInputDatepickerSimpleService, providedIn: "root" });
    GlSharedComponentInputDatepickerSimpleService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], GlSharedComponentInputDatepickerSimpleService);
    return GlSharedComponentInputDatepickerSimpleService;
}());

var GlSharedViewErrorMessageComponent = /** @class */ (function () {
    function GlSharedViewErrorMessageComponent() {
        this.logoHorizontalPosition = 'left';
        this.logoVerticalPosition = 'top';
        this.errorPosition = 'left';
        this.errorButtonAction$ = new EventEmitter();
        this.footerImageDescription = 'Image logo';
    }
    GlSharedViewErrorMessageComponent.prototype.ngAfterViewInit = function () {
        var mainContainer = this.mainContainer.nativeElement;
        var mainContainerParent = this.mainContainer.nativeElement.parentNode;
        mainContainer.style.backgroundImage = "url(" + this.background + ")";
        mainContainerParent.style.backgroundImage = "url(" + this.blurBackground + ")";
    };
    GlSharedViewErrorMessageComponent.prototype.errorButtonAction = function () {
        this.errorButtonAction$.emit();
    };
    __decorate([
        ViewChild('mainContainer')
    ], GlSharedViewErrorMessageComponent.prototype, "mainContainer", void 0);
    __decorate([
        Input()
    ], GlSharedViewErrorMessageComponent.prototype, "blurBackground", void 0);
    __decorate([
        Input()
    ], GlSharedViewErrorMessageComponent.prototype, "background", void 0);
    __decorate([
        Input()
    ], GlSharedViewErrorMessageComponent.prototype, "logoImageScr", void 0);
    __decorate([
        Input()
    ], GlSharedViewErrorMessageComponent.prototype, "logoImageAlt", void 0);
    __decorate([
        Input()
    ], GlSharedViewErrorMessageComponent.prototype, "logoHorizontalPosition", void 0);
    __decorate([
        Input()
    ], GlSharedViewErrorMessageComponent.prototype, "logoVerticalPosition", void 0);
    __decorate([
        Input()
    ], GlSharedViewErrorMessageComponent.prototype, "errorPosition", void 0);
    __decorate([
        Input()
    ], GlSharedViewErrorMessageComponent.prototype, "errorCode", void 0);
    __decorate([
        Input()
    ], GlSharedViewErrorMessageComponent.prototype, "errorMessage", void 0);
    __decorate([
        Input()
    ], GlSharedViewErrorMessageComponent.prototype, "errorButtonLabel", void 0);
    __decorate([
        Output()
    ], GlSharedViewErrorMessageComponent.prototype, "errorButtonAction$", void 0);
    __decorate([
        Input()
    ], GlSharedViewErrorMessageComponent.prototype, "footerMainDescription", void 0);
    __decorate([
        Input()
    ], GlSharedViewErrorMessageComponent.prototype, "footerShowContainer", void 0);
    __decorate([
        Input()
    ], GlSharedViewErrorMessageComponent.prototype, "footerDescription", void 0);
    __decorate([
        Input()
    ], GlSharedViewErrorMessageComponent.prototype, "footerImageDescription", void 0);
    __decorate([
        Input()
    ], GlSharedViewErrorMessageComponent.prototype, "footerImageSrc", void 0);
    __decorate([
        Input()
    ], GlSharedViewErrorMessageComponent.prototype, "footerLink", void 0);
    GlSharedViewErrorMessageComponent = __decorate([
        Component({
            selector: 'gl-shared-view-error-message',
            template: "<div #mainContainer class=\"main-container\">\n  <gl-shared-component-logo-square\n    [horizontalPosition]=\"logoHorizontalPosition\"\n    [verticalPosition]=\"logoVerticalPosition\"\n    [imageAlt]=\"logoImageAlt\"\n    [imageScr]=\"logoImageScr\"\n  ></gl-shared-component-logo-square>\n  <gl-shared-component-error-message\n    [position]=\"errorPosition\"\n    [errorCode]=\"errorCode\"\n    [errorMessage]=\"errorMessage\"\n    [buttonLabel]=\"errorButtonLabel\"\n    (buttonAction$)=\"errorButtonAction()\"\n  ></gl-shared-component-error-message>\n  <gl-shared-component-footer-container [description]=\"footerMainDescription\">\n    <gl-shared-component-input-button-hyperlink\n      *ngIf=\"footerShowContainer\"\n      [description]=\"footerDescription\"\n      [imageDescription]=\"footerImageDescription\"\n      [imageSrc]=\"footerImageSrc\"\n      [link]=\"footerLink\"\n    ></gl-shared-component-input-button-hyperlink>\n  </gl-shared-component-footer-container>\n</div>\n",
            styles: [":host::ng-deep{display:flex;flex-grow:1;background-color:#1a1b1d}:host::ng-deep .main-container{display:flex;flex-direction:column;justify-items:stretch;height:100vh;width:100vw;overflow:hidden;flex-grow:1;background-size:101%;background-position:top center;background-repeat:no-repeat;-webkit-animation-name:start;animation-name:start;-webkit-animation-duration:3s;animation-duration:3s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-play-state:running;animation-play-state:running}@-webkit-keyframes start{from{opacity:0}to{opacity:1}}@keyframes start{from{opacity:0}to{opacity:1}}"]
        })
    ], GlSharedViewErrorMessageComponent);
    return GlSharedViewErrorMessageComponent;
}());

var GlSharedViewModule = /** @class */ (function () {
    function GlSharedViewModule() {
    }
    GlSharedViewModule = __decorate([
        NgModule({
            declarations: [
                GlSharedViewErrorMessageComponent
            ],
            exports: [
                GlSharedViewErrorMessageComponent
            ],
            imports: [
                CommonModule,
                GlComponentModule
            ]
        })
    ], GlSharedViewModule);
    return GlSharedViewModule;
}());

/*
 * Public API Surface of gl-ng-frontend
 */
// endregion
// endregion

/**
 * Generated bundle index. Do not edit.
 */

export { CoreDirectivesAutofocusDirective, GlComponentModule, GlCoreModule, GlNgFrontendModule, GlSharedComponentAttachmentImagePreviewComponent, GlSharedComponentAttachmentImagePreviewService, GlSharedComponentAttachmentItemComponent, GlSharedComponentButtonAttachmentFileComponent, GlSharedComponentButtonAttachmentFileService, GlSharedComponentButtonAttachmentLinkComponent, GlSharedComponentButtonImageSimpleComponent, GlSharedComponentButtonImageTooltipComponent, GlSharedComponentButtonMenuSimpleComponent, GlSharedComponentButtonMenuTooltipComponent, GlSharedComponentErrorMessageComponent, GlSharedComponentFilterComponent, GlSharedComponentFilterContainerComponent, GlSharedComponentFilterService, GlSharedComponentFooterContainerComponent, GlSharedComponentFooterSimpleComponent, GlSharedComponentHeaderDefaultComponent, GlSharedComponentInputAutocompleteLabelComponent, GlSharedComponentInputAutocompleteSimpleComponent, GlSharedComponentInputAutocompleteSimpleService, GlSharedComponentInputButtonHyperlinkComponent, GlSharedComponentInputButtonSimpleComponent, GlSharedComponentInputDatepickerLabelComponent, GlSharedComponentInputDatepickerSimpleComponent, GlSharedComponentInputDatepickerSimpleService, GlSharedComponentInputOptionSimpleComponent, GlSharedComponentInputTextAreaLabelComponent, GlSharedComponentInputTextAreaSimpleComponent, GlSharedComponentInputTextLabelComponent, GlSharedComponentInputTextSimpleComponent, GlSharedComponentLogoSquareComponent, GlSharedComponentMenuBackgroundComponent, GlSharedComponentMenuComponent, GlSharedComponentMenuItemComponent, GlSharedComponentMenuService, GlSharedComponentModalAlertComponent, GlSharedComponentModalAlertService, GlSharedComponentModalAttachmentLinkComponent, GlSharedComponentModalAttachmentLinkService, GlSharedComponentModalHeaderComponent, GlSharedComponentModalLoadingComponent, GlSharedComponentModalLoadingService, GlSharedComponentPagingComponent, GlSharedComponentTitleLabelButtonContainerComponent, GlSharedComponentTitleLabelButtonSimpleComponent, GlSharedComponentTitleLabelSimpleComponent, GlSharedComponentTitlePageComponent, GlSharedModule, GlSharedViewErrorMessageComponent, GlSharedViewModule, ɵ0 };
//# sourceMappingURL=gl-ng-frontend.js.map
