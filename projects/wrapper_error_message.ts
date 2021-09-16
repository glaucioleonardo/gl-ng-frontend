/*
 * Public API Surface of gl-ng-error-message-frontend
 */
export { ComponentModule as GlNgErrorMessageComponentModule } from './gl-ng-error-message-frontend/src/lib/component/component.module';
export { ViewModule as GlNgErrorMessageViewModule } from './gl-ng-error-message-frontend/src/lib/view/view.module';
export { GlNgErrorMessageFrontendModule } from './gl-ng-error-message-frontend/src/lib/gl-ng-error-message-frontend.module';

// region interfaces
export { TTheme } from './gl-ng-error-message-frontend/src/lib/interfaces/global.interface';
// endregion

// region error-message
export { GlComponentErrorMessageComponent } from './gl-ng-error-message-frontend/src/lib/component/error-message/gl-component-error-message.component';
export { TErrorMessagePosition } from './gl-ng-error-message-frontend/src/lib/component/error-message/gl-component-error-message.component.interface';
// endregion

// region view error-message
export { GlViewErrorMessageComponent } from './gl-ng-error-message-frontend/src/lib/view/error-message/gl-view-error-message.component';
// endregion

