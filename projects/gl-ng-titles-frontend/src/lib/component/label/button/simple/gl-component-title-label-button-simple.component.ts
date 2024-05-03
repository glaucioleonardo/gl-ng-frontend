import { Component, Input } from '@angular/core';
import { TTheme } from '../../../../interfaces/global.interface';
import { NgIf } from '@angular/common';

@Component({
    selector: 'gl-component-title-label-button-simple',
    templateUrl: './gl-component-title-label-button-simple.component.html',
    styleUrls: ['./gl-component-title-label-button-simple.component.scss'],
    standalone: true,
    imports: [NgIf]
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
