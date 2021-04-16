import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlNgFooterFrontendModule } from '../../../../gl-ng-footer-frontend/src/lib/gl-ng-footer-frontend.module';
import { GlNgInputsFrontendModule } from '../../../../gl-ng-inputs-frontend/src/lib/gl-ng-inputs-frontend.module';
import { GlNgLogosFrontendModule } from '../../../../gl-ng-logos-frontend/src/lib/gl-ng-logos-frontend.module';
import { ComponentModule } from '../component/component.module';
import { GlViewErrorMessageComponent } from './error-message/gl-view-error-message.component';

@NgModule({
  declarations: [
    GlViewErrorMessageComponent
  ],
  exports: [
    GlViewErrorMessageComponent
  ],
  imports: [
    CommonModule,
    ComponentModule,
    GlNgLogosFrontendModule,
    GlNgFooterFrontendModule,
    GlNgInputsFrontendModule
  ]
})
export class ViewModule { }
