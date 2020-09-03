import { __decorate } from "tslib";
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { InputMask } from "gl-w-frontend";
import * as ɵngcc0 from '@angular/core';

const _c0 = ["inputElement"];
let GlSharedComponentInputTextSimpleComponent = class GlSharedComponentInputTextSimpleComponent {
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
};
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
    } }, styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);.required-fill[_ngcontent-%COMP%]{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:.2s ease-in-out}.required-fill[_ngcontent-%COMP%]::-moz-placeholder{color:rgba(255,255,255,.3)!important}.required-fill[_ngcontent-%COMP%]:-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.required-fill[_ngcontent-%COMP%]::-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.required-fill[_ngcontent-%COMP%]::placeholder{color:rgba(255,255,255,.3)!important}.error-highlight[_ngcontent-%COMP%]{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:.2s ease-in-out}.error-highlight[_ngcontent-%COMP%]::-moz-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight[_ngcontent-%COMP%]:-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight[_ngcontent-%COMP%]::-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight[_ngcontent-%COMP%]::placeholder{color:rgba(255,255,255,.3)!important}[_nghost-%COMP%] {display:flex;flex:1 0 auto;position:relative;flex-direction:column;align-items:stretch}[_nghost-%COMP%]  .item-content{font-family:Montserrat,sans-serif;font-weight:400;padding:.8em;border:none;background-color:#333437;color:#fff;font-size:.45em;flex-grow:1}[_nghost-%COMP%]  .item-content:focus{outline:0!important}[_nghost-%COMP%]  .item-content::-moz-placeholder{color:#64666c!important}[_nghost-%COMP%]  .item-content::-ms-input-placeholder{color:#64666c!important}[_nghost-%COMP%]  .item-content::placeholder{color:#64666c!important}[_nghost-%COMP%]  .item-content.left{text-align:left}[_nghost-%COMP%]  .item-content.center{text-align:center}[_nghost-%COMP%]  .item-content.right{text-align:right}[_nghost-%COMP%]  .item-content.light{background-color:rgba(0,0,0,.1)}[_nghost-%COMP%]  .item-content.light::-moz-placeholder{color:rgba(255,255,255,.2)!important}[_nghost-%COMP%]  .item-content.light::-ms-input-placeholder{color:rgba(255,255,255,.2)!important}[_nghost-%COMP%]  .item-content.light::placeholder{color:rgba(255,255,255,.2)!important}[_nghost-%COMP%]  .item-content.dark{background-color:#161617}[_nghost-%COMP%]  .item-content:-ms-input-placeholder{color:#64666c!important}[_nghost-%COMP%]  .item-content.light:-ms-input-placeholder{color:gray!important}"] });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentInputTextSimpleComponent, [{
        type: Component,
        args: [{
                selector: 'gl-shared-component-input-text-simple',
                template: "<!--suppress HtmlFormInputWithoutLabel -->\n<input\n  #inputElement\n  class=\"item-content {{ itemContentAlignment }} {{ class }}\"\n  type=\"text\"\n  [id]=\"id\"\n  [value]=\"value\"\n  [autocomplete]=\"'off'\"\n  required\n  [placeholder]=\"placeholder\"\n  (keyup)=\"onKeyUp($event)\"\n  [disabled]=\"disabled\"\n  [maxLength]=\"maxLength\">\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);.required-fill{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:.2s ease-in-out}.required-fill::-moz-placeholder{color:rgba(255,255,255,.3)!important}.required-fill:-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.required-fill::-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.required-fill::placeholder{color:rgba(255,255,255,.3)!important}.error-highlight{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:.2s ease-in-out}.error-highlight::-moz-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight:-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight::-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight::placeholder{color:rgba(255,255,255,.3)!important}:host::ng-deep{display:flex;flex:1 0 auto;position:relative;flex-direction:column;align-items:stretch}:host::ng-deep .item-content{font-family:Montserrat,sans-serif;font-weight:400;padding:.8em;border:none;background-color:#333437;color:#fff;font-size:.45em;flex-grow:1}:host::ng-deep .item-content:focus{outline:0!important}:host::ng-deep .item-content::-moz-placeholder{color:#64666c!important}:host::ng-deep .item-content::-ms-input-placeholder{color:#64666c!important}:host::ng-deep .item-content::placeholder{color:#64666c!important}:host::ng-deep .item-content.left{text-align:left}:host::ng-deep .item-content.center{text-align:center}:host::ng-deep .item-content.right{text-align:right}:host::ng-deep .item-content.light{background-color:rgba(0,0,0,.1)}:host::ng-deep .item-content.light::-moz-placeholder{color:rgba(255,255,255,.2)!important}:host::ng-deep .item-content.light::-ms-input-placeholder{color:rgba(255,255,255,.2)!important}:host::ng-deep .item-content.light::placeholder{color:rgba(255,255,255,.2)!important}:host::ng-deep .item-content.dark{background-color:#161617}:host::ng-deep .item-content:-ms-input-placeholder{color:#64666c!important}:host::ng-deep .item-content.light:-ms-input-placeholder{color:gray!important}"]
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
export { GlSharedComponentInputTextSimpleComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LXNpbXBsZS5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIm5nOi9nbC1uZy1mcm9udGVuZC9saWIvc2hhcmVkL2NvbXBvbmVudC9pbnB1dC90ZXh0L3NpbXBsZS9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LXRleHQtc2ltcGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RyxPQUFPLEVBQWtCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQywxQ0FBMUQsT0FBTyxFQUFrQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRMUQsSUFBYTs7R0FBeUMsR0FBdEQsTUFBYTt1QkFBeUMsT0FxQnBELHdCQWxCUyxhQUFRLEdBQUcsS0FBSyxDQUFDLFNBQ2pCLHJGQUpYLElBQWEseUNBQXlDLEdBQXRELE1BQWEseUNBQXlDO0lBSS9CLEdBQUcsS0FBSyxDQUFDLGJBSnlCLElBcUJ2RDtFQVpTLFVBQUssR0FBVyxJQUFJLENBQUMsU0FJckIsN0JBUU8sUUFsQlAsYUFBUSxHQUFHLEtBQUssQ0FBQztZQVVSLEdBQUcsR0FBRyxDQUFDLFNBRWYsNUJBWFosUUFBVyxpQkFBWSxHQUFHLEtBQUssQ0FBQztVQVdSLEdBQW9DLElBQUksakJBVmhFLFFBSVcsVUFBSyxHQUFXLElBQUksQ0FBQztFQU00QyxFQUFFLENBQUMsS0FNN0QsQ0FBQyxLQUxQLE9BQU8sQ0FBQyxJQUFJLDVCQU54QixRQUdXLGNBQVMsR0FBRyxHQUFHLENBQUM7VUFJdkIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLDdDQUh2QyxRQUNZLGlCQUFZLEdBQW9DLElBQUksWUFBWSxFQUFFLENBQUM7QUFFckMs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SyxFQUFFLFhBQWMsSUFBckIsS0FBSyxFQUFFO3dFQUFzQix4RUFBckIsd0VBQXFCO0FBRXJCLEFBQUE7SUFBUixLQUFLLEVBQUUsWEFBYyxJQUFyQixLQUFLLEVBQUU7dUVBQStCLHZFQUE5Qix1RUFBOEI7QUFDOUIsQUFBQTtJQUFSLEtBQUssRUFBRSxYQUFjLElBQXJCLEtBQUssRUFBRTs2RUFBb0IsN0VBQW5CLDZFQUFtQjtBQUNuQixBQUFBO0lBQVIsS0FBSyxFQUFFLFhBQWMsSUFBckIsS0FBSyxFQUFFOzRFQUFpQiw1RUFBaEIsNEVBQWdCO0FBRWYsQUFBQTtJQUFULE1BQU0sRUFBRSxaQUFjLElBQXRCLE1BQU0sRUFBRTsrRUFBb0UsL0VBQW5FLCtFQUFtRTtBQUNuRSxBQUFBO0lBQVQsTUFBTSxFQUFFLFpBQWMsSUFBdEIsTUFBTSxFQUFFO3dFQUdSLHhFQUhTLHdFQUdUO0FBbkJVLHlDQUF5QyxvQkFMckQsU0FBUyxDQUFDLFVBQ1QsUUFBUSxFQUFFLDNGQUlDLHlDQUF5QyxvQkFMckQsU0FBUyxDQUFDLFVBQ1QsUUFBUSxFQUFFOztLQUF1QyxVQUNqRCxWQURpRCxVQUNqRDs7bVNBQXFFLEFBQUE7Z21FQUV0RSxDQUFDLElBQ1cseUNBQXlDLENBOEJyRCxXQTlCWSwxREFEWixDQUFDLElBQ1cseUNBQXlDLENBOEJyRDtXQTlCcUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBK0J0RDs7QUF6Q0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSVNpbXBsZVRleHRSZXN1bHQgfSBmcm9tICcuL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtdGV4dC1zaW1wbGUuaW50ZXJmYWNlJztcbmltcG9ydCB7IElDdXJyZW5jeVR5cGVzLCBJbnB1dE1hc2sgfSBmcm9tIFwiZ2wtdy1mcm9udGVuZFwiO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtdGV4dC1zaW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LXNpbXBsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtdGV4dC1zaW1wbGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudElucHV0VGV4dFNpbXBsZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBAVmlld0NoaWxkKCdpbnB1dEVsZW1lbnQnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZSB9KSBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XG5cbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgYXV0b2NvbXBsZXRlID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGl0ZW1Db250ZW50QWxpZ25tZW50OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmcgPSBudWxsO1xuXG4gIEBJbnB1dCgpIG1hc2s6IHN0cmluZyB8IElDdXJyZW5jeVR5cGVzO1xuICBASW5wdXQoKSBtYXNrU3ltYm9sOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1heExlbmd0aCA9IDI1NTtcblxuICBAT3V0cHV0KCkgY3VycmVudFZhbHVlOiBFdmVudEVtaXR0ZXI8SVNpbXBsZVRleHRSZXN1bHQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25LZXlVcChhcmdzKSB7XG4gICAgaWYgKGFyZ3MudGFyZ2V0LnZhbHVlLnRyaW0oKS5sZW5ndGggPiAwKSB7IGFyZ3MudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3JlcXVpcmVkLWZpbGwnKTsgfVxuICAgIHRoaXMuY3VycmVudFZhbHVlLmVtaXQoeyB2YWx1ZTogYXJncy50YXJnZXQudmFsdWUgfSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLm1hc2sgIT0gbnVsbCAmJiB0aGlzLm1hc2suaW5jbHVkZXMoJ2N1cnJlbmN5JykpIHtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5wbGFjZWhvbGRlciA9IElucHV0TWFzay5jdXJyZW5jeSh0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LCB0aGlzLm1hc2sgYXMgSUN1cnJlbmN5VHlwZXMsIHRoaXMubWFza1N5bWJvbCk7XG4gICAgICB9XG4gICAgfSwgMCk7XG4gIH1cbn1cbiJdfQ==