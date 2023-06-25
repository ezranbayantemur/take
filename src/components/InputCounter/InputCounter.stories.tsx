import {InputCounter} from '@components';
import type {Meta, StoryObj} from '@storybook/react-native';
import type {InputCounterProps} from './InputCounter.types';

const InputMeta: Meta<InputCounterProps> = {
  argTypes: {
    onValueChange: {
      action: 'on value change',
    },
  },
  args: {
    value: 1,
  },
  title: 'InputCounter',
  component: InputCounter,
};

export default InputMeta;

export const Basic: StoryObj<InputCounterProps> = {};
