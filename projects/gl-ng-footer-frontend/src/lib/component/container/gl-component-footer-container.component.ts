import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
    selector: 'gl-component-footer-container',
    templateUrl: './gl-component-footer-container.component.html',
    styleUrls: ['./gl-component-footer-container.component.scss'],
    standalone: true,
    imports: [NgIf]
})
export class GlComponentFooterContainerComponent {
  @Input() description: string;
  @Input() imageLogo: string;
  @Input() imageDescription = 'Image logo';

  constructor() { }
}
