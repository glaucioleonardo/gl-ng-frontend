import { Component, Input } from '@angular/core';

@Component({
  selector: 'gl-shared-component-footer-simple',
  templateUrl: './gl-shared-component-footer-simple.component.html',
  styleUrls: ['./gl-shared-component-footer-simple.component.scss']
})
export class GlSharedComponentFooterSimpleComponent {
  @Input() description: string;
  @Input() imageLogo: string;
  @Input() imageDescription: string = 'Image logo';

  constructor() { }
}
