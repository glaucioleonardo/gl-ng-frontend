import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlNgButtonsFrontendModule } from '../../../../gl-ng-buttons-frontend/src/lib/gl-ng-buttons-frontend.module';
import { GlComponentInputListItemRemoveComponent } from './item-remove/gl-component-input-list-item-remove.component';
import { GlComponentInputListItemUpDownComponent } from './item-up-down/gl-component-input-list-item-up-down.component';

@NgModule({
    imports: [
        CommonModule,
        GlNgButtonsFrontendModule,
        GlComponentInputListItemRemoveComponent,
        GlComponentInputListItemUpDownComponent
    ],
    exports: [
        GlComponentInputListItemRemoveComponent,
        GlComponentInputListItemUpDownComponent
    ]
})
export class ComponentModule { }
