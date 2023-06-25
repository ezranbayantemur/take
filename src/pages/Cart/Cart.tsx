import {FlatList, ListRenderItem, SafeAreaView, Text} from 'react-native';
import React from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {RootState} from '../../redux/store';
import {CartProduct} from '../../redux/types';
import {useDispatch, useSelector} from 'react-redux';
import {CartCard} from '@components';
import {addToCart} from '../../redux/features/cart/slice';
import {Discount} from '@types';

const CartPage = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const productOrders = useSelector<RootState, CartProduct[]>(
    state => state.cart.productOrders,
  );
  const discounts = useSelector<RootState, Discount[]>(
    state => state.cart.discounts,
  );

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

  const renderOrder: ListRenderItem<CartProduct> = ({item, index}) => (
    <CartCard
      key={`${item.product.id}_${index}`}
      testID={`cart_card_${index}`}
      product={item.product}
      quantity={item.quantity}
      onIncreaseQuantity={() => dispatch(addToCart(item.product))}
    />
  );

  return (
    <SafeAreaView testID="cart_page">
      <FlatList
        data={productOrders}
        renderItem={renderOrder}
        bounces={false}
        showsVerticalScrollIndicator={false}
      />
      {discounts.map((discount, index) => {
        if (!discount.hasProduct) {
          return null;
        }

        if (discount.hasDiscount) {
          return (
            <Text key={index}>
              "{discount.categoryTitle}" kategorisindeki ürünlere "%
              {discount.discountPercentage}" indirim uygulandı. Yeni fiyat "
              {discount.totalPrice}TL" yerine "{discount.discountedPrice}
              TL"
            </Text>
          );
        }

        return (
          <Text key={index}>
            "{discount.categoryTitle}" kategorisindeki ürünlere "%
            {discount.discountPercentage}lik" indirim uygulanması için Bu
            kategoriden "{discount.remainingPricetoApplyDiscount}" TL lik daha
            ürün ekleyin
          </Text>
        );
      })}
    </SafeAreaView>
  );
};

export default CartPage;
