import {color, font} from '@style';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo_text: {
    color: color.MONZA,
    fontFamily: font.BOLD_ITALIC,
    fontSize: 90,
  },
});
