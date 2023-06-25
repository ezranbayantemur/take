import React from 'react';
import Fuse from 'fuse.js';

const useFuseSearch = <T>(data: T[], options: Fuse.IFuseOptions<T>) => {
  const [result, setResult] = React.useState<T[] | null>(null);
  const fuse = React.useMemo(() => new Fuse(data, options), [data, options]);

  React.useEffect(() => {
    if (!result && data.length > 0) {
      setResult(data);
    }
  }, [data, result]);

  const search = React.useCallback(
    (query: string) => {
      if (query === '') {
        setResult(data);
        return;
      }

      const search_result = fuse.search(query);
      setResult(search_result.map(item => item.item));
    },
    [data, fuse],
  );

  return {result, search};
};

export default useFuseSearch;
