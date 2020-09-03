import { __decorate } from "tslib";
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GlSharedComponentFilterService } from './gl-shared-component-filter.service';
var GlSharedComponentFilterComponent = /** @class */ (function () {
    function GlSharedComponentFilterComponent(router, service) {
        this.router = router;
        this.service = service;
        this.subtitle = 'Filter';
        this.type = '';
        this.closeButton = '../assets/img/icon/menu/close.svg';
        this.partialResultDescription = 'Partial results with these filters:';
        this.itemSingularDescription = 'item';
        this.itemPluralDescription = 'items';
        this.applyButtonDescription = 'Apply filter';
        this.clearButtonDescription = 'Clear filter';
        this.buttonClass = 'light-translucid';
        this.isIE = false;
        this.applyFilter$ = new EventEmitter();
        this.clearFilter$ = new EventEmitter();
        service.applyPartialResult = this.applyPartialResult;
    }
    GlSharedComponentFilterComponent.prototype.ngAfterViewInit = function () {
        this.service.initialize(this.container.nativeElement, this.background.nativeElement, this.menuNavContainer.nativeElement, this.router);
    };
    GlSharedComponentFilterComponent.prototype.onApply = function () {
        this.applyFilter$.emit();
    };
    GlSharedComponentFilterComponent.prototype.onClear = function () {
        this.clearFilter$.emit();
    };
    GlSharedComponentFilterComponent.ctorParameters = function () { return [
        { type: Router },
        { type: GlSharedComponentFilterService }
    ]; };
    __decorate([
        ViewChild('container', { static: true, read: ElementRef })
    ], GlSharedComponentFilterComponent.prototype, "container", void 0);
    __decorate([
        ViewChild('background', { static: true, read: ElementRef })
    ], GlSharedComponentFilterComponent.prototype, "background", void 0);
    __decorate([
        ViewChild('menuNavContainer')
    ], GlSharedComponentFilterComponent.prototype, "menuNavContainer", void 0);
    __decorate([
        Input()
    ], GlSharedComponentFilterComponent.prototype, "title", void 0);
    __decorate([
        Input()
    ], GlSharedComponentFilterComponent.prototype, "subtitle", void 0);
    __decorate([
        Input()
    ], GlSharedComponentFilterComponent.prototype, "type", void 0);
    __decorate([
        Input()
    ], GlSharedComponentFilterComponent.prototype, "closeButton", void 0);
    __decorate([
        Input()
    ], GlSharedComponentFilterComponent.prototype, "partialResult", void 0);
    __decorate([
        Input()
    ], GlSharedComponentFilterComponent.prototype, "partialResultDescription", void 0);
    __decorate([
        Input()
    ], GlSharedComponentFilterComponent.prototype, "itemSingularDescription", void 0);
    __decorate([
        Input()
    ], GlSharedComponentFilterComponent.prototype, "itemPluralDescription", void 0);
    __decorate([
        Input()
    ], GlSharedComponentFilterComponent.prototype, "applyButtonDescription", void 0);
    __decorate([
        Input()
    ], GlSharedComponentFilterComponent.prototype, "clearButtonDescription", void 0);
    __decorate([
        Input()
    ], GlSharedComponentFilterComponent.prototype, "buttonClass", void 0);
    __decorate([
        Input()
    ], GlSharedComponentFilterComponent.prototype, "isIE", void 0);
    __decorate([
        Input()
    ], GlSharedComponentFilterComponent.prototype, "applyPartialResult", void 0);
    __decorate([
        Output()
    ], GlSharedComponentFilterComponent.prototype, "applyFilter$", void 0);
    __decorate([
        Output()
    ], GlSharedComponentFilterComponent.prototype, "clearFilter$", void 0);
    GlSharedComponentFilterComponent = __decorate([
        Component({
            selector: 'gl-shared-component-filter',
            template: "<gl-shared-component-menu-background\n  #background\n  (click)=\"service.backgroundClick($event)\"\n></gl-shared-component-menu-background>\n<div #container class=\"filter-container {{ type }}\">\n  <div class=\"header-filter-container\">\n    <div class=\"menu-header\">\n      <div class=\"menu-top-icons-container\">\n        <img id=\"close-menu-button\" (click)=\"service.close($event)\" [src]=\"closeButton\" class=\"menu-icons close-menu\" alt=\"Close menu button\">\n      </div>\n      <div class=\"menu-header-title\">\n        <h1 class=\"title\">{{ title }}</h1>\n        <h2 class=\"subtitle\">{{ subtitle }}</h2>\n      </div>\n    </div>\n  </div>\n  <nav class=\"menu-nav-container\" #menuNavContainer>\n    <div class=\"menu-content\">\n      <div class=\"input-container\" >\n        <ng-content></ng-content>\n      </div>\n    </div>\n  </nav>\n  <div class=\"bottom-container\">\n    <span\n      *ngIf=\"partialResult != null\"\n      class=\"partial-result-description\">{{ partialResultDescription }} {{ partialResult }} {{ partialResult > 1 ? itemPluralDescription : itemSingularDescription }}\n    </span>\n    <div class=\"buttons-container\">\n      <gl-shared-component-input-button-simple\n        value=\"apply\"\n        [class]=\"buttonClass\"\n        [innerValue]=\"applyButtonDescription\"\n        (click)=\"onApply()\"\n      ></gl-shared-component-input-button-simple>\n      <gl-shared-component-input-button-simple\n        value=\"clear\"\n        [class]=\"buttonClass\"\n        [innerValue]=\"clearButtonDescription\"\n        (click)=\"onClear()\"\n      ></gl-shared-component-input-button-simple>\n    </div>\n  </div>\n</div>\n",
            styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep .filter-container .menu-nav-container::-webkit-scrollbar:horizontal{height:.5em}:host::ng-deep .filter-container .menu-nav-container::-webkit-scrollbar{width:.5em}:host::ng-deep .filter-container .menu-nav-container::-webkit-scrollbar-button{background-color:#333437;display:none!important}:host::ng-deep .filter-container .menu-nav-container::-webkit-scrollbar-track-piece{background-color:#2c2c2f}:host::ng-deep .filter-container .menu-nav-container::-webkit-scrollbar-thumb{background-color:#64666c;border:1px solid #38393c}:host::ng-deep .filter-container{border-top:.3em solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5;border-bottom:2em solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5;display:flex;flex-direction:column;background:0 0/cover #1a1b1d;position:fixed;top:0;bottom:0;overflow:hidden;width:85vw;right:-110%;max-width:17em;min-width:17em;z-index:10000;transition:right .5s ease-in-out;flex-grow:1;height:100vh}:host::ng-deep .filter-container.translucid{background:rgba(255,255,255,.05);border-left:1px solid rgba(255,255,255,.05);border-top:.3em solid rgba(255,255,255,.1);border-image-source:none}:host::ng-deep .filter-container .a{display:block;min-height:3em}:host::ng-deep .filter-container .header-filter-container .menu-header{display:flex;flex-direction:column;margin:.5em 1em 1em .5em}:host::ng-deep .filter-container .header-filter-container .menu-header .menu-top-icons-container{display:flex;margin:0 0 1.5em}:host::ng-deep .filter-container .header-filter-container .menu-header .menu-top-icons-container .close-menu,:host::ng-deep .filter-container .header-filter-container .menu-header .menu-top-icons-container .settings-menu{cursor:pointer;height:1.5em;width:1.5em}:host::ng-deep .filter-container .header-filter-container .menu-header .menu-top-icons-container .close-menu:active,:host::ng-deep .filter-container .header-filter-container .menu-header .menu-top-icons-container .close-menu:hover,:host::ng-deep .filter-container .header-filter-container .menu-header .menu-top-icons-container .settings-menu:active,:host::ng-deep .filter-container .header-filter-container .menu-header .menu-top-icons-container .settings-menu:hover{opacity:1;-webkit-animation:.4s ease-in-out forwards increase-decrease;animation:.4s ease-in-out forwards increase-decrease}:host::ng-deep .filter-container .header-filter-container .menu-header .menu-top-icons-container .close-menu{margin:0 .2em 0 0}:host::ng-deep .filter-container .header-filter-container .menu-header .menu-header-title .subtitle,:host::ng-deep .filter-container .header-filter-container .menu-header .menu-header-title .title{text-transform:uppercase;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#fff;margin:0}:host::ng-deep .filter-container .header-filter-container .menu-header .menu-header-title .title{font-family:Montserrat,sans-serif;font-weight:700;font-size:.9em;display:none}:host::ng-deep .filter-container .header-filter-container .menu-header .menu-header-title .subtitle{font-family:Montserrat,sans-serif;font-weight:100;font-size:1.5em}:host::ng-deep .filter-container .bottom-container{display:flex;flex-direction:column;margin:1em 0 .4em}:host::ng-deep .filter-container .bottom-container .partial-result-description{font-family:Montserrat,sans-serif;font-weight:700;color:#d24077;font-size:.5em;padding:0 0 0 .5em;text-align:center}:host::ng-deep .filter-container .bottom-container .buttons-container{display:flex;padding:.6em 0 .3em .3em;font-size:.8em}:host::ng-deep .filter-container .bottom-container .buttons-container .default-button:nth-child(1){margin:0 .5em 0 0}:host::ng-deep .filter-container .bottom-container .buttons-container .default-button:nth-child(2){margin:0 0 0 .5em}:host::ng-deep .filter-container .menu-nav-container{scrollbar-face-color:#333437!important;scrollbar-shadow-color:#38393c!important;scrollbar-track-color:#2c2c2f!important;scrollbar-arrow-color:#64666c!important;overflow:auto;max-height:100%;flex-grow:1;display:flex;overflow-x:hidden;border-top:0 solid transparent!important;position:relative;border-bottom:0 solid transparent!important}:host::ng-deep .filter-container .menu-nav-container::before{width:100%;height:1px;left:0;top:1px;margin-top:-1px;content:\"\";position:absolute;background:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%)}:host::ng-deep .filter-container .menu-nav-container::after{width:100%;height:1px;left:0;margin-bottom:-1px;content:\"\";position:absolute;background:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);bottom:-10.5%}:host::ng-deep .filter-container .menu-nav-container .menu-content{display:flex;flex-direction:column;flex-grow:1;position:relative}:host::ng-deep .filter-container .menu-nav-container .menu-content .menu-title{background:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);margin:0 0 .14em;position:relative;display:flex;align-items:center;border-left:.2em solid #fff}:host::ng-deep .filter-container .menu-nav-container .menu-content .menu-title .material-icons{color:rgba(255,255,255,.6);font-size:1.2em;padding:.3em;margin:0 .5em 0 .3em}:host::ng-deep .filter-container .menu-nav-container .menu-content .menu-title .material-icons.expand{position:absolute;color:#fff;top:.5em;right:.3em}:host::ng-deep .filter-container .menu-nav-container .menu-content .menu-title .menu-icons{padding:.2em .5em;height:1.5em;width:1.5em}:host::ng-deep .filter-container .menu-nav-container .menu-content .menu-title a{text-decoration:none;font-size:.6em;font-family:Montserrat,sans-serif;font-weight:300;text-transform:uppercase;color:#fff;padding:1.5em .7em;flex-grow:1}:host::ng-deep .filter-container .menu-nav-container .menu-content .input-container gl-shared-component-filter-container .type-container{background-color:rgba(255,255,255,.03);border-bottom:1px solid rgba(255,255,255,.03)}:host::ng-deep .filter-container .menu-nav-container .menu-content .input-container .options-container{display:flex}:host::ng-deep .filter-container .menu-nav-container .menu-content .input-container gl-shared-component-input-autocomplete-simple .input-container{margin:.2em 0 0;height:1.5em}:host::ng-deep .show-admin-settings{visibility:visible!important}:host::ng-deep .filter-container .menu-active{right:0}:host::ng-deep .menu-active{right:0}:host::ng-deep .menu-background{opacity:0;visibility:collapse;z-index:-1000;left:1000px}:host::ng-deep .visible-background{width:100%;height:100%;background:rgba(0,0,0,.6);opacity:1;visibility:visible;position:fixed;top:0;left:0;z-index:999;transition:1s ease-in-out}:host::ng-deep .hide-subtitle{opacity:0;visibility:collapse;margin:0;padding:0;transition:.25s ease-in-out}:host::ng-deep .show-subtitle{opacity:1;visibility:visible;transition:.25s ease-in-out .4s}:host::ng-deep .hide-subtitle-container{-webkit-animation:.4s ease-in-out forwards hide-subtitle;animation:.4s ease-in-out forwards hide-subtitle}:host::ng-deep .show-subtitle-container{-webkit-animation:.4s ease-in-out forwards show-subtitle;animation:.4s ease-in-out forwards show-subtitle}:host::ng-deep .collapsed-menu .expand{transform:rotate(0);transition:.4s ease-in-out}:host::ng-deep .collapsed-menu .menu-icons{-webkit-animation:.4s ease-in-out forwards decrease-increase;animation:.4s ease-in-out forwards decrease-increase}:host::ng-deep .expanded-menu .expand{transform:rotate(-180deg);transition:.4s ease-in-out}:host::ng-deep .expanded-menu .menu-icons{-webkit-animation:.4s ease-in-out forwards increase-decrease;animation:.4s ease-in-out forwards increase-decrease}"]
        })
    ], GlSharedComponentFilterComponent);
    return GlSharedComponentFilterComponent;
}());
export { GlSharedComponentFilterComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1maWx0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2wtbmctZnJvbnRlbmQvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL2NvbXBvbmVudC9maWx0ZXIvZ2wtc2hhcmVkLWNvbXBvbmVudC1maWx0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdHLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQU90RjtJQXVCRSwwQ0FDUyxNQUFjLEVBQ2QsT0FBdUM7UUFEdkMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFlBQU8sR0FBUCxPQUFPLENBQWdDO1FBbkJ2QyxhQUFRLEdBQVcsUUFBUSxDQUFDO1FBQzVCLFNBQUksR0FBc0IsRUFBRSxDQUFDO1FBQzdCLGdCQUFXLEdBQVcsbUNBQW1DLENBQUM7UUFFMUQsNkJBQXdCLEdBQVcscUNBQXFDLENBQUM7UUFDekUsNEJBQXVCLEdBQVcsTUFBTSxDQUFDO1FBQ3pDLDBCQUFxQixHQUFXLE9BQU8sQ0FBQztRQUN4QywyQkFBc0IsR0FBVyxjQUFjLENBQUM7UUFDaEQsMkJBQXNCLEdBQVcsY0FBYyxDQUFDO1FBQ2hELGdCQUFXLEdBQTRCLGtCQUFrQixDQUFDO1FBRTFELFNBQUksR0FBWSxLQUFLLENBQUM7UUFHckIsaUJBQVksR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN0RCxpQkFBWSxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBTTlELE9BQU8sQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDdkQsQ0FBQztJQUVELDBEQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FDckIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUM3QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUNuQyxJQUFJLENBQUMsTUFBTSxDQUNaLENBQUM7SUFDSixDQUFDO0lBRUQsa0RBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELGtEQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7O2dCQXJCZ0IsTUFBTTtnQkFDTCw4QkFBOEI7O0lBeEJZO1FBQTNELFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQzt1RUFBdUM7SUFDckM7UUFBNUQsU0FBUyxDQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDO3dFQUF3QztJQUNyRTtRQUE5QixTQUFTLENBQUMsa0JBQWtCLENBQUM7OEVBQThDO0lBRW5FO1FBQVIsS0FBSyxFQUFFO21FQUFlO0lBQ2Q7UUFBUixLQUFLLEVBQUU7c0VBQTZCO0lBQzVCO1FBQVIsS0FBSyxFQUFFO2tFQUE4QjtJQUM3QjtRQUFSLEtBQUssRUFBRTt5RUFBMkQ7SUFDMUQ7UUFBUixLQUFLLEVBQUU7MkVBQXVCO0lBQ3RCO1FBQVIsS0FBSyxFQUFFO3NGQUEwRTtJQUN6RTtRQUFSLEtBQUssRUFBRTtxRkFBMEM7SUFDekM7UUFBUixLQUFLLEVBQUU7bUZBQXlDO0lBQ3hDO1FBQVIsS0FBSyxFQUFFO29GQUFpRDtJQUNoRDtRQUFSLEtBQUssRUFBRTtvRkFBaUQ7SUFDaEQ7UUFBUixLQUFLLEVBQUU7eUVBQTJEO0lBRTFEO1FBQVIsS0FBSyxFQUFFO2tFQUF1QjtJQUN0QjtRQUFSLEtBQUssRUFBRTtnRkFBeUM7SUFFdkM7UUFBVCxNQUFNLEVBQUU7MEVBQXVEO0lBQ3REO1FBQVQsTUFBTSxFQUFFOzBFQUF1RDtJQXJCckQsZ0NBQWdDO1FBTDVDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSw0QkFBNEI7WUFDdEMsd3BEQUEwRDs7U0FFM0QsQ0FBQztPQUNXLGdDQUFnQyxDQThDNUM7SUFBRCx1Q0FBQztDQUFBLEFBOUNELElBOENDO1NBOUNZLGdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBHbFNoYXJlZENvbXBvbmVudEZpbHRlclNlcnZpY2UgfSBmcm9tICcuL2dsLXNoYXJlZC1jb21wb25lbnQtZmlsdGVyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LWZpbHRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWZpbHRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtZmlsdGVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRGaWx0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyBzdGF0aWM6IHRydWUsIHJlYWQ6IEVsZW1lbnRSZWYgfSkgY29udGFpbmVyOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcbiAgQFZpZXdDaGlsZCgnYmFja2dyb3VuZCcsIHsgc3RhdGljOiB0cnVlLCByZWFkOiBFbGVtZW50UmVmIH0pIGJhY2tncm91bmQ6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBAVmlld0NoaWxkKCdtZW51TmF2Q29udGFpbmVyJykgbWVudU5hdkNvbnRhaW5lcjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG5cbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgc3VidGl0bGU6IHN0cmluZyA9ICdGaWx0ZXInO1xuICBASW5wdXQoKSB0eXBlOiAndHJhbnNsdWNpZCcgfCAnJyA9ICcnO1xuICBASW5wdXQoKSBjbG9zZUJ1dHRvbjogc3RyaW5nID0gJy4uL2Fzc2V0cy9pbWcvaWNvbi9tZW51L2Nsb3NlLnN2Zyc7XG4gIEBJbnB1dCgpIHBhcnRpYWxSZXN1bHQ6IG51bWJlcjtcbiAgQElucHV0KCkgcGFydGlhbFJlc3VsdERlc2NyaXB0aW9uOiBzdHJpbmcgPSAnUGFydGlhbCByZXN1bHRzIHdpdGggdGhlc2UgZmlsdGVyczonO1xuICBASW5wdXQoKSBpdGVtU2luZ3VsYXJEZXNjcmlwdGlvbjogc3RyaW5nID0gJ2l0ZW0nO1xuICBASW5wdXQoKSBpdGVtUGx1cmFsRGVzY3JpcHRpb246IHN0cmluZyA9ICdpdGVtcyc7XG4gIEBJbnB1dCgpIGFwcGx5QnV0dG9uRGVzY3JpcHRpb246IHN0cmluZyA9ICdBcHBseSBmaWx0ZXInO1xuICBASW5wdXQoKSBjbGVhckJ1dHRvbkRlc2NyaXB0aW9uOiBzdHJpbmcgPSAnQ2xlYXIgZmlsdGVyJztcbiAgQElucHV0KCkgYnV0dG9uQ2xhc3M6ICdsaWdodC10cmFuc2x1Y2lkJyB8ICcnID0gJ2xpZ2h0LXRyYW5zbHVjaWQnO1xuXG4gIEBJbnB1dCgpIGlzSUU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgYXBwbHlQYXJ0aWFsUmVzdWx0OiAoKSA9PiBQcm9taXNlPHZvaWQ+O1xuXG4gIEBPdXRwdXQoKSBhcHBseUZpbHRlciQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNsZWFyRmlsdGVyJDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcixcbiAgICBwdWJsaWMgc2VydmljZTogR2xTaGFyZWRDb21wb25lbnRGaWx0ZXJTZXJ2aWNlXG4gICkge1xuICAgIHNlcnZpY2UuYXBwbHlQYXJ0aWFsUmVzdWx0ID0gdGhpcy5hcHBseVBhcnRpYWxSZXN1bHQ7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXJ2aWNlLmluaXRpYWxpemUoXG4gICAgICB0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LFxuICAgICAgdGhpcy5iYWNrZ3JvdW5kLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLm1lbnVOYXZDb250YWluZXIubmF0aXZlRWxlbWVudCxcbiAgICAgIHRoaXMucm91dGVyXG4gICAgKTtcbiAgfVxuXG4gIG9uQXBwbHkoKSB7XG4gICAgdGhpcy5hcHBseUZpbHRlciQuZW1pdCgpO1xuICB9XG5cbiAgb25DbGVhcigpIHtcbiAgICB0aGlzLmNsZWFyRmlsdGVyJC5lbWl0KCk7XG4gIH1cbn1cbiJdfQ==