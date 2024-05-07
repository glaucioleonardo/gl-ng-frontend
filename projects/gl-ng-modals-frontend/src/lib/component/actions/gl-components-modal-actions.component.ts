import { Component, ViewChild } from '@angular/core';
import { GlComponentsModalActionsService } from './gl-components-modal-actions.service';
import { GlComponentsModalActionsItemComponent } from './item/gl-components-modal-actions-item.component';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'gl-components-modal-actions',
  templateUrl: './gl-components-modal-actions.component.html',
  imports: [
    GlComponentsModalActionsItemComponent,
    NgIf,
    NgForOf
  ],
  styleUrls: ['./gl-components-modal-actions.component.scss']
})

export class GlComponentsModalActionsComponent {
  @ViewChild('modalActionsCloseContainer') set modalActionsCloseContainer(container) {
    if (container) {
      this.service._showContainer(true);
    }
  }

  constructor(public service: GlComponentsModalActionsService) { }
}

