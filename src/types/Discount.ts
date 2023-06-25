export interface Discount {
  categoryTitle: string;
  discountPercentage: number;
  discountedPrice: number;
  totalPrice: number;
  hasDiscount: boolean;
  remainingPricetoApplyDiscount: number;
}
