import { Component, Input } from '@angular/core';
export class GlSharedComponentButtonInterfaceComponent {
    constructor() { }
    ngOnInit() {
    }
}
GlSharedComponentButtonInterfaceComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-button-interface',
                template: "<div\n  class=\"attachment-container dark link-container\"\n  (click)=\"buttonClick()\">\n  <img\n    class=\"attachment-icon\"\n    [src]=\"imageSrc\"\n    [alt]=\"imageAlt\">\n  <span\n    [id]=\"id\"\n    class=\"attachment-file-button\">{{ innerHtml }}</span>\n</div>\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep .attachment-container{align-items:center;border-radius:.5em;cursor:pointer;display:flex;margin:.2em 0;padding:.4em .3em;position:relative}:host::ng-deep .attachment-container:not(hover){background:rgba(63,64,68,.6);transition:all .2s ease-in-out}:host::ng-deep .attachment-container:hover{background:rgba(63,64,68,.9);transition:all .2s ease-in-out}:host::ng-deep .attachment-container .attachment-icon{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;height:2em;margin:.8em .8em .8em .2em;padding:0;user-select:none;width:2em}:host::ng-deep .attachment-container .attachment-file-button{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;color:#fff;font-family:Montserrat,sans-serif;font-weight:400;user-select:none}"]
            },] }
];
GlSharedComponentButtonInterfaceComponent.ctorParameters = () => [];
GlSharedComponentButtonInterfaceComponent.propDecorators = {
    innerHtml: [{ type: Input }],
    buttonClick: [{ type: Input }],
    imageSrc: [{ type: Input }],
    imageAlt: [{ type: Input }],
    id: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24taW50ZXJmYWNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2dsLW5nLWZyb250ZW5kL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudC9idXR0b24vaW50ZXJmYWNlL2dsLXNoYXJlZC1jb21wb25lbnQtYnV0dG9uLWludGVyZmFjZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFPekQsTUFBTSxPQUFPLHlDQUF5QztJQU9wRCxnQkFBZ0IsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBZkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQ0FBc0M7Z0JBQ2hELDZSQUFvRTs7YUFFckU7Ozs7d0JBRUUsS0FBSzswQkFDTCxLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsS0FBSztpQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtYnV0dG9uLWludGVyZmFjZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWJ1dHRvbi1pbnRlcmZhY2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nbC1zaGFyZWQtY29tcG9uZW50LWJ1dHRvbi1pbnRlcmZhY2UuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudEJ1dHRvbkludGVyZmFjZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGlubmVySHRtbDogc3RyaW5nO1xuICBASW5wdXQoKSBidXR0b25DbGljazogKCkgPT4gdm9pZDtcbiAgQElucHV0KCkgaW1hZ2VTcmM6IHN0cmluZztcbiAgQElucHV0KCkgaW1hZ2VBbHQ6IHN0cmluZztcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbn1cbiJdfQ==