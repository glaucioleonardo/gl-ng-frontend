import { TButtonToolTipBorder, TButtonToolTipHorizontalPosition, TButtonToolTipVerticalPosition, TButtonToolTipWidth } from './gl-shared-component-button-image-tooltip.interface';
export declare class GlSharedComponentButtonImageTooltipComponent {
    id: any;
    alt: any;
    src: any;
    show: boolean;
    callback: () => void;
    verticalPosition: TButtonToolTipVerticalPosition;
    horizontalPosition: TButtonToolTipHorizontalPosition;
    fullwidth: TButtonToolTipWidth;
    borderRadius: TButtonToolTipBorder;
    constructor();
}
