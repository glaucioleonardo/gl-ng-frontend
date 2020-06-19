import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
var GlSharedComponentButtonImageSimpleComponent = /** @class */ (function () {
    function GlSharedComponentButtonImageSimpleComponent() {
    }
    __decorate([
        Input()
    ], GlSharedComponentButtonImageSimpleComponent.prototype, "id", void 0);
    __decorate([
        Input()
    ], GlSharedComponentButtonImageSimpleComponent.prototype, "alt", void 0);
    __decorate([
        Input()
    ], GlSharedComponentButtonImageSimpleComponent.prototype, "src", void 0);
    __decorate([
        Input()
    ], GlSharedComponentButtonImageSimpleComponent.prototype, "callback", void 0);
    GlSharedComponentButtonImageSimpleComponent = __decorate([
        Component({
            selector: 'gl-shared-component-button-image-simple',
            template: "<img\n  class=\"button\"\n  [id]=\"id\"\n  [src]=\"src\"\n  [alt]=\"alt\"\n  (click)=\"callback($event)\">\n",
            styles: [":host::ng-deep{display:flex;align-items:center}:host::ng-deep .button{width:1em;height:1em}:host::ng-deep .button:not(hover){opacity:.5;transform:scale(1);transition:.2s ease-in-out}:host::ng-deep .button:hover{opacity:1;transform:scale(1.1);transition:.2s ease-in-out}"]
        })
    ], GlSharedComponentButtonImageSimpleComponent);
    return GlSharedComponentButtonImageSimpleComponent;
}());
export { GlSharedComponentButtonImageSimpleComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24taW1hZ2Utc2ltcGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dsLW5nLWZyb250ZW5kLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9jb21wb25lbnQvYnV0dG9uL2ltYWdlL3NpbXBsZS9nbC1zaGFyZWQtY29tcG9uZW50LWJ1dHRvbi1pbWFnZS1zaW1wbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU9qRDtJQU1FO0lBQWdCLENBQUM7SUFMUjtRQUFSLEtBQUssRUFBRTsyRUFBSTtJQUNIO1FBQVIsS0FBSyxFQUFFOzRFQUFLO0lBQ0o7UUFBUixLQUFLLEVBQUU7NEVBQUs7SUFDSjtRQUFSLEtBQUssRUFBRTtpRkFBVTtJQUpQLDJDQUEyQztRQUx2RCxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUseUNBQXlDO1lBQ25ELHdIQUF1RTs7U0FFeEUsQ0FBQztPQUNXLDJDQUEyQyxDQU92RDtJQUFELGtEQUFDO0NBQUEsQUFQRCxJQU9DO1NBUFksMkNBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LWJ1dHRvbi1pbWFnZS1zaW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24taW1hZ2Utc2ltcGxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24taW1hZ2Utc2ltcGxlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRCdXR0b25JbWFnZVNpbXBsZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGlkO1xuICBASW5wdXQoKSBhbHQ7XG4gIEBJbnB1dCgpIHNyYztcbiAgQElucHV0KCkgY2FsbGJhY2s7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiJdfQ==