import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let GlSharedComponentLogoSquareComponent = class GlSharedComponentLogoSquareComponent {
    constructor() {
        this.horizontalPosition = 'left';
        this.verticalPosition = 'top';
    }
};
__decorate([
    Input()
], GlSharedComponentLogoSquareComponent.prototype, "imageScr", void 0);
__decorate([
    Input()
], GlSharedComponentLogoSquareComponent.prototype, "imageAlt", void 0);
__decorate([
    Input()
], GlSharedComponentLogoSquareComponent.prototype, "horizontalPosition", void 0);
__decorate([
    Input()
], GlSharedComponentLogoSquareComponent.prototype, "verticalPosition", void 0);
GlSharedComponentLogoSquareComponent = __decorate([
    Component({
        selector: 'gl-shared-component-logo-square',
        template: "<img\n  class=\"logo {{ horizontalPosition == 'right' ? 'right' : 'left' }} {{ verticalPosition == 'bottom' ? 'bottom' : 'top' }}\"\n  [src]=\"imageScr\"\n  [alt]=\"imageAlt\">\n",
        styles: [":host::ng-deep .logo{width:3em;height:3em;position:absolute;opacity:.1}:host::ng-deep .logo.top{top:1em}:host::ng-deep .logo.right{right:1em}:host::ng-deep .logo.bottom{bottom:1em}:host::ng-deep .logo.left{left:1em}"]
    })
], GlSharedComponentLogoSquareComponent);
export { GlSharedComponentLogoSquareComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1sb2dvLXNxdWFyZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nbC1uZy1mcm9udGVuZC8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvY29tcG9uZW50L2xvZ28vc3F1YXJlL2dsLXNoYXJlZC1jb21wb25lbnQtbG9nby1zcXVhcmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU9qRCxJQUFhLG9DQUFvQyxHQUFqRCxNQUFhLG9DQUFvQztJQU0vQztRQUhTLHVCQUFrQixHQUFxQixNQUFNLENBQUM7UUFDOUMscUJBQWdCLEdBQXFCLEtBQUssQ0FBQztJQUVwQyxDQUFDO0NBQ2xCLENBQUE7QUFOVTtJQUFSLEtBQUssRUFBRTtzRUFBa0I7QUFDakI7SUFBUixLQUFLLEVBQUU7c0VBQWtCO0FBQ2pCO0lBQVIsS0FBSyxFQUFFO2dGQUErQztBQUM5QztJQUFSLEtBQUssRUFBRTs4RUFBNEM7QUFKekMsb0NBQW9DO0lBTGhELFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxpQ0FBaUM7UUFDM0MsOExBQStEOztLQUVoRSxDQUFDO0dBQ1csb0NBQW9DLENBT2hEO1NBUFksb0NBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LWxvZ28tc3F1YXJlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dsLXNoYXJlZC1jb21wb25lbnQtbG9nby1zcXVhcmUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nbC1zaGFyZWQtY29tcG9uZW50LWxvZ28tc3F1YXJlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRMb2dvU3F1YXJlQ29tcG9uZW50IHtcbiAgQElucHV0KCkgaW1hZ2VTY3I6IHN0cmluZztcbiAgQElucHV0KCkgaW1hZ2VBbHQ6IHN0cmluZztcbiAgQElucHV0KCkgaG9yaXpvbnRhbFBvc2l0aW9uOiAnbGVmdCcgfCAncmlnaHQnID0gJ2xlZnQnO1xuICBASW5wdXQoKSB2ZXJ0aWNhbFBvc2l0aW9uOiAndG9wJyB8ICdib3R0b20nID0gJ3RvcCc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiJdfQ==