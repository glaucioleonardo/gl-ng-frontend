import { Component, EventEmitter, Input, Output } from '@angular/core';
export class GlSharedComponentErrorMessageComponent {
    constructor() {
        this.position = 'left';
        this.buttonAction$ = new EventEmitter();
    }
    buttonAction() {
        this.buttonAction$.emit();
    }
}
GlSharedComponentErrorMessageComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-error-message',
                template: "<div class=\"content-container {{ position === 'right' ? 'right' : 'left' }}\">\n  <h1 class=\"main-title\">{{ errorCode }}</h1>\n  <h2 class=\"message\">{{ errorMessage }}</h2>\n  <gl-shared-component-input-button-simple\n    class=\"home-button\"\n    [innerValue]=\"buttonLabel\"\n    (click)=\"buttonAction()\"\n  ></gl-shared-component-input-button-simple>\n</div>\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep{display:flex;flex-grow:1}:host::ng-deep .content-container{align-content:center;align-items:center;display:flex;flex-direction:column;justify-content:center;position:absolute;text-align:center;top:25%}:host::ng-deep .content-container.right{right:10vw}:host::ng-deep .content-container.left{left:10vw}:host::ng-deep .content-container .main-title{font-size:11em;font-weight:800}:host::ng-deep .content-container .main-title,:host::ng-deep .content-container .message{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;color:hsla(0,0%,100%,.3);font-family:Montserrat,sans-serif;user-select:none}:host::ng-deep .content-container .message{font-size:1.5em;font-weight:100}:host::ng-deep .content-container gl-shared-component-input-button-simple{align-items:center;display:block;flex-direction:column;margin:3em 0}:host::ng-deep .content-container gl-shared-component-input-button-simple .default-button{background-color:rgba(0,0,0,.4);border-radius:10em;color:#fff;display:block;font-family:Montserrat,sans-serif;font-weight:300;padding:1.5em 4em}"]
            },] }
];
GlSharedComponentErrorMessageComponent.ctorParameters = () => [];
GlSharedComponentErrorMessageComponent.propDecorators = {
    position: [{ type: Input }],
    errorCode: [{ type: Input }],
    errorMessage: [{ type: Input }],
    buttonLabel: [{ type: Input }],
    buttonAction$: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1lcnJvci1tZXNzYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2dsLW5nLWZyb250ZW5kL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudC9lcnJvci1tZXNzYWdlL2dsLXNoYXJlZC1jb21wb25lbnQtZXJyb3ItbWVzc2FnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU92RSxNQUFNLE9BQU8sc0NBQXNDO0lBT2pEO1FBTlMsYUFBUSxHQUFxQixNQUFNLENBQUM7UUFJbkMsa0JBQWEsR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUVqRCxDQUFDO0lBRWpCLFlBQVk7UUFDVixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzVCLENBQUM7OztZQWhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1DQUFtQztnQkFDN0MsK1hBQWlFOzthQUVsRTs7Ozt1QkFFRSxLQUFLO3dCQUNMLEtBQUs7MkJBQ0wsS0FBSzswQkFDTCxLQUFLOzRCQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LWVycm9yLW1lc3NhZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1lcnJvci1tZXNzYWdlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1lcnJvci1tZXNzYWdlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRFcnJvck1lc3NhZ2VDb21wb25lbnQge1xuICBASW5wdXQoKSBwb3NpdGlvbjogJ2xlZnQnIHwgJ3JpZ2h0JyA9ICdsZWZ0JztcbiAgQElucHV0KCkgZXJyb3JDb2RlOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuICBASW5wdXQoKSBidXR0b25MYWJlbDogc3RyaW5nO1xuICBAT3V0cHV0KCkgYnV0dG9uQWN0aW9uJDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgYnV0dG9uQWN0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMuYnV0dG9uQWN0aW9uJC5lbWl0KCk7XG4gIH1cbn1cbiJdfQ==