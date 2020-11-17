import { Component, Input } from '@angular/core';
export class GlSharedComponentTitleLabelButtonSimpleComponent {
    constructor() {
        this.required = false;
        this.requiredFieldDescription = 'Required field';
    }
}
GlSharedComponentTitleLabelButtonSimpleComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-title-label-button-simple',
                template: "<div class=\"label-button-container {{ class }}\">\n  <div\n    [attr.alt]=\"alt\"\n    class=\"tooltip top\">\n    <img\n      class=\"label-button\"\n      [id]=\"id\"\n      [src]=\"src\"\n      [alt]=\"alt\">\n  </div>\n  <img\n    *ngIf=\"required\"\n    src=\"../assets/img/icon/label/dot.svg\"\n    class=\"required-fill-dot\"\n    [title]=\"requiredFieldDescription\"\n    alt=\"Required fill icon\">\n</div>\n",
                styles: [".required-fill{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:all .2s ease-in-out}.required-fill::-moz-placeholder{color:hsla(0,0%,100%,.3)!important}.required-fill:-ms-input-placeholder{color:hsla(0,0%,100%,.3)!important}.required-fill::-ms-input-placeholder{color:hsla(0,0%,100%,.3)!important}.required-fill::placeholder{color:hsla(0,0%,100%,.3)!important}.error-highlight{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:all .2s ease-in-out}.error-highlight::-moz-placeholder{color:hsla(0,0%,100%,.3)!important}.error-highlight:-ms-input-placeholder{color:hsla(0,0%,100%,.3)!important}.error-highlight::-ms-input-placeholder{color:hsla(0,0%,100%,.3)!important}.error-highlight::placeholder{color:hsla(0,0%,100%,.3)!important}.label-button-container{display:flex;position:absolute;right:.2em;top:.19em}.label-button-container .label-button{cursor:pointer;height:1em;margin:0 .1em;width:1em}.label-button-container .label-button:hover{opacity:1;transform:scale(1.1);transition:all .2s ease-in-out}.label-button-container .label-button:not(hover){opacity:.5;transform:scale(1);transition:all .2s ease-in-out}"]
            },] }
];
GlSharedComponentTitleLabelButtonSimpleComponent.ctorParameters = () => [];
GlSharedComponentTitleLabelButtonSimpleComponent.propDecorators = {
    id: [{ type: Input }],
    alt: [{ type: Input }],
    src: [{ type: Input }],
    required: [{ type: Input }],
    class: [{ type: Input }],
    requiredFieldDescription: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC10aXRsZS1sYWJlbC1idXR0b24tc2ltcGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi9wcm9qZWN0cy9nbC1uZy1mcm9udGVuZC9zcmMvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL2NvbXBvbmVudC90aXRsZS9sYWJlbC9idXR0b24vc2ltcGxlL2dsLXNoYXJlZC1jb21wb25lbnQtdGl0bGUtbGFiZWwtYnV0dG9uLXNpbXBsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPakQsTUFBTSxPQUFPLGdEQUFnRDtJQVMzRDtRQUpTLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFakIsNkJBQXdCLEdBQVcsZ0JBQWdCLENBQUM7SUFFN0MsQ0FBQzs7O1lBZGxCLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsK0NBQStDO2dCQUN6RCw4YUFBNkU7O2FBRTlFOzs7O2lCQUdFLEtBQUs7a0JBQ0wsS0FBSztrQkFDTCxLQUFLO3VCQUNMLEtBQUs7b0JBQ0wsS0FBSzt1Q0FDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LXRpdGxlLWxhYmVsLWJ1dHRvbi1zaW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC10aXRsZS1sYWJlbC1idXR0b24tc2ltcGxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC10aXRsZS1sYWJlbC1idXR0b24tc2ltcGxlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRUaXRsZUxhYmVsQnV0dG9uU2ltcGxlQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSBpZDogc3RyaW5nO1xuICBASW5wdXQoKSBhbHQ6IHN0cmluZztcbiAgQElucHV0KCkgc3JjOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJlcXVpcmVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJlcXVpcmVkRmllbGREZXNjcmlwdGlvbjogc3RyaW5nID0gJ1JlcXVpcmVkIGZpZWxkJztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIl19