import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
var GlSharedComponentButtonMenuSimpleComponent = /** @class */ (function () {
    function GlSharedComponentButtonMenuSimpleComponent() {
        this.disabled = false;
    }
    __decorate([
        Input()
    ], GlSharedComponentButtonMenuSimpleComponent.prototype, "disabled", void 0);
    __decorate([
        Input()
    ], GlSharedComponentButtonMenuSimpleComponent.prototype, "src", void 0);
    __decorate([
        Input()
    ], GlSharedComponentButtonMenuSimpleComponent.prototype, "id", void 0);
    __decorate([
        Input()
    ], GlSharedComponentButtonMenuSimpleComponent.prototype, "alt", void 0);
    __decorate([
        Input()
    ], GlSharedComponentButtonMenuSimpleComponent.prototype, "callback", void 0);
    GlSharedComponentButtonMenuSimpleComponent = __decorate([
        Component({
            selector: 'gl-shared-component-button-menu-simple',
            template: "<img\n  [id]=\"id\"\n  class=\"menu-buttons\"\n  [src]=\"src\"\n  [alt]=\"alt\"\n  (click)=\"callback\">\n",
            styles: [":host{height:1.45em}:host .menu-buttons{height:1.5em;width:1.5em;margin:0 0 0 .1em;cursor:pointer}:host .menu-buttons:hover{transform:scale(1.01);opacity:1;transition:.1s ease-in-out}:host .menu-buttons:not(hover){transform:scale(1);opacity:.9;transition:.2s ease-in-out}"]
        })
    ], GlSharedComponentButtonMenuSimpleComponent);
    return GlSharedComponentButtonMenuSimpleComponent;
}());
export { GlSharedComponentButtonMenuSimpleComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24tbWVudS1zaW1wbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2wtbmctZnJvbnRlbmQvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL2NvbXBvbmVudC9idXR0b24vbWVudS9zaW1wbGUvZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24tbWVudS1zaW1wbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU9qRDtJQU9FO1FBTlMsYUFBUSxHQUFHLEtBQUssQ0FBQztJQU1WLENBQUM7SUFOUjtRQUFSLEtBQUssRUFBRTtnRkFBa0I7SUFDakI7UUFBUixLQUFLLEVBQUU7MkVBQWE7SUFDWjtRQUFSLEtBQUssRUFBRTswRUFBWTtJQUNYO1FBQVIsS0FBSyxFQUFFOzJFQUFhO0lBQ1o7UUFBUixLQUFLLEVBQUU7Z0ZBQW9CO0lBTGpCLDBDQUEwQztRQUx0RCxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsd0NBQXdDO1lBQ2xELHNIQUFzRTs7U0FFdkUsQ0FBQztPQUNXLDBDQUEwQyxDQVF0RDtJQUFELGlEQUFDO0NBQUEsQUFSRCxJQVFDO1NBUlksMENBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LWJ1dHRvbi1tZW51LXNpbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWJ1dHRvbi1tZW51LXNpbXBsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtYnV0dG9uLW1lbnUtc2ltcGxlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRCdXR0b25NZW51U2ltcGxlQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgc3JjOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGFsdDogc3RyaW5nO1xuICBASW5wdXQoKSBjYWxsYmFjazogKCkgPT4ge307XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiJdfQ==