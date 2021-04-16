import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlNgInputsFrontendModule } from '../../../../gl-ng-inputs-frontend/src/lib/gl-ng-inputs-frontend.module';
import { GlComponentErrorMessageComponent } from './error-message/gl-component-error-message.component';

@NgModule({
  declarations: [
    GlComponentErrorMessageComponent
  ],
  imports: [
    CommonModule,
    GlNgInputsFrontendModule
  ],
  exports: [
    GlComponentErrorMessageComponent
  ]
})
export class ComponentModule { }
