import { TCurrencyTypes, TPercentageTypes } from 'gl-w-input-frontend';

export interface ISimpleTextResult {
  value: string;
  unmaskedValue: string;
}
export type TInputType = 'text' | 'email' | 'password' | 'search' | 'tel' | 'time' | 'url';
export type TInputTextMask = string | TCurrencyTypes | TPercentageTypes | 'numeric' | 'integer' | 'custom';
export type TInputTextTheme = '' | 'dark' | 'light' | 'light-translucid';
