import {Component, EventEmitter, Input, Output} from '@angular/core';
import { TCurrencySymbolTypes, TDecimalSeparators } from 'gl-w-frontend';
import { THorizontalAlignment, TTheme } from '../../../../../core/interfaces/alignments.interface';
import { TInputTextMask, TInputType } from '../../../simple/gl-component-input-text-simple.interface';

@Component({
  selector: 'gl-component-input-text-label-button-container',
  templateUrl: './gl-component-input-text-label-button-container.component.html',
  styleUrls: ['./gl-component-input-text-label-button-container.component.scss']
})
export class GlComponentInputTextLabelButtonContainerComponent {
  @Input() disabled = false;
  @Input() autocomplete = false;
  @Input() id: string;
  @Input() labelAlignment: THorizontalAlignment;
  @Input() labelValue: string;
  @Input() placeholder: string;
  @Input() itemContentAlignment: THorizontalAlignment;
  @Input() theme: TTheme = '';
  @Input() value: string = null;
  @Input() type: TInputType = 'text';

  @Input() mask: TInputTextMask;
  @Input() decimalSeparator: TDecimalSeparators = ',';
  @Input() maskSymbol: TCurrencySymbolTypes;
  @Input() allowMinus = true;
  @Input() rightAlign = true;
  @Input() step = 5;

  @Input() maxLength = 255;
  @Input() required: boolean;

  @Input() requiredLabel = 'Required field';

  @Output() currentValue = new EventEmitter();

  constructor() { }

  onKeyUp(values): void {
    this.currentValue.emit(values);
  }
}
