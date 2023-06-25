import {SafeAreaView, Text} from 'react-native';
import React from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

const CartPage = () => {
  const navigation = useNavigation<any>();

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

  return (
    <SafeAreaView testID="cart_page">
      <Text>Cart</Text>
    </SafeAreaView>
  );
};

export default CartPage;
