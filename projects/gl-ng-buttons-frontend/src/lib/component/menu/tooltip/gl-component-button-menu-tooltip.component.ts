import { Component, Input } from '@angular/core';
import { GlComponentButtonMenuSimpleComponent } from '../simple/gl-component-button-menu-simple.component';

@Component({
    selector: 'gl-component-button-menu-tooltip',
    templateUrl: './gl-component-button-menu-tooltip.component.html',
    styleUrls: ['./gl-component-button-menu-tooltip.component.scss'],
    standalone: true,
    imports: [GlComponentButtonMenuSimpleComponent]
})
export class GlComponentButtonMenuTooltipComponent {
  @Input() disabled = false;
  @Input() hide = false;
  @Input() tooltip: string;
  @Input() src: string;
  @Input() id: string;
  @Input() alt: string;
  @Input() callback;

  constructor() { }
}
