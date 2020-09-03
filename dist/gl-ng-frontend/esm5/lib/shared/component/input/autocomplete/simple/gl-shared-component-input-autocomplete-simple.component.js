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
export { GlSharedComponentInputAutocompleteSimpleComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1hdXRvY29tcGxldGUtc2ltcGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dsLW5nLWZyb250ZW5kLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9jb21wb25lbnQvaW5wdXQvYXV0b2NvbXBsZXRlL3NpbXBsZS9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LWF1dG9jb21wbGV0ZS1zaW1wbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFnQyxNQUFNLEVBQWlCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzSSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVoRCxPQUFPLEVBQUUsK0NBQStDLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQVExSDtJQWdDRSwyREFBb0IsUUFBeUQsRUFBUyxPQUFnQjtRQUF0RyxpQkFvQ0M7UUFwQ21CLGFBQVEsR0FBUixRQUFRLENBQWlEO1FBQVMsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQTdCNUYsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBaUIsQ0FBQztRQUNsRCxjQUFTLEdBQW9CLEVBQUUsQ0FBQztRQU9oQyxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBRW5CLGNBQVMsR0FBVyxLQUFLLENBQUM7UUFhM0IsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUN4QixnQkFBVyxHQUFHLDZDQUE2QyxDQUFBO1FBQzNELGdCQUFXLEdBQUcsd0NBQXdDLENBQUE7UUFDL0Qsc0JBQWlCLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUlwQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsU0FB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QjtJQUNqQjtRQUFSLEtBQUssRUFBRTtpRkFBWTtJQUNYO1FBQVIsS0FBSyxFQUFFOzBGQUFxQjtJQUNwQjtRQUFSLEtBQUssRUFBRTttR0FBd0Q7SUFDdkQ7UUFBUixLQUFLLEVBQUU7b0ZBQW9CO0lBQ25CO1FBQVIsS0FBSyxFQUFFO29GQUFlO0lBQ2Q7UUFBUixLQUFLLEVBQUU7d0ZBQTJCO0lBRTFCO1FBQVIsS0FBSyxFQUFFO3FGQUFpQjtJQUNoQjtRQUFSLEtBQUssRUFBRTtzRkFBaUI7SUFFaEI7UUFBUixLQUFLLEVBQUU7eUZBQW9CO0lBQ25CO1FBQVIsS0FBSyxFQUFFO3dGQUFtQjtJQUVsQjtRQUFSLEtBQUssRUFBRTt5RkFBb0I7SUFDbkI7UUFBUixLQUFLLEVBQUU7NkZBQTZDO0lBQzVDO1FBQVIsS0FBSyxFQUFFO3VGQUFtQjtJQUNsQjtRQUFSLEtBQUssRUFBRTs0RkFBdUI7SUF4QnBCLGlEQUFpRDtRQUw3RCxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsK0NBQStDO1lBQ3pELDIvREFBNkU7O1NBRTlFLENBQUM7T0FDVyxpREFBaUQsQ0FtSjdEO0lBQUQsd0RBQUM7Q0FBQSxBQW5KRCxJQW1KQztTQW5KWSxpREFBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdmVybGF5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHN0YXJ0V2l0aCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE1hdEF1dG9jb21wbGV0ZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2F1dG9jb21wbGV0ZSc7XG5pbXBvcnQgeyBHbFNoYXJlZENvbXBvbmVudElucHV0QXV0b2NvbXBsZXRlU2ltcGxlU2VydmljZSB9IGZyb20gJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1hdXRvY29tcGxldGUtc2ltcGxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSUNvbWJvQm94RGF0YSB9IGZyb20gXCJnbC13LWZyb250ZW5kXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtYXV0b2NvbXBsZXRlLXNpbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LWF1dG9jb21wbGV0ZS1zaW1wbGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LWF1dG9jb21wbGV0ZS1zaW1wbGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudElucHV0QXV0b2NvbXBsZXRlU2ltcGxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gIEBWaWV3Q2hpbGQoJ2lucHV0JykgaW5wdXQ6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XG5cbiAgQE91dHB1dCgpIGN1cnJlbnRWYWx1ZSA9IG5ldyBFdmVudEVtaXR0ZXI8SUNvbWJvQm94RGF0YT4oKTtcbiAgQElucHV0KCkgbGlzdEl0ZW1zOiBJQ29tYm9Cb3hEYXRhW10gPSBbXTtcblxuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgbGlzdE5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgaXRlbUNvbnRlbnRBbGlnbm1lbnQ6ICdsZWZ0JyB8ICdjZW50ZXInIHwgJ3JpZ2h0JyB8ICcnO1xuICBASW5wdXQoKSBjbGFzczogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1heExlbmd0aDogc3RyaW5nID0gJzI1NSc7XG5cbiAgQElucHV0KCkgY3VzdG9tOiBib29sZWFuO1xuICBASW5wdXQoKSBiYXNlVXJsOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgdmFsdWVGaWVsZDogc3RyaW5nO1xuICBASW5wdXQoKSB0ZXh0RmllbGQ6IHN0cmluZztcblxuICBASW5wdXQoKSBsYWJlbFZhbHVlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxhYmVsQWxpZ25tZW50OiAnbGVmdCcgfCAnY2VudGVyJyB8ICdyaWdodCc7XG4gIEBJbnB1dCgpIHJlcXVpcmVkOiBib29sZWFuO1xuICBASW5wdXQoKSByZXF1aXJlZEZpZWxkOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfbG9hZGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHJlYWRvbmx5IGltYWdlU291cmNlID0gJy4uL2Fzc2V0cy9pbWcvaWNvbi9kcm9wLWRvd24vYXJyb3ctZG93bi5zdmcnXG4gIHJlYWRvbmx5IGNsZWFyU291cmNlID0gJy4uL2Fzc2V0cy9pbWcvaWNvbi9kcm9wLWRvd24vY2xlYXIuc3ZnJ1xuICBhdXRvY29tcGxldGVJbnB1dCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuICBmaWx0ZXJlZE9wdGlvbnM6IE9ic2VydmFibGU8SUNvbWJvQm94RGF0YVtdPjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zZXJ2aWNlOiBHbFNoYXJlZENvbXBvbmVudElucHV0QXV0b2NvbXBsZXRlU2ltcGxlU2VydmljZSwgcHVibGljIG92ZXJsYXk6IE92ZXJsYXkpIHtcbiAgICBfc2VydmljZS5hdXRvY29tcGxldGVMaXN0JC5zdWJzY3JpYmUodXBkYXRlID0+IHtcbiAgICAgIGlmICh0aGlzLmxpc3ROYW1lID09PSB1cGRhdGUubGlzdE5hbWUpIHtcbiAgICAgICAgdGhpcy5saXN0SXRlbXMgPSB1cGRhdGUub3B0aW9ucztcbiAgICAgICAgdGhpcy5zZXR1cCgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIF9zZXJ2aWNlLmF1dG9jb21wbGV0ZVJlc2V0JC5zdWJzY3JpYmUodXBkYXRlID0+IHtcbiAgICAgIGlmICh0aGlzLmlkID09PSB1cGRhdGUuY29tYm9ib3hJZCkge1xuICAgICAgICB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcbiAgICAgICAgdGhpcy52YWxpZGF0ZSgpO1xuICAgICAgfVxuICAgIH0pXG4gICAgX3NlcnZpY2UuYXV0b2NvbXBsZXRlTG9hZGVkJC5zdWJzY3JpYmUobG9hZGVkID0+IHtcbiAgICAgIHRoaXMuX2xvYWRlZCA9IGxvYWRlZDtcbiAgICAgIF9zZXJ2aWNlLmF1dG9jb21wbGV0ZUxvYWRlZCQub2JzZXJ2ZXJzLm1hcCh4ID0+IHguY29tcGxldGUoKSk7XG4gICAgfSk7XG4gICAgX3NlcnZpY2UuYXV0b2NvbXBsZXRlVXBkYXRlVmFsdWUkLnN1YnNjcmliZSh1cGRhdGUgPT4ge1xuICAgICAgaWYgKHRoaXMuaWQgPT09IHVwZGF0ZS5jb21ib2JveElkKSB7XG4gICAgICAgIHRoaXMubGlzdEl0ZW1zID0gdXBkYXRlLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdXBkYXRlLm9wdGlvbnMuZmlsdGVyKHggPT4geC52YWx1ZSA9PT0gdXBkYXRlLnZhbHVlKTtcbiAgICAgICAgY29uc3QgaW5wdXQgPSB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKHZhbHVlICE9IG51bGwgJiYgdmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlucHV0LnZhbHVlID0gdmFsdWVbMF0udGV4dDtcbiAgICAgICAgICB0aGlzLmF1dG9jb21wbGV0ZUlucHV0LnNldFZhbHVlKHZhbHVlWzBdLnRleHQpO1xuICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZVswXS52YWx1ZTtcbiAgICAgICAgICB0aGlzLnNldHVwKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICB0aGlzLmF1dG9jb21wbGV0ZUlucHV0LnNldFZhbHVlKCcnKTtcbiAgICAgICAgICB0aGlzLnZhbHVlID0gJyc7XG4gICAgICAgICAgdGhpcy5zZXR1cCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNldHVwKCk7XG4gIH1cblxuICBwcml2YXRlIHNldHVwKCkge1xuICAgIHRoaXMuZmlsdGVyZWRPcHRpb25zID0gdGhpcy5hdXRvY29tcGxldGVJbnB1dC52YWx1ZUNoYW5nZXMucGlwZShcbiAgICAgIHN0YXJ0V2l0aCgnJyksXG4gICAgICAvLyBzdGFydFdpdGgodGhpcy52YWx1ZSksXG4gICAgICBtYXAodmFsdWUgPT4gdGhpcy5maWx0ZXIodmFsdWUpKVxuICAgICk7XG5cbiAgICAvLyBpZiAoIXRoaXMuX2xvYWRlZCkgeyB0aGlzLmF1dG9jb21wbGV0ZUlucHV0LnNldFZhbHVlKHRoaXMudmFsdWUpOyB9XG4gICAgLy8gdGhpcy5hdXRvY29tcGxldGVJbnB1dC5zZXRWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy52YWxpZGF0ZSgpOyB9KTtcbiAgfVxuICBwcml2YXRlIGZpbHRlcih2YWx1ZTogc3RyaW5nKTogSUNvbWJvQm94RGF0YVtdIHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkgeyB2YWx1ZSA9ICcnOyB9XG5cbiAgICBjb25zdCBmaWx0ZXJWYWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIHRoaXMubGlzdEl0ZW1zLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uLnRleHQ/LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZmlsdGVyVmFsdWUpKTtcbiAgfVxuXG4gIHZhbGlkYXRlKCkge1xuICAgIGNvbnN0IGlucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IHZhbHVlOiBzdHJpbmcgPSBpbnB1dC52YWx1ZVxuICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IHRoaXMuZmlsdGVyKHZhbHVlKTtcblxuICAgIGlmICh2YWx1ZSAhPSBudWxsICYmIHZhbHVlLnRyaW0oKS5sZW5ndGggPiAwICYmIGZpbHRlcmVkRGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICBpbnB1dC52YWx1ZSA9IGZpbHRlcmVkRGF0YVswXS50ZXh0O1xuICAgICAgdGhpcy5hdXRvY29tcGxldGVJbnB1dC5zZXRWYWx1ZShmaWx0ZXJlZERhdGFbMF0udGV4dCk7XG4gICAgICB0aGlzLmN1cnJlbnRWYWx1ZS5lbWl0KHsgdGV4dDogZmlsdGVyZWREYXRhWzBdLnRleHQsIHZhbHVlOiBmaWx0ZXJlZERhdGFbMF0udmFsdWUgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICB0aGlzLmF1dG9jb21wbGV0ZUlucHV0LnNldFZhbHVlKCcnKTtcbiAgICAgIHRoaXMuY3VycmVudFZhbHVlLmVtaXQoeyB0ZXh0OiBudWxsLCB2YWx1ZTogbnVsbCB9KTtcbiAgICB9XG4gIH1cblxuICByZXNldChhdXRvOiBNYXRBdXRvY29tcGxldGUsIGV2ZW50OiBFdmVudCkge1xuICAgIGlmIChhdXRvLm9wdGlvbnMgIT0gbnVsbCkgeyBhdXRvLm9wdGlvbnMubWFwKG9wdGlvbiA9PiBvcHRpb24uZGVzZWxlY3QoKSk7IH1cbiAgICAoPEhUTUxJbnB1dEVsZW1lbnQ+ZXZlbnQuY3VycmVudFRhcmdldCkuc2VsZWN0KCk7XG4gIH1cblxuICBjbGVhckl0ZW1zKGlucHV0OiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgaW5wdXQudmFsdWUgPSBudWxsO1xuICAgIHRoaXMuYXV0b2NvbXBsZXRlSW5wdXQuc2V0VmFsdWUobnVsbCk7XG4gICAgdGhpcy5jdXJyZW50VmFsdWUuZW1pdCh7IHRleHQ6IG51bGwsIHZhbHVlOiBudWxsIH0pO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaW5wdXQuY2xpY2soKTtcbiAgICB9LCAxMDApO1xuICB9XG5cbiAgYXJyb3dDbGljaygpIHtcbiAgICB0aGlzLmF1dG9jb21wbGV0ZUlucHV0LnJlc2V0KCk7XG4gICAgdGhpcy5hdXRvY29tcGxldGVJbnB1dC5zZXRWYWx1ZSgnJyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9zZXJ2aWNlLmF1dG9jb21wbGV0ZUxpc3QkLm9ic2VydmVycy5tYXAoeCA9PiB4LmNvbXBsZXRlKCkpO1xuICAgIHRoaXMuX3NlcnZpY2UuYXV0b2NvbXBsZXRlUmVzZXQkLm9ic2VydmVycy5tYXAoeCA9PiB4LmNvbXBsZXRlKCkpO1xuICAgIHRoaXMuX3NlcnZpY2UuYXV0b2NvbXBsZXRlTG9hZGVkJC5vYnNlcnZlcnMubWFwKHggPT4geC5jb21wbGV0ZSgpKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCBwcmV2TGlzdCA9IGNoYW5nZXMubGlzdEl0ZW1zPy5wcmV2aW91c1ZhbHVlO1xuICAgIGNvbnN0IGN1cnJMaXN0ID0gY2hhbmdlcy5saXN0SXRlbXM/LmN1cnJlbnRWYWx1ZTtcblxuICAgIGNvbnN0IHByZXZWYWx1ZSA9IGNoYW5nZXMudmFsdWU/LnByZXZpb3VzVmFsdWU7XG4gICAgY29uc3QgY3VyclZhbHVlID0gY2hhbmdlcy52YWx1ZT8uY3VycmVudFZhbHVlO1xuXG4gICAgaWYgKHByZXZMaXN0ICE9IGN1cnJMaXN0KSB7IHRoaXMuc2V0dXAoKTsgfVxuICAgIGlmIChwcmV2VmFsdWUgIT0gY3VyclZhbHVlKSB7IHRoaXMuc2V0dXAoKTsgfVxuXG4gICAgdGhpcy5vdmVybGF5LnBvc2l0aW9uKCkuZ2xvYmFsKCkuZGlzcG9zZSgpXG5cbiAgICAvLyBpZiAocHJldkxpc3QgIT0gY3Vyckxpc3QgfHwgcHJldlZhbHVlICE9IGN1cnJWYWx1ZSkgeyB0aGlzLnNldHVwKCk7IH1cbiAgfVxufVxuIl19