import React from 'react';
import {render} from '@testing-library/react-native';
import Splash from '../Splash';

describe('Splash tests', () => {
  let wrapper: ReturnType<typeof render>;

  beforeEach(() => {
    wrapper = render(<Splash />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
