import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import productsData from '@mocks/products_for_category.json';
import CartCard from './CartCard';
import type {Product} from '@types';

const mockData: Product = productsData[2];
const mockOnRemove = jest.fn();
const mockOnDecreaseQuantity = jest.fn();
const mockOnIncreaseQuantity = jest.fn();

let wrapper: ReturnType<typeof render>;

describe('CartCard unit tests', () => {
  beforeEach(() => {
    wrapper = render(
      <CartCard
        testID="test"
        product={mockData}
        quantity={3}
        onRemove={mockOnRemove}
        onDecreaseQuantity={mockOnDecreaseQuantity}
        onIncreaseQuantity={mockOnIncreaseQuantity}
      />,
    );
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render titles correctly', () => {
    expect(wrapper.queryByText('ThinkPhone')).not.toBeNull();
    expect(wrapper.queryByText('Adet: 3')).not.toBeNull();
    expect(wrapper.queryByText('150 TL')).not.toBeNull();
    expect(wrapper.queryByText('Toplam: 450 TL')).not.toBeNull();
  });

  it('should update total price and quantity title correctly if quantity increase', () => {
    expect(wrapper.queryByText('Adet: 3')).not.toBeNull();
    expect(wrapper.queryByText('Toplam: 450 TL')).not.toBeNull();

    wrapper.rerender(
      <CartCard
        testID="test"
        product={mockData}
        quantity={4}
        onRemove={mockOnRemove}
        onDecreaseQuantity={mockOnDecreaseQuantity}
        onIncreaseQuantity={mockOnIncreaseQuantity}
      />,
    );

    expect(wrapper.queryByText('Adet: 4')).not.toBeNull();
    expect(wrapper.queryByText('Toplam: 600 TL')).not.toBeNull();
  });

  it('should update total price and quantity title correctly if quantity decrease', () => {
    expect(wrapper.queryByText('Adet: 3')).not.toBeNull();
    expect(wrapper.queryByText('Toplam: 450 TL')).not.toBeNull();

    wrapper.rerender(
      <CartCard
        testID="test"
        product={mockData}
        quantity={2}
        onRemove={mockOnRemove}
        onDecreaseQuantity={mockOnDecreaseQuantity}
        onIncreaseQuantity={mockOnIncreaseQuantity}
      />,
    );

    expect(wrapper.queryByText('Adet: 2')).not.toBeNull();
    expect(wrapper.queryByText('Toplam: 300 TL')).not.toBeNull();
  });

  it('should trigger increase quantity', () => {
    const increase = wrapper.getByTestId(
      'test_cartcard_inputcounter_increase_touchable',
    );
    fireEvent(increase, 'onPress');

    expect(mockOnIncreaseQuantity).toBeCalled();
  });

  it('should trigger decrease quantity', () => {
    const decrease = wrapper.getByTestId(
      'test_cartcard_inputcounter_decrease_touchable',
    );
    fireEvent(decrease, 'onPress');

    expect(mockOnDecreaseQuantity).toBeCalled();
  });

  it('should trigger remove', () => {
    const remove = wrapper.getByTestId('test_cartcard_remove');
    fireEvent(remove, 'onPress');

    expect(mockOnRemove).toBeCalled();
  });
});
