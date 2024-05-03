import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GlComponentMenuBackgroundComponent } from './menu/background/gl-component-menu-background.component';
import { GlComponentMenuComponent } from './menu/gl-component-menu.component';
import { GlComponentMenuItemComponent } from './menu/item/gl-component-menu-item.component';
import { GlComponentModalActionsComponent } from './modal/actions/gl-component-modal-actions.component';
import { GlComponentModalActionsItemComponent } from './modal/actions/item/gl-component-modal-actions-item.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        GlComponentMenuBackgroundComponent,
        GlComponentMenuItemComponent,
        GlComponentMenuComponent,
        GlComponentModalActionsComponent,
        GlComponentModalActionsItemComponent
    ],
    exports: [
        GlComponentMenuBackgroundComponent,
        GlComponentMenuItemComponent,
        GlComponentMenuComponent,
        GlComponentModalActionsComponent,
        GlComponentModalActionsItemComponent
    ]
})
export class ComponentModule { }
