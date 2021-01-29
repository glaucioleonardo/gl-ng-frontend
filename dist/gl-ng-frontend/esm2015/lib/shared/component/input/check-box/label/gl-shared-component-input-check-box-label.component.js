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
                template: "<gl-shared-component-title-label-simple\n  [labelAlignment]=\"labelAlignment\"\n  [required]=\"required\"\n  [labelValue]=\"labelValue\"\n  [requiredLabel]=\"requiredLabelDescription\"\n  [id]=\"labelId\"\n></gl-shared-component-title-label-simple>\n<gl-shared-component-input-check-box-simple\n  [checked]=\"checked\"\n  [showBackground]=\"showBackground\"\n  (checked$)=\"checked$.emit($event)\"\n></gl-shared-component-input-check-box-simple>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1jaGVjay1ib3gtbGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZ2wtbmctZnJvbnRlbmQvc3JjL2xpYi9zaGFyZWQvY29tcG9uZW50L2lucHV0L2NoZWNrLWJveC9sYWJlbC9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LWNoZWNrLWJveC1sYWJlbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVF2RSxNQUFNLE9BQU8sNENBQTRDO0lBYXZEO1FBWFMsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUd0QixtQkFBYyxHQUF5QixRQUFRLENBQUM7UUFLL0MsYUFBUSxHQUEwQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBRS9DLENBQUM7OztZQWxCbEIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwyQ0FBMkM7Z0JBQ3JELDJjQUF5RTs7YUFFMUU7Ozs7c0JBR0UsS0FBSzs2QkFDTCxLQUFLO3NCQUVMLEtBQUs7NkJBQ0wsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLEtBQUs7dUNBQ0wsS0FBSzt1QkFFTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRIb3Jpem9udGFsQWxpZ25tZW50IH0gZnJvbSAnLi4vLi4vLi4vdGl0bGUvbGFiZWwvc2ltcGxlL2dsLXNoYXJlZC1jb21wb25lbnQtdGl0bGUtbGFiZWwtc2ltcGxlLmludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtY2hlY2stYm94LWxhYmVsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtY2hlY2stYm94LWxhYmVsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1jaGVjay1ib3gtbGFiZWwuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudElucHV0Q2hlY2tCb3hMYWJlbENvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgY2hlY2tlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBzaG93QmFja2dyb3VuZCA9IHRydWU7XG5cbiAgQElucHV0KCkgbGFiZWxJZDogc3RyaW5nO1xuICBASW5wdXQoKSBsYWJlbEFsaWdubWVudDogVEhvcml6b250YWxBbGlnbm1lbnQgPSAnY2VudGVyJztcbiAgQElucHV0KCkgcmVxdWlyZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGxhYmVsVmFsdWU6IHN0cmluZztcbiAgQElucHV0KCkgcmVxdWlyZWRMYWJlbERlc2NyaXB0aW9uOiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpIGNoZWNrZWQkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiJdfQ==