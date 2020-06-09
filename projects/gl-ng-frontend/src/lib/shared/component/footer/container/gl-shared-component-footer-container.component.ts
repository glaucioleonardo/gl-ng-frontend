import { Component, Input } from '@angular/core';

@Component({
  selector: 'gl-shared-component-footer-container',
  templateUrl: './gl-shared-component-footer-container.component.html',
  styleUrls: ['./gl-shared-component-footer-container.component.scss']
})
export class GlSharedComponentFooterContainerComponent {
  @Input() description: string;
  @Input() imageLogo: string;
  @Input() imageDescription: string = 'Image logo';

  constructor() { }
}
