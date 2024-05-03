/*
 * Public API Surface of gl-ng-menus-frontend
 */

// region interfaces
export { TTheme } from './gl-ng-menus-frontend/src/lib/interfaces/global.interface';
// endregion


// region background
import { GlComponentMenuBackgroundComponent } from './gl-ng-menus-frontend/src/lib/component/menu/background/gl-component-menu-background.component';
export { GlComponentMenuBackgroundComponent };
// endregion

// region item
export { GlComponentMenuComponent } from './gl-ng-menus-frontend/src/lib/component/menu/gl-component-menu.component';
export { GlComponentMenuService } from './gl-ng-menus-frontend/src/lib/component/menu/gl-component-menu.service';
export { GlComponentMenuItemComponent } from './gl-ng-menus-frontend/src/lib/component/menu/item/gl-component-menu-item.component';
export { TMenuPosition } from './gl-ng-menus-frontend/src/lib/component/menu/gl-component-menu.interface';
export { IMenuItemComplex, TMenuItemTheme, IMenuItem, TUrlTarget } from './gl-ng-menus-frontend/src/lib/component/menu/item/gl-component-menu-item.interface';
// endregion

// region action
export { GlComponentModalActionsComponent } from './gl-ng-menus-frontend/src/lib/component/modal/actions/gl-component-modal-actions.component';
export { GlComponentModalActionsService } from './gl-ng-menus-frontend/src/lib/component/modal/actions/gl-component-modal-actions.service';
export { GlComponentModalActionsItemComponent } from './gl-ng-menus-frontend/src/lib/component/modal/actions/item/gl-component-modal-actions-item.component';
export { IModalItemAction } from './gl-ng-menus-frontend/src/lib/component/modal/actions/item/gl-component-modal-actions-item.interface';
// endregion
