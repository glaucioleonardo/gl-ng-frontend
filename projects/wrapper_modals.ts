/*
 * Public API Surface of gl-ng-modals-frontend
 */
export { ComponentModule as GlNgModalsComponentModule } from './gl-ng-modals-frontend/src/lib/component/component.module';
export { CoreModule as GlNgModalsCoreModule } from './gl-ng-modals-frontend/src/lib/core/core.module';
export { GlNgModalsFrontendModule } from  './gl-ng-modals-frontend/src/lib/gl-ng-modals-frontend.module';

// region interfaces
export * from './gl-ng-modals-frontend/src/lib/interfaces/global.interface';
// endregion

// region directives
export { CoreDirectivesAutofocusDirective } from './gl-ng-modals-frontend/src/lib/core/directives/autofocus/core-directives-autofocus.directive';
// endregion

// region alert
import { GlComponentModalAlertComponent } from './gl-ng-modals-frontend/src/lib/component/alert/gl-component-modal-alert.component';
import { GlComponentModalAlertService } from './gl-ng-modals-frontend/src/lib/component/alert/gl-component-modal-alert.service';
export { GlComponentModalAlertComponent, GlComponentModalAlertService };
// endregion

// region attachment
import { GlComponentModalAttachmentLinkComponent } from './gl-ng-modals-frontend/src/lib/component/attachment/link/gl-component-modal-attachment-link.component';
import { GlComponentModalAttachmentLinkService } from './gl-ng-modals-frontend/src/lib/component/attachment/link/gl-component-modal-attachment-link.service';
import * as GlComponentModalAttachmentLinkInterface from './gl-ng-modals-frontend/src/lib/component/attachment/link/gl-component-modal-attachment-link.interface';
export { GlComponentModalAttachmentLinkComponent, GlComponentModalAttachmentLinkService, GlComponentModalAttachmentLinkInterface };
// endregion

// region header
import { GlComponentModalHeaderComponent } from './gl-ng-modals-frontend/src/lib/component/header/gl-component-modal-header.component';
export { GlComponentModalHeaderComponent };
// endregion

// region loading
import { GlComponentModalLoadingComponent } from './gl-ng-modals-frontend/src/lib/component/loading/gl-component-modal-loading.component';
import { GlComponentModalLoadingService } from './gl-ng-modals-frontend/src/lib/component/loading/gl-component-modal-loading.service';
export { GlComponentModalLoadingComponent, GlComponentModalLoadingService };
// endregion

// region Upload File
export { GlComponentModalUploadFileComponent } from './gl-ng-modals-frontend/src/lib/component/upload-file/gl-component-modal-upload-file.component';
export { GlComponentModalUploadFileService } from './gl-ng-modals-frontend/src/lib/component/upload-file/gl-component-modal-upload-file.service';
export * as GlComponentModalUploadFileInterface from './gl-ng-modals-frontend/src/lib/component/upload-file/gl-component-modal-upload-file.service';
// endregion
