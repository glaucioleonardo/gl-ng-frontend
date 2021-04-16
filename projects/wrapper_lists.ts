/*
 * Public API Surface of gl-ng-lists-frontend
 */
export { ComponentModule as GlNgListsComponentModule } from './gl-ng-lists-frontend/src/lib/component/component.module';
export { GlNgListsFrontendModule } from './gl-ng-lists-frontend/src/lib/gl-ng-lists-frontend.module';

// region interfaces
export * from './gl-ng-lists-frontend/src/lib/interfaces/global.interface';
// endregion

// region item remove
import { GlComponentInputListItemRemoveComponent } from './gl-ng-lists-frontend/src/lib/component/item-remove/gl-component-input-list-item-remove.component';
import * as GlComponentInputListItemRemoveInterface from './gl-ng-lists-frontend/src/lib/component/item-remove/gl-component-input-list-item-remove.interface';

export { GlComponentInputListItemRemoveComponent, GlComponentInputListItemRemoveInterface };
// endregion

// region item up down
import { GlComponentInputListItemUpDownComponent } from './gl-ng-lists-frontend/src/lib/component/item-up-down/gl-component-input-list-item-up-down.component';
import * as GlComponentInputListItemUpDownInterface from './gl-ng-lists-frontend/src/lib/component/item-up-down/gl-component-input-list-item-up-down.interface';

export { GlComponentInputListItemUpDownComponent, GlComponentInputListItemUpDownInterface };
// endregion

