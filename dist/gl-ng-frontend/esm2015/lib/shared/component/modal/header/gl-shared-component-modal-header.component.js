import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
let GlSharedComponentModalHeaderComponent = class GlSharedComponentModalHeaderComponent {
    constructor() { }
};
GlSharedComponentModalHeaderComponent.ɵfac = function GlSharedComponentModalHeaderComponent_Factory(t) { return new (t || GlSharedComponentModalHeaderComponent)(); };
GlSharedComponentModalHeaderComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentModalHeaderComponent, selectors: [["gl-shared-component-modal-header"]], inputs: { title: "title", subtitle: "subtitle", modalLogo: "modalLogo" }, decls: 7, vars: 3, consts: [[1, "modal-title-container"], [1, "modal-title-text-container"], [1, "modal-title"], ["alt", "Header Logo", 1, "modal-logo", 3, "src"]], template: function GlSharedComponentModalHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "h2", 2);
        ɵngcc0.ɵɵtext(3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "h2", 2);
        ɵngcc0.ɵɵtext(5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(6, "img", 3);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate(ctx.title);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.subtitle);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("src", ctx.modalLogo, ɵngcc0.ɵɵsanitizeUrl);
    } }, styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);[_nghost-%COMP%]  .modal-title-container{background-color:#1a1b1d;border-bottom:1px solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5;display:flex;justify-content:flex-start;align-items:center;padding:.5em 0;text-align:left;width:100%;font-size:.65em}[_nghost-%COMP%]  .modal-title-container .modal-logo{margin:0 .5em;height:1.5em;width:1.5em}[_nghost-%COMP%]  .modal-title-container .modal-title-text-container{display:flex;align-items:center;margin:0 1em;flex-grow:1}[_nghost-%COMP%]  .modal-title-container .modal-title-text-container .modal-title{font-family:Montserrat,sans-serif;font-weight:400;color:#64666c;text-transform:uppercase;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[_nghost-%COMP%]  .modal-title-container .modal-title-text-container .modal-title:nth-child(1){margin:0 .3em 0 0}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){[_nghost-%COMP%]  .modal-title-container{border-bottom:1px solid #d24077}}"] });
__decorate([
    Input()
], GlSharedComponentModalHeaderComponent.prototype, "title", void 0);
__decorate([
    Input()
], GlSharedComponentModalHeaderComponent.prototype, "subtitle", void 0);
__decorate([
    Input()
], GlSharedComponentModalHeaderComponent.prototype, "modalLogo", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentModalHeaderComponent, [{
        type: Component,
        args: [{
                selector: 'gl-shared-component-modal-header',
                template: "<div class=\"modal-title-container\">\n  <div class=\"modal-title-text-container\">\n    <h2 class=\"modal-title\">{{ title }}</h2>\n    <h2 class=\"modal-title\">{{ subtitle }}</h2>\n  </div>\n  <img class=\"modal-logo\" [src]=\"modalLogo\" alt=\"Header Logo\">\n</div>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep .modal-title-container{background-color:#1a1b1d;border-bottom:1px solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5;display:flex;justify-content:flex-start;align-items:center;padding:.5em 0;text-align:left;width:100%;font-size:.65em}:host::ng-deep .modal-title-container .modal-logo{margin:0 .5em;height:1.5em;width:1.5em}:host::ng-deep .modal-title-container .modal-title-text-container{display:flex;align-items:center;margin:0 1em;flex-grow:1}:host::ng-deep .modal-title-container .modal-title-text-container .modal-title{font-family:Montserrat,sans-serif;font-weight:400;color:#64666c;text-transform:uppercase;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host::ng-deep .modal-title-container .modal-title-text-container .modal-title:nth-child(1){margin:0 .3em 0 0}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){:host::ng-deep .modal-title-container{border-bottom:1px solid #d24077}}"]
            }]
    }], function () { return []; }, { title: [{
            type: Input
        }], subtitle: [{
            type: Input
        }], modalLogo: [{
            type: Input
        }] }); })();
export { GlSharedComponentModalHeaderComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJuZzovZ2wtbmctZnJvbnRlbmQvbGliL3NoYXJlZC9jb21wb25lbnQvbW9kYWwvaGVhZGVyL2dsLXNoYXJlZC1jb21wb25lbnQtbW9kYWwtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPakQsSUFBYTtBQUFxQyxHQUFsRCxNQUFhLHFDQUFxQyxPQUloRCxnQkFBZ0IsQ0FBQyxFQUNsQixDQUFBLENBSlUsMUVBRFgsSUFBYSxxQ0FBcUMsR0FBbEQsTUFBYSxxQ0FBcUM7Q0FDL0MsS0FBSyxFQUFFLFJBQVYsSUFHRSxnQkFBZ0IsQ0FBQztBQUNuQixDQUFDO29EQUp3QixFQUNkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzcENBR1Y7QUFKVTtBQUFhLElBQXJCLEtBQUssRUFBRTs7QUFDQztJQUFSLEtBQUssRUFBRSxYQUFjLElBQXJCLEtBQUssRUFBRTt1RUFBa0IsdkVBQWpCLHVFQUFpQjtBQUNqQixBQUFBO0lBQVIsS0FBSyxFQUFFLFhBQWMsSUFBckIsS0FBSyxFQUFFO3dFQUFtQix4RUFBbEIsd0VBQWtCO0FBSGhCLHFDQUFxQyxvQkFMakQsU0FBUyxDQUFDLFVBQ1QsUUFBUSxFQUFFLHZGQUlDLHFDQUFxQyxvQkFMakQsU0FBUyxDQUFDLFVBQ1QsUUFBUSxFQUFFOztBQUFrQyxVQUM1QyxWQUQ0QyxVQUM1Qzs7dU5BQWdFLEFBQUE7Z2pDQUVqRSxDQUFDLElBQ1cscUNBQXFDLENBS2pELFdBTFksdERBRFosQ0FBQyxJQUNXLHFDQUFxQyxDQUtqRDtHQUxpRDs7Ozs7OztvQkFNbEQ7O0FBYkEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtbW9kYWwtaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dsLXNoYXJlZC1jb21wb25lbnQtbW9kYWwtaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1oZWFkZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudE1vZGFsSGVhZGVyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgc3VidGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgbW9kYWxMb2dvOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iXX0=