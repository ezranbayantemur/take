import {View, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {color, padding} from '@style';

const deviceSize = Dimensions.get('window');
const HIGHLIGHT_SPEED = 950;

const ProductDetailPlaceholder = () => {
  return (
    <View testID="discover_placeholder">
      <SkeletonPlaceholder
        speed={HIGHLIGHT_SPEED}
        backgroundColor={color.MERCURY}>
        <View style={styles.container}>
          <View style={styles.image} />
          <View style={styles.title} />
          <View style={styles.seller} />
          <View style={styles.line} />
          <View style={styles.line} />
          <View style={styles.line} />
          <View style={styles.line} />
          <View style={styles.line} />
        </View>
      </SkeletonPlaceholder>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: padding.MEDIUM,
  },
  image: {
    alignSelf: 'center',
    width: deviceSize.width * 0.9,
    height: deviceSize.height * 0.45,
    borderRadius: 10,
    margin: padding.MEDIUM,
  },
  title: {
    width: deviceSize.width * 0.5,
    padding: padding.MEDIUM,
    borderRadius: 10,
    marginVertical: padding.TINY,
  },
  seller: {
    width: deviceSize.width * 0.3,
    padding: padding.MEDIUM,
    borderRadius: 10,
    marginVertical: padding.TINY,
    marginBottom: padding.LARGE,
  },
  line: {
    width: deviceSize.width * 0.8,
    padding: padding.SMALL,
    borderRadius: 5,
    marginVertical: padding.TINY,
  },
});

export default ProductDetailPlaceholder;
