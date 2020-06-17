import { EventEmitter } from '@angular/core';
import { IComboBoxData } from 'gl-w-frontend/lib/es5/scripts/core/services/combobox/core-services-combobox.interface';
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
}
