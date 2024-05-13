import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'gl-component-button-menu-simple',
    templateUrl: './gl-component-button-menu-simple.component.html',
    styleUrls: ['./gl-component-button-menu-simple.component.scss'],
    standalone: true,
  imports: [NgOptimizedImage]
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
