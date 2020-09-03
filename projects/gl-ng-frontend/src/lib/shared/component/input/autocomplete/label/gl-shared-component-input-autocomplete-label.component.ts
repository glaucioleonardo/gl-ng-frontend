import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IComboBoxData } from "gl-w-frontend";

@Component({
  selector: 'gl-shared-component-input-autocomplete-label',
  templateUrl: './gl-shared-component-input-autocomplete-label.component.html',
  styleUrls: ['./gl-shared-component-input-autocomplete-label.component.scss']
})
export class GlSharedComponentInputAutocompleteLabelComponent {

  @Output() currentValue = new EventEmitter();
  @Input() listItems: IComboBoxData[] = [];

  @Input() disabled = false;
  @Input() listName: string;
  @Input() id: string;
  @Input() labelValue: string;
  @Input() labelAlignment: string;
  @Input() placeholder: string;
  @Input() itemContentAlignment: 'left' | 'center' | 'right' | '';
  @Input() class: string;
  @Input() value;
  @Input() required: boolean;

  @Input() custom: boolean;
  @Input() baseUrl: string;

  @Input() valueField: string;
  @Input() textField: string;
  @Input() requiredField: string = 'Required field';

  constructor() {}

  onCurrentValue(value) { this.currentValue.emit(value); }
}
