import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentModule } from './component/component.module';


@NgModule({
  declarations: [

  ],
  imports: [
    ReactiveFormsModule
],
  exports: [
    ComponentModule
]
})
export class GlNgInputsFrontendModule {
  static forRoot(): ModuleWithProviders<GlNgInputsFrontendModule> {
    return {
      ngModule: GlNgInputsFrontendModule
    };
  }
}
