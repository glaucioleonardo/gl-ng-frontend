import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlNgInputsFrontendModule } from '../../../../gl-ng-inputs-frontend/src/lib/gl-ng-inputs-frontend.module';
import { GlComponentPagingComponent } from './paging/gl-component-paging.component';

@NgModule({
  declarations: [
    GlComponentPagingComponent
  ],
  imports: [
    CommonModule,
    GlNgInputsFrontendModule
  ],
  exports: [
    GlComponentPagingComponent
  ]
})
export class ComponentModule { }
