import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TCheckboxTheme, TCheckedIcon, TUncheckedIcon } from './gl-component-input-check-box-simple.interface';
import { NgIf } from '@angular/common';

@Component({
    selector: 'gl-component-input-check-box-simple',
    templateUrl: './gl-component-input-check-box-simple.component.html',
    styleUrls: ['./gl-component-input-check-box-simple.component.scss'],
    standalone: true,
    imports: [NgIf]
})
export class GlComponentInputCheckBoxSimpleComponent {

  @Input() checked = false;
  @Input() showBackground = true;
  @Input() disabled = false;

  @Input() theme: TCheckboxTheme = 'dark';
  @Input() checkedIcon: TCheckedIcon = 'checked';
  @Input() uncheckedIcon: TUncheckedIcon = 'unchecked';

  @Output() checked$: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  onChecked(checked: boolean): void {
    this.checked = checked;
    this.checked$.emit(checked);
  }
}
