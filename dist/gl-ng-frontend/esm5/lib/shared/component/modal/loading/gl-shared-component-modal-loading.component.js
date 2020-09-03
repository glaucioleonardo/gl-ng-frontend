import { __decorate } from "tslib";
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { GlSharedComponentModalLoadingService } from './gl-shared-component-modal-loading.service';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

var _c0 = ["mainLoading"];
function GlSharedComponentModalLoadingComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 1, 2);
    ɵngcc0.ɵɵelementStart(2, "div", 3);
    ɵngcc0.ɵɵelementStart(3, "div", 4);
    ɵngcc0.ɵɵelement(4, "div");
    ɵngcc0.ɵɵelement(5, "div");
    ɵngcc0.ɵɵelement(6, "div");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(7, "div", 5);
    ɵngcc0.ɵɵelementStart(8, "div", 6);
    ɵngcc0.ɵɵprojection(9);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(10, "h2", 7);
    ɵngcc0.ɵɵtext(11);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(11);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.service._loadingStatus);
} }
var _c1 = ["*"];
var GlSharedComponentModalLoadingComponent = /** @class */ (function () {
    function GlSharedComponentModalLoadingComponent(service) {
        this.service = service;
        this.loaded = false;
        service.defaultMessage = this.defaultMessage;
    }
    GlSharedComponentModalLoadingComponent.prototype.ngAfterViewChecked = function () {
        var container = document.querySelector('.main-loading');
        if (container != null && !this.loaded) {
            this.service.setup(container);
            this.loaded = true;
        }
    };
    GlSharedComponentModalLoadingComponent.ctorParameters = function () { return [
        { type: GlSharedComponentModalLoadingService }
    ]; };
    __decorate([
        ViewChild('mainLoading', { read: ElementRef, static: true })
    ], GlSharedComponentModalLoadingComponent.prototype, "mainLoading", void 0);
    __decorate([
        Input()
    ], GlSharedComponentModalLoadingComponent.prototype, "defaultMessage", void 0);
GlSharedComponentModalLoadingComponent.ɵfac = function GlSharedComponentModalLoadingComponent_Factory(t) { return new (t || GlSharedComponentModalLoadingComponent)(ɵngcc0.ɵɵdirectiveInject(GlSharedComponentModalLoadingService)); };
GlSharedComponentModalLoadingComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentModalLoadingComponent, selectors: [["gl-shared-component-modal-loading"]], viewQuery: function GlSharedComponentModalLoadingComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c0, true, ElementRef);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.mainLoading = _t.first);
    } }, inputs: { defaultMessage: "defaultMessage" }, ngContentSelectors: _c1, decls: 1, vars: 1, consts: [["class", "main-loading", 4, "ngIf"], [1, "main-loading"], ["mainLoading", ""], [1, "loading-container"], [1, "lds-facebook"], [1, "status-container"], [1, "user-content"], [1, "subtitle", "loading-status"]], template: function GlSharedComponentModalLoadingComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵtemplate(0, GlSharedComponentModalLoadingComponent_div_0_Template, 12, 1, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.service._showLoading);
    } }, directives: [ɵngcc1.NgIf], styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);[_nghost-%COMP%]  .main-loading{position:fixed;width:100vw;height:100vh;z-index:999999999;top:0;left:0;background:rgba(0,0,0,.85);display:flex;justify-content:center;flex-direction:column}[_nghost-%COMP%]  .main-loading .status-container{display:flex;flex-direction:column;text-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:.5}[_nghost-%COMP%]  .main-loading .status-container .user-content{flex-grow:1}[_nghost-%COMP%]  .main-loading .status-container .loading-status{font-family:Montserrat,sans-serif;font-weight:300;color:#fff;font-size:.5em;width:100%;margin:1em 0 0;background:unset;white-space:pre-line}.loading-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.hide-loading[_ngcontent-%COMP%]{opacity:0;visibility:collapse;transition:1s ease-in-out,visibility 1s ease-in-out}.lds-facebook[_ngcontent-%COMP%]{display:inline-block;position:relative;width:64px;height:64px}.lds-facebook[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:inline-block;position:absolute;left:6px;width:13px;background:#fff;-webkit-animation:1.2s cubic-bezier(0,.5,.5,1) infinite lds-facebook;animation:1.2s cubic-bezier(0,.5,.5,1) infinite lds-facebook}.lds-facebook[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1){left:6px;-webkit-animation-delay:-.24s;animation-delay:-.24s}.lds-facebook[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){left:26px;-webkit-animation-delay:-.12s;animation-delay:-.12s}.lds-facebook[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3){left:45px;-webkit-animation-delay:0s;animation-delay:0s}@-webkit-keyframes lds-facebook{0%{top:6px;height:51px}100%,50%{top:19px;height:26px}}@keyframes lds-facebook{0%{top:6px;height:51px}100%,50%{top:19px;height:26px}}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentModalLoadingComponent, [{
        type: Component,
        args: [{
                selector: 'gl-shared-component-modal-loading',
                template: "<div #mainLoading class=\"main-loading\" *ngIf=\"service._showLoading\">\n  <div class=\"loading-container\">\n    <div class=\"lds-facebook\"><div></div><div></div><div></div></div>\n  </div>\n  <div class=\"status-container\">\n    <div class=\"user-content\">\n      <ng-content></ng-content>\n    </div>\n    <h2 class=\"subtitle loading-status\">{{ service._loadingStatus }}</h2>\n  </div>\n</div>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep .main-loading{position:fixed;width:100vw;height:100vh;z-index:999999999;top:0;left:0;background:rgba(0,0,0,.85);display:flex;justify-content:center;flex-direction:column}:host::ng-deep .main-loading .status-container{display:flex;flex-direction:column;text-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:.5}:host::ng-deep .main-loading .status-container .user-content{flex-grow:1}:host::ng-deep .main-loading .status-container .loading-status{font-family:Montserrat,sans-serif;font-weight:300;color:#fff;font-size:.5em;width:100%;margin:1em 0 0;background:unset;white-space:pre-line}.loading-container{display:flex;justify-content:center;align-items:center}.hide-loading{opacity:0;visibility:collapse;transition:1s ease-in-out,visibility 1s ease-in-out}.lds-facebook{display:inline-block;position:relative;width:64px;height:64px}.lds-facebook div{display:inline-block;position:absolute;left:6px;width:13px;background:#fff;-webkit-animation:1.2s cubic-bezier(0,.5,.5,1) infinite lds-facebook;animation:1.2s cubic-bezier(0,.5,.5,1) infinite lds-facebook}.lds-facebook div:nth-child(1){left:6px;-webkit-animation-delay:-.24s;animation-delay:-.24s}.lds-facebook div:nth-child(2){left:26px;-webkit-animation-delay:-.12s;animation-delay:-.12s}.lds-facebook div:nth-child(3){left:45px;-webkit-animation-delay:0s;animation-delay:0s}@-webkit-keyframes lds-facebook{0%{top:6px;height:51px}100%,50%{top:19px;height:26px}}@keyframes lds-facebook{0%{top:6px;height:51px}100%,50%{top:19px;height:26px}}"]
            }]
    }], function () { return [{ type: GlSharedComponentModalLoadingService }]; }, { mainLoading: [{
            type: ViewChild,
            args: ['mainLoading', { read: ElementRef, static: true }]
        }], defaultMessage: [{
            type: Input
        }] }); })();
    return GlSharedComponentModalLoadingComponent;
}());
export { GlSharedComponentModalLoadingComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1sb2FkaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsibmc6L2dsLW5nLWZyb250ZW5kL2xpYi9zaGFyZWQvY29tcG9uZW50L21vZGFsL2xvYWRpbmcvZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1sb2FkaW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFvQixTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUYsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sNkNBQTZDLENBQUMsbkdBQW5HLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBT25HO3FDQU9FOzs7Y0FBbUIsT0FBNkMsWUFBN0MsWUFBTyxHQUFQLE9BQU8sQ0FBc0MsU0FGaEUsV0FBTSxHQUFHLEtBQUssQ0FBQztNQUdiLE9BQU8sQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO09BQWMsQ0FBQyxLQUMvQyxDQUFDLEtBRUQ7O01BQWtCLEdBQWxCLHNCQUNFO0dBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQztLQUFhLENBQUMsZUFBZSxDQUFtQixDQUFDO0FBRTVFLElBQUksU0FBUyxJQUFJLElBQUksSUFBSSxDQUFDO0dBQUksQ0FBQyxNQUFNLEVBQUUsY0FDckM7R0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7RUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFDcEIsS0FDSCxDQUFDOzs7Ozs7Ozs7Ozs7OztBQWxCSDtBQUEwRSxJQU94RSxnREFBbUIsT0FBNkM7QUFDbEUsUUFEcUIsWUFBTyxHQUFQLE9BQU8sQ0FBc0M7QUFBQyxRQUZqRSxXQUFNLEdBQUcsS0FBSyxDQUFDO0FBQ2pCLFFBRUksT0FBTyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO0FBQ2pELElBQUUsQ0FBQztBQUNILElBQ0UsbUVBQWtCLEdBQWxCO0FBQWMsUUFDWixJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBbUIsQ0FBQztBQUNoRixRQUNJLElBQUksU0FBUyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7QUFDM0MsWUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNwQyxZQUFNLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDOztBQUV6QixJQUFFLENBQUM7QUFDRjtnQkFaNkIsb0NBQW9DLHBEQWFnQixnQkFicEQsb0NBQW9DO0FBQUc7SUFOTCxKQU92RCxJQVB1RDtRQUE3RCxTQUFTLENBQUMsYUFBYSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMscEVBQWMsUUFBMUUsU0FBUyxDQUFDLGFBQWEsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDOytFQUF5QywvRUFBeEMsK0VBQXdDO0lBRTdGLEpBQVgsSUFBVztRQUFSLEtBQUssRUFBRSxmQUFjLFFBQXJCLEtBQUssRUFBRTtrRkFBd0IsbEZBQXZCLGtGQUF1QjtJQUhyQixzQ0FBc0Msd0JBTGxELFNBQVMsQ0FBQyxjQUNULFFBQVEsRUFBRSxtQ0FBbUMsY0FDN0MsakpBR1csc0NBQXNDLHdCQUxsRCxTQUFTLENBQUMsY0FDVCxRQUFRLEVBQUUsbUNBQW1DLGNBQzdDOzs7ZUFBaUUsQUFBQTs7Ozs7Ozs7bzlCQUVsRSxDQUFDLFFBQ1csc0NBQXNDLENBbUJsRCxNQUFELDZDQUFDLEdBQUEsQUFuQkQsSUFtQkMsVUFuQlksc0NBQXNDLDFKQURsRCxDQUFDLFFBQ1csc0NBQXNDLENBbUJsRDs7Ozs7Ozs7Ozs7OztvQkFDRDtBQUFDLElBREQsNkNBQUM7QUFDQSxDQURBLEFBbkJELElBbUJDOztBQTNCQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3Q2hlY2tlZCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHbFNoYXJlZENvbXBvbmVudE1vZGFsTG9hZGluZ1NlcnZpY2UgfSBmcm9tICcuL2dsLXNoYXJlZC1jb21wb25lbnQtbW9kYWwtbG9hZGluZy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1sb2FkaW5nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dsLXNoYXJlZC1jb21wb25lbnQtbW9kYWwtbG9hZGluZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtbW9kYWwtbG9hZGluZy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50TW9kYWxMb2FkaW5nQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3Q2hlY2tlZCB7XG4gIEBWaWV3Q2hpbGQoJ21haW5Mb2FkaW5nJywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IHRydWUgfSkgbWFpbkxvYWRpbmc6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuXG4gIEBJbnB1dCgpIGRlZmF1bHRNZXNzYWdlOiBzdHJpbmc7XG5cbiAgbG9hZGVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHNlcnZpY2U6IEdsU2hhcmVkQ29tcG9uZW50TW9kYWxMb2FkaW5nU2VydmljZSkge1xuICAgIHNlcnZpY2UuZGVmYXVsdE1lc3NhZ2UgPSB0aGlzLmRlZmF1bHRNZXNzYWdlO1xuICB9XG5cbiAgbmdBZnRlclZpZXdDaGVja2VkKCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWxvYWRpbmcnKSBhcyBIVE1MRGl2RWxlbWVudDtcblxuICAgIGlmIChjb250YWluZXIgIT0gbnVsbCAmJiAhdGhpcy5sb2FkZWQpIHtcbiAgICAgIHRoaXMuc2VydmljZS5zZXR1cChjb250YWluZXIpO1xuICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxufVxuIl19