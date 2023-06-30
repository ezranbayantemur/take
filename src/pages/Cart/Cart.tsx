import React from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  Button,
  CartCard,
  DiscountCard,
  CartEmptyPlaceholder,
} from '@components';
import {addToCart, decreaseProductOnCart, removeProductOrder} from '@features';
import styles from './Cart.style';
import type {Discount} from '@types';
import type {ListRenderItem} from 'react-native';
import type {AppDispatch, RootState} from '../../redux/store';
import type {ProductOrder} from '@types';
import type {CartScreenProps} from '@route';

const CartPage = () => {
  const navigation = useNavigation<CartScreenProps['navigation']>();
  const dispatch = useDispatch<AppDispatch>();
  const productOrders = useSelector<RootState, ProductOrder[]>(
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

  const renderOrder: ListRenderItem<ProductOrder> = ({item, index}) => (
    <CartCard
      key={`${item.product.id}_${index}`}
      testID={`cart_card_${index}`}
      product={item.product}
      quantity={item.quantity}
      onRemove={() => dispatch(removeProductOrder(item))}
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
      <FlatList
        showsVerticalScrollIndicator={false}
        data={productOrders}
        contentContainerStyle={styles.order_list_content_container}
        renderItem={renderOrder}
        ListFooterComponentStyle={styles.order_list_footer}
        ListFooterComponent={() => (
          <View style={styles.footer_container}>
            {discounts.map(renderDiscount)}
            <View style={styles.sub_total_container}>
              <Text style={styles.sub_total_text}>
                Toplam Tutar: {subTotal} TL
              </Text>
            </View>
            <Button text="Siparişi Onayla" onPress={() => null} />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default CartPage;
