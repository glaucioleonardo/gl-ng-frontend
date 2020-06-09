import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
let GlSharedComponentInputButtonHyperlinkComponent = class GlSharedComponentInputButtonHyperlinkComponent {
    constructor() { }
};
GlSharedComponentInputButtonHyperlinkComponent.ɵfac = function GlSharedComponentInputButtonHyperlinkComponent_Factory(t) { return new (t || GlSharedComponentInputButtonHyperlinkComponent)(); };
GlSharedComponentInputButtonHyperlinkComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentInputButtonHyperlinkComponent, selectors: [["gl-gl-shared-component-input-button-hyperlink"]], inputs: { imageSrc: "imageSrc", imageDescription: "imageDescription", description: "description", link: "link" }, decls: 4, vars: 4, consts: [[1, "hyperlink-container"], [1, "logo", 3, "src", "alt"], ["target", "_blank", 1, "message", 3, "href"]], template: function GlSharedComponentInputButtonHyperlinkComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelement(1, "img", 1);
        ɵngcc0.ɵɵelementStart(2, "a", 2);
        ɵngcc0.ɵɵtext(3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("src", ctx.imageSrc, ɵngcc0.ɵɵsanitizeUrl)("alt", ctx.imageDescription);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("href", ctx.link, ɵngcc0.ɵɵsanitizeUrl);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate(ctx.description);
    } }, styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);[_nghost-%COMP%]  .hyperlink-container{display:flex;flex-direction:row;align-items:center;position:absolute;right:.3em;bottom:.3em}[_nghost-%COMP%]  .hyperlink-container .logo{width:.7em;height:.7em;margin:0 .2em 0 0}[_nghost-%COMP%]  .hyperlink-container .message{margin:0 0 0 .2em;font-family:Montserrat,sans-serif;font-weight:400;font-size:.5em;color:#f60}"] });
__decorate([
    Input()
], GlSharedComponentInputButtonHyperlinkComponent.prototype, "imageSrc", void 0);
__decorate([
    Input()
], GlSharedComponentInputButtonHyperlinkComponent.prototype, "imageDescription", void 0);
__decorate([
    Input()
], GlSharedComponentInputButtonHyperlinkComponent.prototype, "description", void 0);
__decorate([
    Input()
], GlSharedComponentInputButtonHyperlinkComponent.prototype, "link", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentInputButtonHyperlinkComponent, [{
        type: Component,
        args: [{
                selector: 'gl-gl-shared-component-input-button-hyperlink',
                template: "<div class=\"hyperlink-container\">\n  <img\n    class=\"logo\"\n    [src]=\"imageSrc\"\n    [alt]=\"imageDescription\">\n  <a\n    class=\"message\"\n    [href]=\"link\"\n    target=\"_blank\">{{ description }}</a>\n</div>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep .hyperlink-container{display:flex;flex-direction:row;align-items:center;position:absolute;right:.3em;bottom:.3em}:host::ng-deep .hyperlink-container .logo{width:.7em;height:.7em;margin:0 .2em 0 0}:host::ng-deep .hyperlink-container .message{margin:0 0 0 .2em;font-family:Montserrat,sans-serif;font-weight:400;font-size:.5em;color:#f60}"]
            }]
    }], function () { return []; }, { imageSrc: [{
            type: Input
        }], imageDescription: [{
            type: Input
        }], description: [{
            type: Input
        }], link: [{
            type: Input
        }] }); })();
export { GlSharedComponentInputButtonHyperlinkComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1idXR0b24taHlwZXJsaW5rLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsibmc6L2dsLW5nLWZyb250ZW5kL2xpYi9zaGFyZWQvY29tcG9uZW50L2lucHV0L2J1dHRvbi9oeXBlcmxpbmsvZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1idXR0b24taHlwZXJsaW5rLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPakQsSUFBYTtTQUE4QyxHQUEzRCxNQUFhLDhDQUE4QyxPQU16RCxnQkFBZ0IsQ0FBQyxFQUNsQixDQUFBLENBTlUsNUZBRFgsSUFBYSw4Q0FBOEMsR0FBM0QsTUFBYSw4Q0FBOEM7Q0FDeEQsS0FBSyxFQUFFLFJBQVYsSUFLRSxnQkFBZ0IsQ0FBQztBQUNuQixDQUFDO2dFQU4yQixFQUNqQixpQkFBUixLQUFLLEVBQUU7Ozs7Ozs7Ozs7Ozs7OztvZUFLVDtBQU5VO0FBQWEsSUFBckIsS0FBSyxFQUFFO0FBQUMsZ0ZBQWlCOztBQUNKLElBQXJCLEtBQUssRUFBRTt3RkFBMEIseEZBQXpCLHdGQUF5QjtBQUN6QixBQUFBO0lBQVIsS0FBSyxFQUFFLFhBQWMsSUFBckIsS0FBSyxFQUFFO21GQUFxQixuRkFBcEIsbUZBQW9CO0FBQ3BCLEFBQUE7SUFBUixLQUFLLEVBQUUsWEFBYyxJQUFyQixLQUFLLEVBQUU7NEVBQWMsNUVBQWIsNEVBQWE7QUFKWCw4Q0FBOEMsb0JBTDFELFNBQVMsQ0FBQyxVQUNULFFBQVEsRUFBRSxoR0FJQyw4Q0FBOEMsb0JBTDFELFNBQVMsQ0FBQyxVQUNULFFBQVEsRUFBRTs7YUFBK0MsQUFBQTtNQUN6RCxBQUFBO3dLQUEwRSxBQUFBO3VZQUUzRSxDQUFDLElBQ1csOENBQThDLENBTzFELFdBUFksL0RBRFosQ0FBQyxJQUNXLDhDQUE4QyxDQU8xRDs7TUFQMEQ7Ozs7Ozs7O29CQVEzRDs7QUFmQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2wtZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1idXR0b24taHlwZXJsaW5rJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtYnV0dG9uLWh5cGVybGluay5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtYnV0dG9uLWh5cGVybGluay5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50SW5wdXRCdXR0b25IeXBlcmxpbmtDb21wb25lbnQge1xuICBASW5wdXQoKSBpbWFnZVNyYzogc3RyaW5nO1xuICBASW5wdXQoKSBpbWFnZURlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxpbms6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIl19