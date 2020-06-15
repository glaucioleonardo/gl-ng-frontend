import { Component, Input } from '@angular/core';

@Component({
  selector: 'gl-shared-component-filter-container',
  templateUrl: './gl-shared-component-filter-container.component.html',
  styleUrls: ['./gl-shared-component-filter-container.component.scss']
})
export class GlSharedComponentFilterContainerComponent {
  @Input() label: string;

  constructor() { }
}
