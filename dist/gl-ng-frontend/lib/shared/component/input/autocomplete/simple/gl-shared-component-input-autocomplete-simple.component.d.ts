import { Overlay } from '@angular/cdk/overlay';
import { ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { GlSharedComponentInputAutocompleteSimpleService } from './gl-shared-component-input-autocomplete-simple.service';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { IComboBoxData } from 'gl-w-frontend/lib/es5/scripts/core/services/combobox/core-services-combobox.interface';
import * as ɵngcc0 from '@angular/core';
export declare class GlSharedComponentInputAutocompleteSimpleComponent implements OnInit, OnDestroy, OnChanges {
    private _service;
    overlay: Overlay;
    input: ElementRef<HTMLInputElement>;
    currentValue: EventEmitter<IComboBoxData>;
    listItems: IComboBoxData[];
    disabled: boolean;
    listName: string;
    id: string;
    placeholder: string;
    itemContentAlignment: 'left' | 'center' | 'right' | '';
    class: string;
    value: string;
    maxLength: string;
    custom: boolean;
    baseUrl: string;
    valueField: string;
    textField: string;
    labelValue: string;
    labelAlignment: string;
    required: boolean;
    requiredField: string;
    private _loaded;
    readonly imageSource = "../assets/img/icon/drop-down/arrow-down.svg";
    autocompleteInput: FormControl;
    filteredOptions: Observable<IComboBoxData[]>;
    constructor(_service: GlSharedComponentInputAutocompleteSimpleService, overlay: Overlay);
    ngOnInit(): Promise<void>;
    private setup;
    private filter;
    validate(): void;
    reset(auto: MatAutocomplete, event: Event): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GlSharedComponentInputAutocompleteSimpleComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<GlSharedComponentInputAutocompleteSimpleComponent, "gl-shared-component-input-autocomplete-simple", never, { "listItems": "listItems"; "class": "class"; "maxLength": "maxLength"; "value": "value"; "disabled": "disabled"; "listName": "listName"; "id": "id"; "placeholder": "placeholder"; "itemContentAlignment": "itemContentAlignment"; "custom": "custom"; "baseUrl": "baseUrl"; "valueField": "valueField"; "textField": "textField"; "labelValue": "labelValue"; "labelAlignment": "labelAlignment"; "required": "required"; "requiredField": "requiredField"; }, { "currentValue": "currentValue"; }, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1hdXRvY29tcGxldGUtc2ltcGxlLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJnbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LWF1dG9jb21wbGV0ZS1zaW1wbGUuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3ZlcmxheSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEdsU2hhcmVkQ29tcG9uZW50SW5wdXRBdXRvY29tcGxldGVTaW1wbGVTZXJ2aWNlIH0gZnJvbSAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LWF1dG9jb21wbGV0ZS1zaW1wbGUuc2VydmljZSc7XHJcbmltcG9ydCB7IE1hdEF1dG9jb21wbGV0ZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2F1dG9jb21wbGV0ZSc7XHJcbmltcG9ydCB7IElDb21ib0JveERhdGEgfSBmcm9tICdnbC13LWZyb250ZW5kL2xpYi9lczUvc2NyaXB0cy9jb3JlL3NlcnZpY2VzL2NvbWJvYm94L2NvcmUtc2VydmljZXMtY29tYm9ib3guaW50ZXJmYWNlJztcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRJbnB1dEF1dG9jb21wbGV0ZVNpbXBsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG4gICAgcHJpdmF0ZSBfc2VydmljZTtcclxuICAgIG92ZXJsYXk6IE92ZXJsYXk7XHJcbiAgICBpbnB1dDogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PjtcclxuICAgIGN1cnJlbnRWYWx1ZTogRXZlbnRFbWl0dGVyPElDb21ib0JveERhdGE+O1xyXG4gICAgbGlzdEl0ZW1zOiBJQ29tYm9Cb3hEYXRhW107XHJcbiAgICBkaXNhYmxlZDogYm9vbGVhbjtcclxuICAgIGxpc3ROYW1lOiBzdHJpbmc7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgcGxhY2Vob2xkZXI6IHN0cmluZztcclxuICAgIGl0ZW1Db250ZW50QWxpZ25tZW50OiAnbGVmdCcgfCAnY2VudGVyJyB8ICdyaWdodCcgfCAnJztcclxuICAgIGNsYXNzOiBzdHJpbmc7XHJcbiAgICB2YWx1ZTogc3RyaW5nO1xyXG4gICAgbWF4TGVuZ3RoOiBzdHJpbmc7XHJcbiAgICBjdXN0b206IGJvb2xlYW47XHJcbiAgICBiYXNlVXJsOiBzdHJpbmc7XHJcbiAgICB2YWx1ZUZpZWxkOiBzdHJpbmc7XHJcbiAgICB0ZXh0RmllbGQ6IHN0cmluZztcclxuICAgIGxhYmVsVmFsdWU6IHN0cmluZztcclxuICAgIGxhYmVsQWxpZ25tZW50OiBzdHJpbmc7XHJcbiAgICByZXF1aXJlZDogYm9vbGVhbjtcclxuICAgIHJlcXVpcmVkRmllbGQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgX2xvYWRlZDtcclxuICAgIHJlYWRvbmx5IGltYWdlU291cmNlID0gXCIuLi9hc3NldHMvaW1nL2ljb24vZHJvcC1kb3duL2Fycm93LWRvd24uc3ZnXCI7XHJcbiAgICBhdXRvY29tcGxldGVJbnB1dDogRm9ybUNvbnRyb2w7XHJcbiAgICBmaWx0ZXJlZE9wdGlvbnM6IE9ic2VydmFibGU8SUNvbWJvQm94RGF0YVtdPjtcclxuICAgIGNvbnN0cnVjdG9yKF9zZXJ2aWNlOiBHbFNoYXJlZENvbXBvbmVudElucHV0QXV0b2NvbXBsZXRlU2ltcGxlU2VydmljZSwgb3ZlcmxheTogT3ZlcmxheSk7XHJcbiAgICBuZ09uSW5pdCgpOiBQcm9taXNlPHZvaWQ+O1xyXG4gICAgcHJpdmF0ZSBzZXR1cDtcclxuICAgIHByaXZhdGUgZmlsdGVyO1xyXG4gICAgdmFsaWRhdGUoKTogdm9pZDtcclxuICAgIHJlc2V0KGF1dG86IE1hdEF1dG9jb21wbGV0ZSwgZXZlbnQ6IEV2ZW50KTogdm9pZDtcclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZDtcclxufVxyXG4iXX0=