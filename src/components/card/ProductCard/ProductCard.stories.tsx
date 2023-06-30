import {ProductCard} from '@components';
import productsData from '@mocks/products_for_category.json';
import type {Meta, StoryObj} from '@storybook/react-native';
import type {Product} from '@types';
import type {ProductCardProps} from './ProductCard.types';

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
