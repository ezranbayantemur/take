import {AuthStatus} from '@enums';
import {Product, User} from '@types';

export interface AuthRequestType {
  email: string;
  password: string;
}

export interface AuthResponseType {
  data: User;
  message: AuthStatus;
}

export interface ProductRequestType {
  category_name: string;
}

export interface ProductDetailRequestType {
  product_id: string;
}

export interface CartProduct {
  product: Product;
  quantity: number;
  totalPrice: number;
}
