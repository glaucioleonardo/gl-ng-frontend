import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlComponentFooterContainerComponent } from './container/gl-component-footer-container.component';
import { GlComponentFooterSimpleComponent } from './simple/gl-component-footer-simple.component';

@NgModule({
  declarations: [
    GlComponentFooterSimpleComponent,
    GlComponentFooterContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GlComponentFooterSimpleComponent,
    GlComponentFooterContainerComponent
  ]
})
export class ComponentModule { }
