import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TCurrencySymbolTypes, TDecimalSeparators } from 'gl-w-number-frontend';
import { THorizontalAlignment, TTheme } from '../../../../core/interfaces/alignments.interface';
import { TInputTextMask, TInputType } from '../../simple/gl-component-input-text-simple.interface';

@Component({
  selector: 'gl-component-input-text-label-simple',
  templateUrl: './gl-component-input-text-label-simple.component.html',
  styleUrls: ['./gl-component-input-text-label-simple.component.scss']
})
export class GlComponentInputTextLabelSimpleComponent {
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

  @Input() allowMinus = true;
  @Input() rightAlign = true;
  @Input() step = 5;

  @Input() mask: TInputTextMask;
  @Input() decimalSeparator: TDecimalSeparators = ',';
  @Input() maskSymbol: TCurrencySymbolTypes;
  @Input() maxLength = 255;
  @Input() required: boolean;

  @Input() requiredLabel = 'Required field';

  @Output() currentValue = new EventEmitter();

  constructor() { }

  onKeyUp(values): void {
    this.currentValue.emit(values);
  }
}
