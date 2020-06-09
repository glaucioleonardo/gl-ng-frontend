import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function GlSharedComponentFooterSimpleComponent_img_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "img", 3);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("alt", ctx_r0.imageDescription)("src", ctx_r0.imageLogo, ɵngcc0.ɵɵsanitizeUrl);
} }
let GlSharedComponentFooterSimpleComponent = class GlSharedComponentFooterSimpleComponent {
    constructor() {
        this.imageDescription = 'Image logo';
    }
};
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
    } }, directives: [ɵngcc1.NgIf], styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);[_nghost-%COMP%] {z-index:100;max-width:100vw}[_nghost-%COMP%]  .footer-container{position:relative;display:flex;justify-content:center;background-color:#1a1b1d;border-top:.1em solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5;height:1.3em;z-index:99}[_nghost-%COMP%]  .footer-container .description{font-family:Montserrat,sans-serif;font-weight:300;text-transform:uppercase;padding:1em;color:#fff;font-size:.5em;letter-spacing:.14em}[_nghost-%COMP%]  .footer-container .image-logo{height:1em;margin:0 0 0 .3em}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){[_nghost-%COMP%]  .footer-container{border-top:.1em solid #d24077!important}}"] });
__decorate([
    Input()
], GlSharedComponentFooterSimpleComponent.prototype, "description", void 0);
__decorate([
    Input()
], GlSharedComponentFooterSimpleComponent.prototype, "imageLogo", void 0);
__decorate([
    Input()
], GlSharedComponentFooterSimpleComponent.prototype, "imageDescription", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentFooterSimpleComponent, [{
        type: Component,
        args: [{
                selector: 'gl-shared-component-footer-simple',
                template: "<section class=\"footer-container\">\n  <span class=\"description\">{{ description }}</span>\n  <img\n    *ngIf=\"imageLogo != null\"\n    class=\"image-logo\"\n    [alt]=\"imageDescription\"\n    [src]=\"imageLogo\">\n</section>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep{z-index:100;max-width:100vw}:host::ng-deep .footer-container{position:relative;display:flex;justify-content:center;background-color:#1a1b1d;border-top:.1em solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5;height:1.3em;z-index:99}:host::ng-deep .footer-container .description{font-family:Montserrat,sans-serif;font-weight:300;text-transform:uppercase;padding:1em;color:#fff;font-size:.5em;letter-spacing:.14em}:host::ng-deep .footer-container .image-logo{height:1em;margin:0 0 0 .3em}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){:host::ng-deep .footer-container{border-top:.1em solid #d24077!important}}"]
            }]
    }], function () { return []; }, { imageDescription: [{
            type: Input
        }], description: [{
            type: Input
        }], imageLogo: [{
            type: Input
        }] }); })();
export { GlSharedComponentFooterSimpleComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1mb290ZXItc2ltcGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsibmc6L2dsLW5nLWZyb250ZW5kL2xpYi9zaGFyZWQvY29tcG9uZW50L2Zvb3Rlci9zaW1wbGUvZ2wtc2hhcmVkLWNvbXBvbmVudC1mb290ZXItc2ltcGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPakQsSUFBYTtDQUFzQyxHQUFuRCxNQUFhOztJQUFzQyxPQUtqRCx3QkFGUyxxQkFBZ0IsR0FBVyxZQUFZLENBQUMsS0FFakMsQ0FBQyxFQUNsQixDQUFBLENBTFU7V0FBUixLQUFLLEVBQUU7OztBQUFxQjs7QUFEL0IsSUFBYSxzQ0FBc0MsR0FBbkQsTUFBYSxzQ0FBc0M7QUFDbkQsSUFJRTtBQUFnQixRQUZQLHFCQUFnQixHQUFXLFlBQVksQ0FBQztBQUNuRCxJQUNrQixDQUFDO0FBQ25CLENBQUM7Ozs7Ozs7Ozs7Ozs7OzYyQkFBQTtBQUxVOztBQUFBLDJFQUFvQjtBQUNwQixBQUFBO0lBQVIsS0FBSyxFQUFFLFhBQWMsSUFBckIsS0FBSyxFQUFFO3lFQUFtQix6RUFBbEIseUVBQWtCO0FBQ2xCLEFBQUE7SUFBUixLQUFLLEVBQUUsWEFBYyxJQUFyQixLQUFLLEVBQUU7Z0ZBQXlDLGhGQUF4QyxnRkFBd0M7QUFIdEMsc0NBQXNDLG9CQUxsRCxTQUFTLENBQUMsVUFDVCxRQUFRLEVBQUUseEZBSUMsc0NBQXNDLG9CQUxsRCxTQUFTLENBQUMsVUFDVCxRQUFRLEVBQUU7O0NBQW1DLFVBQzdDLFZBRDZDLFVBQzdDOzs4S0FBaUUsQUFBQTsrdUJBRWxFLENBQUMsSUFDVyxzQ0FBc0MsQ0FNbEQsV0FOWSx2REFEWixDQUFDLElBQ1csc0NBQXNDLENBTWxEO0tBTmtEOzs7Ozs7O29CQU9uRDs7QUFkQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2wtc2hhcmVkLWNvbXBvbmVudC1mb290ZXItc2ltcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dsLXNoYXJlZC1jb21wb25lbnQtZm9vdGVyLXNpbXBsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtZm9vdGVyLXNpbXBsZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50Rm9vdGVyU2ltcGxlQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGVzY3JpcHRpb246IHN0cmluZztcbiAgQElucHV0KCkgaW1hZ2VMb2dvOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGltYWdlRGVzY3JpcHRpb246IHN0cmluZyA9ICdJbWFnZSBsb2dvJztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIl19