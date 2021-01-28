import { Component, EventEmitter, Input, Output } from '@angular/core';
import { THorizontalAlignment } from '../../../title/label/simple/gl-shared-component-title-label-simple.interface';

@Component({
  selector: 'gl-shared-component-input-check-box-label',
  templateUrl: './gl-shared-component-input-check-box-label.component.html',
  styleUrls: ['./gl-shared-component-input-check-box-label.component.scss']
})
export class GlSharedComponentInputCheckBoxLabelComponent {

  @Input() checked = false;
  @Input() showBackground = true;

  @Input() labelId: string;
  @Input() labelAlignment: THorizontalAlignment = 'center';
  @Input() required: boolean;
  @Input() labelValue: string;
  @Input() requiredLabelDescription: string;

  @Output() checked$: EventEmitter<boolean> = new EventEmitter();

  constructor() { }
}
