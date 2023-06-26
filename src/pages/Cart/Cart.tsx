import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import React from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {RootState} from '../../redux/store';
import {CartProduct} from '../../redux/types';
import {useDispatch, useSelector} from 'react-redux';
import {
  Button,
  CartCard,
  DiscountCard,
  CartEmptyPlaceholder,
} from '@components';
import {
  addToCart,
  decreaseProductOnCart,
} from '../../redux/features/cart/slice';
import {Discount} from '@types';
import styles from './Cart.style';

const CartPage = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const productOrders = useSelector<RootState, CartProduct[]>(
    state => state.cart.productOrders,
  );
  const discounts = useSelector<RootState, Discount[]>(
    state => state.cart.discounts,
  );
  const subTotal = useSelector<RootState, number>(state => state.cart.subTotal);

  /**
   * Removing cart icon from header for prevent recursive navigation flow
   */
  useFocusEffect(
    React.useCallback(() => {
      navigation.setOptions({
        headerRight: () => null,
      });
    }, [navigation]),
  );

  const renderOrder = (item: CartProduct, index: number) => (
    <CartCard
      key={`${item.product.id}_${index}`}
      testID={`cart_card_${index}`}
      product={item.product}
      quantity={item.quantity}
      onIncreaseQuantity={() => dispatch(addToCart(item.product))}
      onDecreaseQuantity={() => dispatch(decreaseProductOnCart(item.product))}
    />
  );

  const renderDiscount = (discount: Discount, index: number) => (
    <DiscountCard
      key={`${index}_${discount.categoryTitle}`}
      testID={`discount_${index}_${discount.categoryTitle}`}
      data={discount}
    />
  );

  if (productOrders.length === 0) {
    return <CartEmptyPlaceholder />;
  }

  return (
    <SafeAreaView style={styles.container} testID="cart_page">
      <ScrollView>
        {productOrders.map(renderOrder)}

        {discounts.map(renderDiscount)}

        <View style={styles.sub_total_container}>
          <Text style={styles.sub_total_text}>Toplam: {subTotal} TL</Text>
        </View>

        <Button text="Siparişi Onayla" onPress={() => null} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CartPage;
