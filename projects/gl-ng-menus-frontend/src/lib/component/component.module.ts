import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GlComponentMenuBackgroundComponent } from './menu/background/gl-component-menu-background.component';
import { GlComponentMenuComponent } from './menu/gl-component-menu.component';
import { GlComponentMenuItemComponent } from './menu/item/gl-component-menu-item.component';

@NgModule({
  declarations: [
    GlComponentMenuBackgroundComponent,
    GlComponentMenuItemComponent,
    GlComponentMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    GlComponentMenuBackgroundComponent,
    GlComponentMenuItemComponent,
    GlComponentMenuComponent
  ]
})
export class ComponentModule { }
