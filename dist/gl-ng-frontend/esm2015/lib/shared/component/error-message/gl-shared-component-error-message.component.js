import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
let GlSharedComponentErrorMessageComponent = class GlSharedComponentErrorMessageComponent {
    constructor() {
        this.position = 'left';
        this.buttonAction$ = new EventEmitter();
    }
    buttonAction() {
        this.buttonAction$.emit();
    }
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
GlSharedComponentErrorMessageComponent = __decorate([
    Component({
        selector: 'gl-shared-component-error-message',
        template: "<div class=\"content-container {{ position === 'right' ? 'right' : 'left' }}\">\n  <h1 class=\"main-title\">{{ errorCode }}</h1>\n  <h2 class=\"message\">{{ errorMessage }}</h2>\n  <gl-shared-component-input-button-simple\n    class=\"home-button\"\n    [innerValue]=\"buttonLabel\"\n    (click)=\"buttonAction()\"\n  ></gl-shared-component-input-button-simple>\n</div>\n",
        styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep{display:flex;flex-grow:1}:host::ng-deep .content-container{display:flex;flex-direction:column;position:absolute;top:25%;justify-content:center;align-content:center;text-align:center;align-items:center}:host::ng-deep .content-container.right{right:10vw}:host::ng-deep .content-container.left{left:10vw}:host::ng-deep .content-container .main-title{font-family:Montserrat,sans-serif;font-weight:800;color:rgba(255,255,255,.3);font-size:11em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host::ng-deep .content-container .message{font-family:Montserrat,sans-serif;font-weight:100;color:rgba(255,255,255,.3);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:1.5em}:host::ng-deep .content-container gl-shared-component-input-button-simple{display:block;align-items:center;flex-direction:column;margin:3em 0}:host::ng-deep .content-container gl-shared-component-input-button-simple .default-button{border-radius:10em;display:block;padding:1.5em 4em;background-color:rgba(0,0,0,.4);font-family:Montserrat,sans-serif;font-weight:300}"]
    })
], GlSharedComponentErrorMessageComponent);
export { GlSharedComponentErrorMessageComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1lcnJvci1tZXNzYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dsLW5nLWZyb250ZW5kLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9jb21wb25lbnQvZXJyb3ItbWVzc2FnZS9nbC1zaGFyZWQtY29tcG9uZW50LWVycm9yLW1lc3NhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3ZFLElBQWEsc0NBQXNDLEdBQW5ELE1BQWEsc0NBQXNDO0lBT2pEO1FBTlMsYUFBUSxHQUFxQixNQUFNLENBQUM7UUFJbkMsa0JBQWEsR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUVqRCxDQUFDO0lBRWpCLFlBQVk7UUFDVixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzVCLENBQUM7Q0FDRixDQUFBO0FBWFU7SUFBUixLQUFLLEVBQUU7d0VBQXFDO0FBQ3BDO0lBQVIsS0FBSyxFQUFFO3lFQUE0QjtBQUMzQjtJQUFSLEtBQUssRUFBRTs0RUFBc0I7QUFDckI7SUFBUixLQUFLLEVBQUU7MkVBQXFCO0FBQ25CO0lBQVQsTUFBTSxFQUFFOzZFQUF3RDtBQUx0RCxzQ0FBc0M7SUFMbEQsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG1DQUFtQztRQUM3QywrWEFBaUU7O0tBRWxFLENBQUM7R0FDVyxzQ0FBc0MsQ0FZbEQ7U0FaWSxzQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LWVycm9yLW1lc3NhZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1lcnJvci1tZXNzYWdlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1lcnJvci1tZXNzYWdlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRFcnJvck1lc3NhZ2VDb21wb25lbnQge1xuICBASW5wdXQoKSBwb3NpdGlvbjogJ2xlZnQnIHwgJ3JpZ2h0JyA9ICdsZWZ0JztcbiAgQElucHV0KCkgZXJyb3JDb2RlOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuICBASW5wdXQoKSBidXR0b25MYWJlbDogc3RyaW5nO1xuICBAT3V0cHV0KCkgYnV0dG9uQWN0aW9uJDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgYnV0dG9uQWN0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMuYnV0dG9uQWN0aW9uJC5lbWl0KCk7XG4gIH1cbn1cbiJdfQ==