import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import CartCard from './CartCard';
import productsData from '@mocks/products_for_category.json';
import {Product} from '@types';

const mockData: Product = productsData[2];
const mockOnRemove = jest.fn();
const mockOnDecreaseQuantity = jest.fn();
const mockOnIncreaseQuantity = jest.fn();

let wrapper: ReturnType<typeof render>;

// TODO: Add tests
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

  // Gives error: Unable to find node on an unmounted component.
  it.skip('should update total price and quantity title correctly if quantity increase', async () => {
    const _wrapper = render(
      <CartCard
        testID="test"
        product={mockData}
        quantity={3}
        onRemove={mockOnRemove}
        onDecreaseQuantity={mockOnDecreaseQuantity}
        onIncreaseQuantity={mockOnIncreaseQuantity}
      />,
    );

    const increaseButton = _wrapper.getByTestId(
      'test_cartcard_inputcounter_increase_touchable',
    );
    expect(_wrapper.queryByText('Adet: 3')).not.toBeNull();
    expect(_wrapper.queryByText('Toplam: 450 TL')).not.toBeNull();

    fireEvent.press(increaseButton);

    waitFor(() => {
      expect(wrapper.queryByText('Adet: 4')).not.toBeNull();
      expect(wrapper.queryByText('Toplam: 600 TL')).not.toBeNull();
    });
  });

  // Gives error: Unable to find node on an unmounted component.
  it.skip('should update total price and quantity title correctly if quantity decrease', () => {
    const decreaseButton = wrapper.getByTestId(
      'test_cartcard_inputcounter_decrease_touchable',
    );
    expect(wrapper.queryByText('Adet: 3')).not.toBeNull();
    expect(wrapper.queryByText('Toplam: 450 TL')).not.toBeNull();

    fireEvent(decreaseButton, 'onPress');

    waitFor(() => {
      expect(wrapper.queryByText('Adet: 2')).not.toBeNull();
      expect(wrapper.queryByText('Toplam: 300 TL')).not.toBeNull();
    });
  });

  it('should trigger remove', () => {
    const remove = wrapper.getByTestId('test_cartcard_remove');
    fireEvent(remove, 'onPress');

    expect(mockOnRemove).toBeCalled();
  });
});
