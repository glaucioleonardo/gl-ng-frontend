import { Component, Input } from '@angular/core';
export class GlSharedComponentButtonMenuSimpleComponent {
    constructor() {
        this.disabled = false;
    }
}
GlSharedComponentButtonMenuSimpleComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-button-menu-simple',
                template: "<img\n  [id]=\"id\"\n  class=\"menu-buttons\"\n  [src]=\"src\"\n  [alt]=\"alt\"\n  (click)=\"callback\">\n",
                styles: [":host{height:1.45em}:host .menu-buttons{cursor:pointer;height:1.5em;margin:0 0 0 .1em;width:1.5em}:host .menu-buttons:hover{opacity:1;transform:scale(1.01);transition:all .1s ease-in-out}:host .menu-buttons:not(hover){opacity:.9;transform:scale(1);transition:all .2s ease-in-out}"]
            },] }
];
GlSharedComponentButtonMenuSimpleComponent.ctorParameters = () => [];
GlSharedComponentButtonMenuSimpleComponent.propDecorators = {
    disabled: [{ type: Input }],
    src: [{ type: Input }],
    id: [{ type: Input }],
    alt: [{ type: Input }],
    callback: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24tbWVudS1zaW1wbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZ2wtbmctZnJvbnRlbmQvc3JjL2xpYi9zaGFyZWQvY29tcG9uZW50L2J1dHRvbi9tZW51L3NpbXBsZS9nbC1zaGFyZWQtY29tcG9uZW50LWJ1dHRvbi1tZW51LXNpbXBsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPakQsTUFBTSxPQUFPLDBDQUEwQztJQU9yRDtRQU5TLGFBQVEsR0FBRyxLQUFLLENBQUM7SUFNVixDQUFDOzs7WUFabEIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3Q0FBd0M7Z0JBQ2xELHNIQUFzRTs7YUFFdkU7Ozs7dUJBRUUsS0FBSztrQkFDTCxLQUFLO2lCQUNMLEtBQUs7a0JBQ0wsS0FBSzt1QkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LWJ1dHRvbi1tZW51LXNpbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWJ1dHRvbi1tZW51LXNpbXBsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtYnV0dG9uLW1lbnUtc2ltcGxlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRCdXR0b25NZW51U2ltcGxlQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgc3JjOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGFsdDogc3RyaW5nO1xuICBASW5wdXQoKSBjYWxsYmFjazogKCkgPT4ge307XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiJdfQ==