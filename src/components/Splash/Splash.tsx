import {SafeAreaView, Text} from 'react-native';
import React from 'react';
import styles from './Splash.style';

const Splash = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo_text}>take</Text>
    </SafeAreaView>
  );
};

export default Splash;
