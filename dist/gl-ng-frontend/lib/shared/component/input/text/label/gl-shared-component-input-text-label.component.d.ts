import { EventEmitter } from '@angular/core';
import { ICurrencyTypes } from "gl-w-frontend";
import * as ɵngcc0 from '@angular/core';
export declare class GlSharedComponentInputTextLabelComponent {
    disabled: boolean;
    autocomplete: boolean;
    id: string;
    labelAlignment: string;
    labelValue: string;
    placeholder: string;
    itemContentAlignment: string;
    class: string;
    value: string;
    mask: string | ICurrencyTypes;
    maskSymbol: string;
    maxLength: number;
    required: boolean;
    requiredLabel: string;
    currentValue: EventEmitter<any>;
    constructor();
    onKeyUp(values: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GlSharedComponentInputTextLabelComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<GlSharedComponentInputTextLabelComponent, "gl-shared-component-input-text-label", never, { "disabled": "disabled"; "autocomplete": "autocomplete"; "value": "value"; "maxLength": "maxLength"; "requiredLabel": "requiredLabel"; "id": "id"; "labelAlignment": "labelAlignment"; "labelValue": "labelValue"; "placeholder": "placeholder"; "itemContentAlignment": "itemContentAlignment"; "class": "class"; "mask": "mask"; "maskSymbol": "maskSymbol"; "required": "required"; }, { "currentValue": "currentValue"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LWxhYmVsLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJnbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LXRleHQtbGFiZWwuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElDdXJyZW5jeVR5cGVzIH0gZnJvbSBcImdsLXctZnJvbnRlbmRcIjtcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRJbnB1dFRleHRMYWJlbENvbXBvbmVudCB7XHJcbiAgICBkaXNhYmxlZDogYm9vbGVhbjtcclxuICAgIGF1dG9jb21wbGV0ZTogYm9vbGVhbjtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBsYWJlbEFsaWdubWVudDogc3RyaW5nO1xyXG4gICAgbGFiZWxWYWx1ZTogc3RyaW5nO1xyXG4gICAgcGxhY2Vob2xkZXI6IHN0cmluZztcclxuICAgIGl0ZW1Db250ZW50QWxpZ25tZW50OiBzdHJpbmc7XHJcbiAgICBjbGFzczogc3RyaW5nO1xyXG4gICAgdmFsdWU6IHN0cmluZztcclxuICAgIG1hc2s6IHN0cmluZyB8IElDdXJyZW5jeVR5cGVzO1xyXG4gICAgbWFza1N5bWJvbDogc3RyaW5nO1xyXG4gICAgbWF4TGVuZ3RoOiBudW1iZXI7XHJcbiAgICByZXF1aXJlZDogYm9vbGVhbjtcclxuICAgIHJlcXVpcmVkTGFiZWw6IHN0cmluZztcclxuICAgIGN1cnJlbnRWYWx1ZTogRXZlbnRFbWl0dGVyPGFueT47XHJcbiAgICBjb25zdHJ1Y3RvcigpO1xyXG4gICAgb25LZXlVcCh2YWx1ZXM6IGFueSk6IHZvaWQ7XHJcbn1cclxuIl19