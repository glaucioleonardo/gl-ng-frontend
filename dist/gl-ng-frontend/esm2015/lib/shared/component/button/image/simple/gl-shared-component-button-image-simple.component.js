import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
let GlSharedComponentButtonImageSimpleComponent = class GlSharedComponentButtonImageSimpleComponent {
    constructor() { }
};
GlSharedComponentButtonImageSimpleComponent.ɵfac = function GlSharedComponentButtonImageSimpleComponent_Factory(t) { return new (t || GlSharedComponentButtonImageSimpleComponent)(); };
GlSharedComponentButtonImageSimpleComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentButtonImageSimpleComponent, selectors: [["gl-shared-component-button-image-simple"]], inputs: { id: "id", alt: "alt", src: "src", callback: "callback" }, decls: 1, vars: 3, consts: [[1, "button", 3, "id", "src", "alt", "click"]], template: function GlSharedComponentButtonImageSimpleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "img", 0);
        ɵngcc0.ɵɵlistener("click", function GlSharedComponentButtonImageSimpleComponent_Template_img_click_0_listener($event) { return ctx.callback($event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("id", ctx.id)("src", ctx.src, ɵngcc0.ɵɵsanitizeUrl)("alt", ctx.alt);
    } }, styles: ["[_nghost-%COMP%] {display:flex;align-items:center}[_nghost-%COMP%]  .button{width:1em;height:1em}[_nghost-%COMP%]  .button:not(hover){opacity:.5;transform:scale(1);transition:.2s ease-in-out}[_nghost-%COMP%]  .button:hover{opacity:1;transform:scale(1.1);transition:.2s ease-in-out}"] });
__decorate([
    Input()
], GlSharedComponentButtonImageSimpleComponent.prototype, "id", void 0);
__decorate([
    Input()
], GlSharedComponentButtonImageSimpleComponent.prototype, "alt", void 0);
__decorate([
    Input()
], GlSharedComponentButtonImageSimpleComponent.prototype, "src", void 0);
__decorate([
    Input()
], GlSharedComponentButtonImageSimpleComponent.prototype, "callback", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentButtonImageSimpleComponent, [{
        type: Component,
        args: [{
                selector: 'gl-shared-component-button-image-simple',
                template: "<img\n  class=\"button\"\n  [id]=\"id\"\n  [src]=\"src\"\n  [alt]=\"alt\"\n  (click)=\"callback($event)\">\n",
                styles: [":host::ng-deep{display:flex;align-items:center}:host::ng-deep .button{width:1em;height:1em}:host::ng-deep .button:not(hover){opacity:.5;transform:scale(1);transition:.2s ease-in-out}:host::ng-deep .button:hover{opacity:1;transform:scale(1.1);transition:.2s ease-in-out}"]
            }]
    }], function () { return []; }, { id: [{
            type: Input
        }], alt: [{
            type: Input
        }], src: [{
            type: Input
        }], callback: [{
            type: Input
        }] }); })();
export { GlSharedComponentButtonImageSimpleComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24taW1hZ2Utc2ltcGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsibmc6L2dsLW5nLWZyb250ZW5kL2xpYi9zaGFyZWQvY29tcG9uZW50L2J1dHRvbi9pbWFnZS9zaW1wbGUvZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24taW1hZ2Utc2ltcGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPakQsSUFBYTtNQUEyQyxHQUF4RCxNQUFhLDJDQUEyQyxPQU10RCxnQkFBZ0IsQ0FBQyxFQUNsQixDQUFBLENBTlUsdEZBRFgsSUFBYSwyQ0FBMkMsR0FBeEQsTUFBYSwyQ0FBMkM7Q0FDckQsS0FBSyxFQUFFLFJBQVYsSUFLRSxnQkFBZ0IsQ0FBQztBQUNuQixDQUFDO3VEQU5hLEVBQ0gsaUJBQVIsS0FBSyxFQUFFOzs7Ozs7O2tUQUtUO0FBTlU7QUFDRixJQUROLEtBQUssRUFBRTtBQUFDLHVFQUFHOztBQUVOLElBREwsS0FBSyxFQUFFO3dFQUFLLHhFQUFKLHdFQUFJO0FBQ0osQUFBQTtJQUFSLEtBQUssRUFBRSxYQUNGLElBREwsS0FBSyxFQUFFO3dFQUFLLHhFQUFKLHdFQUFJO0FBQ0osQUFBQTtJQUFSLEtBQUssRUFBRSxYQUVSLElBRkMsS0FBSyxFQUFFOzZFQUFVLDdFQUFULDZFQUFTO0FBSlAsMkNBQTJDLG9CQUx2RCxTQUFTLENBQUMsVUFDVCxRQUFRLEVBQUUsN0ZBSUMsMkNBQTJDLG9CQUx2RCxTQUFTLENBQUMsVUFDVCxRQUFRLEVBQUU7O09BQXlDLEFBQUE7QUFDbkQsQUFBQTttREFBdUUsQUFBQTtrTkFFeEUsQ0FBQyxJQUNXLDJDQUEyQyxDQU92RCxXQVBZLDVEQURaLENBQUMsSUFDVywyQ0FBMkMsQ0FPdkQ7O0FBUHVEOzs7Ozs7OztvQkFReEQ7O0FBZkEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtYnV0dG9uLWltYWdlLXNpbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWJ1dHRvbi1pbWFnZS1zaW1wbGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nbC1zaGFyZWQtY29tcG9uZW50LWJ1dHRvbi1pbWFnZS1zaW1wbGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudEJ1dHRvbkltYWdlU2ltcGxlQ29tcG9uZW50IHtcbiAgQElucHV0KCkgaWQ7XG4gIEBJbnB1dCgpIGFsdDtcbiAgQElucHV0KCkgc3JjO1xuICBASW5wdXQoKSBjYWxsYmFjaztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIl19