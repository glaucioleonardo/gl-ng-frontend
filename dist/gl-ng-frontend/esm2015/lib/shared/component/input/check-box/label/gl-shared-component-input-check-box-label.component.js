import { Component, EventEmitter, Input, Output } from '@angular/core';
export class GlSharedComponentInputCheckBoxLabelComponent {
    constructor() {
        this.checked = false;
        this.showBackground = true;
        this.labelAlignment = 'center';
        this.checked$ = new EventEmitter();
    }
}
GlSharedComponentInputCheckBoxLabelComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-input-check-box-label',
                template: "<gl-shared-component-title-label-simple\r\n  [labelAlignment]=\"labelAlignment\"\r\n  [required]=\"required\"\r\n  [labelValue]=\"labelValue\"\r\n  [requiredLabel]=\"requiredLabelDescription\"\r\n  [id]=\"labelId\"\r\n></gl-shared-component-title-label-simple>\r\n<gl-shared-component-input-check-box-simple\r\n  [checked]=\"checked\"\r\n  [showBackground]=\"showBackground\"\r\n  (checked$)=\"checked$.emit($event)\"\r\n></gl-shared-component-input-check-box-simple>\r\n",
                styles: [":host::ng-deep{display:flex;flex-direction:column;flex-grow:1}"]
            },] }
];
GlSharedComponentInputCheckBoxLabelComponent.ctorParameters = () => [];
GlSharedComponentInputCheckBoxLabelComponent.propDecorators = {
    checked: [{ type: Input }],
    showBackground: [{ type: Input }],
    labelId: [{ type: Input }],
    labelAlignment: [{ type: Input }],
    required: [{ type: Input }],
    labelValue: [{ type: Input }],
    requiredLabelDescription: [{ type: Input }],
    checked$: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1jaGVjay1ib3gtbGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZ2wtbmctZnJvbnRlbmQvc3JjL2xpYi9zaGFyZWQvY29tcG9uZW50L2lucHV0L2NoZWNrLWJveC9sYWJlbC9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LWNoZWNrLWJveC1sYWJlbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVF2RSxNQUFNLE9BQU8sNENBQTRDO0lBYXZEO1FBWFMsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUd0QixtQkFBYyxHQUF5QixRQUFRLENBQUM7UUFLL0MsYUFBUSxHQUEwQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBRS9DLENBQUM7OztZQWxCbEIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwyQ0FBMkM7Z0JBQ3JELG1lQUF5RTs7YUFFMUU7Ozs7c0JBR0UsS0FBSzs2QkFDTCxLQUFLO3NCQUVMLEtBQUs7NkJBQ0wsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLEtBQUs7dUNBQ0wsS0FBSzt1QkFFTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVEhvcml6b250YWxBbGlnbm1lbnQgfSBmcm9tICcuLi8uLi8uLi90aXRsZS9sYWJlbC9zaW1wbGUvZ2wtc2hhcmVkLWNvbXBvbmVudC10aXRsZS1sYWJlbC1zaW1wbGUuaW50ZXJmYWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1jaGVjay1ib3gtbGFiZWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LWNoZWNrLWJveC1sYWJlbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1jaGVjay1ib3gtbGFiZWwuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRJbnB1dENoZWNrQm94TGFiZWxDb21wb25lbnQge1xyXG5cclxuICBASW5wdXQoKSBjaGVja2VkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc2hvd0JhY2tncm91bmQgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKSBsYWJlbElkOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbGFiZWxBbGlnbm1lbnQ6IFRIb3Jpem9udGFsQWxpZ25tZW50ID0gJ2NlbnRlcic7XHJcbiAgQElucHV0KCkgcmVxdWlyZWQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgbGFiZWxWYWx1ZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHJlcXVpcmVkTGFiZWxEZXNjcmlwdGlvbjogc3RyaW5nO1xyXG5cclxuICBAT3V0cHV0KCkgY2hlY2tlZCQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxufVxyXG4iXX0=