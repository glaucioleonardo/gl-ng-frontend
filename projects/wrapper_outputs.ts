/*
 * Public API Surface of gl-ng-outputs-frontend
 */

export { ComponentModule as GlNgOutputsComponentModule} from './gl-ng-outputs-frontend/src/lib/component/component.module';
export { GlNgOutputsFrontendModule } from './gl-ng-outputs-frontend/src/lib/gl-ng-outputs-frontend.module';

// region directives

// endregion

// region interfaces
import * as GLOutputsInterfaces from './gl-ng-outputs-frontend/src/lib/interfaces/global.interface';
export { GLOutputsInterfaces };
// endregion

// region pipes

// endregion

// region Video
import { GlComponentOutputsVideoPreviewComponent } from './gl-ng-outputs-frontend/src/lib/component/video/preview/gl-component-outputs-video-preview.component';
import { GlComponentOutputsVideoPreviewService } from './gl-ng-outputs-frontend/src/lib/component/video/preview/gl-component-outputs-video-preview.service';
import * as GlComponentOutputsVideoPreviewServiceInterface from './gl-ng-outputs-frontend/src/lib/component/video/preview/gl-component-outputs-video-preview.interface';

export {
  GlComponentOutputsVideoPreviewComponent,
  GlComponentOutputsVideoPreviewService,
  GlComponentOutputsVideoPreviewServiceInterface,
};
// endregion

