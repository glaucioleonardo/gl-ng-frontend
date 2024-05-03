import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlComponentButtonAttachmentFileComponent } from './attachment/file/gl-component-button-attachment-file.component';
import { GlComponentButtonAttachmentLinkComponent } from './attachment/link/gl-component-button-attachment-link.component';
import { GlComponentButtonImageSimpleComponent } from './image/simple/gl-component-button-image-simple.component';
import { GlComponentButtonImageTooltipComponent } from './image/tooltip/gl-component-button-image-tooltip.component';
import { GlComponentButtonInterfaceComponent } from './interface/gl-component-button-interface.component';
import { GlComponentButtonMenuSimpleComponent } from './menu/simple/gl-component-button-menu-simple.component';
import { GlComponentButtonMenuTooltipComponent } from './menu/tooltip/gl-component-button-menu-tooltip.component';

@NgModule({
    imports: [
        CommonModule,
        GlComponentButtonAttachmentFileComponent,
        GlComponentButtonAttachmentLinkComponent,
        GlComponentButtonImageSimpleComponent,
        GlComponentButtonImageTooltipComponent,
        GlComponentButtonInterfaceComponent,
        GlComponentButtonMenuSimpleComponent,
        GlComponentButtonMenuTooltipComponent
    ],
    exports: [
        GlComponentButtonAttachmentFileComponent,
        GlComponentButtonAttachmentLinkComponent,
        GlComponentButtonImageSimpleComponent,
        GlComponentButtonImageTooltipComponent,
        GlComponentButtonInterfaceComponent,
        GlComponentButtonMenuSimpleComponent,
        GlComponentButtonMenuTooltipComponent
    ]
})
export class ComponentModule { }
