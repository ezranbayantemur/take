import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {useDebouncedCallback} from 'use-debounce';
import styles from './Input.style';
import type {InputProps} from './Input.types';

const Input = ({
  testID,
  debounceTime = 0,
  placeholder,
  errorMessage,
  onChangeText,
  ...rest
}: InputProps) => {
  const hasError = !!errorMessage;
  const styleKey = hasError ? 'error' : 'default';

  const debouncedChangeText = useDebouncedCallback(value => {
    if (onChangeText) {
      onChangeText(value);
    }
  }, debounceTime);

  const changeTextFunction =
    debounceTime !== 0 ? debouncedChangeText : onChangeText;

  return (
    <View>
      <View style={styles[styleKey].container}>
        <TextInput
          {...rest}
          style={styles[styleKey].input}
          testID={`${testID}_input`}
          placeholder={placeholder}
          onChangeText={changeTextFunction}
        />
      </View>
      {hasError && (
        <Text
          testID={`${testID}_input_error_message`}
          style={styles.error.error_text}>
          {errorMessage}
        </Text>
      )}
    </View>
  );
};

export default React.memo(Input);
