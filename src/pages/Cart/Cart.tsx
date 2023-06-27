import {FlatList, ListRenderItem, SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {AppDispatch, RootState} from '../../redux/store';
import {ProductOrder} from '@types';
import {useDispatch, useSelector} from 'react-redux';
import {
  Button,
  CartCard,
  DiscountCard,
  CartEmptyPlaceholder,
} from '@components';
import {addToCart, decreaseProductOnCart, removeProductOrder} from '@features';
import {Discount} from '@types';
import styles from './Cart.style';

const CartPage = () => {
  const navigation = useNavigation<any>();
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
          <>
            <View style={styles.sub_total_container}>
              <Text style={styles.sub_total_text}>
                Toplam Tutar: {subTotal} TL
              </Text>
            </View>
            {discounts.map(renderDiscount)}
            <Button text="Siparişi Onayla" onPress={() => null} />
          </>
        )}
      />
    </SafeAreaView>
  );
};

export default CartPage;
