import { Component, EventEmitter, Input, Output } from '@angular/core';
export class GlSharedComponentInputTextAreaLabelComponent {
    constructor() {
        this.disabled = false;
        this.value = '';
        this.requiredLabel = 'Required label';
        this.currentValue = new EventEmitter();
    }
    onKeyUp(values) {
        this.currentValue.emit(values);
    }
}
GlSharedComponentInputTextAreaLabelComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-input-text-area-label',
                template: "<gl-shared-component-input-text-area-simple\r\n  [class]=\"class\"\r\n  [id]=\"id\"\r\n  [placeholder]=\"placeholder\"\r\n  [itemContentAlignment]=\"itemContentAlignment\"\r\n  (currentValue)=\"onKeyUp($event)\"\r\n  [value]=\"value\"\r\n  [disabled]=\"disabled\"\r\n  [maxLength]=\"maxLength\">\r\n  <gl-shared-component-title-label-simple\r\n    [class]=\"class\"\r\n    [labelAlignment]=\"labelAlignment\"\r\n    [id]=\"id\"\r\n    [labelValue]=\"labelValue\"\r\n    [required]=\"required\"\r\n    [requiredLabel]=\"requiredLabel\"\r\n  ></gl-shared-component-title-label-simple>\r\n</gl-shared-component-input-text-area-simple>\r\n",
                styles: [":host::ng-deep{display:flex;flex-grow:1}"]
            },] }
];
GlSharedComponentInputTextAreaLabelComponent.ctorParameters = () => [];
GlSharedComponentInputTextAreaLabelComponent.propDecorators = {
    disabled: [{ type: Input }],
    id: [{ type: Input }],
    labelAlignment: [{ type: Input }],
    labelValue: [{ type: Input }],
    placeholder: [{ type: Input }],
    itemContentAlignment: [{ type: Input }],
    class: [{ type: Input }],
    value: [{ type: Input }],
    maxLength: [{ type: Input }],
    required: [{ type: Input }],
    requiredLabel: [{ type: Input }],
    currentValue: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LWFyZWEtbGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZ2wtbmctZnJvbnRlbmQvc3JjL2xpYi9zaGFyZWQvY29tcG9uZW50L2lucHV0L3RleHQtYXJlYS9sYWJlbC9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LXRleHQtYXJlYS1sYWJlbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVF2RSxNQUFNLE9BQU8sNENBQTRDO0lBZ0J2RDtRQWZTLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFRakIsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUdYLGtCQUFhLEdBQUcsZ0JBQWdCLENBQUM7UUFFaEMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRTVCLENBQUM7SUFFakIsT0FBTyxDQUFDLE1BQU07UUFDWixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7WUF6QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwyQ0FBMkM7Z0JBQ3JELHVvQkFBeUU7O2FBRTFFOzs7O3VCQUVFLEtBQUs7aUJBQ0wsS0FBSzs2QkFDTCxLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSzttQ0FDTCxLQUFLO29CQUNMLEtBQUs7b0JBRUwsS0FBSzt3QkFDTCxLQUFLO3VCQUNMLEtBQUs7NEJBQ0wsS0FBSzsyQkFFTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVEhvcml6b250YWxBbGlnbm1lbnQgfSBmcm9tICcuLi8uLi8uLi90aXRsZS9sYWJlbC9zaW1wbGUvZ2wtc2hhcmVkLWNvbXBvbmVudC10aXRsZS1sYWJlbC1zaW1wbGUuaW50ZXJmYWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LWFyZWEtbGFiZWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LXRleHQtYXJlYS1sYWJlbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LWFyZWEtbGFiZWwuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRJbnB1dFRleHRBcmVhTGFiZWxDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcclxuICBASW5wdXQoKSBsYWJlbEFsaWdubWVudDogVEhvcml6b250YWxBbGlnbm1lbnQ7XHJcbiAgQElucHV0KCkgbGFiZWxWYWx1ZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaXRlbUNvbnRlbnRBbGlnbm1lbnQ6IFRIb3Jpem9udGFsQWxpZ25tZW50O1xyXG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpIHZhbHVlID0gJyc7XHJcbiAgQElucHV0KCkgbWF4TGVuZ3RoOiBudW1iZXI7XHJcbiAgQElucHV0KCkgcmVxdWlyZWQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgcmVxdWlyZWRMYWJlbCA9ICdSZXF1aXJlZCBsYWJlbCc7XHJcblxyXG4gIEBPdXRwdXQoKSBjdXJyZW50VmFsdWUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG9uS2V5VXAodmFsdWVzKSB7XHJcbiAgICB0aGlzLmN1cnJlbnRWYWx1ZS5lbWl0KHZhbHVlcyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==