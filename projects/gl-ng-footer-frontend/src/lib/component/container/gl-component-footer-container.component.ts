import { Component, Input } from '@angular/core';
import { NgIf, NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'gl-component-footer-container',
    templateUrl: './gl-component-footer-container.component.html',
    styleUrls: ['./gl-component-footer-container.component.scss'],
    standalone: true,
  imports: [NgIf, NgOptimizedImage]
})
export class GlComponentFooterContainerComponent {
  @Input() description: string;
  @Input() imageLogo: string;
  @Input() imageDescription = 'Image logo';

  constructor() { }
}
