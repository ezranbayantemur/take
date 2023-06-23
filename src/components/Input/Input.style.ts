import {StyleSheet} from 'react-native';
import {color, padding, font, typography} from '@style';

export default StyleSheet.create({
  container: {
    backgroundColor: color.MERCURY,
    padding: padding.MEDIUM,
    borderRadius: 5,
    margin: padding.SMALL,
  },
  input: {
    fontFamily: font.REGULAR,
    fontSize: typography.NORMAL,
  },
});
