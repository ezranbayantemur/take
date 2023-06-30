import React from 'react';
import {Text, ActivityIndicator, TouchableOpacity} from 'react-native';
import styles from './Button.style';
import type {ButtonProps} from './Button.types';

const Button = ({
  text,
  type = 'default',
  loading,
  testID,
  onPress,
  disabled,
  ...rest
}: ButtonProps) => {
  const styleKey = disabled ? 'disabled' : type;
  const handlePress = () => {
    if (loading || disabled || !onPress) {
      return;
    }

    onPress();
  };

  return (
    <TouchableOpacity
      testID={`${testID}_button_touchable`}
      style={styles[styleKey].container}
      disabled={loading || disabled}
      onPress={handlePress}
      {...rest}>
      {loading ? (
        <ActivityIndicator
          testID={`${testID}_button_loading_indicator`}
          color="white"
        />
      ) : (
        <Text testID={`${testID}_button_text`} style={styles[styleKey].text}>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default React.memo(Button);
