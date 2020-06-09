import { __decorate } from "tslib";
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { InputMask } from 'gl-w-frontend/lib/es5/scripts/core/services/input/core-services-input.service';
import * as ɵngcc0 from '@angular/core';

var _c0 = ["inputElement"];
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
GlSharedComponentInputTextSimpleComponent.ɵfac = function GlSharedComponentInputTextSimpleComponent_Factory(t) { return new (t || GlSharedComponentInputTextSimpleComponent)(); };
GlSharedComponentInputTextSimpleComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentInputTextSimpleComponent, selectors: [["gl-shared-component-input-text-simple"]], viewQuery: function GlSharedComponentInputTextSimpleComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c0, true, ElementRef);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.inputElement = _t.first);
    } }, inputs: { disabled: "disabled", autocomplete: "autocomplete", value: "value", maxLength: "maxLength", id: "id", placeholder: "placeholder", itemContentAlignment: "itemContentAlignment", class: "class", mask: "mask", maskSymbol: "maskSymbol" }, outputs: { currentValue: "currentValue", onKeyUp: "onKeyUp" }, decls: 2, vars: 10, consts: [["type", "text", "required", "", 3, "id", "value", "autocomplete", "placeholder", "disabled", "maxLength", "keyup"], ["inputElement", ""]], template: function GlSharedComponentInputTextSimpleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "input", 0, 1);
        ɵngcc0.ɵɵlistener("keyup", function GlSharedComponentInputTextSimpleComponent_Template_input_keyup_0_listener($event) { return ctx.onKeyUp($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate2("item-content ", ctx.itemContentAlignment, " ", ctx.class, "");
        ɵngcc0.ɵɵproperty("id", ctx.id)("value", ctx.value)("autocomplete", "off")("placeholder", ctx.placeholder)("disabled", ctx.disabled)("maxLength", ctx.maxLength);
    } }, styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);.required-fill[_ngcontent-%COMP%]{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:.2s ease-in-out}.required-fill[_ngcontent-%COMP%]::-moz-placeholder{color:rgba(255,255,255,.3)!important}.required-fill[_ngcontent-%COMP%]:-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.required-fill[_ngcontent-%COMP%]::-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.required-fill[_ngcontent-%COMP%]::placeholder{color:rgba(255,255,255,.3)!important}.error-highlight[_ngcontent-%COMP%]{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:.2s ease-in-out}.error-highlight[_ngcontent-%COMP%]::-moz-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight[_ngcontent-%COMP%]:-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight[_ngcontent-%COMP%]::-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight[_ngcontent-%COMP%]::placeholder{color:rgba(255,255,255,.3)!important}[_nghost-%COMP%] {display:flex;flex:1 0 auto;position:relative;flex-direction:column;align-items:stretch;margin:.5px}[_nghost-%COMP%]  .item-content{font-family:Montserrat,sans-serif;font-weight:400;padding:.8em;border:none;background-color:#333437;color:#fff;font-size:.45em;flex-grow:1}[_nghost-%COMP%]  .item-content::-moz-placeholder{color:#64666c!important}[_nghost-%COMP%]  .item-content::-ms-input-placeholder{color:#64666c!important}[_nghost-%COMP%]  .item-content::placeholder{color:#64666c!important}[_nghost-%COMP%]  .item-content.left{text-align:left}[_nghost-%COMP%]  .item-content.center{text-align:center}[_nghost-%COMP%]  .item-content.right{text-align:right}[_nghost-%COMP%]  .item-content.light{background-color:rgba(0,0,0,.1)}[_nghost-%COMP%]  .item-content.light::-moz-placeholder{color:rgba(255,255,255,.2)!important}[_nghost-%COMP%]  .item-content.light::-ms-input-placeholder{color:rgba(255,255,255,.2)!important}[_nghost-%COMP%]  .item-content.light::placeholder{color:rgba(255,255,255,.2)!important}[_nghost-%COMP%]  .item-content:-ms-input-placeholder{color:#64666c!important}[_nghost-%COMP%]  .item-content.light:-ms-input-placeholder{color:gray!important}@media screen and (-ms-high-contrast:none),(-ms-high-contrast:active){[_nghost-%COMP%]  .item-content:-ms-input-placeholder{color:#64666c!important}[_nghost-%COMP%]  .item-content::-moz-placeholder{color:#64666c!important}[_nghost-%COMP%]  .item-content::-ms-input-placeholder{color:#64666c!important}[_nghost-%COMP%]  .item-content::placeholder{color:#64666c!important}}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentInputTextSimpleComponent, [{
        type: Component,
        args: [{
                selector: 'gl-shared-component-input-text-simple',
                template: "<!--suppress HtmlFormInputWithoutLabel -->\n<input\n  #inputElement\n  class=\"item-content {{ itemContentAlignment }} {{ class }}\"\n  type=\"text\"\n  [id]=\"id\"\n  [value]=\"value\"\n  [autocomplete]=\"'off'\"\n  required\n  [placeholder]=\"placeholder\"\n  (keyup)=\"onKeyUp($event)\"\n  [disabled]=\"disabled\"\n  [maxLength]=\"maxLength\">\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);.required-fill{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:.2s ease-in-out}.required-fill::-moz-placeholder{color:rgba(255,255,255,.3)!important}.required-fill:-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.required-fill::-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.required-fill::placeholder{color:rgba(255,255,255,.3)!important}.error-highlight{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:.2s ease-in-out}.error-highlight::-moz-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight:-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight::-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight::placeholder{color:rgba(255,255,255,.3)!important}:host::ng-deep{display:flex;flex:1 0 auto;position:relative;flex-direction:column;align-items:stretch;margin:.5px}:host::ng-deep .item-content{font-family:Montserrat,sans-serif;font-weight:400;padding:.8em;border:none;background-color:#333437;color:#fff;font-size:.45em;flex-grow:1}:host::ng-deep .item-content::-moz-placeholder{color:#64666c!important}:host::ng-deep .item-content::-ms-input-placeholder{color:#64666c!important}:host::ng-deep .item-content::placeholder{color:#64666c!important}:host::ng-deep .item-content.left{text-align:left}:host::ng-deep .item-content.center{text-align:center}:host::ng-deep .item-content.right{text-align:right}:host::ng-deep .item-content.light{background-color:rgba(0,0,0,.1)}:host::ng-deep .item-content.light::-moz-placeholder{color:rgba(255,255,255,.2)!important}:host::ng-deep .item-content.light::-ms-input-placeholder{color:rgba(255,255,255,.2)!important}:host::ng-deep .item-content.light::placeholder{color:rgba(255,255,255,.2)!important}:host::ng-deep .item-content:-ms-input-placeholder{color:#64666c!important}:host::ng-deep .item-content.light:-ms-input-placeholder{color:gray!important}@media screen and (-ms-high-contrast:none),(-ms-high-contrast:active){:host::ng-deep .item-content:-ms-input-placeholder{color:#64666c!important}:host::ng-deep .item-content::-moz-placeholder{color:#64666c!important}:host::ng-deep .item-content::-ms-input-placeholder{color:#64666c!important}:host::ng-deep .item-content::placeholder{color:#64666c!important}}"]
            }]
    }], function () { return []; }, { disabled: [{
            type: Input
        }], autocomplete: [{
            type: Input
        }], value: [{
            type: Input
        }], maxLength: [{
            type: Input
        }], currentValue: [{
            type: Output
        }], onKeyUp: [{
            type: Output
        }], inputElement: [{
            type: ViewChild,
            args: ['inputElement', { read: ElementRef, static: true }]
        }], id: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], itemContentAlignment: [{
            type: Input
        }], class: [{
            type: Input
        }], mask: [{
            type: Input
        }], maskSymbol: [{
            type: Input
        }] }); })();
    return GlSharedComponentInputTextSimpleComponent;
}());
export { GlSharedComponentInputTextSimpleComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LXNpbXBsZS5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIm5nOi9nbC1uZy1mcm9udGVuZC9saWIvc2hhcmVkL2NvbXBvbmVudC9pbnB1dC90ZXh0L3NpbXBsZS9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LXRleHQtc2ltcGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sK0VBQStFLENBQUMsMUdBQTFHLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwrRUFBK0UsQ0FBQztBQVExRzs7O1dBcUJFLCtEQWxCUywxRUFIWDtVQUdtQixHQUFHLEtBQUssQ0FBQyxTQUNqQixpQkFBWSxHQUFHLEtBQUssQ0FBQyx0REFKNkMsSUFxQjNFO0lBWlMsVUFBSyxHQUFXLElBQUksQ0FBQyx0QkFleEIsUUFyQkcsYUFBUSxHQUFHLEtBQUssQ0FBQztBQVVqQixjQUFTLEdBQUcsR0FBRyxDQUFDLFNBRWYsOUJBWFosUUFBVyxpQkFBWSxHQUFHLEtBQUssQ0FBQztZQVdSLEdBQUcsSUFBSSxuQkFWL0IsUUFJVyxVQUFLLEdBQVcsSUFBSSxDQUFDO0lBTVcsRUFBRSxDQUFDLEtBTTVCLENBQUMsS0FMUCxsQkFOWixRQUdXLGNBQVMsR0FBRyxHQUFHLENBQUM7K0NBR1IsL0NBRm5CLFFBQ1ksaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0VBQ2xDLEZBQVosSUFLa0IsQ0FBQztNQUxDLElBQUksWUFDcEIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLGNBQUUsSUFBSSxDQUFDLGxGQUtwRCxJQU5Z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QUssRUFBRTs0RUFBc0IsNUVBQXJCLDRFQUFxQjtJQUVyQixKQUFYLElBQVc7UUFBUixLQUFLLEVBQUUsZkFBYyxRQUFyQixLQUFLLEVBQUU7MkVBQStCLDNFQUE5QiwyRUFBOEI7SUFDOUIsSkFBVixJQUFVO1FBQVIsS0FBSyxFQUFFLGZBQWMsUUFBckIsS0FBSyxFQUFFO2lGQUFvQixqRkFBbkIsaUZBQW1CO0lBQ25CLEpBQVYsSUFBVTtRQUFSLEtBQUssRUFBRSxmQUFjLFFBQXJCLEtBQUssRUFBRTtnRkFBaUIsaEZBQWhCLGdGQUFnQjtJQUVmLEpBQVosSUFBWTtRQUFULE1BQU0sRUFBRSxoQkFBYyxRQUF0QixNQUFNLEVBQUU7bUZBQW1DLG5GQUFsQyxtRkFBa0M7SUFDbEMsSkFBWCxJQUFXO1FBQVQsTUFBTSxFQUFFLGhCQUFjLFFBQXRCLE1BQU0sRUFBRTs0RUFHUiw1RUFIUyw0RUFHVDtJQW5CVSx5Q0FBeUMsd0JBTHJELFNBQVMsQ0FBQyxjQUNULFFBQVEsRUFBRSx1Q0FBdUMsY0FDakQseEpBR1cseUNBQXlDLHdCQUxyRCxTQUFTLENBQUMsY0FDVCxRQUFRLEVBQUUsdUNBQXVDLGNBQ2pEOzs7TUFBcUUsQUFBQTs7Ozs7Ozs7OzsrdUNBRXRFLENBQUMsUUFDVyx5Q0FBeUMsQ0E4QnJELE1BQUQsZ0RBQUMsR0FBQSxBQTlCRCxJQThCQyxVQTlCWSx5Q0FBeUMsbktBRHJELENBQUMsUUFDVyx5Q0FBeUMsQ0E4QnJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFDRDtBQUFDLElBREQsZ0RBQUM7QUFDQSxDQURBLEFBOUJELElBOEJDOztBQXhDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJQ3VycmVuY3lUeXBlcyB9IGZyb20gJ2dsLXctZnJvbnRlbmQvbGliL2VzNS9zY3JpcHRzL2NvcmUvc2VydmljZXMvaW5wdXQvY29yZS1zZXJ2aWNlcy1pbnB1dC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSW5wdXRNYXNrIH0gZnJvbSAnZ2wtdy1mcm9udGVuZC9saWIvZXM1L3NjcmlwdHMvY29yZS9zZXJ2aWNlcy9pbnB1dC9jb3JlLXNlcnZpY2VzLWlucHV0LnNlcnZpY2UnO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtdGV4dC1zaW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LXNpbXBsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtdGV4dC1zaW1wbGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudElucHV0VGV4dFNpbXBsZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBAVmlld0NoaWxkKCdpbnB1dEVsZW1lbnQnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZSB9KSBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XG5cbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgYXV0b2NvbXBsZXRlID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGl0ZW1Db250ZW50QWxpZ25tZW50OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmcgPSBudWxsO1xuXG4gIEBJbnB1dCgpIG1hc2s6IHN0cmluZyB8IElDdXJyZW5jeVR5cGVzO1xuICBASW5wdXQoKSBtYXNrU3ltYm9sOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1heExlbmd0aCA9IDI1NTtcblxuICBAT3V0cHV0KCkgY3VycmVudFZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25LZXlVcChhcmdzKSB7XG4gICAgaWYgKGFyZ3MudGFyZ2V0LnZhbHVlLnRyaW0oKS5sZW5ndGggPiAwKSB7IGFyZ3MudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3JlcXVpcmVkLWZpbGwnKTsgfVxuICAgIHRoaXMuY3VycmVudFZhbHVlLmVtaXQoeyB2YWx1ZTogYXJncy50YXJnZXQudmFsdWUgfSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLm1hc2sgIT0gbnVsbCAmJiB0aGlzLm1hc2suaW5jbHVkZXMoJ2N1cnJlbmN5JykpIHtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5wbGFjZWhvbGRlciA9IElucHV0TWFzay5jdXJyZW5jeSh0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LCB0aGlzLm1hc2sgYXMgSUN1cnJlbmN5VHlwZXMsIHRoaXMubWFza1N5bWJvbCk7XG4gICAgICB9XG4gICAgfSwgMCk7XG4gIH1cbn1cbiJdfQ==