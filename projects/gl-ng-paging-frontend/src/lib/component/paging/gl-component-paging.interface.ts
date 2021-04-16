import { TTheme } from '../../interfaces/global.interface';

export interface IInitialFinalRange {
  initial: number;
  final: number;
}

export interface IPageButtons {
  page: number;
  active: boolean;
}

export interface IPaging {
  event: MouseEvent;
  type: TPagingType;
}

export type TPagingType = 'first' | 'next' | 'previous' | 'last';
export type TPagingThemeType = 'translucid' | 'dark' | '';

export interface IItemsPerPage {
  title: string;
  innerValue: string;
  value: string;
  theme: 'active' | '' | TTheme;
  pageSize: number;
}
