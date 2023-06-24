import {StyleSheet, Dimensions} from 'react-native';
import {color, font, padding, typography} from '@style';

const deviceSize = Dimensions.get('window');

const CONTAINER_WIDTH_LIMIT = 0.45;
const IMAGE_WIDTH_LIMIT = 0.4;

export default StyleSheet.create({
  container: {
    marginVertical: padding.MEDIUM,
    borderWidth: 1,
    borderColor: color.MERCURY,
    borderRadius: 10,
    maxWidth: deviceSize.width * CONTAINER_WIDTH_LIMIT,
    alignItems: 'center',
  },
  image: {
    maxWidth: deviceSize.width * IMAGE_WIDTH_LIMIT,
    width: 155,
    height: 185,
  },
  info_container: {
    alignItems: 'center',
    padding: padding.SMALL,
  },
  name: {
    fontFamily: font.REGULAR,
    fontSize: typography.NORMAL,
  },
  seller: {
    fontSize: typography.NORMAL,
    fontFamily: font.BOLD,
    color: color.SMOKE,
  },
  price: {
    marginTop: padding.TINY,
    fontSize: typography.NORMAL,
    fontFamily: font.BOLD,
  },
});
