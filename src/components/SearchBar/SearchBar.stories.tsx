import type {Meta, StoryObj} from '@storybook/react-native';
import {SearchBar} from '@components';
import type {SearchBarProps} from './SearchBar.types';

const SearchBarMeta: Meta<SearchBarProps> = {
  args: {
    placeholder: 'Ara...',
  },
  title: 'SearchBar',
  component: SearchBar,
};

export default SearchBarMeta;

export const Basic: StoryObj<SearchBarProps> = {};
