import {color, font, padding, typography} from '@style';
import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

const IMAGE_WIDTH = deviceSize.width * 0.9;
const IMAGE_HEIGHT = deviceSize.height * 0.45;

export default StyleSheet.create({
  image: {
    alignSelf: 'center',
    marginTop: padding.SMALL,
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
  },
  product_name: {
    fontFamily: font.BOLD,
    fontSize: typography.BIG,
  },
  product_price: {
    fontFamily: font.BLACK,
    fontSize: typography.HUGE,
  },
  seller: {
    fontFamily: font.BOLD,
    fontSize: typography.MEDIUM,
    color: color.SMOKE,
  },
  product_description: {
    fontFamily: font.REGULAR_ITALIC,
    fontSize: typography.NORMAL,
  },
  product_description_container: {
    padding: padding.SMALL,
    marginBottom: padding.LARGE,
  },
  info_container: {
    padding: padding.SMALL,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
