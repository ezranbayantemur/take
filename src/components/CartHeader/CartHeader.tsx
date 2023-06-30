import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {routes} from '@route';
import {RootState} from '../../redux/store';
import Icon from '../Icon/Icon';
import style from './CartHeader.style';

const CartHeader = () => {
  const navigation = useNavigation<any>();
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
