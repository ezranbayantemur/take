import type {ShowCaseProduct} from '@types';

export interface ShowCaseProductProps {
  testID: string;
  data: ShowCaseProduct;
  onSelect: () => void;
}
