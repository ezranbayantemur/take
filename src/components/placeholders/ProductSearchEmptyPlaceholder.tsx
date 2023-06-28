import {Text, View, StyleSheet} from 'react-native';
import React from 'react';
import Icon from '../Icon';
import {color, font, padding, typography} from '@style';

const ProductSearchEmptyPlaceholder = () => {
  return (
    <View style={styles.container}>
      <Icon name="search" style={styles.icon} />
      <Text style={styles.text}>Aramayla eşleşen bir ürün bulunamadı</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    paddingTop: padding.LARGE,
  },
  text: {
    marginTop: padding.SMALL,
    color: color.SMOKE,
    fontFamily: font.REGULAR,
    fontSize: typography.BIG,
  },
  icon: {
    marginVertical: padding.MEDIUM,
    textAlign: 'center',
    color: color.SMOKE,
    fontSize: typography.HUGE,
  },
});

export default ProductSearchEmptyPlaceholder;
