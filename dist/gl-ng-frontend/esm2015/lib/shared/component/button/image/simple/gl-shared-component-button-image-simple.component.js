import { Component, Input } from '@angular/core';
export class GlSharedComponentButtonImageSimpleComponent {
    constructor() { }
}
GlSharedComponentButtonImageSimpleComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-button-image-simple',
                template: "<img\r\n  class=\"button\"\r\n  [id]=\"id\"\r\n  [src]=\"src\"\r\n  [alt]=\"alt\"\r\n  (click)=\"callback()\">\r\n",
                styles: [":host::ng-deep{align-items:center;display:flex}:host::ng-deep .button{height:1em;width:1em}:host::ng-deep .button:not(hover){opacity:.5;transition:all .2s ease-in-out}:host::ng-deep .button:hover{opacity:1;transition:all .2s ease-in-out}"]
            },] }
];
GlSharedComponentButtonImageSimpleComponent.ctorParameters = () => [];
GlSharedComponentButtonImageSimpleComponent.propDecorators = {
    id: [{ type: Input }],
    alt: [{ type: Input }],
    src: [{ type: Input }],
    callback: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24taW1hZ2Utc2ltcGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2dsLW5nLWZyb250ZW5kL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudC9idXR0b24vaW1hZ2Uvc2ltcGxlL2dsLXNoYXJlZC1jb21wb25lbnQtYnV0dG9uLWltYWdlLXNpbXBsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPakQsTUFBTSxPQUFPLDJDQUEyQztJQU10RCxnQkFBZ0IsQ0FBQzs7O1lBWGxCLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUNBQXlDO2dCQUNuRCw4SEFBdUU7O2FBRXhFOzs7O2lCQUVFLEtBQUs7a0JBQ0wsS0FBSztrQkFDTCxLQUFLO3VCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtYnV0dG9uLWltYWdlLXNpbXBsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2dsLXNoYXJlZC1jb21wb25lbnQtYnV0dG9uLWltYWdlLXNpbXBsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24taW1hZ2Utc2ltcGxlLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50QnV0dG9uSW1hZ2VTaW1wbGVDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGlkO1xyXG4gIEBJbnB1dCgpIGFsdDtcclxuICBASW5wdXQoKSBzcmM7XHJcbiAgQElucHV0KCkgY2FsbGJhY2s6ICgpID0+IHZvaWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcbn1cclxuIl19