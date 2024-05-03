import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
    selector: 'gl-component-input-button-hyperlink',
    templateUrl: './gl-component-input-button-hyperlink.component.html',
    styleUrls: ['./gl-component-input-button-hyperlink.component.scss'],
    standalone: true,
    imports: [NgIf]
})
export class GlComponentInputButtonHyperlinkComponent {
  @Input() imageSrc: string;
  @Input() imageDescription: string;
  @Input() description: string;
  @Input() link: string;
  @Input() readonly = false;

  constructor() { }
}
