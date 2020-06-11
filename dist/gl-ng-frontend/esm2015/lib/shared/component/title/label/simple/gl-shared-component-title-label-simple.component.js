import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function GlSharedComponentTitleLabelSimpleComponent_img_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "img", 1);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("required-fill-dot ", ctx_r0.class, "");
    ɵngcc0.ɵɵproperty("title", ctx_r0.requiredLabel);
} }
let GlSharedComponentTitleLabelSimpleComponent = class GlSharedComponentTitleLabelSimpleComponent {
    constructor() {
        this.class = '';
        this.required = false;
        this.requiredLabel = 'Required field';
    }
};
GlSharedComponentTitleLabelSimpleComponent.ɵfac = function GlSharedComponentTitleLabelSimpleComponent_Factory(t) { return new (t || GlSharedComponentTitleLabelSimpleComponent)(); };
GlSharedComponentTitleLabelSimpleComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentTitleLabelSimpleComponent, selectors: [["gl-shared-component-title-label-simple"]], inputs: { class: "class", required: "required", requiredLabel: "requiredLabel", labelValue: "labelValue", id: "id", labelAlignment: "labelAlignment" }, decls: 3, vars: 7, consts: [["src", "../assets/img/icon/label/dot.svg", "alt", "Required fill icon", 3, "class", "title", 4, "ngIf"], ["src", "../assets/img/icon/label/dot.svg", "alt", "Required fill icon", 3, "title"]], template: function GlSharedComponentTitleLabelSimpleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "label");
        ɵngcc0.ɵɵtext(1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(2, GlSharedComponentTitleLabelSimpleComponent_img_2_Template, 1, 4, "img", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate2("header-data ", ctx.labelAlignment, " ", ctx.class, "");
        ɵngcc0.ɵɵattribute("for", ctx.id);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate1("", ctx.labelValue, "\n");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.required);
    } }, directives: [ɵngcc1.NgIf], styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);[_nghost-%COMP%] {display:flex;flex-grow:1}[_nghost-%COMP%]  .header-data{position:relative;flex-grow:1;font-family:Montserrat,sans-serif;font-weight:700;background-color:#2c2c2f;color:#fff;font-size:.4em;padding:1.25em 1em;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[_nghost-%COMP%]  .header-data.light{background-color:rgba(0,0,0,.3)}[_nghost-%COMP%]  .header-data.left{text-align:left}[_nghost-%COMP%]  .header-data.center{text-align:center}[_nghost-%COMP%]  .header-data.right{text-align:right}[_nghost-%COMP%]  .header-data.report{background-color:rgba(210,64,119,.8);font-size:.7em;padding:.5em}[_nghost-%COMP%]  .required-fill-dot{position:absolute;top:.5em;right:.2em;width:.3em;height:.3em}[_nghost-%COMP%]  .required-fill-dot.light{opacity:.5}"] });
__decorate([
    Input()
], GlSharedComponentTitleLabelSimpleComponent.prototype, "labelValue", void 0);
__decorate([
    Input()
], GlSharedComponentTitleLabelSimpleComponent.prototype, "id", void 0);
__decorate([
    Input()
], GlSharedComponentTitleLabelSimpleComponent.prototype, "labelAlignment", void 0);
__decorate([
    Input()
], GlSharedComponentTitleLabelSimpleComponent.prototype, "class", void 0);
__decorate([
    Input()
], GlSharedComponentTitleLabelSimpleComponent.prototype, "required", void 0);
__decorate([
    Input()
], GlSharedComponentTitleLabelSimpleComponent.prototype, "requiredLabel", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentTitleLabelSimpleComponent, [{
        type: Component,
        args: [{
                selector: 'gl-shared-component-title-label-simple',
                template: "<label\n  class=\"header-data {{ labelAlignment }} {{ class }}\"\n  [attr.for]=\"id\">{{ labelValue }}\n</label>\n<img\n  *ngIf=\"required\"\n  src=\"../assets/img/icon/label/dot.svg\"\n  class=\"required-fill-dot {{ class }}\"\n  [title]=\"requiredLabel\"\n  alt=\"Required fill icon\">\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep{display:flex;flex-grow:1}:host::ng-deep .header-data{position:relative;flex-grow:1;font-family:Montserrat,sans-serif;font-weight:700;background-color:#2c2c2f;color:#fff;font-size:.4em;padding:1.25em 1em;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host::ng-deep .header-data.light{background-color:rgba(0,0,0,.3)}:host::ng-deep .header-data.left{text-align:left}:host::ng-deep .header-data.center{text-align:center}:host::ng-deep .header-data.right{text-align:right}:host::ng-deep .header-data.report{background-color:rgba(210,64,119,.8);font-size:.7em;padding:.5em}:host::ng-deep .required-fill-dot{position:absolute;top:.5em;right:.2em;width:.3em;height:.3em}:host::ng-deep .required-fill-dot.light{opacity:.5}"]
            }]
    }], function () { return []; }, { class: [{
            type: Input
        }], required: [{
            type: Input
        }], requiredLabel: [{
            type: Input
        }], labelValue: [{
            type: Input
        }], id: [{
            type: Input
        }], labelAlignment: [{
            type: Input
        }] }); })();
export { GlSharedComponentTitleLabelSimpleComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC10aXRsZS1sYWJlbC1zaW1wbGUuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJuZzovZ2wtbmctZnJvbnRlbmQvbGliL3NoYXJlZC9jb21wb25lbnQvdGl0bGUvbGFiZWwvc2ltcGxlL2dsLXNoYXJlZC1jb21wb25lbnQtdGl0bGUtbGFiZWwtc2ltcGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPakQsSUFBYTtLQUEwQyxHQUF2RCxNQUFhOztZQUEwQyxPQVVyRCx3QkFMUyxVQUFLLEdBQUcsRUFBRSxDQUFDLFNBRVgsYUFBUSxHQUFHLEtBQUssQ0FBQztPQUNqQixrQkFBYSxHQUFHO1NBQWdCLENBQUMsS0FFMUI7QUFBQyxFQUNsQixDQUFBLENBVFUsaUJBQVIsS0FBSyxFQUFFO2dFQUFZLEVBQ1g7UUFBUixLQUFLLEVBQUU7OzRCQUFJLDVCQUhkLElBQWEsMENBQTBDLEdBQXZELE1BQWEsMENBQTBDO0FBQ3ZELElBU0U7QUFBZ0IsUUFMUCxVQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLFFBQ1csYUFBUSxHQUFHLEtBQUssQ0FBQztBQUM1QixRQUFXLGtCQUFhLEdBQUcsZ0JBQWdCLENBQUM7QUFDNUMsSUFDa0IsQ0FBQztBQUNuQixDQUFDOzs7Ozs7Ozs7Ozs7OztxOEJBQUE7QUFUVTtBQUNWLElBREUsS0FBSyxFQUFFO0FBQUMsOEVBQVc7QUFDWDs7QUFBQSxzRUFBRztBQUNILEFBQUE7SUFBUixLQUFLLEVBQUUsWEFBYyxJQUFyQixLQUFLLEVBQUU7a0ZBQXdCLGxGQUF2QixrRkFBdUI7QUFDdkIsQUFBQTtJQUFSLEtBQUssRUFBRSxYQUVWLElBRkcsS0FBSyxFQUFFO3lFQUFZLHpFQUFYLHlFQUFXO0FBRVgsQUFBQTtJQUFSLEtBQUssRUFBRSxYQUFjLElBQXJCLEtBQUssRUFBRTs0RUFBa0IsNUVBQWpCLDRFQUFpQjtBQUNqQixBQUFBO0lBQVIsS0FBSyxFQUFFLFhBQWMsSUFBckIsS0FBSyxFQUFFO2lGQUFrQyxqRkFBakMsaUZBQWlDO0FBUi9CLDBDQUEwQyxvQkFMdEQsU0FBUyxDQUFDLFVBQ1QsUUFBUSxFQUFFLDVGQUlDLDBDQUEwQyxvQkFMdEQsU0FBUyxDQUFDLFVBQ1QsUUFBUSxFQUFFOztNQUF3QyxVQUNsRCxWQURrRCxVQUNsRDs7d09BQXNFLEFBQUE7MnpCQUV2RSxDQUFDLElBQ1csMENBQTBDLENBV3RELFdBWFksM0RBRFosQ0FBQyxJQUNXLDBDQUEwQyxDQVd0RDthQVhzRDs7Ozs7Ozs7Ozs7OztvQkFZdkQ7O0FBbkJBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LXRpdGxlLWxhYmVsLXNpbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LXRpdGxlLWxhYmVsLXNpbXBsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtdGl0bGUtbGFiZWwtc2ltcGxlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRUaXRsZUxhYmVsU2ltcGxlQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSBsYWJlbFZhbHVlO1xuICBASW5wdXQoKSBpZDtcbiAgQElucHV0KCkgbGFiZWxBbGlnbm1lbnQ6IHN0cmluZztcbiAgQElucHV0KCkgY2xhc3MgPSAnJztcblxuICBASW5wdXQoKSByZXF1aXJlZCA9IGZhbHNlO1xuICBASW5wdXQoKSByZXF1aXJlZExhYmVsID0gJ1JlcXVpcmVkIGZpZWxkJztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIl19