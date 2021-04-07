import { TCurrencyTypes, TPercentageTypes } from 'gl-w-frontend';
export interface ISimpleTextResult {
    value: string;
}
export declare type TInputTextMask = string | TCurrencyTypes | TPercentageTypes | 'numeric' | 'integer' | 'custom';
