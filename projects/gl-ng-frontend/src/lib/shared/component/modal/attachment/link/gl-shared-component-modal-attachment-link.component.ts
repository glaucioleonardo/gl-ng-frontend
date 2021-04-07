import { Component, Input } from '@angular/core';
import { GlSharedComponentModalAttachmentLinkService } from './gl-shared-component-modal-attachment-link.service';

@Component({
  selector: 'gl-shared-component-modal-attachment-link',
  templateUrl: './gl-shared-component-modal-attachment-link.component.html',
  styleUrls: ['./gl-shared-component-modal-attachment-link.component.scss']
})
export class GlSharedComponentModalAttachmentLinkComponent {
  @Input() title: string;
  @Input() subtitle: string = ': link';
  @Input() modalLogo: string;
  @Input() fileNameLabel: string = 'File name';
  @Input() fileNamePlaceholder: string = 'Type the file name';
  @Input() linkPlaceholder: string = 'Type the file link';
  @Input() cancelInnerValue: string = 'Cancel';

  constructor(public service: GlSharedComponentModalAttachmentLinkService) { }

}
