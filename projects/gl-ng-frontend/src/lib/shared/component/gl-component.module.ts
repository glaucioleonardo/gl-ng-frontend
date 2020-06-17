import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';



import { GlCoreModule } from '../../core/gl-core.module';

import { GlSharedComponentInputButtonSimpleComponent } from './input/button/simple/gl-shared-component-input-button-simple.component';
import { GlSharedComponentInputOptionSimpleComponent } from './input/option/simple/gl-shared-component-input-option-simple.component';
import { GlSharedComponentInputTextSimpleComponent } from './input/text/simple/gl-shared-component-input-text-simple.component';
import { GlSharedComponentTitleLabelSimpleComponent } from './title/label/simple/gl-shared-component-title-label-simple.component';
import { GlSharedComponentInputTextLabelComponent } from './input/text/label/gl-shared-component-input-text-label.component';
import { GlSharedComponentInputTextAreaSimpleComponent } from './input/text-area/simple/gl-shared-component-input-text-area-simple.component';
import { GlSharedComponentInputTextAreaLabelComponent } from './input/text-area/label/gl-shared-component-input-text-area-label.component';
import { GlSharedComponentModalAlertComponent } from './modal/alert/gl-shared-component-modal-alert.component';
import { GlSharedComponentModalHeaderComponent } from './modal/header/gl-shared-component-modal-header.component';
import { GlSharedComponentModalLoadingComponent } from './modal/loading/gl-shared-component-modal-loading.component';
import { GlSharedComponentTitlePageComponent } from './title/page/gl-shared-component-title-page.component';
import { GlSharedComponentTitleLabelButtonSimpleComponent } from './title/label/button/simple/gl-shared-component-title-label-button-simple.component';
import { GlSharedComponentTitleLabelButtonContainerComponent } from './title/label/button/container/gl-shared-component-title-label-button-container.component';
import { GlSharedComponentMenuBackgroundComponent } from './menu/background/gl-shared-component-menu-background.component';
import { GlSharedComponentMenuComponent } from './menu/gl-shared-component-menu.component';
import { GlSharedComponentMenuItemComponent } from './menu/item/gl-shared-component-menu-item.component';
import { GlSharedComponentFooterSimpleComponent } from './footer/simple/gl-shared-component-footer-simple.component';
import { GlSharedComponentInputButtonHyperlinkComponent } from './input/button/hyperlink/gl-shared-component-input-button-hyperlink.component';
import { GlSharedComponentFooterContainerComponent } from './footer/container/gl-shared-component-footer-container.component';
import { GlSharedComponentErrorMessageComponent } from './error-message/gl-shared-component-error-message.component';
import { GlSharedComponentLogoSquareComponent } from './logo/square/gl-shared-component-logo-square.component';
import { GlSharedComponentButtonImageSimpleComponent } from './button/image/simple/gl-shared-component-button-image-simple.component';
import { GlSharedComponentButtonImageTooltipComponent } from './button/image/tooltip/gl-shared-component-button-image-tooltip.component';
import { GlSharedComponentButtonMenuSimpleComponent } from './button/menu/simple/gl-shared-component-button-menu-simple.component';
import { GlSharedComponentButtonMenuTooltipComponent } from './button/menu/tooltip/gl-shared-component-button-menu-tooltip.component';
import { GlSharedComponentInputAutocompleteSimpleComponent } from './input/autocomplete/simple/gl-shared-component-input-autocomplete-simple.component';
import { GlSharedComponentInputAutocompleteLabelComponent } from './input/autocomplete/label/gl-shared-component-input-autocomplete-label.component';
import { GlSharedComponentFilterComponent } from './filter/gl-shared-component-filter.component';
import { GlSharedComponentFilterContainerComponent } from './filter/container/gl-shared-component-filter-container.component';
import { GlSharedComponentButtonAttachmentFileComponent } from './button/attachment/file/gl-shared-component-button-attachment-file.component';
import { GlSharedComponentButtonAttachmentLinkComponent } from './button/attachment/link/gl-shared-component-button-attachment-link.component';
import { GlSharedComponentModalAttachmentLinkComponent } from './modal/attachment/link/gl-shared-component-modal-attachment-link.component';

@NgModule({
  declarations: [
    GlSharedComponentButtonAttachmentFileComponent,
    GlSharedComponentButtonAttachmentLinkComponent,
    GlSharedComponentButtonImageSimpleComponent,
    GlSharedComponentButtonImageTooltipComponent,
    GlSharedComponentButtonMenuSimpleComponent,
    GlSharedComponentButtonMenuTooltipComponent,
    GlSharedComponentErrorMessageComponent,
    GlSharedComponentFilterComponent,
    GlSharedComponentFilterContainerComponent,
    GlSharedComponentFooterContainerComponent,
    GlSharedComponentFooterSimpleComponent,
    GlSharedComponentInputAutocompleteLabelComponent,
    GlSharedComponentInputAutocompleteSimpleComponent,
    GlSharedComponentInputButtonSimpleComponent,
    GlSharedComponentInputButtonHyperlinkComponent,
    GlSharedComponentInputOptionSimpleComponent,
    GlSharedComponentInputTextSimpleComponent,
    GlSharedComponentInputTextLabelComponent,
    GlSharedComponentInputTextAreaSimpleComponent,
    GlSharedComponentInputTextAreaLabelComponent,
    GlSharedComponentLogoSquareComponent,
    GlSharedComponentModalAlertComponent,
    GlSharedComponentModalAttachmentLinkComponent,
    GlSharedComponentModalHeaderComponent,
    GlSharedComponentModalLoadingComponent,
    GlSharedComponentMenuBackgroundComponent,
    GlSharedComponentMenuComponent,
    GlSharedComponentMenuItemComponent,
    GlSharedComponentTitleLabelSimpleComponent,
    GlSharedComponentTitleLabelButtonSimpleComponent,
    GlSharedComponentTitleLabelButtonContainerComponent,
    GlSharedComponentTitlePageComponent,
  ],
  imports: [
    CommonModule,
    GlCoreModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    OverlayModule
  ],
  exports: [
    GlSharedComponentButtonImageSimpleComponent,
    GlSharedComponentButtonAttachmentLinkComponent,
    GlSharedComponentButtonImageTooltipComponent,
    GlSharedComponentButtonMenuSimpleComponent,
    GlSharedComponentButtonMenuTooltipComponent,
    GlSharedComponentErrorMessageComponent,
    GlSharedComponentFilterComponent,
    GlSharedComponentFilterContainerComponent,
    GlSharedComponentFooterContainerComponent,
    GlSharedComponentFooterSimpleComponent,
    GlSharedComponentInputAutocompleteLabelComponent,
    GlSharedComponentInputAutocompleteSimpleComponent,
    GlSharedComponentInputButtonSimpleComponent,
    GlSharedComponentInputButtonHyperlinkComponent,
    GlSharedComponentInputOptionSimpleComponent,
    GlSharedComponentInputTextAreaSimpleComponent,
    GlSharedComponentInputTextAreaLabelComponent,
    GlSharedComponentInputTextLabelComponent,
    GlSharedComponentInputTextSimpleComponent,
    GlSharedComponentLogoSquareComponent,
    GlSharedComponentMenuBackgroundComponent,
    GlSharedComponentMenuComponent,
    GlSharedComponentMenuItemComponent,
    GlSharedComponentModalAlertComponent,
    GlSharedComponentModalAttachmentLinkComponent,
    GlSharedComponentModalHeaderComponent,
    GlSharedComponentModalLoadingComponent,
    GlSharedComponentTitlePageComponent,
    GlSharedComponentTitleLabelButtonSimpleComponent,
    GlSharedComponentTitleLabelButtonContainerComponent,
    GlSharedComponentTitleLabelSimpleComponent,
    GlSharedComponentButtonAttachmentFileComponent,
  ]
})
export class GlComponentModule { }
