import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function GlSharedComponentTitleLabelButtonSimpleComponent_img_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "img", 3);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("title", ctx_r0.requiredFieldDescription);
} }
let GlSharedComponentTitleLabelButtonSimpleComponent = class GlSharedComponentTitleLabelButtonSimpleComponent {
    constructor() {
        this.required = false;
        this.requiredFieldDescription = 'Required field';
    }
};
GlSharedComponentTitleLabelButtonSimpleComponent.ɵfac = function GlSharedComponentTitleLabelButtonSimpleComponent_Factory(t) { return new (t || GlSharedComponentTitleLabelButtonSimpleComponent)(); };
GlSharedComponentTitleLabelButtonSimpleComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentTitleLabelButtonSimpleComponent, selectors: [["gl-shared-component-title-label-button-simple"]], inputs: { required: "required", requiredFieldDescription: "requiredFieldDescription", id: "id", alt: "alt", src: "src", class: "class" }, decls: 4, vars: 8, consts: [[1, "tooltip", "top"], [1, "label-button", 3, "id", "src", "alt"], ["src", "../assets/img/icon/label/dot.svg", "class", "required-fill-dot", "alt", "Required fill icon", 3, "title", 4, "ngIf"], ["src", "../assets/img/icon/label/dot.svg", "alt", "Required fill icon", 1, "required-fill-dot", 3, "title"]], template: function GlSharedComponentTitleLabelButtonSimpleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵelementStart(1, "div", 0);
        ɵngcc0.ɵɵelement(2, "img", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(3, GlSharedComponentTitleLabelButtonSimpleComponent_img_3_Template, 1, 1, "img", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate1("label-button-container ", ctx.class, "");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵattribute("alt", ctx.alt);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("id", ctx.id)("src", ctx.src, ɵngcc0.ɵɵsanitizeUrl)("alt", ctx.alt);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.required);
    } }, directives: [ɵngcc1.NgIf], styles: [".required-fill[_ngcontent-%COMP%]{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:.2s ease-in-out}.required-fill[_ngcontent-%COMP%]::-moz-placeholder{color:rgba(255,255,255,.3)!important}.required-fill[_ngcontent-%COMP%]:-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.required-fill[_ngcontent-%COMP%]::-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.required-fill[_ngcontent-%COMP%]::placeholder{color:rgba(255,255,255,.3)!important}.error-highlight[_ngcontent-%COMP%]{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:.2s ease-in-out}.error-highlight[_ngcontent-%COMP%]::-moz-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight[_ngcontent-%COMP%]:-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight[_ngcontent-%COMP%]::-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight[_ngcontent-%COMP%]::placeholder{color:rgba(255,255,255,.3)!important}.label-button-container[_ngcontent-%COMP%]{display:flex;position:absolute;top:.19em;right:.2em}.label-button-container[_ngcontent-%COMP%]   .label-button[_ngcontent-%COMP%]{cursor:pointer;height:1em;width:1em;margin:0 .1em}.label-button-container[_ngcontent-%COMP%]   .label-button[_ngcontent-%COMP%]:hover{transform:scale(1.1);opacity:1;transition:.2s ease-in-out}.label-button-container[_ngcontent-%COMP%]   .label-button[_ngcontent-%COMP%]:not(hover){transform:scale(1);opacity:.5;transition:.2s ease-in-out}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){[_nghost-%COMP%] {height:.5em}}"] });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentTitleLabelButtonSimpleComponent, [{
        type: Component,
        args: [{
                selector: 'gl-shared-component-title-label-button-simple',
                template: "<div class=\"label-button-container {{ class }}\">\n  <div\n    [attr.alt]=\"alt\"\n    class=\"tooltip top\">\n    <img\n      class=\"label-button\"\n      [id]=\"id\"\n      [src]=\"src\"\n      [alt]=\"alt\">\n  </div>\n  <img\n    *ngIf=\"required\"\n    src=\"../assets/img/icon/label/dot.svg\"\n    class=\"required-fill-dot\"\n    [title]=\"requiredFieldDescription\"\n    alt=\"Required fill icon\">\n</div>\n",
                styles: [".required-fill{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:.2s ease-in-out}.required-fill::-moz-placeholder{color:rgba(255,255,255,.3)!important}.required-fill:-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.required-fill::-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.required-fill::placeholder{color:rgba(255,255,255,.3)!important}.error-highlight{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:.2s ease-in-out}.error-highlight::-moz-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight:-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight::-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight::placeholder{color:rgba(255,255,255,.3)!important}.label-button-container{display:flex;position:absolute;top:.19em;right:.2em}.label-button-container .label-button{cursor:pointer;height:1em;width:1em;margin:0 .1em}.label-button-container .label-button:hover{transform:scale(1.1);opacity:1;transition:.2s ease-in-out}.label-button-container .label-button:not(hover){transform:scale(1);opacity:.5;transition:.2s ease-in-out}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){:host::ng-deep{height:.5em}}"]
            }]
    }], function () { return []; }, { required: [{
            type: Input
        }], requiredFieldDescription: [{
            type: Input
        }], id: [{
            type: Input
        }], alt: [{
            type: Input
        }], src: [{
            type: Input
        }], class: [{
            type: Input
        }] }); })();
export { GlSharedComponentTitleLabelButtonSimpleComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC10aXRsZS1sYWJlbC1idXR0b24tc2ltcGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsibmc6L2dsLW5nLWZyb250ZW5kL2xpYi9zaGFyZWQvY29tcG9uZW50L3RpdGxlL2xhYmVsL2J1dHRvbi9zaW1wbGUvZ2wtc2hhcmVkLWNvbXBvbmVudC10aXRsZS1sYWJlbC1idXR0b24tc2ltcGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPakQsSUFBYTtXQUFnRCxHQUE3RCxNQUFhOzt3QkFBZ0QsT0FTM0Qsd0JBSlMsYUFBUSxHQUFHLEtBQUssQ0FBQyxTQUVqQjtpQkFBd0IsR0FBVztDQUFnQixDQUFDLEtBRTdDLENBQUMsRUFDbEIsQ0FBQSxDQVJVO2FBQVIsS0FBSyxFQUFFO3NEQUFZLEVBQ1g7O0lBQVIsS0FBSyxFQUFFLDhFQUFhLEVBQ1osM0ZBSlgsSUFBYSxnREFBZ0QsR0FBN0QsTUFBYSxnREFBZ0Q7QUFDN0QsSUFRRTtBQUFnQixRQUpQLGFBQVEsR0FBRyxLQUFLLENBQUM7QUFDNUIsUUFDVyw2QkFBd0IsR0FBVyxnQkFBZ0IsQ0FBQztBQUMvRCxJQUNrQixDQUFDO0FBQ25CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O2tyREFBQTtBQVJVO0FBQ1YsSUFERSxLQUFLLEVBQUU7QUFBQyw0RUFBVztBQUNYO0FBQ1gsSUFERyxLQUFLLEVBQUU7O0FBQ0M7SUFBUixLQUFLLEVBQUUsWEFDVixJQURHLEtBQUssRUFBRTs2RUFBYSw3RUFBWiw2RUFBWTtBQUNaLEFBQUE7SUFBUixLQUFLLEVBQUUsWEFBYyxJQUFyQixLQUFLLEVBQUU7a0ZBQWtCLGxGQUFqQixrRkFBaUI7QUFDakIsQUFBQTtJQUFSLEtBQUssRUFBRSxYQUFjLElBQXJCLEtBQUssRUFBRTsrRUFBZSwvRUFBZCwrRUFBYztBQUNkLEFBQUE7SUFBUixLQUFLLEVBQUUsWEFBYyxJQUFyQixLQUFLLEVBQUU7a0dBQXFELGxHQUFwRCxrR0FBb0Q7QUFQbEQsZ0RBQWdELG9CQUw1RCxTQUFTLENBQUMsVUFDVCxRQUFRLEVBQUUsbEdBSUMsZ0RBQWdELG9CQUw1RCxTQUFTLENBQUMsVUFDVCxRQUFRLEVBQUU7O2FBQStDLEFBQUE7TUFDekQsQUFBQTt5V0FBNkUsQUFBQTt1dkNBRTlFLENBQUMsSUFDVyxnREFBZ0QsQ0FVNUQsV0FWWSxqRUFEWixDQUFDLElBQ1csZ0RBQWdELENBVTVEOztVQVY0RDs7Ozs7Ozs7Ozs7O29CQVc3RDs7QUFsQkEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtdGl0bGUtbGFiZWwtYnV0dG9uLXNpbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LXRpdGxlLWxhYmVsLWJ1dHRvbi1zaW1wbGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nbC1zaGFyZWQtY29tcG9uZW50LXRpdGxlLWxhYmVsLWJ1dHRvbi1zaW1wbGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudFRpdGxlTGFiZWxCdXR0b25TaW1wbGVDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGFsdDogc3RyaW5nO1xuICBASW5wdXQoKSBzcmM6IHN0cmluZztcbiAgQElucHV0KCkgcmVxdWlyZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgY2xhc3M6IHN0cmluZztcbiAgQElucHV0KCkgcmVxdWlyZWRGaWVsZERlc2NyaXB0aW9uOiBzdHJpbmcgPSAnUmVxdWlyZWQgZmllbGQnO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iXX0=