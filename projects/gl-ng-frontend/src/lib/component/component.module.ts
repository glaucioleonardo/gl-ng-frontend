import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { GlNgErrorMessageFrontendModule } from '../../../../wrapper_error_message';
import { GlNgFiltersFrontendModule } from '../../../../wrapper_filters';


import { GlNgInputsFrontendModule } from '../../../../wrapper_inputs';



import { GlNgModalsFrontendModule } from '../../../../wrapper_modals';

import { GlNgPagingFrontendModule } from '../../../../wrapper_paging';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GlNgErrorMessageFrontendModule,
    GlNgFiltersFrontendModule,
    GlNgInputsFrontendModule,
    GlNgModalsFrontendModule,
    GlNgPagingFrontendModule
],
  exports: [
    GlNgErrorMessageFrontendModule,
    GlNgFiltersFrontendModule,
    GlNgInputsFrontendModule,
    GlNgModalsFrontendModule,
    GlNgPagingFrontendModule
]
})
export class ComponentModule { }
