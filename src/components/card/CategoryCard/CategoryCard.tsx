import {View, Text, ScrollView, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import ShowCaseProductCard from '../ShowCaseProductCard';
import type {ShowCaseProduct} from '@types';
import type {CategoryCardProps} from './CategoryCard.types';

import styles from './CategoryCard.style';

const CategoryCard = ({
  testID,
  data,
  onProductSelect,
  onCategorySelect,
}: CategoryCardProps) => {
  const handleOnSelectProduct = (product: ShowCaseProduct) => {
    onProductSelect(product);
  };

  const handleOnSelectCategory = () => {
    onCategorySelect(data.category_name);
  };

  return (
    <View testID={`${testID}_categorycard`} style={styles.container}>
      <TouchableWithoutFeedback
        testID={`${testID}_categorycard_title_touchable`}
        onPress={handleOnSelectCategory}>
        <Text style={styles.title}>{data.category_title}</Text>
      </TouchableWithoutFeedback>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.showcase_products.map((product, index) => (
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

export default React.memo(CategoryCard);
