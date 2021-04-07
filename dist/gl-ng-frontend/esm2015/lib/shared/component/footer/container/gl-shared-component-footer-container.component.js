import { Component, Input } from '@angular/core';
export class GlSharedComponentFooterContainerComponent {
    constructor() {
        this.imageDescription = 'Image logo';
    }
}
GlSharedComponentFooterContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-footer-container',
                template: "<section class=\"footer-container\">\r\n  <span class=\"description\">{{ description }}</span>\r\n  <img\r\n    *ngIf=\"imageLogo != null\"\r\n    class=\"image-logo\"\r\n    [alt]=\"imageDescription\"\r\n    [src]=\"imageLogo\">\r\n  <div class=\"user-container\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</section>\r\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep{bottom:0;flex-grow:1;max-width:100vw;min-width:100vw;position:fixed;z-index:100}:host::ng-deep .footer-container{background-color:#1a1b1d;border-image-slice:.5;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8),rgba(97,61,149,.8));border-top:.1em solid;display:flex;height:1.3em;justify-content:center;position:relative;z-index:99}:host::ng-deep .footer-container .description{color:#fff;font-family:Montserrat,sans-serif;font-size:.5em;font-weight:300;letter-spacing:.14em;padding:1em;text-transform:uppercase}:host::ng-deep .footer-container .image-logo{height:1em;margin:0 0 0 .3em}:host::ng-deep .footer-container .user-container{align-self:flex-end;margin:0 .3em 0 0}:host::ng-deep .footer-container .user-container .user-container{align-items:center;display:flex;justify-content:center}"]
            },] }
];
GlSharedComponentFooterContainerComponent.ctorParameters = () => [];
GlSharedComponentFooterContainerComponent.propDecorators = {
    description: [{ type: Input }],
    imageLogo: [{ type: Input }],
    imageDescription: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1mb290ZXItY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2dsLW5nLWZyb250ZW5kL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudC9mb290ZXIvY29udGFpbmVyL2dsLXNoYXJlZC1jb21wb25lbnQtZm9vdGVyLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPakQsTUFBTSxPQUFPLHlDQUF5QztJQUtwRDtRQUZTLHFCQUFnQixHQUFXLFlBQVksQ0FBQztJQUVqQyxDQUFDOzs7WUFWbEIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQ0FBc0M7Z0JBQ2hELG9WQUFvRTs7YUFFckU7Ozs7MEJBRUUsS0FBSzt3QkFDTCxLQUFLOytCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtZm9vdGVyLWNvbnRhaW5lcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2dsLXNoYXJlZC1jb21wb25lbnQtZm9vdGVyLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1mb290ZXItY29udGFpbmVyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50Rm9vdGVyQ29udGFpbmVyQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGltYWdlTG9nbzogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGltYWdlRGVzY3JpcHRpb246IHN0cmluZyA9ICdJbWFnZSBsb2dvJztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxufVxyXG4iXX0=