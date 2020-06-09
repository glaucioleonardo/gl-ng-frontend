import { __decorate } from "tslib";
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { GlSharedComponentModalLoadingService } from './gl-shared-component-modal-loading.service';
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
    GlSharedComponentModalLoadingComponent = __decorate([
        Component({
            selector: 'gl-shared-component-modal-loading',
            template: "<div #mainLoading class=\"main-loading\" *ngIf=\"service._showLoading\">\n  <div class=\"loading-container\">\n    <div class=\"lds-facebook\"><div></div><div></div><div></div></div>\n  </div>\n  <div class=\"status-container\">\n    <div class=\"user-content\">\n      <ng-content></ng-content>\n    </div>\n    <h2 class=\"subtitle loading-status\">{{ service._loadingStatus }}</h2>\n  </div>\n</div>\n",
            styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep .main-loading{position:fixed;width:100vw;height:100vh;z-index:999999999;top:0;left:0;background:rgba(0,0,0,.85);display:flex;justify-content:center;flex-direction:column}:host::ng-deep .main-loading .status-container{display:flex;flex-direction:column;text-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:.5}:host::ng-deep .main-loading .status-container .user-content{flex-grow:1}:host::ng-deep .main-loading .status-container .loading-status{font-family:Montserrat,sans-serif;font-weight:300;color:#fff;font-size:.5em;width:100%;margin:1em 0 0;background:unset;white-space:pre-line}.loading-container{display:flex;justify-content:center;align-items:center}.hide-loading{opacity:0;visibility:collapse;transition:1s ease-in-out,visibility 1s ease-in-out}.lds-facebook{display:inline-block;position:relative;width:64px;height:64px}.lds-facebook div{display:inline-block;position:absolute;left:6px;width:13px;background:#fff;-webkit-animation:1.2s cubic-bezier(0,.5,.5,1) infinite lds-facebook;animation:1.2s cubic-bezier(0,.5,.5,1) infinite lds-facebook}.lds-facebook div:nth-child(1){left:6px;-webkit-animation-delay:-.24s;animation-delay:-.24s}.lds-facebook div:nth-child(2){left:26px;-webkit-animation-delay:-.12s;animation-delay:-.12s}.lds-facebook div:nth-child(3){left:45px;-webkit-animation-delay:0s;animation-delay:0s}@-webkit-keyframes lds-facebook{0%{top:6px;height:51px}100%,50%{top:19px;height:26px}}@keyframes lds-facebook{0%{top:6px;height:51px}100%,50%{top:19px;height:26px}}"]
        })
    ], GlSharedComponentModalLoadingComponent);
    return GlSharedComponentModalLoadingComponent;
}());
export { GlSharedComponentModalLoadingComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1sb2FkaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dsLW5nLWZyb250ZW5kLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9jb21wb25lbnQvbW9kYWwvbG9hZGluZy9nbC1zaGFyZWQtY29tcG9uZW50LW1vZGFsLWxvYWRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQW9CLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRixPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQU9uRztJQU9FLGdEQUFtQixPQUE2QztRQUE3QyxZQUFPLEdBQVAsT0FBTyxDQUFzQztRQUZoRSxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBR2IsT0FBTyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQy9DLENBQUM7SUFFRCxtRUFBa0IsR0FBbEI7UUFDRSxJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBbUIsQ0FBQztRQUU1RSxJQUFJLFNBQVMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQzs7Z0JBWDJCLG9DQUFvQzs7SUFORjtRQUE3RCxTQUFTLENBQUMsYUFBYSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7K0VBQXlDO0lBRTdGO1FBQVIsS0FBSyxFQUFFO2tGQUF3QjtJQUhyQixzQ0FBc0M7UUFMbEQsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG1DQUFtQztZQUM3QyxnYUFBaUU7O1NBRWxFLENBQUM7T0FDVyxzQ0FBc0MsQ0FtQmxEO0lBQUQsNkNBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQW5CWSxzQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdDaGVja2VkLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdsU2hhcmVkQ29tcG9uZW50TW9kYWxMb2FkaW5nU2VydmljZSB9IGZyb20gJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1sb2FkaW5nLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LW1vZGFsLWxvYWRpbmcnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1sb2FkaW5nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1sb2FkaW5nLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRNb2RhbExvYWRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdDaGVja2VkIHtcbiAgQFZpZXdDaGlsZCgnbWFpbkxvYWRpbmcnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZSB9KSBtYWluTG9hZGluZzogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG5cbiAgQElucHV0KCkgZGVmYXVsdE1lc3NhZ2U6IHN0cmluZztcblxuICBsb2FkZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2VydmljZTogR2xTaGFyZWRDb21wb25lbnRNb2RhbExvYWRpbmdTZXJ2aWNlKSB7XG4gICAgc2VydmljZS5kZWZhdWx0TWVzc2FnZSA9IHRoaXMuZGVmYXVsdE1lc3NhZ2U7XG4gIH1cblxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKTogdm9pZCB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tbG9hZGluZycpIGFzIEhUTUxEaXZFbGVtZW50O1xuXG4gICAgaWYgKGNvbnRhaW5lciAhPSBudWxsICYmICF0aGlzLmxvYWRlZCkge1xuICAgICAgdGhpcy5zZXJ2aWNlLnNldHVwKGNvbnRhaW5lcik7XG4gICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XG4gICAgfVxuICB9XG59XG4iXX0=