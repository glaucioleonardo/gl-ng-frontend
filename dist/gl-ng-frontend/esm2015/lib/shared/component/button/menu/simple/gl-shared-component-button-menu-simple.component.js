import { Component, Input } from '@angular/core';
export class GlSharedComponentButtonMenuSimpleComponent {
    constructor() {
        this.disabled = false;
        this.hide = false;
    }
}
GlSharedComponentButtonMenuSimpleComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-button-menu-simple',
                template: "<img *ngIf=\"!hide\"\n  [id]=\"id\"\n  class=\"menu-buttons\"\n  [src]=\"src\"\n  [alt]=\"alt\"\n  (click)=\"callback\">\n",
                styles: [":host{height:1.45em}:host .menu-buttons{cursor:pointer;height:1.5em;margin:0 0 0 .11em;width:1.5em}:host .menu-buttons:hover{opacity:1;transition:all .1s ease-in-out}:host .menu-buttons:not(hover){opacity:.9;transition:all .2s ease-in-out}"]
            },] }
];
GlSharedComponentButtonMenuSimpleComponent.ctorParameters = () => [];
GlSharedComponentButtonMenuSimpleComponent.propDecorators = {
    disabled: [{ type: Input }],
    hide: [{ type: Input }],
    src: [{ type: Input }],
    id: [{ type: Input }],
    alt: [{ type: Input }],
    callback: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24tbWVudS1zaW1wbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uL3Byb2plY3RzL2dsLW5nLWZyb250ZW5kL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvY29tcG9uZW50L2J1dHRvbi9tZW51L3NpbXBsZS9nbC1zaGFyZWQtY29tcG9uZW50LWJ1dHRvbi1tZW51LXNpbXBsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPakQsTUFBTSxPQUFPLDBDQUEwQztJQVFyRDtRQVBTLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsU0FBSSxHQUFHLEtBQUssQ0FBQztJQU1OLENBQUM7OztZQWJsQixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdDQUF3QztnQkFDbEQsc0lBQXNFOzthQUV2RTs7Ozt1QkFFRSxLQUFLO21CQUNMLEtBQUs7a0JBQ0wsS0FBSztpQkFDTCxLQUFLO2tCQUNMLEtBQUs7dUJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24tbWVudS1zaW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24tbWVudS1zaW1wbGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nbC1zaGFyZWQtY29tcG9uZW50LWJ1dHRvbi1tZW51LXNpbXBsZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50QnV0dG9uTWVudVNpbXBsZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGhpZGUgPSBmYWxzZTtcbiAgQElucHV0KCkgc3JjOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGFsdDogc3RyaW5nO1xuICBASW5wdXQoKSBjYWxsYmFjazogKCkgPT4ge307XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiJdfQ==