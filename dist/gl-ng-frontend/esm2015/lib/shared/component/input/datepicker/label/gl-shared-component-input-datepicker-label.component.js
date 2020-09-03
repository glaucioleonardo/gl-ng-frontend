import { Component, EventEmitter, Input, Output } from '@angular/core';
export class GlSharedComponentInputDatepickerLabelComponent {
    constructor() {
        this.disabled = false;
        this.itemContentAlignment = 'center';
        this.value = null;
        this.dateFormat = 'DD/MM/YYYY';
        this.maxLength = 255;
        this.labelAlignment = 'center';
        this.requiredField = 'Required field';
        this.currentValue = new EventEmitter();
    }
    ngOnInit() { }
    onCurrentValue(event) {
        this.currentValue.emit(event);
    }
}
GlSharedComponentInputDatepickerLabelComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-input-datepicker-label',
                template: "<gl-shared-component-input-datepicker-simple\n  [class]=\"class\"\n  [value]=\"value\"\n  (currentValue)=\"onCurrentValue($event)\"\n  [id]=\"id\"\n  [itemContentAlignment]=\"itemContentAlignment\"\n  [placeholder]=\"placeholder\"\n  [disabled]=\"disabled\"\n  [dateFormat]=\"dateFormat\"\n  [maxLength]=\"maxLength\"\n><gl-shared-component-title-label-simple\n    [id]=\"id\"\n    [labelAlignment]=\"labelAlignment\"\n    [labelValue]=\"labelValue\"\n    [required]=\"required\"\n    [class]=\"class\"\n    [requiredLabel]=\"requiredField\"\n  ></gl-shared-component-title-label-simple>\n</gl-shared-component-input-datepicker-simple>\n",
                styles: [":host::ng-deep{display:flex}:host::ng-deep gl-shared-component-title-label-simple{flex-grow:0}"]
            },] }
];
GlSharedComponentInputDatepickerLabelComponent.ctorParameters = () => [];
GlSharedComponentInputDatepickerLabelComponent.propDecorators = {
    disabled: [{ type: Input }],
    id: [{ type: Input }],
    placeholder: [{ type: Input }],
    itemContentAlignment: [{ type: Input }],
    class: [{ type: Input }],
    value: [{ type: Input }],
    dateFormat: [{ type: Input }],
    maxLength: [{ type: Input }],
    labelValue: [{ type: Input }],
    labelAlignment: [{ type: Input }],
    required: [{ type: Input }],
    requiredField: [{ type: Input }],
    currentValue: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1kYXRlcGlja2VyLWxhYmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2dsLW5nLWZyb250ZW5kL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudC9pbnB1dC9kYXRlcGlja2VyL2xhYmVsL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtZGF0ZXBpY2tlci1sYWJlbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVEvRSxNQUFNLE9BQU8sOENBQThDO0lBaUJ6RDtRQWhCUyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBR2pCLHlCQUFvQixHQUFnQyxRQUFRLENBQUM7UUFFN0QsVUFBSyxHQUFTLElBQUksQ0FBQztRQUNuQixlQUFVLEdBQUcsWUFBWSxDQUFDO1FBRTFCLGNBQVMsR0FBRyxHQUFHLENBQUM7UUFFaEIsbUJBQWMsR0FBZ0MsUUFBUSxDQUFDO1FBRXZELGtCQUFhLEdBQVcsZ0JBQWdCLENBQUM7UUFFeEMsaUJBQVksR0FBb0MsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUU3RCxDQUFDO0lBRWpCLFFBQVEsS0FBVSxDQUFDO0lBRW5CLGNBQWMsQ0FBQyxLQUF3QjtRQUNyQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7WUE1QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw0Q0FBNEM7Z0JBQ3RELHlvQkFBMEU7O2FBRTNFOzs7O3VCQUVFLEtBQUs7aUJBQ0wsS0FBSzswQkFDTCxLQUFLO21DQUNMLEtBQUs7b0JBQ0wsS0FBSztvQkFDTCxLQUFLO3lCQUNMLEtBQUs7d0JBRUwsS0FBSzt5QkFDTCxLQUFLOzZCQUNMLEtBQUs7dUJBQ0wsS0FBSzs0QkFDTCxLQUFLOzJCQUVMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJRGF0ZVBpY2tlck91dHB1dCB9IGZyb20gJy4uL3NpbXBsZS9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LWRhdGVwaWNrZXItc2ltcGxlLmludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtZGF0ZXBpY2tlci1sYWJlbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LWRhdGVwaWNrZXItbGFiZWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LWRhdGVwaWNrZXItbGFiZWwuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudElucHV0RGF0ZXBpY2tlckxhYmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgaXRlbUNvbnRlbnRBbGlnbm1lbnQ6ICdsZWZ0JyB8ICdjZW50ZXInIHwgJ3JpZ2h0JyA9ICdjZW50ZXInO1xuICBASW5wdXQoKSBjbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSB2YWx1ZTogRGF0ZSA9IG51bGw7XG4gIEBJbnB1dCgpIGRhdGVGb3JtYXQgPSAnREQvTU0vWVlZWSc7XG5cbiAgQElucHV0KCkgbWF4TGVuZ3RoID0gMjU1O1xuICBASW5wdXQoKSBsYWJlbFZhbHVlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxhYmVsQWxpZ25tZW50OiAnbGVmdCcgfCAnY2VudGVyJyB8ICdyaWdodCcgPSAnY2VudGVyJztcbiAgQElucHV0KCkgcmVxdWlyZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHJlcXVpcmVkRmllbGQ6IHN0cmluZyA9ICdSZXF1aXJlZCBmaWVsZCc7XG5cbiAgQE91dHB1dCgpIGN1cnJlbnRWYWx1ZTogRXZlbnRFbWl0dGVyPElEYXRlUGlja2VyT3V0cHV0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge31cblxuICBvbkN1cnJlbnRWYWx1ZShldmVudDogSURhdGVQaWNrZXJPdXRwdXQpIHtcbiAgICB0aGlzLmN1cnJlbnRWYWx1ZS5lbWl0KGV2ZW50KTtcbiAgfVxuXG59XG4iXX0=