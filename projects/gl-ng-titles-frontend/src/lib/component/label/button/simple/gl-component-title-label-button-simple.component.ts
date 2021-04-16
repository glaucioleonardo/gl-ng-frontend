import { Component, Input } from '@angular/core';
import { TTheme } from '../../../../interfaces/global.interface';

@Component({
  selector: 'gl-component-title-label-button-simple',
  templateUrl: './gl-component-title-label-button-simple.component.html',
  styleUrls: ['./gl-component-title-label-button-simple.component.scss']
})
export class GlComponentTitleLabelButtonSimpleComponent {

  @Input() id: string;
  @Input() alt: string;
  @Input() src: string;
  @Input() required = false;
  @Input() theme: TTheme = '';
  @Input() requiredFieldDescription = 'Required field';

  constructor() { }
}
