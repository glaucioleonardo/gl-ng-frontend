export type TListReorder = 'move-up' | 'move-down';

export interface IMoveDownResult {
  type: TListReorder;
  id: number;
}
