import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'gl-component-input-option-simple',
  templateUrl: './gl-component-input-option-simple.component.html',
  styleUrls: ['./gl-component-input-option-simple.component.scss']
})
export class GlComponentInputOptionSimpleComponent {
  @Input() value: string;
  @Input() id: string;
  @Input() label: string;
  @Input() name: string;
  @Input() checked: boolean;

  @Output() itemSelected: EventEmitter<string> = new EventEmitter();

  constructor() { }

  onCheck(value: string, input: HTMLInputElement): void {
    input.checked = true;
    this.itemSelected.emit(value);
  }
}
