import {color, font, padding, typography} from '@style';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {},
  icon: {
    color: color.SMOKE,
    fontSize: typography.BIG,
    marginRight: padding.MEDIUM,
  },
  badge_container: {
    position: 'absolute',
    top: -8,
    right: -3,
    backgroundColor: color.MONZA,
    borderRadius: 50,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge_title: {
    color: color.ALABASTER,
    fontSize: typography.SMALL,
    fontFamily: font.BOLD,
  },
});
