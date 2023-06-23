import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ShowCaseProductCard from './ShowCaseProductCard';
import discoverData from '@mocks/discover_feed/discover.json';
import type {ShowCaseProduct} from '@types';

const mockData: ShowCaseProduct = discoverData[0].showcase_products[0];
const mockOnSelect = jest.fn();

let wrapper: ReturnType<typeof render>;

describe('ShowCaseProductCard unit tests', () => {
  beforeEach(() => {
    wrapper = render(
      <ShowCaseProductCard
        testID="test"
        data={mockData}
        onSelect={mockOnSelect}
      />,
    );
    mockOnSelect.mockClear();
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render values correctly', () => {
    expect(wrapper.queryByText(mockData.product_name)).not.toBeNull();
    expect(wrapper.queryByText(mockData.seller_name)).not.toBeNull();
    expect(wrapper.queryByText(`${mockData.product_price} TL`)).not.toBeNull();
  });

  it('should trigger onSelect correctly', () => {
    const touchable = wrapper.getByTestId('test_showcasecard_touchable');
    fireEvent(touchable, 'onPress');

    expect(mockOnSelect).toBeCalled();
  });
});
