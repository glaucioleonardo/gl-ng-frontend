import { Component } from '@angular/core';
import { GlComponentModalAttachmentLinkService } from '../../../../../../gl-ng-modals-frontend/src/lib/component/attachment/link/gl-component-modal-attachment-link.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'gl-component-button-attachment-link',
  templateUrl: './gl-component-button-attachment-link.component.html',
  styleUrls: ['./gl-component-button-attachment-link.component.scss'],
  imports: [
    NgOptimizedImage
  ],
  standalone: true
})
export class GlComponentButtonAttachmentLinkComponent {

  constructor(public service: GlComponentModalAttachmentLinkService) { }

}
