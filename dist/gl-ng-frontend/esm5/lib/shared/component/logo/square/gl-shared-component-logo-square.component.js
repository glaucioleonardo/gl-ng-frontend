import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
var GlSharedComponentLogoSquareComponent = /** @class */ (function () {
    function GlSharedComponentLogoSquareComponent() {
        this.horizontalPosition = 'left';
        this.verticalPosition = 'top';
    }
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
    return GlSharedComponentLogoSquareComponent;
}());
export { GlSharedComponentLogoSquareComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1sb2dvLXNxdWFyZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nbC1uZy1mcm9udGVuZC8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvY29tcG9uZW50L2xvZ28vc3F1YXJlL2dsLXNoYXJlZC1jb21wb25lbnQtbG9nby1zcXVhcmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU9qRDtJQU1FO1FBSFMsdUJBQWtCLEdBQXFCLE1BQU0sQ0FBQztRQUM5QyxxQkFBZ0IsR0FBcUIsS0FBSyxDQUFDO0lBRXBDLENBQUM7SUFMUjtRQUFSLEtBQUssRUFBRTswRUFBa0I7SUFDakI7UUFBUixLQUFLLEVBQUU7MEVBQWtCO0lBQ2pCO1FBQVIsS0FBSyxFQUFFO29GQUErQztJQUM5QztRQUFSLEtBQUssRUFBRTtrRkFBNEM7SUFKekMsb0NBQW9DO1FBTGhELFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQ0FBaUM7WUFDM0MsOExBQStEOztTQUVoRSxDQUFDO09BQ1csb0NBQW9DLENBT2hEO0lBQUQsMkNBQUM7Q0FBQSxBQVBELElBT0M7U0FQWSxvQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtbG9nby1zcXVhcmUnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1sb2dvLXNxdWFyZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtbG9nby1zcXVhcmUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudExvZ29TcXVhcmVDb21wb25lbnQge1xuICBASW5wdXQoKSBpbWFnZVNjcjogc3RyaW5nO1xuICBASW5wdXQoKSBpbWFnZUFsdDogc3RyaW5nO1xuICBASW5wdXQoKSBob3Jpem9udGFsUG9zaXRpb246ICdsZWZ0JyB8ICdyaWdodCcgPSAnbGVmdCc7XG4gIEBJbnB1dCgpIHZlcnRpY2FsUG9zaXRpb246ICd0b3AnIHwgJ2JvdHRvbScgPSAndG9wJztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIl19