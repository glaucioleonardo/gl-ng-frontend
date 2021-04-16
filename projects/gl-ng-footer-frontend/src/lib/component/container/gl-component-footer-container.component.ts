import { Component, Input } from '@angular/core';

@Component({
  selector: 'gl-component-footer-container',
  templateUrl: './gl-component-footer-container.component.html',
  styleUrls: ['./gl-component-footer-container.component.scss']
})
export class GlComponentFooterContainerComponent {
  @Input() description: string;
  @Input() imageLogo: string;
  @Input() imageDescription = 'Image logo';

  constructor() { }
}
