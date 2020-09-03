import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
var GlSharedViewErrorMessageComponent = /** @class */ (function () {
    function GlSharedViewErrorMessageComponent() {
        this.logoHorizontalPosition = 'left';
        this.logoVerticalPosition = 'top';
        this.errorPosition = 'left';
        this.errorButtonAction$ = new EventEmitter();
        this.footerImageDescription = 'Image logo';
    }
    GlSharedViewErrorMessageComponent.prototype.ngAfterViewInit = function () {
        var mainContainer = this.mainContainer.nativeElement;
        var mainContainerParent = this.mainContainer.nativeElement.parentNode;
        mainContainer.style.backgroundImage = "url(" + this.background + ")";
        mainContainerParent.style.backgroundImage = "url(" + this.blurBackground + ")";
    };
    GlSharedViewErrorMessageComponent.prototype.errorButtonAction = function () {
        this.errorButtonAction$.emit();
    };
    __decorate([
        ViewChild('mainContainer')
    ], GlSharedViewErrorMessageComponent.prototype, "mainContainer", void 0);
    __decorate([
        Input()
    ], GlSharedViewErrorMessageComponent.prototype, "blurBackground", void 0);
    __decorate([
        Input()
    ], GlSharedViewErrorMessageComponent.prototype, "background", void 0);
    __decorate([
        Input()
    ], GlSharedViewErrorMessageComponent.prototype, "logoImageScr", void 0);
    __decorate([
        Input()
    ], GlSharedViewErrorMessageComponent.prototype, "logoImageAlt", void 0);
    __decorate([
        Input()
    ], GlSharedViewErrorMessageComponent.prototype, "logoHorizontalPosition", void 0);
    __decorate([
        Input()
    ], GlSharedViewErrorMessageComponent.prototype, "logoVerticalPosition", void 0);
    __decorate([
        Input()
    ], GlSharedViewErrorMessageComponent.prototype, "errorPosition", void 0);
    __decorate([
        Input()
    ], GlSharedViewErrorMessageComponent.prototype, "errorCode", void 0);
    __decorate([
        Input()
    ], GlSharedViewErrorMessageComponent.prototype, "errorMessage", void 0);
    __decorate([
        Input()
    ], GlSharedViewErrorMessageComponent.prototype, "errorButtonLabel", void 0);
    __decorate([
        Output()
    ], GlSharedViewErrorMessageComponent.prototype, "errorButtonAction$", void 0);
    __decorate([
        Input()
    ], GlSharedViewErrorMessageComponent.prototype, "footerMainDescription", void 0);
    __decorate([
        Input()
    ], GlSharedViewErrorMessageComponent.prototype, "footerShowContainer", void 0);
    __decorate([
        Input()
    ], GlSharedViewErrorMessageComponent.prototype, "footerDescription", void 0);
    __decorate([
        Input()
    ], GlSharedViewErrorMessageComponent.prototype, "footerImageDescription", void 0);
    __decorate([
        Input()
    ], GlSharedViewErrorMessageComponent.prototype, "footerImageSrc", void 0);
    __decorate([
        Input()
    ], GlSharedViewErrorMessageComponent.prototype, "footerLink", void 0);
    GlSharedViewErrorMessageComponent = __decorate([
        Component({
            selector: 'gl-shared-view-error-message',
            template: "<div #mainContainer class=\"main-container\">\n  <gl-shared-component-logo-square\n    [horizontalPosition]=\"logoHorizontalPosition\"\n    [verticalPosition]=\"logoVerticalPosition\"\n    [imageAlt]=\"logoImageAlt\"\n    [imageScr]=\"logoImageScr\"\n  ></gl-shared-component-logo-square>\n  <gl-shared-component-error-message\n    [position]=\"errorPosition\"\n    [errorCode]=\"errorCode\"\n    [errorMessage]=\"errorMessage\"\n    [buttonLabel]=\"errorButtonLabel\"\n    (buttonAction$)=\"errorButtonAction()\"\n  ></gl-shared-component-error-message>\n  <gl-shared-component-footer-container [description]=\"footerMainDescription\">\n    <gl-shared-component-input-button-hyperlink\n      *ngIf=\"footerShowContainer\"\n      [description]=\"footerDescription\"\n      [imageDescription]=\"footerImageDescription\"\n      [imageSrc]=\"footerImageSrc\"\n      [link]=\"footerLink\"\n    ></gl-shared-component-input-button-hyperlink>\n  </gl-shared-component-footer-container>\n</div>\n",
            styles: [":host::ng-deep{display:flex;flex-grow:1;background-color:#1a1b1d}:host::ng-deep .main-container{display:flex;flex-direction:column;justify-items:stretch;height:100vh;width:100vw;overflow:hidden;flex-grow:1;background-size:101%;background-position:top center;background-repeat:no-repeat;-webkit-animation-name:start;animation-name:start;-webkit-animation-duration:3s;animation-duration:3s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-play-state:running;animation-play-state:running}@-webkit-keyframes start{from{opacity:0}to{opacity:1}}@keyframes start{from{opacity:0}to{opacity:1}}"]
        })
    ], GlSharedViewErrorMessageComponent);
    return GlSharedViewErrorMessageComponent;
}());
export { GlSharedViewErrorMessageComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLXZpZXctZXJyb3ItbWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nbC1uZy1mcm9udGVuZC8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvdmlldy9lcnJvci1tZXNzYWdlL2dsLXNoYXJlZC12aWV3LWVycm9yLW1lc3NhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPN0c7SUF3QkU7UUFoQlMsMkJBQXNCLEdBQXFCLE1BQU0sQ0FBQztRQUNsRCx5QkFBb0IsR0FBcUIsS0FBSyxDQUFDO1FBRS9DLGtCQUFhLEdBQXFCLE1BQU0sQ0FBQztRQUl4Qyx1QkFBa0IsR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUs3RCwyQkFBc0IsR0FBVyxZQUFZLENBQUM7SUFJdkMsQ0FBQztJQUVqQiwyREFBZSxHQUFmO1FBQ0UsSUFBTSxhQUFhLEdBQW1CLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDO1FBQ3ZFLElBQU0sbUJBQW1CLEdBQW1CLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFVBQTRCLENBQUM7UUFFMUcsYUFBYSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsU0FBTyxJQUFJLENBQUMsVUFBVSxNQUFHLENBQUM7UUFDaEUsbUJBQW1CLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxTQUFPLElBQUksQ0FBQyxjQUFjLE1BQUcsQ0FBQztJQUM1RSxDQUFDO0lBRUQsNkRBQWlCLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFuQzJCO1FBQTNCLFNBQVMsQ0FBQyxlQUFlLENBQUM7NEVBQTJDO0lBRTdEO1FBQVIsS0FBSyxFQUFFOzZFQUF3QjtJQUN2QjtRQUFSLEtBQUssRUFBRTt5RUFBb0I7SUFFbkI7UUFBUixLQUFLLEVBQUU7MkVBQXNCO0lBQ3JCO1FBQVIsS0FBSyxFQUFFOzJFQUFzQjtJQUNyQjtRQUFSLEtBQUssRUFBRTtxRkFBbUQ7SUFDbEQ7UUFBUixLQUFLLEVBQUU7bUZBQWdEO0lBRS9DO1FBQVIsS0FBSyxFQUFFOzRFQUEwQztJQUN6QztRQUFSLEtBQUssRUFBRTt3RUFBNEI7SUFDM0I7UUFBUixLQUFLLEVBQUU7MkVBQXNCO0lBQ3JCO1FBQVIsS0FBSyxFQUFFOytFQUEwQjtJQUN4QjtRQUFULE1BQU0sRUFBRTtpRkFBNkQ7SUFFN0Q7UUFBUixLQUFLLEVBQUU7b0ZBQStCO0lBQzlCO1FBQVIsS0FBSyxFQUFFO2tGQUE4QjtJQUM3QjtRQUFSLEtBQUssRUFBRTtnRkFBMkI7SUFDMUI7UUFBUixLQUFLLEVBQUU7cUZBQStDO0lBQzlDO1FBQVIsS0FBSyxFQUFFOzZFQUF3QjtJQUN2QjtRQUFSLEtBQUssRUFBRTt5RUFBb0I7SUF0QmpCLGlDQUFpQztRQUw3QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsOEJBQThCO1lBQ3hDLHkrQkFBNEQ7O1NBRTdELENBQUM7T0FDVyxpQ0FBaUMsQ0FxQzdDO0lBQUQsd0NBQUM7Q0FBQSxBQXJDRCxJQXFDQztTQXJDWSxpQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC12aWV3LWVycm9yLW1lc3NhZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLXZpZXctZXJyb3ItbWVzc2FnZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC12aWV3LWVycm9yLW1lc3NhZ2UuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZFZpZXdFcnJvck1lc3NhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQFZpZXdDaGlsZCgnbWFpbkNvbnRhaW5lcicpIG1haW5Db250YWluZXI6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuXG4gIEBJbnB1dCgpIGJsdXJCYWNrZ3JvdW5kOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGJhY2tncm91bmQ6IHN0cmluZztcblxuICBASW5wdXQoKSBsb2dvSW1hZ2VTY3I6IHN0cmluZztcbiAgQElucHV0KCkgbG9nb0ltYWdlQWx0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxvZ29Ib3Jpem9udGFsUG9zaXRpb246ICdsZWZ0JyB8ICdyaWdodCcgPSAnbGVmdCc7XG4gIEBJbnB1dCgpIGxvZ29WZXJ0aWNhbFBvc2l0aW9uOiAndG9wJyB8ICdib3R0b20nID0gJ3RvcCc7XG5cbiAgQElucHV0KCkgZXJyb3JQb3NpdGlvbjogJ2xlZnQnIHwgJ3JpZ2h0JyA9ICdsZWZ0JztcbiAgQElucHV0KCkgZXJyb3JDb2RlOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuICBASW5wdXQoKSBlcnJvckJ1dHRvbkxhYmVsOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBlcnJvckJ1dHRvbkFjdGlvbiQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoKSBmb290ZXJNYWluRGVzY3JpcHRpb246IHN0cmluZztcbiAgQElucHV0KCkgZm9vdGVyU2hvd0NvbnRhaW5lcjogYm9vbGVhbjtcbiAgQElucHV0KCkgZm9vdGVyRGVzY3JpcHRpb246IHN0cmluZztcbiAgQElucHV0KCkgZm9vdGVySW1hZ2VEZXNjcmlwdGlvbjogc3RyaW5nID0gJ0ltYWdlIGxvZ28nO1xuICBASW5wdXQoKSBmb290ZXJJbWFnZVNyYzogc3RyaW5nO1xuICBASW5wdXQoKSBmb290ZXJMaW5rOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgY29uc3QgbWFpbkNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQgPSB0aGlzLm1haW5Db250YWluZXIubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBtYWluQ29udGFpbmVyUGFyZW50OiBIVE1MRGl2RWxlbWVudCA9IHRoaXMubWFpbkNvbnRhaW5lci5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUgYXMgSFRNTERpdkVsZW1lbnQ7XG5cbiAgICBtYWluQ29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt0aGlzLmJhY2tncm91bmR9KWA7XG4gICAgbWFpbkNvbnRhaW5lclBhcmVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dGhpcy5ibHVyQmFja2dyb3VuZH0pYDtcbiAgfVxuXG4gIGVycm9yQnV0dG9uQWN0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMuZXJyb3JCdXR0b25BY3Rpb24kLmVtaXQoKTtcbiAgfVxufVxuIl19