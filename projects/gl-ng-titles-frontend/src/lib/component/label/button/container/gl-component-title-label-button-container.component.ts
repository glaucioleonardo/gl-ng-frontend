import { Component, Input } from '@angular/core';
import { TTheme } from '../../../../interfaces/global.interface';
import { THorizontalAlignment } from '../../simple/gl-component-title-label-simple.interface';
import { GlComponentTitleLabelSimpleComponent } from '../../simple/gl-component-title-label-simple.component';

@Component({
    selector: 'gl-component-title-label-button-container',
    templateUrl: './gl-component-title-label-button-container.component.html',
    styleUrls: ['./gl-component-title-label-button-container.component.scss'],
    standalone: true,
    imports: [GlComponentTitleLabelSimpleComponent]
})
export class GlComponentTitleLabelButtonContainerComponent {

  @Input() labelValue;
  @Input() id;
  @Input() labelAlignment: THorizontalAlignment;
  @Input() required = false;
  @Input() theme: TTheme = '';
  @Input() requiredFieldDescription = 'Required field';

  constructor() { }
}
