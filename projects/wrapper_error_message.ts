/*
 * Public API Surface of gl-ng-error-message-frontend
 */
export { ComponentModule as GlNgErrorMessageComponentModule } from './gl-ng-error-message-frontend/src/lib/component/component.module';
export { ViewModule as GlNgErrorMessageViewModule } from './gl-ng-error-message-frontend/src/lib/view/view.module';
export { GlNgErrorMessageFrontendModule } from './gl-ng-error-message-frontend/src/lib/gl-ng-error-message-frontend.module';

// region interfaces
export * from './gl-ng-error-message-frontend/src/lib/interfaces/global.interface';
// endregion

// region error-message
import { GlComponentErrorMessageComponent } from './gl-ng-error-message-frontend/src/lib/component/error-message/gl-component-error-message.component';
import * as GlComponentErrorMessageInterface from './gl-ng-error-message-frontend/src/lib/component/error-message/gl-component-error-message.component.interface';

export { GlComponentErrorMessageComponent, GlComponentErrorMessageInterface };
// endregion

// region view error-message
import { GlViewErrorMessageComponent } from './gl-ng-error-message-frontend/src/lib/view/error-message/gl-view-error-message.component';
export { GlViewErrorMessageComponent };
// endregion

