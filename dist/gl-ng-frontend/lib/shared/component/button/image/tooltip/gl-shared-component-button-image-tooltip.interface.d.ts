export interface IImageButtonTooltip {
    src: string;
    alt: string;
    id: string;
    show?: boolean;
    verticalPosition?: TButtonToolTipVerticalPosition;
    horizontalPosition?: TButtonToolTipHorizontalPosition;
    borderRadius?: TButtonToolTipBorder;
    fullWidth?: TButtonToolTipWidth;
    callback(args: any): void;
}
export declare type TButtonToolTipVerticalPosition = 'top' | 'bottom';
export declare type TButtonToolTipHorizontalPosition = 'left' | 'center' | 'right';
export declare type TButtonToolTipWidth = 'fullwidth' | 'default';
export declare type TButtonToolTipBorder = 'rounded' | 'default';
