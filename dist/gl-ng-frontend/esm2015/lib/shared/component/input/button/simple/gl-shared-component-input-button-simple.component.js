import { Component, Input } from '@angular/core';
export class GlSharedComponentInputButtonSimpleComponent {
    constructor() { }
}
GlSharedComponentInputButtonSimpleComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-input-button-simple',
                template: "<button\n  type=\"button\"\n  class=\"default-button {{ class }}\"\n  [value]=\"value\"\n>{{ innerValue }}</button>\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep{display:flex;flex:1 1 0;height:2em}:host::ng-deep .default-button{background-color:#fff;border:none;color:#1a1b1d;flex:1 1 0;font-family:Montserrat,sans-serif;font-size:.5em;font-weight:300;text-transform:uppercase}:host::ng-deep .default-button.light-translucid{background-color:hsla(0,0%,100%,.1);font-family:Montserrat,sans-serif;font-weight:300}:host::ng-deep .default-button:focus,:host::ng-deep .default-button:hover{opacity:1;transition:all .3s ease-in-out}:host::ng-deep .light-translucid.default-button:focus,:host::ng-deep .light-translucid.default-button:hover{background-color:hsla(0,0%,100%,.9);color:#4b4d52;font-family:Montserrat,sans-serif;font-weight:300}:host::ng-deep .default-button:not(hover){opacity:.8;transition:all .3s ease-in-out}"]
            },] }
];
GlSharedComponentInputButtonSimpleComponent.ctorParameters = () => [];
GlSharedComponentInputButtonSimpleComponent.propDecorators = {
    value: [{ type: Input }],
    class: [{ type: Input }],
    innerValue: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1idXR0b24tc2ltcGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi9wcm9qZWN0cy9nbC1uZy1mcm9udGVuZC9zcmMvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL2NvbXBvbmVudC9pbnB1dC9idXR0b24vc2ltcGxlL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtYnV0dG9uLXNpbXBsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPakQsTUFBTSxPQUFPLDJDQUEyQztJQUt0RCxnQkFBZ0IsQ0FBQzs7O1lBVmxCLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUNBQXlDO2dCQUNuRCxpSUFBdUU7O2FBRXhFOzs7O29CQUVFLEtBQUs7b0JBQ0wsS0FBSzt5QkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LWJ1dHRvbi1zaW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1idXR0b24tc2ltcGxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1idXR0b24tc2ltcGxlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRJbnB1dEJ1dHRvblNpbXBsZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGlubmVyVmFsdWU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIl19