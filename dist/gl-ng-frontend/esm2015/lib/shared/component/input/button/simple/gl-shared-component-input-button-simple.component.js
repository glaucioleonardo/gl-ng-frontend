import { Component, Input } from '@angular/core';
export class GlSharedComponentInputButtonSimpleComponent {
    constructor() {
        this.readonly = false;
    }
}
GlSharedComponentInputButtonSimpleComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-input-button-simple',
                template: "<button\n  type=\"button\"\n  class=\"default-button {{ class }}\"\n  [value]=\"value\"\n  [disabled]=\"readonly\"\n>{{ innerValue }}</button>\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep{display:flex;flex:1 1 0;height:2em}:host::ng-deep .default-button{background-color:#fff;border:none;color:#1a1b1d;flex:1 1 0;font-family:Montserrat,sans-serif;font-size:.5em;font-weight:300;text-transform:uppercase}:host::ng-deep .default-button.light-translucid{background-color:hsla(0,0%,100%,.1);font-family:Montserrat,sans-serif;font-weight:300}:host::ng-deep .default-button:focus,:host::ng-deep .default-button:hover{opacity:1;transition:all .3s ease-in-out}:host::ng-deep .light-translucid.default-button:focus,:host::ng-deep .light-translucid.default-button:hover{background-color:hsla(0,0%,100%,.9);color:#4b4d52;font-family:Montserrat,sans-serif;font-weight:300}:host::ng-deep .default-button:not(hover){opacity:.8;transition:all .3s ease-in-out}"]
            },] }
];
GlSharedComponentInputButtonSimpleComponent.ctorParameters = () => [];
GlSharedComponentInputButtonSimpleComponent.propDecorators = {
    value: [{ type: Input }],
    class: [{ type: Input }],
    innerValue: [{ type: Input }],
    readonly: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1idXR0b24tc2ltcGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2dsLW5nLWZyb250ZW5kL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudC9pbnB1dC9idXR0b24vc2ltcGxlL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtYnV0dG9uLXNpbXBsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPakQsTUFBTSxPQUFPLDJDQUEyQztJQU10RDtRQUZTLGFBQVEsR0FBRyxLQUFLLENBQUM7SUFFVixDQUFDOzs7WUFYbEIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx5Q0FBeUM7Z0JBQ25ELDRKQUF1RTs7YUFFeEU7Ozs7b0JBRUUsS0FBSztvQkFDTCxLQUFLO3lCQUNMLEtBQUs7dUJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1idXR0b24tc2ltcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtYnV0dG9uLXNpbXBsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtYnV0dG9uLXNpbXBsZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50SW5wdXRCdXR0b25TaW1wbGVDb21wb25lbnQge1xuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nO1xuICBASW5wdXQoKSBjbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSBpbm5lclZhbHVlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJlYWRvbmx5ID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiJdfQ==