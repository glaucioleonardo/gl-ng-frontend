import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlComponentLogoSquareComponent } from './square/gl-component-logo-square.component';
import { GlComponentLogoTextOnlyComponent } from './text-only/gl-component-logo-text-only.component';

@NgModule({
  declarations: [
    GlComponentLogoSquareComponent,
    GlComponentLogoTextOnlyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GlComponentLogoSquareComponent,
    GlComponentLogoTextOnlyComponent
  ]
})
export class ComponentModule { }
