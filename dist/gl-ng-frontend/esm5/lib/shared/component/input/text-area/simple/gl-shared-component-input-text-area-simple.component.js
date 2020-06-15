import { __decorate } from "tslib";
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import * as ɵngcc0 from '@angular/core';

var _c0 = ["textArea"];
var _c1 = ["*"];
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
GlSharedComponentInputTextAreaSimpleComponent.ɵfac = function GlSharedComponentInputTextAreaSimpleComponent_Factory(t) { return new (t || GlSharedComponentInputTextAreaSimpleComponent)(); };
GlSharedComponentInputTextAreaSimpleComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentInputTextAreaSimpleComponent, selectors: [["gl-shared-component-input-text-area-simple"]], viewQuery: function GlSharedComponentInputTextAreaSimpleComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c0, true, ElementRef);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.textArea = _t.first);
    } }, inputs: { disabled: "disabled", value: "value", id: "id", labelAlignment: "labelAlignment", labelValue: "labelValue", placeholder: "placeholder", itemContentAlignment: "itemContentAlignment", class: "class", maxLength: "maxLength" }, outputs: { currentValue: "currentValue" }, ngContentSelectors: _c1, decls: 4, vars: 9, consts: [[1, "item-container"], [3, "id", "placeholder", "value", "disabled", "maxLength", "keyup"], ["textArea", ""]], template: function GlSharedComponentInputTextAreaSimpleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementStart(2, "textarea", 1, 2);
        ɵngcc0.ɵɵlistener("keyup", function GlSharedComponentInputTextAreaSimpleComponent_Template_textarea_keyup_2_listener($event) { return ctx.onKeyUp($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵclassMapInterpolate2("item-content ", ctx.itemContentAlignment, " ", ctx.class, "");
        ɵngcc0.ɵɵproperty("id", ctx.id)("placeholder", ctx.placeholder)("value", ctx.value)("disabled", ctx.disabled)("maxLength", ctx.maxLength);
    } }, styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);[_nghost-%COMP%]  .item-container .item-content::-webkit-scrollbar:horizontal{height:.5em}[_nghost-%COMP%]  .item-container .item-content::-webkit-scrollbar{width:.5em}[_nghost-%COMP%]  .item-container .item-content::-webkit-scrollbar-button{background-color:#333437;display:none!important}[_nghost-%COMP%]  .item-container .item-content::-webkit-scrollbar-track-piece{background-color:#2c2c2f}[_nghost-%COMP%]  .item-container .item-content::-webkit-scrollbar-thumb{background-color:#64666c;border:1px solid #38393c}.required-fill[_ngcontent-%COMP%]{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:.2s ease-in-out}.required-fill[_ngcontent-%COMP%]::-moz-placeholder{color:rgba(255,255,255,.3)!important}.required-fill[_ngcontent-%COMP%]:-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.required-fill[_ngcontent-%COMP%]::-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.required-fill[_ngcontent-%COMP%]::placeholder{color:rgba(255,255,255,.3)!important}.error-highlight[_ngcontent-%COMP%]{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:.2s ease-in-out}.error-highlight[_ngcontent-%COMP%]::-moz-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight[_ngcontent-%COMP%]:-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight[_ngcontent-%COMP%]::-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight[_ngcontent-%COMP%]::placeholder{color:rgba(255,255,255,.3)!important}[_nghost-%COMP%] {display:flex;flex:1 0 auto}[_nghost-%COMP%]  .item-container{position:relative;display:flex;flex-direction:column;align-items:stretch;flex:1 0 auto}[_nghost-%COMP%]  .item-container gl-shared-component-title-label-simple{flex-grow:0}[_nghost-%COMP%]  .item-container .item-content{scrollbar-face-color:#333437!important;scrollbar-shadow-color:#38393c!important;scrollbar-track-color:#2c2c2f!important;scrollbar-arrow-color:#64666c!important;font-family:Montserrat,sans-serif;font-weight:300;resize:none;padding:.8em;font-size:.45em;text-align:left;flex-grow:1;overflow-x:hidden;overflow-y:auto;background-color:#333437;border:none;color:#fff}[_nghost-%COMP%]  .item-container .item-content:focus{outline:0!important}[_nghost-%COMP%]  .item-container .item-content::-moz-placeholder{color:#64666c}[_nghost-%COMP%]  .item-container .item-content::-ms-input-placeholder{color:#64666c}[_nghost-%COMP%]  .item-container .item-content::placeholder{color:#64666c}[_nghost-%COMP%]  .item-container .item-content.light{background-color:rgba(0,0,0,.1)}[_nghost-%COMP%]  .item-container .item-content.dark{background-color:#161617}[_nghost-%COMP%]  .item-container .item-content:-ms-input-placeholder{color:#64666c!important}[_nghost-%COMP%]  .item-container .item-content.light:-ms-input-placeholder{color:rgba(255,255,255,.2)!important}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){[_nghost-%COMP%]  .item-container .scroll-wrapper{height:0%}[_nghost-%COMP%]  .item-container .scroll-wrapper .scroll-content .item-content{height:100%!important;margin-right:0}}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentInputTextAreaSimpleComponent, [{
        type: Component,
        args: [{
                selector: 'gl-shared-component-input-text-area-simple',
                template: "<div class=\"item-container\">\n  <ng-content></ng-content>\n  <!--suppress HtmlFormInputWithoutLabel -->\n  <textarea\n    #textArea\n    class=\"item-content {{ itemContentAlignment }} {{ class }}\"\n    [id]=\"id\"\n    [placeholder]=\"placeholder\"\n    (keyup)=\"onKeyUp($event)\"\n    [value]=\"value\"\n    [disabled]=\"disabled\"\n    [maxLength]=\"maxLength\"\n  ></textarea>\n</div>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep .item-container .item-content::-webkit-scrollbar:horizontal{height:.5em}:host::ng-deep .item-container .item-content::-webkit-scrollbar{width:.5em}:host::ng-deep .item-container .item-content::-webkit-scrollbar-button{background-color:#333437;display:none!important}:host::ng-deep .item-container .item-content::-webkit-scrollbar-track-piece{background-color:#2c2c2f}:host::ng-deep .item-container .item-content::-webkit-scrollbar-thumb{background-color:#64666c;border:1px solid #38393c}.required-fill{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:.2s ease-in-out}.required-fill::-moz-placeholder{color:rgba(255,255,255,.3)!important}.required-fill:-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.required-fill::-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.required-fill::placeholder{color:rgba(255,255,255,.3)!important}.error-highlight{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:.2s ease-in-out}.error-highlight::-moz-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight:-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight::-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight::placeholder{color:rgba(255,255,255,.3)!important}:host::ng-deep{display:flex;flex:1 0 auto}:host::ng-deep .item-container{position:relative;display:flex;flex-direction:column;align-items:stretch;flex:1 0 auto}:host::ng-deep .item-container gl-shared-component-title-label-simple{flex-grow:0}:host::ng-deep .item-container .item-content{scrollbar-face-color:#333437!important;scrollbar-shadow-color:#38393c!important;scrollbar-track-color:#2c2c2f!important;scrollbar-arrow-color:#64666c!important;font-family:Montserrat,sans-serif;font-weight:300;resize:none;padding:.8em;font-size:.45em;text-align:left;flex-grow:1;overflow-x:hidden;overflow-y:auto;background-color:#333437;border:none;color:#fff}:host::ng-deep .item-container .item-content:focus{outline:0!important}:host::ng-deep .item-container .item-content::-moz-placeholder{color:#64666c}:host::ng-deep .item-container .item-content::-ms-input-placeholder{color:#64666c}:host::ng-deep .item-container .item-content::placeholder{color:#64666c}:host::ng-deep .item-container .item-content.light{background-color:rgba(0,0,0,.1)}:host::ng-deep .item-container .item-content.dark{background-color:#161617}:host::ng-deep .item-container .item-content:-ms-input-placeholder{color:#64666c!important}:host::ng-deep .item-container .item-content.light:-ms-input-placeholder{color:rgba(255,255,255,.2)!important}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){:host::ng-deep .item-container .scroll-wrapper{height:0%}:host::ng-deep .item-container .scroll-wrapper .scroll-content .item-content{height:100%!important;margin-right:0}}"]
            }]
    }], function () { return []; }, { disabled: [{
            type: Input
        }], value: [{
            type: Input
        }], currentValue: [{
            type: Output
        }], textArea: [{
            type: ViewChild,
            args: ['textArea', { read: ElementRef, static: true }]
        }], id: [{
            type: Input
        }], labelAlignment: [{
            type: Input
        }], labelValue: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], itemContentAlignment: [{
            type: Input
        }], class: [{
            type: Input
        }], maxLength: [{
            type: Input
        }] }); })();
    return GlSharedComponentInputTextAreaSimpleComponent;
}());
export { GlSharedComponentInputTextAreaSimpleComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LWFyZWEtc2ltcGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsibmc6L2dsLW5nLWZyb250ZW5kL2xpYi9zaGFyZWQvY29tcG9uZW50L2lucHV0L3RleHQtYXJlYS9zaW1wbGUvZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LWFyZWEtc2ltcGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTzlGOzs7O0VBZUUsbUVBWlMsckVBSFg7Q0FHbUIsR0FBRyxLQUFLLENBQUMsU0FRakIsVUFBSyxHQUFHLEVBQUUsQ0FBQyxTQUVWLGlCQUFZLDdEQVpKLElBY2xCO0NBRnlCLElBQUksWUFBWSxFQUFFLENBQUMsS0FFNUIsQ0FBQywxQkFHRyxRQWZYLGFBQVEsR0FBRyxLQUFLLENBQUM7QUFjMUIsQUFiRixRQU9XLFVBQUssR0FBRyxFQUFFLENBQUM7c0NBTWIsR0FBUCx6Q0FMRixRQUNZLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztHQUlwQyxIQUhWLElBQ2tCLENBQUM7Q0FFTCxZQUNWLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBRWhDLElBQUksS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsakZBSmpDLElBQ0UsK0RBQU8sR0FBUCxVQUFRLElBQUk7T0FJUixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxuQ0FIbEMsUUFBSSxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztLQUdPLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLDlCQUZwRSxRQUNJLElBQUksS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Q0FFNUIsU0FFRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQyxLQUNwQyxDQUFDLE1BeEIwRCwvREFvQjdELFlBQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztTQXBCakUsVEFxQkgsU0FBSztRQXJCTyxDQUFDLFVBQVUsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLGpEQXNCckQsUUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQztHQXZCbUIsRUFBRSxDQUFDLE5Bd0I1RCxJQUFFLENBQUM7QUFDRixJQXpCNEQ7QUFBYSxRQUF2RSxTQUFTLENBQUMsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7QUFBMkMsTUFFNUYscUJBQVIsS0FBSyxFQUFFLGxDQUZtRCxtRkFBMEM7QUFFdkcsSUFBVztBQUFhLFFBQXJCLEtBQUssRUFBRTtBQUFrQixNQUNqQixxQkFBUixLQUFLLEVBQUUsbENBREMsbUZBQWlCO0FBQzNCLElBQVU7VUFBVyxWQUNyQixRQURFLEtBQUssRUFBRTtBQUNDLHFCQUFSLEtBQUssRUFBRSw1QkFEQyw2RUFBVztBQUNyQixJQUFVOztNQUF1QixOQUF2Qix5RkFBdUI7SUFDdkIsSkFBVixJQUFVO1FBQVIsS0FBSyxFQUFFLGZBQWMsUUFBckIsS0FBSyxFQUFFO3FGQUFvQixyRkFBbkIscUZBQW1CO0lBQ25CLEpBQVYsSUFBVTtRQUFSLEtBQUssRUFBRSxmQUFjLFFBQXJCLEtBQUssRUFBRTtzRkFBcUIsdEZBQXBCLHNGQUFvQjtJQUNwQixKQUFWLElBQVU7UUFBUixLQUFLLEVBQUUsZkFBYyxRQUFyQixLQUFLLEVBQUU7K0ZBQThCLC9GQUE3QiwrRkFBNkI7SUFDN0IsSkFBVixJQUFVO1FBQVIsS0FBSyxFQUFFLGZBQWMsUUFBckIsS0FBSyxFQUFFO2dGQUFlLGhGQUFkLGdGQUFjO0lBRWQsSkFBWCxJQUFXO1FBQVIsS0FBSyxFQUFFLGZBQ1QsUUFERSxLQUFLLEVBQUU7Z0ZBQVksaEZBQVgsZ0ZBQVc7SUFDWCxKQUFWLElBQVU7UUFBUixLQUFLLEVBQUUsZkFBYyxRQUFyQixLQUFLLEVBQUU7b0ZBQW1CLHBGQUFsQixvRkFBa0I7SUFDakIsSkFBWCxJQUFXO1FBQVQsTUFBTSxFQUFFLGhCQUFjLFFBQXRCLE1BQU0sRUFBRTt1RkFBbUMsdkZBQWxDLHVGQUFrQztJQWJqQyw2Q0FBNkMsd0JBTHpELFNBQVMsQ0FBQyxjQUNULFFBQVEsRUFBRSw0Q0FBNEMsY0FDdEQsaktBR1csNkNBQTZDLHdCQUx6RCxTQUFTLENBQUMsY0FDVCxRQUFRLEVBQUUsNENBQTRDLGNBQ3REOzs7O1lBQTBFLEFBQUE7Ozs7Ozs7Ozs7Ozs7O3FyREFFM0UsQ0FBQyxRQUNXLDZDQUE2QyxDQTBCekQsTUFBRCxvREFBQyxHQUFBLEFBMUJELElBMEJDLFVBMUJZLDZDQUE2QywvS0FEekQsQ0FBQyxRQUNXLDZDQUE2QyxDQTBCekQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQ0Q7QUFBQyxJQURELG9EQUFDO0FBQ0EsQ0FEQSxBQTFCRCxJQTBCQzs7QUFqQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LXRleHQtYXJlYS1zaW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LWFyZWEtc2ltcGxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LWFyZWEtc2ltcGxlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRJbnB1dFRleHRBcmVhU2ltcGxlQ29tcG9uZW50IHtcbiAgQFZpZXdDaGlsZCgndGV4dEFyZWEnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZSB9KSB0ZXh0QXJlYTogRWxlbWVudFJlZjxIVE1MVGV4dEFyZWFFbGVtZW50PjtcblxuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBpZDogc3RyaW5nO1xuICBASW5wdXQoKSBsYWJlbEFsaWdubWVudDogc3RyaW5nO1xuICBASW5wdXQoKSBsYWJlbFZhbHVlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGl0ZW1Db250ZW50QWxpZ25tZW50OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgdmFsdWUgPSAnJztcbiAgQElucHV0KCkgbWF4TGVuZ3RoOiBudW1iZXI7XG4gIEBPdXRwdXQoKSBjdXJyZW50VmFsdWUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBvbktleVVwKGFyZ3MpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGFyZ3MudGFyZ2V0LnZhbHVlO1xuXG4gICAgaWYgKHZhbHVlLnRyaW0oKS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnRleHRBcmVhLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgncmVxdWlyZWQtZmlsbCcpO1xuICAgIH1cblxuICAgIHRoaXMuY3VycmVudFZhbHVlLmVtaXQoeyB2YWx1ZSB9KTtcbiAgfVxufVxuIl19