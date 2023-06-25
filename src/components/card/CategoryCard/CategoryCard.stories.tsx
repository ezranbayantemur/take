import type {Meta, StoryObj} from '@storybook/react-native';
import {CategoryCard} from '@components';
import {DiscoverResponseType} from '@types';
import type {CategoryCardProps} from './CategoryCard.types';

import discoverData from '@mocks/discover_feed/discover.json';

const mockData: DiscoverResponseType = discoverData[0];

const CategoryCardMeta: Meta<CategoryCardProps> = {
  args: {
    title: mockData.category_title,
    showcaseData: mockData.showcase_products,
  },
  title: 'CategoryCard',
  component: CategoryCard,
};

export default CategoryCardMeta;

export const Basic: StoryObj<CategoryCardProps> = {};
