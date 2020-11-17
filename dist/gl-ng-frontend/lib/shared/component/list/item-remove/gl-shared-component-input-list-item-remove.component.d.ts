import { EventEmitter } from '@angular/core';
import { IListRemoveItem } from './gl-shared-component-input-list-item-remove.interface';
export declare class GlSharedComponentInputListItemRemoveComponent {
    showRemove: boolean;
    id: number;
    itemToRemove: EventEmitter<IListRemoveItem>;
    constructor();
    removeItem(): void;
}
