import { Component, Input } from '@angular/core';
import { GlComponentModalAlertService } from './gl-component-modal-alert.service';

@Component({
  selector: 'gl-component-modal-alert',
  templateUrl: './gl-component-modal-alert.component.html',
  styleUrls: ['./gl-component-modal-alert.component.scss']
})
export class GlComponentModalAlertComponent {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() modalLogo: string;
  @Input() innerValueNo = 'No';
  @Input() innerValueYes = 'Yes';
  @Input() innerValueOK = 'OK';

  @Input() noValue = 'no';
  @Input() yesValue = 'yes';
  @Input() okValue = 'ok';

  constructor(public service: GlComponentModalAlertService) { }
}
