import type {TouchableOpacityProps} from 'react-native';

export interface ButtonProps extends Omit<TouchableOpacityProps, 'onPress'> {
  text: string;
  onPress: () => void;
  loading?: boolean;
}
