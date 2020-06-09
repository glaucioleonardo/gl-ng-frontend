import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
var GlSharedComponentInputButtonSimpleComponent = /** @class */ (function () {
    function GlSharedComponentInputButtonSimpleComponent() {
    }
    __decorate([
        Input()
    ], GlSharedComponentInputButtonSimpleComponent.prototype, "value", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputButtonSimpleComponent.prototype, "class", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputButtonSimpleComponent.prototype, "innerValue", void 0);
GlSharedComponentInputButtonSimpleComponent.ɵfac = function GlSharedComponentInputButtonSimpleComponent_Factory(t) { return new (t || GlSharedComponentInputButtonSimpleComponent)(); };
GlSharedComponentInputButtonSimpleComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentInputButtonSimpleComponent, selectors: [["gl-shared-component-input-button-simple"]], inputs: { value: "value", class: "class", innerValue: "innerValue" }, decls: 2, vars: 5, consts: [["type", "button", 3, "value"]], template: function GlSharedComponentInputButtonSimpleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "button", 0);
        ɵngcc0.ɵɵtext(1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate1("default-button ", ctx.class, "");
        ɵngcc0.ɵɵproperty("value", ctx.value);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate(ctx.innerValue);
    } }, styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);[_nghost-%COMP%] {display:flex;flex:1 1 0px;height:2em}[_nghost-%COMP%]  .default-button{font-family:Montserrat,sans-serif;font-weight:700;border:none;font-size:.5em;text-transform:uppercase;flex:1 1 0px;background-color:#d24077;color:#fff}[_nghost-%COMP%]  .default-button.light-translucid{font-family:Montserrat,sans-serif;font-weight:300;background-color:rgba(255,255,255,.1)}[_nghost-%COMP%]  .default-button:focus, [_nghost-%COMP%]  .default-button:hover{opacity:1;transition:.3s ease-in-out}[_nghost-%COMP%]  .light-translucid.default-button:focus, [_nghost-%COMP%]  .light-translucid.default-button:hover{font-family:Montserrat,sans-serif;font-weight:300;background-color:rgba(255,255,255,.9);color:#4b4d52}[_nghost-%COMP%]  .default-button:not(hover){opacity:.7;transition:.3s ease-in-out}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentInputButtonSimpleComponent, [{
        type: Component,
        args: [{
                selector: 'gl-shared-component-input-button-simple',
                template: "<button\n  type=\"button\"\n  class=\"default-button {{ class }}\"\n  [value]=\"value\"\n>{{ innerValue }}</button>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep{display:flex;flex:1 1 0px;height:2em}:host::ng-deep .default-button{font-family:Montserrat,sans-serif;font-weight:700;border:none;font-size:.5em;text-transform:uppercase;flex:1 1 0px;background-color:#d24077;color:#fff}:host::ng-deep .default-button.light-translucid{font-family:Montserrat,sans-serif;font-weight:300;background-color:rgba(255,255,255,.1)}:host::ng-deep .default-button:focus,:host::ng-deep .default-button:hover{opacity:1;transition:.3s ease-in-out}:host::ng-deep .light-translucid.default-button:focus,:host::ng-deep .light-translucid.default-button:hover{font-family:Montserrat,sans-serif;font-weight:300;background-color:rgba(255,255,255,.9);color:#4b4d52}:host::ng-deep .default-button:not(hover){opacity:.7;transition:.3s ease-in-out}"]
            }]
    }], function () { return []; }, { value: [{
            type: Input
        }], class: [{
            type: Input
        }], innerValue: [{
            type: Input
        }] }); })();
    return GlSharedComponentInputButtonSimpleComponent;
}());
export { GlSharedComponentInputButtonSimpleComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1idXR0b24tc2ltcGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsibmc6L2dsLW5nLWZyb250ZW5kL2xpYi9zaGFyZWQvY29tcG9uZW50L2lucHV0L2J1dHRvbi9zaW1wbGUvZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1idXR0b24tc2ltcGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPakQ7MENBS0UsMUNBTEY7d0JBS2tCLENBQUMsS0FKUixxQkFBUixLQUFLLEVBQUUsMURBQVUsSUFJbEI7QUFFbUMsSUFGbkIsQ0FBQztBQUNuQixJQUxXO0FBQWEsUUFBckIsS0FBSyxFQUFFO3FDQUFlLE1BQ2QscUJBQVIsS0FBSyxFQUFFLHZFQURDLDhFQUFjOztBQUNELFFBQXJCLEtBQUssRUFBRTs4RUFBZSw5RUFBZCw4RUFBYztJQUNkLEpBQVYsSUFBVTtRQUFSLEtBQUssRUFBRSxmQUFjLFFBQXJCLEtBQUssRUFBRTttRkFBb0IsbkZBQW5CLG1GQUFtQjtJQUhqQiwyQ0FBMkMsd0JBTHZELFNBQVMsQ0FBQyxjQUNULFFBQVEsRUFBRSx5Q0FBeUMsY0FDbkQsNUpBR1csMkNBQTJDLHdCQUx2RCxTQUFTLENBQUMsY0FDVCxRQUFRLEVBQUUseUNBQXlDLGNBQ25EO3dHQUF1RSxBQUFBOzs7Ozs7Ozs7aVJBRXhFLENBQUMsUUFDVywyQ0FBMkMsQ0FNdkQsTUFBRCxrREFBQyxHQUFBLEFBTkQsSUFNQyxVQU5ZLDJDQUEyQyx6S0FEdkQsQ0FBQyxRQUNXLDJDQUEyQyxDQU12RDs7Ozs7Ozs7Ozs7Ozs7b0JBQ0Q7QUFBQyxJQURELGtEQUFDO0FBQ0EsQ0FEQSxBQU5ELElBTUM7O0FBYkEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtYnV0dG9uLXNpbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LWJ1dHRvbi1zaW1wbGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LWJ1dHRvbi1zaW1wbGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudElucHV0QnV0dG9uU2ltcGxlQ29tcG9uZW50IHtcbiAgQElucHV0KCkgdmFsdWU6IHN0cmluZztcbiAgQElucHV0KCkgY2xhc3M6IHN0cmluZztcbiAgQElucHV0KCkgaW5uZXJWYWx1ZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iXX0=