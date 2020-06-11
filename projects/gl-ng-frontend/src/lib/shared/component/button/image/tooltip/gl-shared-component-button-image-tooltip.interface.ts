export interface IImageButtonTooltip {
  src: string;
  alt: string;
  id: string;
  show?: boolean;
  callback(args): void;
}
