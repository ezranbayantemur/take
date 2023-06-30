import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import productData from '@mocks/products_for_category.json';
import ProductCard from './ProductCard';
import type {Product} from '@types';

const mockData: Product = productData[0];
const mockOnSelect = jest.fn();

let wrapper: ReturnType<typeof render>;

describe('ProductCard unit tests', () => {
  beforeEach(() => {
    wrapper = render(
      <ProductCard testID="test" data={mockData} onSelect={mockOnSelect} />,
    );
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render texts correctly', () => {
    expect(wrapper.queryByText(mockData.product_name)).not.toBeNull();
    expect(wrapper.queryByText(mockData.seller_name)).not.toBeNull();
    expect(wrapper.queryByText(`${mockData.product_price} TL`)).not.toBeNull();
  });

  it('should trigger onSelect correctly', () => {
    const touchable = wrapper.getByTestId('test_productcard_touchable');
    fireEvent(touchable, 'onPress');

    expect(mockOnSelect).toBeCalled();
  });
});
