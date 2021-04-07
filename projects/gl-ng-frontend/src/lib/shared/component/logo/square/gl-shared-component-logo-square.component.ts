import { Component, Input } from '@angular/core';

@Component({
  selector: 'gl-shared-component-logo-square',
  templateUrl: './gl-shared-component-logo-square.component.html',
  styleUrls: ['./gl-shared-component-logo-square.component.scss']
})
export class GlSharedComponentLogoSquareComponent {
  @Input() imageScr: string;
  @Input() imageAlt: string;
  @Input() horizontalPosition: 'left' | 'right' = 'left';
  @Input() verticalPosition: 'top' | 'bottom' = 'top';

  constructor() { }
}
