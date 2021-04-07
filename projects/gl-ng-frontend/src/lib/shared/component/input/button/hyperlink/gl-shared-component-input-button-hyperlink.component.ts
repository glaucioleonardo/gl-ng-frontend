import { Component, Input } from '@angular/core';

@Component({
  selector: 'gl-shared-component-input-button-hyperlink',
  templateUrl: './gl-shared-component-input-button-hyperlink.component.html',
  styleUrls: ['./gl-shared-component-input-button-hyperlink.component.scss']
})
export class GlSharedComponentInputButtonHyperlinkComponent {
  @Input() imageSrc: string;
  @Input() imageDescription: string;
  @Input() description: string;
  @Input() link: string;
  @Input() readonly = false;

  constructor() { }
}
