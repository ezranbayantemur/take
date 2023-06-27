import {StyleSheet} from 'react-native';
import {color, font, padding, typography} from '@style';

export default StyleSheet.create({
  container: {
    margin: padding.SMALL,
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
    textAlign: 'center',
    paddingBottom: padding.SMALL,
  },
  quantity: {
    fontFamily: font.REGULAR,
    fontSize: typography.SMALL,
  },
  price: {
    fontFamily: font.BOLD_ITALIC,
  },
  product_info_container: {
    flex: 1,
    paddingLeft: padding.SMALL,
    justifyContent: 'center',
    alignItems: 'flex-start',
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
  close_button_icon: {
    marginTop: padding.SMALL,
    alignSelf: 'flex-start',
  },
});
