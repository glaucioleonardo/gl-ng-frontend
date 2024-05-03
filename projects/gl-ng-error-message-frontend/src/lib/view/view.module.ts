import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlNgInputsFrontendModule } from '../../../../gl-ng-inputs-frontend/src/lib/gl-ng-inputs-frontend.module';

import { ComponentModule } from '../component/component.module';
import { GlViewErrorMessageComponent } from './error-message/gl-view-error-message.component';

@NgModule({
    exports: [
        GlViewErrorMessageComponent
    ],
    imports: [
    CommonModule,
    ComponentModule,
    GlNgInputsFrontendModule,
    GlViewErrorMessageComponent
]
})
export class ViewModule { }
