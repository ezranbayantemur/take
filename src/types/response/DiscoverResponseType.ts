import {ShowCaseProduct} from '../Product';

export interface DiscoverResponseType {
  category_id: string;
  category_name: string;
  category_title: string;
  showcase_products: ShowCaseProduct[];
}
