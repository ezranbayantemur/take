import React from 'react';
import {render} from '@testing-library/react-native';
import SearchBar from './SearchBar';

const mockOnSearch = jest.fn();

let wrapper: ReturnType<typeof render>;

describe('SearchBar unit tests', () => {
  beforeEach(() => {
    wrapper = render(<SearchBar testID="test" onSearch={mockOnSearch} />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render default placeholder correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render custom placeholder correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should trigger search correctly', () => {});

  it('should trigger search with default debounce correctly', () => {});

  it('should trigger search with custom debounce correctly', () => {});
});
