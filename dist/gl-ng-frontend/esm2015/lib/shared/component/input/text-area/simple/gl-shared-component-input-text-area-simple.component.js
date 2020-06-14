import { __decorate } from "tslib";
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import * as ɵngcc0 from '@angular/core';

const _c0 = ["textArea"];
const _c1 = ["*"];
let GlSharedComponentInputTextAreaSimpleComponent = class GlSharedComponentInputTextAreaSimpleComponent {
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
};
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
    } }, styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);[_nghost-%COMP%]  .item-container .item-content::-webkit-scrollbar:horizontal{height:.5em!important}[_nghost-%COMP%]  .item-container .item-content::-webkit-scrollbar:vertical{width:.5em!important}[_nghost-%COMP%]  .item-container .item-content::-webkit-scrollbar-button{background-color:#333437!important;display:none!important}[_nghost-%COMP%]  .item-container .item-content::-webkit-scrollbar-track{background-color:green!important}[_nghost-%COMP%]  .item-container .item-content::-webkit-scrollbar-track-piece{background-color:#2c2c2f!important}[_nghost-%COMP%]  .item-container .item-content::-webkit-scrollbar-thumb{background-color:#64666c!important;border:1px solid #38393c!important}.required-fill[_ngcontent-%COMP%]{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:.2s ease-in-out}.required-fill[_ngcontent-%COMP%]::-moz-placeholder{color:rgba(255,255,255,.3)!important}.required-fill[_ngcontent-%COMP%]:-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.required-fill[_ngcontent-%COMP%]::-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.required-fill[_ngcontent-%COMP%]::placeholder{color:rgba(255,255,255,.3)!important}.error-highlight[_ngcontent-%COMP%]{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:.2s ease-in-out}.error-highlight[_ngcontent-%COMP%]::-moz-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight[_ngcontent-%COMP%]:-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight[_ngcontent-%COMP%]::-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight[_ngcontent-%COMP%]::placeholder{color:rgba(255,255,255,.3)!important}[_nghost-%COMP%] {display:flex;flex:1 0 auto}[_nghost-%COMP%]  .item-container{position:relative;display:flex;flex-direction:column;align-items:stretch;margin:.5px;flex:1 0 auto}[_nghost-%COMP%]  .item-container gl-shared-component-title-label-simple{flex-grow:0}[_nghost-%COMP%]  .item-container .item-content{scrollbar-face-color:#333437!important;scrollbar-shadow-color:#38393c!important;scrollbar-track-color:#2c2c2f!important;scrollbar-arrow-color:#64666c!important;font-family:Montserrat,sans-serif;font-weight:300;resize:none;padding:.8em;font-size:.45em;text-align:left;flex-grow:1;overflow-x:hidden;overflow-y:auto;background-color:#333437;border:none;color:#fff}[_nghost-%COMP%]  .item-container .item-content:focus{outline:0!important}[_nghost-%COMP%]  .item-container .item-content::-moz-placeholder{color:#64666c}[_nghost-%COMP%]  .item-container .item-content::-ms-input-placeholder{color:#64666c}[_nghost-%COMP%]  .item-container .item-content::placeholder{color:#64666c}[_nghost-%COMP%]  .item-container .item-content.light{background-color:rgba(0,0,0,.1)}[_nghost-%COMP%]  .item-container .item-content:-ms-input-placeholder{color:#64666c!important}[_nghost-%COMP%]  .item-container .item-content.light:-ms-input-placeholder{color:rgba(255,255,255,.2)!important}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){[_nghost-%COMP%]  .item-container .scroll-wrapper{height:0%}[_nghost-%COMP%]  .item-container .scroll-wrapper .scroll-content .item-content{height:100%!important;margin-right:0}}"] });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentInputTextAreaSimpleComponent, [{
        type: Component,
        args: [{
                selector: 'gl-shared-component-input-text-area-simple',
                template: "<div class=\"item-container\">\n  <ng-content></ng-content>\n  <!--suppress HtmlFormInputWithoutLabel -->\n  <textarea\n    #textArea\n    class=\"item-content {{ itemContentAlignment }} {{ class }}\"\n    [id]=\"id\"\n    [placeholder]=\"placeholder\"\n    (keyup)=\"onKeyUp($event)\"\n    [value]=\"value\"\n    [disabled]=\"disabled\"\n    [maxLength]=\"maxLength\"\n  ></textarea>\n</div>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep .item-container .item-content::-webkit-scrollbar:horizontal{height:.5em!important}:host::ng-deep .item-container .item-content::-webkit-scrollbar:vertical{width:.5em!important}:host::ng-deep .item-container .item-content::-webkit-scrollbar-button{background-color:#333437!important;display:none!important}:host::ng-deep .item-container .item-content::-webkit-scrollbar-track{background-color:green!important}:host::ng-deep .item-container .item-content::-webkit-scrollbar-track-piece{background-color:#2c2c2f!important}:host::ng-deep .item-container .item-content::-webkit-scrollbar-thumb{background-color:#64666c!important;border:1px solid #38393c!important}.required-fill{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:.2s ease-in-out}.required-fill::-moz-placeholder{color:rgba(255,255,255,.3)!important}.required-fill:-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.required-fill::-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.required-fill::placeholder{color:rgba(255,255,255,.3)!important}.error-highlight{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:.2s ease-in-out}.error-highlight::-moz-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight:-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight::-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight::placeholder{color:rgba(255,255,255,.3)!important}:host::ng-deep{display:flex;flex:1 0 auto}:host::ng-deep .item-container{position:relative;display:flex;flex-direction:column;align-items:stretch;margin:.5px;flex:1 0 auto}:host::ng-deep .item-container gl-shared-component-title-label-simple{flex-grow:0}:host::ng-deep .item-container .item-content{scrollbar-face-color:#333437!important;scrollbar-shadow-color:#38393c!important;scrollbar-track-color:#2c2c2f!important;scrollbar-arrow-color:#64666c!important;font-family:Montserrat,sans-serif;font-weight:300;resize:none;padding:.8em;font-size:.45em;text-align:left;flex-grow:1;overflow-x:hidden;overflow-y:auto;background-color:#333437;border:none;color:#fff}:host::ng-deep .item-container .item-content:focus{outline:0!important}:host::ng-deep .item-container .item-content::-moz-placeholder{color:#64666c}:host::ng-deep .item-container .item-content::-ms-input-placeholder{color:#64666c}:host::ng-deep .item-container .item-content::placeholder{color:#64666c}:host::ng-deep .item-container .item-content.light{background-color:rgba(0,0,0,.1)}:host::ng-deep .item-container .item-content:-ms-input-placeholder{color:#64666c!important}:host::ng-deep .item-container .item-content.light:-ms-input-placeholder{color:rgba(255,255,255,.2)!important}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){:host::ng-deep .item-container .scroll-wrapper{height:0%}:host::ng-deep .item-container .scroll-wrapper .scroll-content .item-content{height:100%!important;margin-right:0}}"]
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
export { GlSharedComponentInputTextAreaSimpleComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LWFyZWEtc2ltcGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsibmc6L2dsLW5nLWZyb250ZW5kL2xpYi9zaGFyZWQvY29tcG9uZW50L2lucHV0L3RleHQtYXJlYS9zaW1wbGUvZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LWFyZWEtc2ltcGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTzlGLElBQWE7O09BQTZDLEdBQTFELE1BQWE7O2dCQUE2QyxPQWV4RCx3QkFaUyxhQUFRLEdBQUcsS0FBSyxDQUFDLFNBUWpCLFVBQUssR0FBRyxFQUFFLENBQUMsU0FFVix2R0FiWixJQUFhLDZDQUE2QyxHQUExRCxNQUFhLDZDQUE2QztjQWFsQyxHQUFHLGpCQVozQixJQWNFO0NBRjZCLFlBQVksRUFBRSxDQUFDLEtBRTVCLENBQUMsS0FFakIsM0JBRmdCLFFBWlAsYUFBUSxHQUFHLEtBQUssQ0FBQztHQWNuQixDQUFDLElBQUksWUFDVixwQkFkSixRQU9XLFVBQUssR0FBRyxFQUFFLENBQUM7Q0FPWixLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FFaEMsSUFBSSxLQUFLLENBQUMsOUNBUmQsUUFDWSxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7RUFPNUIsRUFBRSxDQUFDLExBTnJCLElBQ2tCLENBQUM7S0FLUSxHQUFHLENBQUMsRUFBRSxYQUpqQyxJQUNFLE9BQU8sQ0FBQyxJQUFJO0tBSVIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsakNBSGxDLFFBQUksTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7Q0FHTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxVQUMvRCxwQ0FITCxRQUNJLElBQUksS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7TUFJN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQ3BDLENBQUMsRUFDRixDQUFBLENBekI0RCxpQkFBMUQsbkVBb0JILFlBQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztDQXBCeEQsQ0FBQyxGQXFCYixTQUFLO0VBckJrQixFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsdkNBc0I1RCxRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUN0QyxJQUFFLENBQUM7QUFDSCxDQUFDO21FQXpCc0csRUFFNUYsaUJBQVIsS0FBSyxFQUFFLGdGQUFrQixFQUNqQjtDQUFSLEtBQUssRUFBRSwwRUFBWSxFQUNYOzs7Ozs7Ozs7Ozs7Ozs7OzsrekdBcUJWO0FBekI0RDtBQUFhLElBQXZFLFNBQVMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztBQUFDLCtFQUEwQztBQUU1RjtBQUFhLElBQXJCLEtBQUssRUFBRTtBQUFDLCtFQUFpQjtBQUNqQjtBQUNWLElBREUsS0FBSyxFQUFFOztBQUNDO0lBQVIsS0FBSyxFQUFFLFhBQWMsSUFBckIsS0FBSyxFQUFFO3FGQUF3QixyRkFBdkIscUZBQXVCO0FBQ3ZCLEFBQUE7SUFBUixLQUFLLEVBQUUsWEFBYyxJQUFyQixLQUFLLEVBQUU7aUZBQW9CLGpGQUFuQixpRkFBbUI7QUFDbkIsQUFBQTtJQUFSLEtBQUssRUFBRSxYQUFjLElBQXJCLEtBQUssRUFBRTtrRkFBcUIsbEZBQXBCLGtGQUFvQjtBQUNwQixBQUFBO0lBQVIsS0FBSyxFQUFFLFhBQWMsSUFBckIsS0FBSyxFQUFFOzJGQUE4QiwzRkFBN0IsMkZBQTZCO0FBQzdCLEFBQUE7SUFBUixLQUFLLEVBQUUsWEFBYyxJQUFyQixLQUFLLEVBQUU7NEVBQWUsNUVBQWQsNEVBQWM7QUFFZCxBQUFBO0lBQVIsS0FBSyxFQUFFLFhBQ1QsSUFERSxLQUFLLEVBQUU7NEVBQVksNUVBQVgsNEVBQVc7QUFDWCxBQUFBO0lBQVIsS0FBSyxFQUFFLFhBQWMsSUFBckIsS0FBSyxFQUFFO2dGQUFtQixoRkFBbEIsZ0ZBQWtCO0FBQ2pCLEFBQUE7SUFBVCxNQUFNLEVBQUUsWkFBYyxJQUF0QixNQUFNLEVBQUU7bUZBQW1DLG5GQUFsQyxtRkFBa0M7QUFiakMsNkNBQTZDLG9CQUx6RCxTQUFTLENBQUMsVUFDVCxRQUFRLEVBQUUsL0ZBSUMsNkNBQTZDLG9CQUx6RCxTQUFTLENBQUMsVUFDVCxRQUFRLEVBQUU7O1VBQTRDLEFBQUE7R0FDdEQsQUFBQTtpVkFBMEUsQUFBQTtvL0ZBRTNFLENBQUMsSUFDVyw2Q0FBNkMsQ0EwQnpELFdBMUJZLDlEQURaLENBQUMsSUFDVyw2Q0FBNkMsQ0EwQnpEOztJQTFCeUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQTJCMUQ7O0FBbENBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LWFyZWEtc2ltcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtdGV4dC1hcmVhLXNpbXBsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtdGV4dC1hcmVhLXNpbXBsZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50SW5wdXRUZXh0QXJlYVNpbXBsZUNvbXBvbmVudCB7XG4gIEBWaWV3Q2hpbGQoJ3RleHRBcmVhJywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IHRydWUgfSkgdGV4dEFyZWE6IEVsZW1lbnRSZWY8SFRNTFRleHRBcmVhRWxlbWVudD47XG5cbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcbiAgQElucHV0KCkgbGFiZWxBbGlnbm1lbnQ6IHN0cmluZztcbiAgQElucHV0KCkgbGFiZWxWYWx1ZTogc3RyaW5nO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBpdGVtQ29udGVudEFsaWdubWVudDogc3RyaW5nO1xuICBASW5wdXQoKSBjbGFzczogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIHZhbHVlID0gJyc7XG4gIEBJbnB1dCgpIG1heExlbmd0aDogbnVtYmVyO1xuICBAT3V0cHV0KCkgY3VycmVudFZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgb25LZXlVcChhcmdzKSB7XG4gICAgY29uc3QgdmFsdWUgPSBhcmdzLnRhcmdldC52YWx1ZTtcblxuICAgIGlmICh2YWx1ZS50cmltKCkubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy50ZXh0QXJlYS5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3JlcXVpcmVkLWZpbGwnKTtcbiAgICB9XG5cbiAgICB0aGlzLmN1cnJlbnRWYWx1ZS5lbWl0KHsgdmFsdWUgfSk7XG4gIH1cbn1cbiJdfQ==