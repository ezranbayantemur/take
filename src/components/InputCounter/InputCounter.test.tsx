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
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
