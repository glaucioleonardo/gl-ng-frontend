import { Component, Input } from '@angular/core';

@Component({
  selector: 'gl-shared-component-title-label-simple',
  templateUrl: './gl-shared-component-title-label-simple.component.html',
  styleUrls: ['./gl-shared-component-title-label-simple.component.scss']
})
export class GlSharedComponentTitleLabelSimpleComponent {

  @Input() labelValue;
  @Input() id;
  @Input() labelAlignment: string;
  @Input() class = '';

  @Input() required = false;
  @Input() requiredLabel = 'Required field';

  constructor() { }
}
