import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ICurrencyTypes} from "gl-w-frontend";

@Component({
  selector: 'gl-shared-component-input-text-label-button-container',
  templateUrl: './gl-shared-component-input-text-label-button-container.component.html',
  styleUrls: ['./gl-shared-component-input-text-label-button-container.component.scss']
})
export class GlSharedComponentInputTextLabelButtonContainerComponent {
  @Input() disabled = false;
  @Input() autocomplete = false;
  @Input() id: string;
  @Input() labelAlignment: string;
  @Input() labelValue: string;
  @Input() placeholder: string;
  @Input() itemContentAlignment: string;
  @Input() class: string;
  @Input() value: string = null;

  @Input() mask: string | ICurrencyTypes;
  @Input() maskSymbol: string;
  @Input() maxLength = 255;
  @Input() required: boolean;

  @Input() requiredLabel = 'Required field';

  @Output() currentValue = new EventEmitter();

  constructor() { }

  onKeyUp(values) { this.currentValue.emit(values); }
}
