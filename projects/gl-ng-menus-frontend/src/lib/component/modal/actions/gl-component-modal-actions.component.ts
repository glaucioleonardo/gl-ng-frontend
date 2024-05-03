import { Component } from '@angular/core';
import { GlComponentModalActionsService } from './gl-component-modal-actions.service';
import { GlComponentModalActionsItemComponent } from './item/gl-component-modal-actions-item.component';
import { NgIf, NgFor } from '@angular/common';

@Component({
    selector: 'gl-component-modal-actions',
    templateUrl: './gl-component-modal-actions.component.html',
    styleUrls: ['./gl-component-modal-actions.component.scss'],
    standalone: true,
    imports: [NgIf, NgFor, GlComponentModalActionsItemComponent]
})
export class GlComponentModalActionsComponent {

  constructor(public service: GlComponentModalActionsService) { }
}
