import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlNgAttachmentsFrontendModule } from '../../../../wrapper_attachments';
import { GlNgButtonsFrontendModule } from '../../../../wrapper_buttons';
import { GlNgErrorMessageFrontendModule } from '../../../../wrapper_error_message';
import { GlNgFiltersFrontendModule } from '../../../../wrapper_filters';
import { GlNgFooterFrontendModule } from '../../../../wrapper_footer';
import { GlNgHeadersFrontendModule } from '../../../../wrapper_headers';
import { GlNgInputsFrontendModule } from '../../../../wrapper_inputs';
import { GlNgListsFrontendModule } from '../../../../wrapper_lists';
import { GlNgLogosFrontendModule } from '../../../../wrapper_logos';
import { GlNgMenusFrontendModule } from '../../../../wrapper_menus';
import { GlNgModalsFrontendModule } from '../../../../wrapper_modals';
import { GlNgNavigationFrontendModule } from '../../../../wrapper_navigation';
import { GlNgPagingFrontendModule } from '../../../../wrapper_paging';
import { GlNgTitlesFrontendModule } from '../../../../wrapper_titles';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GlNgAttachmentsFrontendModule,
    GlNgButtonsFrontendModule,
    GlNgErrorMessageFrontendModule,
    GlNgFiltersFrontendModule,
    GlNgFooterFrontendModule,
    GlNgHeadersFrontendModule,
    GlNgInputsFrontendModule,
    GlNgListsFrontendModule,
    GlNgLogosFrontendModule,
    GlNgMenusFrontendModule,
    GlNgModalsFrontendModule,
    GlNgNavigationFrontendModule,
    GlNgPagingFrontendModule,
    GlNgTitlesFrontendModule
  ],
  exports: [
    GlNgAttachmentsFrontendModule,
    GlNgButtonsFrontendModule,
    GlNgErrorMessageFrontendModule,
    GlNgFiltersFrontendModule,
    GlNgFooterFrontendModule,
    GlNgHeadersFrontendModule,
    GlNgInputsFrontendModule,
    GlNgListsFrontendModule,
    GlNgLogosFrontendModule,
    GlNgMenusFrontendModule,
    GlNgModalsFrontendModule,
    GlNgNavigationFrontendModule,
    GlNgPagingFrontendModule,
    GlNgTitlesFrontendModule
  ]
})
export class ComponentModule { }
