import {Text, StyleSheet, View} from 'react-native';
import React from 'react';
import {color, font, padding, typography} from '@style';
import Icon from '../Icon';

const ErrorBoundaryPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>take!</Text>
      <Icon name="cross" style={styles.icon} />
      <Text style={styles.text}>Bir problem oluştu</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  logo: {
    margin: padding.LARGE,
    textAlign: 'center',
    color: color.MONZA,
    fontFamily: font.BOLD_ITALIC,
    fontSize: typography.HUGE,
  },
  text: {
    marginTop: padding.MEDIUM,
    color: color.SMOKE,
    fontFamily: font.BOLD_ITALIC,
    fontSize: typography.BIG,
  },
  icon: {
    textAlign: 'center',
    color: color.SMOKE,
    fontSize: typography.HUGE,
  },
});

export default ErrorBoundaryPage;
