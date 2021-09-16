/*
 * Public API Surface of gl-ng-paging-frontend
 */
export { ComponentModule as  GlNgPagingComponentModule } from './gl-ng-paging-frontend/src/lib/component/component.module';
export { GlNgPagingFrontendModule } from './gl-ng-paging-frontend/src/lib/gl-ng-paging-frontend.module';

// region interfaces
export { TTheme } from './gl-ng-paging-frontend/src/lib/interfaces/global.interface';
// endregion

// region paging
export { GlComponentPagingComponent } from './gl-ng-paging-frontend/src/lib/component/paging/gl-component-paging.component';
export { IInitialFinalRange, IPageButtons, IPaging, TPagingType, TPagingThemeType, IItemsPerPage } from './gl-ng-paging-frontend/src/lib/component/paging/gl-component-paging.interface';
// endregion

