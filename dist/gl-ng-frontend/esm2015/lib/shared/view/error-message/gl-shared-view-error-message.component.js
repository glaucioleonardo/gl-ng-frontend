import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
let GlSharedViewErrorMessageComponent = class GlSharedViewErrorMessageComponent {
    constructor() {
        this.logoHorizontalPosition = 'left';
        this.logoVerticalPosition = 'top';
        this.errorPosition = 'left';
        this.errorButtonAction$ = new EventEmitter();
        this.footerImageDescription = 'Image logo';
    }
    ngAfterViewInit() {
        const mainContainer = this.mainContainer.nativeElement;
        const mainContainerParent = this.mainContainer.nativeElement.parentNode;
        mainContainer.style.backgroundImage = `url(${this.background})`;
        mainContainerParent.style.backgroundImage = `url(${this.blurBackground})`;
        console.log(this.mainContainer);
        console.log(mainContainer);
        console.log(mainContainerParent);
        console.log(this.background);
        console.log(this.blurBackground);
    }
    errorButtonAction() {
        this.errorButtonAction$.emit();
    }
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
export { GlSharedViewErrorMessageComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLXZpZXctZXJyb3ItbWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nbC1uZy1mcm9udGVuZC8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvdmlldy9lcnJvci1tZXNzYWdlL2dsLXNoYXJlZC12aWV3LWVycm9yLW1lc3NhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPN0csSUFBYSxpQ0FBaUMsR0FBOUMsTUFBYSxpQ0FBaUM7SUF3QjVDO1FBaEJTLDJCQUFzQixHQUFxQixNQUFNLENBQUM7UUFDbEQseUJBQW9CLEdBQXFCLEtBQUssQ0FBQztRQUUvQyxrQkFBYSxHQUFxQixNQUFNLENBQUM7UUFJeEMsdUJBQWtCLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7UUFLN0QsMkJBQXNCLEdBQVcsWUFBWSxDQUFDO0lBSXZDLENBQUM7SUFFakIsZUFBZTtRQUNiLE1BQU0sYUFBYSxHQUFtQixJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQztRQUN2RSxNQUFNLG1CQUFtQixHQUFtQixJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxVQUE0QixDQUFDO1FBRTFHLGFBQWEsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLE9BQU8sSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDO1FBQ2hFLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsT0FBTyxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUM7UUFFMUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELGlCQUFpQjtRQUNmLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0NBQ0YsQ0FBQTtBQTFDNkI7SUFBM0IsU0FBUyxDQUFDLGVBQWUsQ0FBQzt3RUFBMkM7QUFFN0Q7SUFBUixLQUFLLEVBQUU7eUVBQXdCO0FBQ3ZCO0lBQVIsS0FBSyxFQUFFO3FFQUFvQjtBQUVuQjtJQUFSLEtBQUssRUFBRTt1RUFBc0I7QUFDckI7SUFBUixLQUFLLEVBQUU7dUVBQXNCO0FBQ3JCO0lBQVIsS0FBSyxFQUFFO2lGQUFtRDtBQUNsRDtJQUFSLEtBQUssRUFBRTsrRUFBZ0Q7QUFFL0M7SUFBUixLQUFLLEVBQUU7d0VBQTBDO0FBQ3pDO0lBQVIsS0FBSyxFQUFFO29FQUE0QjtBQUMzQjtJQUFSLEtBQUssRUFBRTt1RUFBc0I7QUFDckI7SUFBUixLQUFLLEVBQUU7MkVBQTBCO0FBQ3hCO0lBQVQsTUFBTSxFQUFFOzZFQUE2RDtBQUU3RDtJQUFSLEtBQUssRUFBRTtnRkFBK0I7QUFDOUI7SUFBUixLQUFLLEVBQUU7OEVBQThCO0FBQzdCO0lBQVIsS0FBSyxFQUFFOzRFQUEyQjtBQUMxQjtJQUFSLEtBQUssRUFBRTtpRkFBK0M7QUFDOUM7SUFBUixLQUFLLEVBQUU7eUVBQXdCO0FBQ3ZCO0lBQVIsS0FBSyxFQUFFO3FFQUFvQjtBQXRCakIsaUNBQWlDO0lBTDdDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSw4QkFBOEI7UUFDeEMseStCQUE0RDs7S0FFN0QsQ0FBQztHQUNXLGlDQUFpQyxDQTJDN0M7U0EzQ1ksaUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtdmlldy1lcnJvci1tZXNzYWdlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dsLXNoYXJlZC12aWV3LWVycm9yLW1lc3NhZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nbC1zaGFyZWQtdmlldy1lcnJvci1tZXNzYWdlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRWaWV3RXJyb3JNZXNzYWdlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ21haW5Db250YWluZXInKSBtYWluQ29udGFpbmVyOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcblxuICBASW5wdXQoKSBibHVyQmFja2dyb3VuZDogc3RyaW5nO1xuICBASW5wdXQoKSBiYWNrZ3JvdW5kOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgbG9nb0ltYWdlU2NyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxvZ29JbWFnZUFsdDogc3RyaW5nO1xuICBASW5wdXQoKSBsb2dvSG9yaXpvbnRhbFBvc2l0aW9uOiAnbGVmdCcgfCAncmlnaHQnID0gJ2xlZnQnO1xuICBASW5wdXQoKSBsb2dvVmVydGljYWxQb3NpdGlvbjogJ3RvcCcgfCAnYm90dG9tJyA9ICd0b3AnO1xuXG4gIEBJbnB1dCgpIGVycm9yUG9zaXRpb246ICdsZWZ0JyB8ICdyaWdodCcgPSAnbGVmdCc7XG4gIEBJbnB1dCgpIGVycm9yQ29kZTogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSBlcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgQElucHV0KCkgZXJyb3JCdXR0b25MYWJlbDogc3RyaW5nO1xuICBAT3V0cHV0KCkgZXJyb3JCdXR0b25BY3Rpb24kOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQElucHV0KCkgZm9vdGVyTWFpbkRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGZvb3RlclNob3dDb250YWluZXI6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGZvb3RlckRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGZvb3RlckltYWdlRGVzY3JpcHRpb246IHN0cmluZyA9ICdJbWFnZSBsb2dvJztcbiAgQElucHV0KCkgZm9vdGVySW1hZ2VTcmM6IHN0cmluZztcbiAgQElucHV0KCkgZm9vdGVyTGluazogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IG1haW5Db250YWluZXI6IEhUTUxEaXZFbGVtZW50ID0gdGhpcy5tYWluQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgbWFpbkNvbnRhaW5lclBhcmVudDogSFRNTERpdkVsZW1lbnQgPSB0aGlzLm1haW5Db250YWluZXIubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlIGFzIEhUTUxEaXZFbGVtZW50O1xuXG4gICAgbWFpbkNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dGhpcy5iYWNrZ3JvdW5kfSlgO1xuICAgIG1haW5Db250YWluZXJQYXJlbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3RoaXMuYmx1ckJhY2tncm91bmR9KWA7XG5cbiAgICBjb25zb2xlLmxvZyh0aGlzLm1haW5Db250YWluZXIpO1xuICAgIGNvbnNvbGUubG9nKG1haW5Db250YWluZXIpO1xuICAgIGNvbnNvbGUubG9nKG1haW5Db250YWluZXJQYXJlbnQpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuYmFja2dyb3VuZCk7XG4gICAgY29uc29sZS5sb2codGhpcy5ibHVyQmFja2dyb3VuZCk7XG4gIH1cblxuICBlcnJvckJ1dHRvbkFjdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLmVycm9yQnV0dG9uQWN0aW9uJC5lbWl0KCk7XG4gIH1cbn1cbiJdfQ==