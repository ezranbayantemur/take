import {StyleSheet} from 'react-native';
import {color, padding, font, typography} from '@style';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button_container: {
    width: 25,
    height: 25,
    backgroundColor: color.MONZA,
    marginHorizontal: padding.SMALL,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button_text: {
    color: color.ALABASTER,
    fontFamily: font.BLACK,
    fontSize: typography.NORMAL,
  },
  value: {
    fontFamily: font.BLACK,
    fontSize: typography.MEDIUM,
  },
});
