import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import * as ɵngcc0 from '@angular/core';

var _c0 = ["*"];
var GlSharedComponentFilterContainerComponent = /** @class */ (function () {
    function GlSharedComponentFilterContainerComponent() {
    }
    __decorate([
        Input()
    ], GlSharedComponentFilterContainerComponent.prototype, "label", void 0);
GlSharedComponentFilterContainerComponent.ɵfac = function GlSharedComponentFilterContainerComponent_Factory(t) { return new (t || GlSharedComponentFilterContainerComponent)(); };
GlSharedComponentFilterContainerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentFilterContainerComponent, selectors: [["gl-shared-component-filter-container"]], inputs: { label: "label" }, ngContentSelectors: _c0, decls: 4, vars: 1, consts: [[1, "type-container"], [1, "title"]], template: function GlSharedComponentFilterContainerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "label", 1);
        ɵngcc0.ɵɵtext(2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵprojection(3);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.label);
    } }, styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);[_nghost-%COMP%]  .type-container{display:flex;flex-direction:column;background-color:#2c2c2f;padding:.7em .7em .2em;border-bottom:1px solid #38393c}[_nghost-%COMP%]  .type-container .title{font-family:Montserrat,sans-serif;font-weight:400;color:#d24077;text-transform:uppercase;font-size:.4em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentFilterContainerComponent, [{
        type: Component,
        args: [{
                selector: 'gl-shared-component-filter-container',
                template: "<div class=\"type-container\">\n  <label class=\"title\">{{ label }}</label>\n  <ng-content></ng-content>\n</div>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep .type-container{display:flex;flex-direction:column;background-color:#2c2c2f;padding:.7em .7em .2em;border-bottom:1px solid #38393c}:host::ng-deep .type-container .title{font-family:Montserrat,sans-serif;font-weight:400;color:#d24077;text-transform:uppercase;font-size:.4em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}"]
            }]
    }], function () { return []; }, { label: [{
            type: Input
        }] }); })();
    return GlSharedComponentFilterContainerComponent;
}());
export { GlSharedComponentFilterContainerComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1maWx0ZXItY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsibmc6L2dsLW5nLWZyb250ZW5kL2xpYi9zaGFyZWQvY29tcG9uZW50L2ZpbHRlci9jb250YWluZXIvZ2wtc2hhcmVkLWNvbXBvbmVudC1maWx0ZXItY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPakQ7OztzQkFHRSx0QkFIRjtJQUdrQixDQUFDLEtBRlIscUJBQVIsS0FBSyxFQUFFLHRDQUFVLElBRWxCO0FBRWlDLElBRmpCLENBQUM7O0FBRkssUUFBckIsS0FBSyxFQUFFOzRFQUFlLDVFQUFkLDRFQUFjO0lBRFoseUNBQXlDLHdCQUxyRCxTQUFTLENBQUMsY0FDVCxRQUFRLEVBQUUsc0NBQXNDLGNBQ2hELHZKQUdXLHlDQUF5Qyx3QkFMckQsU0FBUyxDQUFDLGNBQ1QsUUFBUSxFQUFFLHNDQUFzQyxjQUNoRDt1R0FBb0UsQUFBQTs7Ozs7OztLQUVyRSxDQUFDLFFBQ1csVEFEWixDQUFDLFFBQ1c7O0lBQXlDLENBSXJELE1BQUQsUEFKc0QsQ0FJckQ7OEJBQUEsR0FBQSxBQUpELElBSUM7RUFKWSx5Q0FBeUM7Ozs7Ozs7Ozs7b0JBS3REO0FBQUMsSUFERCxnREFBQztBQUNBLENBREEsQUFKRCxJQUlDOztBQVhBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LWZpbHRlci1jb250YWluZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1maWx0ZXItY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1maWx0ZXItY29udGFpbmVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRGaWx0ZXJDb250YWluZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iXX0=