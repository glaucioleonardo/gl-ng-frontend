import { Component, Input } from '@angular/core';

@Component({
  selector: 'gl-shared-component-modal-header',
  templateUrl: './gl-shared-component-modal-header.component.html',
  styleUrls: ['./gl-shared-component-modal-header.component.scss']
})
export class GlSharedComponentModalHeaderComponent {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() modalLogo: string;
  constructor() { }
}
