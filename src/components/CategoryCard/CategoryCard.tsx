import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import ShowCaseProductCard from '../ShowCaseProductCard';
import type {ShowCaseProduct} from '@types';
import type {CategoryCardProps} from './CategoryCard.types';

import styles from './CategoryCard.style';

const CategoryCard = ({
  testID,
  title,
  showcaseData,
  onSelect,
}: CategoryCardProps) => {
  const handleOnSelectProduct = (product: ShowCaseProduct) => {
    onSelect(product);
  };

  return (
    <View testID={`${testID}_categorycard`} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {showcaseData.map((product, index) => (
          <ShowCaseProductCard
            key={`categorycard_${index}`}
            testID={`${testID}_categorycard_${index}`}
            data={product}
            onSelect={() => handleOnSelectProduct(product)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoryCard;
