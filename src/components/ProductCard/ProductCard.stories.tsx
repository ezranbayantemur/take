import type {Meta, StoryObj} from '@storybook/react-native';
import {ProductCard} from '@components';
import {Product} from '@types';
import type {ProductCardProps} from './ProductCard.types';

import productsData from '@mocks/products_for_category.json';

const mockData: Product = productsData[0];

const ProductCardMeta: Meta<ProductCardProps> = {
  args: {
    data: mockData,
  },
  title: 'ProductCard',
  component: ProductCard,
};

export default ProductCardMeta;

export const Basic: StoryObj<ProductCardProps> = {};
