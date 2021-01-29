import { Component, Input } from '@angular/core';
import {
  TButtonToolTipBorder,
  TButtonToolTipHorizontalPosition,
  TButtonToolTipVerticalPosition, TButtonToolTipWidth
} from './gl-shared-component-button-image-tooltip.interface';

@Component({
  selector: 'gl-shared-component-button-image-tooltip',
  templateUrl: './gl-shared-component-button-image-tooltip.component.html',
  styleUrls: ['./gl-shared-component-button-image-tooltip.component.scss']
})
export class GlSharedComponentButtonImageTooltipComponent {
  @Input() id;
  @Input() alt;
  @Input() src;
  @Input() show = true;
  @Input() callback: () => void;

  @Input() verticalPosition: TButtonToolTipVerticalPosition = 'top';
  @Input() horizontalPosition: TButtonToolTipHorizontalPosition = 'center';
  @Input() fullwidth: TButtonToolTipWidth = 'default';
  @Input() borderRadius: TButtonToolTipBorder = 'default';

  constructor() { }
}
