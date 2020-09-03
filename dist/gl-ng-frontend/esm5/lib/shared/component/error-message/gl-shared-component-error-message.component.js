import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../input/button/simple/gl-shared-component-input-button-simple.component';
var GlSharedComponentErrorMessageComponent = /** @class */ (function () {
    function GlSharedComponentErrorMessageComponent() {
        this.position = 'left';
        this.buttonAction$ = new EventEmitter();
    }
    GlSharedComponentErrorMessageComponent.prototype.buttonAction = function () {
        this.buttonAction$.emit();
    };
    __decorate([
        Input()
    ], GlSharedComponentErrorMessageComponent.prototype, "position", void 0);
    __decorate([
        Input()
    ], GlSharedComponentErrorMessageComponent.prototype, "errorCode", void 0);
    __decorate([
        Input()
    ], GlSharedComponentErrorMessageComponent.prototype, "errorMessage", void 0);
    __decorate([
        Input()
    ], GlSharedComponentErrorMessageComponent.prototype, "buttonLabel", void 0);
    __decorate([
        Output()
    ], GlSharedComponentErrorMessageComponent.prototype, "buttonAction$", void 0);
GlSharedComponentErrorMessageComponent.ɵfac = function GlSharedComponentErrorMessageComponent_Factory(t) { return new (t || GlSharedComponentErrorMessageComponent)(); };
GlSharedComponentErrorMessageComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentErrorMessageComponent, selectors: [["gl-shared-component-error-message"]], inputs: { position: "position", errorCode: "errorCode", errorMessage: "errorMessage", buttonLabel: "buttonLabel" }, outputs: { buttonAction$: "buttonAction$" }, decls: 6, vars: 6, consts: [[1, "main-title"], [1, "message"], [1, "home-button", 3, "innerValue", "click"]], template: function GlSharedComponentErrorMessageComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵelementStart(1, "h1", 0);
        ɵngcc0.ɵɵtext(2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "h2", 1);
        ɵngcc0.ɵɵtext(4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "gl-shared-component-input-button-simple", 2);
        ɵngcc0.ɵɵlistener("click", function GlSharedComponentErrorMessageComponent_Template_gl_shared_component_input_button_simple_click_5_listener() { return ctx.buttonAction(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate1("content-container ", ctx.position === "right" ? "right" : "left", "");
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.errorCode);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.errorMessage);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("innerValue", ctx.buttonLabel);
    } }, directives: [ɵngcc1.GlSharedComponentInputButtonSimpleComponent], styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);[_nghost-%COMP%] {display:flex;flex-grow:1}[_nghost-%COMP%]  .content-container{display:flex;flex-direction:column;position:absolute;top:25%;justify-content:center;align-content:center;text-align:center;align-items:center}[_nghost-%COMP%]  .content-container.right{right:10vw}[_nghost-%COMP%]  .content-container.left{left:10vw}[_nghost-%COMP%]  .content-container .main-title{font-family:Montserrat,sans-serif;font-weight:800;color:rgba(255,255,255,.3);font-size:11em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[_nghost-%COMP%]  .content-container .message{font-family:Montserrat,sans-serif;font-weight:100;color:rgba(255,255,255,.3);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:1.5em}[_nghost-%COMP%]  .content-container gl-shared-component-input-button-simple{display:block;align-items:center;flex-direction:column;margin:3em 0}[_nghost-%COMP%]  .content-container gl-shared-component-input-button-simple .default-button{border-radius:10em;display:block;padding:1.5em 4em;background-color:rgba(0,0,0,.4);font-family:Montserrat,sans-serif;font-weight:300}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentErrorMessageComponent, [{
        type: Component,
        args: [{
                selector: 'gl-shared-component-error-message',
                template: "<div class=\"content-container {{ position === 'right' ? 'right' : 'left' }}\">\n  <h1 class=\"main-title\">{{ errorCode }}</h1>\n  <h2 class=\"message\">{{ errorMessage }}</h2>\n  <gl-shared-component-input-button-simple\n    class=\"home-button\"\n    [innerValue]=\"buttonLabel\"\n    (click)=\"buttonAction()\"\n  ></gl-shared-component-input-button-simple>\n</div>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep{display:flex;flex-grow:1}:host::ng-deep .content-container{display:flex;flex-direction:column;position:absolute;top:25%;justify-content:center;align-content:center;text-align:center;align-items:center}:host::ng-deep .content-container.right{right:10vw}:host::ng-deep .content-container.left{left:10vw}:host::ng-deep .content-container .main-title{font-family:Montserrat,sans-serif;font-weight:800;color:rgba(255,255,255,.3);font-size:11em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host::ng-deep .content-container .message{font-family:Montserrat,sans-serif;font-weight:100;color:rgba(255,255,255,.3);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:1.5em}:host::ng-deep .content-container gl-shared-component-input-button-simple{display:block;align-items:center;flex-direction:column;margin:3em 0}:host::ng-deep .content-container gl-shared-component-input-button-simple .default-button{border-radius:10em;display:block;padding:1.5em 4em;background-color:rgba(0,0,0,.4);font-family:Montserrat,sans-serif;font-weight:300}"]
            }]
    }], function () { return []; }, { position: [{
            type: Input
        }], buttonAction$: [{
            type: Output
        }], errorCode: [{
            type: Input
        }], errorMessage: [{
            type: Input
        }], buttonLabel: [{
            type: Input
        }] }); })();
    return GlSharedComponentErrorMessageComponent;
}());
export { GlSharedComponentErrorMessageComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1lcnJvci1tZXNzYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsibmc6L2dsLW5nLWZyb250ZW5kL2xpYi9zaGFyZWQvY29tcG9uZW50L2Vycm9yLW1lc3NhZ2UvZ2wtc2hhcmVkLWNvbXBvbmVudC1lcnJvci1tZXNzYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU92RTtxQ0FPRSw0REFOUztVQUFRLEdBQXFCLE1BQU0sQ0FBQyxTQUluQyxrQkFBYSxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDLHJFQUxuRTtBQU9rQixDQUFDLEtBRWpCLE5BUmtCLElBTWxCO1dBRVksR0FBWixkQUNNLFFBVEcsYUFBUSxHQUFxQixNQUFNLENBQUM7SUFTM0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUM1QixDQUFDLE1BVlEsMUNBQ1gsUUFHWSxrQkFBYSxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO0FBQ25FLElBQ2tCLENBQUM7UUFOaEIsS0FBSyxFQUFFLGZBT1YsSUFDRSw2REFBWSxHQUFaO1VBUjZDLE1BQ3BDLGhCQU9LLFFBQ1osSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztFQVIzQixGQVNILElBQUUsQ0FBQztBQVRLLEVBQUUsRkFVVCxJQVhVO0FBQWEsUUFBckIsS0FBSyxFQUFFOytDQUM0QiwvQ0FEM0IsNEVBQW9DO0FBQzlDLElBQVU7O0FBQUEsNkVBQTJCO0lBQzNCLEpBQVYsSUFBVTtRQUFSLEtBQUssRUFBRSxmQUFjLFFBQXJCLEtBQUssRUFBRTtnRkFBc0IsaEZBQXJCLGdGQUFxQjtJQUNyQixKQUFWLElBQVU7UUFBUixLQUFLLEVBQUUsZkFBYyxRQUFyQixLQUFLLEVBQUU7K0VBQXFCLC9FQUFwQiwrRUFBb0I7SUFDbkIsSkFBWCxJQUFXO1FBQVQsTUFBTSxFQUFFLGhCQUFjLFFBQXRCLE1BQU0sRUFBRTtpRkFBd0QsakZBQXZELGlGQUF1RDtJQUx0RCxzQ0FBc0Msd0JBTGxELFNBQVMsQ0FBQyxjQUNULFFBQVEsRUFBRSxtQ0FBbUMsY0FDN0MsakpBR1csc0NBQXNDLHdCQUxsRCxTQUFTLENBQUMsY0FDVCxRQUFRLEVBQUUsbUNBQW1DLGNBQzdDOzBXQUFpRSxBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrSkFFbEUsQ0FBQyxRQUNXLHNDQUFzQyxDQVlsRCxNQUFELDZDQUFDLEdBQUEsQUFaRCxJQVlDLFVBWlksc0NBQXNDLDFKQURsRCxDQUFDLFFBQ1csc0NBQXNDLENBWWxEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQ0Q7QUFBQyxJQURELDZDQUFDO0FBQ0EsQ0FEQSxBQVpELElBWUM7O0FBbkJBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LWVycm9yLW1lc3NhZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1lcnJvci1tZXNzYWdlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1lcnJvci1tZXNzYWdlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRFcnJvck1lc3NhZ2VDb21wb25lbnQge1xuICBASW5wdXQoKSBwb3NpdGlvbjogJ2xlZnQnIHwgJ3JpZ2h0JyA9ICdsZWZ0JztcbiAgQElucHV0KCkgZXJyb3JDb2RlOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuICBASW5wdXQoKSBidXR0b25MYWJlbDogc3RyaW5nO1xuICBAT3V0cHV0KCkgYnV0dG9uQWN0aW9uJDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgYnV0dG9uQWN0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMuYnV0dG9uQWN0aW9uJC5lbWl0KCk7XG4gIH1cbn1cbiJdfQ==