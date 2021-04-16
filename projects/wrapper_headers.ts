/*
 * Public API Surface of gl-ng-headers-frontend
 */
export { ComponentModule as GlNgHeadersComponentModule } from './gl-ng-headers-frontend/src/lib/component/component.module';
export { GlNgHeadersFrontendModule } from './gl-ng-headers-frontend/src/lib/gl-ng-headers-frontend.module';

// region interfaces
export * from './gl-ng-headers-frontend/src/lib/interfaces/global.interface';
// endregion

// region default
import {
  GlComponentHeaderDefaultComponent
} from './gl-ng-headers-frontend/src/lib/component/default/gl-component-header-default.component';
import * as GlComponentHeaderDefaultInterface from './gl-ng-headers-frontend/src/lib/component/default/gl-component-header-default.interface';

export { GlComponentHeaderDefaultComponent, GlComponentHeaderDefaultInterface };
// endregion

