import {color, font, padding, typography} from '@style';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message_text: {
    fontFamily: font.REGULAR,
    fontSize: typography.BIG,
    marginVertical: padding.MEDIUM,
    color: color.SMOKE,
  },
});
