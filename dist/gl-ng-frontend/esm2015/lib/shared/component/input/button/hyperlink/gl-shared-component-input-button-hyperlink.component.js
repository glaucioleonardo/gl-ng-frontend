import { Component, Input } from '@angular/core';
export class GlSharedComponentInputButtonHyperlinkComponent {
    constructor() {
        this.readonly = false;
    }
}
GlSharedComponentInputButtonHyperlinkComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-input-button-hyperlink',
                template: "<div class=\"hyperlink-container\">\n\n  <img\n    class=\"logo\"\n    [src]=\"imageSrc\"\n    [alt]=\"imageDescription\">\n  <span\n    *ngIf=\"readonly\"\n    class=\"message\">\n    {{ description }}\n  </span>\n  <a\n    *ngIf=\"!readonly\"\n    class=\"message\"\n    [href]=\"link\"\n    target=\"_blank\">{{ description }}</a>\n</div>\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep .hyperlink-container{align-items:center;bottom:.3em;display:flex;flex-direction:row;position:absolute;right:.3em}:host::ng-deep .hyperlink-container .logo{height:.7em;margin:0 .2em 0 0;width:.7em}:host::ng-deep .hyperlink-container .message{color:#ff9800;font-family:Montserrat,sans-serif;font-size:.5em;font-weight:400;margin:0 0 0 .2em}"]
            },] }
];
GlSharedComponentInputButtonHyperlinkComponent.ctorParameters = () => [];
GlSharedComponentInputButtonHyperlinkComponent.propDecorators = {
    imageSrc: [{ type: Input }],
    imageDescription: [{ type: Input }],
    description: [{ type: Input }],
    link: [{ type: Input }],
    readonly: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1idXR0b24taHlwZXJsaW5rLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2dsLW5nLWZyb250ZW5kL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudC9pbnB1dC9idXR0b24vaHlwZXJsaW5rL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtYnV0dG9uLWh5cGVybGluay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPakQsTUFBTSxPQUFPLDhDQUE4QztJQU96RDtRQUZTLGFBQVEsR0FBRyxLQUFLLENBQUM7SUFFVixDQUFDOzs7WUFabEIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw0Q0FBNEM7Z0JBQ3RELG1XQUEwRTs7YUFFM0U7Ozs7dUJBRUUsS0FBSzsrQkFDTCxLQUFLOzBCQUNMLEtBQUs7bUJBQ0wsS0FBSzt1QkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LWJ1dHRvbi1oeXBlcmxpbmsnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1idXR0b24taHlwZXJsaW5rLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1idXR0b24taHlwZXJsaW5rLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRJbnB1dEJ1dHRvbkh5cGVybGlua0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGltYWdlU3JjOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGltYWdlRGVzY3JpcHRpb246IHN0cmluZztcbiAgQElucHV0KCkgZGVzY3JpcHRpb246IHN0cmluZztcbiAgQElucHV0KCkgbGluazogc3RyaW5nO1xuICBASW5wdXQoKSByZWFkb25seSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iXX0=