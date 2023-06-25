import {Product} from '@types';

export interface CartState {
  productsInCart: Product[];
}

export const state: CartState = {
  productsInCart: [],
};
