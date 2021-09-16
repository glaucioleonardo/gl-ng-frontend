/*
 * Public API Surface of gl-ng-navigation-frontend
 */
export { ComponentModule as GlNgNavigationComponentModule } from './gl-ng-navigation-frontend/src/lib/component/component.module';
export { GlNgNavigationFrontendModule } from './gl-ng-navigation-frontend/src/lib/gl-ng-navigation-frontend.module';

// region interfaces
export { TTheme } from './gl-ng-navigation-frontend/src/lib/interfaces/global.interface';
// endregion

// region simple
export { GlComponentNavigationTabSimpleComponent } from './gl-ng-navigation-frontend/src/lib/component/tab/simple/gl-component-navigation-tab-simple.component';
export { INavigationTab } from './gl-ng-navigation-frontend/src/lib/component/tab/simple/gl-component-navigation-tab-simple.interface';
// endregion

// region container
export { GlComponentNavigationTabContainerComponent } from './gl-ng-navigation-frontend/src/lib/component/tab/container/gl-component-navigation-tab-container.component';
// endregion
