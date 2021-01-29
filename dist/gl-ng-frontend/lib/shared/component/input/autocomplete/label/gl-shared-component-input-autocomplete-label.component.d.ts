import { EventEmitter } from '@angular/core';
import { IComboBoxData } from "gl-w-frontend";
import { THorizontalAlignment } from '../../../title/label/simple/gl-shared-component-title-label-simple.interface';
export declare class GlSharedComponentInputAutocompleteLabelComponent {
    currentValue: EventEmitter<any>;
    listItems: IComboBoxData[];
    disabled: boolean;
    listName: string;
    id: string;
    labelValue: string;
    labelAlignment: THorizontalAlignment;
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
//# sourceMappingURL=gl-shared-component-input-autocomplete-label.component.d.ts.map