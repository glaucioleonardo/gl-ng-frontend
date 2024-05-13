export interface IModalItemAction {
  id: number;
  title: string;
  icon: string;
  action: () => void;
  red: boolean;
  green: boolean;
  hide?: boolean;
  groupSplit?: boolean;
}
