export interface IModalItemAction {
  title: string;
  icon: string;
  action: () => void;
  red: boolean;
  hide?: boolean;
}
