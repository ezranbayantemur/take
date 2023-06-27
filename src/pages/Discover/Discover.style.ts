import {color, font, padding, typography} from '@style';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  welcome_user_text: {
    fontSize: typography.MEDIUM,
    fontFamily: font.BOLD,
    margin: padding.TINY,
    marginLeft: padding.MEDIUM,
  },
  header: {
    padding: padding.SMALL,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: color.MERCURY,
  },
});
