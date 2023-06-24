import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import SearchBar from './SearchBar';

const mockOnSearch = jest.fn();

let wrapper: ReturnType<typeof render>;

jest.useFakeTimers();
describe('SearchBar unit tests', () => {
  beforeEach(() => {
    wrapper = render(<SearchBar testID="test" onSearch={mockOnSearch} />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render default placeholder correctly', () => {
    expect(wrapper.queryByPlaceholderText('Ara...')).not.toBeNull();
  });

  it('should render custom placeholder correctly', () => {
    wrapper.rerender(
      <SearchBar
        testID="test"
        onSearch={mockOnSearch}
        placeholder="Ürün ara..."
      />,
    );
    expect(wrapper.queryByPlaceholderText('Ürün ara...')).not.toBeNull();
  });

  it('should trigger search correctly', () => {
    const input = wrapper.getByTestId('test_searchbar_input');
    fireEvent(input, 'onChangeText', 'test');
    jest.advanceTimersByTime(200);

    expect(mockOnSearch).toHaveBeenCalledWith('test');
  });

  it('should trigger search with default debounce correctly', () => {
    const input = wrapper.getByTestId('test_searchbar_input');
    fireEvent(input, 'onChangeText', 'test');
    jest.advanceTimersByTime(200);

    expect(mockOnSearch).toHaveBeenCalledWith('test');
  });

  it('should trigger search with custom debounce correctly', () => {
    wrapper.rerender(
      <SearchBar testID="test" onSearch={mockOnSearch} debounceTime={500} />,
    );
    const input = wrapper.getByTestId('test_searchbar_input');
    fireEvent(input, 'onChangeText', 'test');
    jest.advanceTimersByTime(500);

    expect(mockOnSearch).toHaveBeenCalledWith('test');
  });
});
