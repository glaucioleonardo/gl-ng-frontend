import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function GlSharedComponentFooterSimpleComponent_img_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "img", 3);
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("alt", ctx_r0.imageDescription)("src", ctx_r0.imageLogo, ɵngcc0.ɵɵsanitizeUrl);
} }
var GlSharedComponentFooterSimpleComponent = /** @class */ (function () {
    function GlSharedComponentFooterSimpleComponent() {
        this.imageDescription = 'Image logo';
    }
    __decorate([
        Input()
    ], GlSharedComponentFooterSimpleComponent.prototype, "description", void 0);
    __decorate([
        Input()
    ], GlSharedComponentFooterSimpleComponent.prototype, "imageLogo", void 0);
    __decorate([
        Input()
    ], GlSharedComponentFooterSimpleComponent.prototype, "imageDescription", void 0);
GlSharedComponentFooterSimpleComponent.ɵfac = function GlSharedComponentFooterSimpleComponent_Factory(t) { return new (t || GlSharedComponentFooterSimpleComponent)(); };
GlSharedComponentFooterSimpleComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentFooterSimpleComponent, selectors: [["gl-shared-component-footer-simple"]], inputs: { imageDescription: "imageDescription", description: "description", imageLogo: "imageLogo" }, decls: 4, vars: 2, consts: [[1, "footer-container"], [1, "description"], ["class", "image-logo", 3, "alt", "src", 4, "ngIf"], [1, "image-logo", 3, "alt", "src"]], template: function GlSharedComponentFooterSimpleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "section", 0);
        ɵngcc0.ɵɵelementStart(1, "span", 1);
        ɵngcc0.ɵɵtext(2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(3, GlSharedComponentFooterSimpleComponent_img_3_Template, 1, 2, "img", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.description);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.imageLogo != null);
    } }, directives: [ɵngcc1.NgIf], styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);[_nghost-%COMP%] {z-index:100;max-width:100vw;min-width:100vw;position:fixed;bottom:0;flex-grow:1}[_nghost-%COMP%]  .footer-container{position:relative;display:flex;justify-content:center;background-color:#1a1b1d;border-top:.1em solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5;height:1.3em;z-index:99}[_nghost-%COMP%]  .footer-container .description{font-family:Montserrat,sans-serif;font-weight:300;text-transform:uppercase;padding:1em;color:#fff;font-size:.5em;letter-spacing:.14em}[_nghost-%COMP%]  .footer-container .image-logo{height:1em;margin:0 0 0 .3em}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){[_nghost-%COMP%]  .footer-container{border-top:0 solid transparent!important;padding-top:.1em}[_nghost-%COMP%]  .footer-container::before{width:100%;height:.1em;left:0;top:.1em;margin-top:-.1em;content:\"\";position:absolute;background:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%)}}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentFooterSimpleComponent, [{
        type: Component,
        args: [{
                selector: 'gl-shared-component-footer-simple',
                template: "<section class=\"footer-container\">\n  <span class=\"description\">{{ description }}</span>\n  <img\n    *ngIf=\"imageLogo != null\"\n    class=\"image-logo\"\n    [alt]=\"imageDescription\"\n    [src]=\"imageLogo\">\n</section>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep{z-index:100;max-width:100vw;min-width:100vw;position:fixed;bottom:0;flex-grow:1}:host::ng-deep .footer-container{position:relative;display:flex;justify-content:center;background-color:#1a1b1d;border-top:.1em solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5;height:1.3em;z-index:99}:host::ng-deep .footer-container .description{font-family:Montserrat,sans-serif;font-weight:300;text-transform:uppercase;padding:1em;color:#fff;font-size:.5em;letter-spacing:.14em}:host::ng-deep .footer-container .image-logo{height:1em;margin:0 0 0 .3em}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){:host::ng-deep .footer-container{border-top:0 solid transparent!important;padding-top:.1em}:host::ng-deep .footer-container::before{width:100%;height:.1em;left:0;top:.1em;margin-top:-.1em;content:\"\";position:absolute;background:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%)}}"]
            }]
    }], function () { return []; }, { imageDescription: [{
            type: Input
        }], description: [{
            type: Input
        }], imageLogo: [{
            type: Input
        }] }); })();
    return GlSharedComponentFooterSimpleComponent;
}());
export { GlSharedComponentFooterSimpleComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1mb290ZXItc2ltcGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsibmc6L2dsLW5nLWZyb250ZW5kL2xpYi9zaGFyZWQvY29tcG9uZW50L2Zvb3Rlci9zaW1wbGUvZ2wtc2hhcmVkLWNvbXBvbmVudC1mb290ZXItc2ltcGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPakQ7cUNBS0U7O3FEQUZTLHFCQUFnQixHQUFXO0NBQVksQ0FBQyxLQUVqQyxDQUFDLEtBSlIscUJBQVI7SUFBSyxFQUFFOzs2QkFBcUIsTUFDcEIscUJBQVIsS0FBSyxFQUFFOztBQUZWO0FBQ29CLElBSWxCO0FBRThCLFFBSnJCLHFCQUFnQixHQUFXLFlBQVksQ0FBQztBQUNuRCxJQUNrQixDQUFDO0FBQ25CLElBTFc7QUFBYSxRQUFyQixLQUFLLEVBQUU7QUFBQywrRUFBb0I7O0FBQ1AsUUFBckIsS0FBSyxFQUFFOzZFQUFtQiw3RUFBbEIsNkVBQWtCO0lBQ2xCLEpBQVYsSUFBVTtRQUFSLEtBQUssRUFBRSxmQUFjLFFBQXJCLEtBQUssRUFBRTtvRkFBeUMscEZBQXhDLG9GQUF3QztJQUh0QyxzQ0FBc0Msd0JBTGxELFNBQVMsQ0FBQyxjQUNULFFBQVEsRUFBRSxtQ0FBbUMsY0FDN0MsakpBR1csc0NBQXNDLHdCQUxsRCxTQUFTLENBQUMsY0FDVCxRQUFRLEVBQUUsbUNBQW1DLGNBQzdDOzhOQUFpRSxBQUFBOzs7Ozs7Ozs7Ozs7NlZBRWxFLENBQUMsUUFDVyxzQ0FBc0MsQ0FNbEQsTUFBRCw2Q0FBQyxHQUFBLEFBTkQsSUFNQyxVQU5ZLHNDQUFzQywxSkFEbEQsQ0FBQyxRQUNXLHNDQUFzQyxDQU1sRDs7Ozs7Ozs7Ozs7Ozs7b0JBQ0Q7QUFBQyxJQURELDZDQUFDO0FBQ0EsQ0FEQSxBQU5ELElBTUM7O0FBYkEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtZm9vdGVyLXNpbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWZvb3Rlci1zaW1wbGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nbC1zaGFyZWQtY29tcG9uZW50LWZvb3Rlci1zaW1wbGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudEZvb3RlclNpbXBsZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGltYWdlTG9nbzogc3RyaW5nO1xuICBASW5wdXQoKSBpbWFnZURlc2NyaXB0aW9uOiBzdHJpbmcgPSAnSW1hZ2UgbG9nbyc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiJdfQ==