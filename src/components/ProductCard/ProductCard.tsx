import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import type {ProductCardProps} from './ProductCard.types';

import styles from './ProductCard.style';

const ProductCard = ({testID, data, onSelect}: ProductCardProps) => {
  const {product_image, product_name, product_price, seller_name} = data;

  const handleOnSelect = () => {
    onSelect(data);
  };

  return (
    <TouchableOpacity
      testID={`${testID}_productcard_touchable`}
      style={styles.container}
      onPress={handleOnSelect}>
      <Image
        style={styles.image}
        source={{uri: product_image}}
        resizeMode="contain"
      />
      <View style={styles.info_container}>
        <Text style={styles.name}>{product_name}</Text>
        <Text style={styles.seller}>{seller_name}</Text>
        <Text style={styles.price}>{product_price} TL</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
