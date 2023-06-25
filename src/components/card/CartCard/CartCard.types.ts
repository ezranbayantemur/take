import type {Product} from '@types';

export interface CartCardProps {
  testID: string;
  product: Product;
  quantity: number;
  onDecreaseQuantity: () => void;
  onIncreaseQuantity: () => void;
}
