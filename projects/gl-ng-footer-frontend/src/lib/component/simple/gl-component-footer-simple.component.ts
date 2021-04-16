import { Component, Input } from '@angular/core';

@Component({
  selector: 'gl-component-footer-simple',
  templateUrl: './gl-component-footer-simple.component.html',
  styleUrls: ['./gl-component-footer-simple.component.scss']
})
export class GlComponentFooterSimpleComponent {
  @Input() description: string;
  @Input() imageLogo: string;
  @Input() imageDescription = 'Image logo';

  constructor() { }
}
