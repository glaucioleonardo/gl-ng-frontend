import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VgImaAdsComponent } from './vg-ima-ads.component';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
export class VgImaAdsModule {
}
VgImaAdsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, VgCoreModule],
                declarations: [VgImaAdsComponent],
                exports: [VgImaAdsComponent],
            },] }
];
//# sourceMappingURL=ima-ads.module.js.map