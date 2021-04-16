import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TListReorder } from './gl-component-input-list-item-up-down.interface';

@Component({
  selector: 'gl-component-input-list-item-up-down',
  templateUrl: './gl-component-input-list-item-up-down.component.html',
  styleUrls: ['./gl-component-input-list-item-up-down.component.scss']
})
export class GlComponentInputListItemUpDownComponent {
  @Input() showUp = true;
  @Input() showDown = true;

  @Output() moveUpDown$: EventEmitter<TListReorder> = new EventEmitter();

  callback = () => {};

  constructor() { }
  onClick(type: TListReorder): void {

    if (type === 'move-down') {
      if (this.showDown) {
        this.moveUpDown$.emit(type);
      }
    } else {
      if (this.showUp) {
        this.moveUpDown$.emit(type);
      }
    }
  }
}
