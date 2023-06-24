import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import CategoryCard from './CategoryCard';
import discoverData from '@mocks/discover_feed/discover.json';
import type {DiscoverResponseType} from '@types';

const mockData: DiscoverResponseType = discoverData[0];
const mockOnSelect = jest.fn();

let wrapper: ReturnType<typeof render>;

describe('CategoryCard unit tests', () => {
  beforeEach(() => {
    wrapper = render(
      <CategoryCard
        testID="test"
        title={mockData.category_title}
        showcaseData={mockData.showcase_products}
        onSelect={mockOnSelect}
      />,
    );
    mockOnSelect.mockClear();
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should title correctly', () => {
    const title = wrapper.queryByText(mockData.category_title);
    expect(title).not.toBeNull();
  });

  it('should render products correctly', () => {
    const products = mockData.showcase_products;

    expect(wrapper.queryByText(products[0].product_name)).not.toBeNull();
    expect(wrapper.queryByText(products[0].seller_name)).not.toBeNull();
    expect(
      wrapper.queryByText(`${products[0].product_price} TL`),
    ).not.toBeNull();

    expect(wrapper.queryByText(products[1].product_name)).not.toBeNull();
    expect(wrapper.queryByText(products[1].seller_name)).not.toBeNull();
    expect(
      wrapper.queryByText(`${products[1].product_price} TL`),
    ).not.toBeNull();

    expect(wrapper.queryByText(products[2].product_name)).not.toBeNull();
    expect(wrapper.queryByText(products[2].seller_name)).not.toBeNull();
    expect(
      wrapper.queryByText(`${products[2].product_price} TL`),
    ).not.toBeNull();
  });

  it('should trigger onSelect correctly for all showed products', () => {
    fireEvent(
      wrapper.getByTestId('test_categorycard_0_showcasecard_touchable'),
      'onPress',
    );
    expect(mockOnSelect).toBeCalledWith(mockData.showcase_products[0]);
    mockOnSelect.mockClear();

    fireEvent(
      wrapper.getByTestId('test_categorycard_1_showcasecard_touchable'),
      'onPress',
    );
    expect(mockOnSelect).toBeCalledWith(mockData.showcase_products[1]);
    mockOnSelect.mockClear();

    fireEvent(
      wrapper.getByTestId('test_categorycard_2_showcasecard_touchable'),
      'onPress',
    );
    expect(mockOnSelect).toBeCalledWith(mockData.showcase_products[2]);
  });
});
