import { EventEmitter, OnInit } from '@angular/core';
import { IDatePickerOutput } from '../simple/gl-shared-component-input-datepicker-simple.interface';
import * as ɵngcc0 from '@angular/core';
export declare class GlSharedComponentInputDatepickerLabelComponent implements OnInit {
    disabled: boolean;
    id: string;
    placeholder: string;
    itemContentAlignment: 'left' | 'center' | 'right';
    class: string;
    value: Date;
    dateFormat: string;
    maxLength: number;
    labelValue: string;
    labelAlignment: 'left' | 'center' | 'right';
    required: boolean;
    requiredField: string;
    currentValue: EventEmitter<IDatePickerOutput>;
    constructor();
    ngOnInit(): void;
    onCurrentValue(event: IDatePickerOutput): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GlSharedComponentInputDatepickerLabelComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<GlSharedComponentInputDatepickerLabelComponent, "gl-shared-component-input-datepicker-label", never, { "disabled": "disabled"; "itemContentAlignment": "itemContentAlignment"; "value": "value"; "dateFormat": "dateFormat"; "maxLength": "maxLength"; "labelAlignment": "labelAlignment"; "requiredField": "requiredField"; "id": "id"; "placeholder": "placeholder"; "class": "class"; "labelValue": "labelValue"; "required": "required"; }, { "currentValue": "currentValue"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1kYXRlcGlja2VyLWxhYmVsLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJnbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LWRhdGVwaWNrZXItbGFiZWwuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElEYXRlUGlja2VyT3V0cHV0IH0gZnJvbSAnLi4vc2ltcGxlL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtZGF0ZXBpY2tlci1zaW1wbGUuaW50ZXJmYWNlJztcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRJbnB1dERhdGVwaWNrZXJMYWJlbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBkaXNhYmxlZDogYm9vbGVhbjtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBwbGFjZWhvbGRlcjogc3RyaW5nO1xyXG4gICAgaXRlbUNvbnRlbnRBbGlnbm1lbnQ6ICdsZWZ0JyB8ICdjZW50ZXInIHwgJ3JpZ2h0JztcclxuICAgIGNsYXNzOiBzdHJpbmc7XHJcbiAgICB2YWx1ZTogRGF0ZTtcclxuICAgIGRhdGVGb3JtYXQ6IHN0cmluZztcclxuICAgIG1heExlbmd0aDogbnVtYmVyO1xyXG4gICAgbGFiZWxWYWx1ZTogc3RyaW5nO1xyXG4gICAgbGFiZWxBbGlnbm1lbnQ6ICdsZWZ0JyB8ICdjZW50ZXInIHwgJ3JpZ2h0JztcclxuICAgIHJlcXVpcmVkOiBib29sZWFuO1xyXG4gICAgcmVxdWlyZWRGaWVsZDogc3RyaW5nO1xyXG4gICAgY3VycmVudFZhbHVlOiBFdmVudEVtaXR0ZXI8SURhdGVQaWNrZXJPdXRwdXQ+O1xyXG4gICAgY29uc3RydWN0b3IoKTtcclxuICAgIG5nT25Jbml0KCk6IHZvaWQ7XHJcbiAgICBvbkN1cnJlbnRWYWx1ZShldmVudDogSURhdGVQaWNrZXJPdXRwdXQpOiB2b2lkO1xyXG59XHJcbiJdfQ==