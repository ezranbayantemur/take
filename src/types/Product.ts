export interface Product {
  id: number;
  product_name: string;
  product_image: string;
  seller_name: string;
  product_price: number;
  description: string;
  category: string;
}

export type ShowCaseProduct = Omit<Product, 'description' | 'category'>;
