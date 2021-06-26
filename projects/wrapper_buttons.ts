/*
 * Public API Surface of gl-ng-buttons-frontend
 */
export { ComponentModule as GlNgButtonsComponentModule } from './gl-ng-buttons-frontend/src/lib/component/component.module';
export { GlNgButtonsFrontendModule } from './gl-ng-buttons-frontend/src/lib/gl-ng-buttons-frontend.module';

// region interfaces
export * from './gl-ng-buttons-frontend/src/lib/interfaces/global.interface';
// endregion

// region attachment
import { GlComponentButtonAttachmentFileComponent } from './gl-ng-buttons-frontend/src/lib/component/attachment/file/gl-component-button-attachment-file.component';
import { GlComponentButtonAttachmentFileService } from './gl-ng-buttons-frontend/src/lib/component/attachment/file/gl-component-button-attachment-file.service';
import { GlComponentButtonAttachmentLinkComponent } from './gl-ng-buttons-frontend/src/lib/component/attachment/link/gl-component-button-attachment-link.component';

export { GlComponentButtonAttachmentFileComponent, GlComponentButtonAttachmentFileService, GlComponentButtonAttachmentLinkComponent };
// endregion

// region image
import { GlComponentButtonImageSimpleComponent } from './gl-ng-buttons-frontend/src/lib/component/image/simple/gl-component-button-image-simple.component';
import { GlComponentButtonImageTooltipComponent } from './gl-ng-buttons-frontend/src/lib/component/image/tooltip/gl-component-button-image-tooltip.component';
import * as GlComponentButtonImageSimpleInterface from './gl-ng-buttons-frontend/src/lib/component/image/simple/gl-component-button-image-simple.interface';
import * as GlComponentButtonImageTooltipInterface from './gl-ng-buttons-frontend/src/lib/component/image/tooltip/gl-component-button-image-tooltip.interface';

export {
  GlComponentButtonImageSimpleComponent,
  GlComponentButtonImageTooltipComponent,
  GlComponentButtonImageSimpleInterface,
  GlComponentButtonImageTooltipInterface
};
// endregion

// region interface
import { GlComponentButtonInterfaceComponent } from './gl-ng-buttons-frontend/src/lib/component/interface/gl-component-button-interface.component';
export { GlComponentButtonInterfaceComponent };
// endregion

// region menu
import { GlComponentButtonMenuSimpleComponent } from './gl-ng-buttons-frontend/src/lib/component/menu/simple/gl-component-button-menu-simple.component';
import { GlComponentButtonMenuTooltipComponent } from './gl-ng-buttons-frontend/src/lib/component/menu/tooltip/gl-component-button-menu-tooltip.component';
import * as GlComponentButtonMenuSimpleInterface from './gl-ng-buttons-frontend/src/lib/component/menu/simple/gl-component-button-menu-simple.interface';

export { GlComponentButtonMenuSimpleComponent, GlComponentButtonMenuSimpleInterface, GlComponentButtonMenuTooltipComponent };
// endregion

