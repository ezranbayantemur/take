import React from 'react';
import {TextInput, View} from 'react-native';
import {useDebouncedCallback} from 'use-debounce';
import styles from './Input.style';
import type {InputProps} from './Input.types';

const Input = ({
  testID,
  debounceTime = 0,
  placeholder = 'Ürün ara...',
  onChangeText,
  ...rest
}: InputProps) => {
  const debouncedChangeText = useDebouncedCallback(value => {
    if (onChangeText) {
      onChangeText(value);
    }
  }, debounceTime);

  const changeTextFunction =
    debounceTime !== 0 ? debouncedChangeText : onChangeText;

  return (
    <View style={styles.container}>
      <TextInput
        {...rest}
        style={styles.input}
        testID={`${testID}_input`}
        placeholder={placeholder}
        onChangeText={changeTextFunction}
      />
    </View>
  );
};

export default Input;
