import {View, Text} from 'react-native';
import React from 'react';
import styles from './DiscountCard.style';
import type {DiscountCardProps} from './DiscountCard.types';

const categoryTitleParser: Record<string, string> = {
  jewelry: 'Takı',
  electronic: 'Elektronik',
  men_clothing: 'Erkek Giyim',
  women_clothing: 'Kadın Giyim',
};

const DiscountCard = ({
  testID,
  data: {
    categoryTitle,
    discountPercentage,
    discountedPrice,
    hasDiscount,
    hasProduct,
    remainingPricetoApplyDiscount,
    totalPrice,
  },
}: DiscountCardProps) => {
  if (!hasProduct) {
    return null;
  }

  const parsedCategoryTitle = categoryTitleParser[categoryTitle];
  if (hasDiscount) {
    return (
      <View testID={`${testID}_discount_discountcard`} style={styles.container}>
        <View style={styles.discount_container}>
          <Text style={styles.discount_text}>
            {parsedCategoryTitle} kategorisindeki ürünlere %{discountPercentage}{' '}
            indirim uygulandı. Yeni toplu fiyat {totalPrice} TL yerine{' '}
            <Text style={styles.discount_new_price_text}>
              {discountedPrice} TL
            </Text>{' '}
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View
      testID={`${testID}_not_enough_discount_discountcard`}
      style={styles.container}>
      <View style={styles.not_enough_discount_container}>
        <Text style={styles.not_enough_discount_text}>
          {parsedCategoryTitle} kategorisinde %{discountPercentage} indirim
          fırsatını yakalamak için bu kategoriden{' '}
          <Text style={styles.not_enough_discount_remain_price_text}>
            {remainingPricetoApplyDiscount} TL
          </Text>
          'lik daha ürün sepete ekleyin
        </Text>
      </View>
    </View>
  );
};

export default DiscountCard;
