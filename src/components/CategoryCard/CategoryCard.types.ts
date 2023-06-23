import type {ShowCaseProduct} from '@types';

export interface CategoryCardProps {
  showcaseData: ShowCaseProduct[];
  title: string;
  onSelect: (product: ShowCaseProduct) => void;
}
