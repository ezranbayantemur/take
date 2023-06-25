export interface InputCounterProps {
  testID: string;
  value: number;
  onIncrease?: (value: number) => void;
  onDecrease?: (value: number) => void;
  onValueChange?: (value: number) => void;
}
