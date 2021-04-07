import { Component, Input } from '@angular/core';
export class GlSharedComponentFooterSimpleComponent {
    constructor() {
        this.imageDescription = 'Image logo';
    }
}
GlSharedComponentFooterSimpleComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-footer-simple',
                template: "<section class=\"footer-container\">\r\n  <span class=\"description\">{{ description }}</span>\r\n  <img\r\n    *ngIf=\"imageLogo != null\"\r\n    class=\"image-logo\"\r\n    [alt]=\"imageDescription\"\r\n    [src]=\"imageLogo\">\r\n</section>\r\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep{bottom:0;flex-grow:1;max-width:100vw;min-width:100vw;position:fixed;z-index:100}:host::ng-deep .footer-container{background-color:#1a1b1d;border-image-slice:.5;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8),rgba(97,61,149,.8));border-top:.1em solid;display:flex;height:1.3em;justify-content:center;position:relative;z-index:99}:host::ng-deep .footer-container .description{color:#fff;font-family:Montserrat,sans-serif;font-size:.5em;font-weight:300;letter-spacing:.14em;padding:1em;text-transform:uppercase}:host::ng-deep .footer-container .image-logo{height:1em;margin:0 0 0 .3em}@media screen and (min-device-width:280px) and (orientation:portrait){:host::ng-deep .footer-container{font-size:7vw}}@media screen and (min-device-width:700px) and (orientation:portrait){:host::ng-deep .footer-container{font-size:6vw}}@media screen and (min-device-width:800px) and (orientation:portrait){:host::ng-deep .footer-container{font-size:5vw}}@media screen and (min-device-width:1300px) and (orientation:portrait){:host::ng-deep .footer-container{font-size:4vw}}"]
            },] }
];
GlSharedComponentFooterSimpleComponent.ctorParameters = () => [];
GlSharedComponentFooterSimpleComponent.propDecorators = {
    description: [{ type: Input }],
    imageLogo: [{ type: Input }],
    imageDescription: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1mb290ZXItc2ltcGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2dsLW5nLWZyb250ZW5kL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudC9mb290ZXIvc2ltcGxlL2dsLXNoYXJlZC1jb21wb25lbnQtZm9vdGVyLXNpbXBsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPakQsTUFBTSxPQUFPLHNDQUFzQztJQUtqRDtRQUZTLHFCQUFnQixHQUFXLFlBQVksQ0FBQztJQUVqQyxDQUFDOzs7WUFWbEIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQ0FBbUM7Z0JBQzdDLG1RQUFpRTs7YUFFbEU7Ozs7MEJBRUUsS0FBSzt3QkFDTCxLQUFLOytCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtZm9vdGVyLXNpbXBsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2dsLXNoYXJlZC1jb21wb25lbnQtZm9vdGVyLXNpbXBsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1mb290ZXItc2ltcGxlLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50Rm9vdGVyU2ltcGxlQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGltYWdlTG9nbzogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGltYWdlRGVzY3JpcHRpb246IHN0cmluZyA9ICdJbWFnZSBsb2dvJztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxufVxyXG4iXX0=