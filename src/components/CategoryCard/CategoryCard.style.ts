import {StyleSheet} from 'react-native';
import {font, padding, typography} from '@style';

export default StyleSheet.create({
  container: {
    marginVertical: padding.MEDIUM,
  },
  title: {
    marginLeft: padding.SMALL,
    fontFamily: font.BLACK_ITALIC,
    fontSize: typography.HUGE,
  },
});
