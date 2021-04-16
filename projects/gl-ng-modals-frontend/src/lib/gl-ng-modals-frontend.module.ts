import { NgModule } from '@angular/core';
import { ComponentModule } from './component/component.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [

  ],
  imports: [
    CoreModule,
    ComponentModule
  ],
  exports: [
    CoreModule,
    ComponentModule
  ]
})
export class GlNgModalsFrontendModule { }
