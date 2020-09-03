import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../../component/logo/square/gl-shared-component-logo-square.component';
import * as ɵngcc2 from '../../component/error-message/gl-shared-component-error-message.component';
import * as ɵngcc3 from '../../component/footer/container/gl-shared-component-footer-container.component';
import * as ɵngcc4 from '@angular/common';
import * as ɵngcc5 from '../../component/input/button/hyperlink/gl-shared-component-input-button-hyperlink.component';

const _c0 = ["mainContainer"];
function GlSharedViewErrorMessageComponent_gl_shared_component_input_button_hyperlink_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "gl-shared-component-input-button-hyperlink", 6);
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("description", ctx_r1.footerDescription)("imageDescription", ctx_r1.footerImageDescription)("imageSrc", ctx_r1.footerImageSrc)("link", ctx_r1.footerLink);
} }
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
    }
    errorButtonAction() {
        this.errorButtonAction$.emit();
    }
};
GlSharedViewErrorMessageComponent.ɵfac = function GlSharedViewErrorMessageComponent_Factory(t) { return new (t || GlSharedViewErrorMessageComponent)(); };
GlSharedViewErrorMessageComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedViewErrorMessageComponent, selectors: [["gl-shared-view-error-message"]], viewQuery: function GlSharedViewErrorMessageComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.mainContainer = _t.first);
    } }, inputs: { logoHorizontalPosition: "logoHorizontalPosition", logoVerticalPosition: "logoVerticalPosition", errorPosition: "errorPosition", footerImageDescription: "footerImageDescription", blurBackground: "blurBackground", background: "background", logoImageScr: "logoImageScr", logoImageAlt: "logoImageAlt", errorCode: "errorCode", errorMessage: "errorMessage", errorButtonLabel: "errorButtonLabel", footerMainDescription: "footerMainDescription", footerShowContainer: "footerShowContainer", footerDescription: "footerDescription", footerImageSrc: "footerImageSrc", footerLink: "footerLink" }, outputs: { errorButtonAction$: "errorButtonAction$" }, decls: 6, vars: 10, consts: [[1, "main-container"], ["mainContainer", ""], [3, "horizontalPosition", "verticalPosition", "imageAlt", "imageScr"], [3, "position", "errorCode", "errorMessage", "buttonLabel", "buttonAction$"], [3, "description"], [3, "description", "imageDescription", "imageSrc", "link", 4, "ngIf"], [3, "description", "imageDescription", "imageSrc", "link"]], template: function GlSharedViewErrorMessageComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
        ɵngcc0.ɵɵelement(2, "gl-shared-component-logo-square", 2);
        ɵngcc0.ɵɵelementStart(3, "gl-shared-component-error-message", 3);
        ɵngcc0.ɵɵlistener("buttonAction$", function GlSharedViewErrorMessageComponent_Template_gl_shared_component_error_message_buttonAction__3_listener() { return ctx.errorButtonAction(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "gl-shared-component-footer-container", 4);
        ɵngcc0.ɵɵtemplate(5, GlSharedViewErrorMessageComponent_gl_shared_component_input_button_hyperlink_5_Template, 1, 4, "gl-shared-component-input-button-hyperlink", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("horizontalPosition", ctx.logoHorizontalPosition)("verticalPosition", ctx.logoVerticalPosition)("imageAlt", ctx.logoImageAlt)("imageScr", ctx.logoImageScr);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("position", ctx.errorPosition)("errorCode", ctx.errorCode)("errorMessage", ctx.errorMessage)("buttonLabel", ctx.errorButtonLabel);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("description", ctx.footerMainDescription);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.footerShowContainer);
    } }, directives: [ɵngcc1.GlSharedComponentLogoSquareComponent, ɵngcc2.GlSharedComponentErrorMessageComponent, ɵngcc3.GlSharedComponentFooterContainerComponent, ɵngcc4.NgIf, ɵngcc5.GlSharedComponentInputButtonHyperlinkComponent], styles: ["[_nghost-%COMP%] {display:flex;flex-grow:1;background-color:#1a1b1d}[_nghost-%COMP%]  .main-container{display:flex;flex-direction:column;justify-items:stretch;height:100vh;width:100vw;overflow:hidden;flex-grow:1;background-size:101%;background-position:top center;background-repeat:no-repeat;-webkit-animation-name:start;animation-name:start;-webkit-animation-duration:3s;animation-duration:3s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-play-state:running;animation-play-state:running}@-webkit-keyframes start{from{opacity:0}to{opacity:1}}@keyframes start{from{opacity:0}to{opacity:1}}"] });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedViewErrorMessageComponent, [{
        type: Component,
        args: [{
                selector: 'gl-shared-view-error-message',
                template: "<div #mainContainer class=\"main-container\">\n  <gl-shared-component-logo-square\n    [horizontalPosition]=\"logoHorizontalPosition\"\n    [verticalPosition]=\"logoVerticalPosition\"\n    [imageAlt]=\"logoImageAlt\"\n    [imageScr]=\"logoImageScr\"\n  ></gl-shared-component-logo-square>\n  <gl-shared-component-error-message\n    [position]=\"errorPosition\"\n    [errorCode]=\"errorCode\"\n    [errorMessage]=\"errorMessage\"\n    [buttonLabel]=\"errorButtonLabel\"\n    (buttonAction$)=\"errorButtonAction()\"\n  ></gl-shared-component-error-message>\n  <gl-shared-component-footer-container [description]=\"footerMainDescription\">\n    <gl-shared-component-input-button-hyperlink\n      *ngIf=\"footerShowContainer\"\n      [description]=\"footerDescription\"\n      [imageDescription]=\"footerImageDescription\"\n      [imageSrc]=\"footerImageSrc\"\n      [link]=\"footerLink\"\n    ></gl-shared-component-input-button-hyperlink>\n  </gl-shared-component-footer-container>\n</div>\n",
                styles: [":host::ng-deep{display:flex;flex-grow:1;background-color:#1a1b1d}:host::ng-deep .main-container{display:flex;flex-direction:column;justify-items:stretch;height:100vh;width:100vw;overflow:hidden;flex-grow:1;background-size:101%;background-position:top center;background-repeat:no-repeat;-webkit-animation-name:start;animation-name:start;-webkit-animation-duration:3s;animation-duration:3s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-play-state:running;animation-play-state:running}@-webkit-keyframes start{from{opacity:0}to{opacity:1}}@keyframes start{from{opacity:0}to{opacity:1}}"]
            }]
    }], function () { return []; }, { logoHorizontalPosition: [{
            type: Input
        }], logoVerticalPosition: [{
            type: Input
        }], errorPosition: [{
            type: Input
        }], errorButtonAction$: [{
            type: Output
        }], footerImageDescription: [{
            type: Input
        }], mainContainer: [{
            type: ViewChild,
            args: ['mainContainer']
        }], blurBackground: [{
            type: Input
        }], background: [{
            type: Input
        }], logoImageScr: [{
            type: Input
        }], logoImageAlt: [{
            type: Input
        }], errorCode: [{
            type: Input
        }], errorMessage: [{
            type: Input
        }], errorButtonLabel: [{
            type: Input
        }], footerMainDescription: [{
            type: Input
        }], footerShowContainer: [{
            type: Input
        }], footerDescription: [{
            type: Input
        }], footerImageSrc: [{
            type: Input
        }], footerLink: [{
            type: Input
        }] }); })();
export { GlSharedViewErrorMessageComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLXZpZXctZXJyb3ItbWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIm5nOi9nbC1uZy1mcm9udGVuZC9saWIvc2hhcmVkL3ZpZXcvZXJyb3ItbWVzc2FnZS9nbC1zaGFyZWQtdmlldy1lcnJvci1tZXNzYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTzdHLElBQWEsaUNBQWlDLEdBQTlDO0tBQWEsaUNBQWlDLE9Bd0I1Qyx3QkFoQlMsMkJBQXNCO0VBQXFCLE1BQU0sQ0FBQyxTQUNsRCx5QkFBb0IsR0FBcUIsS0FBSyxDQUFDLFNBRS9DLGtCQUFhLEdBQXFCLE1BQU0sQ0FBQyxTQUl4QztvQkFBa0IsR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQyxTQUs3RCwyQkFBc0IsR0FBVyxZQUFZLENBQUMsS0FJdkMsQ0FBQyxLQUVqQjthQUFlLGFBQ2IsTUFBTTtFQUFhLEdBQW1CLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFNBQ3ZFLE1BQU0sbUJBQW1CLEdBQW1CLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFVBQTRCO0FBQUM7UUFFMUcsYUFBYSxDQUFDLEtBQUssQ0FBQztZQUFlLEdBQUcsT0FBTyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsU0FDaEUsbUJBQW1CLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxPQUFPLElBQUksQ0FBQyxjQUFjO0NBQUcsQ0FBQyxLQUM1RSxDQUFDLEtBRUQsaUJBQWlCLGFBQ2YsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRTtBQUFDLEtBQ2pDLENBQUMsRUFDRixDQUFBLENBcEM2QjtXQUEzQixTQUFTLENBQUMsZUFBZSxDQUFDO21FQUEyQyxFQUU3RCxpQkFBUixLQUFLLEVBQUUsMEVBQXdCLEVB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SUFBckIsS0FBSyxFQUFFO3FFQUFvQixyRUFBbkIscUVBQW1CO0FBdEJqQixpQ0FBaUMsb0JBTDdDLFNBQVMsQ0FBQyxVQUNULFFBQVEsRUFBRSxuRkFJQyxpQ0FBaUMsb0JBTDdDLFNBQVMsQ0FBQyxVQUNULFFBQVEsRUFBRTtxQkFBOEIsQUFBQTtNQUN4QyxBQUFBOztvNkJBQTRELEFBQUE7aWpCQUU3RCxDQUFDLElBQ1csaUNBQWlDLENBcUM3QyxXQXJDWSxpQ0FBaUMsbkZBRDdDLENBQUMsSUFDVyxpQ0FBaUMsQ0FxQzdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQ0Q7O0FBN0NBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtdmlldy1lcnJvci1tZXNzYWdlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dsLXNoYXJlZC12aWV3LWVycm9yLW1lc3NhZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nbC1zaGFyZWQtdmlldy1lcnJvci1tZXNzYWdlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRWaWV3RXJyb3JNZXNzYWdlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ21haW5Db250YWluZXInKSBtYWluQ29udGFpbmVyOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcblxuICBASW5wdXQoKSBibHVyQmFja2dyb3VuZDogc3RyaW5nO1xuICBASW5wdXQoKSBiYWNrZ3JvdW5kOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgbG9nb0ltYWdlU2NyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxvZ29JbWFnZUFsdDogc3RyaW5nO1xuICBASW5wdXQoKSBsb2dvSG9yaXpvbnRhbFBvc2l0aW9uOiAnbGVmdCcgfCAncmlnaHQnID0gJ2xlZnQnO1xuICBASW5wdXQoKSBsb2dvVmVydGljYWxQb3NpdGlvbjogJ3RvcCcgfCAnYm90dG9tJyA9ICd0b3AnO1xuXG4gIEBJbnB1dCgpIGVycm9yUG9zaXRpb246ICdsZWZ0JyB8ICdyaWdodCcgPSAnbGVmdCc7XG4gIEBJbnB1dCgpIGVycm9yQ29kZTogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSBlcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgQElucHV0KCkgZXJyb3JCdXR0b25MYWJlbDogc3RyaW5nO1xuICBAT3V0cHV0KCkgZXJyb3JCdXR0b25BY3Rpb24kOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQElucHV0KCkgZm9vdGVyTWFpbkRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGZvb3RlclNob3dDb250YWluZXI6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGZvb3RlckRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGZvb3RlckltYWdlRGVzY3JpcHRpb246IHN0cmluZyA9ICdJbWFnZSBsb2dvJztcbiAgQElucHV0KCkgZm9vdGVySW1hZ2VTcmM6IHN0cmluZztcbiAgQElucHV0KCkgZm9vdGVyTGluazogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IG1haW5Db250YWluZXI6IEhUTUxEaXZFbGVtZW50ID0gdGhpcy5tYWluQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgbWFpbkNvbnRhaW5lclBhcmVudDogSFRNTERpdkVsZW1lbnQgPSB0aGlzLm1haW5Db250YWluZXIubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlIGFzIEhUTUxEaXZFbGVtZW50O1xuXG4gICAgbWFpbkNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dGhpcy5iYWNrZ3JvdW5kfSlgO1xuICAgIG1haW5Db250YWluZXJQYXJlbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3RoaXMuYmx1ckJhY2tncm91bmR9KWA7XG4gIH1cblxuICBlcnJvckJ1dHRvbkFjdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLmVycm9yQnV0dG9uQWN0aW9uJC5lbWl0KCk7XG4gIH1cbn1cbiJdfQ==