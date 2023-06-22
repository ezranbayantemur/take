import {StyleSheet} from 'react-native';
import {color, padding, font, typography} from '@style';

const base = StyleSheet.create({
  container: {
    backgroundColor: color.MONZA,
    alignItems: 'center',
    padding: padding.MEDIUM,
    borderRadius: 10,
    margin: padding.SMALL,
  },
  text: {
    color: color.ALABASTER,
    fontFamily: font.BOLD,
    fontSize: typography.NORMAL,
  },
});

export default {
  default: base,
  disabled: StyleSheet.create({
    container: {
      ...base.container,
      backgroundColor: color.MERCURY,
    },
    text: {
      ...base.text,
      color: color.SMOKE,
    },
  }),
};
