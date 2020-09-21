import { Component, Input } from '@angular/core';

@Component({
  selector: 'gl-shared-component-button-menu-simple',
  templateUrl: './gl-shared-component-button-menu-simple.component.html',
  styleUrls: ['./gl-shared-component-button-menu-simple.component.scss']
})
export class GlSharedComponentButtonMenuSimpleComponent {
  @Input() disabled = false;
  @Input() hide = false;
  @Input() src: string;
  @Input() id: string;
  @Input() alt: string;
  @Input() callback: () => {};

  constructor() { }
}
