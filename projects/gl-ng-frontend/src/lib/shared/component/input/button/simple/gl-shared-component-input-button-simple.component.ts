import { Component, Input } from '@angular/core';

@Component({
  selector: 'gl-shared-component-input-button-simple',
  templateUrl: './gl-shared-component-input-button-simple.component.html',
  styleUrls: ['./gl-shared-component-input-button-simple.component.scss']
})
export class GlSharedComponentInputButtonSimpleComponent {
  @Input() value: string;
  @Input() class: string;
  @Input() innerValue: string;
  @Input() readonly = false;

  constructor() { }
}
