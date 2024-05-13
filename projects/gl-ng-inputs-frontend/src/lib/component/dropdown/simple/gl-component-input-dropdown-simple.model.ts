export interface IDropdownSettings {
  singleSelection?: boolean;
  idField?: string;
  textField?: string;
  iconField?: string;
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
  id: number;
  value: String | number;
  text: String | number;
  isDisabled?: boolean;
  icon?: string;

  public constructor(source: any) {
    if (typeof source === 'string' || typeof source === 'number') {
      this.value = this.text = source;
      this.isDisabled = false;
      this.icon = '';
    }
    if (typeof source === 'object') {
      this.value = source.value;
      this.text = source.text;
      this.isDisabled = source.isDisabled;
      this.icon = source.icon;
    }
  }
}
