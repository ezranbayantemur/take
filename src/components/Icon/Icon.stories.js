import React from 'react';
import {View} from 'react-native';
import Icon from './Icon';

const IconMeta = {
  title: 'Icon',
  component: Icon,
  decorators: [
    Story => (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Story />
      </View>
    ),
  ],
};

export default IconMeta;

export const Basic = {
  args: {
    name: 'close',
    style: {
      fontSize: 45,
      color: '#bdbdbd',
    },
  },
};
