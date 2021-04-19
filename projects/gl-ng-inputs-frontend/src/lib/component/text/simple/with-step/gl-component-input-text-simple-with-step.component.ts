import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StringConverter, TCurrencySymbolTypes, TDecimalSeparators } from 'gl-w-frontend';
import { THorizontalAlignment, TTheme } from '../../../../core/interfaces/alignments.interface';
import { IInputTextStepButton, TStepType } from './gl-component-input-text-simple-with-step.interface';
import { TInputTextMask, TInputType } from '../gl-component-input-text-simple.interface';

@Component({
  selector: 'gl-component-input-text-simple-with-step',
  templateUrl: './gl-component-input-text-simple-with-step.component.html',
  styleUrls: ['./gl-component-input-text-simple-with-step.component.scss']
})
export class GlComponentInputTextSimpleWithStepComponent {
  @Input() disabled = false;
  @Input() autocomplete = false;
  @Input() id: string;
  @Input() placeholder: string;
  @Input() itemContentAlignment: THorizontalAlignment;
  @Input() theme: TTheme = '';
  @Input() value = 0;
  @Input() type: TInputType = 'text';

  @Input() allowMinus = true;
  @Input() rightAlign = true;
  @Input() step = 5;

  @Input() mask: TInputTextMask;
  @Input() decimalSeparator: TDecimalSeparators = ',';
  @Input() maskSymbol: TCurrencySymbolTypes;
  @Input() maxLength = 255;

  @Output() currentValue: EventEmitter<IInputTextStepButton> = new EventEmitter();

  callback = () => {};

  constructor() { }

  convertValue(value: number): string {
    if (this.mask === 'percentage') {
      return StringConverter.numberToPercentage(value, false);
    } else {
      return this.value.toString();
    }
  }

  processValue(type: TStepType, value: string): void {
    const previousValue: number = this.value == null || Number.isNaN(this.value) ? 0 : this.value;
    const step = this.mask === 'percentage' ? this.step / 100.0 : this.step;
    let newValue: number;

    if (type === 'increase') {
      newValue = previousValue + step;

      this.currentValue.emit({
        type: 'increase',
        previousValue: this.mask === 'percentage' ? previousValue : previousValue,
        newValue: this.mask === 'percentage' ? newValue : newValue
      });
    } else if (type === 'decrease') {
      newValue = previousValue - step;

      this.currentValue.emit({
        type: 'decrease',
        previousValue: this.mask === 'percentage' ? previousValue : previousValue,
        newValue: this.mask === 'percentage' ? newValue : newValue
      });
    } else {
      const parsedValue: string = value == null || value.length === 0 ? '0.00%' : value;
      newValue = StringConverter.percentageToNumber(parsedValue);

      this.currentValue.emit({
        type: 'typing',
        previousValue: this.mask === 'percentage' ? previousValue : previousValue,
        newValue: this.mask === 'percentage' ? newValue : newValue
      });
    }
  }
}
