import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TListReorder } from './gl-shared-component-input-list-item-up-down.interface';

@Component({
  selector: 'gl-shared-component-input-list-item-up-down',
  templateUrl: './gl-shared-component-input-list-item-up-down.component.html',
  styleUrls: ['./gl-shared-component-input-list-item-up-down.component.scss']
})
export class GlSharedComponentInputListItemUpDownComponent {
  @Input() showUp = true;
  @Input() showDown = true;

  @Output() moveUpDown$: EventEmitter<TListReorder> = new EventEmitter();

  callback = () => {};

  constructor() { }
  onClick(type: TListReorder) {

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
