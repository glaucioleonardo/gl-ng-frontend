import { Component, EventEmitter, Input, Output } from '@angular/core';
import { THorizontalAlignment } from '../../../title/label/simple/gl-shared-component-title-label-simple.interface';

@Component({
  selector: 'gl-shared-component-input-text-area-label',
  templateUrl: './gl-shared-component-input-text-area-label.component.html',
  styleUrls: ['./gl-shared-component-input-text-area-label.component.scss']
})
export class GlSharedComponentInputTextAreaLabelComponent {
  @Input() disabled = false;
  @Input() id: string;
  @Input() labelAlignment: THorizontalAlignment;
  @Input() labelValue: string;
  @Input() placeholder: string;
  @Input() itemContentAlignment: THorizontalAlignment;
  @Input() class: string;

  @Input() value = '';
  @Input() maxLength: number;
  @Input() required: boolean;
  @Input() requiredLabel = 'Required label';

  @Output() currentValue = new EventEmitter();

  constructor() { }

  onKeyUp(values) {
    this.currentValue.emit(values);
  }
}
