import type {TouchableOpacityProps} from 'react-native';

export interface ButtonProps extends TouchableOpacityProps {
  text: string;
  loading?: boolean;
}
