import { Component, Input } from '@angular/core';
export class GlSharedComponentFilterContainerComponent {
    constructor() { }
}
GlSharedComponentFilterContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-filter-container',
                template: "<div class=\"type-container\">\n  <label class=\"title\">{{ label }}</label>\n  <ng-content></ng-content>\n</div>\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep .type-container{background-color:#2c2c2f;border-bottom:1px solid #38393c;display:flex;flex-direction:column;padding:.7em .7em .2em}:host::ng-deep .type-container .title{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;color:#d24077;font-family:Montserrat,sans-serif;font-size:.4em;font-weight:700;font-weight:400;text-transform:uppercase;user-select:none}"]
            },] }
];
GlSharedComponentFilterContainerComponent.ctorParameters = () => [];
GlSharedComponentFilterContainerComponent.propDecorators = {
    label: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1maWx0ZXItY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2dsLW5nLWZyb250ZW5kL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudC9maWx0ZXIvY29udGFpbmVyL2dsLXNoYXJlZC1jb21wb25lbnQtZmlsdGVyLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPakQsTUFBTSxPQUFPLHlDQUF5QztJQUdwRCxnQkFBZ0IsQ0FBQzs7O1lBUmxCLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0NBQXNDO2dCQUNoRCwrSEFBb0U7O2FBRXJFOzs7O29CQUVFLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtZmlsdGVyLWNvbnRhaW5lcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWZpbHRlci1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nbC1zaGFyZWQtY29tcG9uZW50LWZpbHRlci1jb250YWluZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudEZpbHRlckNvbnRhaW5lckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiJdfQ==