import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let GlSharedComponentTitleLabelSimpleComponent = class GlSharedComponentTitleLabelSimpleComponent {
    constructor() {
        this.class = '';
        this.required = false;
        this.requiredLabel = 'Required field';
    }
};
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
GlSharedComponentTitleLabelSimpleComponent = __decorate([
    Component({
        selector: 'gl-shared-component-title-label-simple',
        template: "<label\n  class=\"header-data {{ labelAlignment }} {{ class }}\"\n  [attr.for]=\"id\">{{ labelValue }}\n</label>\n<img\n  *ngIf=\"required\"\n  src=\"../assets/img/icon/label/dot.svg\"\n  class=\"required-fill-dot {{ class }}\"\n  [title]=\"requiredLabel\"\n  alt=\"Required fill icon\">\n",
        styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep{display:flex;flex-grow:1}:host::ng-deep .header-data{position:relative;flex-grow:1;font-family:Montserrat,sans-serif;font-weight:400;background-color:#2c2c2f;color:#fff;font-size:.45em;padding:1em;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host::ng-deep .header-data.light{background-color:rgba(0,0,0,.3)}:host::ng-deep .header-data.dark{background-color:#111112}:host::ng-deep .header-data.left{text-align:left}:host::ng-deep .header-data.center{text-align:center}:host::ng-deep .header-data.right{text-align:right}:host::ng-deep .header-data.report{background-color:rgba(210,64,119,.8);font-size:.7em;padding:.5em}:host::ng-deep .required-fill-dot{position:absolute;top:.5em;right:.2em;width:.3em;height:.3em}"]
    })
], GlSharedComponentTitleLabelSimpleComponent);
export { GlSharedComponentTitleLabelSimpleComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC10aXRsZS1sYWJlbC1zaW1wbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2wtbmctZnJvbnRlbmQvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL2NvbXBvbmVudC90aXRsZS9sYWJlbC9zaW1wbGUvZ2wtc2hhcmVkLWNvbXBvbmVudC10aXRsZS1sYWJlbC1zaW1wbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU9qRCxJQUFhLDBDQUEwQyxHQUF2RCxNQUFhLDBDQUEwQztJQVVyRDtRQUxTLFVBQUssR0FBRyxFQUFFLENBQUM7UUFFWCxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGtCQUFhLEdBQUcsZ0JBQWdCLENBQUM7SUFFMUIsQ0FBQztDQUNsQixDQUFBO0FBVFU7SUFBUixLQUFLLEVBQUU7OEVBQVk7QUFDWDtJQUFSLEtBQUssRUFBRTtzRUFBSTtBQUNIO0lBQVIsS0FBSyxFQUFFO2tGQUF3QjtBQUN2QjtJQUFSLEtBQUssRUFBRTt5RUFBWTtBQUVYO0lBQVIsS0FBSyxFQUFFOzRFQUFrQjtBQUNqQjtJQUFSLEtBQUssRUFBRTtpRkFBa0M7QUFSL0IsMENBQTBDO0lBTHRELFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSx3Q0FBd0M7UUFDbEQsNlNBQXNFOztLQUV2RSxDQUFDO0dBQ1csMENBQTBDLENBV3REO1NBWFksMENBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LXRpdGxlLWxhYmVsLXNpbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LXRpdGxlLWxhYmVsLXNpbXBsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtdGl0bGUtbGFiZWwtc2ltcGxlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRUaXRsZUxhYmVsU2ltcGxlQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSBsYWJlbFZhbHVlO1xuICBASW5wdXQoKSBpZDtcbiAgQElucHV0KCkgbGFiZWxBbGlnbm1lbnQ6IHN0cmluZztcbiAgQElucHV0KCkgY2xhc3MgPSAnJztcblxuICBASW5wdXQoKSByZXF1aXJlZCA9IGZhbHNlO1xuICBASW5wdXQoKSByZXF1aXJlZExhYmVsID0gJ1JlcXVpcmVkIGZpZWxkJztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIl19