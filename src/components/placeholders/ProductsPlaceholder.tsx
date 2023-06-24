import {View, StyleSheet} from 'react-native';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {color, padding} from '@style';

const HIGHLIGHT_SPEED = 950;
const ROW_COUNT = 5;

const rowSkeleton = Array.from(Array(ROW_COUNT).keys());

const ProductsPlaceholder = () => {
  return (
    <View testID="products_placeholder">
      <SkeletonPlaceholder
        speed={HIGHLIGHT_SPEED}
        backgroundColor={color.MERCURY}>
        <View>
          {rowSkeleton.map(key => (
            <View key={key} style={styles.product_container}>
              <View>
                <View style={styles.product} />
              </View>
              <View>
                <View style={styles.product} />
              </View>
            </View>
          ))}
        </View>
      </SkeletonPlaceholder>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    marginTop: padding.LARGE,
    width: 170,
    height: 270,
    borderRadius: 10,
  },
  product_container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default ProductsPlaceholder;
