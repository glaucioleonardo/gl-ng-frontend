/*
 * Public API Surface of gl-ng-paging-frontend
 */
export { ComponentModule as  GlNgPagingComponentModule } from './gl-ng-paging-frontend/src/lib/component/component.module';
export { GlNgPagingFrontendModule } from './gl-ng-paging-frontend/src/lib/gl-ng-paging-frontend.module';

// region interfaces
export * from './gl-ng-paging-frontend/src/lib/interfaces/global.interface';
// endregion

// region paging
import { GlComponentPagingComponent } from './gl-ng-paging-frontend/src/lib/component/paging/gl-component-paging.component';
import * as GlComponentPagingInterface from './gl-ng-paging-frontend/src/lib/component/paging/gl-component-paging.interface';

export { GlComponentPagingComponent, GlComponentPagingInterface };
// endregion

