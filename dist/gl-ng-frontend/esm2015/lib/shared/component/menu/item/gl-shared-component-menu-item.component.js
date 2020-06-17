import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
let GlSharedComponentMenuItemComponent = class GlSharedComponentMenuItemComponent {
    constructor(_router) {
        this._router = _router;
        this.itemClass = 'dark';
        this.menuLogo = '../assets/img/logo/glaucio-logo-colored.svg';
        this.src = this.menuLogo;
        this.onClick = new EventEmitter();
    }
    openAbsoluteLink(event, href) {
        this._router.navigate(['/externalRedirect', { externalUrl: href }], {
            skipLocationChange: true,
        }).then(() => {
            console.log(`Redirected to: ${href}`);
        });
        event.preventDefault();
    }
};
GlSharedComponentMenuItemComponent.ctorParameters = () => [
    { type: Router }
];
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
export { GlSharedComponentMenuItemComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1tZW51LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2wtbmctZnJvbnRlbmQvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL2NvbXBvbmVudC9tZW51L2l0ZW0vZ2wtc2hhcmVkLWNvbXBvbmVudC1tZW51LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU96QyxJQUFhLGtDQUFrQyxHQUEvQyxNQUFhLGtDQUFrQztJQVU3QyxZQUFvQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQVQxQixjQUFTLEdBQStCLE1BQU0sQ0FBQztRQUUvQyxhQUFRLEdBQVcsNkNBQTZDLENBQUM7UUFDakUsUUFBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFJbkIsWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBRW5CLENBQUM7SUFFeEMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLElBQUk7UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFO1lBQ2xFLGtCQUFrQixFQUFFLElBQUk7U0FDekIsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO1FBRUgsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Q0FDRixDQUFBOztZQVg4QixNQUFNOztBQVQxQjtJQUFSLEtBQUssRUFBRTtxRUFBZ0Q7QUFDL0M7SUFBUixLQUFLLEVBQUU7b0VBQW1CO0FBQ2xCO0lBQVIsS0FBSyxFQUFFO29FQUFrRTtBQUNqRTtJQUFSLEtBQUssRUFBRTsrREFBcUI7QUFDcEI7SUFBUixLQUFLLEVBQUU7Z0VBQU07QUFDTDtJQUFSLEtBQUssRUFBRTsrREFBSztBQUNKO0lBQVIsS0FBSyxFQUFFO21FQUFTO0FBQ1A7SUFBVCxNQUFNLEVBQUU7bUVBQWlEO0FBUi9DLGtDQUFrQztJQUw5QyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsK0JBQStCO1FBQ3pDLG9ZQUE2RDs7S0FFOUQsQ0FBQztHQUNXLGtDQUFrQyxDQXFCOUM7U0FyQlksa0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtbWVudS1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dsLXNoYXJlZC1jb21wb25lbnQtbWVudS1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1tZW51LWl0ZW0uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudE1lbnVJdGVtQ29tcG9uZW50IHtcbiAgQElucHV0KCkgaXRlbUNsYXNzOiAndHJhbnNsdWNpZCcgfCAnZGFyaycgfCAnJyA9ICdkYXJrJztcbiAgQElucHV0KCkgYWJzb2x1dGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG1lbnVMb2dvOiBzdHJpbmcgPSAnLi4vYXNzZXRzL2ltZy9sb2dvL2dsYXVjaW8tbG9nby1jb2xvcmVkLnN2Zyc7XG4gIEBJbnB1dCgpIHNyYyA9IHRoaXMubWVudUxvZ287XG4gIEBJbnB1dCgpIGhyZWY7XG4gIEBJbnB1dCgpIGFsdDtcbiAgQElucHV0KCkgY29udGVudDtcbiAgQE91dHB1dCgpIG9uQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7IH1cblxuICBvcGVuQWJzb2x1dGVMaW5rKGV2ZW50LCBocmVmKSB7XG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2V4dGVybmFsUmVkaXJlY3QnLCB7IGV4dGVybmFsVXJsOiBocmVmIH1dLCB7XG4gICAgICBza2lwTG9jYXRpb25DaGFuZ2U6IHRydWUsXG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgUmVkaXJlY3RlZCB0bzogJHtocmVmfWApO1xuICAgIH0pO1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxufVxuIl19