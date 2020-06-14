import { IComboBoxData } from 'gl-w-frontend/lib/es5/scripts/core/services/combobox/core-services-combobox.interface';
export interface IUpdateOptionList {
    options: IComboBoxData[];
    listName: string;
}
export interface IResetAutocompleteValue {
    comboboxId: string;
}
export interface ISetAutocompleteValue {
    comboboxId: string;
    value: string;
    options: IComboBoxData[];
}
