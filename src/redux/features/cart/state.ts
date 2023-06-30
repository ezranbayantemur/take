import type {Product, Discount, ProductOrder} from '@types';
export interface CartState {
  productOrders: ProductOrder[];
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
