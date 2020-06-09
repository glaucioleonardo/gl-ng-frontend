import { __decorate } from "tslib";
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { GlSharedComponentModalLoadingService } from './gl-shared-component-modal-loading.service';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = ["mainLoading"];
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
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(11);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.service._loadingStatus);
} }
const _c1 = ["*"];
let GlSharedComponentModalLoadingComponent = class GlSharedComponentModalLoadingComponent {
    constructor(service) {
        this.service = service;
        this.loaded = false;
        service.defaultMessage = this.defaultMessage;
    }
    ngAfterViewChecked() {
        const container = document.querySelector('.main-loading');
        if (container != null && !this.loaded) {
            this.service.setup(container);
            this.loaded = true;
        }
    }
};
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
GlSharedComponentModalLoadingComponent.ctorParameters = () => [
    { type: GlSharedComponentModalLoadingService }
];
__decorate([
    ViewChild('mainLoading', { read: ElementRef, static: true })
], GlSharedComponentModalLoadingComponent.prototype, "mainLoading", void 0);
__decorate([
    Input()
], GlSharedComponentModalLoadingComponent.prototype, "defaultMessage", void 0);
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
export { GlSharedComponentModalLoadingComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1sb2FkaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsibmc6L2dsLW5nLWZyb250ZW5kL2xpYi9zaGFyZWQvY29tcG9uZW50L21vZGFsL2xvYWRpbmcvZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1sb2FkaW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFvQixTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUYsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sNkNBQTZDLENBQUMsbkdBQW5HLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBT25HLElBQWE7Q0FBc0MsR0FBbkQsTUFBYTs7SUFBc0MsT0FPakQsWUFBbUI7Q0FBNkMsWUFBN0MsWUFBTyxHQUFQLE9BQU8sQ0FBc0MsU0FGaEUsV0FBTSxHQUFHLEtBQUssQ0FBQyxTQUdiLE9BQU8sQ0FBQztRQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUMvQyxDQUFDLEtBRUQ7aUJBQWtCLGFBQ2hCLE1BQU07S0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUM7TUFBZSxDQUFtQixDQUFDLFNBRTVFLElBQUksU0FBUztFQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7TUFDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7RUFBUyxDQUFDLENBQUMsYUFDOUIsSUFBSSxDQUFDO0NBQU0sR0FBRyxJQUFJLENBQUMsVUFDcEIsS0FDSCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FBbEJILElBQWEsc0NBQXNDLEdBQW5ELE1BQWEsc0NBQXNDO0FBQUcsSUFPcEQsWUFBbUIsT0FBNkM7QUFDbEUsUUFEcUIsWUFBTyxHQUFQLE9BQU8sQ0FBc0M7QUFBQyxRQUZqRSxXQUFNLEdBQUcsS0FBSyxDQUFDO0FBQ2pCLFFBRUksT0FBTyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO0FBQ2pELElBQUUsQ0FBQztBQUNILElBQ0Usa0JBQWtCO0FBQUssUUFDckIsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQW1CLENBQUM7QUFDaEYsUUFDSSxJQUFJLFNBQVMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQzNDLFlBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDcEMsWUFBTSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzs7QUFFekIsSUFBRSxDQUFDO0NBQ0YsQ0FBQSxGQUFELENBQUM7NEVBWjZCLG9DQUFvQyxNQU5GLGlCQUE3RCxTQUFTLENBQUMsYUFBYSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7dUNBQXlDLEVBRTdGLGlCQUFSLEtBQUssRUFBRSwrRUFBd0IsRUFIckIsc0NBQXNDLG9CQUxsRCxTQUFTLENBQUMsVUFDVCxRQUFRLEVBQUU7UUFBbUMsVUFDN0M7Ozs7MlBBQWlFOzs7OztzekNBRWxFLENBQUMsSUFDVyxzQ0FBc0MsQ0FtQmxELFdBbkJZLHNDQUFzQyx1aEJBbUJsRDtBQUNEO0FBQWdFLFlBYmxDLG9DQUFvQztBQUFHO0FBTkw7QUFBYSxJQUExRSxTQUFTLENBQUMsYUFBYSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7QUFBQywyRUFBd0M7QUFFN0Y7QUFBYSxJQUFyQixLQUFLLEVBQUU7QUFBQyw4RUFBdUI7QUFIckIsc0NBQXNDLG9CQUxsRCxTQUFTLENBQUMsVUFDVCxRQUFRLEVBQUU7O0NBQW1DLFVBQzdDOzsyVkFBaUU7c2xEQUVsRSxDQUFDLElBQ1csc0NBQXNDLENBbUJsRDs7Ozs7OztvQkFDRDs7QUE1QkEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0NoZWNrZWQsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR2xTaGFyZWRDb21wb25lbnRNb2RhbExvYWRpbmdTZXJ2aWNlIH0gZnJvbSAnLi9nbC1zaGFyZWQtY29tcG9uZW50LW1vZGFsLWxvYWRpbmcuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtbW9kYWwtbG9hZGluZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LW1vZGFsLWxvYWRpbmcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nbC1zaGFyZWQtY29tcG9uZW50LW1vZGFsLWxvYWRpbmcuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudE1vZGFsTG9hZGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0NoZWNrZWQge1xuICBAVmlld0NoaWxkKCdtYWluTG9hZGluZycsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiB0cnVlIH0pIG1haW5Mb2FkaW5nOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcblxuICBASW5wdXQoKSBkZWZhdWx0TWVzc2FnZTogc3RyaW5nO1xuXG4gIGxvYWRlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzZXJ2aWNlOiBHbFNoYXJlZENvbXBvbmVudE1vZGFsTG9hZGluZ1NlcnZpY2UpIHtcbiAgICBzZXJ2aWNlLmRlZmF1bHRNZXNzYWdlID0gdGhpcy5kZWZhdWx0TWVzc2FnZTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1sb2FkaW5nJykgYXMgSFRNTERpdkVsZW1lbnQ7XG5cbiAgICBpZiAoY29udGFpbmVyICE9IG51bGwgJiYgIXRoaXMubG9hZGVkKSB7XG4gICAgICB0aGlzLnNlcnZpY2Uuc2V0dXAoY29udGFpbmVyKTtcbiAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==