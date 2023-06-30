import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import ErrorPage from './ErrorPage';

const mockOnRetry = jest.fn();

let wrapper: ReturnType<typeof render>;

describe('ErrorPage unit tests', () => {
  beforeEach(() => {
    wrapper = render(
      <ErrorPage message="test error message" onRetry={mockOnRetry} />,
    );
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render default message correctly', () => {
    wrapper.rerender(<ErrorPage onRetry={mockOnRetry} />);
    expect(wrapper.queryByText('Bir problem oluştu')).not.toBeNull();
  });

  it('should render custom message correctly', () => {
    expect(wrapper.queryByText('test error message')).not.toBeNull();
  });

  it('should trigger onRetry correctly', () => {
    const retry = wrapper.getByText('Tekrar Dene');

    fireEvent(retry, 'onPress');

    expect(mockOnRetry).toBeCalled();
  });
});
