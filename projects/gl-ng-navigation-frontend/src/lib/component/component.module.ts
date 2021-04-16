import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlComponentNavigationTabContainerComponent } from './tab/container/gl-component-navigation-tab-container.component';
import { GlComponentNavigationTabSimpleComponent } from './tab/simple/gl-component-navigation-tab-simple.component';

@NgModule({
  declarations: [
    GlComponentNavigationTabSimpleComponent,
    GlComponentNavigationTabContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GlComponentNavigationTabSimpleComponent,
    GlComponentNavigationTabContainerComponent
  ]
})
export class ComponentModule { }
