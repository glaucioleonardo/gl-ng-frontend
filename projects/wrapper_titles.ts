/*
 * Public API Surface of gl-ng-titles-frontend
 */

export { GlNgTitlesFrontendModule } from './gl-ng-titles-frontend/src/lib/gl-ng-titles-frontend.module';

// region interfaces
export * from './gl-ng-titles-frontend/src/lib/interfaces/global.interface';
// endregion

// region label
import { GlComponentTitleLabelSimpleComponent } from './gl-ng-titles-frontend/src/lib/component/label/simple/gl-component-title-label-simple.component';
import { GlComponentTitleLabelButtonSimpleComponent } from './gl-ng-titles-frontend/src/lib/component/label/button/simple/gl-component-title-label-button-simple.component';
import { GlComponentTitleLabelButtonContainerComponent } from './gl-ng-titles-frontend/src/lib/component/label/button/container/gl-component-title-label-button-container.component';
import * as GlComponentTitleLabelSimpleComponentInterface from './gl-ng-titles-frontend/src/lib/component/label/simple/gl-component-title-label-simple.interface';

export {
  GlComponentTitleLabelSimpleComponent, GlComponentTitleLabelSimpleComponentInterface, GlComponentTitleLabelButtonSimpleComponent,
  GlComponentTitleLabelButtonContainerComponent
};
// endregion

// region page
import { GlComponentTitlePageComponent } from './gl-ng-titles-frontend/src/lib/component/page/gl-component-title-page.component';
export { GlComponentTitlePageComponent };
// endregion


