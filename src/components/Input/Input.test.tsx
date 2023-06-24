import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Input from './Input';
jest.useFakeTimers();

let wrapper: ReturnType<typeof render>;
describe('Input unit tests', () => {
  beforeEach(() => {
    wrapper = render(<Input />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render given placeholder correctly', () => {
    const _wrapper = render(<Input placeholder="test placeholder" />);
    const placeholder = _wrapper.queryByPlaceholderText('test placeholder');
    expect(placeholder).not.toBeNull();
  });

  it('should render error message correctly', () => {
    const _wrapper = render(<Input errorMessage="test error" />);
    const error = _wrapper.queryByText('test error');
    expect(error).not.toBeNull();
  });

  it('should trigger onChangeText immediately if debounce is not given', () => {
    const mockOnChangeText = jest.fn();
    const _wrapper = render(
      <Input testID="basetest" onChangeText={mockOnChangeText} />,
    );

    const input = _wrapper.getByTestId('basetest_input');
    fireEvent.changeText(input, 'test');

    expect(mockOnChangeText).toBeCalledWith('test');
  });

  it('should trigger on debounce if it is given', () => {
    const mockOnChangeText = jest.fn();
    const _wrapper = render(
      <Input
        testID="basetest"
        onChangeText={mockOnChangeText}
        debounceTime={250}
      />,
    );

    const input = _wrapper.getByTestId('basetest_input');
    fireEvent.changeText(input, 'test');

    expect(mockOnChangeText).not.toBeCalledWith('test');

    jest.advanceTimersByTime(250);

    expect(mockOnChangeText).toBeCalled();
  });
});
