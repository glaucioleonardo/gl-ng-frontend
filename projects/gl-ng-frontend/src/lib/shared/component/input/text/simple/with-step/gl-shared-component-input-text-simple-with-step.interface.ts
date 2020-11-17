export interface IInputTextStepButton {
  type: TStepType;
  previousValue: number;
  newValue: number;
}

export type TStepType = 'increase' | 'decrease' | 'typing';
