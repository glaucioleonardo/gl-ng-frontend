import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IListRemoveItem } from './gl-component-input-list-item-remove.interface';

@Component({
  selector: 'gl-component-input-list-item-remove',
  templateUrl: './gl-component-input-list-item-remove.component.html',
  styleUrls: ['./gl-component-input-list-item-remove.component.scss']
})
export class GlComponentInputListItemRemoveComponent {

  @Input() showRemove = false;
  @Input() id: number;

  @Output() itemToRemove: EventEmitter<IListRemoveItem> = new EventEmitter();

  constructor() { }

  removeItem(): void {
    this.itemToRemove.emit({
      id: +this.id
    });
  }
}
