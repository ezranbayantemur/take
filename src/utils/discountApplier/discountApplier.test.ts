import discountApplier from './discountApplier';
import type {Product} from '@types';

const mockData: Product[] = [
  {
    id: 0,
    product_price: 500,
    product_name: 'Product 0',
    category: 'electronics',
    description: '',
    product_image: '',
    seller_name: '',
  },
  {
    id: 1,
    product_price: 400,
    product_name: 'Product 1',
    category: 'electronics',
    description: '',
    product_image: '',
    seller_name: '',
  },
  {
    id: 2,
    product_price: 500,
    product_name: 'Product 2',
    category: 'jewelry',
    description: '',
    product_image: '',
    seller_name: '',
  },
  {
    id: 3,
    product_price: 300,
    product_name: 'Product 3',
    category: 'electronics',
    description: '',
    product_image: '',
    seller_name: '',
  },
  {
    id: 4,
    product_price: 270,
    product_name: 'Product 4',
    category: 'jewelry',
    description: '',
    product_image: '',
    seller_name: '',
  },
];

describe('discountApplier unit test', () => {
  it('should return correctly if there is no limit to apply the discount', () => {
    const discountElectronics = discountApplier({
      productsInCart: mockData,
      categoryName: 'electronics',
      discountPercentage: 5,
      discountApplyLimitPrice: 5000,
    });

    expect(discountElectronics).toMatchObject({
      categoryTitle: 'electronics',
      discountPercentage: 5,
      discountedPrice: 0,
      totalPrice: 1200,
      hasDiscount: false,
      hasProduct: true,
      remainingPricetoApplyDiscount: 3800,
    });

    const discountJewelry = discountApplier({
      productsInCart: mockData,
      categoryName: 'jewelry',
      discountPercentage: 5,
      discountApplyLimitPrice: 1000,
    });

    expect(discountJewelry).toMatchObject({
      categoryTitle: 'jewelry',
      discountPercentage: 5,
      discountedPrice: 0,
      totalPrice: 770,
      hasDiscount: false,
      hasProduct: true,
      remainingPricetoApplyDiscount: 230,
    });
  });

  it('should return correctly if there a discount to apply', () => {
    const discountElectronics = discountApplier({
      productsInCart: mockData,
      categoryName: 'electronics',
      discountPercentage: 5,
      discountApplyLimitPrice: 1000,
    });

    expect(discountElectronics).toMatchObject({
      categoryTitle: 'electronics',
      discountPercentage: 5,
      discountedPrice: 1140,
      hasDiscount: true,
      hasProduct: true,
      remainingPricetoApplyDiscount: 0,
    });

    const discountJewelry = discountApplier({
      productsInCart: mockData,
      categoryName: 'jewelry',
      discountPercentage: 5,
      discountApplyLimitPrice: 750,
    });

    expect(discountJewelry).toMatchObject({
      categoryTitle: 'jewelry',
      discountedPrice: 731.5,
      discountPercentage: 5,
      hasDiscount: true,
      hasProduct: true,
      remainingPricetoApplyDiscount: 0,
    });
  });

  it('should return correctly if there is no product discount to apply', () => {
    const discountElectronics = discountApplier({
      productsInCart: mockData,
      categoryName: 'men_clothing',
      discountPercentage: 5,
      discountApplyLimitPrice: 1000,
    });

    expect(discountElectronics).toMatchObject({
      totalPrice: 0,
      categoryTitle: 'men_clothing',
      discountPercentage: 5,
      discountedPrice: 0,
      hasDiscount: false,
      hasProduct: false,
      remainingPricetoApplyDiscount: 0,
    });
  });
});
