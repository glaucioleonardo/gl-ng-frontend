import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../../simple/gl-shared-component-title-label-simple.component';

var _c0 = ["*"];
var GlSharedComponentTitleLabelButtonContainerComponent = /** @class */ (function () {
    function GlSharedComponentTitleLabelButtonContainerComponent() {
        this.required = false;
        this.requiredFieldDescription = 'Required field';
    }
    __decorate([
        Input()
    ], GlSharedComponentTitleLabelButtonContainerComponent.prototype, "labelValue", void 0);
    __decorate([
        Input()
    ], GlSharedComponentTitleLabelButtonContainerComponent.prototype, "id", void 0);
    __decorate([
        Input()
    ], GlSharedComponentTitleLabelButtonContainerComponent.prototype, "labelAlignment", void 0);
    __decorate([
        Input()
    ], GlSharedComponentTitleLabelButtonContainerComponent.prototype, "required", void 0);
    __decorate([
        Input()
    ], GlSharedComponentTitleLabelButtonContainerComponent.prototype, "class", void 0);
    __decorate([
        Input()
    ], GlSharedComponentTitleLabelButtonContainerComponent.prototype, "requiredFieldDescription", void 0);
GlSharedComponentTitleLabelButtonContainerComponent.ɵfac = function GlSharedComponentTitleLabelButtonContainerComponent_Factory(t) { return new (t || GlSharedComponentTitleLabelButtonContainerComponent)(); };
GlSharedComponentTitleLabelButtonContainerComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentTitleLabelButtonContainerComponent, selectors: [["gl-shared-component-title-label-button-container"]], inputs: { required: "required", requiredFieldDescription: "requiredFieldDescription", labelValue: "labelValue", id: "id", labelAlignment: "labelAlignment", class: "class" }, ngContentSelectors: _c0, decls: 4, vars: 10, consts: [[3, "labelValue", "id", "labelAlignment", "required", "requiredLabel"], [1, "label-button-container"]], template: function GlSharedComponentTitleLabelButtonContainerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵelement(1, "gl-shared-component-title-label-simple", 0);
        ɵngcc0.ɵɵelementStart(2, "div", 1);
        ɵngcc0.ɵɵprojection(3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate1("label-with-button-container ", ctx.class, "");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMap(ctx.class);
        ɵngcc0.ɵɵproperty("labelValue", ctx.labelValue)("id", ctx.id)("labelAlignment", ctx.labelAlignment)("required", ctx.required)("requiredLabel", ctx.requiredFieldDescription);
    } }, directives: [ɵngcc1.GlSharedComponentTitleLabelSimpleComponent], styles: ["[_nghost-%COMP%] {display:flex;flex-grow:1}[_nghost-%COMP%]  .label-with-button-container{display:flex;flex-grow:1;background-color:#2c2c2f}[_nghost-%COMP%]  .label-with-button-container .label-button-container{display:flex;flex-grow:0;margin:0 .2em 0 0}[_nghost-%COMP%]  .label-with-button-container .label-button-container .button{margin:0 0 0 .2em}[_nghost-%COMP%]  .label-with-button-container.light{background-color:rgba(0,0,0,.3)}[_nghost-%COMP%]  .label-with-button-container.dark{background-color:#111112}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentTitleLabelButtonContainerComponent, [{
        type: Component,
        args: [{
                selector: 'gl-shared-component-title-label-button-container',
                template: "<div class=\"label-with-button-container {{ class }}\">\n  <gl-shared-component-title-label-simple\n    [labelValue]=\"labelValue\"\n    [id]=\"id\"\n    [labelAlignment]=\"labelAlignment\"\n    [required]=\"required\"\n    [class]=\"class\"\n    [requiredLabel]=\"requiredFieldDescription\"\n  ></gl-shared-component-title-label-simple>\n  <div class=\"label-button-container\">\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                styles: [":host::ng-deep{display:flex;flex-grow:1}:host::ng-deep .label-with-button-container{display:flex;flex-grow:1;background-color:#2c2c2f}:host::ng-deep .label-with-button-container .label-button-container{display:flex;flex-grow:0;margin:0 .2em 0 0}:host::ng-deep .label-with-button-container .label-button-container .button{margin:0 0 0 .2em}:host::ng-deep .label-with-button-container.light{background-color:rgba(0,0,0,.3)}:host::ng-deep .label-with-button-container.dark{background-color:#111112}"]
            }]
    }], function () { return []; }, { required: [{
            type: Input
        }], requiredFieldDescription: [{
            type: Input
        }], labelValue: [{
            type: Input
        }], id: [{
            type: Input
        }], labelAlignment: [{
            type: Input
        }], class: [{
            type: Input
        }] }); })();
    return GlSharedComponentTitleLabelButtonContainerComponent;
}());
export { GlSharedComponentTitleLabelButtonContainerComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC10aXRsZS1sYWJlbC1idXR0b24tY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsibmc6L2dsLW5nLWZyb250ZW5kL2xpYi9zaGFyZWQvY29tcG9uZW50L3RpdGxlL2xhYmVsL2J1dHRvbi9jb250YWluZXIvZ2wtc2hhcmVkLWNvbXBvbmVudC10aXRsZS1sYWJlbC1idXR0b24tY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPakQ7a0RBU0U7OztnQkFKUyxhQUFRLEdBQUcsS0FBSyxDQUFDLFNBRWpCLDZCQUF3QixHQUFXLC9FQVA5QztRQU84RCxDQUFDLEtBRTdDLENBQUMsS0FQUixxQkFBUixLQUFLLEVBQUUsaERBQVMsSUFPakI7QUFFMkMsUUFObEMsYUFBUSxHQUFHLEtBQUssQ0FBQzt3Q0FITixNQUNYLDlDQUdYLFFBQ1csNkJBQXdCLEdBQVcsZ0JBQWdCLENBQUM7QUFDL0QsSUFDa0IsQ0FBQztHQU5oQixLQUFLLEVBQUUsVkFPVixJQVJXO0FBQ1YsUUFERSxLQUFLLEVBQUU7NkRBQ0ksTUFDSCxxQkFBUix4RkFGUSwyRkFBVztBQUVkLEVBQUUsRkFEVCxJQUFVO0FBQ0YsUUFETixLQUFLLEVBQUU7aUVBQ2dCLGpFQURmLG1GQUFHO0FBQ2IsSUFBVTs7QUFBQSwrRkFBZTtJQUNmLEpBQVYsSUFBVTtRQUFSLEtBQUssRUFBRSxmQUFjLFFBQXJCLEtBQUssRUFBRTt5RkFBa0IsekZBQWpCLHlGQUFpQjtJQUNqQixKQUFWLElBQVU7UUFBUixLQUFLLEVBQUUsZkFBYyxRQUFyQixLQUFLLEVBQUU7c0ZBQWUsdEZBQWQsc0ZBQWM7SUFDZCxKQUFWLElBQVU7UUFBUixLQUFLLEVBQUUsZkFBYyxRQUFyQixLQUFLLEVBQUU7eUdBQXFELHpHQUFwRCx5R0FBb0Q7SUFQbEQsbURBQW1ELHdCQUwvRCxTQUFTLENBQUMsY0FDVCxRQUFRLEVBQUUsa0RBQWtELGNBQzVELDdLQUdXLG1EQUFtRCx3QkFML0QsU0FBUyxDQUFDLGNBQ1QsUUFBUSxFQUFFLGtEQUFrRCxjQUM1RDswWkFBZ0YsQUFBQTs7Ozs7Ozs7S0FFakYsQ0FBQyxRQUNXLFRBRFosQ0FBQyxRQUNXOzZDQUFtRCxDQVUvRCxNQUFELFBBVmdFLENBVS9EO3dCQUFBLEdBQUEsQUFWRDtFQVVDLFVBVlk7eUJBQW1EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBV2hFO0FBQUMsSUFERCwwREFBQztBQUNBLENBREEsQUFWRCxJQVVDOztBQWpCQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2wtc2hhcmVkLWNvbXBvbmVudC10aXRsZS1sYWJlbC1idXR0b24tY29udGFpbmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dsLXNoYXJlZC1jb21wb25lbnQtdGl0bGUtbGFiZWwtYnV0dG9uLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtdGl0bGUtbGFiZWwtYnV0dG9uLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50VGl0bGVMYWJlbEJ1dHRvbkNvbnRhaW5lckNvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgbGFiZWxWYWx1ZTtcbiAgQElucHV0KCkgaWQ7XG4gIEBJbnB1dCgpIGxhYmVsQWxpZ25tZW50O1xuICBASW5wdXQoKSByZXF1aXJlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBjbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSByZXF1aXJlZEZpZWxkRGVzY3JpcHRpb246IHN0cmluZyA9ICdSZXF1aXJlZCBmaWVsZCc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiJdfQ==