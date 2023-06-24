import {View, Text} from 'react-native';
import React from 'react';
import type {SearchBarProps} from './SearchBar.types';

import styles from './SearchBar.style';
import {Input} from '@components';

const SearchBar = ({testID}: SearchBarProps) => {
  return (
    <View testID={`${testID}_searchbar`} style={styles.container}>
      <Input />
    </View>
  );
};

export default React.memo(SearchBar);
