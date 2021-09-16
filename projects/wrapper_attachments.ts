/*
 * Public API Surface of gl-ng-attachments-frontend
 */

export { CoreModule as GlNgAttachmentsCoreModule } from './gl-ng-attachments-frontend/src/lib/core/core.module';
export { ComponentModule  as GlNgAttachmentsComponentModule} from './gl-ng-attachments-frontend/src/lib/component/component.module';
export { GlNgAttachmentsFrontendModule } from './gl-ng-attachments-frontend/src/lib/gl-ng-attachments-frontend.module';

// region interfaces
export { TTheme } from './gl-ng-attachments-frontend/src/lib/core/interfaces/global.interface';
// endregion

// region image
export { GlComponentAttachmentImagePreviewComponent } from './gl-ng-attachments-frontend/src/lib/component/image/preview/gl-component-attachment-image-preview.component';
export { GlComponentAttachmentImagePreviewService } from './gl-ng-attachments-frontend/src/lib/component/image/preview/gl-component-attachment-image-preview.service';
export { IImageString, IImageUpdate } from './gl-ng-attachments-frontend/src/lib/component/image/preview/gl-component-attachment-image-preview.interface';
// endregion

// region item
export { GlComponentAttachmentItemComponent } from './gl-ng-attachments-frontend/src/lib/component/item/gl-component-attachment-item.component';
export { TAttachmentItemType } from './gl-ng-attachments-frontend/src/lib/component/item/gl-component-attachment-item.interface';
// endregion

