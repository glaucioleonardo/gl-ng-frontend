import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
var GlSharedComponentLogoSquareComponent = /** @class */ (function () {
    function GlSharedComponentLogoSquareComponent() {
        this.horizontalPosition = 'left';
        this.verticalPosition = 'top';
    }
    __decorate([
        Input()
    ], GlSharedComponentLogoSquareComponent.prototype, "imageScr", void 0);
    __decorate([
        Input()
    ], GlSharedComponentLogoSquareComponent.prototype, "imageAlt", void 0);
    __decorate([
        Input()
    ], GlSharedComponentLogoSquareComponent.prototype, "horizontalPosition", void 0);
    __decorate([
        Input()
    ], GlSharedComponentLogoSquareComponent.prototype, "verticalPosition", void 0);
GlSharedComponentLogoSquareComponent.ɵfac = function GlSharedComponentLogoSquareComponent_Factory(t) { return new (t || GlSharedComponentLogoSquareComponent)(); };
GlSharedComponentLogoSquareComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentLogoSquareComponent, selectors: [["gl-shared-component-logo-square"]], inputs: { horizontalPosition: "horizontalPosition", verticalPosition: "verticalPosition", imageScr: "imageScr", imageAlt: "imageAlt" }, decls: 1, vars: 6, consts: [[3, "src", "alt"]], template: function GlSharedComponentLogoSquareComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "img", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate2("logo ", ctx.horizontalPosition == "right" ? "right" : "left", " ", ctx.verticalPosition == "bottom" ? "bottom" : "top", "");
        ɵngcc0.ɵɵproperty("src", ctx.imageScr, ɵngcc0.ɵɵsanitizeUrl)("alt", ctx.imageAlt);
    } }, styles: ["[_nghost-%COMP%]  .logo{width:3em;height:3em;position:absolute;opacity:.1}[_nghost-%COMP%]  .logo.top{top:1em}[_nghost-%COMP%]  .logo.right{right:1em}[_nghost-%COMP%]  .logo.bottom{bottom:1em}[_nghost-%COMP%]  .logo.left{left:1em}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentLogoSquareComponent, [{
        type: Component,
        args: [{
                selector: 'gl-shared-component-logo-square',
                template: "<img\n  class=\"logo {{ horizontalPosition == 'right' ? 'right' : 'left' }} {{ verticalPosition == 'bottom' ? 'bottom' : 'top' }}\"\n  [src]=\"imageScr\"\n  [alt]=\"imageAlt\">\n",
                styles: [":host::ng-deep .logo{width:3em;height:3em;position:absolute;opacity:.1}:host::ng-deep .logo.top{top:1em}:host::ng-deep .logo.right{right:1em}:host::ng-deep .logo.bottom{bottom:1em}:host::ng-deep .logo.left{left:1em}"]
            }]
    }], function () { return []; }, { horizontalPosition: [{
            type: Input
        }], verticalPosition: [{
            type: Input
        }], imageScr: [{
            type: Input
        }], imageAlt: [{
            type: Input
        }] }); })();
    return GlSharedComponentLogoSquareComponent;
}());
export { GlSharedComponentLogoSquareComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1sb2dvLXNxdWFyZS5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIm5nOi9nbC1uZy1mcm9udGVuZC9saWIvc2hhcmVkL2NvbXBvbmVudC9sb2dvL3NxdWFyZS9nbC1zaGFyZWQtY29tcG9uZW50LWxvZ28tc3F1YXJlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPakQ7bUNBTUUsbkNBTkY7cUJBR1csdUJBQWtCLEdBQXFCLE1BQU0sckRBRnBDLElBS2xCO0FBSHVELFNBQzlDLHFCQUFnQixHQUFxQixLQUFLLENBQUMsdkNBSXhCLFFBTG5CLHVCQUFrQixHQUFxQixNQUFNLENBQUM7RUFHdkMsQ0FBQyxLQUxSLHFCQUFSLEtBQUssRUFBRSxwQ0FHVixRQUFXLHFCQUFnQixHQUFxQixLQUFLLENBQUM7QUFDdEQsSUFDa0IsQ0FBQztBQUNuQixJQU5XO0FBQWEsUUFBckIsS0FBSyxFQUFFO2lDQUFrQixNQUNqQixxQkFBUixLQUFLLEVBQUUsbkVBREMsMEVBQWlCO0FBQzNCLElBQVU7O2lDQUFpQixqQ0FBakIsMEVBQWlCO0lBQ2pCLEpBQVYsSUFBVTtRQUFSLEtBQUssRUFBRSxmQUFjLFFBQXJCLEtBQUssRUFBRTtvRkFBK0MscEZBQTlDLG9GQUE4QztJQUM5QyxKQUFWLElBQVU7UUFBUixLQUFLLEVBQUUsZkFBYyxRQUFyQixLQUFLLEVBQUU7a0ZBQTRDLGxGQUEzQyxrRkFBMkM7SUFKekMsb0NBQW9DLHdCQUxoRCxTQUFTLENBQUMsY0FDVCxRQUFRLEVBQUUsaUNBQWlDLGNBQzNDLDdJQUdXLG9DQUFvQyx3QkFMaEQsU0FBUyxDQUFDLGNBQ1QsUUFBUSxFQUFFLGlDQUFpQyxjQUMzQzsyS0FBK0QsMlBBRWhFLENBQUMsUUFDVyxwUUFIb0QsMlBBRWhFLENBQUMsUUFDVzs0QkFBb0MsQ0FPaEQsTUFBRCxQQVBpRCxDQU9oRDs7bUJBQUEsR0FBQSxBQVBELElBT0MsVUFQWSxvQ0FBb0M7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFRakQ7QUFBQyxJQURELDJDQUFDO0FBQ0EsQ0FEQSxBQVBELElBT0M7O0FBZEEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtbG9nby1zcXVhcmUnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1sb2dvLXNxdWFyZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtbG9nby1zcXVhcmUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudExvZ29TcXVhcmVDb21wb25lbnQge1xuICBASW5wdXQoKSBpbWFnZVNjcjogc3RyaW5nO1xuICBASW5wdXQoKSBpbWFnZUFsdDogc3RyaW5nO1xuICBASW5wdXQoKSBob3Jpem9udGFsUG9zaXRpb246ICdsZWZ0JyB8ICdyaWdodCcgPSAnbGVmdCc7XG4gIEBJbnB1dCgpIHZlcnRpY2FsUG9zaXRpb246ICd0b3AnIHwgJ2JvdHRvbScgPSAndG9wJztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIl19