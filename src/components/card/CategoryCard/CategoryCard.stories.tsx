import {CategoryCard} from '@components';
import discoverData from '@mocks/discover_feed/discover.json';
import type {Meta, StoryObj} from '@storybook/react-native';
import type {DiscoverCategory} from '@types';
import type {CategoryCardProps} from './CategoryCard.types';

const mockData: DiscoverCategory = discoverData[0];

const CategoryCardMeta: Meta<CategoryCardProps> = {
  args: {
    data: mockData,
  },
  title: 'CategoryCard',
  component: CategoryCard,
};

export default CategoryCardMeta;

export const Basic: StoryObj<CategoryCardProps> = {};
