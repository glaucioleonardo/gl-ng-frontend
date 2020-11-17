import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IListRemoveItem } from './gl-shared-component-input-list-item-remove.interface';

@Component({
  selector: 'gl-shared-component-input-list-item-remove',
  templateUrl: './gl-shared-component-input-list-item-remove.component.html',
  styleUrls: ['./gl-shared-component-input-list-item-remove.component.scss']
})
export class GlSharedComponentInputListItemRemoveComponent {

  @Input() showRemove: boolean = false;
  @Input() id: number;

  @Output() itemToRemove: EventEmitter<IListRemoveItem> = new EventEmitter();

  constructor() { }

  removeItem(): void {
    this.itemToRemove.emit({
      id: +this.id
    });
  }
}
