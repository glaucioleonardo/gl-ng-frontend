import { Component, Input } from '@angular/core';
export class GlSharedComponentButtonMenuTooltipComponent {
    constructor() {
        this.disabled = false;
    }
}
GlSharedComponentButtonMenuTooltipComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-button-menu-tooltip',
                template: "<div [attr.alt]=\"alt\" class=\"tooltip-menu\" *ngIf=\"!disabled\">\n  <gl-shared-component-button-menu-simple\n    [src]=\"src\"\n    [id]=\"id\"\n    [alt]=\"alt\"\n    (click)=\"callback($event)\"\n  ></gl-shared-component-button-menu-simple>\n</div>\n",
                styles: [".tooltip-menu{display:flex;position:relative;z-index:100}.tooltip-menu:before{border-color:#fff transparent transparent;border-style:solid;border-width:.2em .2em 0;content:\"\";left:80%;position:absolute;transform:translateX(-137%) translateY(100%) rotate(180deg);z-index:100}.tooltip-menu:after{background:#fff;border:none;color:#64666c;content:attr(alt);font-size:.4em;font-weight:600;left:50%;line-height:1.5em;max-width:50em;padding:.5em 1em;pointer-events:none;position:absolute;text-align:left;transform:translateX(-85%) translateY(124%);white-space:nowrap;width:-webkit-max-content;width:-moz-max-content;width:max-content}.tooltip-menu:not(hover):before{bottom:-.3em;opacity:0;transition:all .1s ease-in-out}.tooltip-menu:not(hover):after{bottom:0;opacity:0;transition:all .1s ease-in-out}.tooltip-menu:hover:after,.tooltip-menu:hover:before{bottom:-.11em;opacity:1;transition:all .1s ease-in-out}@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){:host::ng-deep{display:block}}"]
            },] }
];
GlSharedComponentButtonMenuTooltipComponent.ctorParameters = () => [];
GlSharedComponentButtonMenuTooltipComponent.propDecorators = {
    disabled: [{ type: Input }],
    tooltip: [{ type: Input }],
    src: [{ type: Input }],
    id: [{ type: Input }],
    alt: [{ type: Input }],
    callback: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24tbWVudS10b29sdGlwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2dsLW5nLWZyb250ZW5kL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudC9idXR0b24vbWVudS90b29sdGlwL2dsLXNoYXJlZC1jb21wb25lbnQtYnV0dG9uLW1lbnUtdG9vbHRpcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPakQsTUFBTSxPQUFPLDJDQUEyQztJQVF0RDtRQVBTLGFBQVEsR0FBRyxLQUFLLENBQUM7SUFPVixDQUFDOzs7WUFibEIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx5Q0FBeUM7Z0JBQ25ELDJRQUF1RTs7YUFFeEU7Ozs7dUJBRUUsS0FBSztzQkFDTCxLQUFLO2tCQUNMLEtBQUs7aUJBQ0wsS0FBSztrQkFDTCxLQUFLO3VCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtYnV0dG9uLW1lbnUtdG9vbHRpcCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWJ1dHRvbi1tZW51LXRvb2x0aXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nbC1zaGFyZWQtY29tcG9uZW50LWJ1dHRvbi1tZW51LXRvb2x0aXAuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudEJ1dHRvbk1lbnVUb29sdGlwQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgdG9vbHRpcDogc3RyaW5nO1xuICBASW5wdXQoKSBzcmM6IHN0cmluZztcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcbiAgQElucHV0KCkgYWx0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNhbGxiYWNrO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iXX0=