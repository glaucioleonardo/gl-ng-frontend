import { IComboBoxData } from 'gl-w-frontend';

export interface IDropdownSettings {
  singleSelection?: boolean;
  idField?: string;
  textField?: string;
  disabledField?: string;
  enableCheckAll?: boolean;
  selectAllText?: string;
  unSelectAllText?: string;
  allowSearchFilter?: boolean;
  clearSearchFilter?: boolean;
  maxHeight?: number;
  itemsShowLimit?: number;
  limitSelection?: number;
  searchPlaceholderText?: string;
  noDataAvailablePlaceholderText?: string;
  closeDropDownOnSelection?: boolean;
  showSelectedItemsAtTop?: boolean;
  defaultOpen?: boolean;
  allowRemoteDataSearch?: boolean;
}

export class ListItem {
  // tslint:disable-next-line
  value: String | number;
  // tslint:disable-next-line
  text: String | number;
  isDisabled?: boolean;

  public constructor(source: any) {
    if (typeof source === 'string' || typeof source === 'number') {
      this.value = this.text = source;
      this.isDisabled = false;
    }
    if (typeof source === 'object') {
      this.value = source.value;
      this.text = source.text;
      this.isDisabled = source.isDisabled;
    }
  }
}
