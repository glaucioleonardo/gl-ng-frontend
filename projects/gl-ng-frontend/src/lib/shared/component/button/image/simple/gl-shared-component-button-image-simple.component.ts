import { Component, Input } from '@angular/core';

@Component({
  selector: 'gl-shared-component-button-image-simple',
  templateUrl: './gl-shared-component-button-image-simple.component.html',
  styleUrls: ['./gl-shared-component-button-image-simple.component.scss']
})
export class GlSharedComponentButtonImageSimpleComponent {
  @Input() id;
  @Input() alt;
  @Input() src;
  @Input() callback: () => void;

  constructor() { }
}
