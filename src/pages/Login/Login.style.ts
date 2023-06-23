import {color, font} from '@style';
import {StyleSheet} from 'react-native';

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
});
