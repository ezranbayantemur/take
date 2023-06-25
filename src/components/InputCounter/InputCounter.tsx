import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './InputCounter.style';
import type {InputCounterProps} from './InputCounter.types';

const Input = ({
  testID,
  value,
  onIncrease,
  onDecrease,
  onValueChange,
}: InputCounterProps) => {
  const [innerValue, setInnerValue] = React.useState(value);

  React.useEffect(() => {
    if (onValueChange) {
      onValueChange(innerValue);
    }
  }, [innerValue, onValueChange]);

  const handleIncrease = () => {
    const newValue = innerValue + 1;
    if (onIncrease) {
      onIncrease(newValue);
    }
    setInnerValue(newValue);
  };

  const handleDecrease = () => {
    const newValue = innerValue - 1;
    if (onDecrease) {
      onDecrease(newValue);
    }
    setInnerValue(newValue);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        testID={`${testID}_increase_touchable`}
        style={styles.button_container}
        onPress={handleIncrease}>
        <Text style={styles.button_text}>+</Text>
      </TouchableOpacity>
      <Text testID={`${testID}_value_text`} style={styles.value}>
        {innerValue}
      </Text>
      <TouchableOpacity
        testID={`${testID}_decrease_touchable`}
        style={styles.button_container}
        onPress={handleDecrease}>
        <Text style={styles.button_text}>-</Text>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(Input);
