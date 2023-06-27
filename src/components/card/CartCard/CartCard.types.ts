import type {Product} from '@types';

export interface CartCardProps {
  testID: string;
  product: Product;
  quantity: number;
  onRemove: () => void;
  onDecreaseQuantity: () => void;
  onIncreaseQuantity: () => void;
}
