import { IMenuItem, IMenuItemComplex } from './item/gl-component-menu-item.interface';

export type TMenuPosition = 'left' | 'right';

export interface ISideMenuData {
  title: string;
  subtitle: string;
  className?: string | 'dark' | 'translucid' | '';
  showSettings: boolean;
  showLogout: boolean;
  systemVersion: string;
  menuBottomTitle: string;
  menuBottomVersion?: string;
  menuPosition?: TMenuPosition;
  menuLogo?: string;
  settingsTarget?: TUrlTargets;
  settingsUrl: string;
  menuItems?: IMenuItem[];
  menuItemsComplex?: IMenuItemComplex[];
  logoutButton?: string;
  closeButton?: string;
  settingsButton?: string;
}

/**
 * Types of url targets
 * @param _blank Opens the linked document in a new tab or window.
 * @param _parent Opens the link in the parent frame. Frames are deprecated in HTML5.
 * @param _self Open the link in the current frame.
 * @param _top Opens the link in the top-most frame. Frames are deprecated in HTML5.
 */
export type TUrlTargets = '_blank' | '_parent' | '_self' | '_top'
