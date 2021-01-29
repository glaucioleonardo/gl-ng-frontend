import { EventEmitter } from '@angular/core';
import { TListReorder } from './gl-shared-component-input-list-item-up-down.interface';
export declare class GlSharedComponentInputListItemUpDownComponent {
    showUp: boolean;
    showDown: boolean;
    moveUpDown$: EventEmitter<TListReorder>;
    callback: () => void;
    constructor();
    onClick(type: TListReorder): void;
}
//# sourceMappingURL=gl-shared-component-input-list-item-up-down.component.d.ts.map