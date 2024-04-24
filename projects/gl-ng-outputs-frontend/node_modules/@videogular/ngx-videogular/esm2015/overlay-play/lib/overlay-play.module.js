import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VgOverlayPlayComponent } from './vg-overlay-play.component';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
export class VgOverlayPlayModule {
}
VgOverlayPlayModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, VgCoreModule],
                declarations: [VgOverlayPlayComponent],
                exports: [VgOverlayPlayComponent],
            },] }
];
//# sourceMappingURL=overlay-play.module.js.map