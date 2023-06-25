import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {state} from './state';
import {Product} from '@types';
import {discountApplier} from '@utils';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: state,
  reducers: {
    addToCart: (cartState, action: PayloadAction<Product>) => {
      const selectedProduct = action.payload;

      /**
       * Push the product to the allProductsInCart array for
       * calculating discounts
       */
      cartState.allProductsInCart.push(selectedProduct);
      cartSlice.caseReducers.updateDiscounts(cartState);

      /**
       * Get the index of the product in the cart
       */
      const productCartIndex = cartState.productOrders.findIndex(
        product => product.product.id === selectedProduct.id,
      );

      const isProductAlreadyOnCart = productCartIndex !== -1;

      /**
       * If the product is not on the cart,
       * create a new product order
       * */
      if (!isProductAlreadyOnCart) {
        cartState.productOrders.push({
          product: selectedProduct,
          quantity: 1,
          totalPrice: selectedProduct.product_price,
        });

        return;
      }

      /**
       * If the product is already on the cart,
       * increase the quantity and update the total price
       * */
      const product = cartState.productOrders[productCartIndex];
      product.quantity += 1;
      product.totalPrice = product.quantity * product.product.product_price;
    },
    removeFromCart: (cartState, action: PayloadAction<Product>) => {
      cartState.allProductsInCart = cartState.allProductsInCart.filter(
        product => product.id !== action.payload.id,
      );
    },
    updateDiscounts: cartState => {
      const discountElectronics = discountApplier({
        productsInCart: cartState.allProductsInCart,
        categoryName: 'electronic',
        discountPercentage: 5,
        discountApplyLimitPrice: 1000,
      });

      const discountJewelry = discountApplier({
        productsInCart: cartState.allProductsInCart,
        categoryName: 'jewelry',
        discountPercentage: 10,
        discountApplyLimitPrice: 750,
      });

      cartState.discounts = [discountElectronics, discountJewelry];
    },
  },
});

export const {addToCart, removeFromCart} = cartSlice.actions;

export default cartSlice.reducer;
