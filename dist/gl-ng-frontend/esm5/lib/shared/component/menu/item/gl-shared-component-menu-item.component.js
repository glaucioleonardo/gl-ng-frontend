import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { style, state, animate, transition, trigger } from '@angular/animations';
var GlSharedComponentMenuItemComponent = /** @class */ (function () {
    function GlSharedComponentMenuItemComponent(_router) {
        this._router = _router;
        this.itemClass = 'dark';
        this.menuLogo = '../assets/img/logo/glaucio-logo-colored.svg';
        this.src = this.menuLogo;
        this.target = '_self';
        this.onClick = new EventEmitter();
    }
    GlSharedComponentMenuItemComponent.prototype.openAbsoluteLink = function (event, href, target) {
        if (target === void 0) { target = '_self'; }
        this._router.navigate(['/externalRedirect', { externalUrl: href, target: target }], {
            skipLocationChange: true,
        }).then(function () {
            console.log("Redirected to: " + href);
        });
        event.preventDefault();
    };
    GlSharedComponentMenuItemComponent.prototype.toggleActive = function () {
        this.active = !this.active;
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
        Input()
    ], GlSharedComponentMenuItemComponent.prototype, "target", void 0);
    __decorate([
        Input()
    ], GlSharedComponentMenuItemComponent.prototype, "hasSubitem", void 0);
    __decorate([
        Input()
    ], GlSharedComponentMenuItemComponent.prototype, "active", void 0);
    __decorate([
        Input()
    ], GlSharedComponentMenuItemComponent.prototype, "subItems", void 0);
    __decorate([
        Output()
    ], GlSharedComponentMenuItemComponent.prototype, "onClick", void 0);
    GlSharedComponentMenuItemComponent = __decorate([
        Component({
            selector: 'gl-shared-component-menu-item',
            template: "<li class=\"menu-title {{ itemClass }}\" *ngIf=\"!hasSubitem\">\n  <img [src]=\"src\" class=\"menu-icons\" [alt]=\"alt\"/>\n  <a\n    class=\"menu-item\"\n    *ngIf=\"absolute\"\n    [href]=\"'externalRedirect'\"\n    (click)=\"openAbsoluteLink($event, href, target)\"\n  >{{ content }}</a>\n  <a *ngIf=\"!absolute\"\n     class=\"menu-item\"\n     [routerLink]=\"href\"\n     (click)=\"onClick.emit(null)\"\n  >{{ content }}</a>\n</li>\n\n<li class=\"menu-title {{ itemClass }} {{ active ? 'active' : '' }}\" *ngIf=\"hasSubitem\">\n  <img [src]=\"src\" class=\"menu-icons\" [alt]=\"alt\"/>\n  <div\n    class=\"menu-item\"\n    (click)=\"toggleActive()\"\n  >{{ content }}</div>\n  <img src=\"../assets/img/icon/side-menu/arrow-down.svg\" class=\"menu-arrow\" [alt]=\"alt\"/>\n</li>\n<ol *ngIf=\"hasSubitem && active\" [@fadeInOut] class=\"subitem-container {{ active ? 'active' : '' }}\">\n  <li class=\"menu-title adding-row-animated {{ item.class }}\" *ngFor=\"let item of subItems\">\n    <img [src]=\"item.src\" class=\"menu-icons\" [alt]=\"item.alt\"/>\n    <a\n      class=\"menu-item\"\n      *ngIf=\"item.absolute\"\n      [href]=\"'externalRedirect'\"\n      (click)=\"openAbsoluteLink($event, item.href, item.target)\"\n    >{{ item.content }}</a>\n    <a *ngIf=\"!item.absolute\"\n       class=\"menu-item\"\n       [routerLink]=\"item.href\"\n       (click)=\"onClick.emit(null)\"\n    >{{ item.content }}</a>\n  </li>\n</ol>\n",
            animations: [
                trigger('fadeInOut', [
                    state('', style({
                        opacity: 0,
                        height: 0,
                        transform: 'scaleY(0)'
                    })),
                    transition(':enter', [
                        style({
                            opacity: 0,
                            height: 0,
                            transform: 'scaleY(0)'
                        }),
                        animate("0.3s ease-in", style({
                            opacity: 1,
                            height: '*',
                            transform: 'scaleY(1)'
                        }))
                    ]),
                    transition(':leave', [
                        animate(250, style({
                            opacity: 0,
                            height: 0,
                            transform: 'scaleY(0)'
                        }))
                    ])
                ])
            ],
            styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);.adding-row-animated{-webkit-animation:.5s ease-in-out forwards adding-row;animation:.5s ease-in-out forwards adding-row}@-webkit-keyframes adding-row{from{opacity:0}to{opacity:1}}@keyframes adding-row{from{opacity:0}to{opacity:1}}.delete-row-animated{opacity:0!important;max-height:0!important;transition:.2s ease-out}.delete-row-animated-frame{-webkit-animation-name:hide;animation-name:hide;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:forwards!important;animation-fill-mode:forwards!important;-webkit-animation-play-state:initial;animation-play-state:initial}@-webkit-keyframes hide{from{opacity:1}to{opacity:0}}@keyframes hide{from{opacity:1}to{opacity:0}}:host::ng-deep{outline:0!important}:host::ng-deep .menu-title{background:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);margin:0 0 1px;position:relative;display:flex;align-items:center;border-left:.2em solid #d24077}:host::ng-deep .menu-title .material-icons{color:rgba(255,255,255,.6);font-size:1.2em;padding:.3em;margin:0 .5em 0 .3em}:host::ng-deep .menu-title .menu-icons{padding:.2em .5em;height:1.5em;width:1.5em}:host::ng-deep .menu-title .menu-arrow{padding:.2em .5em;height:1em;width:1em;opacity:.5;transform:rotate(0);transition:.25s ease-in-out}:host::ng-deep .menu-title .menu-item{text-decoration:none;font-size:.6em;font-family:Montserrat,sans-serif;font-weight:300;text-transform:uppercase;color:rgba(255,255,255,.4);padding:1.5em .7em;flex-grow:1;cursor:pointer;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;max-width:79%}:host::ng-deep .menu-title.active .menu-arrow{transform:rotate(180deg);transition:.25s ease-in-out}:host::ng-deep .menu-title:not(hover) .menu-icons{transform:scale(1);transition:.2s ease-in-out}:host::ng-deep .menu-title:hover .menu-icons{transform:scale(1.2);transition:.2s ease-in-out}:host::ng-deep .menu-title.dark{margin:0;border-bottom:1px solid #38393c;border-left:.2em solid transparent}:host::ng-deep .menu-title.dark:not(hover){background:#2c2c2f;transition:.3s ease-in-out}:host::ng-deep .menu-title.dark:hover{background:#4b4d52;transition:.3s ease-in-out}:host::ng-deep .menu-title.translucid{margin:0;border-bottom:.5px solid rgba(255,255,255,.1);border-left:.2em solid transparent}:host::ng-deep .menu-title.translucid:not(hover){background:rgba(255,255,255,.05);transition:.3s ease-in-out}:host::ng-deep .menu-title.translucid:hover{background:rgba(255,255,255,.1);transition:.3s ease-in-out}:host::ng-deep .menu-item,:host::ng-deep .menu-title,:host::ng-deep .subitem-container{outline:0!important;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host::ng-deep .subitem-container .menu-title{transform:scaleY(0);transition:.3s ease-in-out}:host::ng-deep .subitem-container.active .menu-title{transform:scaleY(1);transition:.3s ease-in-out .1s}"]
        })
    ], GlSharedComponentMenuItemComponent);
    return GlSharedComponentMenuItemComponent;
}());
export { GlSharedComponentMenuItemComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1tZW51LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2wtbmctZnJvbnRlbmQvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL2NvbXBvbmVudC9tZW51L2l0ZW0vZ2wtc2hhcmVkLWNvbXBvbmVudC1tZW51LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QyxPQUFPLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBbUMvRTtJQWdCRSw0Q0FBb0IsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFmMUIsY0FBUyxHQUErQixNQUFNLENBQUM7UUFFL0MsYUFBUSxHQUFXLDZDQUE2QyxDQUFDO1FBQ2pFLFFBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBSXBCLFdBQU0sR0FBZSxPQUFPLENBQUM7UUFNNUIsWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBSTFELENBQUM7SUFFRCw2REFBZ0IsR0FBaEIsVUFBaUIsS0FBSyxFQUFFLElBQUksRUFBRSxNQUE0QjtRQUE1Qix1QkFBQSxFQUFBLGdCQUE0QjtRQUN4RCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLG1CQUFtQixFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQUEsRUFBQyxDQUFDLEVBQUU7WUFDekUsa0JBQWtCLEVBQUUsSUFBSTtTQUN6QixDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBa0IsSUFBTSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUM7UUFFSCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELHlEQUFZLEdBQVo7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUM3QixDQUFDOztnQkFoQjRCLE1BQU07O0lBZjFCO1FBQVIsS0FBSyxFQUFFO3lFQUFnRDtJQUMvQztRQUFSLEtBQUssRUFBRTt3RUFBbUI7SUFDbEI7UUFBUixLQUFLLEVBQUU7d0VBQWtFO0lBQ2pFO1FBQVIsS0FBSyxFQUFFO21FQUFxQjtJQUNwQjtRQUFSLEtBQUssRUFBRTtvRUFBTTtJQUNMO1FBQVIsS0FBSyxFQUFFO21FQUFLO0lBQ0o7UUFBUixLQUFLLEVBQUU7dUVBQVM7SUFDUjtRQUFSLEtBQUssRUFBRTtzRUFBOEI7SUFFN0I7UUFBUixLQUFLLEVBQUU7MEVBQXFCO0lBQ3BCO1FBQVIsS0FBSyxFQUFFO3NFQUFpQjtJQUNoQjtRQUFSLEtBQUssRUFBRTt3RUFBdUI7SUFFckI7UUFBVCxNQUFNLEVBQUU7dUVBQWlEO0lBZC9DLGtDQUFrQztRQWpDOUMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLCtCQUErQjtZQUN6Qyw2NkNBQTZEO1lBRTdELFVBQVUsRUFBRTtnQkFDVixPQUFPLENBQUMsV0FBVyxFQUFFO29CQUNuQixLQUFLLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQzt3QkFDZCxPQUFPLEVBQUUsQ0FBQzt3QkFDVixNQUFNLEVBQUUsQ0FBQzt3QkFDVCxTQUFTLEVBQUUsV0FBVztxQkFDdkIsQ0FBQyxDQUFDO29CQUNILFVBQVUsQ0FBQyxRQUFRLEVBQUU7d0JBQ25CLEtBQUssQ0FBQzs0QkFDSixPQUFPLEVBQUUsQ0FBQzs0QkFDVixNQUFNLEVBQUUsQ0FBQzs0QkFDVCxTQUFTLEVBQUUsV0FBVzt5QkFDdkIsQ0FBQzt3QkFDRixPQUFPLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQzs0QkFDNUIsT0FBTyxFQUFFLENBQUM7NEJBQ1YsTUFBTSxFQUFFLEdBQUc7NEJBQ1gsU0FBUyxFQUFFLFdBQVc7eUJBQ3ZCLENBQUMsQ0FBQztxQkFDSixDQUFDO29CQUNGLFVBQVUsQ0FBQyxRQUFRLEVBQUU7d0JBQ25CLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDOzRCQUNqQixPQUFPLEVBQUUsQ0FBQzs0QkFDVixNQUFNLEVBQUUsQ0FBQzs0QkFDVCxTQUFTLEVBQUUsV0FBVzt5QkFDdkIsQ0FBQyxDQUFDO3FCQUNKLENBQUM7aUJBQ0gsQ0FBQzthQUNIOztTQUNGLENBQUM7T0FDVyxrQ0FBa0MsQ0FpQzlDO0lBQUQseUNBQUM7Q0FBQSxBQWpDRCxJQWlDQztTQWpDWSxrQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IElNZW51SXRlbSwgVFVybFRhcmdldCB9IGZyb20gJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1tZW51LWl0ZW0uaW50ZXJmYWNlJztcbmltcG9ydCB7c3R5bGUsIHN0YXRlLCBhbmltYXRlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2wtc2hhcmVkLWNvbXBvbmVudC1tZW51LWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1tZW51LWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nbC1zaGFyZWQtY29tcG9uZW50LW1lbnUtaXRlbS5jb21wb25lbnQuc2NzcyddLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignZmFkZUluT3V0JywgW1xuICAgICAgc3RhdGUoJycsIHN0eWxlKHtcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZVkoMCknXG4gICAgICB9KSksXG4gICAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBbICAgLy8gOmVudGVyIGlzIGFsaWFzIHRvICd2b2lkID0+IConXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZVkoMCknXG4gICAgICAgIH0pLFxuICAgICAgICBhbmltYXRlKFwiMC4zcyBlYXNlLWluXCIsIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgIGhlaWdodDogJyonLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWSgxKSdcbiAgICAgICAgfSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJzpsZWF2ZScsIFsgICAvLyA6bGVhdmUgaXMgYWxpYXMgdG8gJyogPT4gdm9pZCdcbiAgICAgICAgYW5pbWF0ZSgyNTAsIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZVkoMCknXG4gICAgICAgIH0pKVxuICAgICAgXSlcbiAgICBdKVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50TWVudUl0ZW1Db21wb25lbnQge1xuICBASW5wdXQoKSBpdGVtQ2xhc3M6ICd0cmFuc2x1Y2lkJyB8ICdkYXJrJyB8ICcnID0gJ2RhcmsnO1xuICBASW5wdXQoKSBhYnNvbHV0ZTogYm9vbGVhbjtcbiAgQElucHV0KCkgbWVudUxvZ286IHN0cmluZyA9ICcuLi9hc3NldHMvaW1nL2xvZ28vZ2xhdWNpby1sb2dvLWNvbG9yZWQuc3ZnJztcbiAgQElucHV0KCkgc3JjID0gdGhpcy5tZW51TG9nbztcbiAgQElucHV0KCkgaHJlZjtcbiAgQElucHV0KCkgYWx0O1xuICBASW5wdXQoKSBjb250ZW50O1xuICBASW5wdXQoKSB0YXJnZXQ6IFRVcmxUYXJnZXQgPSAnX3NlbGYnO1xuXG4gIEBJbnB1dCgpIGhhc1N1Yml0ZW06IGJvb2xlYW47XG4gIEBJbnB1dCgpIGFjdGl2ZTogYm9vbGVhbjtcbiAgQElucHV0KCkgc3ViSXRlbXM6IElNZW51SXRlbVtdO1xuXG4gIEBPdXRwdXQoKSBvbkNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge1xuXG4gIH1cblxuICBvcGVuQWJzb2x1dGVMaW5rKGV2ZW50LCBocmVmLCB0YXJnZXQ6IFRVcmxUYXJnZXQgPSAnX3NlbGYnKSB7XG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2V4dGVybmFsUmVkaXJlY3QnLCB7IGV4dGVybmFsVXJsOiBocmVmLCB0YXJnZXR9XSwge1xuICAgICAgc2tpcExvY2F0aW9uQ2hhbmdlOiB0cnVlLFxuICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coYFJlZGlyZWN0ZWQgdG86ICR7aHJlZn1gKTtcbiAgICB9KTtcblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICB0b2dnbGVBY3RpdmUoKSB7XG4gICAgdGhpcy5hY3RpdmUgPSAhdGhpcy5hY3RpdmU7XG4gIH1cbn1cbiJdfQ==