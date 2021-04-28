import { Input } from '@angular/core';

export interface INavigationTab {
  active: boolean;
  showSeparator: boolean;
  sequence: number;
  description: string;

  isTheFirst: boolean;
  isTheLast: boolean;
  enabled: boolean;

  srcIcon?: string;
  showIcon?: boolean;
}
