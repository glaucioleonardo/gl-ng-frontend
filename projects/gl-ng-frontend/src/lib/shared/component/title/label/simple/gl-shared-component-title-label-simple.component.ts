import { Component, Input } from '@angular/core';
import { THorizontalAlignment } from './gl-shared-component-title-label-simple.interface';

@Component({
  selector: 'gl-shared-component-title-label-simple',
  templateUrl: './gl-shared-component-title-label-simple.component.html',
  styleUrls: ['./gl-shared-component-title-label-simple.component.scss']
})
export class GlSharedComponentTitleLabelSimpleComponent {

  @Input() labelValue;
  @Input() id;
  @Input() labelAlignment: THorizontalAlignment;
  @Input() class = '';

  @Input() required = false;
  @Input() requiredLabel = 'Required field';

  constructor() { }
}
