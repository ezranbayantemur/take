import {Product} from '@types';

export interface AuthRequestType {
  email: string;
  password: string;
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
