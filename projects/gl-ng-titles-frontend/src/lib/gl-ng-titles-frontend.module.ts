import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GlComponentTitleLabelButtonContainerComponent } from './component/label/button/container/gl-component-title-label-button-container.component';
import { GlComponentTitleLabelButtonSimpleComponent } from './component/label/button/simple/gl-component-title-label-button-simple.component';
import { GlComponentTitleLabelSimpleComponent } from './component/label/simple/gl-component-title-label-simple.component';
import { GlComponentTitlePageComponent } from './component/page/gl-component-title-page.component';

@NgModule({
  declarations: [
    GlComponentTitleLabelSimpleComponent,
    GlComponentTitleLabelButtonSimpleComponent,
    GlComponentTitleLabelButtonContainerComponent,
    GlComponentTitlePageComponent
  ],
    imports: [
        CommonModule
    ],
  exports: [
    GlComponentTitleLabelSimpleComponent,
    GlComponentTitleLabelButtonSimpleComponent,
    GlComponentTitleLabelButtonContainerComponent,
    GlComponentTitlePageComponent
  ]
})
export class GlNgTitlesFrontendModule { }
