import { TCurrencyTypes, TPercentageTypes } from 'gl-w-frontend';

export interface ISimpleTextResult {
  value: string;
}
export type TInputType = 'text' | 'email' | 'password' | 'search' | 'tel' | 'time' | 'url';
export type TInputTextMask = string | TCurrencyTypes | TPercentageTypes | 'numeric' | 'integer' | 'custom';
export type TInputTextTheme = '' | 'dark' | 'light' | 'light-translucid';
