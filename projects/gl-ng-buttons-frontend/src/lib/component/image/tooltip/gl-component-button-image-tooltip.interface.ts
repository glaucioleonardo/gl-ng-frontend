export interface IImageButtonTooltip {
  src: string;
  alt: string;
  id: string;
  show?: boolean;
  verticalPosition?: TButtonToolTipVerticalPosition;
  horizontalPosition?: TButtonToolTipHorizontalPosition;
  borderRadius?: TButtonToolTipBorder;
  fullWidth?: TButtonToolTipWidth;
  callback(args?: any[]): void;
}

export type TButtonToolTipVerticalPosition = 'top' | 'bottom';
export type TButtonToolTipHorizontalPosition = 'left' | 'center' |'right';
export type TButtonToolTipWidth = 'fullwidth' | 'default';
export type TButtonToolTipBorder = 'rounded' | 'default';
