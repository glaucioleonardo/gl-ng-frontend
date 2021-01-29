import { IComboBoxData } from "gl-w-frontend";
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
//# sourceMappingURL=gl-shared-component-input-autocomplete-simple.interface.d.ts.map