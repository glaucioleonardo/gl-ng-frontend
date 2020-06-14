import { ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { GlSharedComponentInputAutocompleteSimpleService } from './gl-shared-component-input-autocomplete-simple.service';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { IComboBoxData } from 'gl-w-frontend/lib/es5/scripts/core/services/combobox/core-services-combobox.interface';
import * as ɵngcc0 from '@angular/core';
export declare class GlSharedComponentInputAutocompleteSimpleComponent implements OnInit, OnDestroy, OnChanges {
    private _service;
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
    constructor(_service: GlSharedComponentInputAutocompleteSimpleService);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1hdXRvY29tcGxldGUtc2ltcGxlLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJnbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LWF1dG9jb21wbGV0ZS1zaW1wbGUuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgR2xTaGFyZWRDb21wb25lbnRJbnB1dEF1dG9jb21wbGV0ZVNpbXBsZVNlcnZpY2UgfSBmcm9tICcuL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtYXV0b2NvbXBsZXRlLXNpbXBsZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWF0QXV0b2NvbXBsZXRlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlJztcclxuaW1wb3J0IHsgSUNvbWJvQm94RGF0YSB9IGZyb20gJ2dsLXctZnJvbnRlbmQvbGliL2VzNS9zY3JpcHRzL2NvcmUvc2VydmljZXMvY29tYm9ib3gvY29yZS1zZXJ2aWNlcy1jb21ib2JveC5pbnRlcmZhY2UnO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBHbFNoYXJlZENvbXBvbmVudElucHV0QXV0b2NvbXBsZXRlU2ltcGxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XHJcbiAgICBwcml2YXRlIF9zZXJ2aWNlO1xyXG4gICAgaW5wdXQ6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XHJcbiAgICBjdXJyZW50VmFsdWU6IEV2ZW50RW1pdHRlcjxJQ29tYm9Cb3hEYXRhPjtcclxuICAgIGxpc3RJdGVtczogSUNvbWJvQm94RGF0YVtdO1xyXG4gICAgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgICBsaXN0TmFtZTogc3RyaW5nO1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIHBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcbiAgICBpdGVtQ29udGVudEFsaWdubWVudDogJ2xlZnQnIHwgJ2NlbnRlcicgfCAncmlnaHQnIHwgJyc7XHJcbiAgICBjbGFzczogc3RyaW5nO1xyXG4gICAgdmFsdWU6IHN0cmluZztcclxuICAgIG1heExlbmd0aDogc3RyaW5nO1xyXG4gICAgY3VzdG9tOiBib29sZWFuO1xyXG4gICAgYmFzZVVybDogc3RyaW5nO1xyXG4gICAgdmFsdWVGaWVsZDogc3RyaW5nO1xyXG4gICAgdGV4dEZpZWxkOiBzdHJpbmc7XHJcbiAgICBsYWJlbFZhbHVlOiBzdHJpbmc7XHJcbiAgICBsYWJlbEFsaWdubWVudDogc3RyaW5nO1xyXG4gICAgcmVxdWlyZWQ6IGJvb2xlYW47XHJcbiAgICByZXF1aXJlZEZpZWxkOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9sb2FkZWQ7XHJcbiAgICByZWFkb25seSBpbWFnZVNvdXJjZSA9IFwiLi4vYXNzZXRzL2ltZy9pY29uL2Ryb3AtZG93bi9hcnJvdy1kb3duLnN2Z1wiO1xyXG4gICAgYXV0b2NvbXBsZXRlSW5wdXQ6IEZvcm1Db250cm9sO1xyXG4gICAgZmlsdGVyZWRPcHRpb25zOiBPYnNlcnZhYmxlPElDb21ib0JveERhdGFbXT47XHJcbiAgICBjb25zdHJ1Y3Rvcihfc2VydmljZTogR2xTaGFyZWRDb21wb25lbnRJbnB1dEF1dG9jb21wbGV0ZVNpbXBsZVNlcnZpY2UpO1xyXG4gICAgbmdPbkluaXQoKTogUHJvbWlzZTx2b2lkPjtcclxuICAgIHByaXZhdGUgc2V0dXA7XHJcbiAgICBwcml2YXRlIGZpbHRlcjtcclxuICAgIHZhbGlkYXRlKCk6IHZvaWQ7XHJcbiAgICByZXNldChhdXRvOiBNYXRBdXRvY29tcGxldGUsIGV2ZW50OiBFdmVudCk6IHZvaWQ7XHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XHJcbn1cclxuIl19