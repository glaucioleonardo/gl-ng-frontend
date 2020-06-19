import { __awaiter, __decorate, __generator } from "tslib";
import { Overlay } from '@angular/cdk/overlay';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { GlSharedComponentInputAutocompleteSimpleService } from './gl-shared-component-input-autocomplete-simple.service';
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
            template: "<ng-content></ng-content>\n<mat-form-field\n  (focusout)=\"overlay.position().global().dispose()\"\n  class=\"input-container custom-combobox {{ class }} {{ disabled ? 'read-only' : '' }}\"\n  floatLabel=\"never\"\n  appearance=\"none\">\n  <div class=\"combobox-container {{ listItems.length > 0 ? '' : 'no-data' }} {{ disabled ? 'read-only' : '' }}\">\n    <input\n      #input\n      type=\"text\"\n      aria-label=\"Number\"\n      class=\"item-content {{ itemContentAlignment }} {{ class }} {{ listItems.length > 0 ? '' : 'no-data' }} {{ disabled ? 'read-only' : '' }}\"\n      matInput\n      [readonly]=\"disabled\"\n      [id]=\"id\"\n      [placeholder]=\"placeholder\"\n      [formControl]=\"autocompleteInput\"\n      [maxLength]=\"maxLength\"\n      [matAutocomplete]=\"auto\"\n      (focusin)=\"reset(auto, $event)\"\n      (focusout)=\"validate()\">\n    <img\n      #arrowDown\n      (click)=\"this.autocompleteInput.reset()\"\n      alt=\"Show items\"\n      class=\"arrow-down {{ class }} {{ disabled ? 'read-only' : '' }}\"\n      [src]=\"imageSource\">\n  </div>\n  <mat-autocomplete autoActiveFirstOption=\"true\" #auto=\"matAutocomplete\" (optionSelected)=\"input.blur()\" [mat-dialog-close]=\"overlay.position().global().dispose()\">\n    <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option.text\">\n      {{option.text}}\n    </mat-option>\n  </mat-autocomplete>\n</mat-form-field>\n\n",
            styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);::ng-deep .dark .mat-autocomplete-panel,::ng-deep .light .mat-autocomplete-panel,::ng-deep .mat-autocomplete-panel{scrollbar-face-color:#333437!important;scrollbar-shadow-color:#38393c!important;scrollbar-track-color:#2c2c2f!important;scrollbar-arrow-color:#64666c!important}::ng-deep .mat-autocomplete-panel::-webkit-scrollbar:horizontal{height:.5em}::ng-deep .dark .mat-autocomplete-panel::-webkit-scrollbar,::ng-deep .light .mat-autocomplete-panel::-webkit-scrollbar,::ng-deep .mat-autocomplete-panel::-webkit-scrollbar{width:.5em}::ng-deep .dark .mat-autocomplete-panel::-webkit-scrollbar-button,::ng-deep .light .mat-autocomplete-panel::-webkit-scrollbar-button,::ng-deep .mat-autocomplete-panel::-webkit-scrollbar-button{background-color:#333437;display:none!important}::ng-deep .dark .mat-autocomplete-panel::-webkit-scrollbar-track-piece,::ng-deep .light .mat-autocomplete-panel::-webkit-scrollbar-track-piece,::ng-deep .mat-autocomplete-panel::-webkit-scrollbar-track-piece{background-color:#2c2c2f}::ng-deep .dark .mat-autocomplete-panel::-webkit-scrollbar-thumb,::ng-deep .light .mat-autocomplete-panel::-webkit-scrollbar-thumb,::ng-deep .mat-autocomplete-panel::-webkit-scrollbar-thumb{background-color:#64666c;border:1px solid #38393c}:host::ng-deep{display:flex;flex-direction:column;flex:1 0 auto;position:relative}:host::ng-deep mat-form-field{display:flex;flex-grow:1;margin:0}:host::ng-deep mat-form-field .mat-form-field-wrapper{display:flex;flex-grow:1;flex-direction:column;padding:0}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex{display:flex;flex-grow:1;align-items:inherit}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix{padding:0;flex:1 1 0px;border:none;width:100%;display:flex}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container{display:flex;flex-grow:1;flex-direction:row;pointer-events:none}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element{font-family:Montserrat,sans-serif;font-weight:400;padding:.8em;border:none;background-color:#333437;color:#fff;font-size:.45em;flex-grow:1;margin:0}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element::-moz-placeholder{color:#64666c!important}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element:-ms-input-placeholder{color:#64666c!important}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element::-ms-input-placeholder{color:#64666c!important}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element::placeholder{color:#64666c!important}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.left{text-align:left}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.center{text-align:center}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.right{text-align:right}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.light{background-color:rgba(0,0,0,.1)}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.light::-moz-placeholder{color:rgba(255,255,255,.2)!important}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.light:-ms-input-placeholder{color:rgba(255,255,255,.2)!important}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.light::-ms-input-placeholder{color:rgba(255,255,255,.2)!important}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.light::placeholder{color:rgba(255,255,255,.2)!important}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element.dark{background-color:#161617}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element .item-content:-ms-input-placeholder{color:#64666c!important}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .mat-input-element .item-content.light:-ms-input-placeholder{color:gray!important}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .arrow-down{background-color:#333437;width:.6em;padding:0 .5em;transition:.2s ease-in-out}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .arrow-down:hover{background-color:#2c2c2f;transition:.2s ease-in-out}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .arrow-down.light{background-color:rgba(0,0,0,.1);transition:.2s ease-in-out}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .arrow-down.light::-moz-placeholder{color:rgba(255,255,255,.2)!important}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .arrow-down.light:-ms-input-placeholder{color:rgba(255,255,255,.2)!important}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .arrow-down.light::-ms-input-placeholder{color:rgba(255,255,255,.2)!important}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .arrow-down.light::placeholder{color:rgba(255,255,255,.2)!important}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .arrow-down.light:hover{background-color:rgba(0,0,0,.2);transition:.2s ease-in-out}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .arrow-down.dark{background-color:#161617;transition:.2s ease-in-out}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .arrow-down.dark:hover{background-color:#1a1b1d;transition:.2s ease-in-out}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container .arrow-down.read-only{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container.no-data .arrow-down,:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix .combobox-container.read-only .arrow-down{display:none}@media screen and (-ms-high-contrast:none),(-ms-high-contrast:active){:host::ng-deep .mat-form-field-label-wrapper{max-width:88.5%;top:0;padding-top:0}:host::ng-deep .combobox-container .mat-input-element{max-width:77%}:host::ng-deep .combobox-container .mat-input-element:-ms-input-placeholder{color:#64666c!important}:host::ng-deep .combobox-container .mat-input-element::-moz-placeholder{color:#64666c!important}:host::ng-deep .combobox-container .mat-input-element::-ms-input-placeholder{color:#64666c!important}:host::ng-deep .combobox-container .mat-input-element::placeholder{color:#64666c!important}:host::ng-deep .combobox-container .arrow-down{height:100%}:host::ng-deep .combobox-container.read-only .mat-input-element{max-width:100%!important}:host::ng-deep .combobox-container.no-data .mat-input-element{max-width:100%!important}:host::ng-deep .read-only .mat-form-field-label-wrapper{max-width:100%}:host::ng-deep .read-only .combobox-container .item-content{width:93%}}::ng-deep .mat-autocomplete-panel{background-color:#38393c;border-radius:0;box-shadow:none!important;transition:.2s ease-in-out}::ng-deep .mat-autocomplete-panel mat-option{font-size:1em;border-radius:0;transition:.2s ease-in-out;line-height:4em;height:4em;padding:0 1.5em}::ng-deep .mat-autocomplete-panel mat-option:nth-child(2n+1){background-color:#333437;transition:.2s ease-in-out}::ng-deep .mat-autocomplete-panel mat-option.mat-active,::ng-deep .mat-autocomplete-panel mat-option.mat-selected{background-color:#d24077;transition:.2s ease-in-out}::ng-deep .mat-autocomplete-panel mat-option:hover{background-color:#b01e45!important;transition:.2s ease-in-out}::ng-deep .light .mat-autocomplete-panel{background-color:transparent;transition:.2s ease-in-out}::ng-deep .light .mat-autocomplete-panel mat-option:nth-child(2n+1){background-color:rgba(0,0,0,.6);transition:.2s ease-in-out}::ng-deep .light .mat-autocomplete-panel mat-option:nth-child(2n+2){background-color:rgba(0,0,0,.7);transition:.2s ease-in-out}::ng-deep .light .mat-autocomplete-panel mat-option.mat-active{background-color:#d24077;transition:.2s ease-in-out}::ng-deep .light .mat-autocomplete-panel mat-option:hover{background-color:#b01e45!important;transition:.2s ease-in-out}::ng-deep .dark .mat-autocomplete-panel{background-color:transparent;transition:.2s ease-in-out}::ng-deep .dark .mat-autocomplete-panel mat-option:nth-child(2n+1){background-color:#2c2c2f;transition:.2s ease-in-out}::ng-deep .dark .mat-autocomplete-panel mat-option:nth-child(2n+2){background-color:#333437;transition:.2s ease-in-out}::ng-deep .dark .mat-autocomplete-panel mat-option.mat-active{background-color:#d24077;transition:.2s ease-in-out}::ng-deep .dark .mat-autocomplete-panel mat-option:hover{background-color:#b01e45!important;transition:.2s ease-in-out}@media screen and (min-device-width:320px) and (max-device-width:1024px){::ng-deep .mat-autocomplete-panel{font-size:2.8vw!important}}@media screen and (min-device-width:1024px){::ng-deep .mat-autocomplete-panel{font-size:.6vw!important}}"]
        })
    ], GlSharedComponentInputAutocompleteSimpleComponent);
    return GlSharedComponentInputAutocompleteSimpleComponent;
}());
export { GlSharedComponentInputAutocompleteSimpleComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1hdXRvY29tcGxldGUtc2ltcGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dsLW5nLWZyb250ZW5kLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9jb21wb25lbnQvaW5wdXQvYXV0b2NvbXBsZXRlL3NpbXBsZS9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LWF1dG9jb21wbGV0ZS1zaW1wbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFnQyxNQUFNLEVBQWlCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzSSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsK0NBQStDLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQVMxSDtJQStCRSwyREFBb0IsUUFBeUQsRUFBUyxPQUFnQjtRQUF0RyxpQkFvQ0M7UUFwQ21CLGFBQVEsR0FBUixRQUFRLENBQWlEO1FBQVMsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQTVCNUYsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBaUIsQ0FBQztRQUNsRCxjQUFTLEdBQW9CLEVBQUUsQ0FBQztRQU9oQyxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBRW5CLGNBQVMsR0FBVyxLQUFLLENBQUM7UUFhM0IsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUN4QixnQkFBVyxHQUFHLDZDQUE2QyxDQUFBO1FBQ3BFLHNCQUFpQixHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7UUFJcEMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDekMsSUFBSSxL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ekQsdTZDQUE2RTs7U0FFOUUsQ0FBQztPQUNXLGlEQUFpRCxDQW9JN0Q7SUFBRCx3REFBQztDQUFBLEFBcElELElBb0lDO1NBcElZLGlEQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE92ZXJsYXkgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcywgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc3RhcnRXaXRoIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgR2xTaGFyZWRDb21wb25lbnRJbnB1dEF1dG9jb21wbGV0ZVNpbXBsZVNlcnZpY2UgfSBmcm9tICcuL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtYXV0b2NvbXBsZXRlLXNpbXBsZS5zZXJ2aWNlJztcbmltcG9ydCB7IE1hdEF1dG9jb21wbGV0ZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2F1dG9jb21wbGV0ZSc7XG5pbXBvcnQgeyBJQ29tYm9Cb3hEYXRhIH0gZnJvbSAnZ2wtdy1mcm9udGVuZC9saWIvZXM1L3NjcmlwdHMvY29yZS9zZXJ2aWNlcy9jb21ib2JveC9jb3JlLXNlcnZpY2VzLWNvbWJvYm94LmludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtYXV0b2NvbXBsZXRlLXNpbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LWF1dG9jb21wbGV0ZS1zaW1wbGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LWF1dG9jb21wbGV0ZS1zaW1wbGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudElucHV0QXV0b2NvbXBsZXRlU2ltcGxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gIEBWaWV3Q2hpbGQoJ2lucHV0JykgaW5wdXQ6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XG5cbiAgQE91dHB1dCgpIGN1cnJlbnRWYWx1ZSA9IG5ldyBFdmVudEVtaXR0ZXI8SUNvbWJvQm94RGF0YT4oKTtcbiAgQElucHV0KCkgbGlzdEl0ZW1zOiBJQ29tYm9Cb3hEYXRhW10gPSBbXTtcblxuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgbGlzdE5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgaXRlbUNvbnRlbnRBbGlnbm1lbnQ6ICdsZWZ0JyB8ICdjZW50ZXInIHwgJ3JpZ2h0JyB8ICcnO1xuICBASW5wdXQoKSBjbGFzczogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1heExlbmd0aDogc3RyaW5nID0gJzI1NSc7XG5cbiAgQElucHV0KCkgY3VzdG9tOiBib29sZWFuO1xuICBASW5wdXQoKSBiYXNlVXJsOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgdmFsdWVGaWVsZDogc3RyaW5nO1xuICBASW5wdXQoKSB0ZXh0RmllbGQ6IHN0cmluZztcblxuICBASW5wdXQoKSBsYWJlbFZhbHVlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxhYmVsQWxpZ25tZW50OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJlcXVpcmVkOiBib29sZWFuO1xuICBASW5wdXQoKSByZXF1aXJlZEZpZWxkOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfbG9hZGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHJlYWRvbmx5IGltYWdlU291cmNlID0gJy4uL2Fzc2V0cy9pbWcvaWNvbi9kcm9wLWRvd24vYXJyb3ctZG93bi5zdmcnXG4gIGF1dG9jb21wbGV0ZUlucHV0ID0gbmV3IEZvcm1Db250cm9sKCk7XG4gIGZpbHRlcmVkT3B0aW9uczogT2JzZXJ2YWJsZTxJQ29tYm9Cb3hEYXRhW10+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NlcnZpY2U6IEdsU2hhcmVkQ29tcG9uZW50SW5wdXRBdXRvY29tcGxldGVTaW1wbGVTZXJ2aWNlLCBwdWJsaWMgb3ZlcmxheTogT3ZlcmxheSkge1xuICAgIF9zZXJ2aWNlLmF1dG9jb21wbGV0ZUxpc3QkLnN1YnNjcmliZSh1cGRhdGUgPT4ge1xuICAgICAgaWYgKHRoaXMubGlzdE5hbWUgPT09IHVwZGF0ZS5saXN0TmFtZSkge1xuICAgICAgICB0aGlzLmxpc3RJdGVtcyA9IHVwZGF0ZS5vcHRpb25zO1xuICAgICAgICB0aGlzLnNldHVwKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgX3NlcnZpY2UuYXV0b2NvbXBsZXRlUmVzZXQkLnN1YnNjcmliZSh1cGRhdGUgPT4ge1xuICAgICAgaWYgKHRoaXMuaWQgPT09IHVwZGF0ZS5jb21ib2JveElkKSB7XG4gICAgICAgIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuICAgICAgICB0aGlzLnZhbGlkYXRlKCk7XG4gICAgICB9XG4gICAgfSlcbiAgICBfc2VydmljZS5hdXRvY29tcGxldGVMb2FkZWQkLnN1YnNjcmliZShsb2FkZWQgPT4ge1xuICAgICAgdGhpcy5fbG9hZGVkID0gbG9hZGVkO1xuICAgICAgX3NlcnZpY2UuYXV0b2NvbXBsZXRlTG9hZGVkJC5vYnNlcnZlcnMubWFwKHggPT4geC5jb21wbGV0ZSgpKTtcbiAgICB9KTtcbiAgICBfc2VydmljZS5hdXRvY29tcGxldGVVcGRhdGVWYWx1ZSQuc3Vic2NyaWJlKHVwZGF0ZSA9PiB7XG4gICAgICBpZiAodGhpcy5pZCA9PT0gdXBkYXRlLmNvbWJvYm94SWQpIHtcbiAgICAgICAgdGhpcy5saXN0SXRlbXMgPSB1cGRhdGUub3B0aW9ucztcbiAgICAgICAgY29uc3QgdmFsdWUgPSB1cGRhdGUub3B0aW9ucy5maWx0ZXIoeCA9PiB4LnZhbHVlID09PSB1cGRhdGUudmFsdWUpO1xuICAgICAgICBjb25zdCBpbnB1dCA9IHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudDtcblxuICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiB2YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaW5wdXQudmFsdWUgPSB2YWx1ZVswXS50ZXh0O1xuICAgICAgICAgIHRoaXMuYXV0b2NvbXBsZXRlSW5wdXQuc2V0VmFsdWUodmFsdWVbMF0udGV4dCk7XG4gICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlWzBdLnZhbHVlO1xuICAgICAgICAgIHRoaXMuc2V0dXAoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgIHRoaXMuYXV0b2NvbXBsZXRlSW5wdXQuc2V0VmFsdWUoJycpO1xuICAgICAgICAgIHRoaXMudmFsdWUgPSAnJztcbiAgICAgICAgICB0aGlzLnNldHVwKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2V0dXAoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0dXAoKSB7XG4gICAgdGhpcy5maWx0ZXJlZE9wdGlvbnMgPSB0aGlzLmF1dG9jb21wbGV0ZUlucHV0LnZhbHVlQ2hhbmdlcy5waXBlKFxuICAgICAgc3RhcnRXaXRoKCcnKSxcbiAgICAgIC8vIHN0YXJ0V2l0aCh0aGlzLnZhbHVlKSxcbiAgICAgIG1hcCh2YWx1ZSA9PiB0aGlzLmZpbHRlcih2YWx1ZSkpXG4gICAgKTtcblxuICAgIC8vIGlmICghdGhpcy5fbG9hZGVkKSB7IHRoaXMuYXV0b2NvbXBsZXRlSW5wdXQuc2V0VmFsdWUodGhpcy52YWx1ZSk7IH1cbiAgICAvLyB0aGlzLmF1dG9jb21wbGV0ZUlucHV0LnNldFZhbHVlKHRoaXMudmFsdWUpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLnZhbGlkYXRlKCk7IH0pO1xuICB9XG4gIHByaXZhdGUgZmlsdGVyKHZhbHVlOiBzdHJpbmcpOiBJQ29tYm9Cb3hEYXRhW10ge1xuICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7IHZhbHVlID0gJyc7IH1cblxuICAgIGNvbnN0IGZpbHRlclZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gdGhpcy5saXN0SXRlbXMuZmlsdGVyKG9wdGlvbiA9PiBvcHRpb24udGV4dD8udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhmaWx0ZXJWYWx1ZSkpO1xuICB9XG5cbiAgdmFsaWRhdGUoKSB7XG4gICAgY29uc3QgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgdmFsdWU6IHN0cmluZyA9IGlucHV0LnZhbHVlXG4gICAgY29uc3QgZmlsdGVyZWREYXRhID0gdGhpcy5maWx0ZXIodmFsdWUpO1xuXG4gICAgaWYgKHZhbHVlICE9IG51bGwgJiYgdmFsdWUudHJpbSgpLmxlbmd0aCA+IDAgJiYgZmlsdGVyZWREYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgIGlucHV0LnZhbHVlID0gZmlsdGVyZWREYXRhWzBdLnRleHQ7XG4gICAgICB0aGlzLmF1dG9jb21wbGV0ZUlucHV0LnNldFZhbHVlKGZpbHRlcmVkRGF0YVswXS50ZXh0KTtcbiAgICAgIHRoaXMuY3VycmVudFZhbHVlLmVtaXQoeyB0ZXh0OiBmaWx0ZXJlZERhdGFbMF0udGV4dCwgdmFsdWU6IGZpbHRlcmVkRGF0YVswXS52YWx1ZSB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgIHRoaXMuYXV0b2NvbXBsZXRlSW5wdXQuc2V0VmFsdWUoJycpO1xuICAgICAgdGhpcy5jdXJyZW50VmFsdWUuZW1pdCh7IHRleHQ6IG51bGwsIHZhbHVlOiBudWxsIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0KGF1dG86IE1hdEF1dG9jb21wbGV0ZSwgZXZlbnQ6IEV2ZW50KSB7XG4gICAgaWYgKGF1dG8ub3B0aW9ucyAhPSBudWxsKSB7IGF1dG8ub3B0aW9ucy5tYXAob3B0aW9uID0+IG9wdGlvbi5kZXNlbGVjdCgpKTsgfVxuICAgICg8SFRNTElucHV0RWxlbWVudD5ldmVudC5jdXJyZW50VGFyZ2V0KS5zZWxlY3QoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3NlcnZpY2UuYXV0b2NvbXBsZXRlTGlzdCQub2JzZXJ2ZXJzLm1hcCh4ID0+IHguY29tcGxldGUoKSk7XG4gICAgdGhpcy5fc2VydmljZS5hdXRvY29tcGxldGVSZXNldCQub2JzZXJ2ZXJzLm1hcCh4ID0+IHguY29tcGxldGUoKSk7XG4gICAgdGhpcy5fc2VydmljZS5hdXRvY29tcGxldGVMb2FkZWQkLm9ic2VydmVycy5tYXAoeCA9PiB4LmNvbXBsZXRlKCkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHByZXZMaXN0ID0gY2hhbmdlcy5saXN0SXRlbXM/LnByZXZpb3VzVmFsdWU7XG4gICAgY29uc3QgY3Vyckxpc3QgPSBjaGFuZ2VzLmxpc3RJdGVtcz8uY3VycmVudFZhbHVlO1xuXG4gICAgY29uc3QgcHJldlZhbHVlID0gY2hhbmdlcy52YWx1ZT8ucHJldmlvdXNWYWx1ZTtcbiAgICBjb25zdCBjdXJyVmFsdWUgPSBjaGFuZ2VzLnZhbHVlPy5jdXJyZW50VmFsdWU7XG5cbiAgICBpZiAocHJldkxpc3QgIT0gY3Vyckxpc3QpIHsgdGhpcy5zZXR1cCgpOyB9XG4gICAgaWYgKHByZXZWYWx1ZSAhPSBjdXJyVmFsdWUpIHsgdGhpcy5zZXR1cCgpOyB9XG5cbiAgICB0aGlzLm92ZXJsYXkucG9zaXRpb24oKS5nbG9iYWwoKS5kaXNwb3NlKClcblxuICAgIC8vIGlmIChwcmV2TGlzdCAhPSBjdXJyTGlzdCB8fCBwcmV2VmFsdWUgIT0gY3VyclZhbHVlKSB7IHRoaXMuc2V0dXAoKTsgfVxuICB9XG59XG4iXX0=