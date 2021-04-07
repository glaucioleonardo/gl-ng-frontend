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
                template: "<div class=\"label-with-button-container {{ class }}\">\r\n  <gl-shared-component-title-label-simple\r\n    [labelValue]=\"labelValue\"\r\n    [id]=\"id\"\r\n    [labelAlignment]=\"labelAlignment\"\r\n    [required]=\"required\"\r\n    [class]=\"class\"\r\n    [requiredLabel]=\"requiredFieldDescription\"\r\n  ></gl-shared-component-title-label-simple>\r\n  <div class=\"label-button-container\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC10aXRsZS1sYWJlbC1idXR0b24tY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2dsLW5nLWZyb250ZW5kL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudC90aXRsZS9sYWJlbC9idXR0b24vY29udGFpbmVyL2dsLXNoYXJlZC1jb21wb25lbnQtdGl0bGUtbGFiZWwtYnV0dG9uLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRakQsTUFBTSxPQUFPLG1EQUFtRDtJQVM5RDtRQUpTLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFakIsNkJBQXdCLEdBQVcsZ0JBQWdCLENBQUM7SUFFN0MsQ0FBQzs7O1lBZGxCLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0RBQWtEO2dCQUM1RCxvZEFBZ0Y7O2FBRWpGOzs7O3lCQUdFLEtBQUs7aUJBQ0wsS0FBSzs2QkFDTCxLQUFLO3VCQUNMLEtBQUs7b0JBQ0wsS0FBSzt1Q0FDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUSG9yaXpvbnRhbEFsaWdubWVudCB9IGZyb20gJy4uLy4uL3NpbXBsZS9nbC1zaGFyZWQtY29tcG9uZW50LXRpdGxlLWxhYmVsLXNpbXBsZS5pbnRlcmZhY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LXRpdGxlLWxhYmVsLWJ1dHRvbi1jb250YWluZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LXRpdGxlLWxhYmVsLWJ1dHRvbi1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtdGl0bGUtbGFiZWwtYnV0dG9uLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudFRpdGxlTGFiZWxCdXR0b25Db250YWluZXJDb21wb25lbnQge1xyXG5cclxuICBASW5wdXQoKSBsYWJlbFZhbHVlO1xyXG4gIEBJbnB1dCgpIGlkO1xyXG4gIEBJbnB1dCgpIGxhYmVsQWxpZ25tZW50OiBUSG9yaXpvbnRhbEFsaWdubWVudDtcclxuICBASW5wdXQoKSByZXF1aXJlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcmVxdWlyZWRGaWVsZERlc2NyaXB0aW9uOiBzdHJpbmcgPSAnUmVxdWlyZWQgZmllbGQnO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG59XHJcbiJdfQ==