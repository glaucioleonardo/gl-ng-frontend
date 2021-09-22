import { Component } from '@angular/core';
import { GlComponentModalActionsService } from './gl-component-modal-actions.service';

@Component({
  selector: 'gl-component-modal-actions',
  templateUrl: './gl-component-modal-actions.component.html',
  styleUrls: ['./gl-component-modal-actions.component.scss']
})
export class GlComponentModalActionsComponent {

  constructor(public service: GlComponentModalActionsService) { }
}
