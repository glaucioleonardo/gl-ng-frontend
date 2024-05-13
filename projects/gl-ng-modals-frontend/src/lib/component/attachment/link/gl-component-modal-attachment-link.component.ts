import { Component, Input } from '@angular/core';
import { GlComponentModalAttachmentLinkService } from './gl-component-modal-attachment-link.service';
import { GlComponentInputButtonSimpleComponent } from '../../../../../../gl-ng-inputs-frontend/src/lib/component/button/simple/gl-component-input-button-simple.component';
import { GlComponentModalHeaderComponent } from '../../header/gl-component-modal-header.component';


@Component({
    selector: 'gl-component-modal-attachment-link',
    templateUrl: './gl-component-modal-attachment-link.component.html',
    styleUrls: ['./gl-component-modal-attachment-link.component.scss'],
    standalone: true,
    imports: [GlComponentModalHeaderComponent, GlComponentInputButtonSimpleComponent]
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
