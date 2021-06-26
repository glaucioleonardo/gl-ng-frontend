export interface IButtonImageSimple {
  id: string;
  alt: string;
  src: string;
  callback: (args?: any[]) => void;
  disableDragging?: boolean;
}
