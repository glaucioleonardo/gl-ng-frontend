import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { GlSharedModule } from './shared/gl-shared.module';
import { GlCoreModule } from './core/gl-core.module';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    GlSharedModule,
    GlCoreModule,
  ],
  exports: [],
  providers: []
})
export class GlNgFrontendModule {
  constructor() { }
}
