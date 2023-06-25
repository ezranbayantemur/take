import type {Product} from '@types';

export interface ProductCardProps {
  testID: string;
  data: Product;
  onSelect: (product: Product) => void;
}
