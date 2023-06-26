import {color, font, padding} from '@style';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: padding.MEDIUM,
  },
  discount_container: {
    paddingVertical: padding.MEDIUM,
    borderRadius: 5,
    padding: padding.SMALL,
    backgroundColor: color.MONZA,
  },
  not_enough_discount_container: {
    paddingVertical: padding.MEDIUM,
    borderRadius: 5,
    padding: padding.SMALL,
    backgroundColor: color.MERCURY,
  },
  discount_text: {
    color: color.ALABASTER,
    fontFamily: font.REGULAR,
  },
  discount_new_price_text: {
    fontFamily: font.BLACK,
  },
  not_enough_discount_text: {
    fontFamily: font.REGULAR,
  },
});
