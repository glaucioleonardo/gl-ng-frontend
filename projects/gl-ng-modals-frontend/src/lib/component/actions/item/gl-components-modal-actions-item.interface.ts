export interface IModalItemAction {
  id: number;
  title: string;
  icon: string;
  action: () => void;
  red: boolean;
  hide?: boolean;
}
