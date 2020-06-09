import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/router';
import * as ɵngcc2 from '@angular/common';

function GlSharedComponentMenuItemComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    var _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 4);
    ɵngcc0.ɵɵlistener("click", function GlSharedComponentMenuItemComponent_a_2_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); var ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2.openAbsoluteLink($event, ctx_r2.href); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("href", "externalRedirect", ɵngcc0.ɵɵsanitizeUrl);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.content);
} }
function GlSharedComponentMenuItemComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    var _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 5);
    ɵngcc0.ɵɵlistener("click", function GlSharedComponentMenuItemComponent_a_3_Template_a_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r5); var ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.onClick.emit(null); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("routerLink", ctx_r1.href);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.content);
} }
var GlSharedComponentMenuItemComponent = /** @class */ (function () {
    function GlSharedComponentMenuItemComponent(_router) {
        this._router = _router;
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
GlSharedComponentMenuItemComponent.ɵfac = function GlSharedComponentMenuItemComponent_Factory(t) { return new (t || GlSharedComponentMenuItemComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Router)); };
GlSharedComponentMenuItemComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentMenuItemComponent, selectors: [["gl-shared-component-menu-item"]], inputs: { menuLogo: "menuLogo", src: "src", itemClass: "itemClass", absolute: "absolute", href: "href", alt: "alt", content: "content" }, outputs: { onClick: "onClick" }, decls: 4, vars: 7, consts: [["id", "{this.props.id}"], [1, "menu-icons", 3, "src", "alt"], [3, "href", "click", 4, "ngIf"], [3, "routerLink", "click", 4, "ngIf"], [3, "href", "click"], [3, "routerLink", "click"]], template: function GlSharedComponentMenuItemComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "li", 0);
        ɵngcc0.ɵɵelement(1, "img", 1);
        ɵngcc0.ɵɵtemplate(2, GlSharedComponentMenuItemComponent_a_2_Template, 2, 2, "a", 2);
        ɵngcc0.ɵɵtemplate(3, GlSharedComponentMenuItemComponent_a_3_Template, 2, 2, "a", 3);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate1("menu-title ", ctx.itemClass, "");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("src", ctx.src, ɵngcc0.ɵɵsanitizeUrl)("alt", ctx.alt);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.absolute);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.absolute);
    } }, directives: [ɵngcc2.NgIf, ɵngcc1.RouterLinkWithHref], styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);[_nghost-%COMP%]  .menu-title{background:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);margin:0 0 .14em;position:relative;display:flex;align-items:center;border-left:.2em solid #d24077}[_nghost-%COMP%]  .menu-title .material-icons{color:rgba(255,255,255,.6);font-size:1.2em;padding:.3em;margin:0 .5em 0 .3em}[_nghost-%COMP%]  .menu-title .material-icons.expand{position:absolute;color:#fff;top:.5em;right:.3em}[_nghost-%COMP%]  .menu-title .menu-icons{padding:.2em .5em;height:1.5em;width:1.5em}[_nghost-%COMP%]  .menu-title a{text-decoration:none;font-size:.6em;font-family:Montserrat,sans-serif;font-weight:300;text-transform:uppercase;color:rgba(255,255,255,.4);padding:1.5em .7em;flex-grow:1}[_nghost-%COMP%]  .menu-title.dark{margin:0;border-bottom:1px solid #38393c;border-left:none}[_nghost-%COMP%]  .menu-title.dark:not(hover){background:#2c2c2f;transition:.3s ease-in-out}[_nghost-%COMP%]  .menu-title.dark:hover{background:#4b4d52;transition:.3s ease-in-out}[_nghost-%COMP%]  .menu-title.translucid{margin:0;border-bottom:.5px solid rgba(255,255,255,.1);border-left:none}[_nghost-%COMP%]  .menu-title.translucid:not(hover){background:rgba(255,255,255,.05);transition:.3s ease-in-out}[_nghost-%COMP%]  .menu-title.translucid:hover{background:rgba(255,255,255,.1);transition:.3s ease-in-out}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentMenuItemComponent, [{
        type: Component,
        args: [{
                selector: 'gl-shared-component-menu-item',
                template: "<li id={this.props.id} class=\"menu-title {{ itemClass }}\">\n  <img [src]=\"src\" class=\"menu-icons\" [alt]=\"alt\"/>\n  <a\n    *ngIf=\"absolute\"\n    [href]=\"'externalRedirect'\"\n    (click)=\"openAbsoluteLink($event, href)\"\n  >{{ content }}</a>\n  <a *ngIf=\"!absolute\"\n     [routerLink]=\"href\"\n     (click)=\"onClick.emit(null)\"\n  >{{ content }}</a>\n</li>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep .menu-title{background:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);margin:0 0 .14em;position:relative;display:flex;align-items:center;border-left:.2em solid #d24077}:host::ng-deep .menu-title .material-icons{color:rgba(255,255,255,.6);font-size:1.2em;padding:.3em;margin:0 .5em 0 .3em}:host::ng-deep .menu-title .material-icons.expand{position:absolute;color:#fff;top:.5em;right:.3em}:host::ng-deep .menu-title .menu-icons{padding:.2em .5em;height:1.5em;width:1.5em}:host::ng-deep .menu-title a{text-decoration:none;font-size:.6em;font-family:Montserrat,sans-serif;font-weight:300;text-transform:uppercase;color:rgba(255,255,255,.4);padding:1.5em .7em;flex-grow:1}:host::ng-deep .menu-title.dark{margin:0;border-bottom:1px solid #38393c;border-left:none}:host::ng-deep .menu-title.dark:not(hover){background:#2c2c2f;transition:.3s ease-in-out}:host::ng-deep .menu-title.dark:hover{background:#4b4d52;transition:.3s ease-in-out}:host::ng-deep .menu-title.translucid{margin:0;border-bottom:.5px solid rgba(255,255,255,.1);border-left:none}:host::ng-deep .menu-title.translucid:not(hover){background:rgba(255,255,255,.05);transition:.3s ease-in-out}:host::ng-deep .menu-title.translucid:hover{background:rgba(255,255,255,.1);transition:.3s ease-in-out}"]
            }]
    }], function () { return [{ type: ɵngcc1.Router }]; }, { menuLogo: [{
            type: Input
        }], src: [{
            type: Input
        }], onClick: [{
            type: Output
        }], itemClass: [{
            type: Input
        }], absolute: [{
            type: Input
        }], href: [{
            type: Input
        }], alt: [{
            type: Input
        }], content: [{
            type: Input
        }] }); })();
    return GlSharedComponentMenuItemComponent;
}());
export { GlSharedComponentMenuItemComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1tZW51LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJuZzovZ2wtbmctZnJvbnRlbmQvbGliL3NoYXJlZC9jb21wb25lbnQvbWVudS9pdGVtL2dsLXNoYXJlZC1jb21wb25lbnQtbWVudS1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUMsekNBQXpDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU96QztpQ0FVRTtrQ0FBb0IsT0FBZTs7U0FBZixZQUFPLEdBQVAsT0FBTyxDQUFRLFNBUDFCLGFBQVEsR0FBVztvQkFBNkMsQ0FBQyxTQUNqRSxRQUFHO0FBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUluQixZQUFPO0FBQXNCLElBQUksWUFBWSxFQUFFLENBQUMsS0FFbkIsQ0FBQyxLQUV4Qyw2REFBZ0IsR0FBaEIsVUFBaUIsS0FBSyxFQUFFLElBQUksWUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLGNBQ2xFLGtCQUFrQixFQUFFLElBQUk7TUFDekIsQ0FBQyxDQUFDLElBQUksQ0FBQztpQkFDTixPQUFPLENBQUM7Q0FBRyxDQUFDO01BQWtCLElBQU0sQ0FBQyxDQUFDLFNBQ3hDLENBQUMsQ0FBQyxDQUFDLFNBRUgsS0FBSyxDQUFDO1lBQWMsRUFBRSxDQUFDLEtBQ3pCLENBQUM7O29CQVY0QixNQUFNLGlCQVQxQjs7Y0FBUixLQUFLLEVBQUU7YUFBbUIsTUFDbEIscUJBQVI7SUFBSyxFQUFFOzs7Ozs7Ozs7O0FBRlY7QUFDb0IsSUFTbEIsNENBQW9CLE9BQWU7QUFBSSxRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFRO0FBQUMsUUFQM0IsYUFBUSxHQUFXLDZDQUE2QyxDQUFDO0FBQzVFLFFBQVcsUUFBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7QUFDL0IsUUFHWSxZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7QUFDNUQsSUFDeUMsQ0FBQztBQUMxQyxJQUNFLDZEQUFnQixHQUFoQixVQUFpQixLQUFLLEVBQUUsSUFBSTtBQUM5QixRQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRTtBQUN4RSxZQUFNLGtCQUFrQixFQUFFLElBQUk7QUFDOUIsU0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQ04sWUFBQSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFrQixJQUFNLENBQUMsQ0FBQztBQUM1QyxRQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ1AsUUFDSSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDM0IsSUFBRSxDQUFDO0FBQ0Y7QUFDNkUsZ0JBWi9DLE1BQU07QUFBRztBQUVsQyxJQVhLO0FBQWEsUUFBckIsS0FBSyxFQUFFO0FBQUMseUVBQWtCOztBQUNMLFFBQXJCLEtBQUssRUFBRTt3RUFBbUIseEVBQWxCLHdFQUFrQjtJQUNsQixKQUFWLElBQVU7UUFBUixLQUFLLEVBQUUsZkFBYyxRQUFyQixLQUFLLEVBQUU7d0VBQWtFLHhFQUFqRSx3RUFBaUU7SUFDakUsSkFBVixJQUFVO1FBQVIsS0FBSyxFQUFFLGZBQWMsUUFBckIsS0FBSyxFQUFFO21FQUFxQixuRUFBcEIsbUVBQW9CO0lBQ3BCLEpBQVYsSUFBVTtRQUFSLEtBQUssRUFBRSxmQUNILFFBREosS0FBSyxFQUFFO29FQUFNLHBFQUFMLG9FQUFLO0lBQ0wsSkFBVixJQUFVO1FBQVIsS0FBSyxFQUFFLGZBQ0YsUUFETCxLQUFLLEVBQUU7bUVBQUssbkVBQUosbUVBQUk7SUFDSixKQUFWLElBQVU7UUFBUixLQUFLLEVBQUUsZkFDTixRQURELEtBQUssRUFBRTt1RUFBUyx2RUFBUix1RUFBUTtJQUNQLEpBQVgsSUFBVztRQUFULE1BQU0sRUFBRSxoQkFBYyxRQUF0QixNQUFNLEVBQUU7dUVBQWlELHZFQUFoRCx1RUFBZ0Q7SUFSL0Msa0NBQWtDLHdCQUw5QyxTQUFTLENBQUMsY0FDVCxRQUFRLEVBQUUsK0JBQStCLGNBQ3pDLHpJQUdXLGtDQUFrQyx3QkFMOUMsU0FBUyxDQUFDLGNBQ1QsUUFBUSxFQUFFLCtCQUErQixjQUN6Qzs0VUFBNkQsQUFBQTs7Ozs7Ozs7Ozs7Ozs7a2RBRTlELENBQUMsUUFDVyxrQ0FBa0MsQ0FxQjlDLE1BQUQseUNBQUMsR0FBQSxBQXJCRCxJQXFCQyxVQXJCWSxrQ0FBa0MsOUlBRDlDLENBQUMsUUFDVyxrQ0FBa0MsQ0FxQjlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQ0Q7QUFBQyxJQURELHlDQUFDO0FBQ0EsQ0FEQSxBQXJCRCxJQXFCQzs7QUE3QkEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LW1lbnUtaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LW1lbnUtaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtbWVudS1pdGVtLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRNZW51SXRlbUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGl0ZW1DbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSBhYnNvbHV0ZTogYm9vbGVhbjtcbiAgQElucHV0KCkgbWVudUxvZ286IHN0cmluZyA9ICcuLi9hc3NldHMvaW1nL2xvZ28vZ2xhdWNpby1sb2dvLWNvbG9yZWQuc3ZnJztcbiAgQElucHV0KCkgc3JjID0gdGhpcy5tZW51TG9nbztcbiAgQElucHV0KCkgaHJlZjtcbiAgQElucHV0KCkgYWx0O1xuICBASW5wdXQoKSBjb250ZW50O1xuICBAT3V0cHV0KCkgb25DbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHsgfVxuXG4gIG9wZW5BYnNvbHV0ZUxpbmsoZXZlbnQsIGhyZWYpIHtcbiAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvZXh0ZXJuYWxSZWRpcmVjdCcsIHsgZXh0ZXJuYWxVcmw6IGhyZWYgfV0sIHtcbiAgICAgIHNraXBMb2NhdGlvbkNoYW5nZTogdHJ1ZSxcbiAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGBSZWRpcmVjdGVkIHRvOiAke2hyZWZ9YCk7XG4gICAgfSk7XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG59XG4iXX0=