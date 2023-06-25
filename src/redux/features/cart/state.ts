import {Product, Discount} from '@types';
import {CartProduct} from '../../types';
export interface CartState {
  productOrders: CartProduct[];
  allProductsInCart: Product[];
  discounts: Discount[];
  subTotal: number;
}

export const state: CartState = {
  productOrders: [],
  allProductsInCart: [],
  discounts: [],
  subTotal: 0,
};
