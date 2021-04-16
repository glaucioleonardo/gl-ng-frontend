import { Component, Input } from '@angular/core';
import { TButtonToolTipBorder, TButtonToolTipHorizontalPosition, TButtonToolTipVerticalPosition, TButtonToolTipWidth } from './gl-component-button-image-tooltip.interface';

@Component({
  selector: 'gl-component-button-image-tooltip',
  templateUrl: './gl-component-button-image-tooltip.component.html',
  styleUrls: ['./gl-component-button-image-tooltip.component.scss']
})
export class GlComponentButtonImageTooltipComponent {
  @Input() id;
  @Input() alt;
  @Input() src;
  @Input() show = true;
  @Input() callback: (args?: any[]) => void;

  @Input() verticalPosition: TButtonToolTipVerticalPosition = 'top';
  @Input() horizontalPosition: TButtonToolTipHorizontalPosition = 'center';
  @Input() fullwidth: TButtonToolTipWidth = 'default';
  @Input() borderRadius: TButtonToolTipBorder = 'default';

  constructor() { }
}
