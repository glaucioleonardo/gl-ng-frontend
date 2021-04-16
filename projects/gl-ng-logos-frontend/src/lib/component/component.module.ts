import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlComponentLogoSquareComponent } from './square/gl-component-logo-square.component';

@NgModule({
  declarations: [
    GlComponentLogoSquareComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GlComponentLogoSquareComponent
  ]
})
export class ComponentModule { }
