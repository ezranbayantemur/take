import {font, padding, typography} from '@style';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  sub_total_container: {
    alignItems: 'flex-end',
    padding: padding.MEDIUM,
  },
  sub_total_text: {
    fontSize: typography.BIG,
    fontFamily: font.BOLD,
  },
});
