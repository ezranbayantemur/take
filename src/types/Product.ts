export interface Product {
  id: number;
  product_name: string;
  product_image: string;
  seller_name: string;
  product_price: string;
  description: string;
}

export interface ShowCaseProduct extends Omit<Product, 'description'> {}
