import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../../simple/gl-shared-component-title-label-simple.component';

const _c0 = ["*"];
let GlSharedComponentTitleLabelButtonContainerComponent = class GlSharedComponentTitleLabelButtonContainerComponent {
    constructor() {
        this.required = false;
        this.requiredFieldDescription = 'Required field';
    }
};
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
export { GlSharedComponentTitleLabelButtonContainerComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC10aXRsZS1sYWJlbC1idXR0b24tY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsibmc6L2dsLW5nLWZyb250ZW5kL2xpYi9zaGFyZWQvY29tcG9uZW50L3RpdGxlL2xhYmVsL2J1dHRvbi9jb250YWluZXIvZ2wtc2hhcmVkLWNvbXBvbmVudC10aXRsZS1sYWJlbC1idXR0b24tY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPakQsSUFBYTtjQUFtRCxHQUFoRSxNQUFhLG1EQUFtRCxPQVM5RDs7ZUFKUztTQUFRLEdBQUcsS0FBSyxDQUFDLFNBRWpCLDZCQUF3QixHQUFXLGdCQUFnQixDQUFDLEtBRTdDLENBQUMsRUFDbEIsQ0FBQSxDQVJVLGlCQUFSLEtBQUssRUFBRSw5R0FGVixJQUFhLG1EQUFtRCxHQUFoRSxNQUFhLG1EQUFtRDtBQUNoRSxJQVFFO0FBQWdCLFFBSlAsYUFBUSxHQUFHLEtBQUssQ0FBQzs2QkFITixFQUNYLGlCQUFSLEtBQUssRUFBRSx2REFHVixRQUNXLDZCQUF3QixHQUFXLGdCQUFnQixDQUFDO0FBQy9ELElBQ2tCLENBQUM7QUFDbkIsQ0FBQztvRUFQYSxFQUNIOzs7Ozs7Ozs7Ozs7OzsybEJBTVY7QUFSVTtBQUNWLElBREUsS0FBSyxFQUFFO0FBQUMsdUZBQVc7QUFDWDtBQUNGLElBRE4sS0FBSyxFQUFFOztBQUNDO0lBQVIsS0FBSyxFQUFFLFhBQWMsSUFBckIsS0FBSyxFQUFFOzJGQUFnQiwzRkFBZiwyRkFBZTtBQUNmLEFBQUE7SUFBUixLQUFLLEVBQUUsWEFBYyxJQUFyQixLQUFLLEVBQUU7cUZBQWtCLHJGQUFqQixxRkFBaUI7QUFDakIsQUFBQTtJQUFSLEtBQUssRUFBRSxYQUFjLElBQXJCLEtBQUssRUFBRTtrRkFBZSxsRkFBZCxrRkFBYztBQUNkLEFBQUE7SUFBUixLQUFLLEVBQUUsWEFBYyxJQUFyQixLQUFLLEVBQUU7cUdBQXFELHJHQUFwRCxxR0FBb0Q7QUFQbEQsbURBQW1ELG9CQUwvRCxTQUFTLENBQUMsVUFDVCxRQUFRLEVBQUUsckdBSUMsbURBQW1ELG9CQUwvRCxTQUFTLENBQUMsVUFDVCxRQUFRLEVBQUU7O2dCQUFrRCxBQUFBO1NBQzVELEFBQUE7cVhBQWdGLEFBQUE7b2JBRWpGLENBQUMsSUFDVyxtREFBbUQsQ0FVL0QsV0FWWSxwRUFEWixDQUFDLElBQ1csbURBQW1ELENBVS9EOztnQkFWK0Q7Ozs7Ozs7Ozs7OztvQkFXaEU7O0FBbEJBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LXRpdGxlLWxhYmVsLWJ1dHRvbi1jb250YWluZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC10aXRsZS1sYWJlbC1idXR0b24tY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC10aXRsZS1sYWJlbC1idXR0b24tY29udGFpbmVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRUaXRsZUxhYmVsQnV0dG9uQ29udGFpbmVyQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSBsYWJlbFZhbHVlO1xuICBASW5wdXQoKSBpZDtcbiAgQElucHV0KCkgbGFiZWxBbGlnbm1lbnQ7XG4gIEBJbnB1dCgpIHJlcXVpcmVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJlcXVpcmVkRmllbGREZXNjcmlwdGlvbjogc3RyaW5nID0gJ1JlcXVpcmVkIGZpZWxkJztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIl19