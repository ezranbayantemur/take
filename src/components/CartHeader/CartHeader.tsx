import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {routes} from '@route';
import Icon from '../Icon/Icon';
import style from './CartHeader.style';
import type {CartScreenProps} from '@route';
import type {RootState} from '../../redux/store';

const CartHeader = (): React.ReactElement => {
  const navigation = useNavigation<CartScreenProps['navigation']>();
  const productInCartCount = useSelector<RootState, number>(
    state => state.cart.allProductsInCart.length,
  );

  const isShowBadge = productInCartCount > 0;

  const handleOnPress = () => {
    navigation.navigate(routes.CART);
  };

  return (
    <TouchableOpacity testID="cartheader_touchable" onPress={handleOnPress}>
      <Icon name="cart" style={style.icon} />
      {isShowBadge && (
        <View style={style.badge_container}>
          <Text testID="cartheader_touchable_text" style={style.badge_title}>
            {productInCartCount}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CartHeader;
