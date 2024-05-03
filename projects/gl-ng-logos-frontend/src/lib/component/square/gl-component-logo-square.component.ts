import { Component, Input } from '@angular/core';
import { TLogoHorizontalPosition, TLogoVerticalPosition } from './gl-component-logo-square.interface';

@Component({
    selector: 'gl-component-logo-square',
    templateUrl: './gl-component-logo-square.component.html',
    styleUrls: ['./gl-component-logo-square.component.scss'],
    standalone: true
})
export class GlComponentLogoSquareComponent {
  @Input() imageScr: string;
  @Input() imageAlt: string;
  @Input() horizontalPosition: TLogoHorizontalPosition = 'left';
  @Input() verticalPosition: TLogoVerticalPosition = 'top';

  constructor() { }
}
