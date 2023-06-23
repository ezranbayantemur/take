import React from 'react';
import {Alert, View} from 'react-native';
import {Input} from '@components';
import Button from './Button';
import type {Meta, StoryObj} from '@storybook/react-native';
import type {ButtonProps} from './Button.types';

const ButtonMeta: Meta<ButtonProps> = {
  argTypes: {
    onPress: {
      action: 'on press',
    },
  },
  args: {
    text: 'Button',
    loading: false,
    disabled: false,
    onPress: () => Alert.alert('Button', 'Pressed action'),
  },
  title: 'Button',
  component: Button,
};

export default ButtonMeta;

export const Basic: StoryObj<ButtonProps> = {};

export const PressAction: StoryObj<ButtonProps> = {
  decorators: [
    (_, options) => {
      const [text, setText] = React.useState('');

      function handlePress() {
        Alert.alert('Button', text);
      }

      return (
        <View>
          <Input onChangeText={setText} />
          <Button {...options} text="Alert Text" onPress={handlePress} />
        </View>
      );
    },
  ],
};
