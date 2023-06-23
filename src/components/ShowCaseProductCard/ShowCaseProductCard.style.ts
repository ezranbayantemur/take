import {StyleSheet} from 'react-native';
import {color, font, typography} from '@style';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    zIndex: 1,
  },
  image_background_container: {
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    top: 0,
    bottom: 10,
  },
  image_background: {
    backgroundColor: color.MONZA,
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  product_name: {
    fontFamily: font.REGULAR,
    fontSize: 13,
  },
  seller_name: {
    fontFamily: font.BOLD,
    color: color.SMOKE,
    fontSize: typography.SMALL,
  },
  product_price: {
    fontFamily: font.BOLD,
  },
});
