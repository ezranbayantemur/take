import {View} from 'react-native';
import React from 'react';
import type {SearchBarProps} from './SearchBar.types';

import Input from '../Input';

const SearchBar = ({
  testID,
  placeholder = 'Ara...',
  debounceTime = 200,
  onSearch,
}: SearchBarProps) => {
  return (
    <View>
      <Input
        testID={`${testID}_searchbar`}
        placeholder={placeholder}
        debounceTime={debounceTime}
        onChangeText={onSearch}
      />
    </View>
  );
};

export default React.memo(SearchBar);
