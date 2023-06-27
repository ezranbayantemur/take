import React from 'react';
import {render} from '@testing-library/react-native';
import CartCard from './CartCard';
import productsData from '@mocks/products_for_category.json';
import {Product} from '@types';

const mockData: Product = productsData[2];

let wrapper: ReturnType<typeof render>;

// TODO: Add tests
describe('CartCard unit tests', () => {
  beforeEach(() => {
    wrapper = render(<CartCard testID="test" product={mockData} />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
