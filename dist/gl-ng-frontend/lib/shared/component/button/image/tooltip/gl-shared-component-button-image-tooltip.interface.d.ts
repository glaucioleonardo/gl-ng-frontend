export interface IImageButtonTooltip {
    src: string;
    alt: string;
    id: string;
    show?: boolean;
    verticalPosition?: TButtonToolTipVerticalPosition;
    horizontalPosition?: TButtonToolTipHorizontalPosition;
    callback(args: any): void;
}
export declare type TButtonToolTipVerticalPosition = 'top' | 'bottom';
export declare type TButtonToolTipHorizontalPosition = 'left' | 'center' | 'right';
//# sourceMappingURL=gl-shared-component-button-image-tooltip.interface.d.ts.map