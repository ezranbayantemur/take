import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import styles from './ShowCaseProductCard.style';

import type {ShowCaseProductProps} from './ShowCaseProductCard.types';

const ShowCaseProductCard = ({
  testID,
  data: {product_name, product_price, product_image, seller_name},
  onSelect,
}: ShowCaseProductProps) => {
  return (
    <TouchableWithoutFeedback
      testID={`${testID}_showcasecard_touchable`}
      onPress={onSelect}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={{
            uri: product_image,
          }}
        />
        <View style={styles.image_background_container}>
          <View style={styles.image_background} />
        </View>
        <Text style={styles.product_name}>{product_name}</Text>
        <Text style={styles.seller_name}>{seller_name}</Text>
        <Text style={styles.product_price}>{product_price} TL</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default React.memo(ShowCaseProductCard);
