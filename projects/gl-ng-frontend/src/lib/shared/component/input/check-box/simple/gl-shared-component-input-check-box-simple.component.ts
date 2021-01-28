import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'gl-shared-component-input-check-box-simple',
  templateUrl: './gl-shared-component-input-check-box-simple.component.html',
  styleUrls: ['./gl-shared-component-input-check-box-simple.component.scss']
})
export class GlSharedComponentInputCheckBoxSimpleComponent {

  @Input() checked = false;
  @Input() showBackground = true;

  @Output() checked$: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  onChecked(checked: boolean): void {
    this.checked = checked;
    this.checked$.emit(checked);
  }
}
