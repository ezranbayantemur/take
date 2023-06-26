import React from 'react';
import {render} from '@testing-library/react-native';
import DiscountCard from './DiscountCard';

let wrapper: ReturnType<typeof render>;

describe('DiscountCard unit tests', () => {
  beforeEach(() => {
    wrapper = render(
      <DiscountCard
        testID="test"
        data={{
          categoryTitle: 'electronics',
          totalPrice: 1000,
          discountPercentage: 5,
          discountedPrice: 950,
          hasDiscount: true,
          hasProduct: true,
          remainingPricetoApplyDiscount: 0,
        }}
      />,
    );
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render null if there is no product for discount category', () => {
    wrapper.rerender(
      <DiscountCard
        testID="test"
        data={{
          categoryTitle: 'electronics',
          totalPrice: 0,
          discountPercentage: 5,
          discountedPrice: 0,
          hasDiscount: true,
          hasProduct: false,
          remainingPricetoApplyDiscount: 0,
        }}
      />,
    );

    const component = wrapper.queryByTestId('test_discountcart');
    expect(component).toBeNull();
  });

  it('should render correct discount text if there is a discount to apply', () => {
    wrapper.rerender(
      <DiscountCard
        testID="test"
        data={{
          categoryTitle: 'electronics',
          totalPrice: 1000,
          discountPercentage: 5,
          discountedPrice: 950,
          hasDiscount: true,
          hasProduct: true,
          remainingPricetoApplyDiscount: 0,
        }}
      />,
    );
    const text = wrapper.queryByText(
      'Elektronik kategorisindeki ürünlere %5 indirim uygulandı. Yeni toplu fiyat 1000 TL yerine 950 TL',
    );
    expect(text).not.toBeNull();
  });

  it('should render correct discount text if there not enough total sub to apply discount', () => {
    wrapper.rerender(
      <DiscountCard
        testID="test"
        data={{
          categoryTitle: 'jewelry',
          totalPrice: 1000,
          discountPercentage: 10,
          discountedPrice: 0,
          hasDiscount: false,
          hasProduct: true,
          remainingPricetoApplyDiscount: 1500,
        }}
      />,
    );

    const text = wrapper.queryByText(
      "Takı kategorisinde %10 indirim fırsatını yakalamak için bu kategoriden 1500 TL'lik daha ürün sepete ekleyin",
    );
    expect(text).not.toBeNull();
  });
});
