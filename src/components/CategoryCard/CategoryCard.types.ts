import type {ShowCaseProduct} from '@types';

export interface CategoryCardProps {
  testID: string;
  data: {
    category_id: string;
    category_name: string;
    category_title: string;
    showcase_products: ShowCaseProduct[];
  };
  onProductSelect: (product: ShowCaseProduct) => void;
  onCategorySelect: (categoryTitle: string) => void;
}
