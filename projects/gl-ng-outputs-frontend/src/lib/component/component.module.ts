import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { GlComponentOutputsVideoPreviewComponent } from './video/preview/gl-component-outputs-video-preview.component';

@NgModule({
  declarations: [
    GlComponentOutputsVideoPreviewComponent
  ],
  imports: [
    CommonModule,
    VgCoreModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    VgControlsModule
  ],
  exports: [
    GlComponentOutputsVideoPreviewComponent
  ]
})
export class ComponentModule { }
