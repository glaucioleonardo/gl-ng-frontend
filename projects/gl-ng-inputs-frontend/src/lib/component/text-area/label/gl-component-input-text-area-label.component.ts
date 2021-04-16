import { Component, EventEmitter, Input, Output } from '@angular/core';
import { THorizontalAlignment, TTheme } from '../../../core/interfaces/alignments.interface';

@Component({
  selector: 'gl-component-input-text-area-label',
  templateUrl: './gl-component-input-text-area-label.component.html',
  styleUrls: ['./gl-component-input-text-area-label.component.scss']
})
export class GlComponentInputTextAreaLabelComponent {
  @Input() disabled = false;
  @Input() id: string;
  @Input() labelAlignment: THorizontalAlignment;
  @Input() labelValue: string;
  @Input() placeholder: string;
  @Input() itemContentAlignment: THorizontalAlignment;
  @Input() theme: TTheme = '';

  @Input() value = '';
  @Input() maxLength: number;
  @Input() required: boolean;
  @Input() requiredLabel = 'Required label';

  @Output() currentValue = new EventEmitter();

  constructor() { }

  onKeyUp(values): void {
    this.currentValue.emit(values);
  }
}
