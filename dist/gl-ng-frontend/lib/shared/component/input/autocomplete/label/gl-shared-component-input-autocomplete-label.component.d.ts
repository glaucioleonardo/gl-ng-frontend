import { EventEmitter } from '@angular/core';
import { IComboBoxData } from "gl-w-frontend";
import * as ɵngcc0 from '@angular/core';
export declare class GlSharedComponentInputAutocompleteLabelComponent {
    currentValue: EventEmitter<any>;
    listItems: IComboBoxData[];
    disabled: boolean;
    listName: string;
    id: string;
    labelValue: string;
    labelAlignment: string;
    placeholder: string;
    itemContentAlignment: 'left' | 'center' | 'right' | '';
    class: string;
    value: any;
    required: boolean;
    custom: boolean;
    baseUrl: string;
    valueField: string;
    textField: string;
    requiredField: string;
    constructor();
    onCurrentValue(value: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GlSharedComponentInputAutocompleteLabelComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<GlSharedComponentInputAutocompleteLabelComponent, "gl-shared-component-input-autocomplete-label", never, { "listItems": "listItems"; "disabled": "disabled"; "requiredField": "requiredField"; "listName": "listName"; "id": "id"; "labelValue": "labelValue"; "labelAlignment": "labelAlignment"; "placeholder": "placeholder"; "itemContentAlignment": "itemContentAlignment"; "class": "class"; "value": "value"; "required": "required"; "custom": "custom"; "baseUrl": "baseUrl"; "valueField": "valueField"; "textField": "textField"; }, { "currentValue": "currentValue"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1hdXRvY29tcGxldGUtbGFiZWwuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImdsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtYXV0b2NvbXBsZXRlLWxhYmVsLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSUNvbWJvQm94RGF0YSB9IGZyb20gXCJnbC13LWZyb250ZW5kXCI7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50SW5wdXRBdXRvY29tcGxldGVMYWJlbENvbXBvbmVudCB7XHJcbiAgICBjdXJyZW50VmFsdWU6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG4gICAgbGlzdEl0ZW1zOiBJQ29tYm9Cb3hEYXRhW107XHJcbiAgICBkaXNhYmxlZDogYm9vbGVhbjtcclxuICAgIGxpc3ROYW1lOiBzdHJpbmc7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgbGFiZWxWYWx1ZTogc3RyaW5nO1xyXG4gICAgbGFiZWxBbGlnbm1lbnQ6IHN0cmluZztcclxuICAgIHBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcbiAgICBpdGVtQ29udGVudEFsaWdubWVudDogJ2xlZnQnIHwgJ2NlbnRlcicgfCAncmlnaHQnIHwgJyc7XHJcbiAgICBjbGFzczogc3RyaW5nO1xyXG4gICAgdmFsdWU6IGFueTtcclxuICAgIHJlcXVpcmVkOiBib29sZWFuO1xyXG4gICAgY3VzdG9tOiBib29sZWFuO1xyXG4gICAgYmFzZVVybDogc3RyaW5nO1xyXG4gICAgdmFsdWVGaWVsZDogc3RyaW5nO1xyXG4gICAgdGV4dEZpZWxkOiBzdHJpbmc7XHJcbiAgICByZXF1aXJlZEZpZWxkOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3RvcigpO1xyXG4gICAgb25DdXJyZW50VmFsdWUodmFsdWU6IGFueSk6IHZvaWQ7XHJcbn1cclxuIl19