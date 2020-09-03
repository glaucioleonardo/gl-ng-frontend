import { Component, Input } from '@angular/core';
export class GlSharedComponentButtonImageSimpleComponent {
    constructor() { }
}
GlSharedComponentButtonImageSimpleComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-button-image-simple',
                template: "<img\n  class=\"button\"\n  [id]=\"id\"\n  [src]=\"src\"\n  [alt]=\"alt\"\n  (click)=\"callback($event)\">\n",
                styles: [":host::ng-deep{align-items:center;display:flex}:host::ng-deep .button{height:1em;width:1em}:host::ng-deep .button:not(hover){opacity:.5;transform:scale(1);transition:all .2s ease-in-out}:host::ng-deep .button:hover{opacity:1;transform:scale(1.1);transition:all .2s ease-in-out}"]
            },] }
];
GlSharedComponentButtonImageSimpleComponent.ctorParameters = () => [];
GlSharedComponentButtonImageSimpleComponent.propDecorators = {
    id: [{ type: Input }],
    alt: [{ type: Input }],
    src: [{ type: Input }],
    callback: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24taW1hZ2Utc2ltcGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2dsLW5nLWZyb250ZW5kL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudC9idXR0b24vaW1hZ2Uvc2ltcGxlL2dsLXNoYXJlZC1jb21wb25lbnQtYnV0dG9uLWltYWdlLXNpbXBsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPakQsTUFBTSxPQUFPLDJDQUEyQztJQU10RCxnQkFBZ0IsQ0FBQzs7O1lBWGxCLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUNBQXlDO2dCQUNuRCx3SEFBdUU7O2FBRXhFOzs7O2lCQUVFLEtBQUs7a0JBQ0wsS0FBSztrQkFDTCxLQUFLO3VCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtYnV0dG9uLWltYWdlLXNpbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWJ1dHRvbi1pbWFnZS1zaW1wbGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nbC1zaGFyZWQtY29tcG9uZW50LWJ1dHRvbi1pbWFnZS1zaW1wbGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudEJ1dHRvbkltYWdlU2ltcGxlQ29tcG9uZW50IHtcbiAgQElucHV0KCkgaWQ7XG4gIEBJbnB1dCgpIGFsdDtcbiAgQElucHV0KCkgc3JjO1xuICBASW5wdXQoKSBjYWxsYmFjaztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIl19