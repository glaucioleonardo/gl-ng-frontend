import { Component, Input } from '@angular/core';

@Component({
  selector: 'gl-component-input-button-hyperlink',
  templateUrl: './gl-component-input-button-hyperlink.component.html',
  styleUrls: ['./gl-component-input-button-hyperlink.component.scss']
})
export class GlComponentInputButtonHyperlinkComponent {
  @Input() imageSrc: string;
  @Input() imageDescription: string;
  @Input() description: string;
  @Input() link: string;
  @Input() readonly = false;

  constructor() { }
}
