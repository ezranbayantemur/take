import type {ShowCaseProduct} from '@types';

export interface CategoryCardProps {
  testID: string;
  showcaseData: ShowCaseProduct[];
  title: string;
  onSelect: (product: ShowCaseProduct) => void;
}
