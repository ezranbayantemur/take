import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Input from './Input';

let wrapper: ReturnType<typeof render>;

describe('Input unit tests', () => {
  beforeEach(() => {
    wrapper = render(<Input />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render default placeholder correctly', () => {
    const placeholder = wrapper.queryByPlaceholderText('Ürün ara...');
    expect(placeholder).not.toBeNull();
  });

  it('should render given placeholder correctly', () => {
    const _wrapper = render(<Input placholder="test placeholder" />);
    const placeholder = _wrapper.queryByPlaceholderText('test placeholder');
    expect(placeholder).not.toBeNull();
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

    expect(mockOnChangeText).not.toBeCalled();

    jest.advanceTimersByTime(250);

    expect(mockOnChangeText).toBeCalled();
  });
});
