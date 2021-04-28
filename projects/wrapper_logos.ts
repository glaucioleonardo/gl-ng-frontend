/*
 * Public API Surface of gl-ng-logos-frontend
 */
export { ComponentModule as GlNgLogosComponentModule } from './gl-ng-logos-frontend/src/lib/component/component.module';
export { GlNgLogosFrontendModule } from './gl-ng-logos-frontend/src/lib/gl-ng-logos-frontend.module';

// region interfaces
export * from './gl-ng-logos-frontend/src/lib/interfaces/global.interface';
// endregion


// region square
import { GlComponentLogoSquareComponent } from './gl-ng-logos-frontend/src/lib/component/square/gl-component-logo-square.component';
import { GlComponentLogoTextOnlyComponent } from './gl-ng-logos-frontend/src/lib/component/text-only/gl-component-logo-text-only.component';
import * as GlComponentLogoSquareInterface from './gl-ng-logos-frontend/src/lib/component/square/gl-component-logo-square.interface';

export {
  GlComponentLogoSquareComponent,
  GlComponentLogoSquareInterface,
  GlComponentLogoTextOnlyComponent
};
// endregion

