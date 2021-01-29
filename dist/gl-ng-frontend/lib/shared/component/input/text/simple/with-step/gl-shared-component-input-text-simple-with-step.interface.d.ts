export interface IInputTextStepButton {
    type: TStepType;
    previousValue: number;
    newValue: number;
}
export declare type TStepType = 'increase' | 'decrease' | 'typing';
