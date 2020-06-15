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
GlSharedComponentMenuItemComponent.ɵfac = function GlSharedComponentMenuItemComponent_Factory(t) { return new (t || GlSharedComponentMenuItemComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.Router)); };
GlSharedComponentMenuItemComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentMenuItemComponent, selectors: [["gl-shared-component-menu-item"]], inputs: { itemClass: "itemClass", menuLogo: "menuLogo", src: "src", absolute: "absolute", href: "href", alt: "alt", content: "content" }, outputs: { onClick: "onClick" }, decls: 4, vars: 7, consts: [["id", "{this.props.id}"], [1, "menu-icons", 3, "src", "alt"], [3, "href", "click", 4, "ngIf"], [3, "routerLink", "click", 4, "ngIf"], [3, "href", "click"], [3, "routerLink", "click"]], template: function GlSharedComponentMenuItemComponent_Template(rf, ctx) { if (rf & 1) {
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
    }], function () { return [{ type: ɵngcc1.Router }]; }, { itemClass: [{
            type: Input
        }], menuLogo: [{
            type: Input
        }], src: [{
            type: Input
        }], onClick: [{
            type: Output
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1tZW51LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJuZzovZ2wtbmctZnJvbnRlbmQvbGliL3NoYXJlZC9jb21wb25lbnQvbWVudS9pdGVtL2dsLXNoYXJlZC1jb21wb25lbnQtbWVudS1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUMsekNBQXpDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU96QztpQ0FVRTtrQ0FBb0IsT0FBZTs7U0FBZixZQUFPLEdBQVAsT0FBTyxDQUFRLFNBVDFCLGNBQVMsR0FBK0IsTUFBTSxDQUFDLFNBRS9DO0tBQVEsR0FBVztZQUE2QyxDQUFDLFNBQ2pFLFFBQUcsR0FBRyxJQUFJO0FBQUMsUUFBUSxDQUFDLFNBSW5CLFlBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQyxLQUVuQixDQUFDLEtBRXhDLDZEQUFnQixHQUFoQixVQUFpQixLQUFLLEVBQUUsSUFBSSxZQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLG1CQUFtQixFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUU7SUFDbEU7QUFBa0IsRUFBRSxJQUFJLFdBQ3pCLENBQUMsQ0FBQyxJQUFJLENBQUM7O09BQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBa0I7RUFBTSxDQUFDLENBQUMsU0FDeEMsQ0FBQyxDQUFDLENBQUMsU0FFSCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsS0FDekIsQ0FBQzs7OztHQVY0QixNQUFNLGlCQVQxQixxQkFBUixLQUFLLEVBQUU7O0tBQWdELE1BQy9DOzs7Ozs7Ozs7O0FBRlg7QUFDb0IsSUFTbEIsNENBQW9CLE9BQWU7QUFBSSxRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFRO0FBQUMsUUFUM0IsY0FBUyxHQUErQixNQUFNLENBQUM7QUFDMUQsUUFDVyxhQUFRLEdBQVcsNkNBQTZDLENBQUM7QUFDNUUsUUFBVyxRQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztBQUMvQixRQUdZLFlBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUM1RCxJQUN5QyxDQUFDO0FBQzFDLElBQ0UsNkRBQWdCLEdBQWhCLFVBQWlCLEtBQUssRUFBRSxJQUFJO0FBQzlCLFFBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFO0FBQ3hFLFlBQU0sa0JBQWtCLEVBQUUsSUFBSTtBQUM5QixTQUFLLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDTixZQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQWtCLElBQU0sQ0FBQyxDQUFDO0FBQzVDLFFBQUksQ0FBQyxDQUFDLENBQUM7QUFDUCxRQUNJLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUMzQixJQUFFLENBQUM7QUFDRjtBQUM2RSxnQkFaL0MsTUFBTTtBQUFHO0FBRWxDLElBWEs7QUFBYSxRQUFyQixLQUFLLEVBQUU7O0FBQ1QsSUFBVTtRQUFSLEtBQUssRUFBRSxmQUFjLFFBQXJCLEtBQUssRUFBRTt3RUFBbUIseEVBQWxCLHdFQUFrQjtJQUNsQixKQUFWLElBQVU7UUFBUixLQUFLLEVBQUUsZkFBYyxRQUFyQixLQUFLLEVBQUU7d0VBQWtFLHhFQUFqRSx3RUFBaUU7SUFDakUsSkFBVixJQUFVO1FBQVIsS0FBSyxFQUFFLGZBQWMsUUFBckIsS0FBSyxFQUFFO21FQUFxQixuRUFBcEIsbUVBQW9CO0lBQ3BCLEpBQVYsSUFBVTtRQUFSLEtBQUssRUFBRSxmQUNILFFBREosS0FBSyxFQUFFO29FQUFNLHBFQUFMLG9FQUFLO0lBQ0wsSkFBVixJQUFVO1FBQVIsS0FBSyxFQUFFLGZBQ0YsUUFETCxLQUFLLEVBQUU7bUVBQUssbkVBQUosbUVBQUk7SUFDSixKQUFWLElBQVU7UUFBUixLQUFLLEVBQUUsZkFDTixRQURELEtBQUssRUFBRTt1RUFBUyx2RUFBUix1RUFBUTtJQUNQLEpBQVgsSUFBVztRQUFULE1BQU0sRUFBRSxoQkFBYyxRQUF0QixNQUFNLEVBQUU7dUVBQWlELHZFQUFoRCx1RUFBZ0Q7SUFSL0Msa0NBQWtDLHdCQUw5QyxTQUFTLENBQUMsY0FDVCxRQUFRLEVBQUUsK0JBQStCLGNBQ3pDLHpJQUdXLGtDQUFrQyx3QkFMOUMsU0FBUyxDQUFDLGNBQ1QsUUFBUSxFQUFFLCtCQUErQixjQUN6Qzs0VUFBNkQsQUFBQTs7Ozs7Ozs7Ozs7Ozs7a2RBRTlELENBQUMsUUFDVyxrQ0FBa0MsQ0FxQjlDLE1BQUQseUNBQUMsR0FBQSxBQXJCRCxJQXFCQyxVQXJCWSxrQ0FBa0MsOUlBRDlDLENBQUMsUUFDVyxrQ0FBa0MsQ0FxQjlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQ0Q7QUFBQyxJQURELHlDQUFDO0FBQ0EsQ0FEQSxBQXJCRCxJQXFCQzs7QUE3QkEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LW1lbnUtaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LW1lbnUtaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtbWVudS1pdGVtLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRNZW51SXRlbUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGl0ZW1DbGFzczogJ3RyYW5zbHVjaWQnIHwgJ2RhcmsnIHwgJycgPSAnZGFyayc7XG4gIEBJbnB1dCgpIGFic29sdXRlOiBib29sZWFuO1xuICBASW5wdXQoKSBtZW51TG9nbzogc3RyaW5nID0gJy4uL2Fzc2V0cy9pbWcvbG9nby9nbGF1Y2lvLWxvZ28tY29sb3JlZC5zdmcnO1xuICBASW5wdXQoKSBzcmMgPSB0aGlzLm1lbnVMb2dvO1xuICBASW5wdXQoKSBocmVmO1xuICBASW5wdXQoKSBhbHQ7XG4gIEBJbnB1dCgpIGNvbnRlbnQ7XG4gIEBPdXRwdXQoKSBvbkNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikgeyB9XG5cbiAgb3BlbkFic29sdXRlTGluayhldmVudCwgaHJlZikge1xuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9leHRlcm5hbFJlZGlyZWN0JywgeyBleHRlcm5hbFVybDogaHJlZiB9XSwge1xuICAgICAgc2tpcExvY2F0aW9uQ2hhbmdlOiB0cnVlLFxuICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coYFJlZGlyZWN0ZWQgdG86ICR7aHJlZn1gKTtcbiAgICB9KTtcblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbn1cbiJdfQ==