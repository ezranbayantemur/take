import type {IconProps as VectorIconProps} from 'react-native-vector-icons/Icon';

type IcoMoonProps = Omit<VectorIconProps, 'name'>;

export type IconNames = 'cart' | 'search' | 'cross' | 'credit-card';

export default interface IconProps extends IcoMoonProps {
  name: IconNames;
}
