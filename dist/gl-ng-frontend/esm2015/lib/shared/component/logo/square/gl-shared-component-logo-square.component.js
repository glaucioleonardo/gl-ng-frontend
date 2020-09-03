import { Component, Input } from '@angular/core';
export class GlSharedComponentLogoSquareComponent {
    constructor() {
        this.horizontalPosition = 'left';
        this.verticalPosition = 'top';
    }
}
GlSharedComponentLogoSquareComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-logo-square',
                template: "<img\n  class=\"logo {{ horizontalPosition == 'right' ? 'right' : 'left' }} {{ verticalPosition == 'bottom' ? 'bottom' : 'top' }}\"\n  [src]=\"imageScr\"\n  [alt]=\"imageAlt\">\n",
                styles: [":host::ng-deep .logo{height:3em;opacity:.1;position:absolute;width:3em}:host::ng-deep .logo.top{top:1em}:host::ng-deep .logo.right{right:1em}:host::ng-deep .logo.bottom{bottom:1em}:host::ng-deep .logo.left{left:1em}"]
            },] }
];
GlSharedComponentLogoSquareComponent.ctorParameters = () => [];
GlSharedComponentLogoSquareComponent.propDecorators = {
    imageScr: [{ type: Input }],
    imageAlt: [{ type: Input }],
    horizontalPosition: [{ type: Input }],
    verticalPosition: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1sb2dvLXNxdWFyZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9nbC1uZy1mcm9udGVuZC9zcmMvbGliL3NoYXJlZC9jb21wb25lbnQvbG9nby9zcXVhcmUvZ2wtc2hhcmVkLWNvbXBvbmVudC1sb2dvLXNxdWFyZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPakQsTUFBTSxPQUFPLG9DQUFvQztJQU0vQztRQUhTLHVCQUFrQixHQUFxQixNQUFNLENBQUM7UUFDOUMscUJBQWdCLEdBQXFCLEtBQUssQ0FBQztJQUVwQyxDQUFDOzs7WUFYbEIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQ0FBaUM7Z0JBQzNDLDhMQUErRDs7YUFFaEU7Ozs7dUJBRUUsS0FBSzt1QkFDTCxLQUFLO2lDQUNMLEtBQUs7K0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2wtc2hhcmVkLWNvbXBvbmVudC1sb2dvLXNxdWFyZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWxvZ28tc3F1YXJlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1sb2dvLXNxdWFyZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50TG9nb1NxdWFyZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGltYWdlU2NyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGltYWdlQWx0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGhvcml6b250YWxQb3NpdGlvbjogJ2xlZnQnIHwgJ3JpZ2h0JyA9ICdsZWZ0JztcbiAgQElucHV0KCkgdmVydGljYWxQb3NpdGlvbjogJ3RvcCcgfCAnYm90dG9tJyA9ICd0b3AnO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iXX0=