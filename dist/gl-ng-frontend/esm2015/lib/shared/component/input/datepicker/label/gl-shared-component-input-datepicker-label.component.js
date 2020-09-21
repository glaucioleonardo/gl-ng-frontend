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
                template: "<gl-shared-component-input-datepicker-simple-day-month-year\n  *ngIf=\"dateFormat == 'DD/MM/YYYY'\"\n  [class]=\"class\"\n  [value]=\"value\"\n  (currentValue)=\"onCurrentValue($event)\"\n  [id]=\"id\"\n  [itemContentAlignment]=\"itemContentAlignment\"\n  [placeholder]=\"placeholder\"\n  [disabled]=\"disabled\"\n  [maxLength]=\"maxLength\"\n><gl-shared-component-title-label-simple\n    [id]=\"id\"\n    [labelAlignment]=\"labelAlignment\"\n    [labelValue]=\"labelValue\"\n    [required]=\"required\"\n    [class]=\"class\"\n    [requiredLabel]=\"requiredField\"\n  ></gl-shared-component-title-label-simple>\n</gl-shared-component-input-datepicker-simple-day-month-year>\n\n<gl-shared-component-input-datepicker-simple-month-year\n  *ngIf=\"dateFormat == 'MM/YYYY'\"\n  [class]=\"class\"\n  [value]=\"value\"\n  (currentValue)=\"onCurrentValue($event)\"\n  [id]=\"id\"\n  [itemContentAlignment]=\"itemContentAlignment\"\n  [placeholder]=\"placeholder\"\n  [disabled]=\"disabled\"\n  [maxLength]=\"maxLength\"\n><gl-shared-component-title-label-simple\n  [id]=\"id\"\n  [labelAlignment]=\"labelAlignment\"\n  [labelValue]=\"labelValue\"\n  [required]=\"required\"\n  [class]=\"class\"\n  [requiredLabel]=\"requiredField\"\n></gl-shared-component-title-label-simple>\n</gl-shared-component-input-datepicker-simple-month-year>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1kYXRlcGlja2VyLWxhYmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2dsLW5nLWZyb250ZW5kL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudC9pbnB1dC9kYXRlcGlja2VyL2xhYmVsL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtZGF0ZXBpY2tlci1sYWJlbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVMvRSxNQUFNLE9BQU8sOENBQThDO0lBaUJ6RDtRQWhCUyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBR2pCLHlCQUFvQixHQUFnQyxRQUFRLENBQUM7UUFFN0QsVUFBSyxHQUFTLElBQUksQ0FBQztRQUNuQixlQUFVLEdBQTZCLFlBQVksQ0FBQztRQUVwRCxjQUFTLEdBQUcsR0FBRyxDQUFDO1FBRWhCLG1CQUFjLEdBQWdDLFFBQVEsQ0FBQztRQUV2RCxrQkFBYSxHQUFXLGdCQUFnQixDQUFDO1FBRXhDLGlCQUFZLEdBQWlFLElBQUksWUFBWSxFQUFFLENBQUM7SUFFM0YsQ0FBQztJQUVoQixRQUFRLEtBQVUsQ0FBQztJQUVuQixjQUFjLENBQUMsS0FBcUQ7UUFDbEUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7O1lBNUJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNENBQTRDO2dCQUN0RCw2ekNBQTBFOzthQUUzRTs7Ozt1QkFFRSxLQUFLO2lCQUNMLEtBQUs7MEJBQ0wsS0FBSzttQ0FDTCxLQUFLO29CQUNMLEtBQUs7b0JBQ0wsS0FBSzt5QkFDTCxLQUFLO3dCQUVMLEtBQUs7eUJBQ0wsS0FBSzs2QkFDTCxLQUFLO3VCQUNMLEtBQUs7NEJBQ0wsS0FBSzsyQkFFTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSURhdGVQaWNrZXJPdXRwdXQgfSBmcm9tICcuLi9zaW1wbGUvZGF5LW1vbnRoLXllYXIvZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1kYXRlcGlja2VyLXNpbXBsZS1kYXktbW9udGgteWVhci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSURhdGVQaWNrZXJNb250aFllYXJPdXRwdXQgfSBmcm9tIFwiLi4vc2ltcGxlL21vbnRoLXllYXIvZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1kYXRlcGlja2VyLXNpbXBsZS1tb250aC15ZWFyLmludGVyZmFjZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LWRhdGVwaWNrZXItbGFiZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1kYXRlcGlja2VyLWxhYmVsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1kYXRlcGlja2VyLWxhYmVsLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRJbnB1dERhdGVwaWNrZXJMYWJlbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGl0ZW1Db250ZW50QWxpZ25tZW50OiAnbGVmdCcgfCAnY2VudGVyJyB8ICdyaWdodCcgPSAnY2VudGVyJztcbiAgQElucHV0KCkgY2xhc3M6IHN0cmluZztcbiAgQElucHV0KCkgdmFsdWU6IERhdGUgPSBudWxsO1xuICBASW5wdXQoKSBkYXRlRm9ybWF0OiAnTU0vWVlZWScgfCAnREQvTU0vWVlZWScgPSAnREQvTU0vWVlZWSc7XG5cbiAgQElucHV0KCkgbWF4TGVuZ3RoID0gMjU1O1xuICBASW5wdXQoKSBsYWJlbFZhbHVlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxhYmVsQWxpZ25tZW50OiAnbGVmdCcgfCAnY2VudGVyJyB8ICdyaWdodCcgPSAnY2VudGVyJztcbiAgQElucHV0KCkgcmVxdWlyZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHJlcXVpcmVkRmllbGQ6IHN0cmluZyA9ICdSZXF1aXJlZCBmaWVsZCc7XG5cbiAgQE91dHB1dCgpIGN1cnJlbnRWYWx1ZTogRXZlbnRFbWl0dGVyPElEYXRlUGlja2VyT3V0cHV0IHwgSURhdGVQaWNrZXJNb250aFllYXJPdXRwdXQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHt9XG5cbiAgb25DdXJyZW50VmFsdWUoZXZlbnQ6IElEYXRlUGlja2VyT3V0cHV0IHwgSURhdGVQaWNrZXJNb250aFllYXJPdXRwdXQpIHtcbiAgICB0aGlzLmN1cnJlbnRWYWx1ZS5lbWl0KGV2ZW50KTtcbiAgfVxuXG59XG4iXX0=