import {Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import Icon from '../Icon';
import {color, font, padding, typography} from '@style';

const CartEmptyPlaceholder = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Icon name="cart" style={styles.icon} />
      <Text style={styles.text}>Sepette hiç ürün yok</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text: {
    marginTop: padding.SMALL,
    color: color.SMOKE,
    fontFamily: font.BOLD_ITALIC,
    fontSize: typography.HUGE,
  },
  icon: {
    textAlign: 'center',
    color: color.SMOKE,
    fontSize: typography.HUGE,
  },
});

export default CartEmptyPlaceholder;
