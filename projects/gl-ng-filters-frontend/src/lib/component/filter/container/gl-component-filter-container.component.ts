import { Component, Input } from '@angular/core';

@Component({
  selector: 'gl-component-filter-container',
  templateUrl: './gl-component-filter-container.component.html',
  styleUrls: ['./gl-component-filter-container.component.scss']
})
export class GlComponentFilterContainerComponent {
  @Input() label: string;

  constructor() { }
}
