import type {Discount, Product} from '@types';

interface DiscountApplierProps {
  productsInCart: Product[];
  categoryName: string;
  discountPercentage: number;
  discountApplyLimitPrice: number;
}

function discountApplier({
  productsInCart,
  categoryName,
  discountPercentage,
  discountApplyLimitPrice,
}: DiscountApplierProps): Discount {
  const discountCategoryProducts = productsInCart.filter(
    product => product.category === categoryName,
  );

  if (!discountCategoryProducts.length) {
    return {
      totalPrice: 0,
      categoryTitle: categoryName,
      discountPercentage,
      discountedPrice: 0,
      hasDiscount: false,
      hasProduct: false,
      remainingPricetoApplyDiscount: 0,
    };
  }

  const totalPrice = discountCategoryProducts.reduce(
    (accProduct, currentProduct) =>
      accProduct + Number(currentProduct.product_price),
    0,
  );

  if (totalPrice < discountApplyLimitPrice) {
    return {
      totalPrice,
      categoryTitle: categoryName,
      discountPercentage,
      discountedPrice: 0,
      hasDiscount: false,
      hasProduct: true,
      remainingPricetoApplyDiscount: discountApplyLimitPrice - totalPrice,
    };
  }

  const discountedPrice = totalPrice - totalPrice * (discountPercentage / 100);

  return {
    totalPrice,
    categoryTitle: categoryName,
    discountPercentage,
    discountedPrice,
    hasDiscount: true,
    hasProduct: true,
    remainingPricetoApplyDiscount: 0,
  };
}

export default discountApplier;
