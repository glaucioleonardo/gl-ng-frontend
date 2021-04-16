export interface IMenuItem {
  src?: string;
  href: string;
  fragment?: string;
  alt: string;
  content: string;
  absolute?: boolean;
  class?: 'translucid' | 'dark' | '';
  target?: TUrlTarget;
}

export interface IMenuItemComplex {
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
export type TMenuItemTheme = 'translucid' | 'dark' | '';
