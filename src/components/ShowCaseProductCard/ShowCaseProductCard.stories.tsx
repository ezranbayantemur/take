import {ShowCaseProductCard} from '@components';
import type {Meta, StoryObj} from '@storybook/react-native';
import type {ShowCaseProduct} from '@types';
import type {ShowCaseProductProps} from './ShowCaseProductCard.types';

import discoverData from '@mocks/discover_feed/discover.json';

const mockData: ShowCaseProduct = discoverData[0].showcase_products[0];

const ShowCaseProductCardMeta: Meta<ShowCaseProductProps> = {
  args: {
    data: mockData,
  },
  title: 'ShowCaseProductCard',
  component: ShowCaseProductCard,
};

export default ShowCaseProductCardMeta;

export const Basic: StoryObj<ShowCaseProductProps> = {};
