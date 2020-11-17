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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1kYXRlcGlja2VyLWxhYmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi9wcm9qZWN0cy9nbC1uZy1mcm9udGVuZC9zcmMvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL2NvbXBvbmVudC9pbnB1dC9kYXRlcGlja2VyL2xhYmVsL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtZGF0ZXBpY2tlci1sYWJlbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVUvRSxNQUFNLE9BQU8sOENBQThDO0lBaUJ6RDtRQWhCUyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBR2pCLHlCQUFvQixHQUF5QixRQUFRLENBQUM7UUFFdEQsVUFBSyxHQUFTLElBQUksQ0FBQztRQUNuQixlQUFVLEdBQTZCLFlBQVksQ0FBQztRQUVwRCxjQUFTLEdBQUcsR0FBRyxDQUFDO1FBRWhCLG1CQUFjLEdBQXlCLFFBQVEsQ0FBQztRQUVoRCxrQkFBYSxHQUFXLGdCQUFnQixDQUFDO1FBRXhDLGlCQUFZLEdBQWlFLElBQUksWUFBWSxFQUFFLENBQUM7SUFFM0YsQ0FBQztJQUVoQixRQUFRLEtBQVUsQ0FBQztJQUVuQixjQUFjLENBQUMsS0FBcUQ7UUFDbEUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7O1lBNUJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNENBQTRDO2dCQUN0RCw2ekNBQTBFOzthQUUzRTs7Ozt1QkFFRSxLQUFLO2lCQUNMLEtBQUs7MEJBQ0wsS0FBSzttQ0FDTCxLQUFLO29CQUNMLEtBQUs7b0JBQ0wsS0FBSzt5QkFDTCxLQUFLO3dCQUVMLEtBQUs7eUJBQ0wsS0FBSzs2QkFDTCxLQUFLO3VCQUNMLEtBQUs7NEJBQ0wsS0FBSzsyQkFFTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSURhdGVQaWNrZXJPdXRwdXQgfSBmcm9tICcuLi9zaW1wbGUvZGF5LW1vbnRoLXllYXIvZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1kYXRlcGlja2VyLXNpbXBsZS1kYXktbW9udGgteWVhci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSURhdGVQaWNrZXJNb250aFllYXJPdXRwdXQgfSBmcm9tIFwiLi4vc2ltcGxlL21vbnRoLXllYXIvZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1kYXRlcGlja2VyLXNpbXBsZS1tb250aC15ZWFyLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgVEhvcml6b250YWxBbGlnbm1lbnQgfSBmcm9tICcuLi8uLi8uLi90aXRsZS9sYWJlbC9zaW1wbGUvZ2wtc2hhcmVkLWNvbXBvbmVudC10aXRsZS1sYWJlbC1zaW1wbGUuaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1kYXRlcGlja2VyLWxhYmVsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtZGF0ZXBpY2tlci1sYWJlbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtZGF0ZXBpY2tlci1sYWJlbC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50SW5wdXREYXRlcGlja2VyTGFiZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBpZDogc3RyaW5nO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBpdGVtQ29udGVudEFsaWdubWVudDogVEhvcml6b250YWxBbGlnbm1lbnQgPSAnY2VudGVyJztcbiAgQElucHV0KCkgY2xhc3M6IHN0cmluZztcbiAgQElucHV0KCkgdmFsdWU6IERhdGUgPSBudWxsO1xuICBASW5wdXQoKSBkYXRlRm9ybWF0OiAnTU0vWVlZWScgfCAnREQvTU0vWVlZWScgPSAnREQvTU0vWVlZWSc7XG5cbiAgQElucHV0KCkgbWF4TGVuZ3RoID0gMjU1O1xuICBASW5wdXQoKSBsYWJlbFZhbHVlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxhYmVsQWxpZ25tZW50OiBUSG9yaXpvbnRhbEFsaWdubWVudCA9ICdjZW50ZXInO1xuICBASW5wdXQoKSByZXF1aXJlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgcmVxdWlyZWRGaWVsZDogc3RyaW5nID0gJ1JlcXVpcmVkIGZpZWxkJztcblxuICBAT3V0cHV0KCkgY3VycmVudFZhbHVlOiBFdmVudEVtaXR0ZXI8SURhdGVQaWNrZXJPdXRwdXQgfCBJRGF0ZVBpY2tlck1vbnRoWWVhck91dHB1dD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge31cblxuICBvbkN1cnJlbnRWYWx1ZShldmVudDogSURhdGVQaWNrZXJPdXRwdXQgfCBJRGF0ZVBpY2tlck1vbnRoWWVhck91dHB1dCkge1xuICAgIHRoaXMuY3VycmVudFZhbHVlLmVtaXQoZXZlbnQpO1xuICB9XG5cbn1cbiJdfQ==