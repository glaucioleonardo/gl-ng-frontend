import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function GlSharedComponentFooterContainerComponent_img_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "img", 4);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("alt", ctx_r0.imageDescription)("src", ctx_r0.imageLogo, ɵngcc0.ɵɵsanitizeUrl);
} }
const _c0 = ["*"];
let GlSharedComponentFooterContainerComponent = class GlSharedComponentFooterContainerComponent {
    constructor() {
        this.imageDescription = 'Image logo';
    }
};
GlSharedComponentFooterContainerComponent.ɵfac = function GlSharedComponentFooterContainerComponent_Factory(t) { return new (t || GlSharedComponentFooterContainerComponent)(); };
GlSharedComponentFooterContainerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentFooterContainerComponent, selectors: [["gl-shared-component-footer-container"]], inputs: { imageDescription: "imageDescription", description: "description", imageLogo: "imageLogo" }, ngContentSelectors: _c0, decls: 6, vars: 2, consts: [[1, "footer-container"], [1, "description"], ["class", "image-logo", 3, "alt", "src", 4, "ngIf"], [1, "user-container"], [1, "image-logo", 3, "alt", "src"]], template: function GlSharedComponentFooterContainerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "section", 0);
        ɵngcc0.ɵɵelementStart(1, "span", 1);
        ɵngcc0.ɵɵtext(2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(3, GlSharedComponentFooterContainerComponent_img_3_Template, 1, 2, "img", 2);
        ɵngcc0.ɵɵelementStart(4, "div", 3);
        ɵngcc0.ɵɵprojection(5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.description);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.imageLogo != null);
    } }, directives: [ɵngcc1.NgIf], styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);[_nghost-%COMP%] {z-index:100;max-width:100vw;min-width:100vw;position:fixed;bottom:0;flex-grow:1}[_nghost-%COMP%]  .footer-container{position:relative;display:flex;justify-content:center;background-color:#1a1b1d;border-top:.1em solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5;height:1.3em;z-index:99}[_nghost-%COMP%]  .footer-container .description{font-family:Montserrat,sans-serif;font-weight:300;text-transform:uppercase;padding:1em;color:#fff;font-size:.5em;letter-spacing:.14em}[_nghost-%COMP%]  .footer-container .image-logo{height:1em;margin:0 0 0 .3em}[_nghost-%COMP%]  .footer-container .user-container{align-self:flex-end;margin:0 .3em 0 0}[_nghost-%COMP%]  .footer-container .user-container .user-container{display:flex;align-items:center;justify-content:center}"] });
__decorate([
    Input()
], GlSharedComponentFooterContainerComponent.prototype, "description", void 0);
__decorate([
    Input()
], GlSharedComponentFooterContainerComponent.prototype, "imageLogo", void 0);
__decorate([
    Input()
], GlSharedComponentFooterContainerComponent.prototype, "imageDescription", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentFooterContainerComponent, [{
        type: Component,
        args: [{
                selector: 'gl-shared-component-footer-container',
                template: "<section class=\"footer-container\">\n  <span class=\"description\">{{ description }}</span>\n  <img\n    *ngIf=\"imageLogo != null\"\n    class=\"image-logo\"\n    [alt]=\"imageDescription\"\n    [src]=\"imageLogo\">\n  <div class=\"user-container\">\n    <ng-content></ng-content>\n  </div>\n</section>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep{z-index:100;max-width:100vw;min-width:100vw;position:fixed;bottom:0;flex-grow:1}:host::ng-deep .footer-container{position:relative;display:flex;justify-content:center;background-color:#1a1b1d;border-top:.1em solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5;height:1.3em;z-index:99}:host::ng-deep .footer-container .description{font-family:Montserrat,sans-serif;font-weight:300;text-transform:uppercase;padding:1em;color:#fff;font-size:.5em;letter-spacing:.14em}:host::ng-deep .footer-container .image-logo{height:1em;margin:0 0 0 .3em}:host::ng-deep .footer-container .user-container{align-self:flex-end;margin:0 .3em 0 0}:host::ng-deep .footer-container .user-container .user-container{display:flex;align-items:center;justify-content:center}"]
            }]
    }], function () { return []; }, { imageDescription: [{
            type: Input
        }], description: [{
            type: Input
        }], imageLogo: [{
            type: Input
        }] }); })();
export { GlSharedComponentFooterContainerComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1mb290ZXItY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsibmc6L2dsLW5nLWZyb250ZW5kL2xpYi9zaGFyZWQvY29tcG9uZW50L2Zvb3Rlci9jb250YWluZXIvZ2wtc2hhcmVkLWNvbXBvbmVudC1mb290ZXItY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPakQsSUFBYTtJQUF5QyxHQUF0RCxNQUFhOztVQUF5QyxPQUtwRCx3QkFGUyxxQkFBZ0IsR0FBVyxZQUFZLENBQUMsS0FFakMsQ0FBQyxFQUNsQixDQUFBLENBTFU7Y0FBUixLQUFLLEVBQUU7OztNQUFxQjs7O0FBRC9CLElBQWEseUNBQXlDLEdBQXRELE1BQWEseUNBQXlDO0FBQ3RELElBSUU7QUFBZ0IsUUFGUCxxQkFBZ0IsR0FBVyxZQUFZLENBQUM7QUFDbkQsSUFDa0IsQ0FBQztBQUNuQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7bStCQUFBO0FBTFU7O0FBQUEsOEVBQW9CO0FBQ3BCLEFBQUE7SUFBUixLQUFLLEVBQUUsWEFBYyxJQUFyQixLQUFLLEVBQUU7NEVBQW1CLDVFQUFsQiw0RUFBa0I7QUFDbEIsQUFBQTtJQUFSLEtBQUssRUFBRSxYQUFjLElBQXJCLEtBQUssRUFBRTttRkFBeUMsbkZBQXhDLG1GQUF3QztBQUh0Qyx5Q0FBeUMsb0JBTHJELFNBQVMsQ0FBQyxVQUNULFFBQVEsRUFBRSwzRkFJQyx5Q0FBeUMsb0JBTHJELFNBQVMsQ0FBQyxVQUNULFFBQVEsRUFBRTs7SUFBc0MsVUFDaEQsVkFEZ0QsVUFDaEQ7O3lQQUFvRSxBQUFBO2syQkFFckUsQ0FBQyxJQUNXLHlDQUF5QyxDQU1yRCxXQU5ZLDFEQURaLENBQUMsSUFDVyx5Q0FBeUMsQ0FNckQ7V0FOcUQ7Ozs7Ozs7b0JBT3REOztBQWRBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LWZvb3Rlci1jb250YWluZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1mb290ZXItY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1mb290ZXItY29udGFpbmVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRGb290ZXJDb250YWluZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBASW5wdXQoKSBpbWFnZUxvZ286IHN0cmluZztcbiAgQElucHV0KCkgaW1hZ2VEZXNjcmlwdGlvbjogc3RyaW5nID0gJ0ltYWdlIGxvZ28nO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iXX0=