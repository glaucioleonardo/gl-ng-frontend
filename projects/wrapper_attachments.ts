/*
 * Public API Surface of gl-ng-attachments-frontend
 */

export { CoreModule as GlNgAttachmentsCoreModule } from './gl-ng-attachments-frontend/src/lib/core/core.module';
export { ComponentModule  as GlNgAttachmentsComponentModule} from './gl-ng-attachments-frontend/src/lib/component/component.module';
export { GlNgAttachmentsFrontendModule } from './gl-ng-attachments-frontend/src/lib/gl-ng-attachments-frontend.module';

// region interfaces
export * from './gl-ng-attachments-frontend/src/lib/core/interfaces/global.interface';
// endregion

// region image
import { GlComponentAttachmentImagePreviewComponent } from './gl-ng-attachments-frontend/src/lib/component/image/preview/gl-component-attachment-image-preview.component';
import { GlComponentAttachmentImagePreviewService } from './gl-ng-attachments-frontend/src/lib/component/image/preview/gl-component-attachment-image-preview.service';
import * as GlComponentAttachmentImagePreviewInterface from './gl-ng-attachments-frontend/src/lib/component/image/preview/gl-component-attachment-image-preview.interface';

export { GlComponentAttachmentImagePreviewComponent, GlComponentAttachmentImagePreviewService, GlComponentAttachmentImagePreviewInterface };
// endregion

// region item
import { GlComponentAttachmentItemComponent } from './gl-ng-attachments-frontend/src/lib/component/item/gl-component-attachment-item.component';
import * as GlComponentAttachmentItemInterface from './gl-ng-attachments-frontend/src/lib/component/item/gl-component-attachment-item.interface';
export { GlComponentAttachmentItemComponent, GlComponentAttachmentItemInterface };
// endregion

