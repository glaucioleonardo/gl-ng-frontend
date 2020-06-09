import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
var GlSharedComponentTitlePageComponent = /** @class */ (function () {
    function GlSharedComponentTitlePageComponent() {
    }
    __decorate([
        Input()
    ], GlSharedComponentTitlePageComponent.prototype, "title", void 0);
    __decorate([
        Input()
    ], GlSharedComponentTitlePageComponent.prototype, "subtitle", void 0);
GlSharedComponentTitlePageComponent.ɵfac = function GlSharedComponentTitlePageComponent_Factory(t) { return new (t || GlSharedComponentTitlePageComponent)(); };
GlSharedComponentTitlePageComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentTitlePageComponent, selectors: [["gl-shared-component-title-page"]], inputs: { title: "title", subtitle: "subtitle" }, decls: 6, vars: 2, consts: [[1, "page-title"], [1, "title-container"], [1, "title"], [1, "subtitle"]], template: function GlSharedComponentTitlePageComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "h1", 2);
        ɵngcc0.ɵɵtext(3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "h2", 3);
        ɵngcc0.ɵɵtext(5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate(ctx.title);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.subtitle);
    } }, styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);.page-title[_ngcontent-%COMP%]{margin:0 .5em;flex-grow:1;align-self:flex-start}.page-title[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]{display:flex}.page-title[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;font-weight:700}.page-title[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%], .page-title[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{text-transform:uppercase;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#fff;font-size:1.5em}.page-title[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;font-weight:100;margin:0 0 0 .3em}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentTitlePageComponent, [{
        type: Component,
        args: [{
                selector: 'gl-shared-component-title-page',
                template: "<div class=\"page-title\">\n  <div class=\"title-container\">\n    <h1 class=\"title\">{{ title }}</h1>\n    <h2 class=\"subtitle\">{{ subtitle }}</h2>\n  </div>\n</div>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);.page-title{margin:0 .5em;flex-grow:1;align-self:flex-start}.page-title .title-container{display:flex}.page-title .title-container .title{font-family:Montserrat,sans-serif;font-weight:700}.page-title .title-container .subtitle,.page-title .title-container .title{text-transform:uppercase;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#fff;font-size:1.5em}.page-title .title-container .subtitle{font-family:Montserrat,sans-serif;font-weight:100;margin:0 0 0 .3em}"]
            }]
    }], function () { return []; }, { title: [{
            type: Input
        }], subtitle: [{
            type: Input
        }] }); })();
    return GlSharedComponentTitlePageComponent;
}());
export { GlSharedComponentTitlePageComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC10aXRsZS1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsibmc6L2dsLW5nLWZyb250ZW5kL2xpYi9zaGFyZWQvY29tcG9uZW50L3RpdGxlL3BhZ2UvZ2wtc2hhcmVkLWNvbXBvbmVudC10aXRsZS1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPakQ7a0NBS0UsbENBTEY7Z0JBS2tCLENBQUMsS0FIUixxQkFBUixLQUFLLEVBQUUsbERBQVUsSUFHbEI7QUFFMkIsSUFGWCxDQUFDO0FBQ25CLElBSlc7QUFBYSxRQUFyQixLQUFLLEVBQUU7NkJBQWUsTUFDZDtBQUFWLElBQVU7UUFBUixLQUFLLEVBQUUsZkFBYyxRQUFyQixLQUFLLEVBQUU7eUVBQWtCLHpFQUFqQix5RUFBaUI7SUFIZixtQ0FBbUMsd0JBTC9DLFNBQVMsQ0FBQyxjQUNULFFBQVEsRUFBRSxnQ0FBZ0MsY0FDMUMsM0lBR1csbUNBQW1DLHdCQUwvQyxTQUFTLENBQUMsY0FDVCxRQUFRLEVBQUUsZ0NBQWdDLGNBQzFDO3FLQUE4RCxBQUFBOzs7Ozs7Ozs7Ozs7O0tBRS9ELENBQUMsUUFDVyxUQURaLENBQUMsUUFDVztJQUFtQyxDQU0vQyxNQUFELFBBTmdELENBTS9DO3dCQUFBLEdBQUEsQUFORCxJQU1DLFVBTlk7NEJBQW1DOzs7Ozs7Ozs7Ozs7b0JBT2hEO0FBQUMsSUFERCwwQ0FBQztBQUNBLENBREEsQUFORCxJQU1DOztBQWJBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LXRpdGxlLXBhZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC10aXRsZS1wYWdlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC10aXRsZS1wYWdlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRUaXRsZVBhZ2VDb21wb25lbnR7XG5cbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgc3VidGl0bGU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIl19