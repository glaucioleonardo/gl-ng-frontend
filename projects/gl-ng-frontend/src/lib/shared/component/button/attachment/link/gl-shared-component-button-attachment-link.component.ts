import { Component } from '@angular/core';
import { GlSharedComponentModalAttachmentLinkService } from '../../../modal/attachment/link/gl-shared-component-modal-attachment-link.service';

@Component({
  selector: 'gl-shared-component-button-attachment-link',
  templateUrl: './gl-shared-component-button-attachment-link.component.html',
  styleUrls: ['./gl-shared-component-button-attachment-link.component.scss']
})
export class GlSharedComponentButtonAttachmentLinkComponent {

  constructor(public service: GlSharedComponentModalAttachmentLinkService) { }

}
