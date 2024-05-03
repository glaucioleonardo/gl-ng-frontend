import { Component, OnInit } from '@angular/core';
import { GlComponentsModalActionsService } from './gl-components-modal-actions.service';
import { GlComponentsModalActionsItemComponent } from './item/gl-components-modal-actions-item.component';

@Component({
  standalone: true,
  selector: 'gl-components-modal-actions',
  templateUrl: './gl-components-modal-actions.component.html',
  imports: [
    GlComponentsModalActionsItemComponent
  ],
  styleUrls: ['./gl-components-modal-actions.component.scss']
})
export class GlComponentsModalActionsComponent implements OnInit {
  constructor(public service: GlComponentsModalActionsService) { }

  ngOnInit(): void {
  }

}

