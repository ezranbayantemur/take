import {renderHook, act} from '@testing-library/react-hooks';
import useFuseSearch from './useFuseSearch';
import products from '@mocks/products_for_category.json';

const options = {
  keys: ['product_name'],
  threshold: 0.1,
};

describe('useFuseSearch', () => {
  it('should return initial results as empty array', () => {
    const {result} = renderHook(() => useFuseSearch(products, options));

    expect(result.current.result).toEqual(products);
  });

  it('should update the search results based on the query', () => {
    const {result} = renderHook(() => useFuseSearch(products, options));

    act(() => {
      result.current.search('iphone');
    });

    expect(result.current.result).toMatchObject([products[1], products[0]]);
  });

  it('should return empty array if no search result found', () => {
    const {result} = renderHook(() => useFuseSearch(products, options));

    act(() => {
      result.current.search('xyz');
    });

    expect(result.current.result).toEqual([]);
  });

  it('should initial array if search text is empty array', () => {
    const {result} = renderHook(() => useFuseSearch(products, options));

    act(() => {
      result.current.search('iphone');
    });

    expect(result.current.result).toMatchObject([products[1], products[0]]);

    act(() => {
      result.current.search('');
    });

    expect(result.current.result).toEqual(products);
  });
});
