import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
let GlSharedComponentLogoSquareComponent = class GlSharedComponentLogoSquareComponent {
    constructor() {
        this.horizontalPosition = 'left';
        this.verticalPosition = 'top';
    }
};
GlSharedComponentLogoSquareComponent.ɵfac = function GlSharedComponentLogoSquareComponent_Factory(t) { return new (t || GlSharedComponentLogoSquareComponent)(); };
GlSharedComponentLogoSquareComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentLogoSquareComponent, selectors: [["gl-shared-component-logo-square"]], inputs: { horizontalPosition: "horizontalPosition", verticalPosition: "verticalPosition", imageScr: "imageScr", imageAlt: "imageAlt" }, decls: 1, vars: 6, consts: [[3, "src", "alt"]], template: function GlSharedComponentLogoSquareComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "img", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate2("logo ", ctx.horizontalPosition == "right" ? "right" : "left", " ", ctx.verticalPosition == "bottom" ? "bottom" : "top", "");
        ɵngcc0.ɵɵproperty("src", ctx.imageScr, ɵngcc0.ɵɵsanitizeUrl)("alt", ctx.imageAlt);
    } }, styles: ["[_nghost-%COMP%]  .logo{width:3em;height:3em;position:absolute;opacity:.1}[_nghost-%COMP%]  .logo.top{top:1em}[_nghost-%COMP%]  .logo.right{right:1em}[_nghost-%COMP%]  .logo.bottom{bottom:1em}[_nghost-%COMP%]  .logo.left{left:1em}"] });
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
export { GlSharedComponentLogoSquareComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1sb2dvLXNxdWFyZS5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIm5nOi9nbC1uZy1mcm9udGVuZC9saWIvc2hhcmVkL2NvbXBvbmVudC9sb2dvL3NxdWFyZS9nbC1zaGFyZWQtY29tcG9uZW50LWxvZ28tc3F1YXJlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPakQsSUFBYSxvQ0FBb0M7RUFBakQsTUFBYSxvQ0FBb0MsT0FNL0Msd0JBSFMsM0VBSFgsSUFBYSxvQ0FBb0MsR0FBakQsTUFBYSxvQ0FBb0M7VUFHcEIsR0FBcUIsTUFBTSxuQkFGeEQsSUFLRTtBQUh1RCxTQUM5QyxxQkFBZ0IsR0FBcUIsS0FBSyxDQUFDLHZDQUVwQyxRQUhQLHVCQUFrQixHQUFxQixNQUFNLENBQUM7RUFHdkMsQ0FBQyxFQUNsQixDQUFBLENBTlUsaUJBQVIsS0FBSyxFQUFFLC9CQUdWLFFBQVcscUJBQWdCLEdBQXFCLEtBQUssQ0FBQztBQUN0RCxJQUNrQixDQUFDO0FBQ25CLENBQUM7c0RBTjJCLEVBQ2pCOzs7Ozs7K1BBS1Y7QUFOVTtBQUFhLElBQXJCLEtBQUssRUFBRTs7QUFDQztJQUFSLEtBQUssRUFBRSxYQUFjLElBQXJCLEtBQUssRUFBRTtzRUFBa0IsdEVBQWpCLHNFQUFpQjtBQUNqQixBQUFBO0lBQVIsS0FBSyxFQUFFLFhBQWMsSUFBckIsS0FBSyxFQUFFO2dGQUErQyxoRkFBOUMsZ0ZBQThDO0FBQzlDLEFBQUE7SUFBUixLQUFLLEVBQUUsWEFBYyxJQUFyQixLQUFLLEVBQUU7OEVBQTRDLDlFQUEzQyw4RUFBMkM7QUFKekMsb0NBQW9DLG9CQUxoRCxTQUFTLENBQUMsVUFDVCxRQUFRLEVBQUUsdEZBSUMsb0NBQW9DLG9CQUxoRCxTQUFTLENBQUMsVUFDVCxRQUFRLEVBQUU7d0JBQWlDLEFBQUE7U0FDM0MsQUFBQTs7eUhBQStELEFBQUE7NEpBRWhFLENBQUMsSUFDVyxvQ0FBb0MsQ0FPaEQsV0FQWSxyREFEWixDQUFDLElBQ1csb0NBQW9DLENBT2hEO0NBUGdEOzs7Ozs7Ozs7b0JBUWpEOztBQWZBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LWxvZ28tc3F1YXJlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dsLXNoYXJlZC1jb21wb25lbnQtbG9nby1zcXVhcmUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nbC1zaGFyZWQtY29tcG9uZW50LWxvZ28tc3F1YXJlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRMb2dvU3F1YXJlQ29tcG9uZW50IHtcbiAgQElucHV0KCkgaW1hZ2VTY3I6IHN0cmluZztcbiAgQElucHV0KCkgaW1hZ2VBbHQ6IHN0cmluZztcbiAgQElucHV0KCkgaG9yaXpvbnRhbFBvc2l0aW9uOiAnbGVmdCcgfCAncmlnaHQnID0gJ2xlZnQnO1xuICBASW5wdXQoKSB2ZXJ0aWNhbFBvc2l0aW9uOiAndG9wJyB8ICdib3R0b20nID0gJ3RvcCc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiJdfQ==