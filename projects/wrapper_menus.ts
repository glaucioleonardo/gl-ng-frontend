/*
 * Public API Surface of gl-ng-menus-frontend
 */
export { ComponentModule as  GlNgMenusComponentModule } from './gl-ng-menus-frontend/src/lib/component/component.module';
export { GlNgMenusFrontendModule } from './gl-ng-menus-frontend/src/lib/gl-ng-menus-frontend.module';

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
