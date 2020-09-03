import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../../component/logo/square/gl-shared-component-logo-square.component';
import * as ɵngcc2 from '../../component/error-message/gl-shared-component-error-message.component';
import * as ɵngcc3 from '../../component/footer/container/gl-shared-component-footer-container.component';
import * as ɵngcc4 from '@angular/common';
import * as ɵngcc5 from '../../component/input/button/hyperlink/gl-shared-component-input-button-hyperlink.component';

var _c0 = ["mainContainer"];
function GlSharedViewErrorMessageComponent_gl_shared_component_input_button_hyperlink_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "gl-shared-component-input-button-hyperlink", 6);
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("description", ctx_r1.footerDescription)("imageDescription", ctx_r1.footerImageDescription)("imageSrc", ctx_r1.footerImageSrc)("link", ctx_r1.footerLink);
} }
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
    return GlSharedViewErrorMessageComponent;
}());
export { GlSharedViewErrorMessageComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLXZpZXctZXJyb3ItbWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIm5nOi9nbC1uZy1mcm9udGVuZC9saWIvc2hhcmVkL3ZpZXcvZXJyb3ItbWVzc2FnZS9nbC1zaGFyZWQtdmlldy1lcnJvci1tZXNzYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTzdHO2dDQXdCRSx1REFoQlM7aUJBQXNCLEdBQXFCLE1BQU0sQ0FBQyxTQUNsRCx5QkFBb0IsR0FBcUIsS0FBSyxDQUFDLFNBRS9DLGtCQUFhLEdBQXFCO0tBQU0sQ0FBQyxTQUl4Qyx1QkFBa0IsR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQyxTQUs3RCwyQkFBc0IsR0FBVztJQUFZLENBQUMsS0FJdkMsQ0FBQyxLQUVqQjtnQ0FBZSxHQUFmLHNCQUNFLElBQU0sYUFBYSxHQUFtQixJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQztBQUN2RTtHQUFNLG1CQUFtQixHQUFtQjtBQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxVQUE0QixDQUFDLFNBRTFHLGFBQWEsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLFNBQU8sSUFBSSxDQUFDLFVBQVUsTUFBRyxDQUFDO0tBQ2hFLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsU0FBTyxJQUFJLENBQUM7R0FBYyxNQUFHLENBQUMsS0FDNUU7QUFBQyxNQUVEOzBCQUFpQixHQUFqQixzQkFDRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUMsS0FDakMsQ0FBQyxNQW5DMkIscUJBQTNCLFNBQVMsQ0FBQyxlQUFlLENBQUM7O3FDQUEyQyxNQUU3RCxxQkFBUixoRUFISDtBQUdRLEVBQUUsRkFIMkQsSUF3Qm5FOzZCQXJCZ0MsTUFDdkIs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QWMsUUFBckIsS0FBSyxFQUFFO3lFQUFvQix6RUFBbkIseUVBQW1CO0lBdEJqQixpQ0FBaUMsd0JBTDdDLFNBQVMsQ0FBQyxjQUNULFFBQVEsRUFBRSw4QkFBOEIsY0FDeEMsdklBR1csaUNBQWlDLHdCQUw3QyxTQUFTLENBQUMsY0FDVCxRQUFRLEVBQUUsOEJBQThCLGNBQ3hDOzs7Ozs7aWtCQUE0RCxBQUFBOztpRUFFN0QsQ0FBQyxEQUFELENBQUM7T0FDVyxpQ0FBaUMsQ0FxQzdDLE1BQUQseENBckNhLGlDQUFpQyxDQXFDN0M7YUFBQSxHQUFBLEFBckNELElBcUNDLFVBckNZLGlDQUFpQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQXNDOUM7QUFBQyxJQURELHdDQUFDO0FBQ0EsQ0FEQSxBQXJDRCxJQXFDQzs7QUE1Q0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC12aWV3LWVycm9yLW1lc3NhZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLXZpZXctZXJyb3ItbWVzc2FnZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC12aWV3LWVycm9yLW1lc3NhZ2UuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZFZpZXdFcnJvck1lc3NhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQFZpZXdDaGlsZCgnbWFpbkNvbnRhaW5lcicpIG1haW5Db250YWluZXI6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuXG4gIEBJbnB1dCgpIGJsdXJCYWNrZ3JvdW5kOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGJhY2tncm91bmQ6IHN0cmluZztcblxuICBASW5wdXQoKSBsb2dvSW1hZ2VTY3I6IHN0cmluZztcbiAgQElucHV0KCkgbG9nb0ltYWdlQWx0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxvZ29Ib3Jpem9udGFsUG9zaXRpb246ICdsZWZ0JyB8ICdyaWdodCcgPSAnbGVmdCc7XG4gIEBJbnB1dCgpIGxvZ29WZXJ0aWNhbFBvc2l0aW9uOiAndG9wJyB8ICdib3R0b20nID0gJ3RvcCc7XG5cbiAgQElucHV0KCkgZXJyb3JQb3NpdGlvbjogJ2xlZnQnIHwgJ3JpZ2h0JyA9ICdsZWZ0JztcbiAgQElucHV0KCkgZXJyb3JDb2RlOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuICBASW5wdXQoKSBlcnJvckJ1dHRvbkxhYmVsOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBlcnJvckJ1dHRvbkFjdGlvbiQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoKSBmb290ZXJNYWluRGVzY3JpcHRpb246IHN0cmluZztcbiAgQElucHV0KCkgZm9vdGVyU2hvd0NvbnRhaW5lcjogYm9vbGVhbjtcbiAgQElucHV0KCkgZm9vdGVyRGVzY3JpcHRpb246IHN0cmluZztcbiAgQElucHV0KCkgZm9vdGVySW1hZ2VEZXNjcmlwdGlvbjogc3RyaW5nID0gJ0ltYWdlIGxvZ28nO1xuICBASW5wdXQoKSBmb290ZXJJbWFnZVNyYzogc3RyaW5nO1xuICBASW5wdXQoKSBmb290ZXJMaW5rOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgY29uc3QgbWFpbkNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQgPSB0aGlzLm1haW5Db250YWluZXIubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBtYWluQ29udGFpbmVyUGFyZW50OiBIVE1MRGl2RWxlbWVudCA9IHRoaXMubWFpbkNvbnRhaW5lci5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUgYXMgSFRNTERpdkVsZW1lbnQ7XG5cbiAgICBtYWluQ29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt0aGlzLmJhY2tncm91bmR9KWA7XG4gICAgbWFpbkNvbnRhaW5lclBhcmVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dGhpcy5ibHVyQmFja2dyb3VuZH0pYDtcbiAgfVxuXG4gIGVycm9yQnV0dG9uQWN0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMuZXJyb3JCdXR0b25BY3Rpb24kLmVtaXQoKTtcbiAgfVxufVxuIl19