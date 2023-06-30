import {ShowCaseProductCard} from '@components';
import discoverData from '@mocks/discover_feed/discover.json';
import type {Meta, StoryObj} from '@storybook/react-native';
import type {ShowCaseProduct} from '@types';
import type {ShowCaseProductProps} from './ShowCaseProductCard.types';

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
