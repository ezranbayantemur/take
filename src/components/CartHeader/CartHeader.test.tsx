import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import CartHeader from './CartHeader';
import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import routes from '@route';

const mockOnProductSelect = jest.fn();
const mockStore = configureMockStore();
const mockNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: mockNavigate,
    }),
  };
});

const store = mockStore({
  cart: {
    productsInCart: [
      {
        id: 0,
      },
      {
        id: 1,
      },
    ],
  },
});

let wrapper: ReturnType<typeof render>;

describe('CategoryCard unit tests', () => {
  beforeEach(() => {
    wrapper = render(
      <Provider store={store}>
        <CartHeader />
      </Provider>,
    );
    mockOnProductSelect.mockClear();
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render product count correctly', () => {
    expect(wrapper.queryByText('2')).not.toBeNull();
  });

  it('should navigate to cart page on press', () => {
    const touchable = wrapper.getByTestId('cartheader_touchable');
    fireEvent(touchable, 'onPress');

    expect(mockNavigate).toBeCalledWith(routes.CART);
  });
});
