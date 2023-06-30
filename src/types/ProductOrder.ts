import type {Product} from './Product';

export interface ProductOrder {
  product: Product;
  quantity: number;
  totalPrice: number;
}
