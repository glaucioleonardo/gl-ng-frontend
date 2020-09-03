import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { GlSharedComponentModalLoadingService } from './gl-shared-component-modal-loading.service';
export class GlSharedComponentModalLoadingComponent {
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
}
GlSharedComponentModalLoadingComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-modal-loading',
                template: "<div #mainLoading class=\"main-loading\" *ngIf=\"service._showLoading\">\n  <div class=\"loading-container\">\n    <div class=\"lds-facebook\"><div></div><div></div><div></div></div>\n  </div>\n  <div class=\"status-container\">\n    <div class=\"user-content\">\n      <ng-content></ng-content>\n    </div>\n    <h2 class=\"subtitle loading-status\">{{ service._loadingStatus }}</h2>\n  </div>\n</div>\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep .main-loading{background:rgba(0,0,0,.85);display:flex;flex-direction:column;height:100vh;justify-content:center;left:0;position:fixed;top:0;width:100vw;z-index:999999999}:host::ng-deep .main-loading .status-container{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;align-items:center;display:flex;flex-direction:column;opacity:.5;text-align:center;user-select:none}:host::ng-deep .main-loading .status-container .user-content{flex-grow:1}:host::ng-deep .main-loading .status-container .loading-status{background:unset;color:#fff;font-family:Montserrat,sans-serif;font-size:.5em;font-weight:300;margin:1em 0 0;white-space:pre-line;width:100%}.loading-container{align-items:center;display:flex;justify-content:center}.hide-loading{opacity:0;transition:all 1s ease-in-out,visibility 1s ease-in-out;visibility:collapse}.lds-facebook{display:inline-block;height:64px;position:relative;width:64px}.lds-facebook div{-webkit-animation:lds-facebook 1.2s cubic-bezier(0,.5,.5,1) infinite;animation:lds-facebook 1.2s cubic-bezier(0,.5,.5,1) infinite;background:#fff;display:inline-block;left:6px;position:absolute;width:13px}.lds-facebook div:first-child{-webkit-animation-delay:-.24s;animation-delay:-.24s;left:6px}.lds-facebook div:nth-child(2){-webkit-animation-delay:-.12s;animation-delay:-.12s;left:26px}.lds-facebook div:nth-child(3){-webkit-animation-delay:0s;animation-delay:0s;left:45px}@-webkit-keyframes lds-facebook{0%{height:51px;top:6px}50%,to{height:26px;top:19px}}@keyframes lds-facebook{0%{height:51px;top:6px}50%,to{height:26px;top:19px}}"]
            },] }
];
GlSharedComponentModalLoadingComponent.ctorParameters = () => [
    { type: GlSharedComponentModalLoadingService }
];
GlSharedComponentModalLoadingComponent.propDecorators = {
    mainLoading: [{ type: ViewChild, args: ['mainLoading', { read: ElementRef, static: true },] }],
    defaultMessage: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1sb2FkaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2dsLW5nLWZyb250ZW5kL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudC9tb2RhbC9sb2FkaW5nL2dsLXNoYXJlZC1jb21wb25lbnQtbW9kYWwtbG9hZGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFvQixTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUYsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFPbkcsTUFBTSxPQUFPLHNDQUFzQztJQU9qRCxZQUFtQixPQUE2QztRQUE3QyxZQUFPLEdBQVAsT0FBTyxDQUFzQztRQUZoRSxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBR2IsT0FBTyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQy9DLENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQW1CLENBQUM7UUFFNUUsSUFBSSxTQUFTLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUNwQjtJQUNILENBQUM7OztZQXZCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1DQUFtQztnQkFDN0MsZ2FBQWlFOzthQUVsRTs7O1lBTlEsb0NBQW9DOzs7MEJBUTFDLFNBQVMsU0FBQyxhQUFhLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7NkJBRTNELEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdDaGVja2VkLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdsU2hhcmVkQ29tcG9uZW50TW9kYWxMb2FkaW5nU2VydmljZSB9IGZyb20gJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1sb2FkaW5nLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LW1vZGFsLWxvYWRpbmcnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1sb2FkaW5nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1sb2FkaW5nLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRNb2RhbExvYWRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdDaGVja2VkIHtcbiAgQFZpZXdDaGlsZCgnbWFpbkxvYWRpbmcnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZSB9KSBtYWluTG9hZGluZzogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG5cbiAgQElucHV0KCkgZGVmYXVsdE1lc3NhZ2U6IHN0cmluZztcblxuICBsb2FkZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2VydmljZTogR2xTaGFyZWRDb21wb25lbnRNb2RhbExvYWRpbmdTZXJ2aWNlKSB7XG4gICAgc2VydmljZS5kZWZhdWx0TWVzc2FnZSA9IHRoaXMuZGVmYXVsdE1lc3NhZ2U7XG4gIH1cblxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKTogdm9pZCB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tbG9hZGluZycpIGFzIEhUTUxEaXZFbGVtZW50O1xuXG4gICAgaWYgKGNvbnRhaW5lciAhPSBudWxsICYmICF0aGlzLmxvYWRlZCkge1xuICAgICAgdGhpcy5zZXJ2aWNlLnNldHVwKGNvbnRhaW5lcik7XG4gICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XG4gICAgfVxuICB9XG59XG4iXX0=