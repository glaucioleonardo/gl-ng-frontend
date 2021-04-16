import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlNgButtonsFrontendModule } from '../../../../gl-ng-buttons-frontend/src/lib/gl-ng-buttons-frontend.module';
import { GlNgTitlesFrontendModule } from '../../../../gl-ng-titles-frontend/src/lib/gl-ng-titles-frontend.module';
import { GlComponentAttachmentImagePreviewComponent } from './image/preview/gl-component-attachment-image-preview.component';
import { GlComponentAttachmentItemComponent } from './item/gl-component-attachment-item.component';

@NgModule({
  declarations: [
    GlComponentAttachmentImagePreviewComponent,
    GlComponentAttachmentItemComponent
  ],
  imports: [
    CommonModule,
    GlNgTitlesFrontendModule,
    GlNgButtonsFrontendModule
  ],
  exports: [
    GlComponentAttachmentImagePreviewComponent,
    GlComponentAttachmentItemComponent
  ]
})
export class ComponentModule { }
