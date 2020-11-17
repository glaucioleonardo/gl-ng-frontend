export interface INavigationTab {
  active: boolean;
  showSeparator: boolean;
  sequence: number;
  description: string;

  isTheFirst: boolean;
  isTheLast: boolean;
  enabled: boolean;
}
