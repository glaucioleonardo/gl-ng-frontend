import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentModule } from './component/component.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [

  ],
  imports: [
    ReactiveFormsModule,
    CoreModule,
  ],
  exports: [
    CoreModule,
    ComponentModule
  ]
})
export class GlNgInputsFrontendModule { }
