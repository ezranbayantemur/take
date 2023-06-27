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
  order_list_content_container: {
    flexGrow: 1,
  },
  order_list_footer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  header_text: {
    fontSize: typography.MEDIUM,
    fontFamily: font.BOLD,
    margin: padding.MEDIUM,
  },
});
