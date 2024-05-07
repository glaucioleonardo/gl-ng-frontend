import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'gl-component-modal-header',
  templateUrl: './gl-component-modal-header.component.html',
  styleUrls: ['./gl-component-modal-header.component.scss'],
  imports: [
    NgOptimizedImage
  ],
  standalone: true
})
export class GlComponentModalHeaderComponent {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() modalLogo: string;
  constructor() { }
}
