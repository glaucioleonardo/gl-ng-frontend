import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlNgInputsFrontendModule } from '../../../../gl-ng-inputs-frontend/src/lib/gl-ng-inputs-frontend.module';

import { GlComponentFilterContainerComponent } from './filter/container/gl-component-filter-container.component';
import { GlComponentFilterComponent } from './filter/gl-component-filter.component';

@NgModule({
    imports: [
    CommonModule,
    GlNgInputsFrontendModule,
    GlComponentFilterComponent,
    GlComponentFilterContainerComponent
],
    exports: [
        GlComponentFilterComponent,
        GlComponentFilterContainerComponent
    ]
})
export class ComponentModule { }
