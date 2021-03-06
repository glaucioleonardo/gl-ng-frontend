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
                template: "<gl-shared-component-input-autocomplete-simple\n  [class]=\"class\"\n  [value]=\"value\"\n  [listName]=\"listName\"\n  (currentValue)=\"onCurrentValue($event)\"\n  [id]=\"id\"\n  [itemContentAlignment]=\"itemContentAlignment\"\n  [placeholder]=\"placeholder\"\n  [listItems]=\"listItems\"\n  [disabled]=\"disabled\"\n\n  [custom]=\"custom\"\n  [baseUrl]=\"baseUrl\"\n  [valueField]=\"valueField\"\n  [textField]=\"textField\"\n  ><gl-shared-component-title-label-simple\n    [id]=\"id\"\n    [labelAlignment]=\"labelAlignment\"\n    [labelValue]=\"labelValue\"\n    [required]=\"required\"\n    [class]=\"class\"\n    [requiredLabel]=\"requiredField\"\n  ></gl-shared-component-title-label-simple>\n</gl-shared-component-input-autocomplete-simple>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1hdXRvY29tcGxldGUtbGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZ2wtbmctZnJvbnRlbmQvc3JjL2xpYi9zaGFyZWQvY29tcG9uZW50L2lucHV0L2F1dG9jb21wbGV0ZS9sYWJlbC9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LWF1dG9jb21wbGV0ZS1sYWJlbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVN2RSxNQUFNLE9BQU8sZ0RBQWdEO0lBdUIzRDtRQXJCVSxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkMsY0FBUyxHQUFvQixFQUFFLENBQUM7UUFFaEMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQWdCakIsa0JBQWEsR0FBVyxnQkFBZ0IsQ0FBQztJQUVuQyxDQUFDO0lBRWhCLGNBQWMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7WUE5QnpELFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsOENBQThDO2dCQUN4RCx5dkJBQTRFOzthQUU3RTs7OzsyQkFHRSxNQUFNO3dCQUNOLEtBQUs7dUJBRUwsS0FBSzt1QkFDTCxLQUFLO2lCQUNMLEtBQUs7eUJBQ0wsS0FBSzs2QkFDTCxLQUFLOzBCQUNMLEtBQUs7bUNBQ0wsS0FBSztvQkFDTCxLQUFLO29CQUNMLEtBQUs7dUJBQ0wsS0FBSztxQkFFTCxLQUFLO3NCQUNMLEtBQUs7eUJBRUwsS0FBSzt3QkFDTCxLQUFLOzRCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSUNvbWJvQm94RGF0YSB9IGZyb20gXCJnbC13LWZyb250ZW5kXCI7XG5pbXBvcnQgeyBUSG9yaXpvbnRhbEFsaWdubWVudCB9IGZyb20gJy4uLy4uLy4uL3RpdGxlL2xhYmVsL3NpbXBsZS9nbC1zaGFyZWQtY29tcG9uZW50LXRpdGxlLWxhYmVsLXNpbXBsZS5pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LWF1dG9jb21wbGV0ZS1sYWJlbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LWF1dG9jb21wbGV0ZS1sYWJlbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtYXV0b2NvbXBsZXRlLWxhYmVsLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRJbnB1dEF1dG9jb21wbGV0ZUxhYmVsQ29tcG9uZW50IHtcblxuICBAT3V0cHV0KCkgY3VycmVudFZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKSBsaXN0SXRlbXM6IElDb21ib0JveERhdGFbXSA9IFtdO1xuXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGxpc3ROYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxhYmVsVmFsdWU6IHN0cmluZztcbiAgQElucHV0KCkgbGFiZWxBbGlnbm1lbnQ6IFRIb3Jpem9udGFsQWxpZ25tZW50O1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBpdGVtQ29udGVudEFsaWdubWVudDogJ2xlZnQnIHwgJ2NlbnRlcicgfCAncmlnaHQnIHwgJyc7XG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHZhbHVlO1xuICBASW5wdXQoKSByZXF1aXJlZDogYm9vbGVhbjtcblxuICBASW5wdXQoKSBjdXN0b206IGJvb2xlYW47XG4gIEBJbnB1dCgpIGJhc2VVcmw6IHN0cmluZztcblxuICBASW5wdXQoKSB2YWx1ZUZpZWxkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRleHRGaWVsZDogc3RyaW5nO1xuICBASW5wdXQoKSByZXF1aXJlZEZpZWxkOiBzdHJpbmcgPSAnUmVxdWlyZWQgZmllbGQnO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBvbkN1cnJlbnRWYWx1ZSh2YWx1ZSkgeyB0aGlzLmN1cnJlbnRWYWx1ZS5lbWl0KHZhbHVlKTsgfVxufVxuIl19