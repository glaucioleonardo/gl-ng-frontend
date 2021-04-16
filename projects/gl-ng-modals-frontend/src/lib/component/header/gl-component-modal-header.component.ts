import { Component, Input } from '@angular/core';

@Component({
  selector: 'gl-component-modal-header',
  templateUrl: './gl-component-modal-header.component.html',
  styleUrls: ['./gl-component-modal-header.component.scss']
})
export class GlComponentModalHeaderComponent {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() modalLogo: string;
  constructor() { }
}
