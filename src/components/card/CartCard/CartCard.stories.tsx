import type {Meta, StoryObj} from '@storybook/react-native';
import {CartCard} from '@components';
import {Product} from '@types';
import type {CartCardProps} from './CartCard.types';

import productsData from '@mocks/products_for_category.json';

const mockData: Product = productsData[2];

const CartCardMeta: Meta<CartCardProps> = {
  args: {
    product: mockData,
    quantity: 3,
  },
  title: 'CartCard',
  component: CartCard,
};

export default CartCardMeta;

export const Basic: StoryObj<CartCardProps> = {};
