import { Component, HostListener, forwardRef, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { CorePipesListFilterPipe } from '../../../core/pipes/list-filter/core-pipes-list-filter.pipe';
import { IDropdownSettings, ListItem } from './gl-component-input-dropdown-simple.model';

export const DROPDOWN_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => GlComponentInputDropdownSimpleComponent),
  multi: true
};
const noop = () => {};

@Component({
  selector: 'gl-component-input-dropdown-simple',
  templateUrl: './gl-component-input-dropdown-simple.component.html',
  styleUrls: ['./gl-component-input-dropdown-simple.component.scss'],
  providers: [DROPDOWN_CONTROL_VALUE_ACCESSOR],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GlComponentInputDropdownSimpleComponent implements ControlValueAccessor {
  readonly imageSource = '../assets/img/icon/drop-down/arrow-down.svg';
  _settings: IDropdownSettings;
  _data: ListItem[] = [];
  isDropdownOpen = true;
  _placeholder = 'Select';
  selectedItems: ListItem[] = [];

  private _sourceDataType = null; // to keep note of the source data type. could be array of string/number/object
  // tslint:disable-next-line:ban-types
  private _sourceDataFields: String[] = []; // store source data fields names
  filter: ListItem = new ListItem(this.data);
  defaultSettings: IDropdownSettings = {
    singleSelection: true,
    idField: 'value',
    textField: 'text',
    disabledField: 'isDisabled',
    enableCheckAll: true,
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    allowSearchFilter: true,
    limitSelection: -1,
    clearSearchFilter: true,
    maxHeight: 197,
    itemsShowLimit: 999999999999,
    searchPlaceholderText: 'Search',
    noDataAvailablePlaceholderText: 'No data available',
    closeDropDownOnSelection: true,
    showSelectedItemsAtTop: true,
    defaultOpen: false,
    allowRemoteDataSearch: false
  };

  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  @Input()
  public set placeholder(value: string) {
    if (value) {
      this._placeholder = value;
    } else {
      this._placeholder = 'Select';
    }
  }

  @Input() disabled = false;

  @Input()
  public set settings(value: IDropdownSettings) {
    if (value) {
      this._settings = Object.assign(this.defaultSettings, value);
    } else {
      this._settings = Object.assign(this.defaultSettings);
    }
  }

  @Input()
  public set selected(value: ListItem[]) {
    const single = this.defaultSettings.singleSelection || this._settings.singleSelection;

    if (value == null || value.length === 0) {
      this.selectedItems = [];
    } else {
      if (single) {
        this.selectedItems.push(value[0]);
      } else {
        this.selectedItems = value;
      }
    }
  }

  @Input()
  public set data(value: ListItem[]) {
    if (!value) {
      this._data = [];
    } else {
      const firstItem = value[0];
      this._sourceDataType = typeof firstItem;
      this._sourceDataFields = this.getFields(firstItem);
      this._data = value.map((item: any) =>
        typeof item === 'string' || typeof item === 'number'
          ? new ListItem(item)
          : new ListItem({
            value: item[this._settings.idField],
            text: item[this._settings.textField],
            isDisabled: item[this._settings.disabledField]
          })
      );
    }
  }

  @Output() $filterChange: EventEmitter<ListItem> = new EventEmitter<any>();
  @Output() $dropDownClose: EventEmitter<ListItem> = new EventEmitter<any>();
  @Output() $select: EventEmitter<ListItem> = new EventEmitter<any>();
  @Output() $deselect: EventEmitter<ListItem> = new EventEmitter<any>();
  @Output() $selectAll: EventEmitter<ListItem[]> = new EventEmitter<any[]>();
  @Output() $deselectAll: EventEmitter<ListItem[]> = new EventEmitter<any[]>();

  constructor(private listFilterPipe: CorePipesListFilterPipe) {}

  onFilterTextChange($event): void {
    this.$filterChange.emit($event);
  }

  // region Actions
  onItemClick($event: any, item: ListItem): void | boolean {
    if (this.disabled || item.isDisabled) {
      return false;
    }

    const found = this.isSelected(item);
    const allowAdd = this._settings.limitSelection === -1 || (this._settings.limitSelection > 0 && this.selectedItems.length < this._settings.limitSelection);

    if (!found) {
      if (allowAdd) {
        this.addSelected(item);
      }
    } else {
      this.removeSelected(item);
    }

    if (this._settings.singleSelection && this._settings.closeDropDownOnSelection) {
      this.closeDropdown();
    }
  }
  toggleDropdown(evt): void | boolean {
    evt.preventDefault();
    if (this.disabled && this._settings.singleSelection) {
      return false;
    }
    this._settings.defaultOpen = !this._settings.defaultOpen;
    if (!this._settings.defaultOpen) {
      this.$dropDownClose.emit();
    }
  }
  closeDropdown(): void {
    this._settings.defaultOpen = false;
    // clear search text
    if (this._settings.clearSearchFilter) {
      this.filter.text = '';
    }
    this.$dropDownClose.emit();
  }
  toggleSelectAll(): void {
    if (this.disabled) {
      return;
    }
    if (!this.isAllItemsSelected()) {
      // filter out disabled item first before slicing
      this.selectedItems = this.listFilterPipe.transform(this._data, this.filter).filter(item => !item.isDisabled).slice();
      this.$selectAll.emit(this.emittedValue(this.selectedItems));
    } else {
      this.selectedItems = [];
      this.$deselectAll.emit(this.emittedValue(this.selectedItems));
    }
    this.onChangeCallback(this.emittedValue(this.selectedItems));
  }
  emittedValue(val: any): any {
    const selected = [];
    if (Array.isArray(val)) {
      val.map(item => {
        selected.push(this.objectify(item));
      });
    } else {
      if (val) {
        return this.objectify(val);
      }
    }
    return selected;
  }
  showButton(): boolean {
    if (!this._settings.singleSelection) {
      if (this._settings.limitSelection > 0) {
        return false;
      }
      // this._settings.enableCheckAll = this._settings.limitSelection === -1 ? true : false;
      return true; // !this._settings.singleSelection && this._settings.enableCheckAll && this._data.length > 0;
    } else {
      // should be disabled in single selection mode
      return false;
    }
  }

  addSelected(item: ListItem): void {
    if (this._settings.singleSelection) {
      this.selectedItems = [];
      this.selectedItems.push(item);
    } else {
      this.selectedItems.push(item);
    }
    this.onChangeCallback(this.emittedValue(this.selectedItems));
    this.$select.emit(this.emittedValue(item));
  }
  removeSelected(itemSel: ListItem): void {
    this.selectedItems.forEach(item => {
      if (itemSel.value === item.value) {
        this.selectedItems.splice(this.selectedItems.indexOf(item), 1);
      }
    });
    this.onChangeCallback(this.emittedValue(this.selectedItems));
    this.$deselect.emit(this.emittedValue(itemSel));
  }
  // endregion

  // region ControlValueAccessor
  writeValue(value: any): void {
    if (value !== undefined && value !== null && value.length > 0) {
      if (this._settings.singleSelection) {
        try {
          if (value.length >= 1) {
            const firstItem = value[0];
            this.selectedItems = [
              typeof firstItem === 'string' || typeof firstItem === 'number'
                ? new ListItem(firstItem)
                : new ListItem({
                  value: firstItem[this._settings.idField],
                  text: firstItem[this._settings.textField],
                  isDisabled: firstItem[this._settings.disabledField]
                })
            ];
          }
        } catch (e) {
          // console.error(e.body.msg);
        }
      } else {
        const _data = value.map((item: any) =>
          typeof item === 'string' || typeof item === 'number'
            ? new ListItem(item)
            : new ListItem({
              value: item[this._settings.idField],
              text: item[this._settings.textField],
              isDisabled: item[this._settings.disabledField]
            })
        );
        if (this._settings.limitSelection > 0) {
          this.selectedItems = _data.splice(0, this._settings.limitSelection);
        } else {
          this.selectedItems = _data;
        }
      }
    } else {
      this.selectedItems = [];
    }
    this.onChangeCallback(value);
  }

  // From ControlValueAccessor interface
  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  // From ControlValueAccessor interface
  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }
  // endregion

  // Set touched on blur
  @HostListener('blur')
  onTouched(): void {
    this.closeDropdown();
    this.onTouchedCallback();
  }

  // region Parse
  itemShowRemaining(): number {
    return this.selectedItems.length - this._settings.itemsShowLimit;
  }
  isSelected(clickedItem: ListItem): boolean {
    let found = false;
    this.selectedItems.forEach(item => {
      if (clickedItem.value === item.value) {
        found = true;
      }
    });
    return found;
  }
  isLimitSelectionReached(): boolean {
    return this._settings.limitSelection === this.selectedItems.length;
  }
  isAllItemsSelected(): boolean {
    // get disabled item count
    const filteredItems = this.listFilterPipe.transform(this._data, this.filter);
    const itemDisabledCount = filteredItems.filter(item => item.isDisabled).length;

    // take disabled items into consideration when checking
    if ((!this.data || this.data.length === 0) && this._settings.allowRemoteDataSearch) {
      return false;
    }
    return filteredItems.length === this.selectedItems.length + itemDisabledCount;
  }
  objectify(val: ListItem): string | number | object {
    if (this._sourceDataType === 'object') {
      const obj = {};
      obj[this._settings.idField] = val.value;
      obj[this._settings.textField] = val.text;
      if (this._sourceDataFields.includes(this._settings.disabledField)) {
        obj[this._settings.disabledField] = val.isDisabled;
      }
      return obj;
    }
    if (this._sourceDataType === 'number') {
      return Number(val.value);
    } else {
      return val.text;
    }
  }
  // endregion

  trackByFn(index, item): string | number {
    return item.value;
  }

  getFields(inputData): any[] {
    const fields = [];
    if (typeof inputData !== 'object') {
      return fields;
    }
    // tslint:disable-next-line:forin
    for (const prop in inputData) {
      fields.push(prop);
    }
    return fields;
  }
}
