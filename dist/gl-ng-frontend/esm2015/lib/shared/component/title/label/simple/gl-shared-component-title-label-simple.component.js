import { Component, Input } from '@angular/core';
export class GlSharedComponentTitleLabelSimpleComponent {
    constructor() {
        this.class = '';
        this.required = false;
        this.requiredLabel = 'Required field';
    }
}
GlSharedComponentTitleLabelSimpleComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-title-label-simple',
                template: "<label\n  class=\"header-data {{ labelAlignment }} {{ class }}\"\n  [attr.for]=\"id\">{{ labelValue }}\n</label>\n<img\n  *ngIf=\"required\"\n  src=\"../assets/img/icon/label/dot.svg\"\n  class=\"required-fill-dot {{ class }}\"\n  [title]=\"requiredLabel\"\n  alt=\"Required fill icon\">\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep{display:flex;flex-grow:1}:host::ng-deep .header-data{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;background-color:#2c2c2f;color:#fff;flex-grow:1;font-family:Montserrat,sans-serif;font-size:.45em;font-weight:400;padding:1em;position:relative;text-align:center;user-select:none}:host::ng-deep .header-data.light{background-color:rgba(0,0,0,.3)}:host::ng-deep .header-data.dark{background-color:#111112}:host::ng-deep .header-data.left{text-align:left}:host::ng-deep .header-data.center{text-align:center}:host::ng-deep .header-data.right{text-align:right}:host::ng-deep .header-data.report{background-color:rgba(210,64,119,.8);font-size:.7em;padding:.5em}:host::ng-deep .required-fill-dot{height:.3em;position:absolute;right:.2em;top:.5em;width:.3em}"]
            },] }
];
GlSharedComponentTitleLabelSimpleComponent.ctorParameters = () => [];
GlSharedComponentTitleLabelSimpleComponent.propDecorators = {
    labelValue: [{ type: Input }],
    id: [{ type: Input }],
    labelAlignment: [{ type: Input }],
    class: [{ type: Input }],
    required: [{ type: Input }],
    requiredLabel: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC10aXRsZS1sYWJlbC1zaW1wbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZ2wtbmctZnJvbnRlbmQvc3JjL2xpYi9zaGFyZWQvY29tcG9uZW50L3RpdGxlL2xhYmVsL3NpbXBsZS9nbC1zaGFyZWQtY29tcG9uZW50LXRpdGxlLWxhYmVsLXNpbXBsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPakQsTUFBTSxPQUFPLDBDQUEwQztJQVVyRDtRQUxTLFVBQUssR0FBRyxFQUFFLENBQUM7UUFFWCxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGtCQUFhLEdBQUcsZ0JBQWdCLENBQUM7SUFFMUIsQ0FBQzs7O1lBZmxCLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0NBQXdDO2dCQUNsRCw2U0FBc0U7O2FBRXZFOzs7O3lCQUdFLEtBQUs7aUJBQ0wsS0FBSzs2QkFDTCxLQUFLO29CQUNMLEtBQUs7dUJBRUwsS0FBSzs0QkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LXRpdGxlLWxhYmVsLXNpbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LXRpdGxlLWxhYmVsLXNpbXBsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtdGl0bGUtbGFiZWwtc2ltcGxlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRUaXRsZUxhYmVsU2ltcGxlQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSBsYWJlbFZhbHVlO1xuICBASW5wdXQoKSBpZDtcbiAgQElucHV0KCkgbGFiZWxBbGlnbm1lbnQ6IHN0cmluZztcbiAgQElucHV0KCkgY2xhc3MgPSAnJztcblxuICBASW5wdXQoKSByZXF1aXJlZCA9IGZhbHNlO1xuICBASW5wdXQoKSByZXF1aXJlZExhYmVsID0gJ1JlcXVpcmVkIGZpZWxkJztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIl19