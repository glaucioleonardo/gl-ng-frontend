import { Overlay } from '@angular/cdk/overlay';
import { Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { IComboBoxData } from 'gl-w-frontend';
import { THorizontalAlignment } from '../../../title/label/simple/gl-shared-component-title-label-simple.interface';
import { GlSharedComponentInputAutocompleteSimpleService } from './gl-shared-component-input-autocomplete-simple.service';

@Component({
  selector: 'gl-shared-component-input-autocomplete-simple',
  templateUrl: './gl-shared-component-input-autocomplete-simple.component.html',
  styleUrls: ['./gl-shared-component-input-autocomplete-simple.component.scss']
})
export class GlSharedComponentInputAutocompleteSimpleComponent implements OnInit, OnDestroy, OnChanges {
  @ViewChild('input') input: ElementRef<HTMLInputElement>;

  @Output() currentValue = new EventEmitter<IComboBoxData>();
  @Input() listItems: IComboBoxData[] = [];

  @Input() disabled: boolean;
  @Input() listName: string;
  @Input() id: string;
  @Input() placeholder: string;
  @Input() itemContentAlignment: THorizontalAlignment | '';
  @Input() class = '';
  @Input() value: string;
  @Input() maxLength = '255';

  @Input() custom: boolean;
  @Input() baseUrl: string;

  @Input() valueField: string;
  @Input() textField: string;

  @Input() labelValue: string;
  @Input() labelAlignment: THorizontalAlignment;
  @Input() required: boolean;
  @Input() requiredField: string;

  private _loaded = false;
  readonly imageSource = '../assets/img/icon/drop-down/arrow-down.svg';
  readonly clearSource = '../assets/img/icon/drop-down/clear.svg';
  autocompleteInput = new FormControl();
  filteredOptions: Observable<IComboBoxData[]>;

  constructor(private _service: GlSharedComponentInputAutocompleteSimpleService, public overlay: Overlay) {
    _service.autocompleteList$.subscribe(update => {
      if (this.listName === update.listName) {
        this.listItems = update.options;
        this.setup();
      }
    });
    _service.autocompleteReset$.subscribe(update => {
      if (this.id === update.comboboxId) {
        this.input.nativeElement.value = '';
        this.validate();
      }
    });
    _service.autocompleteLoaded$.subscribe(loaded => {
      this._loaded = loaded;
      _service.autocompleteLoaded$.observers.map(x => x.complete());
    });
    _service.autocompleteUpdateValue$.subscribe(update => {
      if (this.id === update.comboboxId) {
        this.listItems = update.options;
        const value = update.options.filter(x => x.value === update.value);
        const input = this.input.nativeElement;

        if (value != null && value.length > 0) {
          input.value = value[0].text;
          this.autocompleteInput.setValue(value[0].text);
          this.value = value[0].value;
          this.setup();
        } else {
          input.value = '';
          this.autocompleteInput.setValue('');
          this.value = '';
          this.setup();
        }
      }
    });
  }

  async ngOnInit() {
    this.setup();
  }

  private setup() {
    this.filteredOptions = this.autocompleteInput.valueChanges.pipe(
      startWith(''),
      // startWith(this.value),
      map(value => this.filter(value))
    );

    // if (!this._loaded) { this.autocompleteInput.setValue(this.value); }
    // this.autocompleteInput.setValue(this.value);
    setTimeout(() => { this.validate(); });
  }
  private filter(value: string): IComboBoxData[] {
    if (value == null) { value = ''; }

    const filterValue = value.toLowerCase();
    return this.listItems.filter(option => option.text?.toLowerCase().includes(filterValue));
  }

  validate() {
    const input: HTMLInputElement = this.input.nativeElement;
    const value: string = input.value;
    const filteredData = this.filter(value);

    if (value != null && value.trim().length > 0 && filteredData.length > 0) {
      input.value = filteredData[0].text;
      this.autocompleteInput.setValue(filteredData[0].text);
      this.currentValue.emit({ text: filteredData[0].text, value: filteredData[0].value });
    } else {
      input.value = '';
      this.autocompleteInput.setValue('');
      this.currentValue.emit({ text: null, value: null });
    }
  }

  reset(auto: MatAutocomplete, event: Event) {
    if (auto.options != null) { auto.options.map(option => option.deselect()); }
    (event.currentTarget as HTMLInputElement).select();
  }

  clearItems(input: HTMLInputElement) {
    input.value = null;
    this.autocompleteInput.setValue(null);
    this.currentValue.emit({ text: null, value: null });
    setTimeout(() => {
      input.click();
    }, 100);
  }

  arrowClick() {
    this.autocompleteInput.reset();
    this.autocompleteInput.setValue('');
  }

  ngOnDestroy(): void {
    this._service.autocompleteList$.observers.map(x => x.complete());
    this._service.autocompleteReset$.observers.map(x => x.complete());
    this._service.autocompleteLoaded$.observers.map(x => x.complete());
  }

  ngOnChanges(changes: SimpleChanges): void {
    const prevList = changes.listItems?.previousValue;
    const currList = changes.listItems?.currentValue;

    const prevValue = changes.value?.previousValue;
    const currValue = changes.value?.currentValue;

    // tslint:disable-next-line:triple-equals
    if (prevList != currList) { this.setup(); }
    // tslint:disable-next-line:triple-equals
    if (prevValue != currValue) { this.setup(); }

    this.overlay.position().global().dispose();

    // if (prevList != currList || prevValue != currValue) { this.setup(); }
  }
}
