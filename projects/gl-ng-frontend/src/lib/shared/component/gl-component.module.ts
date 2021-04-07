import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { RouterModule } from '@angular/router';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';

import { GlCoreModule } from '../../core/gl-core.module';
import { GlSharedComponentAttachmentItemComponent } from './attachment/item/gl-shared-component-attachment-item.component';
import { GlSharedComponentAttachmentImagePreviewComponent } from './attachment/image/preview/gl-shared-component-attachment-image-preview.component';
import { GlSharedComponentButtonAttachmentFileComponent } from './button/attachment/file/gl-shared-component-button-attachment-file.component';
import { GlSharedComponentButtonAttachmentLinkComponent } from './button/attachment/link/gl-shared-component-button-attachment-link.component';
import { GlSharedComponentButtonImageSimpleComponent } from './button/image/simple/gl-shared-component-button-image-simple.component';
import { GlSharedComponentButtonImageTooltipComponent } from './button/image/tooltip/gl-shared-component-button-image-tooltip.component';
import { GlSharedComponentButtonInterfaceComponent } from './button/interface/gl-shared-component-button-interface.component';
import { GlSharedComponentButtonMenuSimpleComponent } from './button/menu/simple/gl-shared-component-button-menu-simple.component';
import { GlSharedComponentButtonMenuTooltipComponent } from './button/menu/tooltip/gl-shared-component-button-menu-tooltip.component';
import { GlSharedComponentErrorMessageComponent } from './error-message/gl-shared-component-error-message.component';
import { GlSharedComponentFilterComponent } from './filter/gl-shared-component-filter.component';
import { GlSharedComponentFilterContainerComponent } from './filter/container/gl-shared-component-filter-container.component';
import { GlSharedComponentFooterContainerComponent } from './footer/container/gl-shared-component-footer-container.component';
import { GlSharedComponentFooterSimpleComponent } from './footer/simple/gl-shared-component-footer-simple.component';
import { GlSharedComponentHeaderDefaultComponent } from './header/default/gl-shared-component-header-default.component';
import { GlSharedComponentInputAutocompleteLabelComponent } from './input/autocomplete/label/gl-shared-component-input-autocomplete-label.component';
import { GlSharedComponentInputAutocompleteSimpleComponent } from './input/autocomplete/simple/gl-shared-component-input-autocomplete-simple.component';
import { GlSharedComponentInputButtonSimpleComponent } from './input/button/simple/gl-shared-component-input-button-simple.component';
import { GlSharedComponentInputButtonHyperlinkComponent } from './input/button/hyperlink/gl-shared-component-input-button-hyperlink.component';
import { GlSharedComponentInputOptionSimpleComponent } from './input/option/simple/gl-shared-component-input-option-simple.component';
import { GlSharedComponentInputTextSimpleComponent } from './input/text/simple/gl-shared-component-input-text-simple.component';
import { GlSharedComponentInputTextLabelButtonContainerComponent } from './input/text/label/button/container/gl-shared-component-input-text-label-button-container.component';
import { GlSharedComponentInputTextLabelSimpleComponent } from './input/text/label/simple/gl-shared-component-input-text-label-simple.component';
import { GlSharedComponentInputTextAreaLabelComponent } from './input/text-area/label/gl-shared-component-input-text-area-label.component';
import { GlSharedComponentInputTextAreaSimpleComponent } from './input/text-area/simple/gl-shared-component-input-text-area-simple.component';
import { GlSharedComponentLogoSquareComponent } from './logo/square/gl-shared-component-logo-square.component';
import { GlSharedComponentModalAttachmentLinkComponent } from './modal/attachment/link/gl-shared-component-modal-attachment-link.component';
import { GlSharedComponentModalAlertComponent } from './modal/alert/gl-shared-component-modal-alert.component';
import { GlSharedComponentModalLoadingComponent } from './modal/loading/gl-shared-component-modal-loading.component';
import { GlSharedComponentModalHeaderComponent } from './modal/header/gl-shared-component-modal-header.component';
import { GlSharedComponentMenuBackgroundComponent } from './menu/background/gl-shared-component-menu-background.component';
import { GlSharedComponentMenuItemComponent } from './menu/item/gl-shared-component-menu-item.component';
import { GlSharedComponentMenuComponent } from './menu/gl-shared-component-menu.component';
import { GlSharedComponentNavigationTabSimpleComponent } from './navigation/tab/simple/gl-shared-component-navigation-tab-simple.component';
import { GlSharedComponentNavigationTabContainerComponent } from './navigation/tab/container/gl-shared-component-navigation-tab-container.component';
import { GlSharedComponentTitleLabelSimpleComponent } from './title/label/simple/gl-shared-component-title-label-simple.component';
import { GlSharedComponentTitleLabelButtonSimpleComponent } from './title/label/button/simple/gl-shared-component-title-label-button-simple.component';
import { GlSharedComponentTitleLabelButtonContainerComponent } from './title/label/button/container/gl-shared-component-title-label-button-container.component';
import { GlSharedComponentTitlePageComponent } from './title/page/gl-shared-component-title-page.component';
import { GlSharedComponentInputDatepickerSimpleDayMonthYearComponent } from './input/datepicker/simple/day-month-year/gl-shared-component-input-datepicker-simple-day-month-year.component';
import { GlSharedComponentPagingComponent } from './paging/gl-shared-component-paging.component';
import { GlSharedComponentInputDatepickerSimpleMonthYearComponent } from './input/datepicker/simple/month-year/gl-shared-component-input-datepicker-simple-month-year.component';
import { GlSharedComponentInputDatepickerLabelComponent } from './input/datepicker/label/gl-shared-component-input-datepicker-label.component';
import { GlSharedComponentInputSwitchComponent } from './input/switch/gl-shared-component-input-switch.component';
import { GlSharedComponentInputTextSimpleWithStepComponent } from './input/text/simple/with-step/gl-shared-component-input-text-simple-with-step.component';
import { GlSharedComponentInputListItemRemoveComponent } from './list/item-remove/gl-shared-component-input-list-item-remove.component';
import { GlSharedComponentInputListItemUpDownComponent } from './list/item-up-down/gl-shared-component-input-list-item-up-down.component';
import { GlSharedComponentInputCheckBoxSimpleComponent } from './input/check-box/simple/gl-shared-component-input-check-box-simple.component';
import { GlSharedComponentInputCheckBoxLabelComponent } from './input/check-box/label/gl-shared-component-input-check-box-label.component';
import { GlSharedComponentInputDragAndDropSimpleComponent } from './input/drag-and-drop/simple/gl-shared-component-input-drag-and-drop-simple.component';

@NgModule({
  declarations: [
    GlSharedComponentAttachmentItemComponent,
    GlSharedComponentAttachmentImagePreviewComponent,
    GlSharedComponentButtonAttachmentFileComponent,
    GlSharedComponentButtonAttachmentLinkComponent,
    GlSharedComponentButtonImageSimpleComponent,
    GlSharedComponentButtonImageTooltipComponent,
    GlSharedComponentButtonInterfaceComponent,
    GlSharedComponentButtonMenuSimpleComponent,
    GlSharedComponentButtonMenuTooltipComponent,
    GlSharedComponentErrorMessageComponent,
    GlSharedComponentFilterComponent,
    GlSharedComponentFilterContainerComponent,
    GlSharedComponentFooterContainerComponent,
    GlSharedComponentFooterSimpleComponent,
    GlSharedComponentHeaderDefaultComponent,
    GlSharedComponentInputAutocompleteLabelComponent,
    GlSharedComponentInputAutocompleteSimpleComponent,
    GlSharedComponentInputButtonSimpleComponent,
    GlSharedComponentInputButtonHyperlinkComponent,
    GlSharedComponentInputOptionSimpleComponent,
    GlSharedComponentInputTextSimpleComponent,
    GlSharedComponentInputTextLabelButtonContainerComponent,
    GlSharedComponentInputTextLabelSimpleComponent,
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
    GlSharedComponentNavigationTabSimpleComponent,
    GlSharedComponentNavigationTabContainerComponent,
    GlSharedComponentPagingComponent,
    GlSharedComponentTitleLabelSimpleComponent,
    GlSharedComponentTitleLabelButtonSimpleComponent,
    GlSharedComponentTitleLabelButtonContainerComponent,
    GlSharedComponentTitlePageComponent,
    GlSharedComponentInputDatepickerSimpleDayMonthYearComponent,
    GlSharedComponentInputDatepickerSimpleMonthYearComponent,
    GlSharedComponentInputDatepickerLabelComponent,
    GlSharedComponentInputDatepickerLabelComponent,
    GlSharedComponentInputSwitchComponent,
    GlSharedComponentInputTextSimpleWithStepComponent,
    GlSharedComponentInputListItemRemoveComponent,
    GlSharedComponentInputListItemUpDownComponent,
    GlSharedComponentInputCheckBoxSimpleComponent,
    GlSharedComponentInputCheckBoxLabelComponent,
    GlSharedComponentInputDragAndDropSimpleComponent
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
    OverlayModule,
    MatDatepickerModule
  ],
  exports: [
    GlSharedComponentAttachmentItemComponent,
    GlSharedComponentAttachmentImagePreviewComponent,
    GlSharedComponentButtonImageSimpleComponent,
    GlSharedComponentButtonAttachmentLinkComponent,
    GlSharedComponentButtonImageTooltipComponent,
    GlSharedComponentButtonInterfaceComponent,
    GlSharedComponentButtonMenuSimpleComponent,
    GlSharedComponentButtonMenuTooltipComponent,
    GlSharedComponentErrorMessageComponent,
    GlSharedComponentFilterComponent,
    GlSharedComponentFilterContainerComponent,
    GlSharedComponentFooterContainerComponent,
    GlSharedComponentFooterSimpleComponent,
    GlSharedComponentHeaderDefaultComponent,
    GlSharedComponentInputAutocompleteLabelComponent,
    GlSharedComponentInputAutocompleteSimpleComponent,
    GlSharedComponentInputButtonSimpleComponent,
    GlSharedComponentInputButtonHyperlinkComponent,
    GlSharedComponentInputDragAndDropSimpleComponent,
    GlSharedComponentInputOptionSimpleComponent,
    GlSharedComponentInputTextAreaSimpleComponent,
    GlSharedComponentInputTextAreaLabelComponent,
    GlSharedComponentInputTextLabelButtonContainerComponent,
    GlSharedComponentInputTextLabelSimpleComponent,
    GlSharedComponentInputTextSimpleComponent,
    GlSharedComponentLogoSquareComponent,
    GlSharedComponentMenuBackgroundComponent,
    GlSharedComponentMenuComponent,
    GlSharedComponentMenuItemComponent,
    GlSharedComponentModalAlertComponent,
    GlSharedComponentModalAttachmentLinkComponent,
    GlSharedComponentModalHeaderComponent,
    GlSharedComponentModalLoadingComponent,
    GlSharedComponentNavigationTabSimpleComponent,
    GlSharedComponentNavigationTabContainerComponent,
    GlSharedComponentPagingComponent,
    GlSharedComponentTitlePageComponent,
    GlSharedComponentTitleLabelButtonSimpleComponent,
    GlSharedComponentTitleLabelButtonContainerComponent,
    GlSharedComponentTitleLabelSimpleComponent,
    GlSharedComponentButtonAttachmentFileComponent,
    GlSharedComponentInputDatepickerSimpleDayMonthYearComponent,
    GlSharedComponentInputDatepickerSimpleMonthYearComponent,
    GlSharedComponentInputDatepickerLabelComponent,
    GlSharedComponentInputSwitchComponent,
    GlSharedComponentInputTextSimpleWithStepComponent,
    GlSharedComponentInputListItemRemoveComponent,
    GlSharedComponentInputListItemUpDownComponent,
    GlSharedComponentInputCheckBoxSimpleComponent,
    GlSharedComponentInputCheckBoxLabelComponent
  ]
})
export class GlComponentModule { }
