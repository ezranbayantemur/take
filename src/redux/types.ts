import type {Status} from '@enums';
import type {DiscoverCategory, Product, User} from '@types';

export interface AuthRequestType {
  email: string;
  password: string;
}

export interface ProductRequestType {
  category_name: string;
}

export interface ProductDetailRequestType {
  product_id: number;
}

export interface AuthResponseType {
  data: User;
  message: Status;
}

export interface DiscoverResponseType {
  data: DiscoverCategory[];
  message: Status;
}
export interface ProductResponseType {
  data: Product[];
  message: Status;
}
export interface ProductDetailResponseType {
  data: Product;
  message: Status;
}
