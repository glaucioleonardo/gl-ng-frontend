import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlComponentModule } from '../component/gl-component.module';
import { GlSharedViewErrorMessageComponent } from './error-message/gl-shared-view-error-message.component';

@NgModule({
  declarations: [
    GlSharedViewErrorMessageComponent
  ],
  exports: [
    GlSharedViewErrorMessageComponent
  ],
  imports: [
    CommonModule,
    GlComponentModule
  ]
})
export class GlSharedViewModule { }
