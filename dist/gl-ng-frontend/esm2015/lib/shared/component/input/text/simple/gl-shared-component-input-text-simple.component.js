import { __decorate } from "tslib";
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { InputMask } from 'gl-w-frontend/lib/es5/scripts/core/services/input/core-services-input.service';
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
    } }, styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);.required-fill[_ngcontent-%COMP%]{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:.2s ease-in-out}.required-fill[_ngcontent-%COMP%]::-moz-placeholder{color:rgba(255,255,255,.3)!important}.required-fill[_ngcontent-%COMP%]:-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.required-fill[_ngcontent-%COMP%]::-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.required-fill[_ngcontent-%COMP%]::placeholder{color:rgba(255,255,255,.3)!important}.error-highlight[_ngcontent-%COMP%]{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:.2s ease-in-out}.error-highlight[_ngcontent-%COMP%]::-moz-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight[_ngcontent-%COMP%]:-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight[_ngcontent-%COMP%]::-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight[_ngcontent-%COMP%]::placeholder{color:rgba(255,255,255,.3)!important}[_nghost-%COMP%] {display:flex;flex:1 0 auto;position:relative;flex-direction:column;align-items:stretch}[_nghost-%COMP%]  .item-content{font-family:Montserrat,sans-serif;font-weight:400;padding:.8em;border:none;background-color:#333437;color:#fff;font-size:.45em;flex-grow:1}[_nghost-%COMP%]  .item-content:focus{outline:0!important}[_nghost-%COMP%]  .item-content::-moz-placeholder{color:#64666c!important}[_nghost-%COMP%]  .item-content::-ms-input-placeholder{color:#64666c!important}[_nghost-%COMP%]  .item-content::placeholder{color:#64666c!important}[_nghost-%COMP%]  .item-content.left{text-align:left}[_nghost-%COMP%]  .item-content.center{text-align:center}[_nghost-%COMP%]  .item-content.right{text-align:right}[_nghost-%COMP%]  .item-content.light{background-color:rgba(0,0,0,.1)}[_nghost-%COMP%]  .item-content.light::-moz-placeholder{color:rgba(255,255,255,.2)!important}[_nghost-%COMP%]  .item-content.light::-ms-input-placeholder{color:rgba(255,255,255,.2)!important}[_nghost-%COMP%]  .item-content.light::placeholder{color:rgba(255,255,255,.2)!important}[_nghost-%COMP%]  .item-content.dark{background-color:#161617}[_nghost-%COMP%]  .item-content:-ms-input-placeholder{color:#64666c!important}[_nghost-%COMP%]  .item-content.light:-ms-input-placeholder{color:gray!important}@media screen and (-ms-high-contrast:none),(-ms-high-contrast:active){[_nghost-%COMP%]  .item-content:-ms-input-placeholder{color:#64666c!important}[_nghost-%COMP%]  .item-content::-moz-placeholder{color:#64666c!important}[_nghost-%COMP%]  .item-content::-ms-input-placeholder{color:#64666c!important}[_nghost-%COMP%]  .item-content::placeholder{color:#64666c!important}}"] });
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
                styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);.required-fill{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:.2s ease-in-out}.required-fill::-moz-placeholder{color:rgba(255,255,255,.3)!important}.required-fill:-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.required-fill::-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.required-fill::placeholder{color:rgba(255,255,255,.3)!important}.error-highlight{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:.2s ease-in-out}.error-highlight::-moz-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight:-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight::-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight::placeholder{color:rgba(255,255,255,.3)!important}:host::ng-deep{display:flex;flex:1 0 auto;position:relative;flex-direction:column;align-items:stretch}:host::ng-deep .item-content{font-family:Montserrat,sans-serif;font-weight:400;padding:.8em;border:none;background-color:#333437;color:#fff;font-size:.45em;flex-grow:1}:host::ng-deep .item-content:focus{outline:0!important}:host::ng-deep .item-content::-moz-placeholder{color:#64666c!important}:host::ng-deep .item-content::-ms-input-placeholder{color:#64666c!important}:host::ng-deep .item-content::placeholder{color:#64666c!important}:host::ng-deep .item-content.left{text-align:left}:host::ng-deep .item-content.center{text-align:center}:host::ng-deep .item-content.right{text-align:right}:host::ng-deep .item-content.light{background-color:rgba(0,0,0,.1)}:host::ng-deep .item-content.light::-moz-placeholder{color:rgba(255,255,255,.2)!important}:host::ng-deep .item-content.light::-ms-input-placeholder{color:rgba(255,255,255,.2)!important}:host::ng-deep .item-content.light::placeholder{color:rgba(255,255,255,.2)!important}:host::ng-deep .item-content.dark{background-color:#161617}:host::ng-deep .item-content:-ms-input-placeholder{color:#64666c!important}:host::ng-deep .item-content.light:-ms-input-placeholder{color:gray!important}@media screen and (-ms-high-contrast:none),(-ms-high-contrast:active){:host::ng-deep .item-content:-ms-input-placeholder{color:#64666c!important}:host::ng-deep .item-content::-moz-placeholder{color:#64666c!important}:host::ng-deep .item-content::-ms-input-placeholder{color:#64666c!important}:host::ng-deep .item-content::placeholder{color:#64666c!important}}"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LXNpbXBsZS5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIm5nOi9nbC1uZy1mcm9udGVuZC9saWIvc2hhcmVkL2NvbXBvbmVudC9pbnB1dC90ZXh0L3NpbXBsZS9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LXRleHQtc2ltcGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sK0VBQStFLENBQUMsMUdBQTFHLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwrRUFBK0UsQ0FBQztBQVMxRyxJQUFhOztHQUF5QyxHQUF0RCxNQUFhO3VCQUF5QyxPQXFCcEQsd0JBbEJTLGFBQVEsR0FBRyxLQUFLLENBQUMsU0FDakIsckZBSlgsSUFBYSx5Q0FBeUMsR0FBdEQsTUFBYSx5Q0FBeUM7SUFJL0IsR0FBRyxLQUFLLENBQUMsYkFKeUIsSUFxQnZEO0VBWlMsVUFBSyxHQUFXLElBQUksQ0FBQyxTQUlyQiw3QkFRTyxRQWxCUCxhQUFRLEdBQUcsS0FBSyxDQUFDO1lBVVIsR0FBRyxHQUFHLENBQUMsU0FFZiw1QkFYWixRQUFXLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1VBV1IsR0FBb0MsSUFBSSxqQkFWaEUsUUFJVyxVQUFLLEdBQVcsSUFBSSxDQUFDO0VBTTRDLEVBQUUsQ0FBQyxLQU03RCxDQUFDLEtBTFAsT0FBTyxDQUFDLElBQUksNUJBTnhCLFFBR1csY0FBUyxHQUFHLEdBQUcsQ0FBQztVQUl2QixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sN0NBSHZDLFFBQ1ksaUJBQVksR0FBb0MsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUVy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QUFLLEVBQUUsWEFBYyxJQUFyQixLQUFLLEVBQUU7d0VBQXNCLHhFQUFyQix3RUFBcUI7QUFFckIsQUFBQTtJQUFSLEtBQUssRUFBRSxYQUFjLElBQXJCLEtBQUssRUFBRTt1RUFBK0IsdkVBQTlCLHVFQUE4QjtBQUM5QixBQUFBO0lBQVIsS0FBSyxFQUFFLFhBQWMsSUFBckIsS0FBSyxFQUFFOzZFQUFvQiw3RUFBbkIsNkVBQW1CO0FBQ25CLEFBQUE7SUFBUixLQUFLLEVBQUUsWEFBYyxJQUFyQixLQUFLLEVBQUU7NEVBQWlCLDVFQUFoQiw0RUFBZ0I7QUFFZixBQUFBO0lBQVQsTUFBTSxFQUFFLFpBQWMsSUFBdEIsTUFBTSxFQUFFOytFQUFvRSwvRUFBbkUsK0VBQW1FO0FBQ25FLEFBQUE7SUFBVCxNQUFNLEVBQUUsWkFBYyxJQUF0QixNQUFNLEVBQUU7d0VBR1IseEVBSFMsd0VBR1Q7QUFuQlUseUNBQXlDLG9CQUxyRCxTQUFTLENBQUMsVUFDVCxRQUFRLEVBQUUsM0ZBSUMseUNBQXlDLG9CQUxyRCxTQUFTLENBQUMsVUFDVCxRQUFRLEVBQUU7O0tBQXVDLFVBQ2pELFZBRGlELFVBQ2pEOzttU0FBcUUsQUFBQTt1OEVBRXRFLENBQUMsSUFDVyx5Q0FBeUMsQ0E4QnJELFdBOUJZLDFEQURaLENBQUMsSUFDVyx5Q0FBeUMsQ0E4QnJEO1dBOUJxRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkErQnREOztBQTFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJQ3VycmVuY3lUeXBlcyB9IGZyb20gJ2dsLXctZnJvbnRlbmQvbGliL2VzNS9zY3JpcHRzL2NvcmUvc2VydmljZXMvaW5wdXQvY29yZS1zZXJ2aWNlcy1pbnB1dC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSW5wdXRNYXNrIH0gZnJvbSAnZ2wtdy1mcm9udGVuZC9saWIvZXM1L3NjcmlwdHMvY29yZS9zZXJ2aWNlcy9pbnB1dC9jb3JlLXNlcnZpY2VzLWlucHV0LnNlcnZpY2UnO1xuaW1wb3J0IHsgSVNpbXBsZVRleHRSZXN1bHQgfSBmcm9tICcuL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtdGV4dC1zaW1wbGUuaW50ZXJmYWNlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LXRleHQtc2ltcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtdGV4dC1zaW1wbGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LXRleHQtc2ltcGxlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRJbnB1dFRleHRTaW1wbGVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50JywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IHRydWUgfSkgaW5wdXRFbGVtZW50OiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xuXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGF1dG9jb21wbGV0ZSA9IGZhbHNlO1xuICBASW5wdXQoKSBpZDogc3RyaW5nO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBpdGVtQ29udGVudEFsaWdubWVudDogc3RyaW5nO1xuICBASW5wdXQoKSBjbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nID0gbnVsbDtcblxuICBASW5wdXQoKSBtYXNrOiBzdHJpbmcgfCBJQ3VycmVuY3lUeXBlcztcbiAgQElucHV0KCkgbWFza1N5bWJvbDogc3RyaW5nO1xuICBASW5wdXQoKSBtYXhMZW5ndGggPSAyNTU7XG5cbiAgQE91dHB1dCgpIGN1cnJlbnRWYWx1ZTogRXZlbnRFbWl0dGVyPElTaW1wbGVUZXh0UmVzdWx0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uS2V5VXAoYXJncykge1xuICAgIGlmIChhcmdzLnRhcmdldC52YWx1ZS50cmltKCkubGVuZ3RoID4gMCkgeyBhcmdzLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdyZXF1aXJlZC1maWxsJyk7IH1cbiAgICB0aGlzLmN1cnJlbnRWYWx1ZS5lbWl0KHsgdmFsdWU6IGFyZ3MudGFyZ2V0LnZhbHVlIH0pO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5tYXNrICE9IG51bGwgJiYgdGhpcy5tYXNrLmluY2x1ZGVzKCdjdXJyZW5jeScpKSB7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGxhY2Vob2xkZXIgPSBJbnB1dE1hc2suY3VycmVuY3kodGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy5tYXNrIGFzIElDdXJyZW5jeVR5cGVzLCB0aGlzLm1hc2tTeW1ib2wpO1xuICAgICAgfVxuICAgIH0sIDApO1xuICB9XG59XG4iXX0=