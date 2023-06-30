import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './ErrorPage.styles';
import Button from '../Button';
import type {ErrorPageProps} from './types';

const ErrorPage = ({
  message = 'Bir problem oluştu',
  onRetry,
}: ErrorPageProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.message_text}>{message}</Text>
      <Button text="Tekrar Dene" onPress={onRetry} />
    </SafeAreaView>
  );
};

export default ErrorPage;
