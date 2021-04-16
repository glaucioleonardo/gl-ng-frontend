import { Component, EventEmitter, Input, Output } from '@angular/core';
import { THorizontalAlignment } from '../../../core/interfaces/alignments.interface';

@Component({
  selector: 'gl-component-input-check-box-label',
  templateUrl: './gl-component-input-check-box-label.component.html',
  styleUrls: ['./gl-component-input-check-box-label.component.scss']
})
export class GlComponentInputCheckBoxLabelComponent {

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
