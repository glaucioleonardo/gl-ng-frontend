import { Component, Input } from '@angular/core';
import { GlSharedComponentModalAlertService } from './gl-shared-component-modal-alert.service';

@Component({
  selector: 'gl-shared-component-modal-alert',
  templateUrl: './gl-shared-component-modal-alert.component.html',
  styleUrls: ['./gl-shared-component-modal-alert.component.scss']
})
export class GlSharedComponentModalAlertComponent {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() modalLogo: string;
  @Input() innerValueNo = 'No';
  @Input() innerValueYes= 'Yes';
  @Input() innerValueOK= 'OK';

  @Input() noValue = 'no';
  @Input() yesValue= 'yes';
  @Input() okValue= 'ok';

  constructor(public service: GlSharedComponentModalAlertService) { }

}
