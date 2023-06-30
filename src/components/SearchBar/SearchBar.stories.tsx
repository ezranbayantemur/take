import {SearchBar} from '@components';
import type {Meta, StoryObj} from '@storybook/react-native';
import type {SearchBarProps} from './SearchBar.types';

const SearchBarMeta: Meta<SearchBarProps<any>> = {
  args: {
    placeholder: 'Ara...',
    data: [],
  },
  title: 'SearchBar',
  component: SearchBar,
};

export default SearchBarMeta;

export const Basic: StoryObj<SearchBarProps<any>> = {};
