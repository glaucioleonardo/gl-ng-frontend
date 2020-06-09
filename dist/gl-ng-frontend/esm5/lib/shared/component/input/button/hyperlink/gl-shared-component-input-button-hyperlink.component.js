import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
var GlSharedComponentInputButtonHyperlinkComponent = /** @class */ (function () {
    function GlSharedComponentInputButtonHyperlinkComponent() {
    }
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
    return GlSharedComponentInputButtonHyperlinkComponent;
}());
export { GlSharedComponentInputButtonHyperlinkComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1idXR0b24taHlwZXJsaW5rLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsibmc6L2dsLW5nLWZyb250ZW5kL2xpYi9zaGFyZWQvY29tcG9uZW50L2lucHV0L2J1dHRvbi9oeXBlcmxpbmsvZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1idXR0b24taHlwZXJsaW5rLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPakQ7NkNBTUUsN0NBTkY7MkJBTWtCLENBQUMsS0FMUixxQkFBUixLQUFLLEVBQUUsN0RBQVUsSUFLbEI7QUFFc0MsSUFGdEIsQ0FBQztBQUNuQixJQU5XO0FBQWEsUUFBckIsS0FBSyxFQUFFOzJDQUFrQixNQUNqQixxQkFBUixLQUFLLEVBQUUsN0VBREMsb0ZBQWlCO0FBQzNCLElBQVU7QUFBYSxRQUFyQixLQUFLLEVBQUU7bURBQTBCLE1BQ3pCO0FBQVYsSUFBVTtRQUFSLEtBQUssRUFBRSxmQUFjLFFBQXJCLEtBQUssRUFBRTt1RkFBcUIsdkZBQXBCLHVGQUFvQjtJQUNwQixKQUFWLElBQVU7UUFBUixLQUFLLEVBQUUsZkFBYyxRQUFyQixLQUFLLEVBQUU7Z0ZBQWMsaEZBQWIsZ0ZBQWE7SUFKWCw4Q0FBOEMsd0JBTDFELFNBQVMsQ0FBQyxjQUNULFFBQVEsRUFBRSwrQ0FBK0MsY0FDekQscktBR1csOENBQThDLHdCQUwxRCxTQUFTLENBQUMsY0FDVCxRQUFRLEVBQUUsK0NBQStDLGNBQ3pEO29OQUEwRSxBQUFBOzs7OztBQUUzRSxDQUFDLFFBQ1csVEFEWixDQUFDLFFBQ1c7d0JBQThDLENBTzFELERBUDBELENBTzFEO0FBQUQ7O0lBQUMsR0FBQSxBQVBELElBT0MsVUFQWSw4Q0FBOEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFRM0Q7QUFBQyxJQURELHFEQUFDO0FBQ0EsQ0FEQSxBQVBELElBT0M7O0FBZEEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsLWdsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtYnV0dG9uLWh5cGVybGluaycsXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LWJ1dHRvbi1oeXBlcmxpbmsuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LWJ1dHRvbi1oeXBlcmxpbmsuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudElucHV0QnV0dG9uSHlwZXJsaW5rQ29tcG9uZW50IHtcbiAgQElucHV0KCkgaW1hZ2VTcmM6IHN0cmluZztcbiAgQElucHV0KCkgaW1hZ2VEZXNjcmlwdGlvbjogc3RyaW5nO1xuICBASW5wdXQoKSBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBASW5wdXQoKSBsaW5rOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiJdfQ==