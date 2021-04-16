import { NgModule } from '@angular/core';
import { ComponentModule } from './component/component.module';
import { ViewModule } from './view/view.module';

@NgModule({
  declarations: [

  ],
  imports: [
    ComponentModule,
    ViewModule,
  ],
  exports: [
    ComponentModule,
    ViewModule
  ]
})
export class GlNgErrorMessageFrontendModule { }
