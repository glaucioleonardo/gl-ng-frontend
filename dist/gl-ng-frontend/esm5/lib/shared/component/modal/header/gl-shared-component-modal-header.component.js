import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
var GlSharedComponentModalHeaderComponent = /** @class */ (function () {
    function GlSharedComponentModalHeaderComponent() {
    }
    __decorate([
        Input()
    ], GlSharedComponentModalHeaderComponent.prototype, "title", void 0);
    __decorate([
        Input()
    ], GlSharedComponentModalHeaderComponent.prototype, "subtitle", void 0);
    __decorate([
        Input()
    ], GlSharedComponentModalHeaderComponent.prototype, "modalLogo", void 0);
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
    } }, styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);[_nghost-%COMP%]  .modal-title-container{background-color:#1a1b1d;border-bottom:1px solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5;display:flex;justify-content:flex-start;align-items:center;padding:.5em 0;text-align:left;width:100%;font-size:.65em}[_nghost-%COMP%]  .modal-title-container .modal-logo{margin:0 .5em;height:1.5em;width:1.5em}[_nghost-%COMP%]  .modal-title-container .modal-title-text-container{display:flex;align-items:center;margin:0 1em;flex-grow:1}[_nghost-%COMP%]  .modal-title-container .modal-title-text-container .modal-title{font-family:Montserrat,sans-serif;font-weight:400;color:#64666c;text-transform:uppercase;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[_nghost-%COMP%]  .modal-title-container .modal-title-text-container .modal-title:nth-child(1){margin:0 .3em 0 0}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){[_nghost-%COMP%]  .modal-title-container{position:relative;border-bottom:0 solid transparent!important}[_nghost-%COMP%]  .modal-title-container::after{width:100%;height:1px;left:0;bottom:1px;margin-bottom:-1px;content:\"\";position:absolute;background:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%)}}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentModalHeaderComponent, [{
        type: Component,
        args: [{
                selector: 'gl-shared-component-modal-header',
                template: "<div class=\"modal-title-container\">\n  <div class=\"modal-title-text-container\">\n    <h2 class=\"modal-title\">{{ title }}</h2>\n    <h2 class=\"modal-title\">{{ subtitle }}</h2>\n  </div>\n  <img class=\"modal-logo\" [src]=\"modalLogo\" alt=\"Header Logo\">\n</div>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep .modal-title-container{background-color:#1a1b1d;border-bottom:1px solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5;display:flex;justify-content:flex-start;align-items:center;padding:.5em 0;text-align:left;width:100%;font-size:.65em}:host::ng-deep .modal-title-container .modal-logo{margin:0 .5em;height:1.5em;width:1.5em}:host::ng-deep .modal-title-container .modal-title-text-container{display:flex;align-items:center;margin:0 1em;flex-grow:1}:host::ng-deep .modal-title-container .modal-title-text-container .modal-title{font-family:Montserrat,sans-serif;font-weight:400;color:#64666c;text-transform:uppercase;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host::ng-deep .modal-title-container .modal-title-text-container .modal-title:nth-child(1){margin:0 .3em 0 0}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){:host::ng-deep .modal-title-container{position:relative;border-bottom:0 solid transparent!important}:host::ng-deep .modal-title-container::after{width:100%;height:1px;left:0;bottom:1px;margin-bottom:-1px;content:\"\";position:absolute;background:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%)}}"]
            }]
    }], function () { return []; }, { title: [{
            type: Input
        }], subtitle: [{
            type: Input
        }], modalLogo: [{
            type: Input
        }] }); })();
    return GlSharedComponentModalHeaderComponent;
}());
export { GlSharedComponentModalHeaderComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJuZzovZ2wtbmctZnJvbnRlbmQvbGliL3NoYXJlZC9jb21wb25lbnQvbW9kYWwvaGVhZGVyL2dsLXNoYXJlZC1jb21wb25lbnQtbW9kYWwtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPakQ7b0NBSUUscENBSkY7a0JBSWtCLENBQUMsS0FIUixxQkFBUixLQUFLLEVBQUUscERBQVUsSUFHbEI7QUFFNkIsSUFGYixDQUFDO0FBQ25CLElBSlc7QUFBYSxRQUFyQixLQUFLLEVBQUU7K0JBQWUsTUFDZCxxQkFBUixLQUFLLEVBQUUsakVBREMsd0VBQWM7O0FBQ0QsUUFBckIsS0FBSyxFQUFFOzJFQUFrQiwzRUFBakIsMkVBQWlCO0lBQ2pCLEpBQVYsSUFBVTtRQUFSLEtBQUssRUFBRSxmQUFjLFFBQXJCLEtBQUssRUFBRTs0RUFBbUIsNUVBQWxCLDRFQUFrQjtJQUhoQixxQ0FBcUMsd0JBTGpELFNBQVMsQ0FBQyxjQUNULFFBQVEsRUFBRSxrQ0FBa0MsY0FDNUMsL0lBR1cscUNBQXFDLHdCQUxqRCxTQUFTLENBQUMsY0FDVCxRQUFRLEVBQUUsa0NBQWtDLGNBQzVDO3dRQUFnRSxBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NnQkFFakUsQ0FBQyxRQUNXLHFDQUFxQyxDQUtqRCxNQUFELDRDQUFDLEdBQUEsQUFMRCxJQUtDLFVBTFkscUNBQXFDLHZKQURqRCxDQUFDLFFBQ1cscUNBQXFDLENBS2pEOzs7Ozs7Ozs7Ozs7OztvQkFDRDtBQUFDLElBREQsNENBQUM7QUFDQSxDQURBLEFBTEQsSUFLQzs7QUFaQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1oZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nbC1zaGFyZWQtY29tcG9uZW50LW1vZGFsLWhlYWRlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50TW9kYWxIZWFkZXJDb21wb25lbnQge1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBzdWJ0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBtb2RhbExvZ286IHN0cmluZztcbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiJdfQ==