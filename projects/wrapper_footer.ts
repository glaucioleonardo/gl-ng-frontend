/*
 * Public API Surface of gl-ng-footer-frontend
 */
export { ComponentModule as GlNgFooterComponentModule } from './gl-ng-footer-frontend/src/lib/component/component.module';
export { GlNgFooterFrontendModule } from './gl-ng-footer-frontend/src/lib/gl-ng-footer-frontend.module';

// region interfaces
export * from './gl-ng-footer-frontend/src/lib/interfaces/global.interface';
// endregion


// region simple
import { GlComponentFooterSimpleComponent } from './gl-ng-footer-frontend/src/lib/component/simple/gl-component-footer-simple.component';
export { GlComponentFooterSimpleComponent };
// endregion

// region container
import { GlComponentFooterContainerComponent } from './gl-ng-footer-frontend/src/lib/component/container/gl-component-footer-container.component';
export { GlComponentFooterContainerComponent };
// endregion

