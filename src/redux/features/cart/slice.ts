import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {state} from './state';
import {Product} from '@types';
import {discountApplier} from '@utils';
import categoryDiscountPlans from './categoryDiscountPlans';

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
      cartSlice.caseReducers.updateSubTotal(cartState);

      /**
       * Get the index of the product in the cart orders
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
    decreaseProductOnCart: (cartState, action: PayloadAction<Product>) => {
      const selectedProduct = action.payload;

      /**
       * Remove the product to the allProductsInCart array for
       * calculating discounts
       */
      const productIndex = cartState.allProductsInCart.findIndex(
        product => product.id === selectedProduct.id,
      );
      cartState.allProductsInCart.splice(productIndex, 1);
      cartSlice.caseReducers.updateSubTotal(cartState);

      /**
       * Get the index of the product in the cart orders
       */
      const productCartIndex = cartState.productOrders.findIndex(
        product => product.product.id === selectedProduct.id,
      );

      const product = cartState.productOrders[productCartIndex];
      /**
       * If the product is the last product on the cart orders,
       * Cart order will be removed
       * */
      const isOrderWillRemoved = product.quantity - 1 === 0;

      if (isOrderWillRemoved) {
        cartState.productOrders.splice(productCartIndex, 1);
        return;
      }

      /**
       * If the product is already on the cart,
       * Decrease the quantity and update the total price
       * */
      product.quantity -= 1;
      product.totalPrice -= product.quantity;
    },
    updateSubTotal: cartState => {
      /**
       * Calculating discount for every product in/out
       */
      const calculatedDiscounts = categoryDiscountPlans.map(plan =>
        discountApplier({
          productsInCart: cartState.allProductsInCart,
          categoryName: plan.categoryName,
          discountPercentage: plan.discountPercentage,
          discountApplyLimitPrice: plan.discountApplyLimitPrice,
        }),
      );

      cartState.discounts = calculatedDiscounts;

      /**
       * Calculating total price without discount
       */
      const totalPriceWithoutDiscount = cartState.allProductsInCart.reduce(
        (orderAcc, currentProduct) => orderAcc + currentProduct.product_price,
        0,
      );

      /**
       * Calculating total discounted
       */
      const totalDiscountedPrice = calculatedDiscounts.reduce(
        (discountAcc, currentDiscount) => {
          const {totalPrice, discountedPrice} = currentDiscount;
          return discountAcc + (totalPrice - discountedPrice);
        },
        0,
      );

      /**
       * Subtracting total discounted price from total price
       */
      cartState.subTotal = totalPriceWithoutDiscount - totalDiscountedPrice;
    },
  },
});

export const {addToCart, decreaseProductOnCart} = cartSlice.actions;

export default cartSlice.reducer;
