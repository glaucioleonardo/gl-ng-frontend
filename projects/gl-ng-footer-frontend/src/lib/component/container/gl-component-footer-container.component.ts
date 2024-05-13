import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'gl-component-footer-container',
    templateUrl: './gl-component-footer-container.component.html',
    styleUrls: ['./gl-component-footer-container.component.scss'],
    standalone: true,
  imports: [NgOptimizedImage]
})
export class GlComponentFooterContainerComponent {
  @Input() description: string;
  @Input() imageLogo: string;
  @Input() imageDescription = 'Image logo';

  constructor() { }
}
