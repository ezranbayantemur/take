import type {TouchableOpacityProps} from 'react-native';

export type ButtonType = 'default' | 'outline';

export interface ButtonProps extends Omit<TouchableOpacityProps, 'onPress'> {
  text: string;
  onPress: () => void;
  loading?: boolean;
  type?: ButtonType;
}
