import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TCurrencySymbolTypes, TDecimalSeparators } from 'gl-w-number-frontend';
import { THorizontalAlignment, TTheme } from '../../../../core/interfaces/alignments.interface';
import { TInputTextMask, TInputType } from '../../simple/gl-component-input-text-simple.interface';
import { GlComponentInputTextSimpleComponent } from '../../simple/gl-component-input-text-simple.component';
import { GlComponentTitleLabelSimpleComponent } from '../../../../../../../gl-ng-titles-frontend/src/lib/component/label/simple/gl-component-title-label-simple.component';
import { TLabelColor, TLabelTheme } from '../../../../../../../gl-ng-titles-frontend/src/lib/component/label/simple/gl-component-title-label-simple.interface';

@Component({
    selector: 'gl-component-input-text-label-simple',
    templateUrl: './gl-component-input-text-label-simple.component.html',
    styleUrls: ['./gl-component-input-text-label-simple.component.scss'],
    standalone: true,
    imports: [GlComponentTitleLabelSimpleComponent, GlComponentInputTextSimpleComponent]
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
  @Input() labelTheme: TLabelTheme = ''
  @Input() labelColor: TLabelColor = '';
  @Input() customLabelColor: string = '';

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
