import { Component, Input } from '@angular/core';
import { GlComponentModalAlertService } from './gl-component-modal-alert.service';
import { GlComponentInputButtonSimpleComponent } from '../../../../../gl-ng-inputs-frontend/src/lib/component/button/simple/gl-component-input-button-simple.component';
import { GlComponentModalHeaderComponent } from '../header/gl-component-modal-header.component';
import { NgIf } from '@angular/common';

@Component({
    selector: 'gl-component-modal-alert',
    templateUrl: './gl-component-modal-alert.component.html',
    styleUrls: ['./gl-component-modal-alert.component.scss'],
    standalone: true,
    imports: [NgIf, GlComponentModalHeaderComponent, GlComponentInputButtonSimpleComponent]
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
