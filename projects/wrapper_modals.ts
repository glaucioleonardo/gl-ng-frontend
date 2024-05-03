/*
 * Public API Surface of gl-ng-modals-frontend
 */
export { ComponentModule as GlNgModalsComponentModule } from './gl-ng-modals-frontend/src/lib/component/component.module';
export { GlNgModalsFrontendModule } from  './gl-ng-modals-frontend/src/lib/gl-ng-modals-frontend.module';

// region interfaces
export { TTheme } from './gl-ng-modals-frontend/src/lib/interfaces/global.interface';
export { IModalItemAction } from './gl-ng-modals-frontend/src/lib/component/actions/item/gl-components-modal-actions-item.interface';
// endregion

// region directives
export { CoreDirectivesAutofocusDirective } from './gl-ng-modals-frontend/src/lib/core/directives/autofocus/core-directives-autofocus.directive';
// endregion

// region actions
export { GlComponentsModalActionsItemComponent } from './gl-ng-modals-frontend/src/lib/component/actions/item/gl-components-modal-actions-item.component';
export { GlComponentsModalActionsComponent } from './gl-ng-modals-frontend/src/lib/component/actions/gl-components-modal-actions.component';
export { GlComponentsModalActionsService } from './gl-ng-modals-frontend/src/lib/component/actions/gl-components-modal-actions.service';
// endregion

// region alert
export { GlComponentModalAlertComponent } from './gl-ng-modals-frontend/src/lib/component/alert/gl-component-modal-alert.component';
export { GlComponentModalAlertService } from './gl-ng-modals-frontend/src/lib/component/alert/gl-component-modal-alert.service';
// endregion

// region attachment
export { GlComponentModalAttachmentLinkComponent } from './gl-ng-modals-frontend/src/lib/component/attachment/link/gl-component-modal-attachment-link.component';
export { GlComponentModalAttachmentLinkService } from './gl-ng-modals-frontend/src/lib/component/attachment/link/gl-component-modal-attachment-link.service';
export { IAttachmentLink } from './gl-ng-modals-frontend/src/lib/component/attachment/link/gl-component-modal-attachment-link.interface';
// endregion

// region header
export { GlComponentModalHeaderComponent } from './gl-ng-modals-frontend/src/lib/component/header/gl-component-modal-header.component';
// endregion

// region loading
export { GlComponentModalLoadingComponent } from './gl-ng-modals-frontend/src/lib/component/loading/gl-component-modal-loading.component';
export { GlComponentModalLoadingService } from './gl-ng-modals-frontend/src/lib/component/loading/gl-component-modal-loading.service';
// endregion

// region Upload File
export { GlComponentModalUploadFileComponent } from './gl-ng-modals-frontend/src/lib/component/upload-file/gl-component-modal-upload-file.component';
export { GlComponentModalUploadFileService } from './gl-ng-modals-frontend/src/lib/component/upload-file/gl-component-modal-upload-file.service';
export { TModalUploadFunction } from './gl-ng-modals-frontend/src/lib/component/upload-file/gl-component-modal-upload-file.interface';
// endregion
