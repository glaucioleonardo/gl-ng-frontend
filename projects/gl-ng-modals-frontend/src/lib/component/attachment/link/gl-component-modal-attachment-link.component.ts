import { Component, Input } from '@angular/core';
import { GlComponentModalAttachmentLinkService } from './gl-component-modal-attachment-link.service';

@Component({
  selector: 'gl-component-modal-attachment-link',
  templateUrl: './gl-component-modal-attachment-link.component.html',
  styleUrls: ['./gl-component-modal-attachment-link.component.scss']
})
export class GlComponentModalAttachmentLinkComponent {
  @Input() title: string;
  @Input() subtitle = ': link';
  @Input() modalLogo: string;
  @Input() fileNameLabel = 'File name';
  @Input() fileNamePlaceholder = 'Type the file name';
  @Input() linkPlaceholder = 'Type the file link';
  @Input() cancelInnerValue = 'Cancel';

  constructor(public service: GlComponentModalAttachmentLinkService) { }

}
