import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'gl-component-button-image-simple',
  templateUrl: './gl-component-button-image-simple.component.html',
  styleUrls: ['./gl-component-button-image-simple.component.scss'],
  imports: [
    NgOptimizedImage
  ],
  standalone: true
})
export class GlComponentButtonImageSimpleComponent {
  @Input() id;
  @Input() alt;
  @Input() src;
  @Input() callback: (args?: any[]) => void;
  @Input() disableDragging = false;

  constructor() { }

  preventDragging(): boolean {
    return !this.disableDragging;
  }
}
