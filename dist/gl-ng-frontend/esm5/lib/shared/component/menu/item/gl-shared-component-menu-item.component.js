import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
var GlSharedComponentMenuItemComponent = /** @class */ (function () {
    function GlSharedComponentMenuItemComponent(_router) {
        this._router = _router;
        this.itemClass = 'dark';
        this.menuLogo = '../assets/img/logo/glaucio-logo-colored.svg';
        this.src = this.menuLogo;
        this.onClick = new EventEmitter();
    }
    GlSharedComponentMenuItemComponent.prototype.openAbsoluteLink = function (event, href) {
        this._router.navigate(['/externalRedirect', { externalUrl: href }], {
            skipLocationChange: true,
        }).then(function () {
            console.log("Redirected to: " + href);
        });
        event.preventDefault();
    };
    GlSharedComponentMenuItemComponent.ctorParameters = function () { return [
        { type: Router }
    ]; };
    __decorate([
        Input()
    ], GlSharedComponentMenuItemComponent.prototype, "itemClass", void 0);
    __decorate([
        Input()
    ], GlSharedComponentMenuItemComponent.prototype, "absolute", void 0);
    __decorate([
        Input()
    ], GlSharedComponentMenuItemComponent.prototype, "menuLogo", void 0);
    __decorate([
        Input()
    ], GlSharedComponentMenuItemComponent.prototype, "src", void 0);
    __decorate([
        Input()
    ], GlSharedComponentMenuItemComponent.prototype, "href", void 0);
    __decorate([
        Input()
    ], GlSharedComponentMenuItemComponent.prototype, "alt", void 0);
    __decorate([
        Input()
    ], GlSharedComponentMenuItemComponent.prototype, "content", void 0);
    __decorate([
        Output()
    ], GlSharedComponentMenuItemComponent.prototype, "onClick", void 0);
    GlSharedComponentMenuItemComponent = __decorate([
        Component({
            selector: 'gl-shared-component-menu-item',
            template: "<li id={this.props.id} class=\"menu-title {{ itemClass }}\">\n  <img [src]=\"src\" class=\"menu-icons\" [alt]=\"alt\"/>\n  <a\n    *ngIf=\"absolute\"\n    [href]=\"'externalRedirect'\"\n    (click)=\"openAbsoluteLink($event, href)\"\n  >{{ content }}</a>\n  <a *ngIf=\"!absolute\"\n     [routerLink]=\"href\"\n     (click)=\"onClick.emit(null)\"\n  >{{ content }}</a>\n</li>\n",
            styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep .menu-title{background:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);margin:0 0 .14em;position:relative;display:flex;align-items:center;border-left:.2em solid #d24077}:host::ng-deep .menu-title .material-icons{color:rgba(255,255,255,.6);font-size:1.2em;padding:.3em;margin:0 .5em 0 .3em}:host::ng-deep .menu-title .material-icons.expand{position:absolute;color:#fff;top:.5em;right:.3em}:host::ng-deep .menu-title .menu-icons{padding:.2em .5em;height:1.5em;width:1.5em}:host::ng-deep .menu-title a{text-decoration:none;font-size:.6em;font-family:Montserrat,sans-serif;font-weight:300;text-transform:uppercase;color:rgba(255,255,255,.4);padding:1.5em .7em;flex-grow:1}:host::ng-deep .menu-title.dark{margin:0;border-bottom:1px solid #38393c;border-left:none}:host::ng-deep .menu-title.dark:not(hover){background:#2c2c2f;transition:.3s ease-in-out}:host::ng-deep .menu-title.dark:hover{background:#4b4d52;transition:.3s ease-in-out}:host::ng-deep .menu-title.translucid{margin:0;border-bottom:.5px solid rgba(255,255,255,.1);border-left:none}:host::ng-deep .menu-title.translucid:not(hover){background:rgba(255,255,255,.05);transition:.3s ease-in-out}:host::ng-deep .menu-title.translucid:hover{background:rgba(255,255,255,.1);transition:.3s ease-in-out}"]
        })
    ], GlSharedComponentMenuItemComponent);
    return GlSharedComponentMenuItemComponent;
}());
export { GlSharedComponentMenuItemComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1tZW51LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2wtbmctZnJvbnRlbmQvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL2NvbXBvbmVudC9tZW51L2l0ZW0vZ2wtc2hhcmVkLWNvbXBvbmVudC1tZW51LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU96QztJQVVFLDRDQUFvQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQVQxQixjQUFTLEdBQStCLE1BQU0sQ0FBQztRQUUvQyxhQUFRLEdBQVcsNkNBQTZDLENBQUM7UUFDakUsUUFBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFJbkIsWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBRW5CLENBQUM7SUFFeEMsNkRBQWdCLEdBQWhCLFVBQWlCLEtBQUssRUFBRSxJQUFJO1FBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRTtZQUNsRSxrQkFBa0IsRUFBRSxJQUFJO1NBQ3pCLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFrQixJQUFNLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQztRQUVILEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN6QixDQUFDOztnQkFWNEIsTUFBTTs7SUFUMUI7UUFBUixLQUFLLEVBQUU7eUVBQWdEO0lBQy9DO1FBQVIsS0FBSyxFQUFFO3dFQUFtQjtJQUNsQjtRQUFSLEtBQUssRUFBRTt3RUFBa0U7SUFDakU7UUFBUixLQUFLLEVBQUU7bUVBQXFCO0lBQ3BCO1FBQVIsS0FBSyxFQUFFO29FQUFNO0lBQ0w7UUFBUixLQUFLLEVBQUU7bUVBQUs7SUFDSjtRQUFSLEtBQUssRUFBRTt1RUFBUztJQUNQO1FBQVQsTUFBTSxFQUFFO3VFQUFpRDtJQVIvQyxrQ0FBa0M7UUFMOUMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLCtCQUErQjtZQUN6QyxvWUFBNkQ7O1NBRTlELENBQUM7T0FDVyxrQ0FBa0MsQ0FxQjlDO0lBQUQseUNBQUM7Q0FBQSxBQXJCRCxJQXFCQztTQXJCWSxrQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2wtc2hhcmVkLWNvbXBvbmVudC1tZW51LWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1tZW51LWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nbC1zaGFyZWQtY29tcG9uZW50LW1lbnUtaXRlbS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50TWVudUl0ZW1Db21wb25lbnQge1xuICBASW5wdXQoKSBpdGVtQ2xhc3M6ICd0cmFuc2x1Y2lkJyB8ICdkYXJrJyB8ICcnID0gJ2RhcmsnO1xuICBASW5wdXQoKSBhYnNvbHV0ZTogYm9vbGVhbjtcbiAgQElucHV0KCkgbWVudUxvZ286IHN0cmluZyA9ICcuLi9hc3NldHMvaW1nL2xvZ28vZ2xhdWNpby1sb2dvLWNvbG9yZWQuc3ZnJztcbiAgQElucHV0KCkgc3JjID0gdGhpcy5tZW51TG9nbztcbiAgQElucHV0KCkgaHJlZjtcbiAgQElucHV0KCkgYWx0O1xuICBASW5wdXQoKSBjb250ZW50O1xuICBAT3V0cHV0KCkgb25DbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHsgfVxuXG4gIG9wZW5BYnNvbHV0ZUxpbmsoZXZlbnQsIGhyZWYpIHtcbiAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvZXh0ZXJuYWxSZWRpcmVjdCcsIHsgZXh0ZXJuYWxVcmw6IGhyZWYgfV0sIHtcbiAgICAgIHNraXBMb2NhdGlvbkNoYW5nZTogdHJ1ZSxcbiAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGBSZWRpcmVjdGVkIHRvOiAke2hyZWZ9YCk7XG4gICAgfSk7XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG59XG4iXX0=