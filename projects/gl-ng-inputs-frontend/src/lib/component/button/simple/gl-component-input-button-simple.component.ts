import { Component, Input } from '@angular/core';
import { TInputButtonSimpleClass } from './gl-component-input-button-simple.interface';

@Component({
  selector: 'gl-component-input-button-simple',
  templateUrl: './gl-component-input-button-simple.component.html',
  styleUrls: ['./gl-component-input-button-simple.component.scss']
})
export class GlComponentInputButtonSimpleComponent {
  @Input() value: string;
  @Input() theme: TInputButtonSimpleClass = '';
  @Input() innerValue: string;
  @Input() readonly = false;

  constructor() { }
}
