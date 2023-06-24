import {StyleSheet} from 'react-native';
import {color, font, padding, typography} from '@style';

export default StyleSheet.create({
  outer_container: {
    flex: 1,
    backgroundColor: color.ALABASTER,
  },
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  button_container: {
    marginVertical: 10,
  },
  logo_container: {
    paddingVertical: 40,
    alignSelf: 'center',
  },
  logo_text: {
    color: color.MONZA,
    fontFamily: font.BOLD_ITALIC,
    fontSize: 90,
  },
  error_message: {
    marginVertical: padding.SMALL,
    textAlign: 'center',
    color: color.MONZA,
    fontFamily: font.REGULAR,
    fontSize: typography.NORMAL,
  },
});
