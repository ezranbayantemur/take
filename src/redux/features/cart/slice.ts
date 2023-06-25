import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {state} from './state';
import {Product} from '@types';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: state,
  reducers: {
    addToCart: (cartState, action: PayloadAction<Product>) => {
      cartState.productsInCart.push(action.payload);
    },
    removeFromCart: (cartState, action: PayloadAction<Product>) => {
      cartState.productsInCart = cartState.productsInCart.filter(
        product => product.id !== action.payload.id,
      );
    },
  },
});

export const {addToCart, removeFromCart} = cartSlice.actions;

export default cartSlice.reducer;
