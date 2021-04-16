/*
 * Public API Surface of gl-ng-menus-frontend
 */
export { ComponentModule as  GlNgMenusComponentModule } from './gl-ng-menus-frontend/src/lib/component/component.module';
export { GlNgMenusFrontendModule } from './gl-ng-menus-frontend/src/lib/gl-ng-menus-frontend.module';

// region interfaces
export * from './gl-ng-menus-frontend/src/lib/interfaces/global.interface';
// endregion


// region background
import { GlComponentMenuBackgroundComponent } from './gl-ng-menus-frontend/src/lib/component/menu/background/gl-component-menu-background.component';
export { GlComponentMenuBackgroundComponent };
// endregion

// region item
import { GlComponentMenuComponent } from './gl-ng-menus-frontend/src/lib/component/menu/gl-component-menu.component';
import { GlComponentMenuService } from './gl-ng-menus-frontend/src/lib/component/menu/gl-component-menu.service';
import { GlComponentMenuItemComponent } from './gl-ng-menus-frontend/src/lib/component/menu/item/gl-component-menu-item.component';
import * as GlComponentMenuInterface from './gl-ng-menus-frontend/src/lib/component/menu/gl-component-menu.interface';
import * as GlComponentMenuItemInterface from './gl-ng-menus-frontend/src/lib/component/menu/item/gl-component-menu-item.interface';

export {
  GlComponentMenuItemComponent, GlComponentMenuItemInterface, GlComponentMenuComponent, GlComponentMenuService, GlComponentMenuInterface
};
// endregion
