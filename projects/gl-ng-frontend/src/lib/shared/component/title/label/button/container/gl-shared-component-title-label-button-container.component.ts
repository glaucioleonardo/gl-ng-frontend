import { Component, Input } from '@angular/core';
import { THorizontalAlignment } from '../../simple/gl-shared-component-title-label-simple.interface';

@Component({
  selector: 'gl-shared-component-title-label-button-container',
  templateUrl: './gl-shared-component-title-label-button-container.component.html',
  styleUrls: ['./gl-shared-component-title-label-button-container.component.scss']
})
export class GlSharedComponentTitleLabelButtonContainerComponent {

  @Input() labelValue;
  @Input() id;
  @Input() labelAlignment: THorizontalAlignment;
  @Input() required = false;
  @Input() class: string;
  @Input() requiredFieldDescription: string = 'Required field';

  constructor() { }
}
