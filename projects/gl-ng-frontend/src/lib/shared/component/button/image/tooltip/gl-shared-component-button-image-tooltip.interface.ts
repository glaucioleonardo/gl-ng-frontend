export interface IImageButtonTooltip {
  src: string;
  alt: string;
  id: string;
  show?: boolean;
  verticalPosition?: TButtonToolTipVerticalPosition;
  horizontalPosition?: TButtonToolTipHorizontalPosition;
  callback(args): void;
}

export type TButtonToolTipVerticalPosition = 'top' | 'bottom';
export type TButtonToolTipHorizontalPosition = 'left' | 'center' |'right';
