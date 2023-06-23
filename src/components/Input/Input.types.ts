import type {TextInputProps} from 'react-native';

export interface InputProps extends TextInputProps {
  debounceTime?: number;
  errorMessage?: string;
}
