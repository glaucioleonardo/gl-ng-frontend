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
                template: "<img\r\n  class=\"logo {{ horizontalPosition == 'right' ? 'right' : 'left' }} {{ verticalPosition == 'bottom' ? 'bottom' : 'top' }}\"\r\n  [src]=\"imageScr\"\r\n  [alt]=\"imageAlt\">\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1sb2dvLXNxdWFyZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9nbC1uZy1mcm9udGVuZC9zcmMvbGliL3NoYXJlZC9jb21wb25lbnQvbG9nby9zcXVhcmUvZ2wtc2hhcmVkLWNvbXBvbmVudC1sb2dvLXNxdWFyZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPakQsTUFBTSxPQUFPLG9DQUFvQztJQU0vQztRQUhTLHVCQUFrQixHQUFxQixNQUFNLENBQUM7UUFDOUMscUJBQWdCLEdBQXFCLEtBQUssQ0FBQztJQUVwQyxDQUFDOzs7WUFYbEIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQ0FBaUM7Z0JBQzNDLHNNQUErRDs7YUFFaEU7Ozs7dUJBRUUsS0FBSzt1QkFDTCxLQUFLO2lDQUNMLEtBQUs7K0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2wtc2hhcmVkLWNvbXBvbmVudC1sb2dvLXNxdWFyZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2dsLXNoYXJlZC1jb21wb25lbnQtbG9nby1zcXVhcmUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtbG9nby1zcXVhcmUuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRMb2dvU3F1YXJlQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBpbWFnZVNjcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGltYWdlQWx0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaG9yaXpvbnRhbFBvc2l0aW9uOiAnbGVmdCcgfCAncmlnaHQnID0gJ2xlZnQnO1xyXG4gIEBJbnB1dCgpIHZlcnRpY2FsUG9zaXRpb246ICd0b3AnIHwgJ2JvdHRvbScgPSAndG9wJztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxufVxyXG4iXX0=