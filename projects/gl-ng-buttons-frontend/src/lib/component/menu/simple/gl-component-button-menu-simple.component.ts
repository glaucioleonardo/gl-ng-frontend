import { Component, Input } from '@angular/core';

@Component({
  selector: 'gl-component-button-menu-simple',
  templateUrl: './gl-component-button-menu-simple.component.html',
  styleUrls: ['./gl-component-button-menu-simple.component.scss']
})
export class GlComponentButtonMenuSimpleComponent {
  @Input() disabled = false;
  @Input() hide = false;
  @Input() src: string;
  @Input() id: string;
  @Input() alt: string;
  @Input() callback: () => {};

  constructor() { }
}
