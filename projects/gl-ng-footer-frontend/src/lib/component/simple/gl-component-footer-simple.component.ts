import { Component, Input } from '@angular/core';
import { TFooterTheme } from './gl-component-footer-simple.interface';
import { NgIf, NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'gl-component-footer-simple',
    templateUrl: './gl-component-footer-simple.component.html',
    styleUrls: ['./gl-component-footer-simple.component.scss'],
    standalone: true,
  imports: [NgIf, NgOptimizedImage]
})
export class GlComponentFooterSimpleComponent {
  @Input() description: string;
  @Input() imageLogo: string;
  @Input() imageDescription = 'Image logo';
  @Input() theme: TFooterTheme = '';

  constructor() { }
}
