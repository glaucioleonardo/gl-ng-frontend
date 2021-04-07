import { Component, Input } from '@angular/core';

@Component({
  selector: 'gl-shared-component-title-label-button-simple',
  templateUrl: './gl-shared-component-title-label-button-simple.component.html',
  styleUrls: ['./gl-shared-component-title-label-button-simple.component.scss']
})
export class GlSharedComponentTitleLabelButtonSimpleComponent {

  @Input() id: string;
  @Input() alt: string;
  @Input() src: string;
  @Input() required = false;
  @Input() class: string;
  @Input() requiredFieldDescription: string = 'Required field';

  constructor() { }
}
