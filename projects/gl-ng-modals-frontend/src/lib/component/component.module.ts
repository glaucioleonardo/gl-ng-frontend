import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlNgInputsFrontendModule } from '../../../../gl-ng-inputs-frontend/src/lib/gl-ng-inputs-frontend.module';
import { CoreModule } from '../core/core.module';
import { GlComponentModalAlertComponent } from './alert/gl-component-modal-alert.component';
import { GlComponentModalAttachmentLinkComponent } from './attachment/link/gl-component-modal-attachment-link.component';
import { GlComponentModalHeaderComponent } from './header/gl-component-modal-header.component';
import { GlComponentModalLoadingComponent } from './loading/gl-component-modal-loading.component';
import { GlComponentModalUploadFileComponent } from './upload-file/gl-component-modal-upload-file.component';

@NgModule({
  declarations: [
    GlComponentModalAlertComponent,
    GlComponentModalAttachmentLinkComponent,
    GlComponentModalHeaderComponent,
    GlComponentModalLoadingComponent,
    GlComponentModalUploadFileComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    GlNgInputsFrontendModule
  ],
  exports: [
    GlComponentModalAlertComponent,
    GlComponentModalAttachmentLinkComponent,
    GlComponentModalHeaderComponent,
    GlComponentModalLoadingComponent,
    GlComponentModalUploadFileComponent
  ]
})
export class ComponentModule { }
