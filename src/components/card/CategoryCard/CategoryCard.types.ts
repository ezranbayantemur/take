import type {ShowCaseProduct, DiscoverCategory} from '@types';

export interface CategoryCardProps {
  testID: string;
  data: DiscoverCategory;
  onProductSelect: (product: ShowCaseProduct) => void;
  onCategorySelect: (categoryTitle: string) => void;
}
