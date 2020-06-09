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
    } }, styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);.required-fill[_ngcontent-%COMP%]{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:.2s ease-in-out}.required-fill[_ngcontent-%COMP%]::-moz-placeholder{color:rgba(255,255,255,.3)!important}.required-fill[_ngcontent-%COMP%]:-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.required-fill[_ngcontent-%COMP%]::-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.required-fill[_ngcontent-%COMP%]::placeholder{color:rgba(255,255,255,.3)!important}.error-highlight[_ngcontent-%COMP%]{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:.2s ease-in-out}.error-highlight[_ngcontent-%COMP%]::-moz-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight[_ngcontent-%COMP%]:-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight[_ngcontent-%COMP%]::-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight[_ngcontent-%COMP%]::placeholder{color:rgba(255,255,255,.3)!important}[_nghost-%COMP%] {display:flex;flex:1 0 auto;position:relative;flex-direction:column;align-items:stretch;margin:.5px}[_nghost-%COMP%]  .item-content{font-family:Montserrat,sans-serif;font-weight:400;padding:.8em;border:none;background-color:#333437;color:#fff;font-size:.45em;flex-grow:1}[_nghost-%COMP%]  .item-content::-moz-placeholder{color:#64666c!important}[_nghost-%COMP%]  .item-content::-ms-input-placeholder{color:#64666c!important}[_nghost-%COMP%]  .item-content::placeholder{color:#64666c!important}[_nghost-%COMP%]  .item-content.left{text-align:left}[_nghost-%COMP%]  .item-content.center{text-align:center}[_nghost-%COMP%]  .item-content.right{text-align:right}[_nghost-%COMP%]  .item-content.light{background-color:rgba(0,0,0,.1)}[_nghost-%COMP%]  .item-content.light::-moz-placeholder{color:rgba(255,255,255,.2)!important}[_nghost-%COMP%]  .item-content.light::-ms-input-placeholder{color:rgba(255,255,255,.2)!important}[_nghost-%COMP%]  .item-content.light::placeholder{color:rgba(255,255,255,.2)!important}[_nghost-%COMP%]  .item-content:-ms-input-placeholder{color:#64666c!important}[_nghost-%COMP%]  .item-content.light:-ms-input-placeholder{color:gray!important}@media screen and (-ms-high-contrast:none),(-ms-high-contrast:active){[_nghost-%COMP%]  .item-content:-ms-input-placeholder{color:#64666c!important}[_nghost-%COMP%]  .item-content::-moz-placeholder{color:#64666c!important}[_nghost-%COMP%]  .item-content::-ms-input-placeholder{color:#64666c!important}[_nghost-%COMP%]  .item-content::placeholder{color:#64666c!important}}"] });
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
export { GlSharedComponentInputTextSimpleComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LXNpbXBsZS5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIm5nOi9nbC1uZy1mcm9udGVuZC9saWIvc2hhcmVkL2NvbXBvbmVudC9pbnB1dC90ZXh0L3NpbXBsZS9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LXRleHQtc2ltcGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sK0VBQStFLENBQUMsMUdBQTFHLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwrRUFBK0UsQ0FBQztBQVExRyxJQUFhOztHQUF5QyxHQUF0RCxNQUFhO3VCQUF5QyxPQXFCcEQsd0JBbEJTLGFBQVEsR0FBRyxLQUFLLENBQUMsU0FDakIsckZBSlgsSUFBYSx5Q0FBeUMsR0FBdEQsTUFBYSx5Q0FBeUM7SUFJL0IsR0FBRyxLQUFLLENBQUMsYkFKeUIsSUFxQnZEO0VBWlMsVUFBSyxHQUFXLElBQUksQ0FBQyxTQUlyQiw3QkFRTyxRQWxCUCxhQUFRLEdBQUcsS0FBSyxDQUFDO1lBVVIsR0FBRyxHQUFHLENBQUMsU0FFZiw1QkFYWixRQUFXLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1VBV1IsR0FBRyxJQUFJLGpCQVYvQixRQUlXLFVBQUssR0FBVyxJQUFJLENBQUM7RUFNVyxFQUFFLENBQUMsS0FNNUIsQ0FBQyxLQUxQLE9BQU8sQ0FBQyxJQUFJLDVCQU54QixRQUdXLGNBQVMsR0FBRyxHQUFHLENBQUM7VUFJdkIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLDdDQUh2QyxRQUNZLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUVKLENB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RUFBRSxYQUFjLElBQXJCLEtBQUssRUFBRTt3RUFBc0IseEVBQXJCLHdFQUFxQjtBQUVyQixBQUFBO0lBQVIsS0FBSyxFQUFFLFhBQWMsSUFBckIsS0FBSyxFQUFFO3VFQUErQix2RUFBOUIsdUVBQThCO0FBQzlCLEFBQUE7SUFBUixLQUFLLEVBQUUsWEFBYyxJQUFyQixLQUFLLEVBQUU7NkVBQW9CLDdFQUFuQiw2RUFBbUI7QUFDbkIsQUFBQTtJQUFSLEtBQUssRUFBRSxYQUFjLElBQXJCLEtBQUssRUFBRTs0RUFBaUIsNUVBQWhCLDRFQUFnQjtBQUVmLEFBQUE7SUFBVCxNQUFNLEVBQUUsWkFBYyxJQUF0QixNQUFNLEVBQUU7K0VBQW1DLC9FQUFsQywrRUFBa0M7QUFDbEMsQUFBQTtJQUFULE1BQU0sRUFBRSxaQUFjLElBQXRCLE1BQU0sRUFBRTt3RUFHUix4RUFIUyx3RUFHVDtBQW5CVSx5Q0FBeUMsb0JBTHJELFNBQVMsQ0FBQyxVQUNULFFBQVEsRUFBRSwzRkFJQyx5Q0FBeUMsb0JBTHJELFNBQVMsQ0FBQyxVQUNULFFBQVEsRUFBRTs7S0FBdUMsVUFDakQsVkFEaUQsVUFDakQ7O21TQUFxRSxBQUFBO2kyRUFFdEUsQ0FBQyxJQUNXLHlDQUF5QyxDQThCckQsV0E5QlksMURBRFosQ0FBQyxJQUNXLHlDQUF5QyxDQThCckQ7V0E5QnFEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQStCdEQ7O0FBekNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElDdXJyZW5jeVR5cGVzIH0gZnJvbSAnZ2wtdy1mcm9udGVuZC9saWIvZXM1L3NjcmlwdHMvY29yZS9zZXJ2aWNlcy9pbnB1dC9jb3JlLXNlcnZpY2VzLWlucHV0LmludGVyZmFjZSc7XG5pbXBvcnQgeyBJbnB1dE1hc2sgfSBmcm9tICdnbC13LWZyb250ZW5kL2xpYi9lczUvc2NyaXB0cy9jb3JlL3NlcnZpY2VzL2lucHV0L2NvcmUtc2VydmljZXMtaW5wdXQuc2VydmljZSc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LXNpbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LXRleHQtc2ltcGxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LXNpbXBsZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50SW5wdXRUZXh0U2ltcGxlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ2lucHV0RWxlbWVudCcsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiB0cnVlIH0pIGlucHV0RWxlbWVudDogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PjtcblxuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBhdXRvY29tcGxldGUgPSBmYWxzZTtcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgaXRlbUNvbnRlbnRBbGlnbm1lbnQ6IHN0cmluZztcbiAgQElucHV0KCkgY2xhc3M6IHN0cmluZztcbiAgQElucHV0KCkgdmFsdWU6IHN0cmluZyA9IG51bGw7XG5cbiAgQElucHV0KCkgbWFzazogc3RyaW5nIHwgSUN1cnJlbmN5VHlwZXM7XG4gIEBJbnB1dCgpIG1hc2tTeW1ib2w6IHN0cmluZztcbiAgQElucHV0KCkgbWF4TGVuZ3RoID0gMjU1O1xuXG4gIEBPdXRwdXQoKSBjdXJyZW50VmFsdWUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvbktleVVwKGFyZ3MpIHtcbiAgICBpZiAoYXJncy50YXJnZXQudmFsdWUudHJpbSgpLmxlbmd0aCA+IDApIHsgYXJncy50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgncmVxdWlyZWQtZmlsbCcpOyB9XG4gICAgdGhpcy5jdXJyZW50VmFsdWUuZW1pdCh7IHZhbHVlOiBhcmdzLnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMubWFzayAhPSBudWxsICYmIHRoaXMubWFzay5pbmNsdWRlcygnY3VycmVuY3knKSkge1xuICAgICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LnBsYWNlaG9sZGVyID0gSW5wdXRNYXNrLmN1cnJlbmN5KHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMubWFzayBhcyBJQ3VycmVuY3lUeXBlcywgdGhpcy5tYXNrU3ltYm9sKTtcbiAgICAgIH1cbiAgICB9LCAwKTtcbiAgfVxufVxuIl19