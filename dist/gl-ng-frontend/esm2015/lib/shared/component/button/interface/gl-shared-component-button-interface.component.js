import { Component, Input } from '@angular/core';
export class GlSharedComponentButtonInterfaceComponent {
    constructor() { }
    ngOnInit() {
    }
}
GlSharedComponentButtonInterfaceComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-button-interface',
                template: "<div\r\n  class=\"attachment-container dark link-container\"\r\n  (click)=\"buttonClick()\">\r\n  <img\r\n    class=\"attachment-icon\"\r\n    [src]=\"imageSrc\"\r\n    [alt]=\"imageAlt\">\r\n  <span\r\n    [id]=\"id\"\r\n    class=\"attachment-file-button\">{{ innerHtml }}</span>\r\n</div>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24taW50ZXJmYWNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2dsLW5nLWZyb250ZW5kL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudC9idXR0b24vaW50ZXJmYWNlL2dsLXNoYXJlZC1jb21wb25lbnQtYnV0dG9uLWludGVyZmFjZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFPekQsTUFBTSxPQUFPLHlDQUF5QztJQU9wRCxnQkFBZ0IsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBZkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQ0FBc0M7Z0JBQ2hELG1UQUFvRTs7YUFFckU7Ozs7d0JBRUUsS0FBSzswQkFDTCxLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsS0FBSztpQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtYnV0dG9uLWludGVyZmFjZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2dsLXNoYXJlZC1jb21wb25lbnQtYnV0dG9uLWludGVyZmFjZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24taW50ZXJmYWNlLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50QnV0dG9uSW50ZXJmYWNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBpbm5lckh0bWw6IHN0cmluZztcclxuICBASW5wdXQoKSBidXR0b25DbGljazogKCkgPT4gdm9pZDtcclxuICBASW5wdXQoKSBpbWFnZVNyYzogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGltYWdlQWx0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=