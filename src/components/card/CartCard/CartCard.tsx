import {Image, Text, View} from 'react-native';
import React from 'react';
import styles from './CartCard.style';
import InputCounter from '../../InputCounter';
import Icon from '../../Icon';
import type {CartCardProps} from './CartCard.types';

const CartCard = ({
  testID,
  product,
  quantity,
  onRemove,
  onIncreaseQuantity,
  onDecreaseQuantity,
}: CartCardProps) => {
  const totalPrice = (product.product_price * quantity).toLocaleString('tr-TR');

  return (
    <View testID={`${testID}_cartcard`} style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={{
          uri: product.product_image,
        }}
      />
      <View style={styles.product_info_container}>
        <View>
          <Text style={styles.name}>{product.product_name}</Text>
          <Text style={styles.quantity}>Adet: {quantity}</Text>
          <Text style={styles.price}>{product.product_price} TL</Text>
        </View>
      </View>
      <View style={styles.price_container}>
        <InputCounter
          testID={`${testID}_cartcard_inputcounter`}
          value={quantity}
          onIncrease={onIncreaseQuantity}
          onDecrease={onDecreaseQuantity}
        />
        <Text style={styles.total_price}>
          <Text style={styles.total_title}>Toplam:</Text> {totalPrice} TL
        </Text>
      </View>
      <Icon
        testID={`${testID}_cartcard_remove`}
        style={styles.close_button_icon}
        name="cross"
        onPress={onRemove}
      />
    </View>
  );
};

export default React.memo(CartCard);
