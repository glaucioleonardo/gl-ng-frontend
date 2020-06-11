import { Component, Input } from '@angular/core';

@Component({
  selector: 'gl-shared-component-button-image-tooltip',
  templateUrl: './gl-shared-component-button-image-tooltip.component.html',
  styleUrls: ['./gl-shared-component-button-image-tooltip.component.scss']
})
export class GlSharedComponentButtonImageTooltipComponent {
  @Input() id;
  @Input() alt;
  @Input() src;
  @Input() show = true;
  @Input() callback;

  constructor() { }
}
