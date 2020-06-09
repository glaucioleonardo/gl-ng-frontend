import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'gl-shared-component-input-option-simple',
  templateUrl: './gl-shared-component-input-option-simple.component.html',
  styleUrls: ['./gl-shared-component-input-option-simple.component.scss']
})
export class GlSharedComponentInputOptionSimpleComponent {
  @ViewChild('input') input: ElementRef<HTMLInputElement>;

  @Input() value: string;
  @Input() id: string;
  @Input() label: string;
  @Input() name: string;
  @Input() checked: boolean;

  @Output() itemSelected: EventEmitter<string> = new EventEmitter();

  constructor() { }

  onCheck() {
    const input: HTMLInputElement = document.querySelector(`#${this.id}`) as HTMLInputElement;
    input.checked = true;
    this.itemSelected.emit(input.value);
  }
}
