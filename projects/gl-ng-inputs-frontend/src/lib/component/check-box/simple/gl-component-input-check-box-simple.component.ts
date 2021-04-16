import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'gl-component-input-check-box-simple',
  templateUrl: './gl-component-input-check-box-simple.component.html',
  styleUrls: ['./gl-component-input-check-box-simple.component.scss']
})
export class GlComponentInputCheckBoxSimpleComponent {

  @Input() checked = false;
  @Input() showBackground = true;

  @Output() checked$: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  onChecked(checked: boolean): void {
    this.checked = checked;
    this.checked$.emit(checked);
  }
}
