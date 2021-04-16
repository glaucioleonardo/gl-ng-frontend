import { Component, Input } from '@angular/core';

@Component({
  selector: 'gl-component-button-image-simple',
  templateUrl: './gl-component-button-image-simple.component.html',
  styleUrls: ['./gl-component-button-image-simple.component.scss']
})
export class GlComponentButtonImageSimpleComponent {
  @Input() id;
  @Input() alt;
  @Input() src;
  @Input() callback: (args?: any[]) => void;

  constructor() { }
}
