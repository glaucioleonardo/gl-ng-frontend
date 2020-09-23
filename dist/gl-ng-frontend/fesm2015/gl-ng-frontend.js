import { Directive, ElementRef, NgModule, Component, Input, EventEmitter, Output, ViewChild, ɵɵdefineInjectable, Injectable, ɵɵinject } from '@angular/core';
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
import { DateGet, InputMask, AttachmentParser, AttachmentValidate, StringConverter, AttachmentIcon, AttachmentConvert, ImageResize } from 'gl-w-frontend';
import { Subject } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { __awaiter } from 'tslib';
import { startWith, map } from 'rxjs/operators';

class CoreDirectivesAutofocusDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    ngOnInit() {
        this.elementRef.nativeElement.focus();
    }
}
CoreDirectivesAutofocusDirective.decorators = [
    { type: Directive, args: [{
                selector: '[glAutoFocus]'
            },] }
];
CoreDirectivesAutofocusDirective.ctorParameters = () => [
    { type: ElementRef }
];

class GlCoreModule {
}
GlCoreModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    CoreDirectivesAutofocusDirective
                ],
                exports: [
                    CoreDirectivesAutofocusDirective
                ],
                imports: [
                    CommonModule
                ]
            },] }
];

class GlSharedComponentInputButtonSimpleComponent {
    constructor() { }
}
GlSharedComponentInputButtonSimpleComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-input-button-simple',
                template: "<button\n  type=\"button\"\n  class=\"default-button {{ class }}\"\n  [value]=\"value\"\n>{{ innerValue }}</button>\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep{display:flex;flex:1 1 0;height:2em}:host::ng-deep .default-button{background-color:#fff;border:none;color:#1a1b1d;flex:1 1 0;font-family:Montserrat,sans-serif;font-size:.5em;font-weight:300;text-transform:uppercase}:host::ng-deep .default-button.light-translucid{background-color:hsla(0,0%,100%,.1);font-family:Montserrat,sans-serif;font-weight:300}:host::ng-deep .default-button:focus,:host::ng-deep .default-button:hover{opacity:1;transition:all .3s ease-in-out}:host::ng-deep .light-translucid.default-button:focus,:host::ng-deep .light-translucid.default-button:hover{background-color:hsla(0,0%,100%,.9);color:#4b4d52;font-family:Montserrat,sans-serif;font-weight:300}:host::ng-deep .default-button:not(hover){opacity:.8;transition:all .3s ease-in-out}"]
            },] }
];
GlSharedComponentInputButtonSimpleComponent.ctorParameters = () => [];
GlSharedComponentInputButtonSimpleComponent.propDecorators = {
    value: [{ type: Input }],
    class: [{ type: Input }],
    innerValue: [{ type: Input }]
};

const ɵ0 = MAT_MOMENT_DATE_FORMATS;
class GlSharedComponentInputDatepickerSimpleDayMonthYearComponent {
    constructor() {
        this.disabled = false;
        this.itemContentAlignment = 'center';
        this.value = null;
        this.maxLength = 255;
        this.currentValue = new EventEmitter();
        this.dateFormat = 'DD/MM/YYYY';
    }
    clear() {
        this.currentValue.emit({
            date: null,
            dateString: null
        });
    }
    changed(event) {
        this.currentValue.emit({
            date: DateGet.customDateNoUTC(event.value, this.dateFormat),
            dateString: DateGet.customDateNoUTCString(event.value, this.dateFormat)
        });
    }
}
GlSharedComponentInputDatepickerSimpleDayMonthYearComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-input-datepicker-simple-day-month-year',
                template: "<ng-content></ng-content>\n<mat-form-field appearance=\"none\" floatLabel=\"never\">\n<!--  <mat-label>Input disabled</mat-label>-->\n  <input\n    class=\"item-content {{ itemContentAlignment }} {{ class }}\"\n    [id]=\"id\"\n    [placeholder]=\"placeholder\"\n    [value]=\"value\"\n    [matDatepicker]=\"dp3\"\n    [attr.maxlength]=\"maxLength\"\n    (dateChange)=\"changed($event)\"\n    matInput\n    disabled>\n  <mat-datepicker-toggle *ngIf=\"!disabled\" matSuffix (click)=\"clear()\">\n    <img\n      matDatepickerToggleIcon\n      class=\"datepicker-button\"\n      alt=\"Date picker icon\"\n      src=\"../assets/img/icon/datepicker/clear.svg\">\n  </mat-datepicker-toggle>\n  <mat-datepicker-toggle *ngIf=\"!disabled\" matSuffix [for]=\"dp3\">\n    <img\n      matDatepickerToggleIcon\n      class=\"datepicker-button\"\n      alt=\"Date picker icon\"\n      src=\"../assets/img/icon/datepicker/date.svg\">\n  </mat-datepicker-toggle>\n  <mat-datepicker #dp3 disabled=\"false\"></mat-datepicker>\n</mat-form-field>\n",
                providers: [
                    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
                    {
                        provide: DateAdapter,
                        useClass: MomentDateAdapter,
                        deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                    },
                    { provide: MAT_DATE_FORMATS, useValue: ɵ0 },
                ],
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep{background-color:#333437;display:flex;flex-direction:column;flex-grow:1;position:relative}:host::ng-deep mat-form-field{display:flex;flex-grow:1;line-height:1}:host::ng-deep mat-form-field .mat-form-field-wrapper{display:flex;flex-grow:1;padding:0}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex{align-items:center;border-radius:0;height:1.275em;padding:.2em .3em .2em .45em}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix{border:none;display:flex;padding:0;width:auto}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-suffix{display:flex;flex-direction:row}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-suffix .mat-datepicker-toggle{margin:0 0 0 .1em}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-suffix .mat-datepicker-toggle .mat-focus-indicator{height:.8em;width:.8em}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-suffix .mat-datepicker-toggle .mat-focus-indicator .mat-button-wrapper{align-items:center;display:flex;height:.8em;width:.8em}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-suffix .mat-datepicker-toggle .mat-focus-indicator .mat-button-wrapper .datepicker-button,:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-suffix .mat-datepicker-toggle .mat-focus-indicator .mat-button-wrapper svg{height:.8em;width:.8em}:host::ng-deep mat-form-field .item-content{border:none;color:#fff;flex-grow:1;font-family:Montserrat,sans-serif;font-size:.45em;font-weight:400}:host::ng-deep mat-form-field .item-content:focus{outline:none!important}:host::ng-deep mat-form-field .item-content::-moz-placeholder{color:#64666c!important}:host::ng-deep mat-form-field .item-content::-ms-input-placeholder{color:#64666c!important}:host::ng-deep mat-form-field .item-content::placeholder{color:#64666c!important}:host::ng-deep mat-form-field .item-content.left{text-align:left}:host::ng-deep mat-form-field .item-content.center{text-align:center}:host::ng-deep mat-form-field .item-content.right{text-align:right}:host::ng-deep mat-form-field .item-content.light{background-color:rgba(0,0,0,.1)}:host::ng-deep mat-form-field .item-content.light::-moz-placeholder{color:hsla(0,0%,100%,.2)!important}:host::ng-deep mat-form-field .item-content.light:-ms-input-placeholder{color:hsla(0,0%,100%,.2)!important}:host::ng-deep mat-form-field .item-content.light::-ms-input-placeholder{color:hsla(0,0%,100%,.2)!important}:host::ng-deep mat-form-field .item-content.light::placeholder{color:hsla(0,0%,100%,.2)!important}:host::ng-deep mat-form-field .item-content.dark{background-color:#161617}:host::ng-deep mat-form-field .item-content:-ms-input-placeholder{color:#64666c!important}:host::ng-deep mat-form-field .item-content.light:-ms-input-placeholder{color:grey!important}"]
            },] }
];
GlSharedComponentInputDatepickerSimpleDayMonthYearComponent.ctorParameters = () => [];
GlSharedComponentInputDatepickerSimpleDayMonthYearComponent.propDecorators = {
    disabled: [{ type: Input }],
    id: [{ type: Input }],
    placeholder: [{ type: Input }],
    itemContentAlignment: [{ type: Input }],
    class: [{ type: Input }],
    value: [{ type: Input }],
    maxLength: [{ type: Input }],
    currentValue: [{ type: Output }]
};

class GlSharedComponentInputOptionSimpleComponent {
    constructor() {
        this.itemSelected = new EventEmitter();
    }
    onCheck(value, input) {
        input.checked = true;
        this.itemSelected.emit(value);
    }
}
GlSharedComponentInputOptionSimpleComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-input-option-simple',
                template: "<div class=\"input-container\">\n  <!--suppress HtmlFormInputWithoutLabel -->\n  <input\n    #input\n    [checked]=\"checked\"\n    class=\"input-radio\"\n    type=\"radio\"\n    [value]=\"value\"\n    [id]=\"id\"\n    [name]=\"name\"\n    (click)=\"onCheck(value, input)\">\n  <span (click)=\"onCheck(value, input)\" class=\"check-mark\"></span>\n  <label class=\"label\" [for]=\"id\">{{ label }}</label>\n</div>\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep{display:block;flex-grow:1}:host::ng-deep .input-container{align-items:center;display:flex;flex-grow:1;padding:.2em .2em 0;position:relative}:host::ng-deep .input-container:not(hover) .check-mark{background-color:#1a1b1d;transition:all .3s ease-in-out}:host::ng-deep .input-container:hover .check-mark{background-color:#333437;transition:all .3s ease-in-out}:host::ng-deep .input-container .input-radio{cursor:pointer;height:2.2em;left:.75em;opacity:0;position:absolute;top:.9em;width:2.2em}:host::ng-deep .input-container .input-radio:checked~.check-mark{background-color:#1a1b1d}:host::ng-deep .input-container .input-radio:checked~.check-mark:after{background-color:#d24077;border-radius:50%;height:.5em;left:.24em;opacity:1;top:.25em;transition:opacity .5s ease-in-out,background-color .5s ease-in-out;visibility:visible;width:.5em}:host::ng-deep .input-container .check-mark{background-color:#d24077;border-radius:50%;cursor:pointer;height:1em;left:0;margin:0 .2em 0 0;position:relative;top:0;width:1em}:host::ng-deep .input-container .check-mark:after{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;content:\"\";opacity:0;pointer-events:none;position:absolute;transition:opacity .5s ease-in-out,background-color .5s ease-in-out;user-select:none;visibility:collapse}:host::ng-deep .input-container .check-mark:after:hover{transform:scale(1.1);transition:all .2s ease-in-out}:host::ng-deep .input-container .label{color:#64666c;font-family:Montserrat,sans-serif;font-size:.6em;font-weight:400}"]
            },] }
];
GlSharedComponentInputOptionSimpleComponent.ctorParameters = () => [];
GlSharedComponentInputOptionSimpleComponent.propDecorators = {
    value: [{ type: Input }],
    id: [{ type: Input }],
    label: [{ type: Input }],
    name: [{ type: Input }],
    checked: [{ type: Input }],
    itemSelected: [{ type: Output }]
};

class GlSharedComponentInputTextSimpleComponent {
    constructor() {
        this.disabled = false;
        this.autocomplete = false;
        this.value = null;
        this.maxLength = 255;
        this.currentValue = new EventEmitter();
    }
    onKeyUp(args) {
        if (args.target.value.trim().length > 0) {
            args.target.classList.remove('required-fill');
        }
        this.currentValue.emit({ value: args.target.value });
    }
    ngAfterViewInit() {
        setTimeout(() => {
            if (this.mask != null && this.mask.includes('currency')) {
                this.inputElement.nativeElement.placeholder = InputMask.currency(this.inputElement.nativeElement, this.mask, this.maskSymbol);
            }
        }, 0);
    }
}
GlSharedComponentInputTextSimpleComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-input-text-simple',
                template: "<!--suppress HtmlFormInputWithoutLabel -->\n<input\n  #inputElement\n  class=\"item-content {{ itemContentAlignment }} {{ class }}\"\n  type=\"text\"\n  [id]=\"id\"\n  [value]=\"value\"\n  [autocomplete]=\"'off'\"\n  required\n  [placeholder]=\"placeholder\"\n  (keyup)=\"onKeyUp($event)\"\n  [disabled]=\"disabled\"\n  [maxLength]=\"maxLength\">\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");.required-fill{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:all .2s ease-in-out}.required-fill::-moz-placeholder{color:hsla(0,0%,100%,.3)!important}.required-fill:-ms-input-placeholder{color:hsla(0,0%,100%,.3)!important}.required-fill::-ms-input-placeholder{color:hsla(0,0%,100%,.3)!important}.required-fill::placeholder{color:hsla(0,0%,100%,.3)!important}.error-highlight{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:all .2s ease-in-out}.error-highlight::-moz-placeholder{color:hsla(0,0%,100%,.3)!important}.error-highlight:-ms-input-placeholder{color:hsla(0,0%,100%,.3)!important}.error-highlight::-ms-input-placeholder{color:hsla(0,0%,100%,.3)!important}.error-highlight::placeholder{color:hsla(0,0%,100%,.3)!important}:host::ng-deep{align-items:stretch;display:flex;flex:1 0 auto;flex-direction:column;position:relative}:host::ng-deep .item-content{background-color:#333437;border:none;color:#fff;flex-grow:1;font-family:Montserrat,sans-serif;font-size:.45em;font-weight:400;padding:.8em}:host::ng-deep .item-content:focus{outline:none!important}:host::ng-deep .item-content::-moz-placeholder{color:#64666c!important}:host::ng-deep .item-content::-ms-input-placeholder{color:#64666c!important}:host::ng-deep .item-content::placeholder{color:#64666c!important}:host::ng-deep .item-content.left{text-align:left}:host::ng-deep .item-content.center{text-align:center}:host::ng-deep .item-content.right{text-align:right}:host::ng-deep .item-content.light{background-color:rgba(0,0,0,.1)}:host::ng-deep .item-content.light::-moz-placeholder{color:hsla(0,0%,100%,.2)!important}:host::ng-deep .item-content.light:-ms-input-placeholder{color:hsla(0,0%,100%,.2)!important}:host::ng-deep .item-content.light::-ms-input-placeholder{color:hsla(0,0%,100%,.2)!important}:host::ng-deep .item-content.light::placeholder{color:hsla(0,0%,100%,.2)!important}:host::ng-deep .item-content.dark{background-color:#161617}:host::ng-deep .item-content:-ms-input-placeholder{color:#64666c!important}:host::ng-deep .item-content.light:-ms-input-placeholder{color:grey!important}"]
            },] }
];
GlSharedComponentInputTextSimpleComponent.ctorParameters = () => [];
GlSharedComponentInputTextSimpleComponent.propDecorators = {
    inputElement: [{ type: ViewChild, args: ['inputElement', { read: ElementRef, static: true },] }],
    disabled: [{ type: Input }],
    autocomplete: [{ type: Input }],
    id: [{ type: Input }],
    placeholder: [{ type: Input }],
    itemContentAlignment: [{ type: Input }],
    class: [{ type: Input }],
    value: [{ type: Input }],
    mask: [{ type: Input }],
    maskSymbol: [{ type: Input }],
    maxLength: [{ type: Input }],
    currentValue: [{ type: Output }],
    onKeyUp: [{ type: Output }]
};

class GlSharedComponentTitleLabelSimpleComponent {
    constructor() {
        this.class = '';
        this.required = false;
        this.requiredLabel = 'Required field';
    }
}
GlSharedComponentTitleLabelSimpleComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-title-label-simple',
                template: "<label\n  class=\"header-data {{ labelAlignment }} {{ class }}\"\n  [attr.for]=\"id\">{{ labelValue }}\n</label>\n<img\n  *ngIf=\"required\"\n  src=\"../assets/img/icon/label/dot.svg\"\n  class=\"required-fill-dot {{ class }}\"\n  [title]=\"requiredLabel\"\n  alt=\"Required fill icon\">\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep{display:flex;flex-grow:1;max-height:1.3em;min-height:1.3em}:host::ng-deep .header-data{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;background-color:#2c2c2f;color:#fff;flex-grow:1;font-family:Montserrat,sans-serif;font-size:.45em;font-weight:400;padding:1em;position:relative;text-align:center;user-select:none}:host::ng-deep .header-data.light{background-color:rgba(0,0,0,.3)}:host::ng-deep .header-data.dark{background-color:#111112}:host::ng-deep .header-data.left{text-align:left}:host::ng-deep .header-data.center{text-align:center}:host::ng-deep .header-data.right{text-align:right}:host::ng-deep .header-data.report{background-color:rgba(0,0,0,.1);color:#fff;font-family:Montserrat,sans-serif;font-size:1em;font-weight:100;padding:.5em;text-transform:uppercase}:host::ng-deep .required-fill-dot{height:.3em;position:absolute;right:.2em;top:.5em;width:.3em}"]
            },] }
];
GlSharedComponentTitleLabelSimpleComponent.ctorParameters = () => [];
GlSharedComponentTitleLabelSimpleComponent.propDecorators = {
    labelValue: [{ type: Input }],
    id: [{ type: Input }],
    labelAlignment: [{ type: Input }],
    class: [{ type: Input }],
    required: [{ type: Input }],
    requiredLabel: [{ type: Input }]
};

class GlSharedComponentInputTextLabelSimpleComponent {
    constructor() {
        this.disabled = false;
        this.autocomplete = false;
        this.value = null;
        this.maxLength = 255;
        this.requiredLabel = 'Required field';
        this.currentValue = new EventEmitter();
    }
    onKeyUp(values) { this.currentValue.emit(values); }
}
GlSharedComponentInputTextLabelSimpleComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-input-text-label-simple',
                template: "<div class=\"item-container\">\n  <gl-shared-component-title-label-simple\n    [id]=\"id\"\n    [labelValue]=\"labelValue\"\n    [labelAlignment]=\"labelAlignment\"\n    [required]=\"required\"\n    [class]=\"class\"\n    [requiredLabel]=\"requiredLabel\"\n  ></gl-shared-component-title-label-simple>\n  <gl-shared-component-input-text-simple\n    [class]=\"class\"\n    [value]=\"value\"\n    [id]=\"id\"\n    [itemContentAlignment]=\"itemContentAlignment\"\n    [placeholder]=\"placeholder\"\n    (currentValue)=\"onKeyUp($event)\"\n    [disabled]=\"disabled\"\n    [autocomplete]=\"autocomplete\"\n\n    [mask]=\"mask\"\n    [maskSymbol]=\"maskSymbol\"\n    [maxLength]=\"maxLength\"\n  ></gl-shared-component-input-text-simple>\n</div>\n",
                styles: [":host::ng-deep{display:flex;flex:1 0 auto}:host::ng-deep .item-container{align-items:stretch;display:flex;flex:1 0 auto;flex-direction:column;position:relative}:host::ng-deep .item-container ::ng-deep gl-shared-component-input-text-simple{margin:0}"]
            },] }
];
GlSharedComponentInputTextLabelSimpleComponent.ctorParameters = () => [];
GlSharedComponentInputTextLabelSimpleComponent.propDecorators = {
    disabled: [{ type: Input }],
    autocomplete: [{ type: Input }],
    id: [{ type: Input }],
    labelAlignment: [{ type: Input }],
    labelValue: [{ type: Input }],
    placeholder: [{ type: Input }],
    itemContentAlignment: [{ type: Input }],
    class: [{ type: Input }],
    value: [{ type: Input }],
    mask: [{ type: Input }],
    maskSymbol: [{ type: Input }],
    maxLength: [{ type: Input }],
    required: [{ type: Input }],
    requiredLabel: [{ type: Input }],
    currentValue: [{ type: Output }]
};

class GlSharedComponentInputTextAreaSimpleComponent {
    constructor() {
        this.disabled = false;
        this.value = '';
        this.currentValue = new EventEmitter();
    }
    onKeyUp(args) {
        const value = args.target.value;
        if (value.trim().length > 0) {
            this.textArea.nativeElement.classList.remove('required-fill');
        }
        this.currentValue.emit({ value });
    }
}
GlSharedComponentInputTextAreaSimpleComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-input-text-area-simple',
                template: "<div class=\"item-container\">\n  <ng-content></ng-content>\n  <!--suppress HtmlFormInputWithoutLabel -->\n  <textarea\n    #textArea\n    class=\"item-content {{ itemContentAlignment }} {{ class }}\"\n    [id]=\"id\"\n    [placeholder]=\"placeholder\"\n    (keyup)=\"onKeyUp($event)\"\n    [value]=\"value\"\n    [disabled]=\"disabled\"\n    [maxLength]=\"maxLength\"\n  ></textarea>\n</div>\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep .item-container .item-content::-webkit-scrollbar:horizontal{height:.5em}:host::ng-deep .item-container .item-content::-webkit-scrollbar{width:.5em}:host::ng-deep .item-container .item-content::-webkit-scrollbar-button{background-color:#333437;display:none!important}:host::ng-deep .item-container .item-content::-webkit-scrollbar-track-piece{background-color:#2c2c2f}:host::ng-deep .item-container .item-content::-webkit-scrollbar-thumb{background-color:#64666c;border:1px solid #38393c}:host::ng-deep .item-container .item-content::-webkit-scrollbar-corner{background-color:#64666c!important}.required-fill{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:all .2s ease-in-out}.required-fill::-moz-placeholder{color:hsla(0,0%,100%,.3)!important}.required-fill:-ms-input-placeholder{color:hsla(0,0%,100%,.3)!important}.required-fill::-ms-input-placeholder{color:hsla(0,0%,100%,.3)!important}.required-fill::placeholder{color:hsla(0,0%,100%,.3)!important}.error-highlight{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:all .2s ease-in-out}.error-highlight::-moz-placeholder{color:hsla(0,0%,100%,.3)!important}.error-highlight:-ms-input-placeholder{color:hsla(0,0%,100%,.3)!important}.error-highlight::-ms-input-placeholder{color:hsla(0,0%,100%,.3)!important}.error-highlight::placeholder{color:hsla(0,0%,100%,.3)!important}:host::ng-deep{display:flex;flex:1 0 auto}:host::ng-deep .item-container{align-items:stretch;display:flex;flex:1 0 auto;flex-direction:column;position:relative}:host::ng-deep .item-container gl-shared-component-title-label-simple{flex-grow:0}:host::ng-deep .item-container .item-content{background-color:#333437;border:none;color:#fff;flex-grow:1;font-family:Montserrat,sans-serif;font-size:.45em;font-weight:300;overflow-x:hidden;overflow-y:auto;padding:.8em;resize:none;text-align:left}:host::ng-deep .item-container .item-content::-webkit-scrollbar{width:1em}:host::ng-deep .item-container .item-content:focus{outline:none!important}:host::ng-deep .item-container .item-content::-moz-placeholder{color:#64666c}:host::ng-deep .item-container .item-content:-ms-input-placeholder{color:#64666c}:host::ng-deep .item-container .item-content::-ms-input-placeholder{color:#64666c}:host::ng-deep .item-container .item-content::placeholder{color:#64666c}:host::ng-deep .item-container .item-content.light{background-color:rgba(0,0,0,.1)}:host::ng-deep .item-container .item-content.dark{background-color:#161617}:host::ng-deep .item-container .item-content:-ms-input-placeholder{color:#64666c!important}:host::ng-deep .item-container .item-content.light:-ms-input-placeholder{color:hsla(0,0%,100%,.2)!important}"]
            },] }
];
GlSharedComponentInputTextAreaSimpleComponent.ctorParameters = () => [];
GlSharedComponentInputTextAreaSimpleComponent.propDecorators = {
    textArea: [{ type: ViewChild, args: ['textArea', { read: ElementRef, static: true },] }],
    disabled: [{ type: Input }],
    id: [{ type: Input }],
    labelAlignment: [{ type: Input }],
    labelValue: [{ type: Input }],
    placeholder: [{ type: Input }],
    itemContentAlignment: [{ type: Input }],
    class: [{ type: Input }],
    value: [{ type: Input }],
    maxLength: [{ type: Input }],
    currentValue: [{ type: Output }]
};

class GlSharedComponentInputTextAreaLabelComponent {
    constructor() {
        this.disabled = false;
        this.value = '';
        this.requiredLabel = 'Required label';
        this.currentValue = new EventEmitter();
    }
    onKeyUp(values) {
        this.currentValue.emit(values);
    }
}
GlSharedComponentInputTextAreaLabelComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-input-text-area-label',
                template: "<gl-shared-component-input-text-area-simple\n  [class]=\"class\"\n  [id]=\"id\"\n  [placeholder]=\"placeholder\"\n  [itemContentAlignment]=\"itemContentAlignment\"\n  (currentValue)=\"onKeyUp($event)\"\n  [value]=\"value\"\n  [disabled]=\"disabled\"\n  [maxLength]=\"maxLength\">\n  <gl-shared-component-title-label-simple\n    [class]=\"class\"\n    [labelAlignment]=\"labelAlignment\"\n    [id]=\"id\"\n    [labelValue]=\"labelValue\"\n    [required]=\"required\"\n    [requiredLabel]=\"requiredLabel\"\n  ></gl-shared-component-title-label-simple>\n</gl-shared-component-input-text-area-simple>\n",
                styles: [":host::ng-deep{display:flex;flex-grow:1}"]
            },] }
];
GlSharedComponentInputTextAreaLabelComponent.ctorParameters = () => [];
GlSharedComponentInputTextAreaLabelComponent.propDecorators = {
    disabled: [{ type: Input }],
    id: [{ type: Input }],
    labelAlignment: [{ type: Input }],
    labelValue: [{ type: Input }],
    placeholder: [{ type: Input }],
    itemContentAlignment: [{ type: Input }],
    class: [{ type: Input }],
    value: [{ type: Input }],
    maxLength: [{ type: Input }],
    required: [{ type: Input }],
    requiredLabel: [{ type: Input }],
    currentValue: [{ type: Output }]
};

class GlSharedComponentModalAlertService {
    constructor() {
        this.isOK = true;
        this.currentValue = new Subject();
    }
    show(message) {
        return this.modal(true, true, message);
    }
    showYesNo(message, customYes, customNo) {
        this.customYes = customYes;
        this.customNo = customNo;
        console.log(customNo);
        console.log(customYes);
        return this.modal(true, false, message);
    }
    hide() {
        this.modal(false, this.isOK, this.message);
    }
    onNo() {
        this.currentValue.next(false);
        this.resolvePromise(false);
        this.hide();
    }
    onYes() {
        this.currentValue.next(true);
        this.resolvePromise(true);
        this.hide();
    }
    onOk() {
        this.currentValue.next(true);
        this.resolvePromise(true);
        this.hide();
    }
    modal(show, isOK = true, message = '') {
        return new Promise(resolve => {
            this.resolvePromise = resolve;
            this.isOK = isOK;
            this.message = message;
            if (show) {
                this.modalClass = 'hide-modal';
                this.showModal = show;
                this.modalClass = 'show-modal';
            }
            else {
                this.modalClass = 'hide-modal';
                setTimeout(() => {
                    this.showModal = false;
                    this.message = '';
                    this.customYes = null;
                    this.customNo = null;
                }, 300);
            }
        });
    }
    onModalKeyUp(e) {
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
    }
}
GlSharedComponentModalAlertService.ɵprov = ɵɵdefineInjectable({ factory: function GlSharedComponentModalAlertService_Factory() { return new GlSharedComponentModalAlertService(); }, token: GlSharedComponentModalAlertService, providedIn: "root" });
GlSharedComponentModalAlertService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
GlSharedComponentModalAlertService.ctorParameters = () => [];

class GlSharedComponentModalAlertComponent {
    constructor(service) {
        this.service = service;
        this.innerValueNo = 'No';
        this.innerValueYes = 'Yes';
        this.innerValueOK = 'OK';
        this.noValue = 'no';
        this.yesValue = 'yes';
        this.okValue = 'ok';
    }
}
GlSharedComponentModalAlertComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-modal-alert',
                template: "<div\n  *ngIf=\"service.showModal\"\n  glAutoFocus\n  (keydown)=\"service.onModalKeyUp($event)\"\n  id=\"modal\"\n  class=\"modal-container {{ service.modalClass }}\"\n  tabindex=\"-1\">\n  <div class=\"modal-main-content\">\n    <gl-shared-component-modal-header\n      [title]=\"title\"\n      [subtitle]=\"subtitle\"\n      [modalLogo]=\"modalLogo\"\n    ></gl-shared-component-modal-header>\n    <div class=\"modal-message-container\">\n      <span class=\"modal-message\">{{ service.message }}</span>\n    </div>\n    <div class=\"button-container\">\n      <gl-shared-component-input-button-simple\n        *ngIf=\"!service.isOK\"\n        class=\"no\"\n        (click)=\"service.onNo()\"\n        [innerValue]=\"service.customNo == null ? innerValueNo : service.customNo\"\n        [value]=\"noValue\"\n      ></gl-shared-component-input-button-simple>\n      <gl-shared-component-input-button-simple\n        *ngIf=\"!service.isOK\"\n        class=\"yes\"\n        (click)=\"service.onYes()\"\n        [innerValue]=\"service.customYes == null ? innerValueYes : service.customYes\"\n        [value]=\"yesValue\"\n      ></gl-shared-component-input-button-simple>\n      <gl-shared-component-input-button-simple\n        *ngIf=\"service.isOK\"\n        class=\"ok\"\n        (click)=\"service.onOk()\"\n        [innerValue]=\"innerValueOK\"\n        [value]=\"okValue\"\n      ></gl-shared-component-input-button-simple>\n    </div>\n    <div class=\"modal-footer\"></div>\n  </div>\n</div>\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep .modal-container{-webkit-animation:show-modal .5s ease-in-out;-webkit-animation-fill-mode:forwards;align-items:center;animation:show-modal .5s ease-in-out;animation-fill-mode:forwards;background:rgba(0,0,0,.8);display:flex;height:0;justify-items:center;left:0;min-height:100vh;min-width:100vw;position:fixed;top:0;z-index:100000}@-webkit-keyframes show-modal{0%{opacity:0}to{opacity:1}}@keyframes show-modal{0%{opacity:0}to{opacity:1}}:host::ng-deep .modal-container>.modal-main-content{opacity:1!important;transition:all .5s ease-in-out;transition-delay:.5s}:host::ng-deep .modal-container .modal-main-content{align-items:stretch;background:rgba(2,2,2,.5);display:flex;flex-direction:column;height:-webkit-max-content;height:-moz-max-content;height:max-content;height:1em;justify-content:stretch;margin:0 auto;max-width:36em;min-height:10em;opacity:0;width:90vw;word-wrap:break-word}:host::ng-deep .modal-container .modal-main-content .modal-message-container{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;align-items:center;display:flex;flex-grow:1;height:-webkit-max-content;height:-moz-max-content;height:max-content;justify-content:center;margin:1em;user-select:none}:host::ng-deep .modal-container .modal-main-content .modal-message-container .modal-message{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;color:#fff;display:block;font-family:Montserrat,sans-serif;font-size:.6em;font-weight:100;text-align:center;text-transform:unset;user-select:none;white-space:pre-wrap;width:100%}:host::ng-deep .modal-container .modal-main-content .button-container{align-items:stretch;display:flex;height:2em;justify-content:center}:host::ng-deep .modal-container .modal-main-content .button-container gl-shared-component-input-button-simple{margin:0 .2em;max-width:33.33333%}:host::ng-deep .modal-container .modal-main-content .modal-footer{background-color:#0e0e0f;border-image-slice:.5;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8),rgba(97,61,149,.8));border-top:1px solid;height:.5em;margin:.2em 0 0;width:100%}:host::ng-deep .hide-modal{-webkit-animation:hide-modal .3s ease-in-out;-webkit-animation-fill-mode:forwards;animation:hide-modal .3s ease-in-out;animation-fill-mode:forwards}@-webkit-keyframes hide-modal{0%{opacity:1}to{opacity:0}}@keyframes hide-modal{0%{opacity:1}to{opacity:0}}@media screen and (min-device-width:1024px) and (orientation:landscape){:host::ng-deep .modal-container .modal-main-content{width:30vw}:host::ng-deep .modal-container .modal-main-content gl-shared-component-input-button-simple{margin:0 .2em;max-width:10vw}}"]
            },] }
];
GlSharedComponentModalAlertComponent.ctorParameters = () => [
    { type: GlSharedComponentModalAlertService }
];
GlSharedComponentModalAlertComponent.propDecorators = {
    title: [{ type: Input }],
    subtitle: [{ type: Input }],
    modalLogo: [{ type: Input }],
    innerValueNo: [{ type: Input }],
    innerValueYes: [{ type: Input }],
    innerValueOK: [{ type: Input }],
    noValue: [{ type: Input }],
    yesValue: [{ type: Input }],
    okValue: [{ type: Input }]
};

class GlSharedComponentModalHeaderComponent {
    constructor() { }
}
GlSharedComponentModalHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-modal-header',
                template: "<div class=\"modal-title-container\">\n  <div class=\"modal-title-text-container\">\n    <h2 class=\"modal-title\">{{ title }}</h2>\n    <h2 class=\"modal-title\">{{ subtitle }}</h2>\n  </div>\n  <img class=\"modal-logo\" [src]=\"modalLogo\" alt=\"Header Logo\">\n</div>\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep .modal-title-container{align-items:center;background-color:#1a1b1d;border-bottom:1px solid;border-image-slice:.5;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8),rgba(97,61,149,.8));display:flex;font-size:.65em;justify-content:flex-start;padding:.5em 0;text-align:left;width:100%}:host::ng-deep .modal-title-container .modal-logo{height:1.5em;margin:0 .5em;width:1.5em}:host::ng-deep .modal-title-container .modal-title-text-container{align-items:center;display:flex;flex-grow:1;margin:0 1em}:host::ng-deep .modal-title-container .modal-title-text-container .modal-title{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;color:#64666c;font-family:Montserrat,sans-serif;font-weight:400;text-transform:uppercase;user-select:none}:host::ng-deep .modal-title-container .modal-title-text-container .modal-title:first-child{margin:0 .3em 0 0}"]
            },] }
];
GlSharedComponentModalHeaderComponent.ctorParameters = () => [];
GlSharedComponentModalHeaderComponent.propDecorators = {
    title: [{ type: Input }],
    subtitle: [{ type: Input }],
    modalLogo: [{ type: Input }]
};

class GlSharedComponentModalLoadingService {
    constructor() {
        this._defaultMessage = 'Loading... please wait...';
        this.defaultMessage = 'Loading... please wait...';
        this._loadingStatus = this.defaultMessage;
        this._showLoading = true;
    }
    checkElement() {
        return new Promise(resolve => {
            if (this._mainLoading == null) {
                const loadingInterval = setInterval(() => {
                    this._mainLoading = document.querySelector('.main-loading');
                    if (this._mainLoading != null) {
                        clearInterval(loadingInterval);
                        resolve();
                    }
                }, 1);
            }
            else {
                resolve();
            }
        });
    }
    setup(mainLoading) {
        this._mainLoading = mainLoading;
    }
    hide() {
        this.checkElement().then(() => {
            this._mainLoading.classList.add('hide-loading');
            setTimeout(() => {
                this._showLoading = false;
                this.status(null);
            }, 1100);
        });
    }
    show(status) {
        this.checkElement().then(() => {
            if (status != null) {
                this.status(status);
            }
            else {
                this.status(null);
            }
            this._mainLoading.classList.remove('hide-loading');
            this._showLoading = true;
        });
    }
    status(message) {
        this.checkElement().then(() => {
            setTimeout(() => {
                if (message == null || message.trim().length === 0) {
                    if (this.defaultMessage != null && this.defaultMessage.length === 0) {
                        this.defaultMessage = this._defaultMessage;
                    }
                    this._loadingStatus = this.defaultMessage;
                }
                else {
                    this._loadingStatus = message;
                }
            }, 10);
        });
    }
}
GlSharedComponentModalLoadingService.ɵprov = ɵɵdefineInjectable({ factory: function GlSharedComponentModalLoadingService_Factory() { return new GlSharedComponentModalLoadingService(); }, token: GlSharedComponentModalLoadingService, providedIn: "root" });
GlSharedComponentModalLoadingService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
GlSharedComponentModalLoadingService.ctorParameters = () => [];

class GlSharedComponentModalLoadingComponent {
    constructor(service) {
        this.service = service;
        this.loaded = false;
        service.defaultMessage = this.defaultMessage;
    }
    ngAfterViewChecked() {
        const container = document.querySelector('.main-loading');
        if (container != null && !this.loaded) {
            this.service.setup(container);
            this.loaded = true;
        }
    }
}
GlSharedComponentModalLoadingComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-modal-loading',
                template: "<div #mainLoading class=\"main-loading\" *ngIf=\"service._showLoading\">\n  <div class=\"loading-container\">\n    <div class=\"lds-facebook\"><div></div><div></div><div></div></div>\n  </div>\n  <div class=\"status-container\">\n    <div class=\"user-content\">\n      <ng-content></ng-content>\n    </div>\n    <h2 class=\"subtitle loading-status\">{{ service._loadingStatus }}</h2>\n  </div>\n</div>\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep .main-loading{background:rgba(0,0,0,.85);display:flex;flex-direction:column;height:100vh;justify-content:center;left:0;position:fixed;top:0;width:100vw;z-index:999999999}:host::ng-deep .main-loading .status-container{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;align-items:center;display:flex;flex-direction:column;opacity:.5;text-align:center;user-select:none}:host::ng-deep .main-loading .status-container .user-content{flex-grow:1}:host::ng-deep .main-loading .status-container .loading-status{background:unset;color:#fff;font-family:Montserrat,sans-serif;font-size:.5em;font-weight:300;margin:1em 0 0;white-space:pre-line;width:100%}.loading-container{align-items:center;display:flex;justify-content:center}.hide-loading{opacity:0;transition:all 1s ease-in-out,visibility 1s ease-in-out;visibility:collapse}.lds-facebook{display:inline-block;height:64px;position:relative;width:64px}.lds-facebook div{-webkit-animation:lds-facebook 1.2s cubic-bezier(0,.5,.5,1) infinite;animation:lds-facebook 1.2s cubic-bezier(0,.5,.5,1) infinite;background:#fff;display:inline-block;left:6px;position:absolute;width:13px}.lds-facebook div:first-child{-webkit-animation-delay:-.24s;animation-delay:-.24s;left:6px}.lds-facebook div:nth-child(2){-webkit-animation-delay:-.12s;animation-delay:-.12s;left:26px}.lds-facebook div:nth-child(3){-webkit-animation-delay:0s;animation-delay:0s;left:45px}@-webkit-keyframes lds-facebook{0%{height:51px;top:6px}50%,to{height:26px;top:19px}}@keyframes lds-facebook{0%{height:51px;top:6px}50%,to{height:26px;top:19px}}"]
            },] }
];
GlSharedComponentModalLoadingComponent.ctorParameters = () => [
    { type: GlSharedComponentModalLoadingService }
];
GlSharedComponentModalLoadingComponent.propDecorators = {
    mainLoading: [{ type: ViewChild, args: ['mainLoading', { read: ElementRef, static: true },] }],
    defaultMessage: [{ type: Input }]
};

class GlSharedComponentTitlePageComponent {
    constructor() { }
}
GlSharedComponentTitlePageComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-title-page',
                template: "<div class=\"page-title\">\n  <div class=\"title-container\">\n    <h1 class=\"title\">{{ title }}</h1>\n    <h2 class=\"subtitle\">{{ subtitle }}</h2>\n  </div>\n</div>\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");.page-title{align-self:flex-start;flex-grow:1;margin:0 .5em}.page-title .title-container{display:flex}.page-title .title-container .title{font-family:Montserrat,sans-serif;font-weight:700}.page-title .title-container .subtitle,.page-title .title-container .title{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;color:#fff;font-size:1.5em;text-transform:uppercase;user-select:none}.page-title .title-container .subtitle{font-family:Montserrat,sans-serif;font-weight:100;margin:0 0 0 .3em}"]
            },] }
];
GlSharedComponentTitlePageComponent.ctorParameters = () => [];
GlSharedComponentTitlePageComponent.propDecorators = {
    title: [{ type: Input }],
    subtitle: [{ type: Input }]
};

class GlSharedComponentTitleLabelButtonSimpleComponent {
    constructor() {
        this.required = false;
        this.requiredFieldDescription = 'Required field';
    }
}
GlSharedComponentTitleLabelButtonSimpleComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-title-label-button-simple',
                template: "<div class=\"label-button-container {{ class }}\">\n  <div\n    [attr.alt]=\"alt\"\n    class=\"tooltip top\">\n    <img\n      class=\"label-button\"\n      [id]=\"id\"\n      [src]=\"src\"\n      [alt]=\"alt\">\n  </div>\n  <img\n    *ngIf=\"required\"\n    src=\"../assets/img/icon/label/dot.svg\"\n    class=\"required-fill-dot\"\n    [title]=\"requiredFieldDescription\"\n    alt=\"Required fill icon\">\n</div>\n",
                styles: [".required-fill{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:all .2s ease-in-out}.required-fill::-moz-placeholder{color:hsla(0,0%,100%,.3)!important}.required-fill:-ms-input-placeholder{color:hsla(0,0%,100%,.3)!important}.required-fill::-ms-input-placeholder{color:hsla(0,0%,100%,.3)!important}.required-fill::placeholder{color:hsla(0,0%,100%,.3)!important}.error-highlight{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:all .2s ease-in-out}.error-highlight::-moz-placeholder{color:hsla(0,0%,100%,.3)!important}.error-highlight:-ms-input-placeholder{color:hsla(0,0%,100%,.3)!important}.error-highlight::-ms-input-placeholder{color:hsla(0,0%,100%,.3)!important}.error-highlight::placeholder{color:hsla(0,0%,100%,.3)!important}.label-button-container{display:flex;position:absolute;right:.2em;top:.19em}.label-button-container .label-button{cursor:pointer;height:1em;margin:0 .1em;width:1em}.label-button-container .label-button:hover{opacity:1;transform:scale(1.1);transition:all .2s ease-in-out}.label-button-container .label-button:not(hover){opacity:.5;transform:scale(1);transition:all .2s ease-in-out}"]
            },] }
];
GlSharedComponentTitleLabelButtonSimpleComponent.ctorParameters = () => [];
GlSharedComponentTitleLabelButtonSimpleComponent.propDecorators = {
    id: [{ type: Input }],
    alt: [{ type: Input }],
    src: [{ type: Input }],
    required: [{ type: Input }],
    class: [{ type: Input }],
    requiredFieldDescription: [{ type: Input }]
};

class GlSharedComponentTitleLabelButtonContainerComponent {
    constructor() {
        this.required = false;
        this.requiredFieldDescription = 'Required field';
    }
}
GlSharedComponentTitleLabelButtonContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-title-label-button-container',
                template: "<div class=\"label-with-button-container {{ class }}\">\n  <gl-shared-component-title-label-simple\n    [labelValue]=\"labelValue\"\n    [id]=\"id\"\n    [labelAlignment]=\"labelAlignment\"\n    [required]=\"required\"\n    [class]=\"class\"\n    [requiredLabel]=\"requiredFieldDescription\"\n  ></gl-shared-component-title-label-simple>\n  <div class=\"label-button-container\">\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                styles: [":host::ng-deep{display:flex;flex-grow:0}:host::ng-deep .label-with-button-container{background-color:#2c2c2f;display:flex;flex-grow:1}:host::ng-deep .label-with-button-container .label-button-container{display:flex;flex-grow:0;margin:0 .2em 0 0}:host::ng-deep .label-with-button-container .label-button-container .button{margin:0 0 0 .2em}:host::ng-deep .label-with-button-container.light{background-color:rgba(0,0,0,.3)}:host::ng-deep .label-with-button-container.dark{background-color:#111112}"]
            },] }
];
GlSharedComponentTitleLabelButtonContainerComponent.ctorParameters = () => [];
GlSharedComponentTitleLabelButtonContainerComponent.propDecorators = {
    labelValue: [{ type: Input }],
    id: [{ type: Input }],
    labelAlignment: [{ type: Input }],
    required: [{ type: Input }],
    class: [{ type: Input }],
    requiredFieldDescription: [{ type: Input }]
};

class GlSharedComponentMenuBackgroundComponent {
    constructor() { }
}
GlSharedComponentMenuBackgroundComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-menu-background',
                template: "<div class=\"menu-background\"></div>\n",
                styles: [":host::ng-deep .menu-background{background-color:rgba(0,0,0,.3);height:100vh;position:fixed;width:100vw}"]
            },] }
];
GlSharedComponentMenuBackgroundComponent.ctorParameters = () => [];

class GlSharedComponentMenuService {
    constructor() {
        this.menuHidden = new Subject();
        this.opened = false;
    }
    ngOnDestroy() {
        this.menuHidden.observers.map(x => x.complete());
    }
    initialize(container, background, router) {
        this.container = container;
        this.background = background;
        this.router = router;
        this.menuHidden.next(true);
    }
    close(event) {
        event.preventDefault();
        this.container.classList.remove('menu-active');
        this.background.classList.remove('visible-background');
        this.menuHidden.next(true);
        this.opened = false;
        return false;
    }
    open(event) {
        event.preventDefault();
        this.container.classList.add('menu-active');
        this.background.classList.add('visible-background');
        this.menuHidden.next(false);
        this.opened = true;
        return true;
    }
    goToSettings(url, target = '_blank') {
        window.open(url, target);
    }
    backgroundClick(event) {
        if (this.opened) {
            this.close(event);
        }
    }
}
GlSharedComponentMenuService.ɵprov = ɵɵdefineInjectable({ factory: function GlSharedComponentMenuService_Factory() { return new GlSharedComponentMenuService(); }, token: GlSharedComponentMenuService, providedIn: "root" });
GlSharedComponentMenuService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
GlSharedComponentMenuService.ctorParameters = () => [];

class GlSharedComponentMenuComponent {
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
}
GlSharedComponentMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-menu',
                template: "<gl-shared-component-menu-background\n  #background\n  (click)=\"service.backgroundClick($event)\"\n></gl-shared-component-menu-background>\n<div #container class=\"menu-container {{ className }} {{ menuPosition === 'left' ? 'left' : 'right' }}\">\n  <nav class=\"menu-nav-container\">\n    <ul class=\"menu-content\">\n      <li class=\"menu-header-container\">\n        <div class=\"menu-header\">\n          <div class=\"menu-top-icons-container\">\n            <img id=\"close-menu-button\"\n               (click)=\"service.close($event)\"\n               [src]=\"closeButton\"\n               class=\"menu-icons close-menu\"\n               alt=\"Close menu button\">\n            <img\n              *ngIf=\"showSettings\"\n              id=\"settings-menu-button\"\n              (click)=\"service.goToSettings(settingsUrl, settingsTarget)\"\n              [src]=\"settingsButton\"\n              class=\"menu-icons settings-menu\"\n              alt=\"Settings menu button\">\n          </div>\n          <div class=\"menu-header-title\">\n            <h1 class=\"title\">{{ title }}</h1>\n            <h2 class=\"subtitle\">{{ subtitle }}</h2>\n          </div>\n        </div>\n      </li>\n      <li class=\"menu-content-container {{ title?.length > 0 ? 'has-title' : '' }}\">\n        <gl-shared-component-menu-item\n          *ngFor=\"let menuItem of menuItems\"\n          [absolute]=\"menuItem.absolute\"\n          [alt]=\"menuItem.alt\"\n          [src]=\"menuItem.src\"\n          [routerLink]=\"menuItem.href\"\n          [href]=\"menuItem.href\"\n          [content]=\"menuItem.content\"\n          [itemClass]=\"menuItem.class\"\n          [target]=\"menuItem.target\"\n        ></gl-shared-component-menu-item>\n        <gl-shared-component-menu-item\n          *ngFor=\"let menuItem of menuItemsComplex\"\n          [absolute]=\"menuItem.absolute\"\n          [alt]=\"menuItem.alt\"\n          [src]=\"menuItem.src\"\n          [routerLink]=\"menuItem.href\"\n          [href]=\"menuItem.href\"\n          [content]=\"menuItem.content\"\n          [itemClass]=\"menuItem.class\"\n          [hasSubitem]=\"menuItem.hasSubitem\"\n          [active]=\"menuItem.active\"\n          [target]=\"menuItem.target\"\n          [subItems]=\"menuItem.subItems\"\n        ></gl-shared-component-menu-item>\n      </li>\n      <li class=\"logo-main-container\">\n        <div class=\"logo-container\">\n          <img class=\"main-logo\" [src]=\"menuLogo\" alt=\"Menu Logo\"/>\n          <span class=\"main-logo-title\">{{ menuBottomTitle }}</span>\n          <span class=\"main-logo-title\">{{ menuBottomVersion == null ? 'Version: ' + systemVersion : menuBottomVersion }}</span>\n        </div>\n      </li>\n    </ul>\n  </nav>\n</div>\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep .menu-container{background:#1a1b1d;background-size:cover;border-bottom:0 solid transparent!important;border-image-slice:.5;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8),rgba(97,61,149,.8));border-top:.3em solid;bottom:0;display:flex;flex-grow:1;height:100vh;max-width:17em;min-width:17em;overflow:hidden;position:relative;position:fixed;top:0;width:85vw;z-index:10000}:host::ng-deep .menu-container:after{background:linear-gradient(90deg,rgba(210,64,119,.8),rgba(97,61,149,.8));bottom:.7em;content:\"\";height:.7em;left:0;margin-bottom:-.7em;position:absolute;width:100%}:host::ng-deep .menu-container.left{left:-110%;transition:left .5s ease-in-out}:host::ng-deep .menu-container.right{right:-110%;transition:right .5s ease-in-out}:host::ng-deep .menu-container .a{display:block;min-height:3em}:host::ng-deep .menu-container .menu-nav-container{display:flex;flex-grow:1;max-height:100%;overflow:hidden;scrollbar-width:none}:host::ng-deep .menu-container .menu-nav-container .menu-content{display:flex;flex-direction:column;flex-grow:1;position:relative}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container{max-width:17em}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header{display:flex;flex-direction:column;margin:.5em 1em 1em .5em}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-top-icons-container{display:flex;margin:0 0 1.5em}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-top-icons-container .close-menu,:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-top-icons-container .settings-menu{cursor:pointer;height:1.5em;width:1.5em}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-top-icons-container .close-menu:active,:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-top-icons-container .close-menu:hover,:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-top-icons-container .settings-menu:active,:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-top-icons-container .settings-menu:hover{-webkit-animation:increase-decrease .4s ease-in-out;-webkit-animation-fill-mode:forwards;animation:increase-decrease .4s ease-in-out;animation-fill-mode:forwards;opacity:1}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-top-icons-container .close-menu{margin:0 .2em 0 0}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-header-title .subtitle,:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-header-title .title{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;color:#fff;margin:0;overflow:hidden;text-overflow:ellipsis;text-transform:uppercase;user-select:none;white-space:nowrap}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-header-title .title{font-family:Montserrat,sans-serif;font-size:.9em;font-weight:700}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-header .menu-header-title .subtitle{font-family:Montserrat,sans-serif;font-size:1.5em;font-weight:100}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .admin-settings{visibility:collapse}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-item-container{background-color:hsla(0,0%,100%,.3);display:flex;flex-direction:column;font-size:.8em}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-item-container .menu-item{align-items:center;display:flex;font-size:.8em;min-height:3em;padding:.2em;transition:all .2s ease-in-out}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-item-container .menu-item:nth-child(n+2){border-image-slice:1;border-image-source:linear-gradient(90deg,transparent 15%,hsla(0,0%,100%,.1) 15.01%,hsla(0,0%,100%,.05) 98%,transparent 0);border-top:1px solid}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-item-container .menu-item:hover{background-color:rgba(75,77,82,.3)}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-item-container .menu-icons{height:1.8em;margin:0 0 0 .7em;opacity:.5;width:1.8em}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-header-container .menu-item-container a{color:hsla(0,0%,100%,.6);flex-grow:1;padding:.8em;text-decoration:none}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-content-container{max-height:calc(100vh - 12.15em);max-width:17em;overflow-x:hidden!important;overflow-y:auto}:host::ng-deep .menu-container .menu-nav-container .menu-content .menu-content-container.has-title{max-height:calc(100vh - 13em)}:host::ng-deep .menu-container .menu-nav-container .logo-container{align-items:center;bottom:5vh;display:flex;flex-direction:column;position:absolute;width:100%}:host::ng-deep .menu-container .menu-nav-container .logo-container .main-logo{height:2em;width:2em}:host::ng-deep .menu-container .menu-nav-container .logo-container .main-logo-title{color:#fff;font-size:.4em;margin:1em 0 0}:host::ng-deep .show-admin-settings{visibility:visible!important}:host::ng-deep .menu-container.menu-active.left{left:0}:host::ng-deep .menu-container.menu-active.right{right:0}:host::ng-deep .menu-background{opacity:0;z-index:-100}:host::ng-deep .visible-background{background:rgba(0,0,0,.6);height:100%;opacity:1;position:fixed;top:0;transition:opacity 1s ease-in-out;width:100%;z-index:999}:host::ng-deep .hide-subtitle{margin:0;opacity:0;padding:0;transition:all .25s ease-in-out;visibility:collapse}:host::ng-deep .show-subtitle{opacity:1;transition:all .25s ease-in-out;transition-delay:.4s;visibility:visible}:host::ng-deep .hide-subtitle-container{-webkit-animation:hide-subtitle .4s ease-in-out;-webkit-animation-fill-mode:forwards;animation:hide-subtitle .4s ease-in-out;animation-fill-mode:forwards}:host::ng-deep .show-subtitle-container{-webkit-animation:show-subtitle .4s ease-in-out;-webkit-animation-fill-mode:forwards;animation:show-subtitle .4s ease-in-out;animation-fill-mode:forwards}:host::ng-deep .collapsed-menu .expand{transform:rotate(0deg);transition:all .4s ease-in-out}:host::ng-deep .collapsed-menu .menu-icons{-webkit-animation:decrease-increase .4s ease-in-out;-webkit-animation-fill-mode:forwards;animation:decrease-increase .4s ease-in-out;animation-fill-mode:forwards}:host::ng-deep .expanded-menu .expand{transform:rotate(-180deg);transition:all .4s ease-in-out}:host::ng-deep .expanded-menu .menu-icons{-webkit-animation:increase-decrease .4s ease-in-out;-webkit-animation-fill-mode:forwards;animation:increase-decrease .4s ease-in-out;animation-fill-mode:forwards}:host::ng-deep .menu-container.dark{border-image-source:none;border-left:1px solid #38393c;border-top:.3em solid rgba(210,64,119,.7)}:host::ng-deep .menu-container.translucid{background:hsla(0,0%,100%,.05);border-image-source:none;border-left:1px solid hsla(0,0%,100%,.05);border-top:.3em solid hsla(0,0%,100%,.1)}"]
            },] }
];
GlSharedComponentMenuComponent.ctorParameters = () => [
    { type: GlSharedComponentMenuService },
    { type: Router }
];
GlSharedComponentMenuComponent.propDecorators = {
    container: [{ type: ViewChild, args: ['container', { static: true, read: ElementRef },] }],
    background: [{ type: ViewChild, args: ['background', { static: true, read: ElementRef },] }],
    title: [{ type: Input }],
    subtitle: [{ type: Input }],
    systemVersion: [{ type: Input }],
    menuItems: [{ type: Input }],
    menuItemsComplex: [{ type: Input }],
    showSettings: [{ type: Input }],
    className: [{ type: Input }],
    settingsUrl: [{ type: Input }],
    settingsTarget: [{ type: Input }],
    menuLogo: [{ type: Input }],
    menuBottomTitle: [{ type: Input }],
    menuBottomVersion: [{ type: Input }],
    menuPosition: [{ type: Input }]
};

class GlSharedComponentMenuItemComponent {
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
}
GlSharedComponentMenuItemComponent.decorators = [
    { type: Component, args: [{
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
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");.adding-row-animated{-webkit-animation:adding-row .5s ease-in-out;-webkit-animation-fill-mode:forwards;-webkit-animation-play-state:running;animation:adding-row .5s ease-in-out;animation-fill-mode:forwards;animation-play-state:running}@-webkit-keyframes adding-row{0%{opacity:0}to{opacity:1}}@keyframes adding-row{0%{opacity:0}to{opacity:1}}.delete-row-animated{max-height:0!important;opacity:0!important;transition:all .2s ease-out}.delete-row-animated-frame{-webkit-animation-duration:.2s;-webkit-animation-fill-mode:forwards!important;-webkit-animation-name:hide;-webkit-animation-play-state:initial;animation-duration:.2s;animation-fill-mode:forwards!important;animation-name:hide;animation-play-state:initial}@-webkit-keyframes hide{0%{opacity:1}to{opacity:0}}@keyframes hide{0%{opacity:1}to{opacity:0}}:host::ng-deep{outline:none!important}:host::ng-deep .menu-title{align-items:center;background:linear-gradient(90deg,rgba(210,64,119,.8),rgba(97,61,149,.8));border-left:.2em solid #d24077;display:flex;margin:0 0 1px;position:relative}:host::ng-deep .menu-title .material-icons{color:hsla(0,0%,100%,.6);font-size:1.2em;margin:0 .5em 0 .3em;padding:.3em}:host::ng-deep .menu-title .menu-icons{height:1.5em;padding:.2em .5em;width:1.5em}:host::ng-deep .menu-title .menu-arrow{height:1em;opacity:.5;padding:.2em .5em;transform:rotate(0deg);transition:all .25s ease-in-out;width:1em}:host::ng-deep .menu-title .menu-item{color:hsla(0,0%,100%,.4);cursor:pointer;flex-grow:1;font-family:Montserrat,sans-serif;font-size:.6em;font-weight:300;max-width:79%;overflow:hidden;padding:1.5em .7em;text-decoration:none;text-overflow:ellipsis;text-transform:uppercase;white-space:nowrap}:host::ng-deep .menu-title.active .menu-arrow{transform:rotate(180deg);transition:all .25s ease-in-out}:host::ng-deep .menu-title:not(hover) .menu-icons{transform:scale(1);transition:all .2s ease-in-out}:host::ng-deep .menu-title:hover .menu-icons{transform:scale(1.2);transition:all .2s ease-in-out}:host::ng-deep .menu-title.dark{border-bottom:1px solid #38393c;border-left:.2em solid transparent;margin:0}:host::ng-deep .menu-title.dark:not(hover){background:#2c2c2f;transition:all .3s ease-in-out}:host::ng-deep .menu-title.dark:hover{background:#4b4d52;transition:all .3s ease-in-out}:host::ng-deep .menu-title.translucid{border-bottom:.5px solid hsla(0,0%,100%,.1);border-left:.2em solid transparent;margin:0}:host::ng-deep .menu-title.translucid:not(hover){background:hsla(0,0%,100%,.05);transition:all .3s ease-in-out}:host::ng-deep .menu-title.translucid:hover{background:hsla(0,0%,100%,.1);transition:all .3s ease-in-out}:host::ng-deep .menu-item,:host::ng-deep .menu-title,:host::ng-deep .subitem-container{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;outline:none!important;user-select:none}:host::ng-deep .subitem-container .menu-title{transform:scaleY(0);transition:all .3s ease-in-out}:host::ng-deep .subitem-container.active .menu-title{transform:scaleY(1);transition:all .3s ease-in-out;transition-delay:.1s}"]
            },] }
];
GlSharedComponentMenuItemComponent.ctorParameters = () => [
    { type: Router }
];
GlSharedComponentMenuItemComponent.propDecorators = {
    itemClass: [{ type: Input }],
    absolute: [{ type: Input }],
    menuLogo: [{ type: Input }],
    src: [{ type: Input }],
    href: [{ type: Input }],
    alt: [{ type: Input }],
    content: [{ type: Input }],
    target: [{ type: Input }],
    hasSubitem: [{ type: Input }],
    active: [{ type: Input }],
    subItems: [{ type: Input }],
    onClick: [{ type: Output }]
};

class GlSharedComponentFooterSimpleComponent {
    constructor() {
        this.imageDescription = 'Image logo';
    }
}
GlSharedComponentFooterSimpleComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-footer-simple',
                template: "<section class=\"footer-container\">\n  <span class=\"description\">{{ description }}</span>\n  <img\n    *ngIf=\"imageLogo != null\"\n    class=\"image-logo\"\n    [alt]=\"imageDescription\"\n    [src]=\"imageLogo\">\n</section>\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep{bottom:0;flex-grow:1;max-width:100vw;min-width:100vw;position:fixed;z-index:100}:host::ng-deep .footer-container{background-color:#1a1b1d;border-image-slice:.5;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8),rgba(97,61,149,.8));border-top:.1em solid;display:flex;height:1.3em;justify-content:center;position:relative;z-index:99}:host::ng-deep .footer-container .description{color:#fff;font-family:Montserrat,sans-serif;font-size:.5em;font-weight:300;letter-spacing:.14em;padding:1em;text-transform:uppercase}:host::ng-deep .footer-container .image-logo{height:1em;margin:0 0 0 .3em}"]
            },] }
];
GlSharedComponentFooterSimpleComponent.ctorParameters = () => [];
GlSharedComponentFooterSimpleComponent.propDecorators = {
    description: [{ type: Input }],
    imageLogo: [{ type: Input }],
    imageDescription: [{ type: Input }]
};

class GlSharedComponentInputButtonHyperlinkComponent {
    constructor() { }
}
GlSharedComponentInputButtonHyperlinkComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-input-button-hyperlink',
                template: "<div class=\"hyperlink-container\">\n  <img\n    class=\"logo\"\n    [src]=\"imageSrc\"\n    [alt]=\"imageDescription\">\n  <a\n    class=\"message\"\n    [href]=\"link\"\n    target=\"_blank\">{{ description }}</a>\n</div>\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep .hyperlink-container{align-items:center;bottom:.3em;display:flex;flex-direction:row;position:absolute;right:.3em}:host::ng-deep .hyperlink-container .logo{height:.7em;margin:0 .2em 0 0;width:.7em}:host::ng-deep .hyperlink-container .message{color:#ff9800;font-family:Montserrat,sans-serif;font-size:.5em;font-weight:400;margin:0 0 0 .2em}"]
            },] }
];
GlSharedComponentInputButtonHyperlinkComponent.ctorParameters = () => [];
GlSharedComponentInputButtonHyperlinkComponent.propDecorators = {
    imageSrc: [{ type: Input }],
    imageDescription: [{ type: Input }],
    description: [{ type: Input }],
    link: [{ type: Input }]
};

class GlSharedComponentFooterContainerComponent {
    constructor() {
        this.imageDescription = 'Image logo';
    }
}
GlSharedComponentFooterContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-footer-container',
                template: "<section class=\"footer-container\">\n  <span class=\"description\">{{ description }}</span>\n  <img\n    *ngIf=\"imageLogo != null\"\n    class=\"image-logo\"\n    [alt]=\"imageDescription\"\n    [src]=\"imageLogo\">\n  <div class=\"user-container\">\n    <ng-content></ng-content>\n  </div>\n</section>\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep{bottom:0;flex-grow:1;max-width:100vw;min-width:100vw;position:fixed;z-index:100}:host::ng-deep .footer-container{background-color:#1a1b1d;border-image-slice:.5;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8),rgba(97,61,149,.8));border-top:.1em solid;display:flex;height:1.3em;justify-content:center;position:relative;z-index:99}:host::ng-deep .footer-container .description{color:#fff;font-family:Montserrat,sans-serif;font-size:.5em;font-weight:300;letter-spacing:.14em;padding:1em;text-transform:uppercase}:host::ng-deep .footer-container .image-logo{height:1em;margin:0 0 0 .3em}:host::ng-deep .footer-container .user-container{align-self:flex-end;margin:0 .3em 0 0}:host::ng-deep .footer-container .user-container .user-container{align-items:center;display:flex;justify-content:center}"]
            },] }
];
GlSharedComponentFooterContainerComponent.ctorParameters = () => [];
GlSharedComponentFooterContainerComponent.propDecorators = {
    description: [{ type: Input }],
    imageLogo: [{ type: Input }],
    imageDescription: [{ type: Input }]
};

class GlSharedComponentErrorMessageComponent {
    constructor() {
        this.position = 'left';
        this.buttonAction$ = new EventEmitter();
    }
    buttonAction() {
        this.buttonAction$.emit();
    }
}
GlSharedComponentErrorMessageComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-error-message',
                template: "<div class=\"content-container {{ position === 'right' ? 'right' : 'left' }}\">\n  <h1 class=\"main-title\">{{ errorCode }}</h1>\n  <h2 class=\"message\">{{ errorMessage }}</h2>\n  <gl-shared-component-input-button-simple\n    class=\"home-button\"\n    [innerValue]=\"buttonLabel\"\n    (click)=\"buttonAction()\"\n  ></gl-shared-component-input-button-simple>\n</div>\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep{display:flex;flex-grow:1}:host::ng-deep .content-container{align-content:center;align-items:center;display:flex;flex-direction:column;justify-content:center;position:absolute;text-align:center;top:25%}:host::ng-deep .content-container.right{right:10vw}:host::ng-deep .content-container.left{left:10vw}:host::ng-deep .content-container .main-title{font-size:11em;font-weight:800}:host::ng-deep .content-container .main-title,:host::ng-deep .content-container .message{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;color:hsla(0,0%,100%,.3);font-family:Montserrat,sans-serif;user-select:none}:host::ng-deep .content-container .message{font-size:1.5em;font-weight:100}:host::ng-deep .content-container gl-shared-component-input-button-simple{align-items:center;display:block;flex-direction:column;margin:3em 0}:host::ng-deep .content-container gl-shared-component-input-button-simple .default-button{background-color:rgba(0,0,0,.4);border-radius:10em;color:#fff;display:block;font-family:Montserrat,sans-serif;font-weight:300;padding:1.5em 4em}"]
            },] }
];
GlSharedComponentErrorMessageComponent.ctorParameters = () => [];
GlSharedComponentErrorMessageComponent.propDecorators = {
    position: [{ type: Input }],
    errorCode: [{ type: Input }],
    errorMessage: [{ type: Input }],
    buttonLabel: [{ type: Input }],
    buttonAction$: [{ type: Output }]
};

class GlSharedComponentLogoSquareComponent {
    constructor() {
        this.horizontalPosition = 'left';
        this.verticalPosition = 'top';
    }
}
GlSharedComponentLogoSquareComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-logo-square',
                template: "<img\n  class=\"logo {{ horizontalPosition == 'right' ? 'right' : 'left' }} {{ verticalPosition == 'bottom' ? 'bottom' : 'top' }}\"\n  [src]=\"imageScr\"\n  [alt]=\"imageAlt\">\n",
                styles: [":host::ng-deep .logo{height:3em;opacity:.1;position:absolute;width:3em}:host::ng-deep .logo.top{top:1em}:host::ng-deep .logo.right{right:1em}:host::ng-deep .logo.bottom{bottom:1em}:host::ng-deep .logo.left{left:1em}"]
            },] }
];
GlSharedComponentLogoSquareComponent.ctorParameters = () => [];
GlSharedComponentLogoSquareComponent.propDecorators = {
    imageScr: [{ type: Input }],
    imageAlt: [{ type: Input }],
    horizontalPosition: [{ type: Input }],
    verticalPosition: [{ type: Input }]
};

class GlSharedComponentButtonImageSimpleComponent {
    constructor() { }
}
GlSharedComponentButtonImageSimpleComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-button-image-simple',
                template: "<img\n  class=\"button\"\n  [id]=\"id\"\n  [src]=\"src\"\n  [alt]=\"alt\"\n  (click)=\"callback($event)\">\n",
                styles: [":host::ng-deep{align-items:center;display:flex}:host::ng-deep .button{height:1em;width:1em}:host::ng-deep .button:not(hover){opacity:.5;transition:all .2s ease-in-out}:host::ng-deep .button:hover{opacity:1;transition:all .2s ease-in-out}"]
            },] }
];
GlSharedComponentButtonImageSimpleComponent.ctorParameters = () => [];
GlSharedComponentButtonImageSimpleComponent.propDecorators = {
    id: [{ type: Input }],
    alt: [{ type: Input }],
    src: [{ type: Input }],
    callback: [{ type: Input }]
};

class GlSharedComponentButtonImageTooltipComponent {
    constructor() {
        this.show = true;
    }
}
GlSharedComponentButtonImageTooltipComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-button-image-tooltip',
                template: "<div\n  *ngIf=\"show\"\n  [class.hidden]=\"!show\"\n  [id]=\"id\"\n  [attr.tooltip]=\"alt\"\n  class=\"tooltip top\">\n  <gl-shared-component-button-image-simple\n    [src]=\"src\"\n    [alt]=\"alt\"\n    [id]=\"id\"\n    [callback]=\"callback\"\n  ></gl-shared-component-button-image-simple>\n</div>\n",
                styles: [".tooltip-menu{display:flex;position:relative;z-index:100}.tooltip-menu:before{border-color:#fff transparent transparent;border-style:solid;border-width:.2em .2em 0;content:\"\";left:80%;position:absolute;transform:translateX(-137%) translateY(100%) rotate(180deg);z-index:100}.tooltip-menu:after{background:#fff;border:none;color:#64666c;content:attr(tooltip);font-size:.4em;font-weight:600;left:80%;line-height:1.5em;max-width:50em;padding:.5em 1em;pointer-events:none;position:absolute;text-align:left;transform:translateX(-57%) translateY(124%);white-space:nowrap;width:-webkit-max-content;width:-moz-max-content;width:max-content}.tooltip-menu:not(hover):before{bottom:-.3em;opacity:0;transition:all .1s ease-in-out}.tooltip-menu:not(hover):after{bottom:0;opacity:0;transition:all .1s ease-in-out}.tooltip-menu:hover:after,.tooltip-menu:hover:before{bottom:-.11em;opacity:1;transition:all .1s ease-in-out}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.tooltip-menu{margin:0 0 0 .3em;width:1.5em}.tooltip-menu:before{transform:translateX(-150%) translateY(100%) rotate(180deg)}.tooltip-menu:after{font-size:11.5px;transform:translateX(-55%) translateY(124%)}}.tooltip.top{position:relative;z-index:1000}.tooltip.top:before{border-color:#fff transparent transparent;border-style:solid;border-width:.2em .2em 0;content:\"\";left:82%;position:absolute;transform:translateX(-200%) translateY(90%);z-index:100}.tooltip.top:after{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;background:#fff;border:none;color:#64666c;content:attr(tooltip);font-size:.4em;font-weight:300;height:1.5em;left:0;line-height:1.5em;max-width:50em;padding:.5em 1em;pointer-events:none;position:absolute;text-align:center;user-select:none;white-space:nowrap;width:-webkit-max-content;width:-moz-max-content;width:max-content}.tooltip.top:hover:before,.tooltip.top:not(hover):before{left:93%;top:-.5em}.tooltip.top:hover:after,.tooltip.top:not(hover):after{left:0;top:-3.1em}.tooltip.top:not(hover):after,.tooltip.top:not(hover):before{opacity:0;transition:all .1s ease-in-out}.tooltip.top:hover:after,.tooltip.top:hover:before{opacity:1;transition:all .1s ease-in-out}.tooltip.top.status-table{position:relative;z-index:1000}.tooltip.top.status-table:before{border-color:#fff transparent transparent;border-style:solid;border-width:.6em .6em 0;content:\"\";left:82%;position:absolute;transform:translateX(-237%) translateY(-15%);z-index:100}.tooltip.top.status-table:after{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;background:#fff;border:none;color:#64666c;content:attr(tooltip);font-size:.4em;font-size:.9em;font-weight:300;height:1.5em;left:0;line-height:1.5em;max-width:50em;padding:.5em 1em;pointer-events:none;position:absolute;text-align:center;user-select:none;white-space:nowrap;width:-webkit-max-content;width:-moz-max-content;width:max-content}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.tooltip.top.status-table:after{font-size:2em;left:.9em}}.tooltip.top.status-table:not(hover):after,.tooltip.top.status-table:not(hover):before{opacity:0;transition:all .1s ease-in-out}.tooltip.top.status-table:hover:after,.tooltip.top.status-table:hover:before{opacity:1;transition:all .1s ease-in-out}.tooltip.bottom{position:relative;z-index:1000}.tooltip.bottom:before{border-color:#fff transparent transparent;border-style:solid;border-width:.2em .2em 0;content:\"\";left:82%;left:107%;position:absolute;transform:translateX(-137%) translateY(100%) rotate(180deg);z-index:100}.tooltip.bottom:after{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;background:#fff;border:none;color:#64666c;content:attr(tooltip);font-size:.4em;font-weight:300;height:1.5em;line-height:1.5em;max-width:50em;padding:.5em 1em;pointer-events:none;position:absolute;text-align:center;user-select:none;white-space:nowrap;width:-webkit-max-content;width:-moz-max-content;width:max-content}.tooltip.bottom:hover:before,.tooltip.bottom:not(hover):before{bottom:.1em}.tooltip.bottom:hover:after,.tooltip.bottom:not(hover):after{bottom:-2.7em;left:0}.tooltip.bottom:not(hover):after,.tooltip.bottom:not(hover):before{opacity:0;transition:all .1s ease-in-out}.tooltip.bottom:hover:after,.tooltip.bottom:hover:before{opacity:1;transition:all .1s ease-in-out}.tooltip.bottom-right{position:relative;z-index:1000}.tooltip.bottom-right:before{border-color:#fff transparent transparent;border-style:solid;border-width:.2em .2em 0;content:\"\";left:82%;position:absolute;transform:translateX(-137%) translateY(100%) rotate(180deg);z-index:100}.tooltip.bottom-right:after{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;background:#fff;border:none;color:#64666c;content:attr(tooltip);font-size:.4em;font-weight:300;height:1.5em;line-height:1.5em;max-width:50em;padding:.5em 1em;pointer-events:none;position:absolute;text-align:center;user-select:none;white-space:nowrap;width:-webkit-max-content;width:-moz-max-content;width:max-content}.tooltip.bottom-right:hover:before,.tooltip.bottom-right:not(hover):before{left:94%}.tooltip.bottom-right:hover:after,.tooltip.bottom-right:not(hover):after{bottom:-2.7em;left:-200%}.tooltip.bottom-right:not(hover):after,.tooltip.bottom-right:not(hover):before{opacity:0;transition:all .1s ease-in-out}.tooltip.bottom-right:hover:after,.tooltip.bottom-right:hover:before{opacity:1;transition:all .1s ease-in-out}.tooltip.bottom-gantt{position:relative;z-index:1000}.tooltip.bottom-gantt:before{border-color:#fff transparent transparent;border-style:solid;border-width:.2em .2em 0;content:\"\";left:82%;position:absolute;transform:translateX(-137%) translateY(100%) rotate(180deg);z-index:100}.tooltip.bottom-gantt:after{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;background:#fff;border:none;color:#64666c;content:attr(tooltip);font-size:.4em;font-weight:300;height:1.5em;line-height:1.5em;max-width:50em;padding:.5em 1em;pointer-events:none;position:absolute;text-align:center;user-select:none;white-space:nowrap;width:-webkit-max-content;width:-moz-max-content;width:max-content}@media (-ms-high-contrast:active),(-ms-high-contrast:none){.tooltip.bottom-gantt:after{font-size:11.5px}}.tooltip.bottom-gantt:hover:before,.tooltip.bottom-gantt:not(hover):before{bottom:-.1em;left:83%}.tooltip.bottom-gantt:hover:after,.tooltip.bottom-gantt:not(hover):after{bottom:-3.1em;left:0}.tooltip.bottom-gantt:not(hover):after,.tooltip.bottom-gantt:not(hover):before{opacity:0;transition:all .1s ease-in-out}.tooltip.bottom-gantt:hover:after,.tooltip.bottom-gantt:hover:before{opacity:1;transition:all .1s ease-in-out}.tooltip.bottom-menu{position:relative;z-index:1000}.tooltip.bottom-menu:before{border-color:#fff transparent transparent;border-style:solid;border-width:.2em .2em 0;content:\"\";left:82%;position:absolute;transform:translateX(-137%) translateY(100%) rotate(180deg);z-index:100}.tooltip.bottom-menu:after{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;background:#fff;border:none;color:#64666c;content:attr(tooltip);font-size:.4em;font-weight:300;height:1.5em;line-height:1.5em;max-width:50em;padding:.5em 1em;pointer-events:none;position:absolute;text-align:center;user-select:none;white-space:nowrap;width:-webkit-max-content;width:-moz-max-content;width:max-content}.tooltip.bottom-menu:hover:before,.tooltip.bottom-menu:not(hover):before{bottom:-.1em;left:74%}.tooltip.bottom-menu:hover:after,.tooltip.bottom-menu:not(hover):after{bottom:-3.1em;left:-64%}.tooltip.bottom-menu:not(hover):after,.tooltip.bottom-menu:not(hover):before{opacity:0;transition:all .1s ease-in-out}.tooltip.bottom-menu:hover:after,.tooltip.bottom-menu:hover:before{opacity:1;transition:all .1s ease-in-out}:host::ng-deep{justify-content:center;margin:0}:host::ng-deep,:host::ng-deep .tooltip{align-items:center;display:flex}:host::ng-deep .tooltip:after{transform:translateX(-20%)}:host::ng-deep .tooltip:before{left:108%!important}"]
            },] }
];
GlSharedComponentButtonImageTooltipComponent.ctorParameters = () => [];
GlSharedComponentButtonImageTooltipComponent.propDecorators = {
    id: [{ type: Input }],
    alt: [{ type: Input }],
    src: [{ type: Input }],
    show: [{ type: Input }],
    callback: [{ type: Input }]
};

class GlSharedComponentButtonMenuSimpleComponent {
    constructor() {
        this.disabled = false;
        this.hide = false;
    }
}
GlSharedComponentButtonMenuSimpleComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-button-menu-simple',
                template: "<img *ngIf=\"!hide\"\n  [id]=\"id\"\n  class=\"menu-buttons\"\n  [src]=\"src\"\n  [alt]=\"alt\"\n  (click)=\"callback\">\n",
                styles: [":host{height:1.45em}:host .menu-buttons{cursor:pointer;height:1.5em;margin:0 0 0 .1em;width:1.5em}:host .menu-buttons:hover{opacity:1;transition:all .1s ease-in-out}:host .menu-buttons:not(hover){opacity:.9;transition:all .2s ease-in-out}"]
            },] }
];
GlSharedComponentButtonMenuSimpleComponent.ctorParameters = () => [];
GlSharedComponentButtonMenuSimpleComponent.propDecorators = {
    disabled: [{ type: Input }],
    hide: [{ type: Input }],
    src: [{ type: Input }],
    id: [{ type: Input }],
    alt: [{ type: Input }],
    callback: [{ type: Input }]
};

class GlSharedComponentButtonMenuTooltipComponent {
    constructor() {
        this.disabled = false;
        this.hide = false;
    }
}
GlSharedComponentButtonMenuTooltipComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-button-menu-tooltip',
                template: "<div [attr.alt]=\"alt\" class=\"tooltip-menu\" *ngIf=\"!disabled && !hide\">\n  <gl-shared-component-button-menu-simple\n    [src]=\"src\"\n    [id]=\"id\"\n    [alt]=\"alt\"\n    [hide]=\"hide\"\n    (click)=\"callback($event)\"\n  ></gl-shared-component-button-menu-simple>\n</div>\n",
                styles: [".tooltip-menu{display:flex;position:relative;z-index:100}.tooltip-menu:before{border-color:#fff transparent transparent;border-style:solid;border-width:.2em .2em 0;content:\"\";left:80%;position:absolute;transform:translateX(-137%) translateY(100%) rotate(180deg);z-index:100}.tooltip-menu:after{background:#fff;border:none;color:#64666c;content:attr(alt);font-size:.4em;font-weight:600;left:50%;line-height:1.5em;max-width:50em;padding:.5em 1em;pointer-events:none;position:absolute;text-align:left;transform:translateX(-85%) translateY(124%);white-space:nowrap;width:-webkit-max-content;width:-moz-max-content;width:max-content}.tooltip-menu:not(hover):before{bottom:-.3em;opacity:0;transition:all .1s ease-in-out}.tooltip-menu:not(hover):after{bottom:0;opacity:0;transition:all .1s ease-in-out}.tooltip-menu:hover:after,.tooltip-menu:hover:before{bottom:-.11em;opacity:1;transition:all .1s ease-in-out}@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){:host::ng-deep{display:block}}"]
            },] }
];
GlSharedComponentButtonMenuTooltipComponent.ctorParameters = () => [];
GlSharedComponentButtonMenuTooltipComponent.propDecorators = {
    disabled: [{ type: Input }],
    hide: [{ type: Input }],
    tooltip: [{ type: Input }],
    src: [{ type: Input }],
    id: [{ type: Input }],
    alt: [{ type: Input }],
    callback: [{ type: Input }]
};

class GlSharedComponentInputAutocompleteSimpleService {
    constructor() {
        this.autocompleteList$ = new Subject();
        this.autocompleteReset$ = new Subject();
        this.autocompleteLoaded$ = new Subject();
        this.autocompleteUpdateValue$ = new Subject();
    }
    ngOnDestroy() {
        this.autocompleteList$.observers.map(x => x.complete());
        this.autocompleteLoaded$.observers.map(x => x.complete());
        this.autocompleteReset$.observers.map(x => x.complete());
        this.autocompleteUpdateValue$.observers.map(x => x.complete());
    }
}
GlSharedComponentInputAutocompleteSimpleService.ɵprov = ɵɵdefineInjectable({ factory: function GlSharedComponentInputAutocompleteSimpleService_Factory() { return new GlSharedComponentInputAutocompleteSimpleService(); }, token: GlSharedComponentInputAutocompleteSimpleService, providedIn: "root" });
GlSharedComponentInputAutocompleteSimpleService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
GlSharedComponentInputAutocompleteSimpleService.ctorParameters = () => [];

class GlSharedComponentInputAutocompleteSimpleComponent {
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
}
GlSharedComponentInputAutocompleteSimpleComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-input-autocomplete-simple',
                template: "<ng-content></ng-content>\n<div class=\"input-container custom-combobox {{ class }} {{ disabled ? 'read-only' : '' }} {{ listItems.length > 0 ? '' : 'no-data' }}\">\n  <mat-form-field\n    (focusout)=\"overlay.position().global().dispose()\"\n    floatLabel=\"never\"\n    appearance=\"none\">\n    <div class=\"combobox-container {{ listItems.length > 0 ? '' : 'no-data' }} {{ disabled ? 'read-only' : '' }}\">\n      <input\n        #input\n        type=\"text\"\n        aria-label=\"Number\"\n        class=\"item-content {{ itemContentAlignment }} {{ class }} {{ listItems.length > 0 ? '' : 'no-data' }} {{ disabled ? 'read-only' : '' }}\"\n        matInput\n        [readonly]=\"disabled\"\n        [id]=\"id\"\n        [placeholder]=\"placeholder\"\n        [formControl]=\"autocompleteInput\"\n        [maxLength]=\"maxLength\"\n        [matAutocomplete]=\"auto\"\n        (focusin)=\"reset(auto, $event)\"\n        (focusout)=\"validate()\">\n      <!--    <img-->\n      <!--      *ngIf=\"!disabled\"-->\n      <!--      (click)=\"clearItems(input)\"-->\n      <!--      alt=\"Clear items\"-->\n      <!--      class=\"clear-items\"-->\n      <!--      [src]=\"clearSource\">-->\n\n      <!--    <img-->\n      <!--      #arrowDown-->\n      <!--      (click)=\"clearItems(input)\"-->\n      <!--      alt=\"Show items\"-->\n      <!--      class=\"arrow-down {{ class }} {{ disabled ? 'read-only' : '' }}\"-->\n      <!--      [src]=\"imageSource\">-->\n    </div>\n    <mat-autocomplete autoActiveFirstOption=\"true\" #auto=\"matAutocomplete\" (optionSelected)=\"input.blur()\" [mat-dialog-close]=\"overlay.position().global().dispose()\">\n      <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option.text\">\n        {{option.text}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n  <img\n    #arrowDown\n    (click)=\"clearItems(input)\"\n    alt=\"Show items\"\n    class=\"arrow-down {{ class }} {{ disabled ? 'read-only' : '' }}\"\n    [src]=\"imageSource\">\n</div>\n\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");::ng-deep .mat-autocomplete-panel::-webkit-scrollbar:horizontal{height:.5em}::ng-deep .dark .mat-autocomplete-panel::-webkit-scrollbar,::ng-deep .light .mat-autocomplete-panel::-webkit-scrollbar,::ng-deep .mat-autocomplete-panel::-webkit-scrollbar{width:.5em}::ng-deep .dark .mat-autocomplete-panel::-webkit-scrollbar-button,::ng-deep .light .mat-autocomplete-panel::-webkit-scrollbar-button,::ng-deep .mat-autocomplete-panel::-webkit-scrollbar-button{background-color:#333437;display:none!important}::ng-deep .dark .mat-autocomplete-panel::-webkit-scrollbar-track-piece,::ng-deep .light .mat-autocomplete-panel::-webkit-scrollbar-track-piece,::ng-deep .mat-autocomplete-panel::-webkit-scrollbar-track-piece{background-color:#2c2c2f}::ng-deep .dark .mat-autocomplete-panel::-webkit-scrollbar-thumb,::ng-deep .light .mat-autocomplete-panel::-webkit-scrollbar-thumb,::ng-deep .mat-autocomplete-panel::-webkit-scrollbar-thumb{background-color:#64666c;border:1px solid #38393c}::ng-deep .dark .mat-autocomplete-panel::-webkit-scrollbar-corner,::ng-deep .light .mat-autocomplete-panel::-webkit-scrollbar-corner,::ng-deep .mat-autocomplete-panel::-webkit-scrollbar-corner{background-color:#64666c!important}:host::ng-deep{display:flex;flex:1 0 auto;flex-direction:column;position:relative}:host::ng-deep .input-container{align-items:center;background-color:#333437;display:flex;flex-grow:1}:host::ng-deep .input-container mat-form-field{display:flex;flex-grow:1;margin:0}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper{display:flex;flex-direction:column;flex-grow:1;padding:0}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex{align-items:inherit;display:flex;flex-grow:1}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix{border:none;display:flex;flex:1 1 0px;padding:0;width:100%}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container{display:flex;flex-direction:row;flex-grow:1;pointer-events:none}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element{background-color:#333437;border:none;color:#fff;flex-grow:1;font-family:Montserrat,sans-serif;font-size:.45em;font-weight:400;margin:0;padding:.8em;position:relative}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element::-moz-placeholder{color:#64666c!important}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element:-ms-input-placeholder{color:#64666c!important}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element::-ms-input-placeholder{color:#64666c!important}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element::placeholder{color:#64666c!important}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.left{text-align:left}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.center{text-align:center}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.right{text-align:right}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.light{background-color:rgba(0,0,0,.1)}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.light::-moz-placeholder{color:hsla(0,0%,100%,.2)!important}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.light:-ms-input-placeholder{color:hsla(0,0%,100%,.2)!important}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.light::-ms-input-placeholder{color:hsla(0,0%,100%,.2)!important}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.light::placeholder{color:hsla(0,0%,100%,.2)!important}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.dark{background-color:#161617}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element .item-content:-ms-input-placeholder{color:#64666c!important}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element .item-content.light:-ms-input-placeholder{color:grey!important}:host::ng-deep .input-container mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .clear-items{height:.5em;position:absolute;right:1.5em;top:.4em;width:.5em}:host::ng-deep .input-container .arrow-down{background-color:#333437;height:.8em;padding:0 .3em;transition:all .2s ease-in-out;width:.8em}:host::ng-deep .input-container .arrow-down:hover{background-color:#2c2c2f;transition:all .2s ease-in-out}:host::ng-deep .input-container .arrow-down.light{background-color:rgba(0,0,0,.1);transition:all .2s ease-in-out}:host::ng-deep .input-container .arrow-down.light::-moz-placeholder{color:hsla(0,0%,100%,.2)!important}:host::ng-deep .input-container .arrow-down.light:-ms-input-placeholder{color:hsla(0,0%,100%,.2)!important}:host::ng-deep .input-container .arrow-down.light::-ms-input-placeholder{color:hsla(0,0%,100%,.2)!important}:host::ng-deep .input-container .arrow-down.light::placeholder{color:hsla(0,0%,100%,.2)!important}:host::ng-deep .input-container .arrow-down.light:hover{background-color:rgba(0,0,0,.2);transition:all .2s ease-in-out}:host::ng-deep .input-container .arrow-down.dark{background-color:#161617;transition:all .2s ease-in-out}:host::ng-deep .input-container .arrow-down.dark:hover{background-color:#1a1b1d;transition:all .2s ease-in-out}:host::ng-deep .input-container .arrow-down.read-only{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;pointer-events:none;user-select:none}:host::ng-deep .input-container.no-data .arrow-down,:host::ng-deep .input-container.read-only .arrow-down{display:none}::ng-deep .mat-autocomplete-panel{background-color:#38393c;border-radius:0;box-shadow:none!important;transition:all .2s ease-in-out}::ng-deep .mat-autocomplete-panel::-webkit-scrollbar{width:1em!important}::ng-deep .mat-autocomplete-panel mat-option{border-radius:0;font-size:1em;height:4em;line-height:4em;padding:0 1.5em;transition:all .2s ease-in-out}::ng-deep .mat-autocomplete-panel mat-option:nth-child(odd){background-color:#333437;transition:all .2s ease-in-out}::ng-deep .mat-autocomplete-panel mat-option.mat-active,::ng-deep .mat-autocomplete-panel mat-option.mat-selected{background-color:#d24077;transition:all .2s ease-in-out}::ng-deep .mat-autocomplete-panel mat-option:hover{background-color:#b01e45!important;transition:all .2s ease-in-out}::ng-deep .light .mat-autocomplete-panel{background-color:transparent;transition:all .2s ease-in-out}::ng-deep .light .mat-autocomplete-panel mat-option:nth-child(odd){background-color:rgba(0,0,0,.6);transition:all .2s ease-in-out}::ng-deep .light .mat-autocomplete-panel mat-option:nth-child(2n+2){background-color:rgba(0,0,0,.7);transition:all .2s ease-in-out}::ng-deep .light .mat-autocomplete-panel mat-option.mat-active{background-color:#d24077;transition:all .2s ease-in-out}::ng-deep .light .mat-autocomplete-panel mat-option:hover{background-color:#b01e45!important;transition:all .2s ease-in-out}::ng-deep .dark .mat-autocomplete-panel{background-color:transparent;transition:all .2s ease-in-out}::ng-deep .dark .mat-autocomplete-panel mat-option:nth-child(odd){background-color:#2c2c2f;transition:all .2s ease-in-out}::ng-deep .dark .mat-autocomplete-panel mat-option:nth-child(2n+2){background-color:#333437;transition:all .2s ease-in-out}::ng-deep .dark .mat-autocomplete-panel mat-option.mat-active{background-color:#d24077;transition:all .2s ease-in-out}::ng-deep .dark .mat-autocomplete-panel mat-option:hover{background-color:#b01e45!important;transition:all .2s ease-in-out}@media screen and (min-device-width:320px) and (max-device-width:1024px){::ng-deep .mat-autocomplete-panel{font-size:2.8vw!important}}@media screen and (min-device-width:1024px){::ng-deep .mat-autocomplete-panel{font-size:.6vw!important}}"]
            },] }
];
GlSharedComponentInputAutocompleteSimpleComponent.ctorParameters = () => [
    { type: GlSharedComponentInputAutocompleteSimpleService },
    { type: Overlay }
];
GlSharedComponentInputAutocompleteSimpleComponent.propDecorators = {
    input: [{ type: ViewChild, args: ['input',] }],
    currentValue: [{ type: Output }],
    listItems: [{ type: Input }],
    disabled: [{ type: Input }],
    listName: [{ type: Input }],
    id: [{ type: Input }],
    placeholder: [{ type: Input }],
    itemContentAlignment: [{ type: Input }],
    class: [{ type: Input }],
    value: [{ type: Input }],
    maxLength: [{ type: Input }],
    custom: [{ type: Input }],
    baseUrl: [{ type: Input }],
    valueField: [{ type: Input }],
    textField: [{ type: Input }],
    labelValue: [{ type: Input }],
    labelAlignment: [{ type: Input }],
    required: [{ type: Input }],
    requiredField: [{ type: Input }]
};

class GlSharedComponentInputAutocompleteLabelComponent {
    constructor() {
        this.currentValue = new EventEmitter();
        this.listItems = [];
        this.disabled = false;
        this.requiredField = 'Required field';
    }
    onCurrentValue(value) { this.currentValue.emit(value); }
}
GlSharedComponentInputAutocompleteLabelComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-input-autocomplete-label',
                template: "<gl-shared-component-input-autocomplete-simple\n  [class]=\"class\"\n  [value]=\"value\"\n  [listName]=\"listName\"\n  (currentValue)=\"onCurrentValue($event)\"\n  [id]=\"id\"\n  [itemContentAlignment]=\"itemContentAlignment\"\n  [placeholder]=\"placeholder\"\n  [listItems]=\"listItems\"\n  [disabled]=\"disabled\"\n\n  [custom]=\"custom\"\n  [baseUrl]=\"baseUrl\"\n  [valueField]=\"valueField\"\n  [textField]=\"textField\"\n  ><gl-shared-component-title-label-simple\n    [id]=\"id\"\n    [labelAlignment]=\"labelAlignment\"\n    [labelValue]=\"labelValue\"\n    [required]=\"required\"\n    [class]=\"class\"\n    [requiredLabel]=\"requiredField\"\n  ></gl-shared-component-title-label-simple>\n</gl-shared-component-input-autocomplete-simple>\n",
                styles: [":host::ng-deep{display:flex}:host::ng-deep gl-shared-component-title-label-simple{flex-grow:0}"]
            },] }
];
GlSharedComponentInputAutocompleteLabelComponent.ctorParameters = () => [];
GlSharedComponentInputAutocompleteLabelComponent.propDecorators = {
    currentValue: [{ type: Output }],
    listItems: [{ type: Input }],
    disabled: [{ type: Input }],
    listName: [{ type: Input }],
    id: [{ type: Input }],
    labelValue: [{ type: Input }],
    labelAlignment: [{ type: Input }],
    placeholder: [{ type: Input }],
    itemContentAlignment: [{ type: Input }],
    class: [{ type: Input }],
    value: [{ type: Input }],
    required: [{ type: Input }],
    custom: [{ type: Input }],
    baseUrl: [{ type: Input }],
    valueField: [{ type: Input }],
    textField: [{ type: Input }],
    requiredField: [{ type: Input }]
};

class GlSharedComponentFilterService {
    constructor() {
        this.opened = false;
        this.menuHidden$ = new Subject();
    }
    initialize(container, background, menuNavContainer, router) {
        this.container = container;
        this.background = background;
        this.menuNavContainer = menuNavContainer;
        this.router = router;
        this.menuHidden$.next(true);
    }
    backgroundClick(event) {
        if (this.opened) {
            this.close(event);
        }
    }
    open(event) {
        event.preventDefault();
        this.applyPartialResult;
        this.container.classList.add('menu-active');
        this.background.classList.add('visible-background');
        setTimeout(() => {
            if (this.isIE) {
                this.menuNavContainer.scrollTop = 0;
            }
            else {
                this.menuNavContainer.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }, 100);
        this.menuHidden$.next(false);
        this.opened = true;
        return true;
    }
    close(event) {
        event.preventDefault();
        this.container.classList.remove('menu-active');
        this.background.classList.remove('visible-background');
        this.menuHidden$.next(true);
        this.opened = false;
        return false;
    }
}
GlSharedComponentFilterService.ɵprov = ɵɵdefineInjectable({ factory: function GlSharedComponentFilterService_Factory() { return new GlSharedComponentFilterService(); }, token: GlSharedComponentFilterService, providedIn: "root" });
GlSharedComponentFilterService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
GlSharedComponentFilterService.ctorParameters = () => [];

class GlSharedComponentFilterComponent {
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
}
GlSharedComponentFilterComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-filter',
                template: "<gl-shared-component-menu-background\n  #background\n  (click)=\"service.backgroundClick($event)\"\n></gl-shared-component-menu-background>\n<div #container class=\"filter-container {{ type }}\">\n  <div class=\"header-filter-container\">\n    <div class=\"menu-header\">\n      <div class=\"menu-top-icons-container\">\n        <img id=\"close-menu-button\" (click)=\"service.close($event)\" [src]=\"closeButton\" class=\"menu-icons close-menu\" alt=\"Close menu button\">\n      </div>\n      <div class=\"menu-header-title\">\n        <h1 class=\"title\">{{ title }}</h1>\n        <h2 class=\"subtitle\">{{ subtitle }}</h2>\n      </div>\n    </div>\n  </div>\n  <nav class=\"menu-nav-container\" #menuNavContainer>\n    <div class=\"menu-content\">\n      <div class=\"input-container\" >\n        <ng-content></ng-content>\n      </div>\n    </div>\n  </nav>\n  <div class=\"bottom-container\">\n    <span\n      *ngIf=\"partialResult != null\"\n      class=\"partial-result-description\">{{ partialResultDescription }} {{ partialResult }} {{ partialResult > 1 ? itemPluralDescription : itemSingularDescription }}\n    </span>\n    <div class=\"buttons-container\">\n      <gl-shared-component-input-button-simple\n        value=\"apply\"\n        [class]=\"buttonClass\"\n        [innerValue]=\"applyButtonDescription\"\n        (click)=\"onApply()\"\n      ></gl-shared-component-input-button-simple>\n      <gl-shared-component-input-button-simple\n        value=\"clear\"\n        [class]=\"buttonClass\"\n        [innerValue]=\"clearButtonDescription\"\n        (click)=\"onClear()\"\n      ></gl-shared-component-input-button-simple>\n    </div>\n  </div>\n</div>\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep .filter-container .menu-nav-container::-webkit-scrollbar:horizontal{height:.5em}:host::ng-deep .filter-container .menu-nav-container::-webkit-scrollbar{width:.5em}:host::ng-deep .filter-container .menu-nav-container::-webkit-scrollbar-button{background-color:#333437;display:none!important}:host::ng-deep .filter-container .menu-nav-container::-webkit-scrollbar-track-piece{background-color:#2c2c2f}:host::ng-deep .filter-container .menu-nav-container::-webkit-scrollbar-thumb{background-color:#64666c;border:1px solid #38393c}:host::ng-deep .filter-container .menu-nav-container::-webkit-scrollbar-corner{background-color:#64666c!important}:host::ng-deep .filter-container{background:#1a1b1d;background-size:cover;border-bottom:.5em solid;border-image-slice:.5;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8),rgba(97,61,149,.8));border-top:.3em solid;bottom:0;display:flex;flex-direction:column;flex-grow:1;height:100vh;max-width:17em;min-width:17em;overflow:hidden;position:fixed;right:-110%;top:0;transition:right .5s ease-in-out;width:85vw;z-index:10000}:host::ng-deep .filter-container.translucid{background:hsla(0,0%,100%,.05);border-image-source:none;border-left:1px solid hsla(0,0%,100%,.05);border-top:.3em solid hsla(0,0%,100%,.1)}:host::ng-deep .filter-container .a{display:block;min-height:3em}:host::ng-deep .filter-container .header-filter-container .menu-header{display:flex;flex-direction:column;margin:.5em 1em 1em .5em}:host::ng-deep .filter-container .header-filter-container .menu-header .menu-top-icons-container{display:flex;margin:0 0 1.5em}:host::ng-deep .filter-container .header-filter-container .menu-header .menu-top-icons-container .close-menu,:host::ng-deep .filter-container .header-filter-container .menu-header .menu-top-icons-container .settings-menu{cursor:pointer;height:1.5em;width:1.5em}:host::ng-deep .filter-container .header-filter-container .menu-header .menu-top-icons-container .close-menu:active,:host::ng-deep .filter-container .header-filter-container .menu-header .menu-top-icons-container .close-menu:hover,:host::ng-deep .filter-container .header-filter-container .menu-header .menu-top-icons-container .settings-menu:active,:host::ng-deep .filter-container .header-filter-container .menu-header .menu-top-icons-container .settings-menu:hover{-webkit-animation:increase-decrease .4s ease-in-out;-webkit-animation-fill-mode:forwards;animation:increase-decrease .4s ease-in-out;animation-fill-mode:forwards;opacity:1}:host::ng-deep .filter-container .header-filter-container .menu-header .menu-top-icons-container .close-menu{margin:0 .2em 0 0}:host::ng-deep .filter-container .header-filter-container .menu-header .menu-header-title .subtitle,:host::ng-deep .filter-container .header-filter-container .menu-header .menu-header-title .title{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;color:#fff;margin:0;text-transform:uppercase;user-select:none}:host::ng-deep .filter-container .header-filter-container .menu-header .menu-header-title .title{display:none;font-family:Montserrat,sans-serif;font-size:.9em;font-weight:700}:host::ng-deep .filter-container .header-filter-container .menu-header .menu-header-title .subtitle{font-family:Montserrat,sans-serif;font-size:1.5em;font-weight:100}:host::ng-deep .filter-container .bottom-container{display:flex;flex-direction:column;margin:1em 0 .4em}:host::ng-deep .filter-container .bottom-container .partial-result-description{color:#d24077;font-family:Montserrat,sans-serif;font-size:.5em;font-weight:700;padding:0 0 0 .5em;text-align:center}:host::ng-deep .filter-container .bottom-container .buttons-container{display:flex;font-size:.8em;padding:.6em 0 .3em .3em}:host::ng-deep .filter-container .bottom-container .buttons-container .default-button:first-child{margin:0 .5em 0 0}:host::ng-deep .filter-container .bottom-container .buttons-container .default-button:nth-child(2){margin:0 0 0 .5em}:host::ng-deep .filter-container .menu-nav-container{border-bottom:1px solid;border-image-slice:.5;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8),rgba(97,61,149,.8));border-top:1px solid;display:flex;flex-grow:1;max-height:100%;overflow:auto;overflow-x:hidden}:host::ng-deep .filter-container .menu-nav-container:after{bottom:-10.5%}:host::ng-deep .filter-container .menu-nav-container .menu-content{display:flex;flex-direction:column;flex-grow:1;position:relative}:host::ng-deep .filter-container .menu-nav-container .menu-content .menu-title{align-items:center;background:linear-gradient(90deg,rgba(210,64,119,.8),rgba(97,61,149,.8));border-left:.2em solid #fff;display:flex;margin:0 0 .14em;position:relative}:host::ng-deep .filter-container .menu-nav-container .menu-content .menu-title .material-icons{color:hsla(0,0%,100%,.6);font-size:1.2em;margin:0 .5em 0 .3em;padding:.3em}:host::ng-deep .filter-container .menu-nav-container .menu-content .menu-title .material-icons.expand{color:#fff;position:absolute;right:.3em;top:.5em}:host::ng-deep .filter-container .menu-nav-container .menu-content .menu-title .menu-icons{height:1.5em;padding:.2em .5em;width:1.5em}:host::ng-deep .filter-container .menu-nav-container .menu-content .menu-title a{color:#fff;flex-grow:1;font-family:Montserrat,sans-serif;font-size:.6em;font-weight:300;padding:1.5em .7em;text-decoration:none;text-transform:uppercase}:host::ng-deep .filter-container .menu-nav-container .menu-content .input-container gl-shared-component-filter-container .type-container{background-color:hsla(0,0%,100%,.03);border-bottom:1px solid hsla(0,0%,100%,.03)}:host::ng-deep .filter-container .menu-nav-container .menu-content .input-container .options-container{display:flex}:host::ng-deep .filter-container .menu-nav-container .menu-content .input-container gl-shared-component-input-datepicker-simple-day-month-year .mat-form-field-wrapper .mat-form-field-flex,:host::ng-deep .filter-container .menu-nav-container .menu-content .input-container gl-shared-component-input-datepicker-simple-month-year .mat-form-field-wrapper .mat-form-field-flex{height:1.5em}:host::ng-deep .filter-container .menu-nav-container .menu-content .input-container gl-shared-component-input-autocomplete-simple .input-container{height:1.5em;margin:.2em 0 0}:host::ng-deep .show-admin-settings{visibility:visible!important}:host::ng-deep .filter-container .menu-active,:host::ng-deep .menu-active{right:0}:host::ng-deep .menu-background{left:1000px;opacity:0;visibility:collapse;z-index:-1000}:host::ng-deep .visible-background{background:rgba(0,0,0,.6);height:100%;left:0;opacity:1;position:fixed;top:0;transition:all 1s ease-in-out;visibility:visible;width:100%;z-index:999}:host::ng-deep .hide-subtitle{margin:0;opacity:0;padding:0;transition:all .25s ease-in-out;visibility:collapse}:host::ng-deep .show-subtitle{opacity:1;transition:all .25s ease-in-out;transition-delay:.4s;visibility:visible}:host::ng-deep .hide-subtitle-container{-webkit-animation:hide-subtitle .4s ease-in-out;-webkit-animation-fill-mode:forwards;animation:hide-subtitle .4s ease-in-out;animation-fill-mode:forwards}:host::ng-deep .show-subtitle-container{-webkit-animation:show-subtitle .4s ease-in-out;-webkit-animation-fill-mode:forwards;animation:show-subtitle .4s ease-in-out;animation-fill-mode:forwards}:host::ng-deep .collapsed-menu .expand{transform:rotate(0deg);transition:all .4s ease-in-out}:host::ng-deep .collapsed-menu .menu-icons{-webkit-animation:decrease-increase .4s ease-in-out;-webkit-animation-fill-mode:forwards;animation:decrease-increase .4s ease-in-out;animation-fill-mode:forwards}:host::ng-deep .expanded-menu .expand{transform:rotate(-180deg);transition:all .4s ease-in-out}:host::ng-deep .expanded-menu .menu-icons{-webkit-animation:increase-decrease .4s ease-in-out;-webkit-animation-fill-mode:forwards;animation:increase-decrease .4s ease-in-out;animation-fill-mode:forwards}"]
            },] }
];
GlSharedComponentFilterComponent.ctorParameters = () => [
    { type: Router },
    { type: GlSharedComponentFilterService }
];
GlSharedComponentFilterComponent.propDecorators = {
    container: [{ type: ViewChild, args: ['container', { static: true, read: ElementRef },] }],
    background: [{ type: ViewChild, args: ['background', { static: true, read: ElementRef },] }],
    menuNavContainer: [{ type: ViewChild, args: ['menuNavContainer',] }],
    title: [{ type: Input }],
    subtitle: [{ type: Input }],
    type: [{ type: Input }],
    closeButton: [{ type: Input }],
    partialResult: [{ type: Input }],
    partialResultDescription: [{ type: Input }],
    itemSingularDescription: [{ type: Input }],
    itemPluralDescription: [{ type: Input }],
    applyButtonDescription: [{ type: Input }],
    clearButtonDescription: [{ type: Input }],
    buttonClass: [{ type: Input }],
    isIE: [{ type: Input }],
    applyPartialResult: [{ type: Input }],
    applyFilter$: [{ type: Output }],
    clearFilter$: [{ type: Output }]
};

class GlSharedComponentFilterContainerComponent {
    constructor() { }
}
GlSharedComponentFilterContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-filter-container',
                template: "<div class=\"type-container\">\n  <label class=\"title\">{{ label }}</label>\n  <ng-content></ng-content>\n</div>\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep .type-container{background-color:#2c2c2f;border-bottom:1px solid #38393c;display:flex;flex-direction:column;padding:.7em .7em .2em}:host::ng-deep .type-container .title{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;color:#d24077;font-family:Montserrat,sans-serif;font-size:.4em;font-weight:700;font-weight:400;margin:0 0 1.5em;text-transform:uppercase;user-select:none}"]
            },] }
];
GlSharedComponentFilterContainerComponent.ctorParameters = () => [];
GlSharedComponentFilterContainerComponent.propDecorators = {
    label: [{ type: Input }]
};

class GlSharedComponentButtonAttachmentFileService {
    constructor(_alert) {
        this._alert = _alert;
    }
    initialize(input, currentValue, attachments, duplicatedDescription, invalidSizeDescription, invalidFormatDescription, attachmentIconSrc) {
        this._input = input;
        this._currentValue = currentValue;
        this._attachments = attachments;
        // Todo Block specif files
        const accept = input.attributes.accept.value;
        this._accepts = accept == null || accept == 'undefined' || accept === '' ? ['*'] : AttachmentParser.parseAcceptFiles(input.attributes.accept.value);
        this._input.oninput = () => { this.onChange(duplicatedDescription, invalidSizeDescription, invalidFormatDescription, attachmentIconSrc); };
    }
    addAttachment() {
        this._input.click();
    }
    onChange(duplicatedDescription, invalidSizeDescription, invalidFormatDescription, attachmentIconSrc) {
        const isValid = AttachmentValidate.file(this._input, this._accepts);
        const sizeValid = AttachmentValidate.fileSize(this._input);
        const duplicated = AttachmentValidate.duplicated(this._input.files[0].name, this._attachments);
        if (duplicated) {
            this.clearInput();
            this._alert.show(duplicatedDescription).then(() => { });
            return;
        }
        else if (!sizeValid) {
            const maxSize = AttachmentValidate.maxSize(this._input);
            const maxSizeStr = StringConverter.formatNumber(maxSize);
            this.clearInput();
            this._alert.show(`${invalidSizeDescription}: ${maxSizeStr}KB`).then(() => { });
            return;
        }
        else if (!isValid) {
            this.clearInput();
            this._alert.show(invalidFormatDescription).then(() => { });
        }
        else {
            const file = {
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
    }
    clearInput() {
        this._input.value = null;
    }
}
GlSharedComponentButtonAttachmentFileService.ɵprov = ɵɵdefineInjectable({ factory: function GlSharedComponentButtonAttachmentFileService_Factory() { return new GlSharedComponentButtonAttachmentFileService(ɵɵinject(GlSharedComponentModalAlertService)); }, token: GlSharedComponentButtonAttachmentFileService, providedIn: "root" });
GlSharedComponentButtonAttachmentFileService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
GlSharedComponentButtonAttachmentFileService.ctorParameters = () => [
    { type: GlSharedComponentModalAlertService }
];

class GlSharedComponentButtonAttachmentFileComponent {
    constructor(service) {
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
    ngAfterViewInit() {
        this.service.initialize(this.fileInput.nativeElement, this.currentValue$, this.attachments, this.duplicatedDescription, this.invalidSizeDescription, this.invalidFormatDescription, this.attachmentIconSrc);
    }
}
GlSharedComponentButtonAttachmentFileComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-button-attachment-file',
                template: "<div class=\"attachment-container\" (click)=\"service.addAttachment()\">\n  <input\n    #fileInput\n    id=\"file-input\"\n    name=\"file-input\"\n    type=\"file\"\n    class=\"file-input\"\n    [accept]=\"accept\"\n    [title]=\"title\"\n    [attr.data-maxsize]=\"maxFileSize\"/>\n  <img class=\"attachment-icon\" [src]=\"icon\" alt=\"Attachment Icon\">\n  <span class=\"attachment-file-button\">{{ description }}</span>\n</div>\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep .attachment-container{align-items:center;border-radius:.5em;cursor:pointer;display:flex;margin:.2em 0;padding:.4em .3em;position:relative}:host::ng-deep .attachment-container:not(hover){background:rgba(63,64,68,.6);transition:all .2s ease-in-out}:host::ng-deep .attachment-container:hover{background:rgba(63,64,68,.9);transition:all .2s ease-in-out}:host::ng-deep .attachment-container .file-input{display:none;font-size:1em}:host::ng-deep .attachment-container .attachment-icon{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;height:2em;margin:.5em .8em .5em .2em;padding:0;user-select:none;width:2em}:host::ng-deep .attachment-container .file{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;color:#1e1e1e;font-size:.8em;overflow:hidden;padding:1em 0;text-overflow:ellipsis;user-select:none;white-space:nowrap;width:75%}:host::ng-deep .attachment-container .attachment-file-button{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;color:#fff;font-family:Montserrat,sans-serif;font-weight:400;user-select:none}"]
            },] }
];
GlSharedComponentButtonAttachmentFileComponent.ctorParameters = () => [
    { type: GlSharedComponentButtonAttachmentFileService }
];
GlSharedComponentButtonAttachmentFileComponent.propDecorators = {
    fileInput: [{ type: ViewChild, args: ['fileInput', { read: ElementRef, static: true },] }],
    maxFileSize: [{ type: Input }],
    accept: [{ type: Input }],
    title: [{ type: Input }],
    icon: [{ type: Input }],
    attachmentIconSrc: [{ type: Input }],
    description: [{ type: Input }],
    attachments: [{ type: Input }],
    duplicatedDescription: [{ type: Input }],
    invalidSizeDescription: [{ type: Input }],
    invalidFormatDescription: [{ type: Input }],
    currentValue$: [{ type: Output }]
};

class GlSharedComponentModalAttachmentLinkService {
    constructor(_alert) {
        this._alert = _alert;
        this.linkIcon = '../assets/img/icon/attachment/link.svg';
        this.showModal = false;
        this.currentValue = new Subject();
    }
    setup(name, url) {
        this.name = name;
        this.url = url;
    }
    onCancel() {
        this.modal(false);
    }
    onConfirm() {
        return __awaiter(this, void 0, void 0, function* () {
            if (yield this.validData()) {
                const values = {
                    name: this._name,
                    url: this._url,
                    icon: this.linkIcon,
                    editing: this.editing,
                    editId: this.editId
                };
                this.currentValue.next(values);
                this.modal(false);
            }
        });
    }
    onName(e) {
        this._name = e.currentTarget.value;
    }
    onUrl(e) {
        this._url = e.currentTarget.value;
    }
    validData() {
        return __awaiter(this, void 0, void 0, function* () {
            const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
            const tempUrl = this._url != null && !this._url.includes('http://') && !this._url.includes('https://') ? `http://${this._url}` : this._url;
            const validUrl = new RegExp(urlRegex).test(tempUrl);
            if (this._name == null || this._name.trim().length === 0) {
                yield this._alert.show('Por favor, informe o nome do arquivo!');
                return false;
            }
            else if (this._url == null || this._url.trim().length === 0) {
                yield this._alert.show('Por favor, informe o url do arquivo!');
                return false;
            }
            else if (!validUrl) {
                yield this._alert.show('Por favor, informe um url válido!');
            }
            else {
                this._url = tempUrl;
                return true;
            }
        });
    }
    modal(show) {
        this.editing = false;
        this.editId = null;
        if (show) {
            this.modalClass = 'hide-modal';
            this.showModal = true;
            this.modalClass = 'show-modal';
        }
        else {
            this.modalClass = 'hide-modal';
            setTimeout(() => {
                this.showModal = false;
            }, 300);
        }
    }
    edit(name, url, editId) {
        this.modal(true);
        this.editing = true;
        this.editId = editId;
        setTimeout(() => {
            this.name = document.querySelector('#attachment-link-name');
            this.url = document.querySelector('#attachment-link-value');
            this._name = name;
            this.name.value = name;
            this._url = url;
            this.url.value = url;
        }, 100);
    }
    onModalKeyUp(e) {
        if (e.key === 'Enter') {
            return this.onConfirm();
        }
        else if (e.key === 'Escape') {
            this.onCancel();
        }
    }
}
GlSharedComponentModalAttachmentLinkService.ɵprov = ɵɵdefineInjectable({ factory: function GlSharedComponentModalAttachmentLinkService_Factory() { return new GlSharedComponentModalAttachmentLinkService(ɵɵinject(GlSharedComponentModalAlertService)); }, token: GlSharedComponentModalAttachmentLinkService, providedIn: "root" });
GlSharedComponentModalAttachmentLinkService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
GlSharedComponentModalAttachmentLinkService.ctorParameters = () => [
    { type: GlSharedComponentModalAlertService }
];

class GlSharedComponentButtonAttachmentLinkComponent {
    constructor(service) {
        this.service = service;
    }
}
GlSharedComponentButtonAttachmentLinkComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-button-attachment-link',
                template: "<div\n  class=\"attachment-container dark link-container\"\n  (click)=\"service.modal(true)\">\n  <img\n    class=\"attachment-icon\"\n    src=\"../assets/img/icon/menu/attachment/link-white.svg\"\n    alt=\"Attachment Icon\">\n  <span\n    id=\"add-attachment-link\"\n    class=\"attachment-file-button\">Adicionar link</span>\n</div>\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep .attachment-container{align-items:center;border-radius:.5em;cursor:pointer;display:flex;margin:.2em 0;padding:.4em .3em;position:relative}:host::ng-deep .attachment-container:not(hover){background:rgba(63,64,68,.6);transition:all .2s ease-in-out}:host::ng-deep .attachment-container:hover{background:rgba(63,64,68,.9);transition:all .2s ease-in-out}:host::ng-deep .attachment-container .attachment-icon{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;height:2em;margin:.8em .8em .8em .2em;padding:0;user-select:none;width:2em}:host::ng-deep .attachment-container .attachment-file-button{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;color:#fff;font-family:Montserrat,sans-serif;font-weight:400;user-select:none}"]
            },] }
];
GlSharedComponentButtonAttachmentLinkComponent.ctorParameters = () => [
    { type: GlSharedComponentModalAttachmentLinkService }
];

class GlSharedComponentModalAttachmentLinkComponent {
    constructor(service) {
        this.service = service;
        this.subtitle = ': link';
        this.fileNameLabel = 'File name';
        this.fileNamePlaceholder = 'Type the file name';
        this.linkPlaceholder = 'Type the file link';
        this.cancelInnerValue = 'Cancel';
    }
}
GlSharedComponentModalAttachmentLinkComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-modal-attachment-link',
                template: "<div\n  *ngIf=\"service.showModal\"\n  (keyup)=\"service.onModalKeyUp($event)\"\n  id=\"modal-attachment-link\"\n  class=\"modal-link-container {{ service.modalClass }}\">\n  <div class=\"modal-main-content\">\n    <gl-shared-component-modal-header\n      [title]=\"title\"\n      [subtitle]=\"subtitle\"\n      [modalLogo]=\"modalLogo\"\n    ></gl-shared-component-modal-header>\n    <div class=\"modal-input-container\">\n      <div class=\"name-container\">\n        <label for=\"attachment-link-name\">{{ fileNameLabel }}</label>\n        <input\n          (keyup)=\"service.onName($event)\"\n          id=\"attachment-link-name\"\n          type=\"text\"\n          [placeholder]=\"fileNamePlaceholder\">\n      </div>\n      <div class=\"value-container\">\n        <label for=\"attachment-link-value\">Link</label>\n        <input\n          (keyup)=\"service.onUrl($event)\"\n          id=\"attachment-link-value\"\n          type=\"text\"\n          [placeholder]=\"linkPlaceholder\">\n      </div>\n    </div>\n    <div class=\"button-container\">\n      <gl-shared-component-input-button-simple\n        (click)=\"service.onCancel()\"\n        class=\"cancel\"\n        [innerValue]=\"cancelInnerValue\"\n        value=\"cancel\"\n      ></gl-shared-component-input-button-simple>\n      <gl-shared-component-input-button-simple\n        (click)=\"service.onConfirm()\"\n        class=\"ok\"\n        innerValue=\"OK\"\n        value=\"ok\"\n      ></gl-shared-component-input-button-simple>\n    </div>\n    <div class=\"modal-footer\"></div>\n  </div>\n</div>\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep .modal-link-container{-webkit-animation:show-modal .5s ease-in-out;-webkit-animation-fill-mode:forwards;align-items:center;animation:show-modal .5s ease-in-out;animation-fill-mode:forwards;background:rgba(0,0,0,.8);display:flex;height:0;justify-items:center;left:0;min-height:100vh;min-width:100vw;position:fixed;top:0;z-index:99999}@-webkit-keyframes show-modal{0%{opacity:0}to{opacity:1}}:host::ng-deep .modal-link-container>.modal-main-content{opacity:1!important;transition:all .5s ease-in-out;transition-delay:.5s}:host::ng-deep .modal-link-container .modal-main-content{align-items:stretch;background:#020202;display:flex;flex-direction:column;height:-webkit-max-content;height:-moz-max-content;height:max-content;height:1em;justify-content:stretch;margin:0 auto;max-width:36em;min-height:10em;opacity:0;width:30vw;word-wrap:break-word}:host::ng-deep .modal-link-container .modal-main-content .modal-input-container{align-items:stretch;display:flex;flex-direction:column;flex-grow:1;justify-content:center;padding:.5em}:host::ng-deep .modal-link-container .modal-main-content .modal-input-container .name-container,:host::ng-deep .modal-link-container .modal-main-content .modal-input-container .value-container{align-content:center;align-items:stretch;display:flex;justify-content:center;position:relative}:host::ng-deep .modal-link-container .modal-main-content .modal-input-container .name-container label,:host::ng-deep .modal-link-container .modal-main-content .modal-input-container .value-container label{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;color:grey;font-family:Montserrat,sans-serif;font-size:.4em;font-weight:400;left:.8em;padding:.5em;position:absolute;text-transform:none;user-select:none}:host::ng-deep .modal-link-container .modal-main-content .modal-input-container .name-container input,:host::ng-deep .modal-link-container .modal-main-content .modal-input-container .value-container input{background-color:transparent;border:none;border-bottom:1px solid;border-image-slice:.5;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8),rgba(97,61,149,.8));color:#fff;flex-grow:1;font-family:Montserrat,sans-serif;font-size:.5em;font-weight:700;height:2.2em;margin:0;padding:1em;text-align:left}:host::ng-deep .modal-link-container .modal-main-content .modal-input-container .name-container{margin-bottom:.1em}:host::ng-deep .modal-link-container .modal-main-content .button-container{align-items:stretch;display:flex;justify-content:center}:host::ng-deep .modal-link-container .modal-main-content .button-container gl-shared-component-input-button-simple{margin:0 .1em;max-width:33.33333%}:host::ng-deep .modal-link-container .modal-main-content .modal-footer{background-color:#0e0e0f;border-image-slice:.5;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8),rgba(97,61,149,.8));border-top:1px solid;height:.5em;margin:.2em 0 0;width:100%}:host::ng-deep .hide-modal{-webkit-animation:hide-modal .3s ease-in-out;-webkit-animation-fill-mode:forwards;animation:hide-modal .3s ease-in-out;animation-fill-mode:forwards}@-webkit-keyframes hide-modal{0%{opacity:1}to{opacity:0}}@keyframes hide-modal{0%{opacity:1}to{opacity:0}}:host::ng-deep .show-modal{-webkit-animation:show-modal .3s ease-in-out;-webkit-animation-fill-mode:forwards;animation:show-modal .3s ease-in-out;animation-fill-mode:forwards}@keyframes show-modal{0%{opacity:0}to{opacity:1}}"]
            },] }
];
GlSharedComponentModalAttachmentLinkComponent.ctorParameters = () => [
    { type: GlSharedComponentModalAttachmentLinkService }
];
GlSharedComponentModalAttachmentLinkComponent.propDecorators = {
    title: [{ type: Input }],
    subtitle: [{ type: Input }],
    modalLogo: [{ type: Input }],
    fileNameLabel: [{ type: Input }],
    fileNamePlaceholder: [{ type: Input }],
    linkPlaceholder: [{ type: Input }],
    cancelInnerValue: [{ type: Input }]
};

class GlSharedComponentAttachmentItemComponent {
    constructor() {
        this.disabled = false;
        this.onItemClick = new EventEmitter();
        this.removeCurrentItem = new EventEmitter();
        this.editCurrentItem = new EventEmitter();
    }
    removeItem(id) { this.removeCurrentItem.emit({ id }); }
    editItem(id) { this.editCurrentItem.emit({ id }); }
    onButtonClick(e) {
        e.preventDefault();
        this.onItemClick.emit();
    }
}
GlSharedComponentAttachmentItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-attachment-item',
                template: "<div class=\"attachment-container {{ addingSmooth ? 'adding-row-animated' : '' }}\">\n  <img\n    class=\"attachment-icon\"\n    [src]=\"fileIcon\"\n    alt=\"\u00CDcone anexo\">\n  <a\n    (click)=\"onButtonClick($event)\"\n    [id]=\"id\"\n    [href]=\"attachmentUrl\"\n    class=\"file\"\n  >{{ fileName }}</a>\n  <img\n    *ngIf=\"!disabled && type === 'link'\"\n    (click)=\"editItem(id)\"\n    class=\"edit-item\"\n    src=\"../assets/img/icon/menu/attachment/edit.svg\"\n    alt=\"Editar anexo\"/>\n  <img\n    *ngIf=\"!disabled\"\n    (click)=\"removeItem(id)\"\n    class=\"remove-item\"\n    src=\"../assets/img/icon/menu/attachment/delete.svg\"\n    alt=\"Apagar anexo\"/>\n</div>\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep .attachment-container{align-items:center;border-radius:.5em;cursor:pointer;display:flex;margin:.2em 0;padding:.4em .3em}:host::ng-deep .attachment-container:not(hover){background-color:hsla(0,0%,100%,.3);transition:all .2s ease-in-out}:host::ng-deep .attachment-container:not(hover) .file{color:#333437}:host::ng-deep .attachment-container:hover{background:#fff;transition:all .2s ease-in-out}:host::ng-deep .attachment-container:hover .file{color:#fff;color:#333437}:host::ng-deep .attachment-container .attachment-icon{height:2.15em;margin:0 .6em 0 .1em;padding:0;width:2.15em}:host::ng-deep .attachment-container .edit-item,:host::ng-deep .attachment-container .remove-item{height:2.15em;margin:0 0 0 .1em;padding:0;width:2.15em}:host::ng-deep .attachment-container .edit-item:not(hover),:host::ng-deep .attachment-container .remove-item:not(hover){opacity:.5;transition:all .2s ease-in-out}:host::ng-deep .attachment-container .edit-item:hover,:host::ng-deep .attachment-container .remove-item:hover{opacity:1;transition:all .2s ease-in-out}:host::ng-deep .attachment-container .edit-item{margin:0 .2em 0 0}:host::ng-deep .attachment-container .file{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;font-family:Montserrat,sans-serif;font-weight:400;overflow:hidden;padding:1em 0;text-overflow:ellipsis;user-select:none;white-space:nowrap;width:80%}"]
            },] }
];
GlSharedComponentAttachmentItemComponent.ctorParameters = () => [];
GlSharedComponentAttachmentItemComponent.propDecorators = {
    disabled: [{ type: Input }],
    attachmentUrl: [{ type: Input }],
    fileName: [{ type: Input }],
    fileIcon: [{ type: Input }],
    id: [{ type: Input }],
    type: [{ type: Input }],
    addingSmooth: [{ type: Input }],
    onItemClick: [{ type: Output, args: ['onClick',] }],
    removeCurrentItem: [{ type: Output }],
    editCurrentItem: [{ type: Output }]
};

class GlSharedComponentAttachmentImagePreviewService {
    constructor(_alert) {
        this._alert = _alert;
        this.image = '../assets/img/icon/image/image-template.svg';
        this.retrieveUpdate = new Subject();
        this.labelIcons = '../assets/img/icon/label/';
        this.buttons = [
            {
                src: `${this.labelIcons}image.svg`,
                id: 'add-image-from-label',
                alt: 'Add image',
                show: true, callback: () => {
                    this.addImage();
                }
            },
            {
                src: `${this.labelIcons}remove-image.svg`,
                id: 'clear-image-from-label',
                alt: 'Remove image',
                show: false,
                callback: () => {
                    this.removeImage();
                }
            },
        ];
        this.retrieveUpdate.subscribe((data) => {
            if (data.image != null && data.image.trim().length > 0) {
                this.setImage(data);
                this.updateButtons(true);
            }
            else {
                this.setImage({ image: '' });
                this.updateButtons(false);
            }
        });
    }
    initialize(input, userImage, currentValue, invalidSizeDescription, invalidFormatDescription, addImageButtonDescription, removeImageButtonDescription) {
        this._input = input;
        this._accepts = AttachmentParser.parseAcceptFiles(input.attributes.accept.value);
        this._userImage = userImage;
        this._currentValue = currentValue;
        setTimeout(() => {
            this.buttons[0].alt = addImageButtonDescription;
            this.buttons[1].alt = removeImageButtonDescription;
        }, 100);
        this._input.oninput = () => { this.onChange(invalidSizeDescription, invalidFormatDescription); };
        this.removeImage(true);
    }
    onChange(invalidSizeDescription, invalidFormatDescription) {
        const isValid = AttachmentValidate.file(this._input, this._accepts);
        const sizeValid = AttachmentValidate.fileSize(this._input);
        if (!sizeValid) {
            const maxSize = AttachmentValidate.maxSize(this._input);
            const maxSizeStr = StringConverter.formatNumber(maxSize);
            this._alert.show(`${invalidSizeDescription} ${maxSizeStr}KB`).then(() => { });
            return;
        }
        if (isValid) {
            AttachmentConvert.textFileToUrlImage(this._input.files[0]).then((image) => {
                this.setImage({ image });
                this._currentValue.emit({ value: image });
                this.updateButtons(true);
                this.clearInput();
            });
        }
        else {
            this.clearInput();
            this._alert.show(invalidFormatDescription).then(() => { });
        }
    }
    clearInput() {
        this._input.value = null;
    }
    updateButtons(hasValue) {
        this.buttons[0].show = !hasValue;
        this.buttons[1].show = hasValue;
    }
    setImage(data) {
        const img = data.resize ? ImageResize.base64(data) : data.image;
        this._userImage.style.backgroundImage = `url("${img}")`;
        this._userImage.classList.remove('required-fill');
    }
    addImage() {
        this._input.click();
    }
    removeImage(init) {
        this.clearInput();
        this.setImage({ image: this.image });
        if (!init) {
            this._currentValue.emit({ value: null });
            this.updateButtons(false);
        }
    }
}
GlSharedComponentAttachmentImagePreviewService.ɵprov = ɵɵdefineInjectable({ factory: function GlSharedComponentAttachmentImagePreviewService_Factory() { return new GlSharedComponentAttachmentImagePreviewService(ɵɵinject(GlSharedComponentModalAlertService)); }, token: GlSharedComponentAttachmentImagePreviewService, providedIn: "root" });
GlSharedComponentAttachmentImagePreviewService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
GlSharedComponentAttachmentImagePreviewService.ctorParameters = () => [
    { type: GlSharedComponentModalAlertService }
];

class GlSharedComponentAttachmentImagePreviewComponent {
    constructor(service) {
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
    ngAfterViewInit() {
        this.service.initialize(this.fileInputImage.nativeElement, this.userImage.nativeElement, this.currentValue$, this.invalidSizeDescription, this.invalidFormatDescription, this.addImageButtonDescription, this.removeImageButtonDescription);
        this.updateImage();
    }
    updateImage() {
        if (this.currentImage != null && this.currentImage.length > 0) {
            this.service.setImage(this.currentImage);
        }
    }
}
GlSharedComponentAttachmentImagePreviewComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-attachment-image-preview',
                template: "<div class=\"item-container {{ type }}\">\n  <gl-shared-component-title-label-button-container\n    *ngIf=\"showLabel\"\n    labelValue=\"Image\"\n    labelAlignment=\"left\"\n    [class]=\"type\"\n    [requiredFieldDescription]=\"requiredFieldDescription\"\n    [required]=\"required\">\n    <ng-content select=\"top\"></ng-content>\n      <gl-shared-component-button-image-tooltip\n        *ngFor=\"let b of service.buttons\"\n        [src]=\"b.src\"\n        [alt]=\"b.alt\"\n        [id]=\"b.id\"\n        [show]=\"b.show && !disabled || b.id === 'expand-container-2'\"\n        [callback]=\"b.callback\"\n      ></gl-shared-component-button-image-tooltip>\n      <ng-content select=\"[slot=buttons]\"></ng-content>\n    <ng-content select=\"bottom\"></ng-content>\n  </gl-shared-component-title-label-button-container>\n\n  <div class=\"attachment-container-content\">\n    <input\n      #fileInputImage\n      id=\"file-input-image\"\n      name=\"file-input-image\"\n      type=\"file\"\n      class=\"input-image\"\n      accept=\"image/tif, image/tiff, image/x-png, image/jpeg, image/jpg, image/bmp, image/gif, image/svg+xml\"\n      maxlength=\"1\"\n      [attr.data-maxsize]=\"maxImageSize\"\n      [title]=\"addImageDescription\"\n    />\n  </div>\n  <div class=\"image-container\">\n    <div #userImage id=\"image\"></div>\n  </div>\n</div>\n",
                styles: [":host::ng-deep{display:flex;flex-grow:1}:host::ng-deep .item-container{background-color:#333437;display:flex;flex-direction:column;flex-grow:1}:host::ng-deep .item-container gl-shared-component-title-label-button-container{flex-grow:0;position:relative}:host::ng-deep .item-container gl-shared-component-title-label-button-container .label-with-button-container .label-button-container{margin:0 .8em 0 0}:host::ng-deep .item-container gl-shared-component-title-label-button-container .required-fill-dot{right:.2em}:host::ng-deep .item-container.light{background-color:transparent;border-right:.5px solid hsla(0,0%,100%,.1)}:host::ng-deep .item-container.dark{background-color:#161617}:host::ng-deep .item-container.dark label{background-color:#111112}:host::ng-deep .item-container .attachment-container-content .input-image{display:none}:host::ng-deep .item-container .image-container{align-content:center;display:flex;flex-grow:1;justify-content:center}:host::ng-deep .item-container .image-container #image{background-position-x:center;background-position-y:center;background-repeat:no-repeat;background-size:auto 100%;border:0;content:\"\";flex-grow:1;min-height:30vh;min-width:100%}"]
            },] }
];
GlSharedComponentAttachmentImagePreviewComponent.ctorParameters = () => [
    { type: GlSharedComponentAttachmentImagePreviewService }
];
GlSharedComponentAttachmentImagePreviewComponent.propDecorators = {
    fileInputImage: [{ type: ViewChild, args: ['fileInputImage', { read: ElementRef, static: true },] }],
    userImage: [{ type: ViewChild, args: ['userImage', { read: ElementRef, static: true },] }],
    disabled: [{ type: Input }],
    currentImage: [{ type: Input }],
    required: [{ type: Input }],
    type: [{ type: Input }],
    showLabel: [{ type: Input }],
    requiredFieldDescription: [{ type: Input }],
    addImageDescription: [{ type: Input }],
    maxImageSize: [{ type: Input }],
    invalidSizeDescription: [{ type: Input }],
    invalidFormatDescription: [{ type: Input }],
    addImageButtonDescription: [{ type: Input }],
    removeImageButtonDescription: [{ type: Input }],
    currentValue$: [{ type: Output }]
};

class GlSharedComponentPagingComponent {
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
}
GlSharedComponentPagingComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-paging',
                template: "<div class=\"pagination-container {{ type }}\">\n  <div class=\"pagination-buttons-container\">\n    <a id=\"first-page\" class=\"anchor-button\"\n       *ngIf=\"hasPrevious\" (click)=\"onPageChange($event, 'first')\"\n       [title]=\"firstPageTitle\">\n      <img [src]=\"firstIcon\" [alt]=\"firstPageTitle\">\n    </a>\n    <a id=\"prev-page\" class=\"anchor-button\"\n       *ngIf=\"hasPrevious\" (click)=\"onPageChange($event, 'previous')\"\n       [title]=\"previousPageTitle\">\n      <img [src]=\"previousIcon\" [alt]=\"previousPageTitle\">\n    </a>\n    <span id=\"page-info\">{{ pageInfo }}</span>\n    <div class=\"page-buttons-container\">\n      <gl-shared-component-input-button-simple\n        *ngFor=\"let button of pageButtons\"\n        [value]=\"button.page.toString()\"\n        [innerValue]=\"button.page.toString()\"\n        (click)=\"setPage(button.page)\"\n        [class]=\"button.active ? 'active' : ''\"\n        [title]=\"pageDescription + ' ' + button.page.toString()\"\n      ></gl-shared-component-input-button-simple>\n    </div>\n    <a href=\"#\" id=\"next-page\" class=\"anchor-button\"\n       *ngIf=\"hasNext\" (click)=\"onPageChange($event, 'next')\"\n       [title]=\"nextPageTitle\">\n      <img [src]=\"nextIcon\" [alt]=\"nextPageTitle\">\n    </a>\n    <a href=\"#\" id=\"last-page\" class=\"anchor-button\"\n       *ngIf=\"hasNext\" (click)=\"onPageChange($event, 'last')\"\n       [title]=\"lastPageTitle\">\n      <img [src]=\"lastIcon\" [alt]=\"lastPageTitle\">\n    </a>\n  </div>\n\n  <div class=\"number-items-page\" >\n    <span class=\"label-page-items\">{{ itemsPerPageDescriptions }}</span>\n    <gl-shared-component-input-button-simple\n      *ngFor=\"let item of itemsPerPage\"\n        [title]=\"item.title\"\n        [innerValue]=\"item.innerValue\"\n        [value]=\"item.value\"\n        [class]=\"item.class\"\n        (click)=\"setNumberOfItems(item.pageSize)\"\n    ></gl-shared-component-input-button-simple>\n  </div>\n</div>\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep{max-width:100vw}:host::ng-deep .pagination-container{align-items:center;background-color:#1a1b1d;display:flex;font-size:.5em;height:2.5em;justify-content:center;max-width:100vw;position:relative}:host::ng-deep .pagination-container .pagination-buttons-container{align-items:center;display:flex;flex-grow:1;justify-content:center}:host::ng-deep .pagination-container .pagination-buttons-container #page-info{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;color:#fff;display:none;font-size:.8em;margin:auto 1.2em;user-select:none}:host::ng-deep .pagination-container .pagination-buttons-container .page-buttons-container{display:flex;padding:0 1em;width:30%}:host::ng-deep .pagination-container .pagination-buttons-container .page-buttons-container gl-shared-component-input-button-simple{display:flex;height:1.5em;margin:0 .2em;width:1.5em}:host::ng-deep .pagination-container .pagination-buttons-container .page-buttons-container gl-shared-component-input-button-simple .default-button{border-radius:.2em;color:#fff;font-family:Montserrat,sans-serif;font-size:.8em;font-weight:300}:host::ng-deep .pagination-container .pagination-buttons-container .page-buttons-container gl-shared-component-input-button-simple .default-button:not(hover){background-color:hsla(0,0%,100%,.1);transition:all .5s ease-in-out}:host::ng-deep .pagination-container .pagination-buttons-container .page-buttons-container gl-shared-component-input-button-simple .default-button:hover{background-color:hsla(0,0%,100%,.3);transition:all .2s ease-in-out}:host::ng-deep .pagination-container .pagination-buttons-container .page-buttons-container gl-shared-component-input-button-simple .default-button.active{background-color:#fff;color:#64666c;font-family:Montserrat,sans-serif;font-weight:700;transition:all .5s ease-in-out}:host::ng-deep .pagination-container .pagination-buttons-container .anchor-button{height:1.5em;padding:.5em 0;width:1.5em}:host::ng-deep .pagination-container .pagination-buttons-container .anchor-button#first-page{margin:0 .5em 0 0}:host::ng-deep .pagination-container .pagination-buttons-container .anchor-button#last-page{margin:0 0 0 .5em}:host::ng-deep .pagination-container .pagination-buttons-container .anchor-button img{height:1.5em;width:1.5em}:host::ng-deep .pagination-container .pagination-buttons-container .anchor-button:not(hover){opacity:.2;transition:all .2s ease-in-out}:host::ng-deep .pagination-container .pagination-buttons-container .anchor-button:hover{opacity:1;transition:all .2s ease-in-out}:host::ng-deep .pagination-container .number-items-page{align-items:center;display:flex;height:1.5em;position:absolute;right:.4em;top:.5em;width:20em}:host::ng-deep .pagination-container .number-items-page .label-page-items{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;color:#fff;font-family:Montserrat,sans-serif;font-size:.8em;font-weight:300;margin:0 .5em 0 0;opacity:1;padding:.8em 1em .3em;text-transform:uppercase;user-select:none}:host::ng-deep .pagination-container .number-items-page gl-shared-component-input-button-simple{display:flex;flex:1 1 0.2em;height:1.5em;justify-content:center;margin:0 .2em;width:1.5em}:host::ng-deep .pagination-container .number-items-page gl-shared-component-input-button-simple .default-button{border-radius:.2em;flex:1 1 0.2em;font-family:Montserrat,sans-serif;font-size:.6em;font-weight:300;min-height:1.5em;min-width:1.5em}:host::ng-deep .pagination-container .number-items-page gl-shared-component-input-button-simple .default-button:not(hover){background-color:hsla(0,0%,100%,.1);color:#fff;transition:all .5s ease-in-out}:host::ng-deep .pagination-container .number-items-page gl-shared-component-input-button-simple .default-button:hover{background-color:hsla(0,0%,100%,.3);transition:all .2s ease-in-out}:host::ng-deep .pagination-container .number-items-page gl-shared-component-input-button-simple .default-button.active{background-color:#fff;color:#4b4d52;font-family:Montserrat,sans-serif;font-size:.7em;font-weight:900;transition:all .5s ease-in-out}:host::ng-deep .pagination-container.translucid{background-color:rgba(0,0,0,.2)}"]
            },] }
];
GlSharedComponentPagingComponent.ctorParameters = () => [];
GlSharedComponentPagingComponent.propDecorators = {
    pageInfo: [{ type: Input }],
    hasNext: [{ type: Input }],
    hasPrevious: [{ type: Input }],
    type: [{ type: Input }],
    firstPageTitle: [{ type: Input }],
    previousPageTitle: [{ type: Input }],
    nextPageTitle: [{ type: Input }],
    lastPageTitle: [{ type: Input }],
    pageDescription: [{ type: Input }],
    pageSize: [{ type: Input }],
    itemsPerPageDescriptions: [{ type: Input }],
    pageSizeValue1: [{ type: Input }],
    pageSizeValue2: [{ type: Input }],
    pageSizeValue3: [{ type: Input }],
    pageSizeValue4: [{ type: Input }],
    pageSizeValue5: [{ type: Input }],
    pageButtons: [{ type: Input }],
    onPageChange$: [{ type: Output }],
    setNumberOfItems$: [{ type: Output }],
    setPage$: [{ type: Output }]
};

class GlSharedComponentHeaderDefaultComponent {
    constructor() {
        this.systemLogo = false;
        this.keyDown = new EventEmitter();
    }
    onKeyDown(event) {
        this.keyDown.emit(event);
    }
}
GlSharedComponentHeaderDefaultComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-header-default',
                template: "<section class=\"header-container {{ type }}\" [attr.type]=\"type\" (window:keydown)=\"onKeyDown($event)\">\n  <div class=\"header-content {{ type }}\" >\n    <div class=\"default-logo\" *ngIf=\"type != 'only-buttons'\">\n      <ng-content select=\"[slot=default-logo]\"></ng-content>\n    </div>\n    <gl-shared-component-title-page\n      *ngIf=\"type != 'only-buttons' && !systemLogo\"\n      [title]=\"title\"\n      [subtitle]=\"subtitle\"\n    ></gl-shared-component-title-page>\n    <ng-content class=\"system-logo\" select=\"[slot=system-logo]\"></ng-content>\n\n    <div class=\"menu-bar\">\n      <div class=\"menu-buttons-container\">\n        <ng-content></ng-content>\n        <gl-shared-component-button-menu-tooltip\n          *ngFor=\"let menuButton of menuButtons;\"\n          [disabled]=\"(readonly && !menuButton.canReadonly) || (!readonly && menuButton.canReadonly && menuButton.readonly)\"\n          [tooltip]=\"menuButton.alt\"\n          [src]=\"menuButton.src\"\n          [id]=\"menuButton.id\"\n          [alt]=\"menuButton.alt\"\n          [callback]=\"menuButton.callback\">\n        </gl-shared-component-button-menu-tooltip>\n      </div>\n    </div>\n  </div>\n</section>\n",
                styles: [":host::ng-deep{max-width:100vw}:host::ng-deep .header-container{background-color:#1a1b1d;max-width:100vw;position:relative}:host::ng-deep .header-container.inverted,:host::ng-deep .header-container.light{background:linear-gradient(90deg,rgba(0,0,0,.2),rgba(0,0,0,.3))}:host::ng-deep .header-container .header-content{align-items:center;display:flex}:host::ng-deep .header-container .header-content.dark,:host::ng-deep .header-container .header-content.light{border-image-slice:.5;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8),rgba(97,61,149,.8));border-top:.2em solid}:host::ng-deep .header-container .header-content.inverted{border-bottom:.5px solid;border-image-slice:.5;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8),rgba(97,61,149,.8))}:host::ng-deep .header-container .header-content .default-logo{margin:0 .5em 0 0}:host::ng-deep .header-container .header-content .menu-bar{align-items:center;display:flex;flex-grow:1;height:2.3em;justify-content:flex-end}:host::ng-deep .header-container .header-content .menu-bar .menu-buttons-container{align-items:center;display:flex;margin:0 .5em}:host::ng-deep .header-container.only-buttons{background-color:transparent}"]
            },] }
];
GlSharedComponentHeaderDefaultComponent.ctorParameters = () => [];
GlSharedComponentHeaderDefaultComponent.propDecorators = {
    systemLogo: [{ type: Input }],
    labelModel: [{ type: Input }],
    labelId: [{ type: Input }],
    labelArea: [{ type: Input }],
    type: [{ type: Input }],
    title: [{ type: Input }],
    subtitle: [{ type: Input }],
    menuButtons: [{ type: Input }],
    keyDown: [{ type: Output }],
    readonly: [{ type: Input }]
};

class GlSharedComponentInputDatepickerLabelComponent {
    constructor() {
        this.disabled = false;
        this.itemContentAlignment = 'center';
        this.value = null;
        this.dateFormat = 'DD/MM/YYYY';
        this.maxLength = 255;
        this.labelAlignment = 'center';
        this.requiredField = 'Required field';
        this.currentValue = new EventEmitter();
    }
    ngOnInit() { }
    onCurrentValue(event) {
        this.currentValue.emit(event);
    }
}
GlSharedComponentInputDatepickerLabelComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-input-datepicker-label',
                template: "<gl-shared-component-input-datepicker-simple-day-month-year\n  *ngIf=\"dateFormat == 'DD/MM/YYYY'\"\n  [class]=\"class\"\n  [value]=\"value\"\n  (currentValue)=\"onCurrentValue($event)\"\n  [id]=\"id\"\n  [itemContentAlignment]=\"itemContentAlignment\"\n  [placeholder]=\"placeholder\"\n  [disabled]=\"disabled\"\n  [maxLength]=\"maxLength\"\n><gl-shared-component-title-label-simple\n    [id]=\"id\"\n    [labelAlignment]=\"labelAlignment\"\n    [labelValue]=\"labelValue\"\n    [required]=\"required\"\n    [class]=\"class\"\n    [requiredLabel]=\"requiredField\"\n  ></gl-shared-component-title-label-simple>\n</gl-shared-component-input-datepicker-simple-day-month-year>\n\n<gl-shared-component-input-datepicker-simple-month-year\n  *ngIf=\"dateFormat == 'MM/YYYY'\"\n  [class]=\"class\"\n  [value]=\"value\"\n  (currentValue)=\"onCurrentValue($event)\"\n  [id]=\"id\"\n  [itemContentAlignment]=\"itemContentAlignment\"\n  [placeholder]=\"placeholder\"\n  [disabled]=\"disabled\"\n  [maxLength]=\"maxLength\"\n><gl-shared-component-title-label-simple\n  [id]=\"id\"\n  [labelAlignment]=\"labelAlignment\"\n  [labelValue]=\"labelValue\"\n  [required]=\"required\"\n  [class]=\"class\"\n  [requiredLabel]=\"requiredField\"\n></gl-shared-component-title-label-simple>\n</gl-shared-component-input-datepicker-simple-month-year>\n",
                styles: [":host::ng-deep{display:flex}:host::ng-deep gl-shared-component-title-label-simple{flex-grow:0}"]
            },] }
];
GlSharedComponentInputDatepickerLabelComponent.ctorParameters = () => [];
GlSharedComponentInputDatepickerLabelComponent.propDecorators = {
    disabled: [{ type: Input }],
    id: [{ type: Input }],
    placeholder: [{ type: Input }],
    itemContentAlignment: [{ type: Input }],
    class: [{ type: Input }],
    value: [{ type: Input }],
    dateFormat: [{ type: Input }],
    maxLength: [{ type: Input }],
    labelValue: [{ type: Input }],
    labelAlignment: [{ type: Input }],
    required: [{ type: Input }],
    requiredField: [{ type: Input }],
    currentValue: [{ type: Output }]
};

class GlSharedComponentInputTextLabelButtonContainerComponent {
    constructor() {
        this.disabled = false;
        this.autocomplete = false;
        this.value = null;
        this.maxLength = 255;
        this.requiredLabel = 'Required field';
        this.currentValue = new EventEmitter();
    }
    onKeyUp(values) { this.currentValue.emit(values); }
}
GlSharedComponentInputTextLabelButtonContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-input-text-label-button-container',
                template: "<div class=\"item-container\">\n  <gl-shared-component-title-label-button-container\n    [labelValue]=\"labelValue\"\n    [id]=\"id\"\n    [labelAlignment]=\"labelAlignment\"\n    [required]=\"required\"\n    [class]=\"class\"\n    [requiredFieldDescription]=\"requiredLabel\">\n    <div class=\"button-container\">\n      <ng-content></ng-content>\n    </div>\n  </gl-shared-component-title-label-button-container>\n  <gl-shared-component-input-text-simple\n    [class]=\"class\"\n    [value]=\"value\"\n    [id]=\"id\"\n    [itemContentAlignment]=\"itemContentAlignment\"\n    [placeholder]=\"placeholder\"\n    (currentValue)=\"onKeyUp($event)\"\n    [disabled]=\"disabled\"\n    [autocomplete]=\"autocomplete\"\n\n    [mask]=\"mask\"\n    [maskSymbol]=\"maskSymbol\"\n    [maxLength]=\"maxLength\"\n  ></gl-shared-component-input-text-simple>\n</div>\n",
                styles: [":host::ng-deep{display:flex;flex:1 0 auto}:host::ng-deep .item-container{align-items:stretch;display:flex;flex:1 0 auto;flex-direction:column;position:relative}:host::ng-deep .item-container gl-shared-component-title-label-button-container{margin:0}:host::ng-deep .item-container gl-shared-component-title-label-button-container .button-container{align-items:center;display:flex;margin:0 .6em 0 0}"]
            },] }
];
GlSharedComponentInputTextLabelButtonContainerComponent.ctorParameters = () => [];
GlSharedComponentInputTextLabelButtonContainerComponent.propDecorators = {
    disabled: [{ type: Input }],
    autocomplete: [{ type: Input }],
    id: [{ type: Input }],
    labelAlignment: [{ type: Input }],
    labelValue: [{ type: Input }],
    placeholder: [{ type: Input }],
    itemContentAlignment: [{ type: Input }],
    class: [{ type: Input }],
    value: [{ type: Input }],
    mask: [{ type: Input }],
    maskSymbol: [{ type: Input }],
    maxLength: [{ type: Input }],
    required: [{ type: Input }],
    requiredLabel: [{ type: Input }],
    currentValue: [{ type: Output }]
};

const MONTH_YEAR_FORMAT = {
    parse: {
        dateInput: 'MM/YYYY',
    },
    display: {
        dateInput: 'MM/YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
const ɵ0$1 = MONTH_YEAR_FORMAT;
class GlSharedComponentInputDatepickerSimpleMonthYearComponent {
    constructor() {
        this.disabled = false;
        this.itemContentAlignment = 'center';
        this.value = DateGet.currentDate('DD/MM/YYYY');
        this.maxLength = 255;
        this.currentValue = new EventEmitter();
        this.dateFormatString = 'MM/YYYY';
        this.dateFormat = 'DD/MM/YYYY';
        this.startDate = this.value;
        this.date = DateGet.customDateNoUTC('DD/MM/YYYY');
    }
    chosenYearHandler(normalizedYear) {
        const ctrlValue = this.date;
        ctrlValue.setFullYear(normalizedYear.year());
        this.date = ctrlValue;
        const date = DateGet.customDateNoUTC(ctrlValue, this.dateFormat);
        const dateString = DateGet.customDateNoUTCString(normalizedYear, this.dateFormatString, this.dateFormatString);
        this.currentValue.emit({ date, dateString });
    }
    chosenMonthHandler(normalizedMonth, datepicker) {
        const ctrlValue = this.date;
        ctrlValue.setMonth(normalizedMonth.month());
        this.date = ctrlValue;
        datepicker.close();
        const date = DateGet.customDateNoUTC(ctrlValue, this.dateFormat);
        const dateString = DateGet.customDateString(normalizedMonth, this.dateFormatString, this.dateFormatString);
        this.currentValue.emit({ date, dateString });
    }
    clear() {
        this.currentValue.emit({
            date: null,
            dateString: null
        });
    }
    changed(event) {
        this.currentValue.emit({
            date: DateGet.customDateNoUTC(event.value, this.dateFormat),
            dateString: DateGet.customDateString(event.value, this.dateFormatString, this.dateFormatString)
        });
    }
}
GlSharedComponentInputDatepickerSimpleMonthYearComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-input-datepicker-simple-month-year',
                template: "<ng-content></ng-content>\n<mat-form-field appearance=\"none\" floatLabel=\"never\">\n  <!--  <mat-label>Input disabled</mat-label>-->\n  <input\n    class=\"item-content {{ itemContentAlignment }} {{ class }}\"\n    matInput\n    [id]=\"id\"\n    [placeholder]=\"placeholder\"\n    [value]=\"value\"\n    [matDatepicker]=\"dp3\"\n    [attr.maxlength]=\"maxLength\"\n    (dateChange)=\"changed($event)\"\n    disabled>\n  <mat-datepicker-toggle *ngIf=\"!disabled\" matSuffix (click)=\"clear()\">\n    <img\n      matDatepickerToggleIcon\n      class=\"datepicker-button\"\n      alt=\"Date picker icon\"\n      src=\"assets/img/icon/datepicker/clear.svg\">\n  </mat-datepicker-toggle>\n  <mat-datepicker-toggle *ngIf=\"!disabled\" matSuffix [for]=\"dp3\">\n    <img\n      matDatepickerToggleIcon\n      class=\"datepicker-button\"\n      alt=\"Date picker icon\"\n      src=\"assets/img/icon/datepicker/date.svg\">\n  </mat-datepicker-toggle>\n  <mat-datepicker\n    #dp3 disabled=\"false\"\n    startView=\"multi-year\"\n    (yearSelected)=\"chosenYearHandler($event)\"\n    (monthSelected)=\"chosenMonthHandler($event, dp3)\"\n    panelClass=\"month-picker\">\n  ></mat-datepicker>\n</mat-form-field>\n",
                providers: [
                    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
                    {
                        provide: DateAdapter,
                        useClass: MomentDateAdapter,
                        deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                    },
                    { provide: MAT_DATE_FORMATS, useValue: ɵ0$1 }
                ],
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep{background-color:#333437;display:flex;flex-direction:column;flex-grow:1;position:relative}:host::ng-deep .month-picker .mat-calendar-period-button{pointer-events:none}:host::ng-deep .month-picker .mat-calendar-arrow{display:none}:host::ng-deep mat-form-field{display:flex;flex-grow:1;line-height:1}:host::ng-deep mat-form-field .mat-form-field-wrapper{display:flex;flex-grow:1;padding:0}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex{align-items:center;border-radius:0;height:1.275em;padding:.2em .3em .2em .45em}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix{border:none;display:flex;padding:0;width:auto}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-suffix{display:flex;flex-direction:row}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-suffix .mat-datepicker-toggle{margin:0 0 0 .1em}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-suffix .mat-datepicker-toggle .mat-focus-indicator{height:.8em;width:.8em}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-suffix .mat-datepicker-toggle .mat-focus-indicator .mat-button-wrapper{align-items:center;display:flex;height:.8em;width:.8em}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-suffix .mat-datepicker-toggle .mat-focus-indicator .mat-button-wrapper .datepicker-button,:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-suffix .mat-datepicker-toggle .mat-focus-indicator .mat-button-wrapper svg{height:.8em;width:.8em}:host::ng-deep mat-form-field .item-content{border:none;color:#fff;flex-grow:1;font-family:Montserrat,sans-serif;font-size:.45em;font-weight:400}:host::ng-deep mat-form-field .item-content:focus{outline:none!important}:host::ng-deep mat-form-field .item-content::-moz-placeholder{color:#64666c!important}:host::ng-deep mat-form-field .item-content::-ms-input-placeholder{color:#64666c!important}:host::ng-deep mat-form-field .item-content::placeholder{color:#64666c!important}:host::ng-deep mat-form-field .item-content.left{text-align:left}:host::ng-deep mat-form-field .item-content.center{text-align:center}:host::ng-deep mat-form-field .item-content.right{text-align:right}:host::ng-deep mat-form-field .item-content.light{background-color:rgba(0,0,0,.1)}:host::ng-deep mat-form-field .item-content.light::-moz-placeholder{color:hsla(0,0%,100%,.2)!important}:host::ng-deep mat-form-field .item-content.light:-ms-input-placeholder{color:hsla(0,0%,100%,.2)!important}:host::ng-deep mat-form-field .item-content.light::-ms-input-placeholder{color:hsla(0,0%,100%,.2)!important}:host::ng-deep mat-form-field .item-content.light::placeholder{color:hsla(0,0%,100%,.2)!important}:host::ng-deep mat-form-field .item-content.dark{background-color:#161617}:host::ng-deep mat-form-field .item-content:-ms-input-placeholder{color:#64666c!important}:host::ng-deep mat-form-field .item-content.light:-ms-input-placeholder{color:grey!important}"]
            },] }
];
GlSharedComponentInputDatepickerSimpleMonthYearComponent.ctorParameters = () => [];
GlSharedComponentInputDatepickerSimpleMonthYearComponent.propDecorators = {
    disabled: [{ type: Input }],
    id: [{ type: Input }],
    placeholder: [{ type: Input }],
    itemContentAlignment: [{ type: Input }],
    class: [{ type: Input }],
    value: [{ type: Input }],
    maxLength: [{ type: Input }],
    currentValue: [{ type: Output }]
};

class GlComponentModule {
}
GlComponentModule.decorators = [
    { type: NgModule, args: [{
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
                    GlSharedComponentInputTextLabelButtonContainerComponent,
                    GlSharedComponentInputTextLabelSimpleComponent,
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
                    GlSharedComponentInputDatepickerSimpleDayMonthYearComponent,
                    GlSharedComponentInputDatepickerSimpleMonthYearComponent,
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
                    GlSharedComponentInputTextLabelButtonContainerComponent,
                    GlSharedComponentInputTextLabelSimpleComponent,
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
                    GlSharedComponentInputDatepickerSimpleDayMonthYearComponent,
                    GlSharedComponentInputDatepickerSimpleMonthYearComponent,
                    GlSharedComponentInputDatepickerLabelComponent
                ]
            },] }
];

class GlSharedModule {
}
GlSharedModule.decorators = [
    { type: NgModule, args: [{
                declarations: [],
                imports: [
                    CommonModule,
                    GlComponentModule
                ]
            },] }
];

class GlNgFrontendModule {
    constructor() { }
}
GlNgFrontendModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];
GlNgFrontendModule.ctorParameters = () => [];

class GlSharedViewErrorMessageComponent {
    constructor() {
        this.logoHorizontalPosition = 'left';
        this.logoVerticalPosition = 'top';
        this.errorPosition = 'left';
        this.errorButtonAction$ = new EventEmitter();
        this.footerImageDescription = 'Image logo';
    }
    ngAfterViewInit() {
        const mainContainer = this.mainContainer.nativeElement;
        const mainContainerParent = this.mainContainer.nativeElement.parentNode;
        mainContainer.style.backgroundImage = `url(${this.background})`;
        mainContainerParent.style.backgroundImage = `url(${this.blurBackground})`;
    }
    errorButtonAction() {
        this.errorButtonAction$.emit();
    }
}
GlSharedViewErrorMessageComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-view-error-message',
                template: "<div #mainContainer class=\"main-container\">\n  <gl-shared-component-logo-square\n    [horizontalPosition]=\"logoHorizontalPosition\"\n    [verticalPosition]=\"logoVerticalPosition\"\n    [imageAlt]=\"logoImageAlt\"\n    [imageScr]=\"logoImageScr\"\n  ></gl-shared-component-logo-square>\n  <gl-shared-component-error-message\n    [position]=\"errorPosition\"\n    [errorCode]=\"errorCode\"\n    [errorMessage]=\"errorMessage\"\n    [buttonLabel]=\"errorButtonLabel\"\n    (buttonAction$)=\"errorButtonAction()\"\n  ></gl-shared-component-error-message>\n  <gl-shared-component-footer-container [description]=\"footerMainDescription\">\n    <gl-shared-component-input-button-hyperlink\n      *ngIf=\"footerShowContainer\"\n      [description]=\"footerDescription\"\n      [imageDescription]=\"footerImageDescription\"\n      [imageSrc]=\"footerImageSrc\"\n      [link]=\"footerLink\"\n    ></gl-shared-component-input-button-hyperlink>\n  </gl-shared-component-footer-container>\n</div>\n",
                styles: [":host::ng-deep{background-color:#1a1b1d;display:flex;flex-grow:1}:host::ng-deep .main-container{-webkit-animation-duration:3s;-webkit-animation-fill-mode:forwards;-webkit-animation-name:start;-webkit-animation-play-state:running;animation-duration:3s;animation-fill-mode:forwards;animation-name:start;animation-play-state:running;background-position:top;background-repeat:no-repeat;background-size:101%;display:flex;flex-direction:column;flex-grow:1;height:100vh;justify-items:stretch;overflow:hidden;width:100vw}@-webkit-keyframes start{0%{opacity:0}to{opacity:1}}@keyframes start{0%{opacity:0}to{opacity:1}}"]
            },] }
];
GlSharedViewErrorMessageComponent.ctorParameters = () => [];
GlSharedViewErrorMessageComponent.propDecorators = {
    mainContainer: [{ type: ViewChild, args: ['mainContainer',] }],
    blurBackground: [{ type: Input }],
    background: [{ type: Input }],
    logoImageScr: [{ type: Input }],
    logoImageAlt: [{ type: Input }],
    logoHorizontalPosition: [{ type: Input }],
    logoVerticalPosition: [{ type: Input }],
    errorPosition: [{ type: Input }],
    errorCode: [{ type: Input }],
    errorMessage: [{ type: Input }],
    errorButtonLabel: [{ type: Input }],
    errorButtonAction$: [{ type: Output }],
    footerMainDescription: [{ type: Input }],
    footerShowContainer: [{ type: Input }],
    footerDescription: [{ type: Input }],
    footerImageDescription: [{ type: Input }],
    footerImageSrc: [{ type: Input }],
    footerLink: [{ type: Input }]
};

class GlSharedViewModule {
}
GlSharedViewModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];

/*
 * Public API Surface of gl-ng-frontend
 */
// endregion
// endregion

/**
 * Generated bundle index. Do not edit.
 */

export { CoreDirectivesAutofocusDirective, GlComponentModule, GlCoreModule, GlNgFrontendModule, GlSharedComponentAttachmentImagePreviewComponent, GlSharedComponentAttachmentImagePreviewService, GlSharedComponentAttachmentItemComponent, GlSharedComponentButtonAttachmentFileComponent, GlSharedComponentButtonAttachmentFileService, GlSharedComponentButtonAttachmentLinkComponent, GlSharedComponentButtonImageSimpleComponent, GlSharedComponentButtonImageTooltipComponent, GlSharedComponentButtonMenuSimpleComponent, GlSharedComponentButtonMenuTooltipComponent, GlSharedComponentErrorMessageComponent, GlSharedComponentFilterComponent, GlSharedComponentFilterContainerComponent, GlSharedComponentFilterService, GlSharedComponentFooterContainerComponent, GlSharedComponentFooterSimpleComponent, GlSharedComponentHeaderDefaultComponent, GlSharedComponentInputAutocompleteLabelComponent, GlSharedComponentInputAutocompleteSimpleComponent, GlSharedComponentInputAutocompleteSimpleService, GlSharedComponentInputButtonHyperlinkComponent, GlSharedComponentInputButtonSimpleComponent, GlSharedComponentInputDatepickerLabelComponent, GlSharedComponentInputDatepickerSimpleDayMonthYearComponent, GlSharedComponentInputDatepickerSimpleMonthYearComponent, GlSharedComponentInputOptionSimpleComponent, GlSharedComponentInputTextAreaLabelComponent, GlSharedComponentInputTextAreaSimpleComponent, GlSharedComponentInputTextLabelButtonContainerComponent, GlSharedComponentInputTextLabelSimpleComponent, GlSharedComponentInputTextSimpleComponent, GlSharedComponentLogoSquareComponent, GlSharedComponentMenuBackgroundComponent, GlSharedComponentMenuComponent, GlSharedComponentMenuItemComponent, GlSharedComponentMenuService, GlSharedComponentModalAlertComponent, GlSharedComponentModalAlertService, GlSharedComponentModalAttachmentLinkComponent, GlSharedComponentModalAttachmentLinkService, GlSharedComponentModalHeaderComponent, GlSharedComponentModalLoadingComponent, GlSharedComponentModalLoadingService, GlSharedComponentPagingComponent, GlSharedComponentTitleLabelButtonContainerComponent, GlSharedComponentTitleLabelButtonSimpleComponent, GlSharedComponentTitleLabelSimpleComponent, GlSharedComponentTitlePageComponent, GlSharedModule, GlSharedViewErrorMessageComponent, GlSharedViewModule, ɵ0 };
//# sourceMappingURL=gl-ng-frontend.js.map
