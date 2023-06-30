import type {ShowCaseProduct} from './Product';

export interface DiscoverCategory {
  category_id: string;
  category_name: string;
  category_title: string;
  showcase_products: ShowCaseProduct[];
}
