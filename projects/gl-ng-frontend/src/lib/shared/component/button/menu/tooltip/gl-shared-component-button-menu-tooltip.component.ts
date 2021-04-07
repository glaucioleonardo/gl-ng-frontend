import { Component, Input } from '@angular/core';

@Component({
  selector: 'gl-shared-component-button-menu-tooltip',
  templateUrl: './gl-shared-component-button-menu-tooltip.component.html',
  styleUrls: ['./gl-shared-component-button-menu-tooltip.component.scss']
})
export class GlSharedComponentButtonMenuTooltipComponent {
  @Input() disabled = false;
  @Input() hide = false;
  @Input() tooltip: string;
  @Input() src: string;
  @Input() id: string;
  @Input() alt: string;
  @Input() callback;

  constructor() { }
}
