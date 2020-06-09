import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/router';
import * as ɵngcc2 from '@angular/common';

function GlSharedComponentMenuItemComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 4);
    ɵngcc0.ɵɵlistener("click", function GlSharedComponentMenuItemComponent_a_2_Template_a_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2.openAbsoluteLink($event, ctx_r2.href); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("href", "externalRedirect", ɵngcc0.ɵɵsanitizeUrl);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.content);
} }
function GlSharedComponentMenuItemComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 5);
    ɵngcc0.ɵɵlistener("click", function GlSharedComponentMenuItemComponent_a_3_Template_a_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.onClick.emit(null); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("routerLink", ctx_r1.href);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r1.content);
} }
let GlSharedComponentMenuItemComponent = class GlSharedComponentMenuItemComponent {
    constructor(_router) {
        this._router = _router;
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
export { GlSharedComponentMenuItemComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1tZW51LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJuZzovZ2wtbmctZnJvbnRlbmQvbGliL3NoYXJlZC9jb21wb25lbnQvbWVudS9pdGVtL2dsLXNoYXJlZC1jb21wb25lbnQtbWVudS1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUMsekNBQXpDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU96QyxJQUFhLGtDQUFrQztBQUEvQyxNQUFhLGtDQUFrQztJQVU3QyxZQUFvQixPQUFlLFlBQWY7O0dBQU8sR0FBUCxPQUFPLENBQVEsU0FQMUIsYUFBUSxHQUFXO0VBQTZDLENBQUMsU0FDakUsUUFBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7R0FJbkIsWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBRW5CLENBQUMsS0FFeEMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLElBQUksWUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLGNBQ2xFLGtCQUFrQixFQUFFLElBQUksV0FDekIsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsZUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixJQUFJLEVBQUUsQ0FBQyxDQUFDO0NBQ3hDLENBQUMsQ0FBQyxDQUFDLFNBRUgsS0FBSyxDQUFDO1dBQWMsRUFBRSxDQUFDLEtBQ3pCLENBQUMsRUFDRixDQUFBOzs7VUFYOEIsTUFBTSxNQVQxQixpQkFBUixLQUFLLEVBQUU7O2tCQUFtQjs7Ozs7Ozs7Ozs7Ozs7QUFEN0IsSUFBYSxrQ0FBa0MsR0FBL0MsTUFBYSxrQ0FBa0M7QUFDL0MsSUFTRSxZQUFvQixPQUFlO0FBQUksUUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtBQUFDLFFBUDNCLGFBQVEsR0FBVyw2Q0FBNkMsQ0FBQztBQUM1RSxRQUFXLFFBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0FBQy9CLFFBR1ksWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0FBQzVELElBQ3lDLENBQUM7QUFDMUMsSUFDRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsSUFBSTtBQUM5QixRQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRTtBQUN4RSxZQUFNLGtCQUFrQixFQUFFLElBQUk7QUFDOUIsU0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtBQUNqQixZQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLElBQUksRUFBRSxDQUFDLENBQUM7QUFDNUMsUUFBSSxDQUFDLENBQUMsQ0FBQztBQUNQLFFBQ0ksS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQzNCLElBQUUsQ0FBQztBQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7NjlDQUFBO0FBQ0Q7QUFBNEQsWUFaN0IsTUFBTTtBQUFHO0FBVDdCOztBQUFBLHFFQUFrQjtBQUNsQixBQUFBO0lBQVIsS0FBSyxFQUFFLFhBQWMsSUFBckIsS0FBSyxFQUFFO29FQUFtQixwRUFBbEIsb0VBQWtCO0FBQ2xCLEFBQUE7SUFBUixLQUFLLEVBQUUsWEFBYyxJQUFyQixLQUFLLEVBQUU7b0VBQWtFLHBFQUFqRSxvRUFBaUU7QUFDakUsQUFBQTtJQUFSLEtBQUssRUFBRSxYQUFjLElBQXJCLEtBQUssRUFBRTsrREFBcUIsL0RBQXBCLCtEQUFvQjtBQUNwQixBQUFBO0lBQVIsS0FBSyxFQUFFLFhBQ0gsSUFESixLQUFLLEVBQUU7Z0VBQU0saEVBQUwsZ0VBQUs7QUFDTCxBQUFBO0lBQVIsS0FBSyxFQUFFLFhBQ0YsSUFETCxLQUFLLEVBQUU7K0RBQUssL0RBQUosK0RBQUk7QUFDSixBQUFBO0lBQVIsS0FBSyxFQUFFLFhBQ04sSUFERCxLQUFLLEVBQUU7bUVBQVMsbkVBQVIsbUVBQVE7QUFDUCxBQUFBO0lBQVQsTUFBTSxFQUFFLFpBQWMsSUFBdEIsTUFBTSxFQUFFO21FQUFpRCxuRUFBaEQsbUVBQWdEO0FBUi9DLGtDQUFrQyxvQkFMOUMsU0FBUyxDQUFDLFVBQ1QsUUFBUSxFQUFFLHBGQUlDLGtDQUFrQyxvQkFMOUMsU0FBUyxDQUFDLFVBQ1QsUUFBUSxFQUFFO3NCQUErQixBQUFBO09BQ3pDLEFBQUE7OytUQUE2RCxBQUFBO2t6Q0FFOUQsQ0FBQyxJQUNXLGtDQUFrQyxDQXFCOUMsV0FyQlksa0NBQWtDLHJGQUQ5QyxDQUFDLElBQ1csa0NBQWtDLENBcUI5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUNEOztBQTlCQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtbWVudS1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dsLXNoYXJlZC1jb21wb25lbnQtbWVudS1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1tZW51LWl0ZW0uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudE1lbnVJdGVtQ29tcG9uZW50IHtcbiAgQElucHV0KCkgaXRlbUNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGFic29sdXRlOiBib29sZWFuO1xuICBASW5wdXQoKSBtZW51TG9nbzogc3RyaW5nID0gJy4uL2Fzc2V0cy9pbWcvbG9nby9nbGF1Y2lvLWxvZ28tY29sb3JlZC5zdmcnO1xuICBASW5wdXQoKSBzcmMgPSB0aGlzLm1lbnVMb2dvO1xuICBASW5wdXQoKSBocmVmO1xuICBASW5wdXQoKSBhbHQ7XG4gIEBJbnB1dCgpIGNvbnRlbnQ7XG4gIEBPdXRwdXQoKSBvbkNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikgeyB9XG5cbiAgb3BlbkFic29sdXRlTGluayhldmVudCwgaHJlZikge1xuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9leHRlcm5hbFJlZGlyZWN0JywgeyBleHRlcm5hbFVybDogaHJlZiB9XSwge1xuICAgICAgc2tpcExvY2F0aW9uQ2hhbmdlOiB0cnVlLFxuICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coYFJlZGlyZWN0ZWQgdG86ICR7aHJlZn1gKTtcbiAgICB9KTtcblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbn1cbiJdfQ==