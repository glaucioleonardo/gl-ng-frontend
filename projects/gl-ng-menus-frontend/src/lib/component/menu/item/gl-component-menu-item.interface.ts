export interface IMenuItem {
  id: number;
  src?: string;
  href: string;
  fragment?: string;
  alt: string;
  content: string;
  absolute?: boolean;
  class?: TMenuItemTheme;
  target?: TUrlTarget;
}

export interface IMenuItemComplex {
  id: number;
  src?: string;
  href: string;
  fragment?: string;
  alt: string;
  content: string;
  absolute?: boolean;
  class?: 'translucid' | 'dark' | '';
  hasSubitem?: boolean;
  active?: boolean;
  subItems?: IMenuItem[];
  target?: TUrlTarget;
}

export type TUrlTarget = '_self' | '_blank' | '_parent' | '_top';
export type TMenuItemTheme = 'translucid' | 'dark' | '' | 'left-blue' |
  'left-green' | 'left-yellow' | 'left-red' | 'left-orange' | 'left-pink' |
  'left-purple' | string
