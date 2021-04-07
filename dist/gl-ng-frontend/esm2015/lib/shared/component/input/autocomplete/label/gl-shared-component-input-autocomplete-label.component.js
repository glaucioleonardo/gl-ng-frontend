import { Component, EventEmitter, Input, Output } from '@angular/core';
export class GlSharedComponentInputAutocompleteLabelComponent {
    constructor() {
        this.currentValue = new EventEmitter();
        this.listItems = [];
        this.disabled = false;
        this.requiredField = 'Required field';
    }
    onCurrentValue(value) { this.currentValue.emit(value); }
}
GlSharedComponentInputAutocompleteLabelComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-input-autocomplete-label',
                template: "<gl-shared-component-input-autocomplete-simple\r\n  [class]=\"class\"\r\n  [value]=\"value\"\r\n  [listName]=\"listName\"\r\n  (currentValue)=\"onCurrentValue($event)\"\r\n  [id]=\"id\"\r\n  [itemContentAlignment]=\"itemContentAlignment\"\r\n  [placeholder]=\"placeholder\"\r\n  [listItems]=\"listItems\"\r\n  [disabled]=\"disabled\"\r\n\r\n  [custom]=\"custom\"\r\n  [baseUrl]=\"baseUrl\"\r\n  [valueField]=\"valueField\"\r\n  [textField]=\"textField\"\r\n  ><gl-shared-component-title-label-simple\r\n    [id]=\"id\"\r\n    [labelAlignment]=\"labelAlignment\"\r\n    [labelValue]=\"labelValue\"\r\n    [required]=\"required\"\r\n    [class]=\"class\"\r\n    [requiredLabel]=\"requiredField\"\r\n  ></gl-shared-component-title-label-simple>\r\n</gl-shared-component-input-autocomplete-simple>\r\n",
                styles: [":host::ng-deep{display:flex}:host::ng-deep gl-shared-component-title-label-simple{flex-grow:0}"]
            },] }
];
GlSharedComponentInputAutocompleteLabelComponent.ctorParameters = () => [];
GlSharedComponentInputAutocompleteLabelComponent.propDecorators = {
    currentValue: [{ type: Output }],
    listItems: [{ type: Input }],
    disabled: [{ type: Input }],
    listName: [{ type: Input }],
    id: [{ type: Input }],
    labelValue: [{ type: Input }],
    labelAlignment: [{ type: Input }],
    placeholder: [{ type: Input }],
    itemContentAlignment: [{ type: Input }],
    class: [{ type: Input }],
    value: [{ type: Input }],
    required: [{ type: Input }],
    custom: [{ type: Input }],
    baseUrl: [{ type: Input }],
    valueField: [{ type: Input }],
    textField: [{ type: Input }],
    requiredField: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1hdXRvY29tcGxldGUtbGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZ2wtbmctZnJvbnRlbmQvc3JjL2xpYi9zaGFyZWQvY29tcG9uZW50L2lucHV0L2F1dG9jb21wbGV0ZS9sYWJlbC9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LWF1dG9jb21wbGV0ZS1sYWJlbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVN2RSxNQUFNLE9BQU8sZ0RBQWdEO0lBdUIzRDtRQXJCVSxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkMsY0FBUyxHQUFvQixFQUFFLENBQUM7UUFFaEMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQWdCakIsa0JBQWEsR0FBRyxnQkFBZ0IsQ0FBQztJQUUzQixDQUFDO0lBRWhCLGNBQWMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7WUE5QnpELFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsOENBQThDO2dCQUN4RCx5eUJBQTRFOzthQUU3RTs7OzsyQkFHRSxNQUFNO3dCQUNOLEtBQUs7dUJBRUwsS0FBSzt1QkFDTCxLQUFLO2lCQUNMLEtBQUs7eUJBQ0wsS0FBSzs2QkFDTCxLQUFLOzBCQUNMLEtBQUs7bUNBQ0wsS0FBSztvQkFDTCxLQUFLO29CQUNMLEtBQUs7dUJBQ0wsS0FBSztxQkFFTCxLQUFLO3NCQUNMLEtBQUs7eUJBRUwsS0FBSzt3QkFDTCxLQUFLOzRCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJQ29tYm9Cb3hEYXRhIH0gZnJvbSBcImdsLXctZnJvbnRlbmRcIjtcclxuaW1wb3J0IHsgVEhvcml6b250YWxBbGlnbm1lbnQgfSBmcm9tICcuLi8uLi8uLi90aXRsZS9sYWJlbC9zaW1wbGUvZ2wtc2hhcmVkLWNvbXBvbmVudC10aXRsZS1sYWJlbC1zaW1wbGUuaW50ZXJmYWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1hdXRvY29tcGxldGUtbGFiZWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LWF1dG9jb21wbGV0ZS1sYWJlbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1hdXRvY29tcGxldGUtbGFiZWwuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRJbnB1dEF1dG9jb21wbGV0ZUxhYmVsQ29tcG9uZW50IHtcclxuXHJcbiAgQE91dHB1dCgpIGN1cnJlbnRWYWx1ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBASW5wdXQoKSBsaXN0SXRlbXM6IElDb21ib0JveERhdGFbXSA9IFtdO1xyXG5cclxuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGxpc3ROYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcclxuICBASW5wdXQoKSBsYWJlbFZhbHVlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbGFiZWxBbGlnbm1lbnQ6IFRIb3Jpem9udGFsQWxpZ25tZW50O1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaXRlbUNvbnRlbnRBbGlnbm1lbnQ6IFRIb3Jpem9udGFsQWxpZ25tZW50IHwgJyc7XHJcbiAgQElucHV0KCkgY2xhc3M6IHN0cmluZztcclxuICBASW5wdXQoKSB2YWx1ZTtcclxuICBASW5wdXQoKSByZXF1aXJlZDogYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KCkgY3VzdG9tOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGJhc2VVcmw6IHN0cmluZztcclxuXHJcbiAgQElucHV0KCkgdmFsdWVGaWVsZDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHRleHRGaWVsZDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHJlcXVpcmVkRmllbGQgPSAnUmVxdWlyZWQgZmllbGQnO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIG9uQ3VycmVudFZhbHVlKHZhbHVlKSB7IHRoaXMuY3VycmVudFZhbHVlLmVtaXQodmFsdWUpOyB9XHJcbn1cclxuIl19