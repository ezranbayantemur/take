import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Button from './Button';

let wrapper: ReturnType<typeof render>;

describe('Button unit tests', () => {
  beforeEach(() => {
    wrapper = render(
      <Button testID="basetest" text="test title" onPress={jest.fn} />,
    );
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render title', () => {
    const title = wrapper.queryByText('test title');
    expect(title).not.toBeNull();
  });

  it('should render loading indicator if given', () => {
    const _wrapper = render(
      <Button testID="basetest" text="" loading onPress={jest.fn} />,
    );

    const loading = _wrapper.queryByTestId('basetest_button_loading_indicator');
    expect(loading).not.toBeNull();
  });

  it('should trigger onPress correctly', () => {
    const mockOnPress = jest.fn();
    const _wrapper = render(
      <Button testID="basetest" text="" onPress={mockOnPress} />,
    );

    const touchable = _wrapper.getByTestId('basetest_button_touchable');
    fireEvent(touchable, 'onPress');

    expect(mockOnPress).toBeCalled();
  });

  it('should not trigger onPress on loading', () => {
    const mockOnPress = jest.fn();
    const _wrapper = render(
      <Button testID="basetest" text="" loading onPress={mockOnPress} />,
    );

    const touchable = _wrapper.getByTestId('basetest_button_touchable');
    fireEvent(touchable, 'onPress');

    expect(mockOnPress).not.toBeCalled();
  });

  it('should not trigger onPress on disabled', () => {
    const mockOnPress = jest.fn();
    const _wrapper = render(
      <Button testID="basetest" text="" disabled onPress={mockOnPress} />,
    );

    const touchable = _wrapper.getByTestId('basetest_button_touchable');
    fireEvent(touchable, 'onPress');

    expect(mockOnPress).not.toBeCalled();
  });
});
