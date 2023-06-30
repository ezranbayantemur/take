import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import discoverData from '@mocks/discover_feed/discover.json';
import CategoryCard from './CategoryCard';
import type {DiscoverCategory} from '@types';

const mockData: DiscoverCategory = discoverData[0];
const mockOnProductSelect = jest.fn();
const mockOnCategorySelect = jest.fn();

let wrapper: ReturnType<typeof render>;

describe('CategoryCard unit tests', () => {
  beforeEach(() => {
    wrapper = render(
      <CategoryCard
        testID="test"
        data={mockData}
        onProductSelect={mockOnProductSelect}
        onCategorySelect={mockOnCategorySelect}
      />,
    );
    mockOnProductSelect.mockClear();
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render title correctly', () => {
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

  it('should trigger onCategorySelect correctly', () => {
    fireEvent(
      wrapper.getByTestId('test_categorycard_title_touchable'),
      'onPress',
    );
    expect(mockOnCategorySelect).toBeCalledWith(mockData.category_name);
  });

  it('should trigger onProductSelect correctly for all showed products', () => {
    fireEvent(
      wrapper.getByTestId('test_categorycard_0_showcasecard_touchable'),
      'onPress',
    );
    expect(mockOnProductSelect).toBeCalledWith(mockData.showcase_products[0]);
    mockOnProductSelect.mockClear();

    fireEvent(
      wrapper.getByTestId('test_categorycard_1_showcasecard_touchable'),
      'onPress',
    );
    expect(mockOnProductSelect).toBeCalledWith(mockData.showcase_products[1]);
    mockOnProductSelect.mockClear();

    fireEvent(
      wrapper.getByTestId('test_categorycard_2_showcasecard_touchable'),
      'onPress',
    );
    expect(mockOnProductSelect).toBeCalledWith(mockData.showcase_products[2]);
  });
});
