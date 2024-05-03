import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlNgButtonsFrontendModule } from '../../../../gl-ng-buttons-frontend/src/lib/gl-ng-buttons-frontend.module';
import { GlNgTitlesFrontendModule } from '../../../../gl-ng-titles-frontend/src/lib/gl-ng-titles-frontend.module';
import { GlComponentHeaderDefaultComponent } from './default/gl-component-header-default.component';

@NgModule({
    imports: [
        CommonModule,
        GlNgTitlesFrontendModule,
        GlNgButtonsFrontendModule,
        GlComponentHeaderDefaultComponent
    ],
    exports: [
        GlComponentHeaderDefaultComponent
    ]
})
export class ComponentModule { }
