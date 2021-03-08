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
                template: "<gl-shared-component-input-datepicker-simple-day-month-year\r\n  *ngIf=\"dateFormat == 'DD/MM/YYYY'\"\r\n  [class]=\"class\"\r\n  [value]=\"value\"\r\n  (currentValue)=\"onCurrentValue($event)\"\r\n  [id]=\"id\"\r\n  [itemContentAlignment]=\"itemContentAlignment\"\r\n  [placeholder]=\"placeholder\"\r\n  [disabled]=\"disabled\"\r\n  [maxLength]=\"maxLength\"\r\n><gl-shared-component-title-label-simple\r\n    [id]=\"id\"\r\n    [labelAlignment]=\"labelAlignment\"\r\n    [labelValue]=\"labelValue\"\r\n    [required]=\"required\"\r\n    [class]=\"class\"\r\n    [requiredLabel]=\"requiredField\"\r\n  ></gl-shared-component-title-label-simple>\r\n</gl-shared-component-input-datepicker-simple-day-month-year>\r\n\r\n<gl-shared-component-input-datepicker-simple-month-year\r\n  *ngIf=\"dateFormat == 'MM/YYYY'\"\r\n  [class]=\"class\"\r\n  [value]=\"value\"\r\n  (currentValue)=\"onCurrentValue($event)\"\r\n  [id]=\"id\"\r\n  [itemContentAlignment]=\"itemContentAlignment\"\r\n  [placeholder]=\"placeholder\"\r\n  [disabled]=\"disabled\"\r\n  [maxLength]=\"maxLength\"\r\n><gl-shared-component-title-label-simple\r\n  [id]=\"id\"\r\n  [labelAlignment]=\"labelAlignment\"\r\n  [labelValue]=\"labelValue\"\r\n  [required]=\"required\"\r\n  [class]=\"class\"\r\n  [requiredLabel]=\"requiredField\"\r\n></gl-shared-component-title-label-simple>\r\n</gl-shared-component-input-datepicker-simple-month-year>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1kYXRlcGlja2VyLWxhYmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2dsLW5nLWZyb250ZW5kL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudC9pbnB1dC9kYXRlcGlja2VyL2xhYmVsL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtZGF0ZXBpY2tlci1sYWJlbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVUvRSxNQUFNLE9BQU8sOENBQThDO0lBaUJ6RDtRQWhCUyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBR2pCLHlCQUFvQixHQUF5QixRQUFRLENBQUM7UUFFdEQsVUFBSyxHQUFTLElBQUksQ0FBQztRQUNuQixlQUFVLEdBQTZCLFlBQVksQ0FBQztRQUVwRCxjQUFTLEdBQUcsR0FBRyxDQUFDO1FBRWhCLG1CQUFjLEdBQXlCLFFBQVEsQ0FBQztRQUVoRCxrQkFBYSxHQUFHLGdCQUFnQixDQUFDO1FBRWhDLGlCQUFZLEdBQWlFLElBQUksWUFBWSxFQUFFLENBQUM7SUFFM0YsQ0FBQztJQUVoQixRQUFRLEtBQVUsQ0FBQztJQUVuQixjQUFjLENBQUMsS0FBcUQ7UUFDbEUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7O1lBNUJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNENBQTRDO2dCQUN0RCwyNENBQTBFOzthQUUzRTs7Ozt1QkFFRSxLQUFLO2lCQUNMLEtBQUs7MEJBQ0wsS0FBSzttQ0FDTCxLQUFLO29CQUNMLEtBQUs7b0JBQ0wsS0FBSzt5QkFDTCxLQUFLO3dCQUVMLEtBQUs7eUJBQ0wsS0FBSzs2QkFDTCxLQUFLO3VCQUNMLEtBQUs7NEJBQ0wsS0FBSzsyQkFFTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJRGF0ZVBpY2tlck91dHB1dCB9IGZyb20gJy4uL3NpbXBsZS9kYXktbW9udGgteWVhci9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LWRhdGVwaWNrZXItc2ltcGxlLWRheS1tb250aC15ZWFyLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IElEYXRlUGlja2VyTW9udGhZZWFyT3V0cHV0IH0gZnJvbSAnLi4vc2ltcGxlL21vbnRoLXllYXIvZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1kYXRlcGlja2VyLXNpbXBsZS1tb250aC15ZWFyLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFRIb3Jpem9udGFsQWxpZ25tZW50IH0gZnJvbSAnLi4vLi4vLi4vdGl0bGUvbGFiZWwvc2ltcGxlL2dsLXNoYXJlZC1jb21wb25lbnQtdGl0bGUtbGFiZWwtc2ltcGxlLmludGVyZmFjZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtZGF0ZXBpY2tlci1sYWJlbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtZGF0ZXBpY2tlci1sYWJlbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1kYXRlcGlja2VyLWxhYmVsLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50SW5wdXREYXRlcGlja2VyTGFiZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGl0ZW1Db250ZW50QWxpZ25tZW50OiBUSG9yaXpvbnRhbEFsaWdubWVudCA9ICdjZW50ZXInO1xyXG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdmFsdWU6IERhdGUgPSBudWxsO1xyXG4gIEBJbnB1dCgpIGRhdGVGb3JtYXQ6ICdNTS9ZWVlZJyB8ICdERC9NTS9ZWVlZJyA9ICdERC9NTS9ZWVlZJztcclxuXHJcbiAgQElucHV0KCkgbWF4TGVuZ3RoID0gMjU1O1xyXG4gIEBJbnB1dCgpIGxhYmVsVmFsdWU6IHN0cmluZztcclxuICBASW5wdXQoKSBsYWJlbEFsaWdubWVudDogVEhvcml6b250YWxBbGlnbm1lbnQgPSAnY2VudGVyJztcclxuICBASW5wdXQoKSByZXF1aXJlZDogYm9vbGVhbjtcclxuICBASW5wdXQoKSByZXF1aXJlZEZpZWxkID0gJ1JlcXVpcmVkIGZpZWxkJztcclxuXHJcbiAgQE91dHB1dCgpIGN1cnJlbnRWYWx1ZTogRXZlbnRFbWl0dGVyPElEYXRlUGlja2VyT3V0cHV0IHwgSURhdGVQaWNrZXJNb250aFllYXJPdXRwdXQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge31cclxuXHJcbiAgb25DdXJyZW50VmFsdWUoZXZlbnQ6IElEYXRlUGlja2VyT3V0cHV0IHwgSURhdGVQaWNrZXJNb250aFllYXJPdXRwdXQpIHtcclxuICAgIHRoaXMuY3VycmVudFZhbHVlLmVtaXQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19