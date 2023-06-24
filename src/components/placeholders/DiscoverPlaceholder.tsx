import {View, StyleSheet} from 'react-native';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {color, padding} from '@style';

const HIGHLIGHT_SPEED = 950;
const PRODUCT_SKELETON_COUNT = 3;
const CATEGORY_COUNT = 5;

const productSkeleton = Array.from(Array(PRODUCT_SKELETON_COUNT).keys());
const categorySkeleton = Array.from(Array(CATEGORY_COUNT).keys());

const DiscoverPlaceholder = () => {
  return (
    <View testID="discover_placeholder">
      <SkeletonPlaceholder
        speed={HIGHLIGHT_SPEED}
        backgroundColor={color.MERCURY}>
        <View>
          {categorySkeleton.map(c_key => (
            <View key={c_key}>
              <View style={styles.title} />
              <View style={styles.list_container}>
                {productSkeleton.map(p_key => (
                  <View key={p_key} style={styles.product_container}>
                    <View style={styles.image} />
                    <View style={styles.name} />
                    <View style={styles.seller} />
                    <View style={styles.price} />
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>
      </SkeletonPlaceholder>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: padding.LARGE,
    width: 160,
    height: 40,
    borderRadius: 10,
    margin: padding.MEDIUM,
  },
  list_container: {
    marginVertical: padding.SMALL,
    flexDirection: 'row',
  },
  product_container: {
    marginHorizontal: padding.MEDIUM,
    alignItems: 'center',
  },
  image: {
    marginVertical: padding.TINY,
    width: 120,
    height: 100,
    borderRadius: 10,
  },
  name: {
    marginVertical: padding.TINY,
    width: 80,
    height: 20,
    borderRadius: 5,
  },
  seller: {
    marginVertical: padding.TINY,
    width: 40,
    height: 10,
    borderRadius: 5,
  },
  price: {
    marginVertical: padding.TINY,
    width: 50,
    height: 10,
    borderRadius: 5,
  },
});

export default DiscoverPlaceholder;
