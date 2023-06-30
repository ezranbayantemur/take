import type routes from './routes';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  [routes.LOGIN]: undefined;
  [routes.REGISTER]: undefined;
  [routes.DISCOVER]: undefined;
  [routes.PRODUCTS]: {category_name: string};
  [routes.PRODUCT_DETAIL]: {product_id: number};
  [routes.CART]: undefined;
};

export type LoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  routes.LOGIN
>;

export type RegisterScreenProps = NativeStackScreenProps<
  RootStackParamList,
  routes.REGISTER
>;

export type DiscoverScreenProps = NativeStackScreenProps<
  RootStackParamList,
  routes.DISCOVER
>;

export type ProductsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  routes.PRODUCTS
>;

export type ProductDetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  routes.PRODUCT_DETAIL
>;

export type CartScreenProps = NativeStackScreenProps<
  RootStackParamList,
  routes.CART
>;
