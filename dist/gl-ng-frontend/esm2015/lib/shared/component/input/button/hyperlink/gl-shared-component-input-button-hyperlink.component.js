import { Component, Input } from '@angular/core';
export class GlSharedComponentInputButtonHyperlinkComponent {
    constructor() {
        this.readonly = false;
    }
}
GlSharedComponentInputButtonHyperlinkComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-input-button-hyperlink',
                template: "<div class=\"hyperlink-container\">\r\n\r\n  <img\r\n    class=\"logo\"\r\n    [src]=\"imageSrc\"\r\n    [alt]=\"imageDescription\">\r\n  <span\r\n    *ngIf=\"readonly\"\r\n    class=\"message\">\r\n    {{ description }}\r\n  </span>\r\n  <a\r\n    *ngIf=\"!readonly\"\r\n    class=\"message\"\r\n    [href]=\"link\"\r\n    target=\"_blank\">{{ description }}</a>\r\n</div>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1idXR0b24taHlwZXJsaW5rLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2dsLW5nLWZyb250ZW5kL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudC9pbnB1dC9idXR0b24vaHlwZXJsaW5rL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtYnV0dG9uLWh5cGVybGluay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPakQsTUFBTSxPQUFPLDhDQUE4QztJQU96RDtRQUZTLGFBQVEsR0FBRyxLQUFLLENBQUM7SUFFVixDQUFDOzs7WUFabEIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw0Q0FBNEM7Z0JBQ3RELHFZQUEwRTs7YUFFM0U7Ozs7dUJBRUUsS0FBSzsrQkFDTCxLQUFLOzBCQUNMLEtBQUs7bUJBQ0wsS0FBSzt1QkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LWJ1dHRvbi1oeXBlcmxpbmsnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LWJ1dHRvbi1oeXBlcmxpbmsuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtYnV0dG9uLWh5cGVybGluay5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudElucHV0QnV0dG9uSHlwZXJsaW5rQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBpbWFnZVNyYzogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGltYWdlRGVzY3JpcHRpb246IHN0cmluZztcclxuICBASW5wdXQoKSBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGxpbms6IHN0cmluZztcclxuICBASW5wdXQoKSByZWFkb25seSA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG59XHJcbiJdfQ==