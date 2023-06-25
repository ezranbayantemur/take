import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import InputCounter from './InputCounter';
jest.useFakeTimers();

const mockOnDecrease = jest.fn();
const mockOnIncrease = jest.fn();
const mockOnValueChange = jest.fn();

let wrapper: ReturnType<typeof render>;
describe('Input unit tests', () => {
  beforeEach(() => {
    wrapper = render(
      <InputCounter
        testID="test"
        value={5}
        onDecrease={mockOnDecrease}
        onIncrease={mockOnIncrease}
        onValueChange={mockOnValueChange}
      />,
    );

    mockOnDecrease.mockClear();
    mockOnIncrease.mockClear();
    mockOnValueChange.mockClear();
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render value correctly', () => {
    expect(wrapper.queryByText('5')).not.toBeNull();
  });

  it('should increase value correctly', () => {
    const touchable = wrapper.getByTestId('test_increase_touchable');
    fireEvent(touchable, 'onPress');

    expect(wrapper.queryByText('6')).not.toBeNull();
  });

  it('should decrease value correctly', () => {
    const touchable = wrapper.getByTestId('test_decrease_touchable');
    fireEvent(touchable, 'onPress');

    expect(wrapper.queryByText('4')).not.toBeNull();
  });

  it('should trigger onIncrease correctly', () => {
    const touchable = wrapper.getByTestId('test_increase_touchable');
    fireEvent(touchable, 'onPress');

    expect(mockOnIncrease).toBeCalledWith(6);
  });

  it('should trigger onDecrease correctly', () => {
    const touchable = wrapper.getByTestId('test_decrease_touchable');
    fireEvent(touchable, 'onPress');

    expect(mockOnDecrease).toBeCalledWith(4);
  });

  it('should trigger onValueChange correctly', () => {
    fireEvent(wrapper.getByTestId('test_increase_touchable'), 'onPress');
    expect(mockOnValueChange).toBeCalledWith(6);

    fireEvent(wrapper.getByTestId('test_decrease_touchable'), 'onPress');
    expect(mockOnValueChange).toBeCalledWith(5);
  });

  it('should increase without onIncrease prop correctly', () => {
    wrapper.rerender(<InputCounter testID="test" value={5} />);
    const touchable = wrapper.getByTestId('test_increase_touchable');
    fireEvent(touchable, 'onPress');

    expect(wrapper.queryByText('6')).not.toBeNull();
  });

  it('should decrease without onDecrease correctly', () => {
    wrapper.rerender(<InputCounter testID="test" value={5} />);
    const touchable = wrapper.getByTestId('test_decrease_touchable');
    fireEvent(touchable, 'onPress');

    expect(wrapper.queryByText('4')).not.toBeNull();
  });
});
