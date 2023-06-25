import {StyleSheet} from 'react-native';
import {color, font, padding, typography} from '@style';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: color.SMOKE,
    flexDirection: 'row',
  },
  image: {
    margin: padding.SMALL,
    width: 100,
    height: 100,
  },
  name: {
    fontFamily: font.BOLD,
    fontSize: typography.NORMAL,
  },
  quantity: {
    fontFamily: font.REGULAR,
    fontSize: typography.SMALL,
  },
  price: {
    fontFamily: font.BOLD_ITALIC,
  },
  product_info_container: {
    paddingLeft: padding.SMALL,
    justifyContent: 'center',
    alignItems: 'center',
  },
  price_container: {
    flex: 1,
    padding: padding.TINY,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  total_price: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    fontSize: typography.NORMAL,
    fontFamily: font.BLACK,
  },
  total_title: {
    fontFamily: font.REGULAR,
  },
});
