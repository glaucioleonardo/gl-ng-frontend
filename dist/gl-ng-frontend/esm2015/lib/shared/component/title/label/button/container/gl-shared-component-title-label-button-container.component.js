import { Component, Input } from '@angular/core';
export class GlSharedComponentTitleLabelButtonContainerComponent {
    constructor() {
        this.required = false;
        this.requiredFieldDescription = 'Required field';
    }
}
GlSharedComponentTitleLabelButtonContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-title-label-button-container',
                template: "<div class=\"label-with-button-container {{ class }}\">\n  <gl-shared-component-title-label-simple\n    [labelValue]=\"labelValue\"\n    [id]=\"id\"\n    [labelAlignment]=\"labelAlignment\"\n    [required]=\"required\"\n    [class]=\"class\"\n    [requiredLabel]=\"requiredFieldDescription\"\n  ></gl-shared-component-title-label-simple>\n  <div class=\"label-button-container\">\n    <ng-content></ng-content>\n  </div>\n</div>\n",
                styles: [":host::ng-deep{display:flex;flex-grow:0}:host::ng-deep .label-with-button-container{background-color:#2c2c2f;display:flex;flex-grow:1}:host::ng-deep .label-with-button-container .label-button-container{display:flex;flex-grow:0;margin:0 .2em 0 0}:host::ng-deep .label-with-button-container .label-button-container .button{margin:0 0 0 .2em}:host::ng-deep .label-with-button-container.light{background-color:rgba(0,0,0,.3)}:host::ng-deep .label-with-button-container.dark{background-color:#111112}"]
            },] }
];
GlSharedComponentTitleLabelButtonContainerComponent.ctorParameters = () => [];
GlSharedComponentTitleLabelButtonContainerComponent.propDecorators = {
    labelValue: [{ type: Input }],
    id: [{ type: Input }],
    labelAlignment: [{ type: Input }],
    required: [{ type: Input }],
    class: [{ type: Input }],
    requiredFieldDescription: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC10aXRsZS1sYWJlbC1idXR0b24tY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2dsLW5nLWZyb250ZW5kL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudC90aXRsZS9sYWJlbC9idXR0b24vY29udGFpbmVyL2dsLXNoYXJlZC1jb21wb25lbnQtdGl0bGUtbGFiZWwtYnV0dG9uLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPakQsTUFBTSxPQUFPLG1EQUFtRDtJQVM5RDtRQUpTLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFakIsNkJBQXdCLEdBQVcsZ0JBQWdCLENBQUM7SUFFN0MsQ0FBQzs7O1lBZGxCLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0RBQWtEO2dCQUM1RCwwYkFBZ0Y7O2FBRWpGOzs7O3lCQUdFLEtBQUs7aUJBQ0wsS0FBSzs2QkFDTCxLQUFLO3VCQUNMLEtBQUs7b0JBQ0wsS0FBSzt1Q0FDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LXRpdGxlLWxhYmVsLWJ1dHRvbi1jb250YWluZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC10aXRsZS1sYWJlbC1idXR0b24tY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC10aXRsZS1sYWJlbC1idXR0b24tY29udGFpbmVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRUaXRsZUxhYmVsQnV0dG9uQ29udGFpbmVyQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSBsYWJlbFZhbHVlO1xuICBASW5wdXQoKSBpZDtcbiAgQElucHV0KCkgbGFiZWxBbGlnbm1lbnQ7XG4gIEBJbnB1dCgpIHJlcXVpcmVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJlcXVpcmVkRmllbGREZXNjcmlwdGlvbjogc3RyaW5nID0gJ1JlcXVpcmVkIGZpZWxkJztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIl19