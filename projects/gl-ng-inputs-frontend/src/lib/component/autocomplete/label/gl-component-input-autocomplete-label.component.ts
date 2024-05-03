import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IComboBoxData } from 'gl-w-combobox-frontend';
import { THorizontalAlignment, TTheme } from '../../../core/interfaces/alignments.interface';
import { GlComponentTitleLabelSimpleComponent } from '../../../../../../gl-ng-titles-frontend/src/lib/component/label/simple/gl-component-title-label-simple.component';
import { GlComponentInputAutocompleteSimpleComponent } from '../simple/gl-component-input-autocomplete-simple.component';

@Component({
    selector: 'gl-component-input-autocomplete-label',
    templateUrl: './gl-component-input-autocomplete-label.component.html',
    styleUrls: ['./gl-component-input-autocomplete-label.component.scss'],
    standalone: true,
    imports: [GlComponentInputAutocompleteSimpleComponent, GlComponentTitleLabelSimpleComponent]
})
export class GlComponentInputAutocompleteLabelComponent {

  @Output() currentValue = new EventEmitter();
  @Input() listItems: IComboBoxData[] = [];

  @Input() disabled = false;
  @Input() listName: string;
  @Input() id: string;
  @Input() labelValue: string;
  @Input() labelAlignment: THorizontalAlignment;
  @Input() placeholder: string;
  @Input() itemContentAlignment: THorizontalAlignment | '';
  @Input() theme: TTheme = '';
  @Input() value;
  @Input() required: boolean;

  @Input() custom: boolean;
  @Input() baseUrl: string;

  @Input() valueField: string;
  @Input() textField: string;
  @Input() requiredField = 'Required field';

  constructor() {}

  onCurrentValue(value): void { this.currentValue.emit(value); }
}
