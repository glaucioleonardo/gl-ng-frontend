import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'gl-shared-component-input-text-area-label',
  templateUrl: './gl-shared-component-input-text-area-label.component.html',
  styleUrls: ['./gl-shared-component-input-text-area-label.component.scss']
})
export class GlSharedComponentInputTextAreaLabelComponent {
  @Input() disabled = false;
  @Input() id: string;
  @Input() labelAlignment: string;
  @Input() labelValue: string;
  @Input() placeholder: string;
  @Input() itemContentAlignment: string;
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
