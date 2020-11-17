import {Component, EventEmitter, Input, Output} from '@angular/core';
import { TCurrencySymbolTypes, TDecimalSeparators } from 'gl-w-frontend';
import { THorizontalAlignment } from '../../../../../title/label/simple/gl-shared-component-title-label-simple.interface';
import { TInputTextMask } from '../../../simple/gl-shared-component-input-text-simple.interface';

@Component({
  selector: 'gl-shared-component-input-text-label-button-container',
  templateUrl: './gl-shared-component-input-text-label-button-container.component.html',
  styleUrls: ['./gl-shared-component-input-text-label-button-container.component.scss']
})
export class GlSharedComponentInputTextLabelButtonContainerComponent {
  @Input() disabled = false;
  @Input() autocomplete = false;
  @Input() id: string;
  @Input() labelAlignment: THorizontalAlignment;
  @Input() labelValue: string;
  @Input() placeholder: string;
  @Input() itemContentAlignment: string;
  @Input() class: string;
  @Input() value: string = null;

  @Input() mask: TInputTextMask;
  @Input() decimalSeparator: TDecimalSeparators = ',';
  @Input() maskSymbol: TCurrencySymbolTypes;
  @Input() allowMinus: boolean = true;
  @Input() rightAlign: boolean = true;
  @Input() step: number = 5;

  @Input() maxLength = 255;
  @Input() required: boolean;

  @Input() requiredLabel = 'Required field';

  @Output() currentValue = new EventEmitter();

  constructor() { }

  onKeyUp(values) { this.currentValue.emit(values); }
}
